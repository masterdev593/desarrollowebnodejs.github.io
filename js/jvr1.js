$(document).ready(function() {
    init();
});
function init() {
    $('[data-toggle="tooltip"]').tooltip();
    setInterval(function(){
    var now = moment();
    now.locale('es');
    $('#dia').text(now.format('[quito,] DD [de] MMMM [del] YYYY - HH:mm:ss a'));     
    },1000);
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggler:visible').click();
    });
    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50)     {
        $(".fixed-top").addClass("top-nav-collapse");
    } else {
        $(".fixed-top").removeClass("top-nav-collapse");
    }
    });
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    var soundList = [
        'x.ogg',
        'y.ogg',
        'z.ogg'
    ];
    var isPlay = true;
    var audio = document.createElement('audio');
    audio.addEventListener('ended', pick);
    audio.volume = 0.5;
    function pick() {
        audio.src = 'ivr/audio/' + soundList[Math.floor(Math.random() * 3)];
        audio.play();
    }
    pick();

    $("#PlayPause").click(function() {
        isPlay 
            ? $(this).children('i').removeClass('fa fa-pause').addClass('fa fa-play-circle-o')
            : $(this).children('i').removeClass('fa fa-play-circle-o').addClass('fa fa-pause');
        isPlay ? audio.pause() : audio.play();
        isPlay = !isPlay;
    });

    $("#Shuffle").click(pick);
}
