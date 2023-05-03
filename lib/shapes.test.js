const characters = "ABC";
const color = "white";
const fill = "blue";

const { Circle, Square, Triangle } = require("../lib/shapes.js");

describe("Shapes", () => {
  describe("Circle", () => {
    it("should render a blue circle with a white ABC", () => {
      const data = { characters, color, fill };
      const circle = new Circle(data);

      expect(circle.render())
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="100" fill="blue" />
      
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="white">ABC</text>
      
      </svg>`);
    });
  });

  describe("Square", () => {
    it("should render a blue square with a white ABC", () => {
      const data = { characters, color, fill };
      const square = new Square(data);

      expect(square.render())
        .toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <rect x="25" y="25" width="250" height="200" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>`);
    });
  });

  describe("Triangle", () => {
    it("should render a blue triangle with a white ABC", () => {
      const data = { characters, color, fill };
      const triangle = new Triangle(data);

      expect(triangle.render())
        .toEqual(`<svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 50,200 250,200" fill="blue" />
        <text x="150" y="145" font-size="50" text-anchor="middle" fill="white">ABC</text>
      
      </svg>`);
    });
  });
});
