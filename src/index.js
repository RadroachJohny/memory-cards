document.addEventListener('DOMContentLoaded', () =>{

  // card options
  const cardsArray = [
    {
      name:'fries',
      img: 'images/fries.png'
    },
    {
      name:'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name:'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name:'pizza',
      img: 'images/pizza.png'
    },
    {
      name:'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name:'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name:'fries',
      img: 'images/fries.png'
    },
    {
      name:'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name:'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name:'pizza',
      img: 'images/pizza.png'
    },
    {
      name:'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name:'hotdog',
      img: 'images/hotdog.png'
    },
    
  ];

  cardsArray.sort(() =>  0.5 - Math.random());

  const resultDisplay = document.querySelector('#result');

  const grid = document.querySelector('.grid');
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];

  function createBoard() {
    for( let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement('img');
      card.style.width = '100px';
      card.style.height = '100px';
      card.setAttribute('src', 'images/card-bg.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }


  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img);
    console.log(cardsChosen.length);
    if(cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if(optionOneId === optionTwoId) {
      // alert('You have clicked the same image');
      cards[optionOneId].setAttribute('src', 'images/card-bg.jpg');
      cards[optionTwoId].setAttribute('src', 'images/card-bg.jpg');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      // alert('Совпадение!');
      // cards[optionOneId].setAttribute('src', 'images/white.png');
      // cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      resultDisplay.textContent = cardsWon.length;
    } else {
      cards[optionOneId].setAttribute('src', 'images/card-bg.jpg');
      cards[optionTwoId].setAttribute('src', 'images/card-bg.jpg');
      // alert('Попробуйте ещё раз');
      
    }

    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardsArray.length / 2) {
      resultDisplay.textContent = 'Поздравляем, вы победили!';
    }

  }


  createBoard();
});


































// document.addEventListener('DOMContentLoaded', function() {
//   // card options
//   const cardsArray = [
//     {
//       name: 'fries',
//       image: 'images/fries.png'
//     },
//     {
//       name: 'cheeseburger',
//       image: 'images/cheeseburger.png'
//     },
//     {
//       name: 'ice-cream',
//       image: 'images/ice-cream.png'
//     },
//     {
//       name: 'pizza',
//       image: 'images/pizza.png'
//     },
//     {
//       name: 'milkshake',
//       image: 'images/milkshake.png'
//     },
//     {
//       name: 'hotdog',
//       image: 'images/hotdog.png'
//     },
//     {
//       name: 'fries',
//       image: 'images/fries.png'
//     },
//     {
//       name: 'cheeseburger',
//       image: 'images/cheeseburger.png'
//     },
//     {
//       name: 'ice-cream',
//       image: 'images/ice-cream.png'
//     },
//     {
//       name: 'pizza',
//       image: 'images/pizza.png'
//     },
//     {
//       name: 'milkshake',
//       image: 'images/milkshake.png'
//     },
//     {
//       name: 'hotdog',
//       image: 'images/hotdog.png'
//     },
//   ]

//   cardsArray.sort(()=> 0.5 - Math.random());
//   console.log(cardsArray);

//   const grid = document.querySelector('.grid');
//   const resultDisplay = document.querySelector('#result');

//   let cardsChosen = [];
//   let cardsChosenIds = [];
//   let cardsWon = [];

//   function createBoard() {
//     for( let i = 0; i < cardsArray.length; i++) {
//       const card = document.createElement('img');
//       card.setAttribute('src', 'images/blank.png');
//       card.setAttribute('data-id', i);
//       card.addEventListener('click', flipCard);
//       grid.appendChild(card);
//     }
//   }
  

//   function flipCard() {
//     let cardId = this.getAttribute('data-id');
//     cardsChosen.push(cardsArray[cardId].name);
//     cardsChosenIds.push(cardId);
//     this.setAttribute('src', cardsArray[cardId].image);

//     if(cardsChosen.length === 2) {
//       setTimeout(checkForMatch, 500)
//     }

//     console.log(cardsChosenIds);
//   }

//   function checkForMatch() {
//     console.log(1);
//     const cards = document.querySelectorAll('img');
//     const optionOneId = cardsChosenIds[0];
//     const optionTwoId = cardsChosenIds[1];

//     if(optionOneId == optionTwoId) {
//       alert('You have clicked the same image!')
//       cards[optionOneId].setAttribute('src', 'images/blank.png');
//       cards[optionTwoId].setAttribute('src', 'images/blank.png');
//     } else if (cardsChosen[0] === cardsChosen[1]) {
//       alert('You have found a match!')
//       cards[optionOneId].setAttribute('src', 'images/white.png');
//       cards[optionTwoId].setAttribute('src', 'images/white.png');
//       cards[optionOneId].removeEventListener('click', flipCard);
//       cards[optionTwoId].removeEventListener('click', flipCard);
//       cardsWon.push(cardsChosen);

//     } else {
//       cards[optionOneId].setAttribute('src', 'images/blank.png');
//       cards[optionTwoId].setAttribute('src', 'images/blank.png');
//       alert('Sorry, try again!')
//     }

//     cardsChosen = [];
//     cardsChosenIds = [];
//     resultDisplay.textContent = cardsWon.length;

//     if(cardsWon.length === cardsArray.length / 2) {
//       resultDisplay.textContent = 'Congratulations! You have Won!';
//     }

//     console.log(cardsChosen);
//     console.log(cardsWon);
//   }

//   createBoard();

// })



