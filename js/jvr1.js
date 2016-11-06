  $(document).ready(function() {
            init();
        });
        function init()
        {
            $('#navbar-collapse ul li a').click(function() {
                $('.navbar-toggler:visible').click();
            });
            $(window).scroll(function() {
                 if ($(".navbar-toggler").offset().top > 40) {
                    $("#navbar-collapse").removeClass("in");
                } 
            });
        }