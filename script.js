/**
 * Vedant Gophane Portfolio - Interactive Animations & Dynamic Intro
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Rotating Hero Titles / Intro phrases
    const rotatingSubtitles = [
        "Specializing in EHT Electrical Design & BIM",
        "Accelerating Design Workflows with Custom Excel Macros & AI",
        "Ensuring Compliance with IECEx, ATEX, IS, IEC & NEC Standards",
        "Coordinating Refinery EPC Projects from Concept to Site Execution"
    ];

    let currentIndex = 0;
    const tagElement = document.querySelector(".spec-tag");
    
    if (tagElement) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % rotatingSubtitles.length;
            tagElement.style.opacity = "0";
            setTimeout(() => {
                tagElement.innerHTML = `<span class="status-dot"></span> ${rotatingSubtitles[currentIndex]}`;
                tagElement.style.opacity = "1";
            }, 300);
        }, 4000);
        
        tagElement.style.transition = "opacity 0.3s ease-in-out";
    }

    // 2. Scroll-Triggered Reveal Animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".panel, .skill-card, .proj-card, .exp-item");
    animatedElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`;
        observer.observe(el);
    });

    // 3. Smooth Counter Animation for Metrics Bar
    const metricNums = document.querySelectorAll(".metric-num");
    let animated = false;

    const metricsSection = document.querySelector(".metrics-bar");
    if (metricsSection) {
        const metricsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    metricNums.forEach(num => {
                        const text = num.innerText;
                        if (text.includes("+")) {
                            let val = parseInt(text);
                            let current = 0;
                            const timer = setInterval(() => {
                                current++;
                                num.innerText = current + "+";
                                if (current >= val) {
                                    clearInterval(timer);
                                    num.innerText = val + "+";
                                }
                            }, 300);
                        }
                    });
                }
            });
        }, { threshold: 0.5 });

        metricsObserver.observe(metricsSection);
    }

    // 4. Interactive Resume Download Handler
    window.triggerResumeDownload = function() {
        alert("Preparing Vedant Gophane's Electrical Engineering Resume (PDF)... Link your resume file path in script.js!");
    };
});
