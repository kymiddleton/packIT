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
    });

    it('should find all examples', function (done) {
        // Add some examples to the db to test with
        db.user.create({
                tripname: 'Paris',
                list: []
            },
            {
                tripname: 'Seattle',
                list: []
            },
            {
                tripname: 'Tokyo',
                list: []
            },
            {
                tripname: 'Havana',
                list: []
            }).then(function () {
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
                        tripname: 'Paris',
                        list: []
                    });

                expect(responseBody[1])
                    .to.be.an('object')
                    .that.includes({
                        tripname: 'Seattle',
                        list: []
                    });

                expect(responseBody[2])
                    .to.be.an('object')
                    .that.includes({
                        tripname: 'Tokyo',
                        list: []
                    });

                expect(responseBody[3])
                    .to.be.an('object')
                    .that.includes({
                        tripname: 'Havana',
                        list: []
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
            tripname: 'Athens',
            list: []
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

describe('/PUT/:id trips', () => {
    it('it should UPDATE a book given the id', (done) => {
        let trip = new trip({
            tripname: "Cancun",
            list: []
        })
        trip.save((err, book) => {
            chai.request(server)
                .put('/trips/' + trip.id)
                .send({
                    tripname: "Miami",
                    list: []
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('tripname').to.equal('Miami');
                    res.body.trip.should.have.property('list').to.equal([]);
                    done();
                });
        });
    });
});
describe('/DELETE/:id trips', () => {
    it('it should DELETE a trip given the id', (done) => {
        let trip = new Trip({
            tripname: "Prague",
            list: []
        })
        trip.save((err, trip) => {
            chai.request(server)
                .delete('/trips/' + trip.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('Prague').to.equal('Prague');
                    res.body.result.should.have.property('list').to.equal([]);
                    done();
                });
        });
    });
});
//Unit Tests
