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
        counter--;


     if (counter < 0 ) {
        clearInterval(interval);
        smallContainer.style.display = "none";
        timeIsUpBoard.style.display = "flex";
        console.log("out of time");
 
      } 
    }, 1000);
    }
 
  startCountDown(5);


//made circles and added color to them
const makeCircles = () => {

        for(let i = 0; i < 4; i++) {
            counter = 5;
            const circle = document.createElement('div')
            circle.classList.add('circle')
            circleContainer.appendChild(circle)
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
counter = 100;
smallContainer.innerHTML="";
const correctAnswer1 = document.createElement('div');
correctAnswer1.classList.add('correctAnswer1');
smallContainer.appendChild(correctAnswer1)
correctAnswer1.innerText="CORRECT";


round = 2

}

clickCircle1Wrong = () => {
    counter = 100;
    smallContainer.innerHTML="";
    const wrongAnswer1 = document.createElement('div');
    wrongAnswer1.classList.add('wrongAnswer1');
    smallContainer.appendChild(wrongAnswer1)
    wrongAnswer1.innerText="WRONG!";
    
}
