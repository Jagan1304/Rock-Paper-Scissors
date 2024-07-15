let score =  JSON.parse(localStorage.getItem('scores'));

            if(!score){
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            }



            function pickComputerMove(){
                let computerMove = ''

                let randomNumber = Math.random();
            
                if(randomNumber>0 && randomNumber<1/3){
                    computerMove = 'Rock';
                }
                else if(randomNumber>1/3 && randomNumber<2/3){
                    computerMove = 'Paper';
                }
                else{
                    computerMove = 'Scissors'
                }
                return computerMove;
            }

            updateScore();

            function playGame(playerMove){
                computerMove = pickComputerMove()

                let result = '';

                if(playerMove === 'Scissors'){
                    if(computerMove === 'Rock'){
                        result = 'You Lose';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'You Win';
                    }
                    else{
                        result = 'Tie';
                    }
                }

                else if(playerMove === 'Paper'){
                    if(computerMove === 'Rock'){
                        result = 'You Win';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'Tie';
                    }
                    else{
                        result = 'You Lose';
                    }
                }

                else if(playerMove === 'Rock'){
                    if(computerMove === 'Rock'){
                        result = 'Tie';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'You Lose';
                    }
                    else{
                        result = 'You Win';
                    }
                }

                if(result === 'You Win'){
                    score.wins+=1;
                }
                else if(result === 'You Lose'){
                    score.losses+=1;
                }
                else if(result === 'Tie'){
                    score.ties+=1;
                }
                localStorage.setItem('scores',JSON.stringify(score)); //loclStorage stores only in string. We need to convert JavaScript object to string
                //JSON type is string as we discussed in objects session
                
                updateScore();

                document.querySelector('.js-result').innerHTML = result;

                document.querySelector('.js-res').innerHTML = `You Picked <img src="../Exercise/Images//${playerMove}-emoji.png" class="image">. Computer picked <img src="../Exercise/Images//${computerMove}-emoji.png" class="image">`;

            }

            function updateScore(){
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
            }