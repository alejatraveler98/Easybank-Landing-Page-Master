const menuToggle = document.getElementById('menu-nav');
let   mediaQuery = window.matchMedia("(min-width:1000px)");
let   mainNav    = document.getElementById('main-nav')
menuToggle.addEventListener('click', ()=> {
    menu()
})

mediaQuery.addEventListener('change', (e)=>{
    media(e)
})

const menu = () => {
    // document.body.style.overflowY ="hidden";
    document.body.classList.toggle('overflow-hidden')
    mainNav.classList.toggle('display-block');
    mainNav.classList.toggle('display-none');
}

const media=(e) =>{
 if(e.matches){
    // document.body.style.overflowY ="scroll";
 }
}
// function menu() {
//     document.body.style.overflowY ="hidden"
// }