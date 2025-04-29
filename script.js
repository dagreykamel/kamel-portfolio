< script >
    let lastScrollY = window.scrollY;
const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
    const footer = document.queryselector('.footer');
    if ((window.scrollY + window.innerheight) >= document.body.offsetheight) {

        footer.classList.add('show');
    } else {
        
        footer.classList.remove('show');
    }

}); < /script>;
