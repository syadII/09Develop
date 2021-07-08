// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'purpose',
    message: 'What is the purpose of this project?', 
},
{
    type: 'input',
    name: 'description',
    message: 'What is the description of this project',
},
]

// TODO: Create an array of questions for user input
inquirer
.prompt(questions)
.then((answers) => {
    
    console.log(answers);

    
// TODO: Create a function to write README file
fs.writeToFile('output.md', markdownText) 
    return `# ${answers}`
})

// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
    .then((answers) => {
        
        console.log(answers);
    
        
    // TODO: Create a function to write README file
    fs.writeToFile('output.md', markdownText) 
        return `# ${answers}`
    })
    

}

// Function call to initialize app
init();
