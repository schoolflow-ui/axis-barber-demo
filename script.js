
/* QuickSite — interakcje strony AXIS Barber */

// Automatyczna aktualizacja roku w stopce
const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();
    footer.dataset.year = year;
}

// Płynne pojawianie się sekcji podczas przewijania
const sections = document.querySelectorAll(
    ".intro, #uslugi, #cennik, #kontakt"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach((section) => {
        section.classList.add("reveal");
        observer.observe(section);
    });
}
