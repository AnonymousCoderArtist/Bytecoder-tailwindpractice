function homepageAnimation() {
    gsap.set(".slidesm", {scale: 7})

    var tl = gsap.timeline({
        scrollTrigger: {
            start: "top top",
            end: "bottom bottom",
            trigger: ".home",
            scrub: 2,
        },

    })

    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: Power2,
    }, 1)
    .to(".slidesm",{
        scale: 1,
        ease: Power2,
    }, 1)
    .to(".lft",{
        xPercent: -40,
        ease: Power4,
        stagger: .02,
    }, 2)
    .to(".rgt",{
        xPercent: 30,
        ease: Power4,
        stagger: .01,
    },2 )
}

function realpageAnimation() {
    gsap.to(".slide",{
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub:1,
        },
        xPercent: -200,
        ease:Power4,
    })
    
    gsap.utils.toArray('.real .image, .real .img1, .real .img2, .real .img3').forEach((img, i) => {
      gsap.to(img, {
        x: `${(i % 2 === 0 ? 1 : -1) * (50 + i * 10)}%`,
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        ease: "none"
      });
    });

}

function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function(det) {
        // gsap.utils.mapRange(0, window.innerWidth, -200, 200, det.clientX) // 0 m h toh -200 move krunga and last width m h toh 200 x m move krna aur det.clientx se kahan pr h woh pta chlta h
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 500, det.clientX) ,
                ease:Power4, 
                duration:0.5})
        })
        el.addEventListener("mouseleave", function(det) {
            gsap.to(this.querySelector(".picture"), {opacity: 0, ease:Power4, duration:0.5})
        })
    })

    document.querySelectorAll('.listelem').forEach((el) => {
        const blueLayer = el.querySelector('.blue-layer');
        const textEls = el.querySelectorAll('h1, h3');

        el.addEventListener('mouseenter', () => {
            gsap.to(blueLayer, { height: '100%', duration: 0.5, ease: 'power2.out' });
            gsap.to(textEls, { color: '#ffffff', duration: 0.3 });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(blueLayer, { height: '0%', duration: 0.5, ease: 'power2.in' });
            gsap.to(textEls, { color: '#000000', duration: 0.3 });
        });
    });


}


function reviewAnimation() {
    var clutter = "";
    document.querySelector(".textpara").textContent.split("").forEach(function(e){
        if(e === "") clutter += `<span>&nbsp;</span>` //nbsp mtlb non breaking space
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".textpara").innerHTML = clutter;
    
    gsap.set(".textpara span", {opacity: 0.1})
    gsap.to(".textpara span",{
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 2,
        },
        opacity: 1,
        stagger: .3,
        ease: Power4,
    })
    
}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation() {
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4,
    })
}

function changeTheme(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })

}


function footerAnimation() {
    ScrollTrigger.create({
      trigger: 'footer',
      start: 'top 40%',
      onEnter: () => animateFooterText(),
      onEnterBack: () => animateFooterText(),
    });

    function animateFooterText() {
      document.querySelectorAll('.footer__logo--char').forEach((char, i) => {
        char.classList.remove('visible');
        setTimeout(() => char.classList.add('visible'), i * 100);
      });
    }

}

function navbarlogic() {
    let lastScroll = window.scrollY;
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('navbar-hide');
        navbar.classList.remove('navbar-show');
      } else {
        navbar.classList.add('navbar-show');
        navbar.classList.remove('navbar-hide');
      }
      lastScroll = currentScroll;
    });
}


loco();
changeTheme();
navbarlogic();
homepageAnimation();
realpageAnimation();
teamAnimation();
reviewAnimation();
capsulesAnimation();
footerAnimation();