// This file manages the functionality related to the events section, such as filtering or displaying event details.

document.addEventListener('DOMContentLoaded', () => {
    const eventsList = document.getElementById('events-list');
    const filterButtons = document.querySelectorAll('.filter-button');

    // Function to fetch and display events
    const fetchEvents = async () => {
        try {
            const response = await fetch('/path/to/events/api'); // Replace with actual API endpoint
            const events = await response.json();
            displayEvents(events);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    // Function to display events
    const displayEvents = (events) => {
        eventsList.innerHTML = '';
        events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.classList.add('event-item');
            eventItem.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <p>${event.location}</p>
                <p>${event.description}</p>
                <a href="${event.ticketLink}" class="ticket-link">Buy Tickets</a>
            `;
            eventsList.appendChild(eventItem);
        });
    };

    // Event listener for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterEvents(category);
        });
    });

    // Function to filter events
    const filterEvents = (category) => {
        const allEvents = Array.from(eventsList.children);
        allEvents.forEach(event => {
            if (category === 'all' || event.dataset.category === category) {
                event.style.display = 'block';
            } else {
                event.style.display = 'none';
            }
        });
    };

    // Initial fetch of events
    fetchEvents();
});