
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

    let navbarElements = $('.ui.menu').find('*');
    let navbarImageWrap = $('#navbar-image-container').find('*');

        function adjustStyles() {
            if (window.matchMedia("(min-width: 300px) and (max-width: 601px)").matches) {
                $('.ui.three.cards .card').css({
                    'display': 'flex',
                    'flex-direction': 'column',
                    'width': '100%'
                });
    
                $('#media_container_id').css({
                    'width': '100%'
                });

                $(navbarElements).css({
                    'padding': '0'
                })

                $(navbarImageWrap).hide();

                $('#spacer').hide();
            } else {
                // Reset the styles if screen width is not between 300px and 601px
                $('.ui.three.cards .card').css({
                    'display': '',
                    'flex-direction': '',
                    'width': ''
                });
    
                $('.ui.container').css({
                    'width': ''
                });

                $(navbarElements).css({
                    'padding': ''
                })

                $(navbarImageWrap).show();

                $('#spacer').show();
            }

            if (window.matchMedia("(max-width: 765px)").matches) {
                $('.ui.container').addClass('custom-width');
            } else {
                $('.ui.container').removeClass('custom-width');
            }
        }
    
        // Adjust the styles when the page loads
        adjustStyles();
    
        // Adjust the styles when the window is resized
        $(window).resize(adjustStyles);


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
            if (user.status === 'Active') {
                $tr.addClass('positive');
            } else if (user.status === 'Inactive') {
                $tr.addClass('negative');
            }
        });
    });

    // Search functionality
    $('input[type="text"]').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $(".ui.table tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
