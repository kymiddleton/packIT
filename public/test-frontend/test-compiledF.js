const expect = require('chai').expect;
// const packingList = require('./public/compiled.js').packingList;


describe('packingList', function(){
  it('should return a list of items matching selections', function() {
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
  it('', function(){
    expect()
  })
});


//functional testing

describe('packingList', function () {
  //only allow one click on each row
    it('should allow user to only click one icon in each row', function () {
      $('.row1').trigger('click');  
      $('.row2').trigger('click');
      $('.row3').trigger('click');
      $('.row4').trigger('click');
//once all rows have one selection it should create pre compiled list
       expect($('.container').assert({
      clothing:'bathingsuit',
       footWare: 'flip flops',
       personalCare: 'toothpaste', 
       documents: 'driverslicense', 
       gadgets: 'camera', 
       misc: 'charger'
       }))
      
})
})
