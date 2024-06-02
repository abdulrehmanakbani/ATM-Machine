import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin Code?",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(`Correct Pin number`);
    let accountType = await inquirer.prompt([
        {
            name: "account type",
            type: "list",
            message: "Select your Account Type?",
            choices: ["Current Account", "Saving Account"],
        },
        {
            name: "transMethod",
            type: "list",
            message: "Select your Transaction Method?",
            choices: ["cashwithdrawal", "Fast Cash"],
        },
    ]);
    if (accountType.transMethod === "cashwithdrawal") {
        let operationAnswer = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Please select your option",
                choices: ["withdraw", "check balance"],
            },
        ]);
        if (operationAnswer.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter your Amount you want to withdraw?",
                },
            ]);
            if (myBalance >= amountAns.amount) {
                myBalance -= amountAns.amount;
                console.log(`Your remaining balance is ${myBalance}`);
            }
            else {
                console.log(`Insufficient balance`);
            }
        }
        if (operationAnswer.operation === "check balance") {
            console.log(`Your Current balance is ${myBalance}`);
        }
    }
    else {
        let AnsFastCash = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select your Amount?",
                choices: ["1000", "5000", "12000"]
            }
        ]);
        if (myBalance >= AnsFastCash.fastCash) {
            myBalance -= AnsFastCash.fastCash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log(`Your balance is not sufficient for Fast Cash`);
        }
    }
}
else {
    console.log(`Incorrect Pin number`);
}
;
