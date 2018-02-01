// Unchecking the checkbox when navigating to different parts of the site
const navItem = $(".navigation__item");
const checkedBox = $("#navi-toggle");
navItem.click(function(){
    checkedBox.prop('checked', false);
});