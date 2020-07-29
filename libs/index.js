$('#mob-menu-icon').click(function () {
    $('#mobile-menu').css('display', 'block');
})

$('#menu-close').click(function () {
    $('#mobile-menu').css('display', 'none');
})

$('#mobile-nav').click(function () {
    $('#mobile-menu').css('display', 'none');
})

const ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') == -1) {
        $('.with-play-icon').each(function () {
            $(this).addClass('safary-icon');
        })
    }
}


$(document).ready(function (){
    setTimeout(function () {
        let videos = document.getElementsByTagName("video");
        for (let index = 0; index < videos.length; index++) {
            $(videos[index])[0].play();
        }
        $("video[autoplay]").each(function(){ this.play(); });
        
    }, 5000)
})