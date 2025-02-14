class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      // if you pass width = -10000000 , this line will execute
      console.error("width must be positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      // if you pass height = "pizza" , this line will execute
      console.error("heght must be positive number");
    }
  }

  get width(){
    return `${this._width.toFixed(1)}cm`;
  }

  get height(){
    return `${this._height.toFixed(1)}cm`;
  }

  get area(){
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

const rectangle = new Rectangle(3 , 4);

// rectangle.width = -10000000;
// rectangle.height = "pizza"

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

