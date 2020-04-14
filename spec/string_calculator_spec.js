const {
    Calculator
} = require('../src/string_calculator')

describe("calculate the total", function () {
    let calculator_instance = new Calculator();

    it("should sum the two numbers", function () {
        expect(calculator_instance.add(0, 0)).toBe(0);
    });

    it("should display the sum", function () {
        expect(calculator_instance.add(1, 2, 3, 4)).toBe(10)
    });

    it("should return 10", function () {
        expect(calculator_instance.add(2, 3, 5)).toBe(10)
    });

    it("should return 8", function () {
        expect(calculator_instance.add(3, 5)).toBe(8)
    });

});


describe("multiply two numbers", function () {
    let calculator_instance = new Calculator();

    it("should give product of two numbers", function () {
        expect(calculator_instance.multiply(1, 2)).toBe(2)
    });

    it("should return 60 ", function () {
        expect(calculator_instance.multiply(30, 2)).toBe(60)
    });

    it("should give the product of the array", function () {
        expect(calculator_instance.multiply(1, 2, 3, 4)).toBe(24)
    });
});

//memory slots
describe("calculator must remember previous number", function () {
    let results = new Calculator();

    it("Should take single number as slot number", function () {
        results.add(5, 4);
        expect(results.get_slot(1)).toEqual(9); //should display what is in slot 1
    });

    it("Should take slot number and add with a number", function () {
        results.add(5, 4)
        results.get_slot(1);
        expect(results.add("slot_1", 2)).toBe(11);
    });
});

//last
describe("last returns the results of the last  function called", function () {
    let results = new Calculator();

    it("should return 18", function () {
        results.add(1, 2)
        let answer = results.get_slot('2')
        expect(results.add(answer, "Last")).toEqual(18)
    });

    it("should return 15", function () {
        results.add(1, 2)
        expect(results.multiply(5, "Last")).toBe(15)
    });
});