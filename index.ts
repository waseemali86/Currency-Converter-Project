#! /usr/bin/env node

import inquirer from "inquirer";

const currency : any = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    INR: 83.46,
    PKR: 285,
    AUD: 1.50,
    POUND: 0.78

};

let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: 'Enter From Currency',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AUD', 'POUND']
        },
        {
            name: 'to',
            message: 'Enter To Currency',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AUD', 'POUND']
        },
        {
            name: 'amount',
            message: 'Enter Your Amount',
            type: 'number',
            
        },
    ]
)


let fromAmount = currency[user_answer.from]
let toamount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount  
let convertedAmount = baseAmount * toamount
console.log(convertedAmount);

