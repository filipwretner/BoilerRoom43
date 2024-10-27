let isRunning = true; // This variable is used to check whether the user wants the application to keep running or not
let hist = []; // Initiating an empty array to store calculations

// Function for the main menu
function mainMenu() {

    let menuChoice; // Used to determine where the user wants to go from the main menu

    do {

        console.log(`Huvudmeny:
        1. Använd kalkylatorn för enkla operationer
        2. Visa multiplikationstabell
        3. Kalkylera rot
        4. Kalkylera logaritm
        5. Kalkylera trigonmetri
        6. Visa instruktioner
        7. Visa historik
        8. Avsluta applikationen`);

        menuChoice = prompt(`Välkommen! Välj ett av alternativen:
        1. Använd kalkylatorn för enkla operationer
        2. Visa multiplikationstabell
        3. Kalkylera rot
        4. Kalkylera logaritm
        5. Kalkylera trigonometri
        6. Visa instruktioner
        7. Visa historik
        8. Avsluta applikationen`); // Declaring the variable that decides which function to start

        switch (menuChoice) {

            case '1': // Simpler calculations
                performOperation();
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

            case '6': // If the user wants instructions on how to use the application
                console.log(`1. Välj vad du vill kalkylera eller visa.`);
                console.log(`2. Följ instruktionerna noga, vid vissa kalkyleringar krävs två nummer och vid andra krävs bara ett nummer. Vissa operationer kräver även att du gör ytterligare val av kalkylering.`);
                console.log(`3. 3. Resultatet av beräkningen sparas sedan i historiken vilket du når genom att mata in '7' i huvudmenyn.`);
                alert(`
                1. Välj vad du vill kalkylera eller visa.
                2. Följ instruktionerna noga, vid vissa kalkyleringar krävs två nummer och vid andra krävs bara ett nummer. Vissa operationer kräver även att du gör ytterligare val av kalkylering.    
                3. Resultatet av beräkningen sparas sedan i historiken vilket du når genom att mata in '7' i huvudmenyn.`);
                break;

            case '7': // Print out previous results
                showHistory();
                break;

            case '8': // Exit application
                console.log(`Avslutar applikationen...`);
                alert(`Avslutar applikationen...`);
                isRunning = false;
                break;

            default: // Error message if user puts in different than the numbers 1-8
                console.log(`Ogiltig inmatning, välj ett av alternativen.`);
                alert(`Ogiltig inmatning, välj ett av alternativen.`);

        }

    } while (isRunning == true); // Menu keeps running until this condition isnt met (as long as the user doesnt put in 7)
}

// Function for performing more basic calculations
function performOperation() {

    // Initiating the inputs and declaring the result variable
    let firstUserInput = parseFloat(prompt(`Ange det första talet:`));
    let operationChoice = prompt(`Vilken operation vill du genomföra? Skriv in det tecken som motsvarar operation: +, -, *, /, % eller **`);
    let secondUserInput = parseFloat(prompt(`Ange det andra talet:`));
    let result;

    if (isNaN(firstUserInput) || isNaN(secondUserInput)) { // Making sure the user put in numbers in the prompt
        console.log(`Ogiltig inmatning, skriv in ett nummer.`);
        alert(`Ogiltig inmatning, skriv in ett nummer`);
        return;
    } 

    // Initiating result-variable depending on the chosen operator with the help of ternary operators. 
    result = operationChoice === '+' ? firstUserInput + secondUserInput: // Addition

    operationChoice === '-' ? firstUserInput - secondUserInput: // Subraction

    operationChoice === '*' ? firstUserInput * secondUserInput: // Multiplication

    (operationChoice === '/' && secondUserInput === 0) ? "Ogiltig inmatning, kan inte dividera med 0.": // Error message when denominator is 0
    operationChoice === '/' ? firstUserInput / secondUserInput: // Division

    (operationChoice === '%' && secondUserInput === 0) ? "Ogiltig inmatning, kan inte göra modulus när andra talet är 0.": // Error when denominator is 0
    operationChoice === '%' ? firstUserInput % secondUserInput: // Modulus

    operationChoice === '**' ? firstUserInput ** secondUserInput: // Exponentiation

    "Ogiltig inmatning, välj en av de tillgängliga operatörerna"; // Error message if user enters a different input than what's shown in the menu

    console.log(`${firstUserInput} ${operationChoice} ${secondUserInput} = ${result}`);
    alert(`${firstUserInput} ${operationChoice} ${secondUserInput} = ${result}`);
    
    if ((operationChoice === '/' || operationChoice === '%') && secondUserInput === 0) {} else {
        hist.push(`${firstUserInput} ${operationChoice} ${secondUserInput} = ${result}`);
    }

}

// Function to print out the multiplication table for a number
function showMultiplicationTable() {
    let firstUserInput = Number(prompt(`Vilket tal vill du visa multiplikationstabellen för?`));
    let secondUserInput = Number(prompt(`Hur mycket av multiplikationstabellen ska visas? (Sista talet som multipliceras)`));

    let table = ""; // Declared as empty string, otherwise it prints out undefined when showing the table

    for (let i = 1; i <= secondUserInput; i++) { // Prints out the multiplication table for the first number until the index reaches the second number the user put in
        table += `${firstUserInput} * ${i} = ${firstUserInput * i}\n`
    }

    console.log(`Multiplikationstabell för talet ${firstUserInput}:\n ${table}`);
    alert(`Multiplikationstabell för talet ${firstUserInput}:\n ${table}`);

    hist.push(`Multiplikationstabell för talet ${firstUserInput}:\n ${table}`); // Adds the multiplicationtable to the array

    return;
}

