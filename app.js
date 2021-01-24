let novel = document.querySelector(".novel")
let preloader = document.querySelector(".preloader")
let play = document.querySelector("#play")
let current = 0
let database = "db.json"
let music = "ost.mp3"

play.addEventListener("click", function() {
  preloader.style.display = "none"
  setTimeout(function(){
    tapStory()
    backsound(music)
  }, 700)
  
})

function tapStory() {
  window.addEventListener("click", function() {
    current++
    getData()
  
  })
}

function backsound(ost) {
  let music = new Audio(ost)
  music.loop = true
  music.volume = 0.5
  music.play()
}


function sfxTap(sfx) {
  let sfxtap = new Audio("assets/audios/"+sfx)
  sfxtap.currentTime = 0
  sfxtap.play()
}

let getData = function() {
  fetch(database).then(r => r.json())
  .then(function(data) {
    let novels = data
    renderData(novels)
  })
}

function renderData(data) {
  let background = data.backgrounds
  let render = data.data[current]
  let template = ""
  template = `
    <div class="image animate__animated animate__bounceIn">
        <img src="assets/images/${render.char}" class="character"/>
    </div> 
    <div class="box">
      <h5 class="name">${render.name}</h5>
      <p class ="teks">${render.teks}</p> 
    </div>`
  
  document.body.style.backgroundImage = 'url(assets/images/'+background[render.bg]+')'
  novel.innerHTML = template
  sfxTap(data.sfx)
}

getData();
