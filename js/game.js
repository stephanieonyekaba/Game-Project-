//Variables for circles and containers (CIRCLE1)
let hideHome = document.getElementById('hideHome');
let button = document.getElementById('button');
let container = document.getElementById('container')
const circleContainer = document.getElementById('circleContainer');
const smallContainer = document.getElementById('smallContainer');
const guessTheCircle = document.createElement('div')
let clock = document.createElement('div')
let timeIsUpBoard = document.createElement('div')


let points = 0;
let circle
let correctAnswer1
let wrongAnswer1



const showHomeScreen = () => {
    hideHome.style.display = "flex"
    smallContainer.appendChild(hideHome)
    points = 0;

   
}







//created an event listener to hide the homescreen when "start game" is clicked
let hideHomeScreen = () => {
    if(hideHome.style.display == "flex") {
     hideHome.style.display = "none"; 
     button.style.display = "none"; 

    } 
    else {
        hideHome.style.display = "none" 
    }

        clock.classList.add('clock')

        clock.textContent = counter;

    
    timeIsUpBoard.classList.add('timeIsUpBoard')
    timeIsUpBoard.innerText = "Time is up!"
    container.appendChild(timeIsUpBoard);
    timeIsUpBoard.id = "timeIsUpBoard";

    }




    


let counter = 5; 
//countdown timer 
const startCountDown = () => {
    

      const interval = setInterval(() => {
        counter--;
     if (counter < 0 ) {
        clearInterval(interval);
        smallContainer.style.display = "none";
        timeIsUpBoard.style.display = "flex";
        timeIsUpBoard.textContent = "Game Over !  " + " Your Score is  " + points;

 
      } 
    }, 1000);
    }
 
//   startCountDown(5);

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
    //loop until desired number of circles 
        for(let i = 0; i < num; i++) {
            //this is the counter for my timer
            counter = 5;
            //the next three lines make and add my circles
            circle = document.createElement('div')
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
            if (i == 2 && level == 3) {
                circle.style.backgroundColor = offOrangeColor;
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
            if(i != 2 && level == 3) {
                circle.style.backgroundColor = orangeColor; 
                circle.addEventListener("click", clickCircle1Wrong);  
            }
            

        }
        

    }  
    
        

//create a function that runs the startgame 
//this function will be what calls makes circles for each level 
//it also will determine 

  currentLevel = 1;
const startGame = () => {
    
    guessTheCircle.classList.add('guessTheCircle')
    guessTheCircle.innerText = "Which Color Doesnt Match ?"
    smallContainer.appendChild(guessTheCircle)
    guessTheCircle.id = "guessTheCircleHeading";

    smallContainer.appendChild(clock)
    guessTheCircle.id = "clock";

    
    


   
    if(currentLevel == 1) {
        
        makeCircles(4, 1)
        currentLevel = (currentLevel + 1)
        return currentLevel
        
    }
    if(currentLevel == 2) {
        makeCircles(6, 2)
        currentLevel = (currentLevel + 1)
        return
    }
    else if(currentLevel == 3) {
        makeCircles(8, 3)
        currentLevel = (currentLevel + 1)
        return
    } 
    else {
        console.log("Game over")
    }

    
}



//CLEAR LEVEL FUNCTION 
const clearLevel = () => {
    document.getElementsByClassName('circle')
    while (circleContainer.firstChild) {
    circleContainer.removeChild(circleContainer.firstChild)
    }

    smallContainer.removeChild(smallContainer.firstChild)
    points = (points + 1)
    return points
    
    
}



//this calls start game function. change to start game
document.getElementById('start-button').addEventListener("click", startGame)





clickCircle1Correct = () => {
    counter = 100;

    smallContainer.innerHTML="";
    correctAnswer1 = document.createElement('div');
    correctAnswer1.classList.add('correctAnswer1');
    smallContainer.appendChild(correctAnswer1)
    correctAnswer1.innerText="CORRECT";
    

    const nextLevelButton = document.createElement('button'); 
    nextLevelButton.classList.add('nextLevelButton')
    nextLevelButton.id = "nextLevelButton"
    nextLevelButton.innerText="next"
    correctAnswer1.appendChild(nextLevelButton)
    document.getElementById('nextLevelButton').addEventListener("click", clearLevel)
    document.getElementById('nextLevelButton').addEventListener("click", startGame)
    
  
}

const youLose = () => {
    points = (points - 1)

    smallContainer.innerHTML="";
    gameOver = document.createElement('div');
    gameOver.classList.add('gameOver');
    smallContainer.appendChild(gameOver)
    gameOver.innerText="GAME OVER " + "score: " + points ;
   



    const playAgain = document.createElement('button'); 
    playAgain.classList.add('playAgain')
    playAgain.id = "playAgain"
    playAgain.innerText="play again"
    gameOver.appendChild(playAgain)
    currentLevel = 1;
    
    document.getElementById('playAgain').addEventListener("click", clearLevel)


    document.getElementById('playAgain').addEventListener("click", showHomeScreen)
   

}



clickCircle1Wrong = () => {
    counter = 100;
    smallContainer.innerHTML="";
    wrongAnswer1 = document.createElement('div');
    wrongAnswer1.classList.add('wrongAnswer1');
    smallContainer.appendChild(wrongAnswer1)
    wrongAnswer1.innerText="WRONG!";
    
    const previousLevelButton = document.createElement('button'); 
    previousLevelButton.classList.add('previousLevelButton')
    previousLevelButton.id = "previousLevelButton"
    previousLevelButton.innerText="You Lose"
    wrongAnswer1.appendChild(previousLevelButton)
    document.getElementById('previousLevelButton').addEventListener("click", clearLevel)

    document.getElementById('previousLevelButton').addEventListener("click", youLose)
    
}


