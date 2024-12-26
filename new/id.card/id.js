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
