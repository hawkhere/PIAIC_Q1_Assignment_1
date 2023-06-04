function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}
const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['sunroof', true]);
console.log(myCar);
export {};
