'use strict';

class Calculator {
  constructor() {
    this.lastNum = 0;
    this.slot = [];
  }

  add(...args) {
    let sum = 0;

    args.forEach(num => {
      if (isNaN(num)) {
        num = this.string_slot(num)
      }
      sum += num;
    });

    this.lastNum = sum;
    this.slot.push(sum);

    return sum;
  }


  multiply(...args) {
    let quantity = 1;

    args.forEach(num => {
      if (num == "Last") {
        num = this.last()
      }
      quantity *= num;
    }); {

    }

    this.lastNum = quantity;
    this.slot.push(quantity)
    return quantity;
  }
  last() {
    return this.lastNum;
  }

  set_slot(num) {
    this.lastNum = this.slot[num - 1];
  }

  get_slot(num) {
    return this.slot[num - 1];
  }
}
const calc = new Calculator();

console.log(calc.add(3, 5));
console.log(calc.multiply(30, 2));

console.log(calc.add(3, 5, 2));
console.log(calc.add(1, 2));
console.log(calc.multiply("LAST,5"));

console.log(calc.add(1, 2));
console.log(calc.multiply(10, 20));
console.log(calc.add(100, 200));

// console.log(calc.add("LAST,10"));

module.exports = {
  Calculator
}