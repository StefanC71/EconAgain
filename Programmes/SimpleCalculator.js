//This imports a module allowing readable streams for user input, and writeable streams for output
//I would have used prompt but nodejs doesn't like prompt or require even having used npm install prompt-sync
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});


//initialises the starting sum as 0
 var sum = 0;


//function to perform the actual calculation
function performCalculation(num1, choice, num2) {

    //If statements to perform the correct calculation 
    if (choice === 1) {
    sum = num1 + num2;

    } else if (choice === 2) {
        sum = num1 - num2;

    } else if (choice ===3) {
        sum = num1 * num2;

    } else if (choice === 4) {
        sum = num1 / num2;

    }

    //writes the answer to the terminal    
    console.log(`The sum is: ` + sum);
}


//function for the user to input another number for the calculation
function enterAnotherNumer(num1, choice){
  
    //prompts the user for the next number
    rl.question('Please enter your next number ', (num2) => {

        //forces the string to convert to an integer
        num2 = num2 * 1;

     //moves to the function to perform the calculation and passes the variables to it
     var newNum2= performCalculation(num1, choice, num2);

     });
}

//function for the user to input the calculation choice of + - * /
function calculationChoice(num1){

    //Displays available choices to user 
    console.log('Type the number of the calculation you wish to perform');
    console.log('1. Add');
    console.log('2. Subtract');
    console.log('3. Multiply');
    console.log('4. Divide');

    //reads the users choice from the above
    rl.question('Please enter your choice of calculation ', (choice) => {

        //forces the string input to convert to an integer
        choice = choice * 1;

     //moves to the function to choose the next number type and passes variables to it
     var newChoice = enterAnotherNumer(num1, choice);

    });
}


//function for the user to input their starting number of the calculation
function enterFirstNumber(){

     //prompts the user with questions for the first number they will use
     rl.question('Please enter your first number ', (num1) => {

        //forces the string to convert to an integer
        var num1 = num1 * 1;

        //moves to the function to choose the calculation type and passes num1 to it  
        var newNum1 = calculationChoice(num1);
    
     });
}

//calls the first function to start the programme
enterFirstNumber();

        //Closes transmitting so the process does not remain idle
        //rl.close();

