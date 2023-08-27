/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


// $(document).ready(function() {
//     var skillsSection = $(".skills__data").offset().top - $(window).height() + 200; // Adjust the offset as needed
  
//     $(window).on("scroll", function() {
//       var progressBar = $(".skills__bar");
//       var percentageSpan = $(".skills__percentage");
  
//       if ($(window).scrollTop() > skillsSection) {
//         progressBar.addClass("fill");
//         percentageSpan.addClass("fill");
//       }
//     });
//   });




// // Get a reference to the skills section
// const skillsSection = document.querySelector('.skills-section');

// // Function to check if an element is in the viewport
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return rect.top < window.innerHeight && rect.bottom >= 0;
// }

// // Function to add animation class when skills section is in viewport
// function animateSkillsSection() {
//   if (isInViewport(skillsSection)) {
//     skillsSection.classList.add('animate');
//   }
// }

// // Add an event listener to trigger the animation check when scrolling
// window.addEventListener('scroll', animateSkillsSection);

// // Trigger the animation check on page load (in case the skills section is initially visible)
// animateSkillsSection();
