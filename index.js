let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){

  count += 1
  countEl.textContent = count
  

}

function save(){
  let numberStr = count + " - "
  saveEl.textContent += numberStr
  countEl.textContent = 0
  count= 0
  
}


