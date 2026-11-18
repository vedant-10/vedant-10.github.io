/**
 * Vedant Gophane Portfolio
 * Interactive Animations, Mobile Menu,
 * Resume Download & UX Enhancements
 */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       Dynamic Footer Year
    ===================================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    /* =====================================================
       Dynamic Rotating Hero Subtitle
    ===================================================== */

    const rotatingSubtitles = [
        "Specializing in EHT Electrical Design & BIM",
        "Accelerating Design Workflows with Custom Excel Macros & AI",
        "Ensuring Compliance with IECEx, ATEX, IS, IEC & NEC Standards",
        "Coordinating Refinery EPC Projects from Concept to Site Execution"
    ];

    let currentIndex = 0;

    const tagElement =
        document.querySelector(".spec-tag");

    if (tagElement) {

        tagElement.style.transition =
            "opacity 0.3s ease-in-out";

        setInterval(() => {

            currentIndex =
                (currentIndex + 1) %
                rotatingSubtitles.length;

            tagElement.style.opacity = "0";

            setTimeout(() => {

                tagElement.innerHTML =
                    `<span class="status-dot"></span>
                    ${rotatingSubtitles[currentIndex]}`;

                tagElement.style.opacity = "1";

            }, 300);

        }, 4000);
    }

    /* =====================================================
       Scroll Reveal Animations
    ===================================================== */

    if (
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                observerOptions
            );

        const animatedElements =
            document.querySelectorAll(
                ".panel, .skill-card, .proj-card, .exp-item"
            );

        animatedElements.forEach(
            (element, index) => {

                element.style.opacity = "0";

                element.style.transform =
                    "translateY(24px)";

                element.style.transition =
                    `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.05}s,
                     transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.05}s`;

                observer.observe(element);

            }
        );
    }

    /* =====================================================
       Metrics Counter Animation
    ===================================================== */

    const metricsSection =
        document.querySelector(".metrics-bar");

    const metricNums =
        document.querySelectorAll(".metric-num");

    let metricsAnimated = false;

    if (metricsSection) {

        const metricsObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting &&
                            !metricsAnimated
                        ) {

                            metricsAnimated = true;

                            metricNums.forEach(num => {

                                const text =
                                    num.innerText;

                                if (
                                    text.includes("+")
                                ) {

                                    const value =
                                        parseInt(text);

                                    if (
                                        !isNaN(value)
                                    ) {

                                        let current = 0;

                                        const timer =
                                            setInterval(
                                                () => {

                                                    current++;

                                                    num.innerText =
                                                        current +
                                                        "+";

                                                    if (
                                                        current >=
                                                        value
                                                    ) {

                                                        clearInterval(
                                                            timer
                                                        );

                                                        num.innerText =
                                                            value +
                                                            "+";
                                                    }

                                                },
                                                250
                                            );
                                    }
                                }

                            });

                        }

                    });

                },
                {
                    threshold: 0.5
                }
            );

        metricsObserver.observe(
            metricsSection
        );
    }

    /* =====================================================
       Mobile Navigation Auto Close
    ===================================================== */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    const nav =
                        document.querySelector(
                            ".nav-links"
                        );

                    if (nav) {
                        nav.classList.remove(
                            "show"
                        );
                    }

                }
            );

        });

    /* =====================================================
       Scroll To Top Button
    ===================================================== */

    const topBtn =
        document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 400) {

                    topBtn.style.display =
                        "block";

                } else {

                    topBtn.style.display =
                        "none";

                }

            }
        );

        topBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }
});

/* =====================================================
   Resume Download
===================================================== */

window.triggerResumeDownload =
function () {

    window.open(
        "Vedant_Gophane_Resume.pdf",
        "_blank"
    );

};

/* =====================================================
   Mobile Menu Toggle
===================================================== */

function toggleMenu() {

    const nav =
        document.querySelector(
            ".nav-links"
        );

    if (nav) {

        nav.classList.toggle(
            "show"
        );

    }

}
