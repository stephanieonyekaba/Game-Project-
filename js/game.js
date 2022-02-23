let x = document.getElementById('hideHome');
let y = document.getElementById('button');
const smallContainerDiv = document.getElementById('smallcontainer');




//created an event listener to hide the homescreen when "start game" is clicked
let hideHomeScreen = () => {
    if(x.style.display == "flex") {
     x.style.display = "none"; 
     y.style.display = "none"; 
    } else {
     x.style.display = "none";

    const guessTheCircle = document.createElement('div')
    guessTheCircle.classList.add('guessTheCircle')
    guessTheCircle.innerText = "Which Color Doesnt Match ?"
    smallContainerDiv.appendChild(guessTheCircle)
    guessTheCircle.id = "guessTheCircleHeading";
    }
}



//made circles and added color to them
const makeCircles = () => {

        for(let i = 0; i < 4; i++) {
            
            const circle = document.createElement('div')
            circle.classList.add('circle')
            smallContainerDiv.appendChild(circle)
            if(i == 2) {
            circle.style.backgroundColor = "rgb(123, 175, 212)"; 
            circle.addEventListener("click", clickCircle1Correct);
            } else {
            circle.addEventListener("click", clickCircle1Wrong);
            }
        
          
        }
    }







document.getElementById('button').addEventListener("click", makeCircles)



clickCircle1Correct = () => {
    console.log("CORRECT")
}

clickCircle1Wrong = () => {
    console.log("WRONG")
}
