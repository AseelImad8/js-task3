var largebtn = document.querySelector(".large");
var smallbtn = document.querySelector(".small");

function largeText() {
    var text = document.querySelector("div");
    text.classList.add("largeText");
}

function smallText() {
    var text = document.querySelector("div");
    text.classList.remove("largeText");
}

largebtn.onclick = largeText;
smallbtn.onclick = smallText;