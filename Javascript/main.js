$('.ui.sidebar').sidebar({
    dimPage: false,
    onVisible: function() {
        // Adjust the width when the sidebar is open
        // $('#mainContent').css('width', 'calc(100% - 300px)'); 
        $('#mainContent').css('width', 'calc(100% - 260px)');
    },
    onHidden: function() {
        $('#mainContent').css('width', '100%'); // Adjust the width when the sidebar is closed
    }
});

// JavaScript to handle the button click event to toggle the sidebar
$('#toggleSidebar').on('click', function() {
    $('.ui.sidebar').sidebar('toggle');
});


$(document).ready(function() {
    $.getJSON('../users.json', function(users) {
        var $tableBody = $('.ui.table tbody');
        $.each(users, function(i, user) {
            var $tr = $('<tr>').append(
                $('<td>').text(user.name),
                $('<td>').text(user.email),
                $('<td>').text(user.userType),
                $('<td>').text(user.joined),
                $('<td>').text(user.status)
            );
            $tableBody.append($tr);
        });
    });
});