// Function for performing root calculations
function performRoot() {
    let rootChoice = Number(prompt(`Vill du: 1. Kvadratrot 2. Kubrot`));
    let userInput = Number(prompt(`Vilket tal vill du dra roten ur?`));

    if (isNaN(userInput)) { // Error message if the user puts in text in the second prompt
        console.log(`Ogiltig inmatning, vänligen skriv ett tal.`);
        alert(`Ogiltig inmatning, vänligen skriv ett tal.`);
        return;

    } else if (rootChoice === 1 && userInput < 0) { // Error message if the user tries to take the square root of a negative number
        console.log(`Kan inte dra kvadratroten ur ett negativt tal, vänligen skriv in ett positivt tal.`);
        alert(`Kan inte dra kvadratroten ur ett negativt tal, vänligen skriv in ett positivt tal.`);
        return;

    }

    let result;

    switch (rootChoice) {
        case 1: // Square root calculation
            result = Math.sqrt(userInput);
            console.log(`Kvadratrotet av ${userInput} är: ${result}`);
            alert(`Kvadratrotet av ${userInput} är: ${result}`);
            break;

        case 2: // Cubic root calculation
            result = Math.cbrt(userInput);
            console.log(`Kubikroten av talet ${userInput} är ${result}`);
            alert(`Kubikroten av talet ${userInput} är ${result}`);
            break;

        default: // Error if user puts in something other than 1 or 2 in the first prompt
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
            alert(`Ogiltig inmatning, välj ett av alternativen.`);
    }

    if (rootChoice === 1) {
        hist.push(`Kvadratroten av ${userInput}: = ${result}`)
    } else if (rootChoice === 2) {
        hist.push(`Kubikroten av ${userInput}: = ${result}`)
    }
}

// Function for performing logarithmic calculations
function performLog() {
    let logChoice = Number(prompt(`Vill du genomföra: 1. Naturlig logaritm eller 2. Logaritm med basen 10`));
    let userInput =  Number(prompt(`Vilket tal vill du dra logaritmen ur?`));

    if (isNaN(userInput)) { // Checks if user put in number like instructed
        console.log(`Ogiltig inmatning, vänligen skriv in ett tal.`);
        alert(`Ogiltig inmatning, vänligen skriv in ett tal.`);
        return;
    }

    let result;
    
    switch (logChoice) {

        case 1: // Calculation for natural logarithm
            result = Math.log(userInput);
            console.log(`Naturlig logaritm för talet ${userInput} är: ${result}`);
            alert(`Naturlig logaritm för talet ${userInput} är: ${result}`);
            break;

        case 2: // Calculation for logarithm with a base of 10
            result = Math.log10(userInput);
            console.log(`Logaritmen med basen 10 för talet ${userInput} är ${result}`);
            alert(`Logaritmen med basen 10 för talet ${userInput} är ${result}`);
            break;

        default: // Error if user puts in something other than 1 or 2 in the first prompt
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
            alert(`Ogiltig inmatning, välj ett av alternativen.`);
    }

    if (logChoice === 1) {
        hist.push(`Log(${userInput}) = ${result}`)
    } else if (logChoice === 2) {
        hist.push(`Log10(${userInput}) = ${result}`)
    }
}

// Function for peforming trigonometric calculations
function performTrig() {
    let trigChoice = Number(prompt(`Vill du använda: 1. Sinus 2. Cosinus eller 3. Tangens`));
    let userInput = Number(prompt(`Ange grader på en vinkel:`));

    if (isNaN(userInput)) { // Checks if the user put in a number like instructed
        console.log(`Ogiltig inmatning, vänligen skriv in ett tal.`);
        alert(`Ogiltig inmatning, vänligen skriv in ett tal.`);
        return;
    }

    let angleRad = userInput * (Math.PI / 180); // Converts angle degrees to radian
    let result;

    switch (trigChoice) {
        case 1: // Calculation for sinus
            result = Math.sin(angleRad);
            console.log(`Sinus: ${result}`);
            alert(`Sinus: ${result}`);
            break;

        case 2: // Calculation for cosinus
            result = Math.cos(angleRad);
            console.log(`Cosinus: ${result}`);
            alert(`Cosinus: ${result}`);
            break;

        case 3: // Calculation for tangens
            result = Math.tan(angleRad);
            console.log(`Tangens: ${result}`);
            alert(`Tangens: ${result}`);
            break;

        default: // Error if user puts in something other than 1, 2 or 3 in the first prompt 
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
            alert(`Ogiltig inmatning, välj ett av alternativen.`);
    }

    if (trigChoice === 1) { // Adds different string to array depending on trigonometry choice
        hist.push(`Sinus för vinkeln ${userInput}: sin(${angleRad}) = ${result}`);
    } else if (trigChoice === 2) {
        hist.push(`Cosinus för vinkeln ${userInput}: cos(${angleRad}) = ${result}`)
    } else if (trigChoice === 3) {
        hist.push(`Tangens för vinkeln ${userInput}: tan(${angleRad}) = ${result}`)
    }

}

// Function to print the history of previous calculations
function showHistory() {

    if (hist.length === 0) { // If the array is empty we print that out 
        console.log(`Inga beräkningar har genomförts än`);
        alert(`Inga beräkningar har genomförts än`);

    } else { // Prints the whole array
        console.log(`Beräkningshistorik:\n ${hist.join(', ')}`);
        alert(`Beräkningshistorik:\n ${hist.join(', ')}`);

    }
}

mainMenu(); // Making sure the application actually runs