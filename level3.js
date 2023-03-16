document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Is that your bag?'
    },
    {
      name: '1',
      img: "Ist das deine Tasche?"
    },
    {
      name: '2',
      img: 'What have you got in your hand?'
    },
    {
      name: '2',
      img: "Was hast du in deiner Hand?"
    },
    {
      name: '3',
      img: 'You can guess.'
    },
    {
      name: '3',
      img: "Du kannst es dir denken."
    },
    {
      name: '4',
      img: 'Yes, it is mine.'
    },
    {
      name: '4',
      img: "Ja, es ist meins."
    },
    {
      name: '5',
      img: 'This is my new bike.'
    },
    {
      name: '5',
      img: "Das ist mein neues Fahrrad."
    },
    {
      name: '6',
      img: 'Whose bike is that?'
    },
    {
      name: '6',
      img: "Wessen Fahrrad ist das?"
    },
    {
      name: '7',
      img: 'It looks old.'
    },
    {
      name: '7',
      img: 'Es sieht alt aus.'
    },
    {
      name: '8',
      img: 'How old do I look?'
    },
    {
      name: '8',
      img: "Wie alt sehe ich aus?"
    },
    {
      name: '9',
      img: 'You look like a child.'
    },
    {
      name: '9',
      img: 'Du siehst aus wie ein Kind.'
    },
    {
      name: '10',
      img: 'That apple is red.'
    },
    {
      name: '10',
      img: 'Der Apfel ist rot.'
    },
    {
      name: '11',
      img: 'What is your favourite colour?'
    },
    {
      name: '11',
      img: "Was ist deine Lieblingsfarbe?"
    },
    {
      name: '12',
      img: 'I like pink colour the most.'
    },
    {
      name: '12',
      img: "Ich mag die rosa Farbe am meisten."
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 3 completed!</h2><a href="https://elaidina.github.io/de/level4.html"> Continue to Level 4</a>';


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
