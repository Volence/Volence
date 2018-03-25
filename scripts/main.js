// Unchecking the checkbox when navigating to different parts of the site
const navItem = $(".navigation__item");
const checkedBox = $("#navi-toggle");
navItem.click(function(){
    checkedBox.prop('checked', false);
});

var lastScrollTop = 0;

$(window).scroll(function(){
    if ($(window).width() <= 800){	
        $(".header__text-box").css("opacity", 1 - $(window).scrollTop() / 250);
	} else {
    $(".header__text-box").css("opacity", 1 - $(window).scrollTop() / 350);
  }
});