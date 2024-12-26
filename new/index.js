const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';

const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: '#FFFFFF',
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5
});


const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
};

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
};


const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
};


for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('scroll', () => {
    canvas.style.top = `${window.scrollY}px`;
});

const cardsContainer = document.getElementById('cards-container');

const data = [
    {
        image: "https://i.pinimg.com/736x/1c/fe/6e/1cfe6e86af73063f00fcac817ab37406.jpg",
        name: "Christmas Balls",
        price: "98",
    },
    {
        image: "https://i.pinimg.com/736x/97/d5/e1/97d5e1ef6593894301c0ce11d0e9d0c2.jpg",
        name: "Christmas Crafts",
        price: "67",
    },
    {
        image: "https://i.pinimg.com/736x/ef/23/86/ef2386a03cd996ccd28f4b9a679647e8.jpg",
        name: "Christmas Gift",
        price: "71",
    },
    {
        image: "https://i.pinimg.com/736x/f6/0d/76/f60d768e203d7402b65e813258508b3b.jpg",
        name: "New Year's Tree",
        price: "873",
    },
    {
        image: "https://i.pinimg.com/736x/cc/db/59/ccdb591ea1c94041a91040c788b6e2a5.jpg",
        name: "An Open Letter",
        price: "2.1",
    },
    {
        image: "https://i.pinimg.com/736x/53/a1/54/53a154d44a50d8cbc2b72542b59645ab.jpg",
        name: "Bomb Ball",
        price: "3",
    },
    {
        image: "https://i.pinimg.com/736x/13/cf/f1/13cff1444f3aa966acaed4002b5cfca5.jpg",
        name: "Christmas Toys",
        price: "13",
    },
    {
        image: "https://i.pinimg.com/736x/17/e6/b6/17e6b66aa258fef74ddd3517eefeaabd.jpg",
        name: "Christmas Decoration",
        price: "32.5",
    },
    {
        image: "https://i.pinimg.com/736x/92/38/ab/9238abd19ae1911f9b2c1f19583e3aab.jpg",
        name: "Christmas Mat",
        price: "498",
    },
    {
        image: "https://i.pinimg.com/736x/64/20/ab/6420ab941eedaf75ddcee9da521fcfe0.jpg",
        name: "Christmas Santa Claus Snowflake",
        price: "32",
    },
    {
        image: "https://www.svgheart.com/wp-content/uploads/2021/11/christmas-elf-scarf-winter-free-svg-file-SvgHeart.Com.png",
        name: "Christmas Scarf",
        price: "56",
    },
    {
        image: "https://i.pinimg.com/736x/c1/00/e5/c100e57bb145aace3a92bc4dc874505b.jpg",
        name: "Christmas Outfit",
        price: "13",
    },

];

data.forEach(item => {
    const card = document.createElement('div'); 
    const cardImage = document.createElement('img');
    const cardName = document.createElement('h2');
    const cardPrice = document.createElement('span');

    cardImage.src = item.image;
    cardName.textContent = item.name;
    cardPrice.textContent = item.price + ' $';

    card.classList.add('card'); 
    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardPrice);

    cardsContainer.appendChild(card); 
});

const LoginForm = document.getElementById('LoginForm');
const errorMessage = document.getElementById('errorMessage');

LoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;

    console.log({emailValue, passwordValue});

    
    errorMessage.textContent = '';
    if (!emailValue.includes('@')) {
        errorMessage.textContent = 'Электронды пошта қате енгізілген';
    } 
    else if (passwordValue.length < 6) {
        errorMessage.textContent = 'Құпия сөз кемінде 6 симболдан тұру керек';
    } 
    else {
        errorMessage.textContent = 'Форма түрде жіберілді';
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 2000);
    }
});


const data1= [
    {title: '"Қымбатты отбасым , менің ерекше достарым',
    description: 'жаңа жыл құтты болсын! Бұл жылы өзіңе жаңа мүмкіндіктер ашылып, өміріңде тек жақсылықтар мен бақытты сәттер болсын. Қиындықтар өтеді, ал сен әрдайым жеңіске жететіндей күш-қуат пен көңіл-күйде бол! Жаңа жыл саған бақыт пен махаббат сыйласын! '},
    {title: 'Жаңа жылда өзіңе сенім артып, алға қадам бас! ',
    description: 'Бірге өткізген әр сәттің мағынасы ерекше! '},
    {title: '" Жаңа жылда ең бастысы — сенің бақытың, денсаулығың мен отбасыңа қуаныш! Әр жаңа күн жаңа мүмкіндіктер әкелсін. ',
    description: 'Жаңа жыл — жаңа мүмкіндіктердің уақыты! '},
    {title: '"Сенің өміріңде тек қуаныш пен табысқа толы сәттер болсын. Әр жаңа күн — бұл өзіңе деген жаңа мүмкіндіктердің есігі. Қашан да көңілді, дені сау және армандарыңа жетуіңе тілектеспін! ',
    description: 'Жаңа жылда барлық жақсы нәрселер сені күтеді! 🎉'},
];

const container5 = document.getElementById("container5");

data1.forEach(item => {
    const card = document.createElement("div");
    card.className = 'card';

    const title = document.createElement('h2');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    const button = document.createElement("button");
    button.textContent = 'Қабылдадым';

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    container5.appendChild(card);

    button.addEventListener('click', () => {
        card.remove();
    });
});



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
    // Toggle the visibility of the extra text
    extraText.classList.toggle('hide');
    isShown = !isShown;

    // Change the button text based on whether the extra text is shown or not
    showButton.textContent = isShown ? 'Show less' : 'Show more';
});


