let isRunning = true; // This variable is used to check if the user wants the application to keep running or not

// Function for the main menu
function mainMenu() {

    let menuChoice; // Used to determine where the user wants to go from the main menu

    do {

        console.log(`Huvudmeny:`);
        console.log(`1. Använd Kalkylatorn`);
        console.log(`2. Visa Multiplikationstabell`);
        console.log(`3. Kalkylera rot`);
        console.log(`4. Kalkylera logaritm`);
        console.log(`5. Kalkylera trigonmetri`);
        console.log(`6. Visa historik`);
        console.log(`7. Avsluta Applikationen`);
        menuChoice = prompt(`Välkommen! Välj ett av alternativen:`);

        switch (menuChoice) {

            case '1': // Separate menu for simpler calculations
                calculatorMenu();
                break;

            case '2': // If the user wants to print out the multiplication table for a number 
                showMultiplicationTable();
                break;

            case '3': // If the user wants to perform an operation for the root of a number
                performRoot();
                break;

            case '4': // If the user wants to perform a logarithmic operation
                performLog();
                break;

            case '5': // If the user wants to perform a trignometric operation
                performTrig();
                break;

            case '6': // Print out previous results
                showHistory();
                break;

            case '7': // Exit application
                console.log(`Avslutar applikationen...`);
                isRunning = false;
                break;
                
            default: // Error message if user puts in different than the numbers 1-7
                console.log(`Ogiltig inmatning, välj ett av alternativen.`);

        }

    } while (isRunning == true); // Menu keeps running until this condition isnt met (as long as the user doesnt put in 7)
}

// Function for the menu that decides which operation the calculator is going to perform
function calculatorMenu() {

    let operationChoice; // Used to determine what operation the user wants to use

    do {
        console.log(`Meny för kalkylatorn:`);
        console.log(`1. Addition`);
        console.log(`2. Subtraktion`);
        console.log(`3. Multiplikation`);
        console.log(`4. Division`);
        console.log(`5. Modulus`);
        console.log(`6. Exponentiering`);
        console.log(`7. Visa historik`);
        console.log(`8. Visa instruktioner`);
        console.log(`9. Gå tillbaka till huvudmenyn`);
        console.log(`10. Avsluta applikationen`);
        operationChoice = prompt(`Välkommen till kalkylatorn! Välj ett alternativ:`);

        switch (operationChoice) {

            // First set of cases decides which operation is going to be performaed
            case '1':
                performOperation('+');
                break;

            case '2':
                performOperation('-');
                break;

            case '3':
                performOperation('*');
                break;

            case '4':
                performOperation('/');
                break;

            case '5':
                performOperation('%');
                break;

            case '6':
                performOperation('**');
                break;

            case '7': // Showing previous results 
                showHistory();
                break;

            case '8': // Short instructions on how to use the application
                console.log(`1. Välj vilken operation du vill genomföra.`);
                console.log(`2. Ange de två tal som du vill genomföra operationen med.`);
                console.log(`3. Resultatet av din beräkning sparas i historiken vilket du sedan når genom kalkylatormenyn.`);
                break;

            case '9': // Back to main menu
                return;

            case '10': // Exit application
                console.log(`Avslutar applikationen...`);
                isRunning = false;
                return;

            default:
                console.log(`Ogiltig inmatning, välj ett av alternativen.`);
        }
    } while (operationChoice !== '9' && isRunning == true); //The menu runs until the user wants to go back to the main menu or exit the whole application
}

// Function for performing more basic calculations
function performOperation(operationChoice) {
    let firstUserInput = parseFloat(prompt(`Ange det första talet:`));
    let secondUserInput = parseFloat(prompt(`Ange det andra talet:`));
    let result;

    if (isNaN(firstUserInput) || isNaN(secondUserInput)) { // Making sure the user put in numbers in the prompt
        console.log(`Ogiltig inmatning, skriv in ett nummer.`);
        return;
    } 

    // Initiating result-variable depending on the chosen operator with the help of ternary operators. 
    result = operationChoice === '+' ? firstUserInput + secondUserInput: // Addition

    operationChoice === '-' ? firstUserInput - secondUserInput: // Subratction

    operationChoice === '*' ? firstUserInput * secondUserInput: // Multiplication

    (operationChoice === '/' && secondUserInput === 0) ? "Ogiltig inmatning, kan inte dividera med 0.": // Error message when denominator is 0
    operationChoice === '/' ? firstUserInput / secondUserInput: // Division

    (operationChoice === '%' && secondUserInput === 0) ? "Ogiltig inmatning, kan inte göra modulus när andra talet är 0.": // Error when denominator is 0
    operationChoice === '%' ? firstUserInput % secondUserInput: // Modulus

    operationChoice === '**' ? firstUserInput ** secondUserInput: // Exponentiation

    "Ogiltig inmatning, välj en av de tillgängliga operatörerna"; // Error message if user enters a different input than what's shown in the menu

    console.log(`${result}`);

}

