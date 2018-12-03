describe('myTrips', function () {

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

        expect($('#trips').text()).to.equal('Paris Miami');
    });
    it('should display suitcase when clicking on a trip', function () {
        server.respondWith('GET', '/myTrips/name/suitcase', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#trip').trigger('click');
        server.respond();

        expect($('#suitcase').text()).to.equal('clothes footwear');
    });

    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/myTrips/name/suitcase', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#clothes').trigger('click');
        server.respond();

        expect($('.clotheslist').text()).to.equal('shorts tshirts');
    });

});