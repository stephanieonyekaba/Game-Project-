//Variables for circles and containers (CIRCLE1)
let x = document.getElementById('hideHome');
let y = document.getElementById('button');
let container = document.getElementById('container')
const circleContainer = document.getElementById('circleContainer');
const smallContainer = document.getElementById('smallContainer');
const guessTheCircle = document.createElement('div')
const clock = document.createElement('div')
let timeIsUpBoard = document.createElement('div')
let round = 1;


//created an event listener to hide the homescreen when "start game" is clicked
let hideHomeScreen = () => {
    if(x.style.display == "flex") {
     x.style.display = "none"; 
     y.style.display = "none"; 

    } else {
        x.style.display = "none" }

    guessTheCircle.classList.add('guessTheCircle')
    guessTheCircle.innerText = "Which Color Doesnt Match ?"
    smallContainer.appendChild(guessTheCircle)
    guessTheCircle.id = "guessTheCircleHeading";

    clock.classList.add('clock')
    smallContainer.appendChild(clock)
    guessTheCircle.id = "clock";

    timeIsUpBoard.classList.add('timeIsUpBoard')
    timeIsUpBoard.innerText = "Time is up!"
    container.appendChild(timeIsUpBoard);
    timeIsUpBoard.id = "timeIsUpBoard";

    }

    let counter = 5; 
//countdown timer 
const startCountDown = () => {

      const interval = setInterval(() => {
        clock.textContent = counter;
        // counter--;


     if (counter < 0 ) {
        clearInterval(interval);
        smallContainer.style.display = "none";
        timeIsUpBoard.style.display = "flex";
        console.log("out of time");
 
      } 
    }, 1000);
    }
 
  startCountDown(5);

//color levels
const blueColor = "rgb(18, 142, 230)"
const offBlueColor = "rgb(88, 138, 245)"

const greenColor = "rgb(53, 219, 20)"
const offGreenColor = "rgb(56, 199, 28)"

const orangeColor = "rgb(237, 168, 83)"
const offOrangeColor = "rgb(240, 177, 101)"


//made circles and added color to them
//num is the number of circles I want 
//level is a number that represents what level the game is on 
//example: level1 calls makeCircles like this: makeCircles(4, 1)
//example: level2 calls makeCircles like this: makeCircles(6, 2)


const makeCircles = (num, level) => {
    console.log("makeCircles")
    //loop until desired number of circles 
        for(let i = 0; i < num; i++) {
            //this is the counter for my timer
            counter = 5;
            //the next three lines make and add my circles
            console.log("for loop")
            let circle = document.createElement('div')
            circle.classList.add('circle')
            circleContainer.appendChild(circle)
            smallContainer.appendChild(circleContainer)

            //picks a circle to make different
            if(i == 2 && level == 1) {
                    //adds different background color to circle
                circle.style.backgroundColor = offBlueColor;
                circle.addEventListener("click", clickCircle1Correct);
            }
            if (i == 2 && level == 2) {
                circle.style.backgroundColor = offGreenColor;
                circle.addEventListener("click", clickCircle1Correct);
                
            } 
            if(i != 2 && level == 1) {
                circle.style.backgroundColor = blueColor; 
                circle.addEventListener("click", clickCircle1Wrong);  

            } 
            if(i != 2 && level == 2) {
                circle.style.backgroundColor = greenColor; 
                circle.addEventListener("click", clickCircle1Wrong);  
            } 
        }

    }  
    
        

//create a function that runs the startgame 
//this function will be what calls makes circles for each level 
//it also will determine 

const startGame = () => {
    console.log("startGame")
    makeCircles(8, 2);
    
}







//this calls start game function. change to start game
document.getElementById('start-button').addEventListener("click", startGame)



clickCircle1Correct = () => {
    counter = 100;
    smallContainer.innerHTML="";
    const correctAnswer1 = document.createElement('div');
    correctAnswer1.classList.add('correctAnswer1');
    smallContainer.appendChild(correctAnswer1)
    correctAnswer1.innerText="CORRECT";
}

clickCircle1Wrong = () => {
    counter = 100;
    smallContainer.innerHTML="";
    const wrongAnswer1 = document.createElement('div');
    wrongAnswer1.classList.add('wrongAnswer1');
    smallContainer.appendChild(wrongAnswer1)
    wrongAnswer1.innerText="WRONG!";
    
}
