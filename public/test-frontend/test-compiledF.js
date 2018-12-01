const assert = require('chai').expect;

describe('travelList', function(){

    it('should return an object', function(){
      assert.equal({item:'boots',item:'jacket'})
    });
});

//DOM testing
describe('travelList', function () {
  
    it('should displays pre-compiled list after selection 4 icons & list is named', function () {
       
        $('#weather').trigger('click');
        $('#type').trigger('click'); 
        $('#location').trigger('click');
        $('#travelLevel').trigger('click')
        .prompt('input').trigger('click')//submit or cancel

      expect($('#content').text()).to.equal();
      });
    });
