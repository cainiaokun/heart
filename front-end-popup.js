
( function( $ ) {


        $(document).ready(function () {
            if(window.location.hash == '#close-popup'){
                $('body').removeClass('open_coockie');
            }else {

                $('body.open_coockie').addClass('no_before');

                $('div.elementor_popup_overlay').parents('section').addClass('no_blur');

                $('div.elementor_popup_overlay').removeClass('hide');
                $('div.elementor_popup_overlay').addClass('active');

                $('div.elementor_popup_overlay .close_popup').on('click', function (e) {

                    e.preventDefault();

                    $('body').removeClass('open_coockie');

                    $('div.elementor_popup_overlay').removeClass('active');
                    $('div.elementor_popup_overlay').addClass('hide');
                });

                $('div.elementor_popup_overlay .close_button').on('click', function (e) {

                    e.preventDefault();

                    $('body').removeClass('open_coockie');

                    $('div.elementor_popup_overlay').removeClass('active');
                    $('div.elementor_popup_overlay').addClass('hide');
                });
            }

        });

} )(jQuery)
