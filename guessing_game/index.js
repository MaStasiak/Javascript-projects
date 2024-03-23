const min_num = 1;
const max_num = 100;
const answer = Math.floor(Math.random() * (max_num - min_num + 1));

let attempt = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${min_num} and ${max_num}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a number");
    }
    else if(guess < min_num || guess > max_num){
        window.alert(`Please enter a number in range between ${min_num} and ${max_num}`);
    }
    else{
        attempt++;
        if(guess < answer){
            window.alert("Number too low. Try again");
        }
        else if(guess > answer){
            window.alert("Number is too high. Please try again")
        }
        else{
            window.alert(`You did it! The answer was ${answer}. It took you ${attempt} attempts.`)
            running = false;
        }
    }
    
    
}
 
