//Back End Test


const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../models');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;


describe('GET /api/examples', function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        // return db.mongoose.connect({
        //     useNewUrlParser: true
        // });
    });

    it('should find all examples', function (done) {
        // Add some examples to the db to test with
        db.User.create([{
                listname: 'Paris',
                items: []
            },
            {
                listname: 'Seattle',
                items: []
            },
            {
                listname: 'Tokyo',
                items: []
            },
            {
                listname: 'Havana',
                items: []
            },
        ]).then(function () {
            // Request the route that returns all examples
            request.get('/api/trips').end(function (err, res) {
                let responseStatus = res.status;
                let responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an('array')
                    .that.has.lengthOf(4);

                expect(responseBody[0])
                    .to.be.an('object')
                    .that.includes({
                        listname: 'Paris',
                        items: []
                    });

                expect(responseBody[1])
                    .to.be.an('object')
                    .that.includes({
                        listname: 'Seattle',
                        items: []
                    });

                expect(responseBody[2])
                    .to.be.an('object')
                    .that.includes({
                        listname: 'Tokyo',
                        items: []
                    });

                expect(responseBody[3])
                    .to.be.an('object')
                    .that.includes({
                        listname: 'Havana',
                        items: []
                    });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

describe('POST /api/trips', function () {
    beforeEach(function () {
        request = chai.request(server);
        // return db.mongoose.connect({
        //     useNewUrlParser: true
        // });
    });

    it('should save an example', function (done) {
        var reqBody = {
            listname: 'Athens',
            items: []
        };

        // POST the request body to the server
        request
            .post('/api/trips')
            .send(reqBody)
            .end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody)
                    .to.be.an('object')
                    .that.includes(reqBody);

                // The `done` function is used to end any asynchronous tests
                done();
            });
    });
});
//Unit Tests
