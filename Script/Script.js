const btnMenu = document.querySelector(".btnMenu")
const btnClose = document.querySelector(".btn-close")

btnMenu.addEventListener("click", ()=>{
      document.querySelector(".navMobile").classList.remove("close")
})

btnClose.addEventListener("click",()=>{
      document.querySelector(".navMobile").classList.add("close")
})