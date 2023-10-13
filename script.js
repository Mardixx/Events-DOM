const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  const clickedColor = e.target.classList[1]
  const newDiv = document.createElement('div')
  const timeList = document.createElement('li')
  const main = document.querySelector('main').children[2]
  const sectionUl = main.children[1]
  const time = '[' + getElapsedTime() + ']' + " Created a new " + e.target.classList[1] + " square"

  timeList.textContent = time

  newDiv.classList.add('displayedsquare', clickedColor)

  document.querySelector('.displayedsquare-wrapper').appendChild(newDiv)
  sectionUl.appendChild(timeList)

  newDiv.addEventListener( "click", () => {
    alert('The color of this square is ' + clickedColor)
  })

  /* console.log(e.target.classList[1])  
  console.log(time) */
}

const pressKey = (e) => {
  let green = Math.floor(Math.random() * 256)
  let red = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)

  let randomColor = `rgb(${green}, ${red}, ${blue})`

  const section3 = document.querySelector('main').children[2]
  const sectionUl = section3.children[1]
  const logLi = document.createElement('li')
  let logKey = 'You pressed ' + e.code + ' and changed the background color.';
  logLi.textContent = logKey
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 32:
        document.querySelector('body').style.backgroundColor = randomColor
        sectionUl.appendChild(logLi)  
      break
    case 108:
        sectionUl.removeChild(sectionUl.lastChild)
      break
    case 115:
      document.querySelector('.displayedsquare-wrapper').innerHTML = ""
      break
  }

}





const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


const colorBody = document.querySelectorAll('body')
for (let colorBack of colorBody) {
  colorBack.addEventListener('keypress', pressKey)
}

/* const colorTelling = (f) => {
  let divDisplayed = document.querySelector('.displayedsquare-wrapper')
  console.log(divDisplayed.children);
  for (children of divDisplayed.classList) {
    alert(divDisplayed.classList[1])
  }
  
}

const colorClick = document.querySelectorAll('.displayedsquare-wrapper')
for (let colorTeller of colorClick) {
  colorTeller.addEventListener('click', colorTelling)
} */
