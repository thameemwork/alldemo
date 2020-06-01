/*Form-line style*/
(function ($) {
// Form control border-bottom line
$('.blmd-line .form-control').bind('focus',function(){
$(this).parent('.blmd-line').addClass('blmd-toggled').removeClass("hf");
}).bind('blur',function(){
var val=$(this).val();
if(val){
$(this).parent('.blmd-line').addClass("hf");
}else{
$(this).parent('.blmd-line').removeClass('blmd-toggled');
}
})
})(jQuery);
/*Form-line style*/
/*Mobile Menu style*/
window.onload = function () {
window.jQuery
? $(document).ready(function () {
$(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(),
$("body").append("<div class='overlay'></div>"),
$(".navbar-toggle").on("click", function () {
$(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")),
$(".sideMenu, .overlay").toggleClass("open"),
$(".overlay").on("click", function () {
$(this).removeClass("open"), $(".sideMenu").removeClass("open");
});
}),
$(window).resize(function () {
$(".navbar-toggle").is(":hidden") ? $(".sideMenu, .overlay").hide() : $(".sideMenu, .overlay").show();
});
})
: console.log("sidebarNavigation Requires jQuery");
};
/*Mobile Menu style*/
/*top-move style*/
$(document).ready(function () {
$(window).scroll(function () {
var top =  $(".goto-top");
if ( $('body').height() <= (    $(window).height() + $(window).scrollTop() + 200 )) {
top.animate({"margin-left": "0px"},1500);
} else {
top.animate({"margin-left": "-100%"},1500);
}
});

$(".goto-top").on('click', function () {
$("html, body").animate({scrollTop: 0}, 1000);
});
});
/*top-move style*/
/*Active line*/
/*$( '#topheader .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});*/
/*Active line*/
/*Pause-slider*/
/*$(window).load(function() {
    $('.carousel').carousel('pause'); 
});*/
/*Pause-slider*/
