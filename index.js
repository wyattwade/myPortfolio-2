// Wrap every letter in a span
var textWrapper = document.querySelector(".ml1 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);



particlesJS("particles-js",{
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.9744372624809179,
          "opacity_min": 0.04060155260337158,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 71.45873258193399,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": .4,
        "direction": "top-right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1025.8919341219544
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 146.16558937213767,
          "size": 2.8,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  
  




anime
  .timeline({ loop: false })
  .add({
    targets: ".ml1 .letter",
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 40 * (i + 1)
  })
  .add({
    targets: ".ml1 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: "-=875",
    delay: (el, i, l) => 40 * (l - i)
  });

  setTimeout(function() {
    $(".myImgSection").fadeIn(400);
  }, 600);
  

setTimeout(function() {
  $(".ml3").fadeIn(800);
}, 800);














  
  
  
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml1 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml1 .letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1)
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 1500,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
    })
  
  


$(".connectButton").click(() => {
  $(".splash-title").fadeOut()
  $(".splash-title-2").fadeOut()
  $(".connectButton").fadeOut()

  
  setTimeout(() =>{
    $(".splash-title-3").fadeIn()
    $(".contactButtonContainer").fadeIn()
    $(".contactButtonContainer").css("display", "flex")

  }, 500)



})





