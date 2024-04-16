#! /user/bin/evn node

import inquirer from"inquirer";
// variable
let todos =[];
let condition = true;

// while loop work for run continues
while(condition){
// for user input work
let Answer = await inquirer.prompt([{
    message: "What you want to add in your todos:",
    name: "todo",
    type: "input"
},

{
    message: "Do You want To Add More:",
    name: "addMore",
    type: "confirm",
    default:"false"
}

]);

// add user inputs in our todos array list work using push()
todos.push(Answer.todo)
// work for dependent on addMore 
condition = Answer.addMore;

// for run todos arry list 
console.log(todos);


}

