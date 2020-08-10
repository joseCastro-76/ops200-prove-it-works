const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = new Mortgage();

    beforeEach(() => {
        mortgage = new Mortgage(165000, 4.5, 5, 25);
    });

    it('should have a mothly payment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should calculate the monthly payment properly', () => {
        expect(mortgage.monthlyPayment()).to.equal(1475.246707709433);
    })

    it('should have a principal property', () => {
        expect(mortgage.principal).to.equal(165000);
    });

    it('should have an interest property', () => {
        expect(mortgage.interest).to.equal(4.5);
    });

    it('should have a term property', () => {
        expect(mortgage.term).to.equal(5);
    });

    it('should have a period property', () => {
        expect(mortgage.period).to.equal(25);
    });
})