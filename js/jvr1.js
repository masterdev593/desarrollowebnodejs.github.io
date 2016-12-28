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
                color: '#f8f8f8',
                connectParticles: true
            });
            $('[data-toggle="tooltip"]').tooltip();
        }
