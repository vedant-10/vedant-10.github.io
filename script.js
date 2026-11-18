document.addEventListener("DOMContentLoaded", () => {

/* MOBILE MENU */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

if(menuToggle){

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}

/* CLOSE MENU AFTER CLICK */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

});

});

/* ROTATING SPECIALIZATION */

const subtitles = [

"EHT Electrical Design",
"Engineering Automation",
"Electrical BIM",
"Refinery EPC Projects",
"Excel VBA Development",
"Hazardous Area Engineering",
"Project Engineering"

];

let currentIndex = 0;

const specTag =
document.querySelector(".spec-tag");

if(specTag){

setInterval(() => {

currentIndex =
(currentIndex + 1) %
subtitles.length;

specTag.style.opacity = "0";

setTimeout(() => {

specTag.innerHTML =
`<span class="status-dot"></span>
${subtitles[currentIndex]}`;

specTag.style.opacity = "1";

},250);

},3500);

}

/* SCROLL REVEAL */

const reveals =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{
threshold:0.15
}

);

reveals.forEach(section=>{

revealObserver.observe(section);

});

/* COUNTER ANIMATION */

const statsSection =
document.querySelector(".metrics-bar");

let animated = false;

if(statsSection){

const statsObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !animated){

animated = true;

document
.querySelectorAll(".metric-num")
.forEach(counter=>{

const target =
parseInt(counter.textContent);

let current = 0;

const increment =
Math.ceil(target / 40);

const timer =
setInterval(()=>{

current += increment;

if(current >= target){

current = target;

clearInterval(timer);

}

counter.textContent =
current + "+";

},25);

});

}

});

},{threshold:0.5});

statsObserver.observe(statsSection);

}

/* YEAR */

const year =
document.getElementById("year");

if(year){

year.textContent =
new Date().getFullYear();

}

});
