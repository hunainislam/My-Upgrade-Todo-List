#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
// Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>  ${chalk.bold.hex('#9999FF')('Welcome To \'Code With Malik Hunain\' - Todo-List App ')}  <<<===========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<======================================>>>\n`));
while (condition) {
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select an operation",
            choices: ["Add", "Update", "View Todo-List", "Delete Task", "Exit"],
        }
    ]);
    if (ans.select === "Add") {
        let addtodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Enter your new task?",
            validate: function (input) {
                if (input.trim() == "") {
                    return "Please enter a non-empty item.";
                }
                return true;
            }
        });
        if (addtodo.todo.trim() !== "") {
            todos.push(addtodo.todo);
            todos.forEach(todo => console.log(todo));
        }
    }
    if (ans.select === "Update") {
        let updateTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Update items in the Task?",
            choices: todos.map(item => item)
        });
        let addtodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add items in the Task?"
        });
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addtodo.todo];
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "View Todo-List") {
        console.log("***** -MALIK-HUNAIN-TODO-LIST *****");
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "Delete Task") {
        let deleteTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Select item to Delete Task?",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "Exit") {
        console.log("Exiting Program...");
        condition = false;
    }
}
