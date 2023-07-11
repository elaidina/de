document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'He says that I put more fruit in my tummy than in the basket.'
    },
    {
      name: '1',
      img: 'Er sagt, dass ich mehr Obst in meinen Bauch stecke als in den Korb.'
    },
    {
      name: '2',
      img: 'In winter Grandpa makes a bird-house and hangs it in the tree.'
    },
    {
      name: '2',
      img: 'Im Winter baut Opa ein Vogelhaus und hängt es in den Baum.'
    },
    {
      name: '3',
      img: 'He puts some food there, so that the birds are not hungry in the cold winter.'
    },
    {
      name: '3',
      img: 'Er legt dort etwas Futter hin, damit die Vögel im kalten Winter nicht hungern.'
    },
    {
      name: '4',
      img: 'We must protect them bacause they help us.'
    },
    {
      name: '4',
      img: 'Wir müssen sie beschützen, weil sie uns helfen.'
    },
    {
      name: '5',
      img: 'They eat insects.'
    },
    {
      name: '5',
      img: 'Sie fressen Insekten.'
    },
    {
      name: '6',
      img: 'Some insects can damage the plants.'
    },
    {
      name: '6',
      img: 'Einige Insekten können die Pflanzen schädigen.'
    },
    {
      name: '7',
      img: 'Why don´t we have ice-cream for breakfast?'
    },
    {
      name: '7',
      img: 'Warum haben wir kein Eis zum Frühstück?'
    },
    {
      name: '8',
      img: 'It´s snowing and cold wind is blowing.'
    },
    {
      name: '8',
      img: 'Es schneit und es weht ein kalter Wind.'
    },
    {
      name: '9',
      img: 'The tea is too bitter.'
    },
    {
      name: '9',
      img: 'Der Tee ist zu bitter.'
    },
    {
      name: '10',
      img: 'Lemon juice makes it more sour.'
    },
    {
      name: '10',
      img: 'Zitronensaft macht es saurer.'
    },
    {
      name: '11',
      img: 'I eat my breakfast up and go out.'
    },
    {
      name: '11',
      img: 'Ich esse mein Frühstück auf und gehe aus.'
    },
    {
      name: '12',
      img: 'The ice is slippery.'
    },
    {
      name: '12',
      img: 'Das Eis ist glatt.'
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

cards[optionOneId].parentElement.classList.remove("green")
      

      

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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 24 completed!</h2><a href='https://elaidina.github.io/de/level25.html'> Continue to Level 25</a>";


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
