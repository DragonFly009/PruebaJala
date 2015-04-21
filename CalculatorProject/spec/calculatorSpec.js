// Calculator Spec
/*
Calculator
	should be able to add two numbers
	should be able to substract two numbers
	should be able to multiply two numbers
	should be able to divide two numbers

	tarea completar todos los test cases que haga las cuatro funciones
	y que tenga la capacidad de almacenar (en memoria)
*/
describe('Calculator', function() {
    var calculator;

    beforeEach(function(){
        calculator = new Calculator();
    });

    afterEach(function(){
        calculator = null;
    });

    /*Test Cases for the adding*/
    describe('Add', function () {

        it('should be able to add two numbers', function () {
            var actRes = calculator.getSuma(1,2);
            var expRes = 3;

            expect(actRes).toBe(expRes);
        });

        it('should be able to add one number', function () {
            var actRes = calculator.getSuma(5);
            var expRes = 5;

            expect(actRes).toBe(expRes);
        });

        it('should not be able evaluate letters', function () {

            expect(function () {calculator.getSuma('a',3)}).toThrow('Invalid message');//if fn throw exception

        });

        it('should not be able evaluate letters', function () {

            expect(function () {calculator.getSuma(3,'a')}).toThrow('Invalid message');//if fn throw exception

        });

        it('should not be able evaluate two letters', function () {

            expect(function () {calculator.getSuma('a','b')}).toThrow('Invalid message');//if fn throw exception

        });


    });


/*Test Cases for the Sustract*/
    describe('Substract', function () {

        it('should be able to substract two numbers', function() {

            var actRes =calculator.getSubstract(3,2);
            var expRes = 1;
            expect(actRes).toBe(expRes);
        });

        it('should be able to substract one numbers', function() {

            var actRes =calculator.getSubstract(6,3);
            var expRes = 3;
            expect(actRes).toBe(expRes);
        });

        it('should not be able evaluate letters', function () {
            expect(function () {calculator.getSubstract('a',3)}).toThrow('Invalid message');//if fn throw exception
        });

        it('should not be able evaluate letters', function () {
            expect(function () {calculator.getSubstract(3,'a')}).toThrow('Invalid message');//if fn throw exception
        });

        it('should not be able evaluate letters', function () {
            expect(function () {calculator.getSubstract('a','b')}).toThrow('Invalid message');//if fn throw exception
        });

    });

    /*Test Cases for the Multiplcation*/
    describe('Multiplicator', function () {

        it('should be able to multiply two numbers', function () {
            var actRes = calculator.getMultiplication(4, 2);
            var expRes = 8;
            expect(actRes).toBe(expRes);
        });

        it('should be able to multiply one number', function () {
            var actRes = calculator.getMultiplication(4, 2);
            var expRes = 8;
            expect(actRes).toBe(expRes);
        });

        it('should not be able evaluate letter', function () {
           expect(function () {
           calculator.getMultiplication('a', 3)
            }).toThrow('Invalid message');//if fn throw exception
        });


        it('should not be able evaluate letters', function () {
            expect(function () {calculator.getMultiplication('a','b')
            }).toThrow('Invalid message');//if fn throw exception
        });

    });

    /*Test Cases for the Divide*/
    describe('Divide', function () {

        it('should be able to divide two numbers', function () {
            var actRes = calculator.getDivide(8, 4);
            var expRes = 2;
            expect(actRes).toBe(expRes);
        });

        it('should be able to divide one number', function () {
            var actRes = calculator.getDivide(8, 4);
            var expRes = 2;
            expect(actRes).toBe(expRes);
        });

        it('should not be able evaluate letter', function () {
            //var calculator = new Calculator();
            expect(function () {
                calculator.getDivide('a', 3)
            }).toThrow('Invalid message');//if fn throw exception

        });



        it('should not be able evaluate letters', function () {
            //var calculator = new Calculator();
            expect(function () {
                calculator.getDivide('a', 'b')
            }).toThrow('Invalid message');//if fn throw exception

        });


    });

});