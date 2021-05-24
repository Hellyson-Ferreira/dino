const player = document.querySelector('#player')
const cactus = document.querySelector('#cactus')

document.body.addEventListener("keydown", (e) => {
  if (e.keyCode == 32 || e.keyCode == 38){
    player.classList.toggle('jump')
    setTimeout(() => player.classList.toggle('jump'),800)
  }})


  let colisao = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusLeft <50 && cactusLeft> 0 && dinoTop >= 140){
      console.log('Perdeu')
      alert('sdkdk')
    }
    // console.log(cactusLeft)
  },10)