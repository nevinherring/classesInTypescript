class Car {

}

let car: Car = new Car();


class ColoredCar {
    private _color: string;
    private static DEFAUL_COLOR = "Red";

    constructor(color: string) {
        this._color = color;
    }

    displayColor(){
        console.log(`Color of this car: ${this.color}`);
    }

    public get color(): string {
        retrun this._color;
    }

    public set color(color: string){
        this._color = color;
    }

    private resetColor(){
        this._color = ColoredCar.DEFAUL_COLOR;
    }
}

abstract class Shape {
    constructor(private readonly _shapeName: string) {
        this.displayInformation();
    }

    abstract displayArea(): void;
    abstract displayPerimeter: void;
    
    protected get shapename(): string {
        return this._shapeName;
    }

    public displayInformation(): void {
        console.log(`This shape is a ${this._shapeName}`);
    }
    public doSomething(): void {
        console.log("Not interesting");
    }
}

class Square extends Shape {
    constructor(private _width: number){
        super("Square");
    }

    displayArea(): void {
        const area = this._width * this._width;
        console.log(`This ${this.shapename} has and aread of: ${area}`);
    }

    displayPerimeter(): void {
        const perimeter = 2 * (this._width + this._width);
        console.log(`This ${this.shapename} has a perimeter of : ${perimeter}`);
    }

    public doSomething(): void {
        console.log("Something more interesting");
    }
}

let square:Square = new Square(5);
square.displayArea();
square.displayPerimeter();
square.displayInformation();
square.doSomething();

let shape:Shape = new Square(10);
shape.doSomething();