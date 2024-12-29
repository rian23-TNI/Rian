let slideIndex = 0;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}   

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    
    function showMenu() {
        var menu = document.getElementById("menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }
    
    
    window.addEventListener("load", function () {
        var loading = document.getElementById("loading");
        loading.style.display = "none";
    });
    

    document.addEventListener('DOMContentLoaded', () => {
        showSlides();

        const form = document.getElementById('contact-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
           
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    });

    function showInfo() {
            alert('Saat ini tidak ada Navigasi!');
    }