// Typed JS
var typed = new Typed('.typed', {
    strings: [
        'Private Bio Links',
        'Free For Friends',
        'Case Closed',
        '♡'
    ],
    typeSpeed: 40,
    backSpeed: 40,
    startDelay: 1500,
    backDelay: 500,
    smartBackspace: true // Default value
  });

var audio = document.getElementById('audio');

document.getElementById("enter").addEventListener("click", function() {
    
    const target = document.getElementById("enter");

    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());

    if (typeof window.orientation == 'undefined') { 
        audio.volume=0.2;
        audio.play();
    }
});