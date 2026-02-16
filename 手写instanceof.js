function myInstanceof(left, right) {
    if (typeof left !== 'object' || left === null) return false;
    if (typeof right !== 'function') {
        throw new TypeError('Right-hand side of instanceof is not callable');
    }
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while (true) {
        if (proto === null) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

console.log(myInstanceof([], Array));
console.log(typeof Array); // function
console.log(typeof Function); // function
console.log(typeof Function); // function
console.log(typeof Object); // function