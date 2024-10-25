// Kalkylator som kan hantera flera operationer och inkluderar meny, historik, och felhantering
function calculator() {
    let keepRunning = true; // Variabel för att avgöra om programmet ska fortsätta köras
    let history = []; // Array för att lagra beräkningshistorik
    let variables = {}; // Objekt för att lagra variabler

    // Huvudloopen för kalkylatorn
    while (keepRunning) {
        // Visa meny för tillgängliga operationer
        let choice = prompt(
            "Välj en operation:\n" +
            "1: Addition (+)\n" +
            "2: Subtraktion (-)\n" +
            "3: Multiplikation (*)\n" +
            "4: Division (/)\n" +
            "5: Exponentiering (^)\n" +
            "6: Modulus (%)\n" +
            "7: Rotuträkning (√)\n" +
            "8: Logaritm (log)\n" +
            "9: Visa beräkningshistorik\n" +
            "10: Hantera lagrade variabler\n" +
            "11: Avsluta"
        );

        // Konvertera valet till ett nummer
        choice = Number(choice);

        // Hantera valet med switch-sats
        switch (choice) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                // Hämta två tal från användaren
                let num1 = Number(prompt("Ange det första talet (eller skriv variabelnamn):"));
                let num2 = (choice >= 1 && choice <= 6) ? Number(prompt("Ange det andra talet (eller skriv variabelnamn):")) : null;

                // Kontrollera om inmatningen är giltig eller en variabel
                if (isNaN(num1)) {
                    num1 = variables[num1] !== undefined ? variables[num1] : NaN; // Kontrollera om num1 är en lagrad variabel
                }
                if (num2 !== null && isNaN(num2)) {
                    num2 = variables[num2] !== undefined ? variables[num2] : NaN; // Kontrollera om num2 är en lagrad variabel
                }

                // Hantera ogiltig inmatning
                if (isNaN(num1) || (num2 !== null && isNaN(num2))) {
                    alert("Ogiltig inmatning, vänligen ange giltiga nummer eller variabelnamn.");
                    continue; // Hoppa tillbaka till menyn om inmatningen är ogiltig
                }

                // Utför operationen baserat på användarens val
                let result;
                if (choice === 1) {
                    result = num1 + num2;
                    alert(`${num1} + ${num2} = ${result}`);
                } else if (choice === 2) {
                    result = num1 - num2;
                    alert(`${num1} - ${num2} = ${result}`);
                } else if (choice === 3) {
                    result = num1 * num2;
                    alert(`${num1} * ${num2} = ${result}`);
                } else if (choice === 4) {
                    result = num2 !== 0 ? (num1 / num2) : "Fel: Division med noll är inte tillåten."; // Hantera division med noll
                    alert(result);
                } else if (choice === 5) {
                    result = Math.pow(num1, num2); // Exponentiering
                    alert(`${num1} ^ ${num2} = ${result}`);
                } else if (choice === 6) {
                    result = num1 % num2; // Modulus
                    alert(`${num1} % ${num2} = ${result}`);
                } else if (choice === 7) {
                    result = num1 >= 0 ? Math.sqrt(num1) : "Fel: Kan inte ta roten ur ett negativt tal."; // Rotuträkning
                    alert(`√${num1} = ${result}`);
                } else if (choice === 8) {
                    result = num1 > 0 ? Math.log10(num1) : "Fel: Logaritm av noll eller negativt tal är inte definierad."; // Logaritm
                    alert(`log(${num1}) = ${result}`);
                }

                // Spara resultatet i historiken om det är giltigt
                if (!isNaN(result)) {
                    history.push(`${num1} ${choice === 1 ? '+' : choice === 2 ? '-' : choice === 3 ? '*' : choice === 4 ? '/' : choice === 5 ? '^' : choice === 6 ? '%' : choice === 7 ? '√' : 'log'} ${num2 !== null ? num2 : ''} = ${result}`);
                }
                break;

            case 9:
                // Visa historik över beräkningar
                if (history.length === 0) {
                    alert("Ingen historik tillgänglig."); // Om ingen historik finns
                } else {
                    alert("Beräkningshistorik:\n" + history.join("\n")); // Visa alla tidigare beräkningar
                }
                break;

            case 10:
                // Hantera lagrade variabler
                let varChoice = prompt("Välj en åtgärd:\n1: Visa variabler\n2: Lagra nytt resultat\n3: Ta bort variabel");
                varChoice = Number(varChoice);
                if (varChoice === 1) {
                    // Visa alla lagrade variabler
                    let varsDisplay = Object.entries(variables).map(([key, value]) => `${key}: ${value}`).join("\n");
                    alert(varsDisplay || "Inga variabler lagrade.");
                } else if (varChoice === 2) {
                    // Lagra senaste resultat som en variabel
                    let varName = prompt("Ange namn för att lagra senaste resultat:");
                    if (history.length > 0) {
                        variables[varName] = history[history.length - 1].split('= ')[1];
                        alert(`Resultatet har lagrats som '${varName}'.`);
                    } else {
                        alert("Ingen beräkning tillgänglig att lagra.");
                    }
                } else if (varChoice === 3) {
                    // Ta bort en specifik variabel
                    let varToDelete = prompt("Ange namnet på variabeln du vill ta bort:");
                    if (variables[varToDelete] !== undefined) {
                        delete variables[varToDelete];
                        alert(`Variabeln '${varToDelete}' har tagits bort.`);
                    } else {
                        alert("Variabeln finns inte.");
                    }
                } else {
                    alert("Ogiltigt val.");
                }
                break;

            case 11:
                // Avsluta programmet
                alert("Avslutar kalkylatorn. Tack för att du använde den!");
                keepRunning = false; // Sätta keepRunning till false för att avsluta loopen
                break;

            default:
                // Hantera ogiltiga val
                alert("Ogiltigt val, vänligen välj ett alternativ mellan 1 och 11.");
                break;
        }
    }
}

// Starta kalkylatorn
calculator();
