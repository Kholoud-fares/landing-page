/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections=Array.from(document.querySelectorAll('section'));
const bar=document.getElementById('navbar__list');
let numberOfSections=sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// create NavBar
function createNavBar(){
    for (section of sections){
        sectionName=section.getAttribute('data-nav');
        sectionLink=section.getAttribute('id');
        
        navItems=document.createElement('li');
        
        navItems.innerHTML=`<a class='menu__link' href='#${sectionLink}'>${sectionName} </a>`;
        bar.appendChild(navItems);
        
    }
}

// section dimension
function sectionInVeiwPort(){
    let sectionDim=section.getBoundingClientRect();
    return (sectionDim.top>=0)
}


//activeClass
function toggleActiveClass(){
    for(section of sections){
        if(sectionInVeiwPort(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }
        else{
            section.classList.remove('your-active-class');
        }
    }
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

   createNavBar();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

document.addEventListener('scroll',toggleActiveClass);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

