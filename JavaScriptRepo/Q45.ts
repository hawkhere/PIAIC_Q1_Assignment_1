type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
};

function createCar(manufacturer: string, model: string, ...options: [string, any][]) {
    const car: Car = { manufacturer, model };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}

const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['sunroof', true]);

console.log(myCar);