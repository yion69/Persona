let scrollButton = document.querySelector('#scrollUp');

scroll =()=> {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollButton.style.display = "block";
    }
    else {
        scrollButton.style.display = 'none';
    }
}

window.onscroll = function() {
    scroll();
}
scrollButton.addEventListener('click',(e)=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Scroll To Top button hover and touch 
scrollButton.addEventListener('touchstart',()=>{
    scrollButton.style.transform = 'translateY(-10px)';
    scrollButton.style.fill = '#33a474';
})
scrollButton.addEventListener('touchend',()=>{
    scrollButton.style.transform = 'translateY(0px)';
    scrollButton.style.fill = '';
})
scrollButton.addEventListener('touchcancel',()=>{
    scrollButton.style.transform = 'translateY(0px)';
    scrollButton.style.fill = '';
})

scrollButton.addEventListener('mouseover',()=>{
    scrollButton.style.transform = 'translateY(-10px)';
    scrollButton.style.transition = 'transform 0.5s, fill 0.3s';
    scrollButton.style.fill = '#33a474';
})
scrollButton.addEventListener('mouseout',()=>{
    scrollButton.style.transform = 'translateY(0px)';
    scrollButton.style.transition = 'transform 0.5s, fill 0.3s';
    scrollButton.style.fill = '';
})