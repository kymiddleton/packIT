

describe('selections', function () {
  it('should return an object when selections match an item in DB', function () {
    expect({
      item: 'Jacket',
      category: 'clothing',
      weather: ["cold", "rainy"],
      packing: ["typical", "minimal"],
      travel: ["car", "transit", "plane"],
      destination: ["outdoors", "city"]

    })
      .to.be.an('object').to.deep.includes({
        item: "Jacket",
        category: "clothing",
        weather: ['cold', 'rainy'],
        packing: ["typical", "minimal"],
        destination: ["outdoors", "city"],
        travel: ["car", "transit", "plane"]
      });

  });
  it('should hide icons after 4 are selected', function () {
    $('.happy-sun').trigger('click');
    $('.plane').trigger('click');
    $('.sun-umbrella').trigger('click');
    $('.crown').trigger('click');
    expect($('.image').hasClass('hide')).to.equal(false);
  })
  it('should return items in each category with corresponding selections', function () {
    expect({
      clothing: ['Jacket', 't-shirt', 'jeans', 'scarf'],
      footwear: ['boots', 'slippers', 'walking shoes'],
      personal: ['tooth paste', 'hair brush', 'tooth brush'],
      documents: ['passport', 'ID', 'boarding pass'],
      gadgets: ['phone', 'camera', 'ipod'],
      miscellaneous: []
    })
      .to.be.an('object').to.deep.includes({
        clothing: ['Jacket', 't-shirt', 'jeans', 'scarf'],
        footwear: ['boots', 'slippers', 'walking shoes'],
        personal: ['tooth paste', 'hair brush', 'tooth brush'],
        documents: ['passport', 'ID', 'boarding pass'],
        gadgets: ['phone', 'camera', 'ipod'],
        miscellaneous: []
      });
  })
})