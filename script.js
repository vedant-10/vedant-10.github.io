document.addEventListener("DOMContentLoaded", () => {

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

if(menuToggle){

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}

const subtitles = [

"EHT Electrical Design",
"Engineering Automation",
"Electrical BIM",
"Refinery EPC Projects",
"Excel VBA Development"

];

let current = 0;

const tag =
document.querySelector(".spec-tag");

setInterval(() => {

current =
(current + 1) %
subtitles.length;

tag.innerHTML =
`<span class="status-dot"></span>
${subtitles[current]}`;

},3000);

const reveals =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

reveals.forEach(item => {

revealObserver.observe(item);

});

let metricAnimated = false;

const metricBar =
document.querySelector(".metrics-bar");

const metrics =
document.querySelectorAll(".metric-num");

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting && !metricAnimated){

metricAnimated = true;

metrics.forEach(metric => {

const finalValue =
parseInt(metric.textContent);

let current = 0;

const step =
Math.ceil(finalValue/40);

const timer =
setInterval(() => {

current += step;

if(current >= finalValue){

current = finalValue;

clearInterval(timer);

}

metric.textContent =
current + "+";

},25);

});

}

});

},{threshold:0.5});

if(metricBar){
observer.observe(metricBar);
}

document.getElementById("year").textContent =
new Date().getFullYear();

});
