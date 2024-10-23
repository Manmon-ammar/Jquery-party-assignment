// ? left menu
 
const leftMenuWidth =  $(".left-menu").outerWidth();
$(".open").on('click' , function(){
    $(".left-menu").animate({left:`0px`} , 500 , "linear");
    $(".open").animate({"margin-left": `${leftMenuWidth}px`},500 , "linear");
});
$(".close").on('click' , function(){
    $(".left-menu").animate({left:`-${leftMenuWidth}px`} , 500 , "linear");
    $(".open").animate({"margin-left": `0`},500 , "linear");
})

// & smooth scroll to section
$(".links a").on('click' , function(){
    const section = $(this).attr('href');
    const sectionTop = $(section).offset().top;
    $('html, body').animate({scrollTop: sectionTop}, 2000 , "linear");
});

// ^ accordion

$(".accordion-header").click(function() {
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle(500);
    $(".accordion-header").not(this).removeClass("active").next(".accordion-content").slideUp(500);
});

// * count down
let eventDate = new Date("Oct 25, 2024 00:00:00").getTime();
let countDownInterval = setInterval(function(){
    let now = new Date().getTime();
    let timeLeft = eventDate - now;
    let days = Math.floor(timeLeft/(24*60*60*1000));
    let hours = Math.floor((timeLeft%(24*60*60*1000))/(60*60*1000));
    let minutes = Math.floor((timeLeft%(24*60*60*1000))/(60*1000));
    let seconds = Math.floor((timeLeft%(24*60*60*1000))/(1000));
    $(".days").text(days+" D");
    $(".hours").text(hours+" h");
    $(".minutes").text(minutes+" m");
    $(".seconds").text(seconds+" s");
    if(timeLeft < 0){
        clearInterval(countDownInterval);
        $(".days").text("00 D");
        $(".hours").text("00 h");
        $(".minutes").text("00 m");
        $(".seconds").text("00 s");
    }
},1000);

// ! text area
let maxLength = 100;
$("textarea").on('input', function(){
    let textLength = $(this).val().length;
    let charLeft = maxLength - textLength;
    if(charLeft <= 0){
        $("form p").addClass("text-danger")
        $("form p").text("your available characters finished");
    } else{
        $("form p").removeClass("text-danger")
        $("form p").html(`<span class="charCounter text-danger">${charLeft}</span> <span class="textMessage">character remaining</span>`);
    }
})