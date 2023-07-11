document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'How can I help you?'
    },
    {
      name: '1',
      img: "Womit kann ich Ihnen behilflich sein?"
    },
    {
      name: '2',
      img: 'Can you have a look on the table?'
    },
    {
      name: '2',
      img: "Kannst du mal auf den Tisch schauen?"
    },
    {
      name: '3',
      img: 'It was under the table.'
    },
    {
      name: '3',
      img: 'Es war unter dem Tisch.'
    },
    {
      name: '4',
      img: 'I thought it was on the cupboard or near the chair.'
    },
    {
      name: '4',
      img: 'Ich dachte, es wäre auf dem Schrank oder neben dem Stuhl.'
    },
    {
      name: '5',
      img: 'I´m building a lego car.'
    },
    {
      name: '5',
      img: "Ich baue ein Lego-Auto."
    },
    {
      name: '6',
      img: 'Look at this small picture.'
    },
    {
      name: '6',
      img: 'Schau dir dieses kleine Bild an.'
    },
    {
      name: '7',
      img: 'There are many strawberries, cherries, raspberries and grapes.'
    },
    {
      name: '7',
      img: 'Es gibt viele Erdbeeren, Kirschen, Himbeeren und Weintrauben.'
    },
    {
      name: '8',
      img: 'The pears and apricots are not ripe yet.'
    },
    {
      name: '8',
      img: 'Die Birnen und Aprikosen sind noch nicht reif.'
    },
    {
      name: '9',
      img: 'Here´s your plate, fork, cup and spoon.'
    },
    {
      name: '9',
      img: 'Hier sind dein Teller, deine Gabel, deine Tasse und dein Löffel.'
    },
    {
      name: '10',
      img: 'Is this your bag or not?'
    },
    {
      name: '10',
      img: 'Ist das deine Tasche oder nicht?'
    },
    {
      name: '11',
      img: 'My doll has got big blue eyes and long hair.'
    },
    {
      name: '11',
      img: 'Meine Puppe hat große blaue Augen und lange Haare.'
    },
    {
      name: '12',
      img: 'Let´s take scissors and cut out a heart.'
    },
    {
      name: '12',
      img: "Lass uns eine Schere nehmen und ein Herz ausschneiden."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 6 completed!</h2><a href='https://elaidina.github.io/de/level7.html'> Continue to Level 7</a>";


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
