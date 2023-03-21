document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'But Tom soon remembered how to do it.'
    },
    {
      name: '1',
      img: 'Aber Tom hat sich schnell wieder daran erinnert, wie es geht.'
    },
    {
      name: '2',
      img: 'I like our tent best.'
    },
    {
      name: '2',
      img: 'Am besten gefällt mir unser Zelt.'
    },
    {
      name: '3',
      img: 'I went to fetch water.'
    },
    {
      name: '3',
      img: 'Ich bin Wasser holen gegangen.'
    },
    {
      name: '4',
      img: 'After supper, Tom went to explore the wood.'
    },
    {
      name: '4',
      img: 'Nach dem Abendessen ging Tom, um den Wald zu erkunden.'
    },
    {
      name: '5',
      img: 'Somebody has been painting arrows on the trees.'
    },
    {
      name: '5',
      img: 'Jemand hat Pfeile auf die Bäume gemalt.'
    },
    {
      name: '6',
      img: 'If we follow those arrows, they will take us for a good walk and bring us back to camp.'
    },
    {
      name: '6',
      img: 'Wenn wir diesen Pfeilen folgen, machen sie einen guten Spaziergang und bringen uns zurück ins Lager.'
    },
    {
      name: '7',
      img: 'The big boys were very noisy.'
    },
    {
      name: '7',
      img: 'Die großen Jungs waren sehr laut.'
    },
    {
      name: '8',
      img: 'Let´s go and play inside our tent.'
    },
    {
      name: '8',
      img: 'Lass uns in unser Zelt gehen und spielen.'
    },
    {
      name: '9',
      img: 'It´s time you two got into your sleeping bags.'
    },
    {
      name: '9',
      img: 'Es ist an der Zeit, dass ihr beide in eure Schlafsäcke schlüpft.'
    },
    {
      name: '10',
      img: 'Tom was almost asleep in his cosy sleeping bag when something hit his tent.'
    },
    {
      name: '10',
      img: 'Tom war fast in seinem kuscheligen Schlafsack eingeschlafen, als etwas sein Zelt traf.'
    },
    {
      name: '11',
      img: 'It gave him a fright.'
    },
    {
      name: '11',
      img: 'Es hat ihm einen Schrecken eingejagt.'
    },
    {
      name: '12',
      img: 'The naughty boys had kicked a football hard at Tom´s tent.'
    },
    {
      name: '12',
      img: 'Die frechen Jungs hatten einen Fußball hart gegen Toms Zelt getreten.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/de/level48.html'> Continue to next level </a>";


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
