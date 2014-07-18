// Tooltip for Share Icons
    $(function() {
        $('.fb-tooltip').tooltip({
            placement: 'top',
            title: 'Share on Facebook'
            });
    });
    $(function() {
        $('.tw-tooltip').tooltip({
            placement: 'top',
            title: 'Share on Twitter'
            });
    });
    $(function() {
        $('.gp-tooltip').tooltip({
            placement: 'top',
            title: 'Share on Google+'
            });
    });

// Go to Top Button
    $(document).ready(function(){
         $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#go-top').fadeIn();
                } else {
                    $('#go-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#go-top').click(function () {
                $('#go-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
    });

// Script for Responsive Videos
    $(document).ready(function(){
        $(".post").fitVids();
    });
    $(document).ready(

      function() { 

        $("html").niceScroll({cursorcolor:"#DF4949"});

      }
    );

// CSS3 Animation on Post Box
    $(window).scroll(function() {
        $('.home-template .post, .archive-template .post').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+700) {
                $(this).addClass("animated zoomIn");
            } else {
                $(this).removeClass("animated");
            }
        });
    });