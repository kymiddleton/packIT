//=======================TRIPS MODEL TESTING=======================//
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

    beforeEach(function (done) {
        request = chai.request(server);
        db.trips.deleteMany({}).then(() => {
            db.trips.create([
                { tripName: 'Seattle', tripList: {} },
                { tripName: 'Tokyo', tripList: {} },
                { tripName: 'Havana', tripList: {} }
            ]).then(() => done())
        })
    });

    it('should find all examples', function (done) {
        // Request the route that returns all examples
        request.get('/api/trips-schema').end(function (err, res) {
            // console.log(res.body, "this is response from get trips")

            // Run assertions on the response
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array').that.has.lengthOf(3);
            //expect(res.body[0]).to.be.an('object').to.include.keys('tripName', 'tripList');
            expect(res.body[0]).to.be.an('object').to.have.deep.keys({
                tripList:
                {
                    clothing: [],
                    footwear: [],
                    personal: [],
                    documents: [],
                    gadgets: [],
                    miscellaneous: []
                },
                _id: '5c07221306418a0c806a0b42',
                tripName: 'Seattle',
                __v: 0
            });
            done(); // The `done` function is used to end any asynchronous tests
        });
    });
});

describe('POST /api/trips-schema', function () {
    beforeEach(function (done) {
        request = chai.request(server);
        db.trips.deleteMany({}).then(() => {
            db.trips.create(
                { tripName: 'Seattle', tripList: {} }
            ).then(() => done())
        })
    });

    it('should save an example', function (done) {
        let reqBody = { tripName: 'Athens', tripList: {} };

        // POST the request body to the server
        request.post('/api/trips-schema').send(reqBody).end(function (err, res) {
            // console.log(res.body, "POST response from trips")

            // Run assertions on the response
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object').to.have.deep.keys({
                tripList:
                {
                    clothing: [],
                    footwear: [],
                    personal: [],
                    documents: [],
                    gadgets: [],
                    miscellaneous: []
                },
                _id: '5c07221306418a0c806a0b42',
                tripName: 'Athens',
                __v: 0
            });
            done();
        });
    });
});

describe('/PUT/:id trips', function () {
    beforeEach(function (done) {
        request = chai.request(server);
        db.trips.deleteMany({}).then(() => {
            done()
            // db.trips.create(
            //     { tripName: 'Cancun', tripList: {} }
            // ).then(() => done())
        })
    });

    it('it should UPDATE a tripName and tripList', (done) => {
        let trip = {
            "tripName": "vvvvvatlanta",
            "tripList": {
                "clothing": "bbbbbalue"
            }
        }
        db.trips.create(trip).then(function (err, res) {
            request.put('/api/trips-schema').send({
                "tripName": "updated",
                "tripList": {
                    "clothing": "updated value"
                }
            }).end((err, res) => {
                // console.log('response', res);
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('tripName').to.equal('Cancun');
                expect(res.body).trip.to.have.property('tripList').to.equal([]);

            });
            done();
        })

    });
});

describe('/DELETE/api/trips-schema/:id', function () {
    beforeEach(function (done) {
        request = chai.request(server);
        // db.trips.deleteMany({}).then(() => {
        //     // db.trips.create(
        //     //     { tripName: 'Prague', tripList: {} }
        //     // ).then(() => done())
        // })
        done()
    });

    it('it should DELETE a tripName and tripList by id', (done) => {
        const trip = new db.trips({
            tripName: "atlanta",
            tripList: {
                clothing: "shirts"
            }
        })
        trip.save().then(function (err, res) {
            request.delete(`/api/trips-schema/Prague`).end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').to.equal('Trip successfully deleted');
            });
            done();
        })
    });
});