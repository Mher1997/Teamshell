$('#mob-menu-icon').click(function () {
    $('#mobile-menu').css('display', 'block');
})

$('#menu-close').click(function () {
    $('#mobile-menu').css('display', 'none');
})

$('#mobile-nav').click(function () {
    $('#mobile-menu').css('display', 'none');
})

$(document).ready(function (){
    let videos = document.getElementsByTagName("video");
    for (let index = 0; index < videos.length; index++) {
        videos[index].play();
    }
})