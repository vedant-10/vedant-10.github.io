document.addEventListener("DOMContentLoaded", () => {

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const rotatingSubtitles = [
"EHT Electrical Design",
"Engineering Automation",
"Refinery EPC Projects",
"Electrical BIM",
"Excel VBA Development"
];

let currentIndex = 0;

const tag =
document.querySelector(".spec-tag");

setInterval(() => {

currentIndex =
(currentIndex + 1) %
rotatingSubtitles.length;

tag.innerHTML =
`<span class="status-dot"></span>
${rotatingSubtitles[currentIndex]}`;

}, 3000);

const reveals =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

reveals.forEach(item => {

observer.observe(item);

});

const metrics =
document.querySelectorAll(".metric-num");

let animated = false;

const metricsBar =
document.querySelector(".metrics-bar");

const metricsObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting && !animated){

animated = true;

metrics.forEach(metric => {

const endValue =
parseInt(metric.innerText);

let current = 0;

const step =
Math.max(
1,
Math.ceil(endValue / 50)
);

const timer =
setInterval(() => {

current += step;

if(current >= endValue){
current = endValue;
clearInterval(timer);
}

metric.innerText =
current + "+";

},25);

});

}

});

},{threshold:0.5});

metricsObserver.observe(metricsBar);

document.getElementById("year").textContent =
new Date().getFullYear();

});
