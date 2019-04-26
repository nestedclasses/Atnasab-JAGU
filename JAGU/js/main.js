$(function () {

    // Countdown
    var countDownDate = new Date("may 5, 2019 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("day").innerHTML = days;
        document.getElementById("houre").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);


    // Typed 

    var typed = new Typed("#type", {
        strings: ["This is first feature", "This is second feature", "This is third feature"],
        smartBackspace: true, // Default value
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 500,
        loop: true,
        loopCount: Infinity,
    });


    // SETTINGS PANEL

    $('.btn-settings').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    $('.switch-handle').on('click', function () {
        $(this).toggleClass('active');
        $('.outer-wrapper').toggleClass('boxed');

    });

    $('.bg-list div').on('click', function () {
        if ($(this).hasClass('active')) return false;
        if (!$('.switch-handle').hasClass('active')) $('.switch-handle').trigger('click');

        $(this).addClass('active').siblings().removeClass('active');
        var cl = $(this).attr('class');
        $('body').attr('class', cl);
    });

    $('.color-list div').on('click', function () {
        if ($(this).hasClass('active')) return false;

        $('link.color-scheme-link').remove();

        $(this).addClass('active').siblings().removeClass('active');
        var src = $(this).attr('data-src'),
            colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');

        colorScheme
            .attr('href', src)
            .appendTo('head');
    });
    $(window).resize(function(){
        if ($(window).width() < 992){
            $('.rmid').attr('id',' ')
        } else {
            $('.rmid').attr('id','cubeTransition')
        }
    })
    if ($(window).width() < 992){
        $('.rmid').attr('id',' ')
    } else {
        $('.rmid').attr('id','cubeTransition')
    }



})(jQuery); // End of use strict


