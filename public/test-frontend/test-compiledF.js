const expect = require('chai').expect;
// const packingList = require('./public/compiled.js').packingList;


describe('packingList', function(){
  it('should return a list of items coresponsind to icons selections', function() {
    expect({
      weather:'hot',
      travel: 'plane', 
      destination:'beach', 
      packing: 'diva',
    })
    .to.be.containing(
        'bathingsuit','flip flops','toothpaste',
        'driverslicense',  'camera', 'charger')      
    });

  it('', function(){
    expect().to.have.property()
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
       expect($('.container').assert(array)({
      clothing:'bathingsuit',
      footWare: 'flip flops',
      personal: 'toothpaste', 
      documents: 'driverslicense', 
      gadgets: 'camera', 
      miscellaneous: 'charger'
       }))
      
})
})
