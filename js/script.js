$(document).ready(function () {
    //Menu
    $(".menu-icon").click(function (e) { 
        e.preventDefault();
        $(".menu-bar").addClass("active");
        $(".cover").addClass("active");
    });
    $(".cover").click(function (e) { 
        e.preventDefault();
        $(".menu-bar").removeClass('active');
        $(".cover").removeClass('active');
    });
    $(".menu-close").click(function (e) { 
        e.preventDefault();
        $(".menu-bar").removeClass('active');
        $(".cover").removeClass('active');
    });
    // Search 
    $(".fa-search").click(function (e) { 
        e.preventDefault();
        $(this).find('.form-search').toggle('show');
        $(this).siblings().toggle('hide');    
    });
    //Scroll menu 
    $(window).scroll(function () { 
        if ($(window).scrollTop()) {
            $('.header').css('background-color','rgba(0, 0, 0, 1)');
        } else {
            $('.header').css('background-color','rgba(0, 0, 0, 0.6)');
        }
    });

    // Slick slider
    $('.slider').slick({
        arrows: false,
    });
    // Slick client
    $('.client__list').slick({
        dots: true,
        arrows: false,
    });
});