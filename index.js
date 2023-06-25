// Import classes from './lib/shapes'
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

// Inquirer import
const inquirer = require('inquirer');

// File system module import
const fs = require('fs');

// Array of questions for user logo input 
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to thee characters for the logo:',
        validate: (input) => input.length < 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
    },
];

// Function that will write svg file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if(err) {
            return console.log(err)
        } else {
            console.log("Success! 'logo.svg' Generated!")
        }
    })
}

// Function that will initialize app
// Conditional statments used to generate shape based on input
function init() {
    inquirer.prompt(questions)
        .then(({shape, shapeColor, text, textColor}) => {
            if (shape === 'Triangle') {
                svgShape = new Triangle(shapeColor, text, textColor);
            } else if (shape === 'Cirlce') {
                svgShape = new Circle(shapeColor, text, textColor);
            } else {
                svgShape = new Square(shapeColor, text, textColor);
            }
            writeToFile.apply("logo.svg", svgShape.renderSVG())
        })
};

// Function to call the initialize applicaiton 
init();