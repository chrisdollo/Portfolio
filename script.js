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


// Gallery carousel code - commented out since gallery is now scrollable
// const galleryContainer = document.querySelector(".gallery-container");
// const galleryControlsContainer = document.querySelector(".gallery-controls");
// const galleryControls = ["previous", "next"];
// const galleryItems = document.querySelectorAll(".gallery-item");


// class Carousel {

//     constructor(container, items, controls){
//         this.carouselContainer = container;
//         this.carouselControls = controls;
//         this.carouselArray = [...items];
//     }

//     updateGallery(){
//         this.carouselArray.forEach(el => {
//             el.classList.remove("gallery-item-1");
//             el.classList.remove("gallery-item-2");
//             el.classList.remove("gallery-item-3");
//             el.classList.remove("gallery-item-4");
//             el.classList.remove("gallery-item-5");
//         });

//         this.carouselArray.slice(0,5).forEach((el, i) => {
//             el.classList.add(`gallery-item-${i + 1}`);
//         });
//     }

//     setCurrentState(direction){
//         if(direction.className == "gallery-controls-previous"){
//             this.carouselArray.unshift(this.carouselArray.pop());
//         }
//         else{
//             this.carouselArray.push(this.carouselArray.shift());
//         }
//         this.updateGallery();
//     }

//     setControls(){
//         this.carouselControls.forEach(control => {
//             galleryControlsContainer.appendChild(document.createElement("button")).className = `gallery-controls-${control}`;
//             document.querySelector(`.gallery-controls-${control}`).innerText = control;
//         });
//     }

//     useControls(){
//         const triggers = [...galleryControlsContainer.childNodes]
//         triggers.forEach(control => {
//             control.addEventListener("click", e => {
//                 e.preventDefault();
//                 this.setCurrentState(control);
//             });
//         });
//     }
// }






// const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

// exampleCarousel.setControls();
// exampleCarousel.useControls();
// exampleCarousel.updateGallery();