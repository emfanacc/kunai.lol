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

// Active Button

var container = document.getElementById('navbar')
var btns = document.getElementsByClassName('btn')

for (var i=0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active')
        current[0].className = current[0].className.replace(' active')
        this.className += " active";
    })
}