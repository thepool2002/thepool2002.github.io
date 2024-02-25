let galleryslideIndex = 0;

function galleryshowSlides() {
    let i;
    const galleryslides = document.getElementsByClassName("gallerymySlides");
    
    for (i = 0; i < galleryslides.length; i++) {
        galleryslides[i].style.display = "none";
        galleryslides[i].style.opacity = 0;
    }

    //for linear slides

    /*
    galleryslideIndex++;
    
    if (galleryslideIndex > galleryslides.length) {
        galleryslideIndex = 1;
    }

    galleryslides[galleryslideIndex-1].style.display = "block";
    fadeIn(galleryslides[galleryslideIndex-1]);

    */
    // for random slides 
    let randomIndex = Math.floor(Math.random() * galleryslides.length);

    galleryslides[randomIndex].style.display = "block";
    fadeIn(galleryslides[randomIndex]);
    
    setTimeout(galleryshowSlides, 60000); 

}

function fadeIn(element) {
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.018; // Adjust the increment to control the fade speed
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 50); // Adjust the interval for smoother transitions
}


window.onload = function () {
    galleryshowSlides();
};

window.onscroll = function() {
    galleryscrollFunction();
    scrollFunction1();
};

function galleryscrollFunction() {
    const galleryheader = document.querySelector(".gallerynavbar");

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        galleryheader.classList.add("scrolled");
    } else {
        galleryheader.classList.remove("scrolled");
    }
}
function scrollFunction1(){
    const totop = document.querySelector(".totop");
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        totop.style.display='block';
    } else {
        totop.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.getElementById('openBtn').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '400px';
});

document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '0';
});


function togglecontinent(id) {
  
    document.querySelectorAll('.continent').forEach(continent => {
        continent.style.display = 'none';
    });

    
    document.getElementById(id).style.display = 'block';
}

