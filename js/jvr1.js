  $(document).ready(function() {
            init();
        });
        function init() {
            $('#navbar-collapse ul li a').click(function() {
                $('.close:visible').click();
            });
            $(window).scroll(function() {
                 if ($(".close").offset().top > 40) {
                    $("#navbar-collapse").removeClass("in");
                    $(".close").blur();
                } 
            });
            Particles.init({
                selector: '#particulas',
                color: '#2CA0C7',
                connectParticles: true
            });
            $('#hache1').addClass('animated bounceInUp');
        }
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })
