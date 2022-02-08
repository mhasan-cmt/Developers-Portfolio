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


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 