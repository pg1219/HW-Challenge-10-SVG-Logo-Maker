function generateShapes(data) {
    if (data.shape = "circle"){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="100" fill="${data.fill}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.color}">${data.characters}</text>
  
  </svg>`
    }else if (data.shape = "square"){
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <rect x="150" y="100" width="150" height="100" fill="${data.fill}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.color}">${data.characters}</text>
    </svg>`
    }else (data.shape = "triangle") 
    return `<svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 50,200 250,200" fill="${data.fill}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.color}">${data.characters}</text>
  
  </svg>`
}

module.exports = generateShapes;

// class Shapes {
//     constructor(characters, color, shape, fill){
//     this.characters = characters;
//     this.color = color;
//     this.shape = shape;
//     this.fill = fill;
// }
// }