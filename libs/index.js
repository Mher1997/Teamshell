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

// $(document).ready(function () {
//     setTimeout(function () {
//         const videos = document.getElementsByTagName('video');
//         for(let i=0; i<videos.length; i++){
//             videos[i].play();
//         }
//     })
// }, 1000);