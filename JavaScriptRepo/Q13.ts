let transportation: string[];
transportation = ['Car', 'Bus', 'Bike'];
let statements: string[];
statements = ['hi'];
statements.push(`I would like to own a Honda ${transportation[2]}`);
console.log(statements[2]);
console.log(transportation.pop());
transportation.push('bike');
console.log(transportation);
