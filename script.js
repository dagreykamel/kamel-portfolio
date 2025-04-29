< script >
    let lastScrollY = window.scrollY;
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
            if (window.scrollY < lastScrollY) {
                // ki ttl3 ywrilk footer
                footer.classList.add('show');
            } else {
                // ki thwd ywrilk footer
                footer.classList.remove('show');
            }
            lastScrollY = window.scrollY;
});
            </script>;
