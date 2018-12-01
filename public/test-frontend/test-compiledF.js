const chai = require('chai')
expect = chai.expect,
should = chai.should();
const packingList = require('./index.js').packingList;

describe('packingList', function(){
  it('should only show item from selected icons', function() {
    expect(packingList({
      clothing:'bathingsuit',
      footWare: 'flip flops',
      personalCare: 'toothpaste', 
      documents: 'driverslicense', 
      gadgets: 'camera', 
      misc: 'charger'}
      ))
      .to.equal(
        {
          clothing:'bathingsuit',
          footWare: 'flip flops',
          personalCare: 'toothpaste', 
          documents: 'driverslicense', 
          gadgets: 'camera', 
          misc: 'charger'
        });
  });
});

//DOM testing

// var should = require('chai').should();
// var doc = 
//   should.exist(doc);
//   doc.should.be.an('object');


// describe('packingList', function () {
  
//     it('should ask for name once list is reviewed and modified', function () {

//       expect(('#content').text()).to.equal();
//       });
// });
