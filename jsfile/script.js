let value = document.getElementById("completed-n").innerText
let increaseValue = parseFloat(value)
let Value = document.getElementById("assigned-n").innerText
let decreaseValue = parseInt(Value)










function changeNumber (){

    increaseValue++
    decreaseValue--
}

let btnMain = document.getElementsByClassName("btn-main")
// console.log(btnMain)

for(let btn of btnMain) {


btn.addEventListener("click", function(){
    alert("Board Updated Successfully");
    changeNumber()
    document.getElementById("completed-n").innerText = increaseValue ;
    document.getElementById("assigned-n").innerText = decreaseValue ;


    btn.classList.remove("bg-blue-600")
    btn.classList.remove("btn")
    btn.classList.add("bg-slate-700")

    let message = btn.parentElement.parentElement.querySelector("h1").innerText;
    console.log(message)

    let mainConatiner = document.getElementById("main-Conatiner");






    let Time = new Date().toLocaleTimeString(); 

let para = document.createElement("p")
para.innerHTML = `

<h1 class="bg-slate-400 text-white rounded-lg my-4"  > You Have Completed The task ${message} at ${Time}

`
console.log(para)
mainConatiner.appendChild(para);









    btn.disabled = true ;


    

    
    if (
        decreaseValue === 0
    )
    {
        alert("Congrats!! You Have Completed All The Current Task")
    }
    console.log(decreaseValue)


    


    
}  )
}



document.getElementById("btnClear").addEventListener("click", function(){

    document.getElementById("main-Conatiner").innerHTML = " ";
} )



function getRandomColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; 
}


document.getElementById("color-btn").addEventListener("click", function(){


    let randomColor = getRandomColor();
    
    document.getElementById("body-p").style.backgroundColor = randomColor;



} )


document.getElementById("date").textContent = new Date().toDateString();













