window.onload = function() {
    createCalendar();
}


function createCalendar() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: {
            url: 'https://tobias-roth.dev/calendar/events' + '?land=' + 'BW'
        }
    });
    calendar.render();
}