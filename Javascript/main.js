$('.ui.sidebar').sidebar({
    dimPage: false,
    onVisible: function() {
        $('#mainContent').css('padding-left', '300px'); // Width of the open sidebar
    },
    onHidden: function() {
        $('#mainContent').css('padding-left', '100px'); // Width of the closed sidebar
    }
});

// JavaScript to handle the button click event to toggle the sidebar
$('#toggleSidebar').on('click', function() {
    // $('.ui.sidebar').toggleClass('slim');
    $('.ui.sidebar').sidebar('toggle');
});