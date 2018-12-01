
describe('newList', function() {
  it('should give true if 4 buttons selected', function() {
    expect(newList()).to.be(array);
  });
  it('should give false if >= 3 buttons selected', function() {
    expect(newList()).to.equal(false);
  });
  it('should give false if >= 3 buttons selected', function() {
    expect(newList()).to.throw(error);
  });
  it('should return an array of objects when 4 are selected', function() {
    expect(newList(result)).to.have.deep.property([[i].title, [i].items]);
  });
});

//DOM testing
describe('createNewList', function () {
    const data = [
      { listName: 'Paris', items: []}
    ];
  
    let server;
  
    beforeEach(function () {
      server = sinon.fakeServer.create();
    });
    afterEach(function () {
      server.restore();
    });
  
    it('displays after 4 are selected', function () {
      server.respondWith('GET', '/trips', [
        200, { 'Content-Type': 'application/json' }, JSON.stringify(data) //creates a json obj like we receive them in real DB
      ]);
  
        $('#weather').trigger('click');
        $('#type').trigger('click'); 
        $('#location').trigger('click');
        $('#travelLevel').trigger('click');
  
      server.respond();
  
      expect($('#content').text()).to.equal('Paris');
    });
  });