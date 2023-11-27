// document.getElementById("count-el").innerText = 5
let count = 0

function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
}

// function decrement() {
//     count -= 1
//     document.getElementById("count-el").innerText = count 
// } 

function save() {
    let countStr = count + "-"
    document.getElementById("prev-en").innerText += countStr
    count = 0
    document.getElementById("count-el").innerText = count
}

