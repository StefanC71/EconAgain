const { add, sub, mul, div} = require('./simpleCalc')
//Note: tests for inifinity start at row 108

    describe('Testing the add function', () => {

        it("Should only receive two numbers, testing a true value", function(){
            expect(add(1, true)).toBe("You must have 2 numbers")
        });

        it("Should only receive two numbers, testing a letter", function(){
            expect(add('G', 1)).toBe("You must have 2 numbers")
        });

        it("Should only receive two numbers, testing a special character", function(){
            expect(add(1, '%')).toBe("You must have 2 numbers")
        });

        it("Testing negative numbers are allowed", function(){
            expect(add(-1, -2)).toBe(-3)
        });

        test.each([[1, 1, 2], [-1, 2, 1], [0, 1, 1], [0.5, 1.75, 2.25], [-2, -2, -4]])(
            '%i + %i equals %i', (a, b, expected) => {
                expect(add(a, b)).toBe(expected);
            },
        );

    });


    describe('Testing the sub function', () => {

        it("Should only receive two numbers, testing a true value", function(){
            expect(sub(true, 1)).toBe("You must have 2 numbers")
        });

        it("Should only receive two numbers, testing a letter", function(){
            expect(sub(1, "a")).toBe("You must have 2 numbers")
        });

        it("Should only receive two numbers, testing a special character", function(){
            expect(sub("£", 1)).toBe("You must have 2 numbers")
        });

        it("Testing negative numbers are allowed", function(){
            expect(sub(2, -1)).toBe(3)
        });

        test.each([[1, 1, 0], [-1, 2, -3], [-3, -1, -2], [2.25, 1.5, 0.75]])(
            '%i - %i equals %i', (a, b, expected) => {
                expect(sub(a, b)).toBe(expected);
            },
        );

    });


    describe('Testing the mul function', () => {

        it("Should only receive two numbers, testing a true value", function(){
            expect(mul(true, 1)).toBe("You must have 2 numbers")
        });

        it("Should only receive two numbers, testing a letter", function(){
            expect(mul(1, "a")).toBe("You must have 2 numbers")
        });

        it("Should only receive two numbers, testing a special character", function(){
            expect(mul("£", 1)).toBe("You must have 2 numbers")
        });

        it("Testing negative numbers are allowed", function(){
            expect(mul(2, -1)).toBe(-2)
        });

        test.each([[1, 1, 1], [3, 0, 0], [-3, -1, 3], [1.5, 3, 4.5]])(
            '%i * %i equals %i', (a, b, expected) => {
                expect(mul(a, b)).toBe(expected);
            },
        );

    });

    describe('Testing the div function', () => {

        it("Should only receive two numbers, testing a true value", function(){
            expect(div(true, 1)).toBe("You must have 2 numbers")
        });

        it("Should only receive two numbers, testing a letter", function(){
            expect(div(1, "a")).toBe("You must have 2 numbers")
        });

        it("Should only receive two numbers, testing a special character", function(){
            expect(div("£", 1)).toBe("You must have 2 numbers")
        });

        it("Testing negative numbers are allowed", function(){
            expect(div(2, -1)).toBe(-2)
        });

        test.each([[1, 1, 1], [0, 3, 0], [-3, -2, 1.5], [4.5, 2.25, 2]])(
            '%i / %i equals %i', (a, b, expected) => {
                expect(div(a, b)).toBe(expected);
            },
        );

        test.each([[3, 0, "Infinity"], [0, 0, "Infinity"], [-3, 0, "Infinity"], [4.5, 0, "Infinity"]])(
            '%i / %i equals %i', (a, b, expected) => {
                expect(div(a, b)).toBe(expected);
            },
        );

        test("6 / 0 = infinity", () => {
            expect(div(6,0)).toBe("Infinity");
        });

    });