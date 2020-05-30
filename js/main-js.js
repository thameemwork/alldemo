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
