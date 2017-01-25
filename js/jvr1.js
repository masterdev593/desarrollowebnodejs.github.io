$(document).ready(function() {
    init();
});
function init() {
    var now = moment();
    now.locale('es');
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
}
