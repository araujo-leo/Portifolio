document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener("scroll", changeActiveLink);

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const navbar = document.querySelector(".navbar");
    const sectionHome = document.querySelector("#home");

    function changeActiveLink() {
        let scrollPosition = window.scrollY + 100;

        sections.forEach(function (section) {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
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
            } else {
                navbar.style.opacity = "1";
                navbar.style.visibility = "visible";
            }
        });
    }

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

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const form = e.target;
            const formData = new FormData(form);

            formData.append('_captcha', 'false'); 
            formData.append('_template', 'table'); 
            formData.append('_next', window.location.href);

            formStatus.innerHTML = '<p class="text-info">Enviando...</p>';

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' 
                }
            })
                .then(response => {
                    if (response.ok) {
                        formStatus.innerHTML = '<p class="text-success">Obrigado! Sua mensagem foi enviada.</p>';
                        form.reset();
                    } else {
                        return response.json().then(data => {
                            throw new Error(data.message || 'Erro ao enviar mensagem.');
                        });
                    }
                })
                .catch(error => {
                    formStatus.innerHTML = `<p class="text-danger">Erro: ${error.message}</p>`;
                });
        });
    }

    ScrollReveal().reveal('#sobre .img-box', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        easing: 'ease-in-out',
        reset: false
    });

    ScrollReveal().reveal('#sobre .text-box', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        delay: 300,
        reset: false
    });

    //Reveal Projetos
    ScrollReveal().reveal('.card', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        interval: 300,
        reset: false
    });

});
