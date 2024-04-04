#! /usr/bin/env node
import inquirer from "inquirer"

let todos = []
let condition = true

while (condition)
{
const todosanswer = await inquirer.prompt([
    {
        name: "firstQuestion",
        type: "input",
        message: "what would you like to add in you todos ?",
    },
     
    {
        name: "secondQuestion",
        type: "confirm",
        message: "would you like to add more in your todos ?",
        default: "true",
    }



]);
todos.push(todosanswer.firstQuestion);
console.log(todos);
condition = todosanswer.secondQuestion
}

console.log("the end");