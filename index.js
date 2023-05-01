// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateShapes = require("./lib/shapes.js")

// TODO: Create an array of questions for user input

inquirer.prompt([
    {
    type: "input",
    message: "Please enter up to 3 characters",
    name: "characters",
    validate: charNumber => {
        if (charNumber.length <=3) {
            return true;
        } else { 
            console.log(' Please enter 3 characters or less.');
            return false; 
        }
    } 
    },
    {
    type: "input",
    message: "Please enter a color (or a hexadecimal number)",
    name: "color",
    },
    {
      type: "list",
      message: "Please select a shape",
      name: "shape",
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: "input",
      message: "Please enter a shape color (or a hexadecimal number)",
      name: "fill",
    } 
  ])
  .then((data) => {
    console.log(data);
    
    fs.writeFile("logo.svg", generateShapes(data), (error) => {
      error ? console.log(error) : console.log("successfully wrote file");
    });
  });
  