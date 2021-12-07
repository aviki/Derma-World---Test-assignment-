const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('navbar-active');

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
