function countdownTimer() {
    // Set the target date (February 20, 2027)
    const targetDate = new Date("2026-09-23T14:00:00+01:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        // If the countdown is finished
        if (difference < 0) {
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("mins").innerText = "00";
            document.getElementById("secs").innerText = "00";
            clearInterval(timerInterval);
            return;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Output the results, padding single digits with a leading zero
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("mins").innerText = String(minutes).padStart(2, '0');
        document.getElementById("secs").innerText = String(seconds).padStart(2, '0');
    }

    // Update the countdown immediately on load, then every 1 second
    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
}

function mobileNavbar() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    // Toggle menu visibility
    function toggleMenu() {
        menuToggle.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-open');
        
        // Prevent body scrolling when the menu drawer is open
        document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close the menu automatically when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    mobileNavbar();
    countdownTimer();
});