let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0;
    }

    // for linear slides
    /*
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    fadeIn(slides[slideIndex - 1]);
    */
    
    //for random slides

    let randomIndex = Math.floor(Math.random() * slides.length);
    slides[randomIndex].style.display = "block";
    fadeIn(slides[randomIndex]);
   

    setTimeout(showSlides, 60000); 
  
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

window.onscroll = function() {
    scrollFunction();
    scrollFunction1();
};

function scrollFunction() {
    const header = document.querySelector(".navbar");

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
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




window.onload = function () {
    showSlides();
};




document.addEventListener('DOMContentLoaded', function () {
  
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


function validation() {
    alert('Thank You For Your Feedback');
}

  

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('rate-check');
    var ratingHiddenDiv = document.querySelector('.rating-hidden');

   
    ratingHiddenDiv.style.display = checkbox.checked ? 'block' : 'none';

    
    checkbox.addEventListener('click', function () {
       
        ratingHiddenDiv.style.display = checkbox.checked ? 'block' : 'none';
    });
});