document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'The little witch began to feel very tired after her hard work.'
    },
    {
      name: '1',
      img: 'Die kleine Hexe begann sich nach ihrer harten Arbeit sehr müde zu fühlen.'
    },
    {
      name: '2',
      img: 'They all lived happily ever after.'
    },
    {
      name: '2',
      img: 'Sie lebten alle glücklich bis ans Ende ihrer Tage.'
    },
    {
      name: '3',
      img: 'Look up and look down.'
    },
    {
      name: '3',
      img: 'Schau nach oben und schau nach unten.'
    },
    {
      name: '4',
      img: 'There is a leak in the roof.'
    },
    {
      name: '4',
      img: 'Das Dach hat ein Leck.'
    },
    {
      name: '5',
      img: 'It´s easy to repair.'
    },
    {
      name: '5',
      img: 'Es ist leicht zu reparieren.'
    },
    {
      name: '6',
      img: 'But how can you reach up there?'
    },
    {
      name: '6',
      img: 'Aber wie kommst du da hoch?'
    },
    {
      name: '7',
      img: 'I can´t climb up.'
    },
    {
      name: '7',
      img: 'Ich kann nicht hochklettern.'
    },
    {
      name: '8',
      img: 'It is much too steep.'
    },
    {
      name: '8',
      img: 'Es ist viel zu steil.'
    },
    {
      name: '9',
      img: 'I have to borrow a ladder.'
    },
    {
      name: '9',
      img: 'Ich muss mir eine Leiter leihen.'
    },
    {
      name: '10',
      img: 'The kid hops over the puddles and trips.'
    },
    {
      name: '10',
      img: 'Das Kind hüpft über die Pfützen und stolpert.'
    },
    {
      name: '11',
      img: 'She explains how the rain dripped in her tea.'
    },
    {
      name: '11',
      img: 'Sie erklärt, wie der Regen in ihren Tee tropfte.'
    },
    {
      name: '12',
      img: 'My window won´t close.'
    },
    {
      name: '12',
      img: 'Mein Fenster lässt sich nicht schließen.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/de/level36.html'> Continue to next level </a>";


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