// Function for performing root calculations
function performRoot() {
    let rootChoice = Number(prompt(`Vill du: 1. Kvadratrot 2. Kubrot`));
    let userInput = Number(prompt(`Vilket tal vill du dra roten ur?`));

    if (isNaN(userInput)) { // Error message if the user puts in text in the second prompt
        console.log(`Ogiltig inmatning, vänligen skriv ett tal.`);
        return;

    } else if (rootChoice === 1 && userInput < 0) { // Error message if the user tries to take the square root of a negative number
        console.log(`Kan inte dra kvadratroten ur ett negativt tal, vänligen skriv in ett positivt tal.`);
        return;

    }

let result;

    switch (rootChoice) {
        case 1: // Square root calculation
            result = Math.sqrt(userInput);
            console.log(`Kvadratrotet för talet ${userInput} är: ${result}`);
            break;

        case 2: // Cubic root calculation
            result = Math.cbrt(userInput);
            console.log(`Kubikroten för talet ${userInput} är ${result}`);
            break;

        default: // Error if user puts in something other than 1 or 2 in the first prompt
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
    }
}

// Function for performing logarithmic calculations
function performLog() {
    let logChoice = Number(prompt(`Vill du genomföra: 1. Naturlig logaritm eller 2. Logaritm med basen 10`));
    let userInput =  Number(prompt(`Vilket tal vill du dra logaritmen ur?`));

    if (isNaN(userInput)) { // Checks if user put in number like instructed
        console.log(`Ogiltig inmatning, vänligen skriv in ett tal.`);
        return;
    }

    let result;
    
    switch (logChoice) {

        case 1: // Calculation for natural logarithm
            result = Math.log(userInput);
            console.log(`Naturlig logaritm för talet ${userInput} är: ${result}`);
            break;

        case 2: // Calculation for logarithm with a base of 10
            result = Math.log10(userInput);
            console.log(`Logaritmen med basen 10 för talet ${userInput} är ${result}`);
            break;

        default: // Error if user puts in something other than 1 or 2 in the first prompt
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
    }
}

// Function for peforming trigonometric calculations
function performTrig() {
    let trigChoice = Number(prompt(`Vill du använda 1. Sinus 2. Cosinus eller 3. Tan`));
    let userInput = Number(prompt(`Ange grader på vinkel:`));

    if (isNaN(userInput)) { // Checks if the user put in a number like instructed
        console.log(`Ogiltig inmatning, vänligen skriv in ett tal.`);
        return;
    }

    let angleRad = userInput * (Math.PI / 180); // Converts angle degrees to radian
    let result;

    switch (trigChoice) {
        case 1: // Calculation for sinus
            result = Math.sin(angleRad);
            console.log(`Sinus: ${result}`);
            break;

        case 2: // Calculation for cosinus
            result = Math.cos(angleRad);
            console.log(`Cosinus: ${result}`);
            break;

        case 3: // Calculation for tangens
            result = Math.tan(angleRad);
            console.log(`Tangens: ${result}`);
            break;

        default: // Error if user puts in something other than 1, 2 or 3 in the first prompt 
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
    }

}

// Function to print out the multiplication table for a number
function showMultiplicationTable() {
    let firstInput = Number(prompt(`Vilket tal vill du visa multiplikationstabellen för?`));
    let secondInput = Number(prompt(`Hur mycket av multiplikationstabellen ska visas? (Sista talet som multipliceras)`));

    for (let i = 1; i <= secondInput; i++) { // Prints out the multiplication table for the first number until the index reaches the second number the user put in
        console.log(`${firstInput} * ${i} = ${firstInput * i}`);
    }

    return;
}

function showHistory() {

}

mainMenu();