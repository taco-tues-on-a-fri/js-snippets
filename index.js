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

// const photo = document.createElement('img')
// photo.src = img_url


//|------------------------------------------------------------------------NasaApi
//|------------------------------------------------------------------------Substring
// const h1 = document.createElement('h1')
// title_slice = img_url.substring(64, 72)
// h1.textContent = `Image# ${title_slice}`
//|------------------------------------------------------------------------EndNasaApi

const h1 = document.createElement('h1')
h1.textContent = `Texty Boi`

container.appendChild(card)
card.appendChild(h1)
// card.appendChild(photo)


let checkTrueAndLength = function (questionableArray) {
  return questionableArray && questionableArray.length ? questionableArray : ''
}


let findThingFromJSON = function (object, jsonKey) {
  return jsonKey in object ? object[key].img_url_example : ''
}

let createArrayOfObjectsFromObject = function (arrayOfObjects) {
  let newArray = []
  newArray = arrayOfObjects.map(item => {
    return {
      name: item.name,
      email: this.checkTrueAndLength(item.emails),
      phone: item.phone
    }
  })
  return newArray
}
let serverArrayOfObjects = [{}]
let cleanedArray = this.serverArrayOfObjects && this.serverArrayOfObjects.length
  ? this.serverArrayOfObjects.map(item => {
  return {
    id: item.id,
    name: item.name,
    img: item.img_url && item.img_url.length ? `https://www.google.com` : '',
    job: item.job
  }
}).filter(item => item.img.length)
: []
this.googlearray = googlearray