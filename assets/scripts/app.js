// Disables Developer Tools

document.onkeydown=function(e)
{
    if(event.keyCode == 123)
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
    {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
    {
        return false;
    }

    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    {
        return false;
    }
}

// Disables the ability to right click

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

// Text Copier (Discord)

let copydisc = document.getElementById("copyclipboard");
let disc = document.getElementById("disc");
disc.addEventListener("click", function() {
    navigator.clipboard.writeText(copydisc.textContent);
    copydisc.textContent = "Copied"
})

// Welcomer? idk what to call it

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

// Animated title bar 

/*(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
    }, 350);
  }("Vault is <3 "));*/
