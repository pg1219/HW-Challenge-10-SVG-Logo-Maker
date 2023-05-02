// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// TODO: Create an array of questions for user input
function userPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter up to 3 characters",
        name: "characters",
        validate: (charNumber) => {
          if (charNumber.length <= 3) {
            return true;
          } else {
            console.log(" Please enter 3 characters or less.");
            return false;
          }
        },
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
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        type: "input",
        message: "Please enter a shape color (or a hexadecimal number)",
        name: "fill",
      },
    ])
    .then((data) => {
      console.log(data);
      console.log("************");
      console.log(shapePick(data).render());

      fs.writeFile("logo.svg", shapePick(data).render(), (error) => {
        error ? console.log(error) : console.log("successfully wrote file");
      });
    });
  function shapePick(data) {
    let shapeChoice;
    if (data.shape === "Circle") {
      shapeChoice = new Circle(data);
      return shapeChoice;
    } else if (data.shape === "Square") {
      shapeChoice = new Square(data);
      return shapeChoice;
    } else {
      shapeChoice = new Triangle(data);
      return shapeChoice;
    }
  }
}

userPrompt();
