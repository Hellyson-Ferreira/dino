const player = document.querySelector('#player')

player.style.x += 1


document.body.addEventListener("keydown", (e) => {
    player.style.top = player.style.top == '70%'? '45%':'70%'
   
  });