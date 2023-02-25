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

// CC
let copydisc = document.getElementById("copyclipboard");
let disc = document.getElementById("disc");
disc.addEventListener("click", function() {
    navigator.clipboard.writeText(copydisc.textContent);
    copydisc.textContent = "Copied"
})

// Error 

const here = document.querySelector(".here");
document.querySelector("#get-link").textContent = window.location.pathname.slice(1);

