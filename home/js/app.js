let copydisc = document.getElementById("copyclipboard");
let disc = document.getElementById("disc");
disc.addEventListener("click", function() {
    navigator.clipboard.writeText(copydisc.textContent);
    copydisc.textContent = "Copied"
})
