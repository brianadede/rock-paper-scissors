function games(){
    function computerPlay() {
        function getNumber(){
            return Math.floor(Math.random()*(3-1+1))+1;

        }
    
        let x= getNumber();
        if (x==1) {return 'rock'}
        else if (x==2) {return 'paper'}
        else {return 'scissors'}
    }

    const computerSelection = computerPlay();
    
    
    const playerSelection = prompt('rock, paper, scissors?');
      
        
    
        if (computerSelection === playerSelection){
            console.log("it's a tie");}
        if (playerSelection==='rock'){
            if (computerSelection==='paper'){
                console.log('You lose! paper wins')
            }
            else { 
                if (computerSelection==='scissors'){
                    console.log('You win! rock wins')
                }
            }
        }
        if (playerSelection==='paper'){
            if (computerSelection==='rock'){
                console.log('You win! paper wins')
            }
            else { 
                if (computerSelection==='scissors'){
                    console.log('You lose!scissors wins')
                }
            }
        } 
        if (playerSelection==='scissors'){
            if (computerSelection==='paper'){
                console.log('You win! scissors wins')
            }
            else { 
                if (computerSelection==='rock'){
                    console.log('You lose! rock wins')
                }
            }
        }     
}    

function game(){
    for (var i=0;i<5;i++){
        games()
    }
}
