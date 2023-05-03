class Shapes {
  constructor(data) {
    this.shape = "";
    this.data = data;
  }
  setShape() {
    this.shape = shape;
  }
}

class Circle extends Shapes {
  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="100" fill="${this.data.fill}" />
      
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.data.color}">${this.data.characters}</text>
      
      </svg>`;
  }
}

class Square extends Shapes {
  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

      <rect x="25" y="25" width="250" height="200" fill="${this.data.fill}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.data.color}">${this.data.characters}</text>
    </svg>`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 50,200 250,200" fill="${this.data.fill}" />
        <text x="150" y="145" font-size="50" text-anchor="middle" fill="${this.data.color}">${this.data.characters}</text>
      
      </svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
