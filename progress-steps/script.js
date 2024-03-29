const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click',()=>{
  currentActive++
  updated()
})

prev.addEventListener('click',()=>{
  currentActive--
  updated()
})

function updated() {
  circles.forEach((item,index)=>{
    if(index<currentActive){
      item.classList.add('active')
    } else{
      item.classList.remove('active')
    }
  })
  if(currentActive==1){
    prev.disabled = true
  } else if(currentActive==4){
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
  progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + "%"
}