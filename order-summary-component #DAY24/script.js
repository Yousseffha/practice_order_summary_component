let firstBox = document.getElementById("f-box")
let secondBox = document.getElementById("s-box")
let choices = document.querySelectorAll("#ul li")
let rating = document.getElementById("rating")
let btn = document.getElementById("btn")

choices.forEach((e) => {
    e.onclick = function() {
        if(e === choices[0]) {
            e.classList.add("selected")
            choices[1].classList.remove("selected")
            choices[2].classList.remove("selected")
            choices[3].classList.remove("selected")
            choices[4].classList.remove("selected")
            rating.innerHTML = e.innerHTML
        }
        if(e === choices[1]) {
            e.classList.add("selected")
            choices[0].classList.remove("selected")
            choices[2].classList.remove("selected")
            choices[3].classList.remove("selected")
            choices[4].classList.remove("selected")
            rating.innerHTML = e.innerHTML
        }
        if(e === choices[2]) {
            e.classList.add("selected")
            choices[1].classList.remove("selected")
            choices[0].classList.remove("selected")
            choices[3].classList.remove("selected")
            choices[4].classList.remove("selected")
            rating.innerHTML = e.innerHTML
        }
        if(e === choices[3]) {
            e.classList.add("selected")
            choices[1].classList.remove("selected")
            choices[2].classList.remove("selected")
            choices[0].classList.remove("selected")
            choices[4].classList.remove("selected")
            rating.innerHTML = e.innerHTML
        }
        if(e === choices[4]) {
            e.classList.add("selected")
            choices[1].classList.remove("selected")
            choices[2].classList.remove("selected")
            choices[3].classList.remove("selected")
            choices[0].classList.remove("selected")
            rating.innerHTML = e.innerHTML
        }
        btn.onclick = function() {
            firstBox.style.display = "none"
            secondBox.style.display = "block"
        }
    }
})