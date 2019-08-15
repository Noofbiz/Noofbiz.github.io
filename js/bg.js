// From https://uigradients.com
var dreamBGGradients = [
  [],
  ['#5433FF', '#20BDFF', '#A5FECB'], // Wedding Day Blues
  ['#000000', '#0f9b0f'], // Terminal
  ['#59C173', '#a17fe0', '#5D26C1'], // Magic
  ['#a8ff78', '#78ffd6'], // Summer dog
  ['#A1FFCE', '#FAFFD1'], // Limeaide
  ['#a80077', '#66ff00'], // Shahabi
  ['#FDFC47', '#24FE41'], // Martini
  ['#1D976C', '#93F9B9'], // Mojito
  ['#3CA55C', '#B5AC49'] // Lemon twist
]

var dreamBody = $('body')
var dreamFront = $('.flip-container .front')
var dreamBack = $('.flip-container .back')

var dreamPrevBgIndex = 0
var dreamBodyBgSwitch = []
var dreamBodyBgSwitchIndex = 0

var dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
dreamBodyBgSwitch.push(dreamBg)
setBackground(dreamFront, dreamBg)

setBackground(dreamBody, dreamBg)

dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
dreamBodyBgSwitch.push(dreamBg)
setBackground(dreamBack, dreamBg)

function connect(arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      str += arr[i] + ', '
    } else {
      str += arr[i]
    }
  }
  return str
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  var random
  while (1) {
    random = Math.floor(Math.random() * (max - min)) + min
    if (random !== dreamPrevBgIndex) {
      dreamPrevBgIndex = random
      break
    }
  }
  return random
}

function setBackground(target, gradient) {
  target.css({
    background: gradient[0]
  })
  target.css({
    background: 'linear-gradient(to right, ' + connect(gradient) + ')'
  })
}
