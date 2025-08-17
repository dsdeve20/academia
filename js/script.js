new WOW().init();

const hamburger = document.querySelector('.hamburger')
const links = document.querySelector('.links')
hamburger.addEventListener('click',function(){
    if(!links.classList.contains('linkscss')){
        links.classList.add('linkscss')
    }
    else{
        links.classList.remove('linkscss')
    }
})

 const customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
   
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

