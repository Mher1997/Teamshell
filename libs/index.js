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
let safari = ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1;

if (safari) {
    $('.with-play-icon').each(function () {
        $(this).addClass('safary-icon');
    })
}

if(safari){
    const videos = $('.video');
    for(let i=0; i<videos.length; i++){
        let parent = $(videos[i]).parent();
        let src = $(videos[i]).find('source').attr('src');
        const videClass = $(videos[i]).attr('class').indexOf('sm-media');
    
        src = src.replace('mp4', 'gif');
        parent.find('video').remove();
        
        let img = `<img src=${src} alt="gif" class=${videClass !==-1 ? 'sm-media' : ''}>`
        parent.append(img);
    }
}