$(document).ready(function () {

  //Navbar scroll Show

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
            if (scroll > 200) {
                $("#navbar-main")
                .addClass( "bg-white fixed-top animated fadeInDown d-block shadow-lg")
            }

            else {
                $("#navbar-main")
                .removeClass("bg-white fixed-top animated fadeInDown d-block shadow-lg")
            }
        })

//About SF scroll Show
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
            if (scroll >= 600 && scroll <= 2200) {
                $("#about-salesforce")
                .removeClass("d-none fadeOutRight")
                .addClass("d-block animated fadeInRight")
            }

            else {
                $("#about-salesforce")
                .removeClass("d-block")
                .addClass("fadeOutRight")
            }
        })


// Smooth scroll

            $('#start-the-tour-btn').click(function () {
                $('html, body').animate({
                    scrollTop: $("#about-me-page").offset().top-75
                }, 1000);
            });

            $('#logo-nav-sander').click(function () {
                $('html, body').animate({
                    scrollTop: $("#introduction").offset().top-75
                }, 1000);
            });

            $('#about-me-nav').click(function () {
                $('html, body').animate({
                    scrollTop: $("#about-me-page").offset().top-75
                }, 1000);
            });

            $('#experience-nav').click(function () {
                $('html, body').animate({
                    scrollTop: $("#experience-section").offset().top-75
                }, 1000);
            });

            $('#contact-nav').click(function () {
            $('html, body').animate({
                scrollTop: $("#contact-section").offset().top-75
            }, 1000);
            });

// Scroll Reveal 

        // About me 

        window.sr = ScrollReveal ();
            sr.reveal('#salesforce-certificaten', {
                duration: 1000,
                origin:'bottom',
                distance: '300px',
                viewFactor: 0.3,
            });

            sr.reveal('#more-about-me', {
                duration: 1000,
                origin:'bottom',
                distance: '300px',
                viewFactor: 0.3,
            });

            sr.reveal('#about-salesforce', {
                duration: 1000,
                origin:'right',
                distance: '300px',
                viewFactor: 0.3,
            });

            sr.reveal('.why-crm-web', {
                duration: 1000,
                origin:'bottom',
                distance: '300px',
                viewFactor: 0.3,
            });

            // Experience section

            sr.reveal('#sales-experience', {
                duration: 2000,
                origin:'right',
                distance: '100px',
                viewFactor: 0.4
            });

            sr.reveal('#crm-experience', {
                duration: 2000,
                origin:'left',
                distance: '100px',
                viewFactor: 0.4
            });

            // Compententies 

            const leftrevealCustom = 
            {
                duration: 3000,
                origin:'left',
                distance: '100px',
                viewFactor: 0.7,
            }

            const rightrevealCustom = 
            {
                duration: 3000,
                origin:'right',
                distance: '100px',
                viewFactor: 0.7,
            }

            sr.reveal('#creative', leftrevealCustom);
            sr.reveal('#analytical', rightrevealCustom);
            sr.reveal('#communicative', leftrevealCustom );
            sr.reveal('#problemsolver', rightrevealCustom );
});


// Media queries

