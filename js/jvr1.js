  $(document).ready(function() {
            init();
        });
        function init() {
            $('#navbar-collapse ul li a').click(function() {
                $('.close:visible').click();
            });
            $(window).scroll(function() {
                var offset_t = $(".close").offset().top - $(window).scrollTop();
                console.log(offset_t);
                 if ($(".close").offset().top > 5) {
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
