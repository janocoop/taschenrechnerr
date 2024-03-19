
type Operation = (a: number, b: number) => number;
type Calculator = (a: number, b: number, operation: Operation) => number;

const add: Operation = (a, b) => {
    return a + b;
}

const subtract: Operation = (a, b) => {
    return a - b;
}

const multiply : Operation = (a, b) => {
    return a * b;
}

const pow: Operation = (a, b) => {
    return Math.pow(a, b);
}

const min: Operation = (a , b) => {
    return a < b ? a : b;
}
const calculator: Calculator = (a, b, operation) => {
    return math.pow(a, b);
}


const myResult = calculator(5, 2, add);
console.log(myResult);

const myResultMultiply = calculator(5, 2, multiply);
console.log(myResultMultiply);

const myResultPow = calculator(5, 2, pow);
console.log("Potenz:", myResultPow);

const myResultMin = calculator(5, 2, min);
console.log(myResultMin);












const myMap = <T, U>(arr: T[], callback: (element: T) => U): U[] => {
    const mappedArray: U[] = [];
    arr.forEach(element => {
        mappedArray.push(callback(element));
    });
    return mappedArray;
};


const myFilter = <T>(arr: T[], callback: (element: T) => boolean): T[] => {
    const filteredArray: T[] = [];
    arr.forEach(element => {
        if (callback(element)) {
            filteredArray.push(element);
        }
    });
    return filteredArray;
};


const Find = <T>(arr: T[], callback: (element: T) => boolean): T | undefined => {
    for (const element of arr) {
        if (callback(element)) {
            return element;
        }
    }
    return undefined;
};


