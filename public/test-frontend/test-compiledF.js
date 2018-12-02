const expect = require('chai').expect;

// should = chai.should();

describe('packingList', function(){
  it('should only show item from selected icons', function() {
    expect(packingList({
      clothing:'bathingsuit',
      footWare: 'flip flops',
      personalCare: 'toothpaste', 
      documents: 'driverslicense', 
      gadgets: 'camera', 
      misc: 'charger'
    })
    )
      .to.eql( 
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

// describe('packingList', function () {
  
//     it('should ask for name once list is reviewed and modified', function () {

//       expect(('#content').text()).to.equal();
//       });
// });
