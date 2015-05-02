/**
 * Created by Linas on 2015-04-30.
 */
$(document).ready(function () {

    var one = $("#slider_frame_1");
    var two = $("#slider_frame_2");
    var three = $("#slider_frame_3");
    var four = $("#slider_frame_4");
    var five = $("#slider_frame_5");

    var oneT=$("#slider_headline_1");
    var twoT=$("#slider_headline_2");
    var threeT=$("#slider_headline_3");
    var fourT=$("#slider_headline_4");
    var fiveT=$("#slider_headline_5");

    var lastFrame = one;

    var Slider = {
        slider: null,
        Start: function(){
            this.slider = setInterval(cycle, 7000);
        },
        Stop: function(){
            window.clearTimeout(this.slider);
        }
    };

    Slider.Start();

    $("#slider_nav_left").click(function () {
        left();
        restartTimer();
    });

    $("#slider_nav_right").click(function () {
        right();
        restartTimer();
    });

    function cycle() {
        right();
    }

    function restartTimer(){
        Slider.Stop();
        Slider.Start();
    }

    function right() {
        switch (lastFrame) {
            case one:
                one.animate({opacity: '0'}, 800);
                two.animate({opacity: '1'}, 800);
                oneT.animate({opacity: '0'}, 800);
                twoT.animate({opacity: '1'}, 800);
                lastFrame = two;
                break;
            case two:
                two.animate({opacity: '0'}, 800);
                three.animate({opacity: '1'}, 800);
                twoT.animate({opacity: '0'}, 800);
                threeT.animate({opacity: '1'}, 800);
                lastFrame = three;
                break;
            case three:
                three.animate({opacity: '0'}, 800);
                four.animate({opacity: '1'}, 800);
                threeT.animate({opacity: '0'}, 800);
                fourT.animate({opacity: '1'}, 800);
                lastFrame = four;
                break;
            case four:
                four.animate({opacity: '0'}, 800);
                five.animate({opacity: '1'}, 800);
                fourT.animate({opacity: '0'}, 800);
                fiveT.animate({opacity: '1'}, 800);
                lastFrame = five;
                break;
            case five:
                five.animate({opacity: '0'}, 800);
                one.animate({opacity: '1'}, 800);
                fiveT.animate({opacity: '0'}, 800);
                oneT.animate({opacity: '1'}, 800);
                lastFrame = one;
                break;
        }
    }

    function left() {
        switch (lastFrame) {
            case one:
                one.animate({opacity: '0'}, 800);
                five.animate({opacity: '1'}, 800);
                oneT.animate({opacity: '0'}, 800);
                fiveT.animate({opacity: '1'}, 800);
                lastFrame = five;
                break;
            case two:
                two.animate({opacity: '0'}, 800);
                one.animate({opacity: '1'}, 800);
                twoT.animate({opacity: '0'}, 800);
                oneT.animate({opacity: '1'}, 800);
                lastFrame = one;
                break;
            case three:
                three.animate({opacity: '0'}, 800);
                two.animate({opacity: '1'}, 800);
                threeT.animate({opacity: '0'}, 800);
                twoT.animate({opacity: '1'}, 800);
                lastFrame = two;
                break;
            case four:
                four.animate({opacity: '0'}, 800);
                three.animate({opacity: '1'}, 800);
                fourT.animate({opacity: '0'}, 800);
                threeT.animate({opacity: '1'}, 800);
                lastFrame = three;
                break;
            case five:
                five.animate({opacity: '0'}, 800);
                four.animate({opacity: '1'}, 800);
                fiveT.animate({opacity: '0'}, 800);
                fourT.animate({opacity: '1'}, 800);
                lastFrame = four;
                break;
        }
    }
});