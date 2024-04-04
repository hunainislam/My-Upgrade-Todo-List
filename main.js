#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>  ${chalk.bold.hex('#9999FF')('Welcome To \'Code With Malik Hunain\' - Todo-List App ')}  <<<===========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<======================================>>>\n`));
//console.log("\nYour updated Todo-List:" , todoList);
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do?",
                choices: ["Add Task", "Delete Task", "Upgrade Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// Function to add new task to the list:
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task?",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
// Function to view all Todo-List Tasks:
let viewTask = () => {
    console.log("\n Your Todo-list: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
// Function to delete a task from the list:
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete?",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List`);
};
main();
