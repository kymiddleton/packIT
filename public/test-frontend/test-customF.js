describe('inputItem', function () {
    it('should be a string of characters', function () {
        expect(inputItem('Nikes')).to.equal(true);
    });

    it('should have an entry', function () {
        expect(inputItem('')).to.equal(false);
    });

    it('should not take in an array of strings', function () {
        expect(inputItem(['shirt', 'pants'])).to.equal(false);
    });

    it("should return true regardless of string length", function () {
        expect(inputItem(a)).to.equal(false);
    });
    it("should return the input regardless of the message", function () {
        expect(inputItem('wqwera')).to.equal(true);
    });
    it("should stringify a numerical input", function () {
        expect(inputItem(123).to.equal('123'));
    });
});