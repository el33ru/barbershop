$(function() {
    $("#date-id").flatpickr({
        dateFormat: "d.m.Y"
    });
});

$(function() {
    $("#time-id").flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
    });
});