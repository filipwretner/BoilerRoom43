let isRunning = true;

function mainMenu() {
    let menuChoice;

    do {

        console.log(`Huvudmeny:`);
        console.log(`1. Använd Kalkylatorn`);
        console.log(`2. Kalkylera rot`);
        console.log(`3. Kalkylera logaritm`);
        console.log(`4. Kalkylera trigonmetri`);
        console.log(`5. Visa Multiplikationstabell`);
        console.log(`6. Visa historik`);
        console.log(`7. Avsluta Applikationen`);
        menuChoice = prompt(`Välkommen! Välj ett av alternativen:`);

        switch (menuChoice) {
            case '1':
                calculatorMenu();
                break;
            case '2':
                showMultiplicationTable();
                break;
            case '3':
                performRoot();
                break;
            case '4':
                performLog();
                break;
            case '5':
                performTrig();
                break;
            case '6':
                showHistory();
                break;
            case '7':
                console.log(`Avslutar applikationen...`);
                isRunning = false;
                break;
            default:
                console.log(`Ogiltig inmatning, välj ett av alternativen.`);
        }

    } while (isRunning == true);
}

function calculatorMenu() {
    let operationChoice;

    do {
        console.log(`Meny för kalkylatorn:`);
        console.log(`1. Addition`);
        console.log(`2. Subtraktion`);
        console.log(`3. Multiplikation`);
        console.log(`4. Division`);
        console.log(`5. Modulus`);
        console.log(`7. Visa historik`);
        console.log(`8. Visa instruktioner`);
        console.log(`9. Gå tillbaka till huvudmenyn`);
        console.log(`10. Avsluta applikationen`);
        operationChoice = prompt(`Välkommen till kalkylatorn! Välj ett alternativ:`);

        switch (operationChoice) {
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
            case '7':
                showHistory();
                break;
            case '8':
                console.log(`1. Välj vilken operation du vill genomföra`);
                console.log(`2. Ange tal med nummer, kan vara två eller ett tal beroende på operation`);
                console.log(`3. Resultatet av din beräkning sparas i historiken vilket du sedan når genom kalkylatormenyn.`);
                break;
            case '9':
                return;
            case '10':
                console.log(`Avslutar applikationen...`);
                isRunning = false;
                return;
            default:
                console.log(`Ogiltig inmatning, välj ett av alternativen.`);
        }
    } while (operationChoice !== '9' && isRunning == true);
}

function performOperation() {

}

function performRoot() {
    let rootChoice = Number(prompt(`Vill du använda: 1. Kvadratrot eller 2. Kubrot`));
    let userInput = Number(prompt(`Vilket tal vill du dra roten ur?`));

    if (isNaN(userInput)) {
        console.log(`Ogiltig inmatning, vänligen skriv ett tal.`);
        return;
    } else if (rootChoice === 1 && userInput < 0) {
        console.log(`Kan inte dra kvadratroten ur ett negativt tal, vänligen skriv in ett positivt tal.`);
        return;
    }

let result;

    switch (rootChoice) {
        case 1:
            result = Math.sqrt(userInput);
            console.log(`Kvadratrotet för talet ${userInput} är: ${result}`);
            break;
        case 2:
            result = Math.cbrt(userInput);
            console.log(`Kubikroten för talet ${userInput} är ${result}`);
            break;
        default:
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
    }
}

function performLog() {
    let logChoice = Number(prompt(`Vill du genomföra: 1. Naturlig logaritm eller 2. Logaritm med basen 10`));
    let userInput =  Number(prompt(`Vilket tal vill du dra logaritmen ur?`));

    if (isNaN(userInput)) {
        console.log(`Ogiltig inmatning, vänligen skriv in ett tal.`);
        return;
    }

    let result;
    
    switch (logChoice) {
        case 1:
            result = Math.log(userInput);
            console.log(`Naturlig logaritm för talet ${userInput} är: ${result}`);
            break;
        case 2:
            result = Math.log10(userInput);
            console.log(`Logaritmen med basen 10 för talet ${userInput} är ${result}`);
            break;
        default:
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
    }
}

function performTrig() {
    let trigChoice = Number(prompt(`Vill du använda 1. Sinus 2. Cosinus eller 3. Tan`));
    let userInput = Number(prompt(`Ange grader på vinkel:`));

    if (isNaN(userInput)) {
        console.log(`Ogiltig inmatning, vänligen skriv in ett tal.`);
        return;
    }

    let angleRad = userInput * (Math.PI / 180);
    let result;

    switch (trigChoice) {
        case 1:
            result = Math.sin(angleRad);
            console.log(`Sinus: ${result}`);
            break;
        case 2:
            result = Math.cos(angleRad);
            console.log(`Cosinus: ${result}`);
            break;
        case 3:
            result = Math.tan(angleRad);
            console.log(`Tangens: ${result}`);
            break;
        default:
            console.log(`Ogiltig inmatning, välj ett av alternativen.`);
    }

}

function showHistory() {

}

function showMultiplicationTable() {
    let firstInput = Number(prompt(`Vilket tal vill du visa multiplikationstabellen för?`));
    let secondInput = Number(prompt(`Hur mycket av multiplikationstabellen ska visas? (Sista talet som multipliceras)`));

    for (let i = 1; i <= secondInput; i++) {
        console.log(`${firstInput} * ${i} = ${firstInput * i}`);
    }

    return;
}

mainMenu();g