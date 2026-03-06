// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');

        // Save theme preference
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // Citation Copy Functionality
    const citeButtons = document.querySelectorAll('.cite-button');

    citeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const citation = this.getAttribute('data-citation');

            // Copy to clipboard
            navigator.clipboard.writeText(citation).then(() => {
                // Change button text to show success
                const originalHTML = this.innerHTML;
                this.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied!
                `;

                // Reset button after 2 seconds
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy citation:', err);
                alert('Failed to copy citation. Please try again.');
            });
        });
    });
});