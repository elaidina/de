document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I like summer because Dad buys me lots of ice-cream.'
    },
    {
      name: '1',
      img: 'Ich mag den Sommer, weil Papa mir viel Eis kauft.'
    },
    {
      name: '2',
      img: 'The forest is very colourful in autumn.'
    },
    {
      name: '2',
      img: 'Der Wald ist im Herbst sehr bunt.'
    },
    {
      name: '3',
      img: 'The fields, hills, houses and trees are covered with snow in winter.'
    },
    {
      name: '3',
      img: 'Die Felder, Hügel, Häuser und Bäume sind im Winter mit Schnee bedeckt.'
    },
    {
      name: '4',
      img: 'We make a snowman with my friends.'
    },
    {
      name: '4',
      img: 'Wir bauen mit meinen Freunden einen Schneemann.'
    },
    {
      name: '5',
      img: 'My aunt feeds her hens and ducks with corn and wheat.'
    },
    {
      name: '5',
      img: 'Meine Tante füttert ihre Hühner und Enten mit Mais und Weizen.'
    },
    {
      name: '6',
      img: 'She pours some milk into a bowl.'
    },
    {
      name: '6',
      img: 'Sie gießt etwas Milch in ihre Schüssel.'
    },
    {
      name: '7',
      img: 'The little kittens are cute and funny.'
    },
    {
      name: '7',
      img: 'Die kleinen Kätzchen sind süß und lustig.'
    },
    {
      name: '8',
      img: 'They always put their paws into the bowl and spill the milk.'
    },
    {
      name: '8',
      img: 'Sie stecken immer ihre Pfoten in die Schüssel und verschütten die Milch.'
    },
    {
      name: '9',
      img: 'My uncle is very handy.'
    },
    {
      name: '9',
      img: 'Mein Onkel ist sehr praktisch.'
    },
    {
      name: '10',
      img: 'He plants vegetables and flowers.'
    },
    {
      name: '10',
      img: 'Er pflanzt Gemüse und Blumen.'
    },
    {
      name: '11',
      img: 'Grandma makes very good jam and stewed fruits.'
    },
    {
      name: '11',
      img: 'Oma macht sehr gute Marmelade und Kompott.'
    },
    {
      name: '12',
      img: 'I help grandpa pick apples, pears, grapes and plums.'
    },
    {
      name: '12',
      img: 'Ich helfe Opa beim Pflücken von Äpfeln, Birnen, Weintrauben und Pflaumen.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 23 completed!</h2><a href='https://elaidina.github.io/de/level24.html'> Continue to Level 24</a>";


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
