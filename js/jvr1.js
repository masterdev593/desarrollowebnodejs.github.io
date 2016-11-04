  $(document).ready(function() {
            init();
            console.log("init");
        });

        function init()
        {

            $('#navbar-collapse ul li a').click(function() {
                $('.navbar-toggler:visible').click();
            });


        }
        function navColapso()
        {
            //jQuery to collapse the navbar on scroll
            $(window).scroll(function() {
                 if ($(".navbar").offset().top > 50)     {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });
        }
      
