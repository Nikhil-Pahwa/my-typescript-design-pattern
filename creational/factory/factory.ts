interface Shape {
    draw: any
}

class Rectangle implements Shape {
    draw() {
        console.log('rectangle has been drawn');
    }
}

class Square implements Shape {
    draw() {
        console.log('square has been drawn');
    }
}

class Triangle implements Shape {
    draw() {
        console.log('triangle has been drawn');
    }
}

class Noshape implements Shape {
    draw() {
        console.log('no shape will be drawn');
    }
}

class ShapeFactory {
    constructor() { }

    getShape(shapes: string): Shape {
        let shape = shapes.toLowerCase();
        switch (shape) {
            case 'rectangle':
                return new Rectangle();
            case 'square':
                return new Square();
            case 'triangle':
                return new Triangle();
            default:
                return new Noshape();
        }
    }
}

// Demo class using the ShapeFactory
class demo {
    private static shapeFactory = new ShapeFactory();

    constructor() { }

    public static drawAllShapes() {
        let squareShape = this.shapeFactory.getShape('square');
        squareShape.draw();
        let rectangleShape = this.shapeFactory.getShape('rectangle');
        rectangleShape.draw();
        let triangleShape = this.shapeFactory.getShape('triangle');
        triangleShape.draw();
        let noShape = this.shapeFactory.getShape('noShape');
        noShape.draw();
    }
}

demo.drawAllShapes();