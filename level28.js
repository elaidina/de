document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Before anyone could stop me, I went home.'
    },
    {
      name: '1',
      img: 'Bevor mich jemand aufhalten konnte, ging ich nach Hause.'
    },
    {
      name: '2',
      img: 'They could not find me anywhere.'
    },
    {
      name: '2',
      img: 'Sie konnten mich nirgendwo finden.'
    },
    {
      name: '3',
      img: 'When we reached the new house, we felt miserable.'
    },
    {
      name: '3',
      img: 'Als wir das neue Haus erreichten, fühlten wir uns schrecklich.'
    },
    {
      name: '4',
      img: 'I´ve just had a bright idea!'
    },
    {
      name: '4',
      img: 'Ich hatte gerade eine glänzende Idee!'
    },
    {
      name: '5',
      img: 'One on my laces came undone and I trod on it.'
    },
    {
      name: '5',
      img: 'Einer meiner Schnürsenkel ging auf und ich trat darauf.'
    },
    {
      name: '6',
      img: 'I had to tie my laces properly.'
    },
    {
      name: '6',
      img: 'Ich musste meine Schnürsenkel richtig binden.'
    },
    {
      name: '7',
      img: 'He drove away in the car.'
    },
    {
      name: '7',
      img: 'Er ist mit dem Auto weggefahren.'
    },
    {
      name: '8',
      img: 'Mummy was not very pleased with me.'
    },
    {
      name: '8',
      img: 'Mama war nicht sehr zufrieden mit mir.'
    },
    {
      name: '9',
      img: 'There was such a lot to do.'
    },
    {
      name: '9',
      img: 'Es gab so viel zu tun.'
    },
    {
      name: '10',
      img: 'Let´s go and climb that tree.'
    },
    {
      name: '10',
      img: 'Lass uns gehen und auf diesen Baum klettern.'
    },
    {
      name: '11',
      img: 'That night, I slept in my new bedroom for the first time.'
    },
    {
      name: '11',
      img: 'In dieser Nacht habe ich zum ersten Mal in meinem neuen Schlafzimmer geschlafen.'
    },
    {
      name: '12',
      img: 'Soon I was asleep in my new home.'
    },
    {
      name: '12',
      img: 'Bald war ich in meinem neuen Zuhause eingeschlafen.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 28 completed!</h2><a href='https://elaidina.github.io/de/level29.html'> Continue to Level 29</a>";


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
