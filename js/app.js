// Initialization of variable for future in the code.
const navbar_list = document.querySelector("#navbar__list");
const landing__containers = document.getElementsByClassName("landing__container");
let navbar_listInnerHTML = '';


// For loop which builds the innerHTML for nav bar
for (let i = 0; i < landing__containers.length; i++) {
    navbar_listInnerHTML += `<li id="nav-section-${i + 1}" class="navbar"><a href="#section${i + 1}">Section ${i + 1}</a></li>`;
}

//Add the above innerHTML to navbar
navbar_list.innerHTML = navbar_listInnerHTML;

document.querySelectorAll('a').forEach(function (e ) {
    e.addEventListener("click",function (element) {
            element.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior:"smooth"
            });
    });
});


//Style the Header to make it look nice for various devices
document.querySelector('.page__header').style.cssText = "font-size:2.0vh; background-color:black;";

// Loop through the navbar and style it appropriately
document.querySelectorAll('.navbar').forEach(function (li) {
    li.style.cssText = "padding:0.8vw;";

    let anchor = li.firstElementChild;
    anchor.style.cssText = "text-decoration:none; color:white;";
});

// Helper Function to infer whether the element is in Viewport or not
function isInViewPort(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fire onscroll event to this function
window.onscroll = function () {

    // //Check if the user scrolled and then apply condition
    // if (window.pageYOffset === navbar_list.offsetTop) {
    //     navbar_list.style.display = "block";
    // } else {
    //     navbar_list.style.display = "none";
    // }

    //Check for header of each section, if the header is inside viewport then change the background of the section
    document.querySelectorAll('.landing__container h2').forEach(function (e) {
        if (isInViewPort(e)) {
            e.parentElement.parentElement.classList.add('your-active-class')
        } else {
            e.parentElement.parentElement.classList.remove('your-active-class');
        }
    });
};
