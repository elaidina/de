document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'In the morning he ran straight outside to build a snowman.'
    },
    {
      name: '1',
      img: 'Am Morgen rannte er direkt nach draußen, um einen Schneemann zu bauen.'
    },
    {
      name: '2',
      img: 'Dad helped them and at last they had a splendid snowman.'
    },
    {
      name: '2',
      img: 'Papa hat ihnen geholfen und endlich hatten sie einen prächtigen Schneemann.'
    },
    {
      name: '3',
      img: 'Tom ran indoors and fetched an old hat for his head and a carrot for his nose.'
    },
    {
      name: '3',
      img: 'Tom rannte ins Haus und holte einen alten Hut für seinen Kopf und eine Karotte für seine Nase.'
    },
    {
      name: '4',
      img: 'It was getting dark.'
    },
    {
      name: '4',
      img: 'Es wurde langsam dunkel.'
    },
    {
      name: '5',
      img: 'They had a surprise when they went into the living room.'
    },
    {
      name: '5',
      img: 'Sie erlebten eine Überraschung, als sie ins Wohnzimmer gingen.'
    },
    {
      name: '6',
      img: 'The Chrismas tree was covered in twinkling lights, tinsel and tiny toys.'
    },
    {
      name: '6',
      img: 'Der Weihnachtsbaum war mit funkelnden Lichtern, Lametta und winzigen Spielzeugen bedeckt.'
    },
    {
      name: '7',
      img: 'The robin was perched right at the top of the tree.'
    },
    {
      name: '7',
      img: 'Das Rotkehlchen saß ganz oben auf dem Baum.'
    },
    {
      name: '8',
      img: 'It´s not fair.'
    },
    {
      name: '8',
      img: 'Das ist nicht fair.'
    },
    {
      name: '9',
      img: 'My angel should be at the top.'
    },
    {
      name: '9',
      img: 'Mein Engel sollte ganz oben sein.'
    },
    {
      name: '10',
      img: 'Kitty strolled into the room and spotted the robin.'
    },
    {
      name: '10',
      img: 'Kitty ist ins Zimmer geschlendert und hat das Rotkehlchen entdeckt.'
    },
    {
      name: '11',
      img: 'At last it was Christmas Eve, the night when Father Christmas comes.'
    },
    {
      name: '11',
      img: 'Endlich war Heiligabend, die Nacht, in der der Weihnachtsmann kommt.'
    },
    {
      name: '12',
      img: 'Tom went to bed, but he did not want to go to sleep.'
    },
    {
      name: '12',
      img: 'Tom ist ins Bett gegangen, aber er wollte nicht schlafen gehen.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/de/level46.html'> Continue to next level </a>";


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
