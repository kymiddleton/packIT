const expect = require('chai').expect;

describe('travelList', function(){
  describe('coldTypeList', function() {
    it('should return', function(){
      expect(coldList([{item:'boots',item:'jacket'}])).to.equal([{item:'boots',item:'jacket'}])
    });
    it('should return items when four selections are made', function() {
      expect(obj).to.have.nested.property();
      expect(newList).to.equal()
      expect(newList).to.have.length(4);
    });

  //   it('should give false if >= 3 buttons selected', function() {
  //     expect(travelList()).to.throw(error);
  //   });

  //   it('should return an array of objects when 4 are selected', function() {
  //     expect(travelList(result)).to.have.deep.property([[i].title, [i].items]);
  //   });
  });

  describe('hotTypeList', function() {
  });
  
});

//DOM testing
describe('travelList', function () {

  beforeEach(function (){
    display = none;
  })
   

  
    it('should displays pre-compiled list after 4 are selected', function () {
       
        $('#weather').trigger('click');
        $('#type').trigger('click'); 
        $('#location').trigger('click');
        $('#travelLevel').trigger('click');
  
      expect($('#content').text()).to.equal('Paris');
      });
    });
