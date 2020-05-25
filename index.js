const app = document.getElementById('root')
const logoContainer = document.createElement('div')
app.appendChild(logoContainer)
const logo = document.createElement('img')
logo.setAttribute('class', 'logo')
logo.src = './assets/img/moon.jpg'
logoContainer.appendChild(logo)


const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

const card = document.createElement('div')
card.setAttribute('class', 'card')

const h1 = document.createElement('h1')
container.appendChild(card)
card.appendChild(h1)

const jsonData = {
  username: "terrific weeder",
  img_urls: [""],
  age: 44,
  location: "Japan",
  favorites: ["gravy", "waffles", "cats"]
}

const checkTrueAndLength = (questionableArray) => {
  return questionableArray && questionableArray.length ? questionableArray : null
}

h1.textContent = checkTrueAndLength(jsonData.favorites)
