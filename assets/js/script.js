document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener("scroll", changeActiveLink);

    // Navbar
    const sections = document   .querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const navbar = document.querySelector(".navbar");
    const sectionHome = document.querySelector("#home"); 

    function changeActiveLink() {
        let scrollPosition = window.scrollY + 100;
    
        sections.forEach(function (section) {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                console.log(section.offsetTop)
                navLinks.forEach(navLink => {
                    navLink.classList.remove("active");
                    if (navLink.getAttribute("href") === `#${section.id}`) {
                        navLink.classList.add("active");
                    }
                });
            }

        
            if (scrollPosition < sectionHome.offsetTop + sectionHome.offsetHeight) {
                navbar.style.opacity = "0";
                navbar.style.visibility = "hidden"; 
                console.log("home");
            } else {
                navbar.style.opacity = "1";
                navbar.style.visibility = "visible"; 
                console.log("sobre");
            }
        });
    }


    //typed.js
    var options = {
        strings: [
            "Desenvolvedor Backend",
            "Apaixonado por tecnologia",
            "Sempre em busca de desafios",
            "Desenvolvedor em desenvolvimento"
        ],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
    };

    var typed = new Typed("#typed-output", options);
});



