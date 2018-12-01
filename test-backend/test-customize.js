const expect = require('chai').expect;
const inputItem = require('./public/app.js').inputItem;

describe('inputItem', function () {
    it('should be a string of characters', function () {
        expect(inputItem('Nikes')).to.equal(true);
    });

    it('should have an entry', function () {
        expect(inputItem('')).to.equal(false);
    });

    it('should take in an array of strings', function () {
        expect(inputItem(['shirt', 'pants'])).to.equal(true);
    });

    it("should return false if the entry is less that 4 characters long", function () {
        expect(inputItem(a)).to.equal(false);
    });
    it("should return the input regardless of the message", function () {
        expect(inputItem('wqwera')).to.equal(true);
    });
    it("should stringify a numerical input", function () {
        expect(inputItem(123).to.equal('123'));
    });
});

describe('increment', function () {

    beforeEach(function () {
        count = 0;
    });

    it('should increment the counter on click', function () {

        $('#custom-btn').trigger('click');
        expect($('#count').text()).to.equal('1');
    });


    it('should increment the counter twice on 2 click', function () {

        $('#custom-btn').trigger('click');
        $('#custom-btn').trigger('click');
        expect($('#count').text()).to.equal('2');
    });

});

describe('decrement', function () {

    beforeEach(function () {
        count = 0;
    });

    it('should increment the counter on click', function () {

        $('#custom-btn').trigger('click');
        expect($('#count').text()).to.equal('-1');
    });


    it('should increment the counter twice on 2 click', function () {

        $('#custom-btn').trigger('click');
        $('#custom-btn').trigger('click');
        expect($('#count').text()).to.equal('-2');
    });

});