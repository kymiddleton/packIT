


//const expect = require('chai').expect;

// const packingList = require('./public/compiled.js').packingList;


describe('selections', function () {
  it('should return an object when selections match an item in DB', function () {
    expect({
      item: 'Jacket',
      category: 'Tops',
      weather: ["cold", "rainy"] ,
      packing: ["typical", "minimal"],
      travel: ["car", "transit", "plane"], 
      destination: ["outdoors", "city"]
      
    })
      .to.be.an('object').to.deep.includes({
        item: "Jacket",
        category: "Tops",
        weather: ['cold', 'rainy'],
        packing: ["typical","minimal"],
        destination: ["outdoors","city"],
        travel: ["car","transit","plane"]
      });

    it('', function () {
      expect().to.have.property()
    })
  });

  //functional testing
  describe('selections', function () {
    //only allow one click on each row
    it('should hide icons after 4 are selected', function () {
      $('.happy-sun').trigger('click');
      $('.plane').trigger('click');
      $('.sun-umbrella').trigger('click');
      $('.crown').trigger('click');

      //once all rows have one selection it should create pre compiled list
      expect($('.image').hasClass('hide')).to.equal();
      // (
      //   $('.container').({
      //   clothing: 'bathingsuit',
      //   footWare: 'flip flops',
      //   personal: 'toothpaste',
      //   documents: 'driverslicense',
      //   gadgets: 'camera',
      //   miscellaneous: 'charger'
      // }))

    })
  })
})
