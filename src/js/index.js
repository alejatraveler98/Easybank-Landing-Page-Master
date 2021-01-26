const menuToggle = document.getElementById('menu-nav');
let   mediaQuery = window.matchMedia("(min-width:1000px)");
let   mainNav    = document.getElementById('main-nav')
let   mainLink   = document.querySelector('.main-nav__link');


menuToggle.addEventListener('click', ()=> {
    menu()
})

mediaQuery.addEventListener('change', (e)=>{
    media(e)
})

const menu = () => {
    document.body.classList.toggle('overflow-hidden')
    mainNav.classList.toggle('display-block');
    mainNav.classList.toggle('display-none');
}

