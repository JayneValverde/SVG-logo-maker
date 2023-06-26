// Import classes from './lib/shapes'
const {Triangle, Circle, Square} = require('./shapes');

// Check weather "Triangle, Circle, Square" object can be rendered correctly by calling render()... 
// compare result to SVG string

// Triangle Shape
describe("Triangle", () => {
    it("should generate trianlge SVG", () => {
        const shape = new Triangle(); 
        var color = ('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual('<polygon height="100%" width="100%" polygon points="0,200 300,200 150,0" fill="pink" />');
    })
});

// Circle Shape
describe("Circle", () => {
    it("should generate circle SVG", () => {
        const shape = new Circle();
        var color = ('orange')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="orange" />`);
    })
});

// Square Shape 
describe("Square", () => {
    it("should generate square SVG", () => {
        const shape = new Square();
        var color = ('lavender')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x=50 height="200" width="200" fill="lavender" />`);
    })
});