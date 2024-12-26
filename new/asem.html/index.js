var countDownDate = new Date("January 01, 2025 00:00:00").getTime(); 
var x = setInterval(function() {
    var now = new Date().getTime(); 
    var distance = countDownDate - now; 

    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);




const extraText = document.getElementById('extraText');
const showButton = document.getElementById('show');
let isShown = false;

showButton.addEventListener('click', () => {
   
    extraText.classList.toggle('hide');
    isShown = !isShown;

    showButton.textContent = isShown ? 'Show less' : 'Show more';
});

const arrow = document.getElementById('up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        arrow.style.display = '';
    } else {
        arrow.style.display = 'none';
    }
});

