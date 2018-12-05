describe('myTrips', function () {

<<<<<<< HEAD
    const data = [{
            name: 'Paris',
            packinglist: {
                clothes: ['jacket', 'pants'],
                footwear: ['sneakers', 'loafers']
            },
        },
        {
            name: 'Miami',
            packinglist: {
                clothes: ['shorts', 'tshirts'],
                footwear: ['boots', 'flops']
            },
=======
    const data = [
        { tripName: 'Paris', 
            tripList: {
                clothing: ['jacket', 'pants'],
                footwear: ['sneakers', 'loafers'],
                personal: ['lotion', 'hand sanitizer', 'lysol'],
                documents: ['passport', 'boarding pass'],
                gadgets: ['luggage scale', 'plug adapter', 'pocket translator'],
                miscellaneous: ['neck pillow']
            }, 
        },
        { tripName: 'Miami',
            tripList: {
                clothing: ['shorts', 'tshirts'],
                footwear: ['boots', 'flops'],
                personal: ['lotion', 'hand sanitizer', 'lysol'],
                documents: ['passport', 'boarding pass'],
                gadgets: ['luggage scale'],
                miscellaneous: ['neck pillow']
            }, 
>>>>>>> bb9eb31234cb35844632612ae5b55ad2ddaf3b2c
        },
    ];

    let server;

    beforeEach(function () {
        server = sinon.fakeServer.create();
    });

    afterEach(function () {
        server.restore();
    });


    it('should display list of trips when clicking myTrips', function () {
        server.respondWith('GET', '/myTrips', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#showtrips').trigger('click');
        server.respond();

        expect($('#tripname').text()).to.equal('Paris');
    });
<<<<<<< HEAD
    it('should display suitcase when clicking on a trip', function () {
        server.respondWith('GET', '/myTrips/name/suitcase', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#trip').trigger('click');
=======
    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/myTrips', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
          ]);
      
        $('#showtrips').trigger('click');
        server.respond();

        expect($('#footwear').text()).to.equal('sneakers');
    });

    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/myTrips', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
          ]);
      
        $('#showtrips').trigger('click');
        server.respond();

        expect($('#clothing').text()).to.equal('jacket');
    });

    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/myTrips', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
          ]);
      
        $('#showtrips').trigger('click');
        server.respond();

        expect($('#personal').text()).to.equal('lotion');
    });
    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/myTrips', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
          ]);
      
        $('#showtrips').trigger('click');
>>>>>>> bb9eb31234cb35844632612ae5b55ad2ddaf3b2c
        server.respond();

        expect($('#documents').text()).to.equal('passport');
    });

    it('should display list when clicking on a category', function () {
<<<<<<< HEAD
        server.respondWith('GET', '/myTrips/name/suitcase', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#clothes').trigger('click');
=======
        server.respondWith('GET', '/myTrips', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
          ]);
      
        $('#showtrips').trigger('click');
>>>>>>> bb9eb31234cb35844632612ae5b55ad2ddaf3b2c
        server.respond();

        expect($('#gadgets').text()).to.equal('luggage scale');
    });
    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/myTrips', [
            200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
          ]);
      
        $('#showtrips').trigger('click');
        server.respond();

        expect($('#miscellaneous').text()).to.equal('neck pillow');
    });
});