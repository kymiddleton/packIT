//====================== ITEM MODEL TESTING ===========================//
//Back End Test
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../models');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;

// GET route for retrieving items from the database.
describe('GET/api/item-schema', function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);

        //empty the db here

    });

    it('should find all examples', function (done) {
        // Add some examples to the db to test with
        db.packingItem.create({
            item: '',
            category: '',
            weather: '',
            packing: '',
            destination: '',
            travel: '',
        })
            .then(function (result) {
                // Request the route that returns all examples
                request.get('/api/item-schema').end(function (err, res) {
                    let responseStatus = res.status;
                    let responseBody = res.body;

                    // Run assertions on the response
                    expect(err).to.be.null;
                    expect(responseStatus).to.equal(200);
                    expect(responseBody[0]).to.be.an('object').to.include({ 
                        item: '',
                        category: '',
                        weather: '',
                        packing: '',
                        destination: '',
                        travel: '',
                    });
                });
                // The `done` function is used to end any asynchronous tests
                done();
            });
    });
});

// POST route for creating new users in the database.
describe('POST /api/item-schema', function () {
    beforeEach(function () {
        request = chai.request(server);
        // db.user.deleteMany({}).then(() => {
        //     // db.user.create([
        //     //     { userName: 'Donald', email: 'donald@yahoo.com', password: `donnie1234` }
        //     // ]).then(() => done())
        // })
    });

    it('should POST new user details in the database', function (done) {
        let reqBody = { userName: 'Donald', email: 'donald@yahoo.com', password: `donnie1234` };

        // POST the request body to the server
        request.post('/api/user-schema').send(reqBody).end(function (err, res) {
            console.log(res)
            let responseStatus = res.status;
            let responseBody = res.body;
            console.log(responseBody, "POST response from users")

            // Run assertions on the response
            expect(err).to.be.null;
            expect(responseStatus).to.equal(200);
            // expect(responseBody).to.be.an('string').that.has.lengthOf();
            expect(responseBody).to.include({ userName: 'donald', email: 'donald@yahoo.com', password: `donnie1234` });

            // The `done` function is used to end any asynchronous tests
            done();
        });
    });
});

//PUT route for updating users
describe('/PUT/:id user', function () {
    beforeEach(function (done) {
        request = chai.request(server);
        db.user.deleteMany({}).then(() => {
            db.user.update([
                { userName: 'Donald', email: 'donald@yahoo.com', password: `donnie1234` }
            ]).then(() => done())
        })
    });

    it('it should UPDATE the user id', (done) => {
        let user = new db.user({ userName: 'Mickey', email: 'mickey@yahoo.com', password: `mickey1234` })
        request.put('/api/user-schema').send(user).end((err, res) => {
            expect(responseStatus).to.equal(200);
            expect(responseBody).to.be.an('object');
        });
        done();
    });
});


// DELETE route to delete user content
describe('/DELETE/api/user-schema/:id user', function () {
    beforeEach(function (done) {
        request = chai.request(server);
        db.user.deleteMany({}).then(() => {
            db.user.update([
                { userName: 'Mickey', email: 'mickey@yahoo.com', password: `mickey1234` }
            ]).then(() => done())
        })
    });

    it('it should DELETE a user given the id', (done) => {
        let trip = new db.user({ userName: 'Mickey', email: 'mickey@yahoo.com', password: `mickey1234` })

        request.delete('/api/user-schema').send(user).end((err, res) => {
            
            expect(err).to.be.null;
            expect(responseStatus).to.equal(200);
            res.body.should.be.a('object');
            res.body.should.have.property('userName').to.equal('Mickey');
            res.body.result.should.have.property('email').to.equal([]);
            done();
        });
    });
});