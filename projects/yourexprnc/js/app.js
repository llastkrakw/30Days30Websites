var menuElement = document.querySelectorAll('.menu-element');

for (i = 0; i < menuElement.length; i++) {

    menuElement[i].addEventListener('click', (e) => {

        for (i = 0; i < menuElement.length; i++) {
            menuElement[i].classList.remove('active');
        }

        e.target.classList.toggle('active');

    }, false);

}