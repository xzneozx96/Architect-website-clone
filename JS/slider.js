let responsiveNav = document.querySelector(".toggle");
let navItems = document.querySelectorAll(".nav-item");

responsiveNav.addEventListener("click", () => {
    for (let i of navItems) {
        i.classList.toggle("active")
    }
})

let yearOfExperience = document.querySelector(".number");
let acknowledgement = document.querySelector(".acknowledgement-container");
let beginNumber = 3;
let stopCounter = 0;
window.addEventListener('scroll', function() {
	var position = acknowledgement.getBoundingClientRect();
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log('Element is partially visible in screen');

    }
    if(position.top < window.innerHeight && position.bottom >= 0) {
        stopCounter++;
        if (stopCounter == 1) {
            setTimeout(() => {
                let totalYear = setInterval(() => {
                    beginNumber++;
                    yearOfExperience.innerHTML = beginNumber;
                    if (beginNumber == 14) {
                        clearInterval(totalYear)
                    }
                },200)
            },1000) 
        }
	}
});

// let labels = document.querySelectorAll(".input-container label");
// let inputs = document.querySelectorAll(".input-container .form-control");
let labels = Array.from(document.getElementsByTagName("label"));
let inputs = Array.from(document.getElementsByClassName("form-control"));

inputs[0].onfocus = () => {
    labels[0].classList.add("toggle")
}
inputs[1].onfocus = () => {
    labels[1].classList.add("toggle")
}
inputs[2].onfocus = () => {
    labels[2].classList.add("toggle")
}
inputs[3].onfocus = () => {
    labels[3].classList.add("toggle")
}
