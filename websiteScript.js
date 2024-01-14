// var tween1 = KUTE.to('#w1', {path:'#t1'}, {duration: 5000}, {repeat: 999}).start();

// scroll sections
window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}