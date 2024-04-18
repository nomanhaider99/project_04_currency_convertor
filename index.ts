#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("---------------------Currency Converter --------------------");
const Money: {
    pkr: number,
    currency: string
} = await inquirer.prompt([
    {
        type: "number",
        name: "pkr",
        message: "Enter your amount in pkr: "
    },
    {
        type: "list",
        name: "currency",
        message: "In which currency do you want to change it?",
        choices: ["Dollars", "Pounds", "Riyals", "Euros", "Inr"]
    }
])

switch(Money.currency){
    case "Dollars":
        console.log(`${chalk.blueBright(Money.pkr)}rs in dollar is ${chalk.greenBright(Money.pkr/278.33)}$.`);
        break;
    case "Pounds":
        console.log(`${chalk.blueBright(Money.pkr)} in pound is ${chalk.greenBright(Money.pkr/352.28)}£.`);
        break;
    case "Euros":
        console.log(`${chalk.blueBright(Money.pkr)}rs in euro is ${chalk.greenBright(Money.pkr/302.11)}€.`);
        break;
    case "Riyals":
        console.log(`${chalk.blueBright(Money.pkr)}rs in riyal is ${chalk.greenBright(Money.pkr/74.22)}Riyal.`);
        break;
    case "Inr":
        console.log(`${chalk.blueBright(Money.pkr)}rs in inr is ${chalk.greenBright(Money.pkr/3.36)}₹.`);
        break;
    default: 
        throw new Error("Currency not present in our database...");
}
