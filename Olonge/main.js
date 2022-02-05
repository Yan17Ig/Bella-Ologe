let menuBurger = document.querySelector('.menu-burger'),
    contactsList = document.querySelector('.navigation'),
    span = document.querySelector('.menu-burger-span'),
    spanBefore = document.querySelector('.menu-burger-before'),
    spanAfter = document.querySelector('.menu-burger-after'),
    lock = document.querySelector('body'),
    list = document.querySelector('.navigation-list'),
    all = document.querySelector('.header-wrap');

menuBurger.addEventListener('click', () => {
    lock.classList.toggle('active');
    all.classList.toggle('active');
    menuBurger.classList.toggle('active');
    list.classList.toggle('active');
    contactsList.classList.toggle('active');
    span.classList.toggle('active');
    spanAfter.classList.toggle('active');
    spanBefore.classList.toggle('active');
});