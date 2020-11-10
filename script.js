
    function computerPlay() {
        function getNumber(){
            return Math.floor(Math.random()*(3-1+1))+1;

        }
    
        let x= getNumber();
        if (x==1) {return 'rock'}
        else if (x==2) {return 'paper'}
        else {return 'scissors'}
    }

    
    

        
        const rockButton= document.querySelector('#rock');
        const paperButton = document.querySelector('#paper');
        const scissorsButton = document.querySelector('#scissors');
        const restartButton = document.querySelector('#restart');
        const currentRound=document.querySelector('#round');
        

        rockButton.addEventListener('click',() =>{
            var playerSelection='rock';
            var computerSelection = computerPlay();
            compare(computerSelection,playerSelection);
            scores();
    
        })
        paperButton.addEventListener('click',() =>{
            playerSelection='paper'
            computerSelection=computerPlay();
            compare(computerSelection,playerSelection);
            scores();
        })
        scissorsButton.addEventListener('click',() =>{
            playerSelection= 'scissors';
            computerSelection=computerPlay();
            compare(computerSelection,playerSelection)
            scores();
        })
        restartButton.addEventListener('click',() =>{
            count1=0;
            count2=0;
            round=1;
            currentRound.textContent= 'ROUND: 1'
            scoreBoard.textContent='Player: 0 Computer: 0'
            results.textContent='';
            bestOfFive.textContent='';
        })
    
    
    var results= document.querySelector('#results');
    var scoreBoard= document.querySelector('#scoreBoard');
    var bestOfFive= document.querySelector('#bestOfFive'); 
    var count1=0; 
    var count2=0;
    var round=1;
    
        
    function compare(computerSelection,playerSelection){
        if (computerSelection === playerSelection){
            results.textContent="it's a tie";
        }
        if (playerSelection==='rock'){
            if (computerSelection==='paper'){
                results.textContent= 'You lose! paper wins';
                count2++;
            }
            else { 
                if (computerSelection==='scissors'){
                    results.textContent= 'You win! rock wins';
                    count1++;
                }
            }
        }
        else if (playerSelection==='paper'){
            if (computerSelection==='rock'){
                results.textContent= 'You win! paper wins'
                count1++;
            }
            else { 
                if (computerSelection==='scissors'){
                    results.textContent= 'You lose!scissors wins'
                    count2++;
                }
            }
        } 
        else if (playerSelection==='scissors'){
            if (computerSelection==='paper'){
                results.textContent= 'You win! scissors wins'
                count1++
            }
            else { 
                if (computerSelection==='rock'){
                    results.textContent= 'You lose! rock wins'
                    count2++
                }
            }
        }
    }

    function scores(){
        scoreBoard.textContent= 'Player: '+count1+' Computer: '+count2
        
        if (count1===5){
            bestOfFive.textContent='You win'+' ROUND: '+round;
            count1=0;
            count2=0;
            round++;
            currentRound.textContent= 'ROUND: '+round;
        }
        else if (count2===5){
            bestOfFive.textContent='Computer wins'+' ROUND: '+round;
            count1=0;
            count2=0;
            round++;
            currentRound.textContent= 'ROUND: '+round;
        }

    }
    



