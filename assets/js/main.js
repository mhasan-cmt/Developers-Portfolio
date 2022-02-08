/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show_menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu');
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link');
function linkAction(){
    const   vMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show_menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0;i < skillsContent.length;i++){
        skillsContent[i].className = 'skills_content skills_closed';
    };
    if(itemClass === 'skills_content skills_closed'){
        this.parentNode.className = 'skills_content skills_active';
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active');
        });

        target.classList.add('qualification_active');

        tabs.forEach(tab=>{
            tab.classList.remove('qualification_active')
        });
        tab.classList.add('qualification_active')
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
modalBtns = document.querySelectorAll('.services_button'),
modalCloses = document.querySelectorAll('.services_close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('modal_active');
}
modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', function(){
        modal(i);
        console.log(i);
    })
});
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('modal_active');
        });
    })
});



/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial_container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    breakpoints:{
        568:{
            slidesPerView:2
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const section = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    section.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        if(scrollY >  sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link');
        }else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 80){
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 
const themeToggleButton = document.getElementById('theme-toggle');
const darkTheme= 'dark_theme';
const iconTheme = 'uil-sun';

//previosuly selected
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//get current theme
const getCurrentTheme = ()=>{
    if(document.body.classList.contains(darkTheme)){
        return 'dark';
    }else{
        return 'light';
    }
}
//get current icon
const getCurrentIcon = ()=>{
    if(themeToggleButton.classList.contains(iconTheme)){
        return 'uil-moon';
    }else{
        return 'uil-sun'
    }
}
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeToggleButton.classList[selectedIcon == 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Manually toggle theme 
themeToggleButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeToggleButton.classList.toggle(iconTheme);
    //save the choices
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
    console.log(getCurrentTheme());
    console.log(getCurrentIcon());
});