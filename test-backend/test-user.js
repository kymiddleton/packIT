//====================== USER MODEL TESTING ===========================//
//Back End Test
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const db = require('../models');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;

// GET route for retrieving users from the database.
describe('API Routes', function () {
    // Before each test, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        db.user.deleteMany({userName: 'Minnie', email: 'minnie@yahoo.com', password: 'minnie1234'}).then(() => {
            done();
        })
    });

    it('should find all examples', function () {
        // Add some examples to the db to test with
        db.user.create({ userName: 'Minnie', email: 'minnie@yahoo.com', password: 'minnie1234' })
            .then(function () {
                // Request the route that returns all examples
                request.get('/api/user-schema').end(function (err, res) {

                    // Run assertions on the response
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    expect(res.body[0]).to.be.an('object').to.include({ userName: 'minnie', email: 'minnie@yahoo.com', password: 'minnie1234' });
                    done();// The `done` function is used to end any asynchronous tests
                });
            });
    });

    it('should POST new user details in the database', function (done) {
        let reqBody = { userName: 'Minnie', email: 'minnie@yahoo.com', password: 'minnie1234' };

        // POST the request body to the server
        request.post('/api/user-schema').send(reqBody).end(function (err, res) {

            // Run assertions on the response
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.body).to.include({ userName: 'minnie', email: 'minnie@yahoo.com', password: 'minnie1234' });
            done(); 
        });
    });

    //PUT route for updating users
    it('it should UPDATE the user id', (done) => {
        let user = new db.user({ userName: 'Minnie', email: 'minnie@yahoo.com', password: 'minnie1234' })

        request.put('/api/user-schema').send(user).end((err, res) => {
            expect(res.status).to.equal(200);
            console.log("-----------UPDATE", res.body)
            expect(res.body).to.be.an('object');
        });
        done();
    });

    // DELETE route to delete user content
    it('it should DELETE a user given the id', (done) => {
        let user = new db.user({ userName: 'Minnie', email: 'minnie@yahoo.com', password: 'minnie1234' })

        request.delete('/api/user-schema/Minnie').send(user).end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('message').to.equal('User successfully deleted');
        });
        done();
    });
});