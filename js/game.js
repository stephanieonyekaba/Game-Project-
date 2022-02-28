//Variables for circles and containers (CIRCLE1)
let hideHome = document.getElementById('hideHome');
let button = document.getElementById('button');
let container = document.getElementById('container')
const circleContainer = document.getElementById('circleContainer');
const smallContainer = document.getElementById('smallContainer');
const guessTheCircle = document.createElement('div')
let clock = document.createElement('div')
let timeIsUpBoard = document.createElement('div')
const correctDing = new Audio('DING 2.mp3');
const youWinAudio = new Audio('YOUWIN.wav')
const timesUp = new Audio('TIMEISUP.wav')
const wrongDing = new Audio('WRONG.wav')
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
    //  button.style.display = "none"; 

    } 
    else {
        hideHome.style.display = "none" 
    }

     

    
    timeIsUpBoard.classList.add('timeIsUpBoard')
    timeIsUpBoard.innerText = "Time is up! " + " score: " + points
    container.appendChild(timeIsUpBoard);
    timeIsUpBoard.id = "timeIsUpBoard";
    

   


    }

    

    let counter = 10; 
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
            timesUp.play();
     
          } 
        }, 1000);
        
        }
     
      startCountDown(10);
    
    


//color levels
const blueColor = "rgb(18, 142, 230)"
const offBlueColor = "rgb(73, 221, 235)"

const greenColor = "rgb(53, 219, 20)"
const offGreenColor = "rgb(39, 161, 71)"

const orangeColor = "rgb(237, 162, 12)"
const offOrangeColor = "rgb(232, 185, 90)"

const purpleColor = "rgb(90, 92, 224)"
const offPurpleColor = "rgb(82, 84, 179)"

const yellowColor = "rgb(207, 190, 10)"
const offYellowColor = "rgb(255, 244, 122)"

//made circles and added color to them
//num is the number of circles I want 
//level is a number that represents what level the game is on 
//example: level1 calls makeCircles like this: makeCircles(4, 1)
//example: level2 calls makeCircles like this: makeCircles(6, 2)


const makeCircles = (num, level) => {
    //loop until desired number of circles 
        for(let i = 0; i < num; i++) {
            //this is the counter for my timer
            counter = 10;
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
            if (i == 1 && level == 2) {
                circle.style.backgroundColor = offGreenColor;
                circle.addEventListener("click", clickCircle1Correct);  
            } 
            if (i == 2 && level == 3) {
                circle.style.backgroundColor = offOrangeColor;
                circle.addEventListener("click", clickCircle1Correct);
            }
            if (i == 9 && level == 4) {
                circle.style.backgroundColor = offPurpleColor;
                circle.addEventListener("click", clickCircle1Correct);  
            } 
            if (i == 0 && level == 5) {
                circle.style.backgroundColor = offYellowColor;
                circle.addEventListener("click", clickCircle1Correct);
            }    
            if(i != 2 && level == 1) {
                circle.style.backgroundColor = blueColor; 
                circle.addEventListener("click", clickCircle1Wrong);  
            } 
            if(i != 1 && level == 2) {
                circle.style.backgroundColor = greenColor; 
                circle.addEventListener("click", clickCircle1Wrong);  
            } 
            if(i != 2 && level == 3) {
                circle.style.backgroundColor = orangeColor; 
                circle.addEventListener("click", clickCircle1Wrong);  
            }
            if(i != 9 && level == 4) {
                circle.style.backgroundColor = purpleColor; 
                circle.addEventListener("click", clickCircle1Wrong);  
            }
            if(i != 0 && level == 5) {
                circle.style.backgroundColor = yellowColor; 
                circle.addEventListener("click", clickCircle1Wrong);  
            }
        }
        

    }  
    
//YOU WIN OUTCOME
    const youWin = () => {
        smallContainer.innerHTML="";
        youWon = document.createElement('div');
        youWon.classList.add('youWon');
        smallContainer.appendChild(youWon)
        youWon.innerText="You Won! " + "Score: " + points;
        youWinAudio.play();





    const playAgain = document.createElement('button'); 
    playAgain.classList.add('playAgain')
    playAgain.id = "playAgain"
    playAgain.innerText="play again"
    youWon.appendChild(playAgain)
    currentLevel = 1;
    
    document.getElementById('playAgain').addEventListener("click", clearLevel)


    document.getElementById('playAgain').addEventListener("click", showHomeScreen)
    }

//create a function that runs the startgame 
//this function will be what calls makes circles for each level 
//it also will determine 

  currentLevel = 1;
const startGame = () => {
    
    guessTheCircle.classList.add('guessTheCircle')
    guessTheCircle.innerText = "Which Color Doesnt Match ?"
    guessTheCircle.id = "guessTheCircleHeading";
    smallContainer.appendChild(guessTheCircle)
   
    clock.classList.add('clock')
    guessTheCircle.appendChild(clock)


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
    else if(currentLevel == 4) {
        makeCircles(12, 4)
        currentLevel = (currentLevel + 1)
        return
    } 
    else if(currentLevel == 5) {
        makeCircles(5, 5)
        currentLevel = (currentLevel + 1)
        return
    } 
    else {
        youWin();
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
    
    correctDing.play();
    smallContainer.innerHTML="";
    correctAnswer1 = document.createElement('div');
    correctAnswer1.classList.add('correctAnswer1');
    smallContainer.appendChild(correctAnswer1)
    correctAnswer1.innerText="CORRECT";
    

    const nextLevelButton = document.createElement('button'); 
    nextLevelButton.classList.add('nextLevelButton')
    nextLevelButton.id = "nextLevelButton"
    nextLevelButton.innerText="Next"
    correctAnswer1.appendChild(nextLevelButton)
    document.getElementById('nextLevelButton').addEventListener("click", clearLevel)
    document.getElementById('nextLevelButton').addEventListener("click", startGame)
    
    counter = 100;
  
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

    counter = 100;
    wrongDing.play();
    
}
  
document.addEventListener('DOMContentLoaded', () => {
    console.log("hi")
    
})