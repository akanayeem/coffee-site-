/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}




/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))





/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)




/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.popular__swiper',{
    loop: true,
    grabCursor:true,
    spaceBetween:32,
    slidesPerView:'auto',
    centerdSlides:'auto',

    breakpoints:{
        1150:{
            spaceBetween:80,
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*='+ sectionId +']')


              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
              }else{
                sectionsClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll',scrollActive)




/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,  
    //reset:true//
})
sr.reveal(`.popular__swiper,.footer__container`)
sr.reveal(`.home__shape`,     {origin: 'bottom'})
sr.reveal(`.home__coffee`,    {delay: 1000, distance:'200px',duration:2000})
sr.reveal(`.home__splash`,    {delay:1600,scale:0,duration:1500})
sr.reveal(`.home__bean-1`,    {delay:2200,scale:0,duration:1500,rotate:{z:180}})
sr.reveal(`.home__bean-2`,    {delay:2200,scale:0,duration:1500,rotate:{z:180}})
sr.reveal(`.home__ice-1`,     {delay:2600,scale:0,duration:1500,rotate:{z:180}})
sr.reveal(`.home__ice-2`,     {delay:2600,scale:0,duration:1500,rotate:{z:180}})
sr.reveal(`.home__leaf`,      {delay:2800,scale:0,duration:1500,rotate:{z:90}})
sr.reveal(`.home__title`,     {delay:3500})
sr.reveal(`.home__data`,      {delay:4000})
sr.reveal(`.home__sticker`,   {delay:4000})
sr.reveal(`.about__data`,     {origin: 'left'})
sr.reveal(`.about__images`,   {origin: 'right'})
sr.reveal(`.about__coffee`,   {delay: 1000})
sr.reveal(`.about__leaf-1`,   {delay: 1400, rotate :{z: 90}})
sr.reveal(`.about__leaf-2`,   {delay: 1400, rotate :{z: 90}})
sr.reveal(`.products__card`,  {interval:100})
sr.reveal(`.contact__shape`,    {delay:600,scale:0})
sr.reveal(`.contact__delivary`,    {delay:1200})





