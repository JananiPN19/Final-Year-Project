$(document).ready(function()
{
    $('.post-wrapper').slick({
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        draggable :false,

        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,

                }
                },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,

                }
                },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow:3,
                slidesToScroll:2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }
        ]

    });


    $(".hide-content-tofel").click(function(){
        if($(".hidden-div-tofel").is(":hidden")){
            $(".hidden-div").slideUp(500);
            $(".sub-head-show").css("display", "inline");
            $(".hidden-div-tofel").slideDown(500);
        }
        else{
            $(".hidden-div").slideUp(500);
        }
    });
    $(".hide-content-gre").click(function(){
        if($(".hidden-div-gre").is(":hidden")){
            $(".hidden-div ").slideUp(500);
            $(".sub-head-show").css("display", "inline");
            $(".hidden-div-gre").slideDown(500);
        }
        else{
            $(".hidden-div").slideUp(500);
        }
    });
    $(".hide-content-cgpa").click(function(){
        if($(".hidden-div-cgpa").is(":hidden")){
            $(".hidden-div").slideUp(500);
            $(".sub-head-show").css("display", "inline");
            $(".hidden-div-cgpa").slideDown(500);
        }
        else{
            $(".hidden-div").slideUp(500);
        }
    });
    $(".hide-content-research").click(function(){
        if($(".hidden-div-research").is(":hidden")){
            $(".hidden-div").slideUp(500);
            $(".sub-head-show").css("display", "inline");
            $(".hidden-div-research").slideDown(500);
        }
        else{
            $(".hidden-div").slideUp(500);
        }
    });
  })

window.onload = function(){
  document.getElementById('tab1').style.backgroundColor = '#ec407a';
}
