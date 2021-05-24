const player = document.querySelector('#player')

document.body.addEventListener("keydown", (e) => {
  if (e.keyCode == 32 || e.keyCode == 38){
    if(player.classList){
      
    }
    player.classList.toggle('jump')
    setTimeout(() => player.classList.toggle('jump'),400)
  }})