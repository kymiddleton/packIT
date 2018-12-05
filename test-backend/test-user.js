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

describe('GET /api/user-schema', function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
    });

    it('should find all examples', function (done) {
        // Add some examples to the db to test with
        db.user.create({
            userName: 'Minnie',
            email: 'kyla@fmiddleton.com',
            password: 'home1234'
        })
            .then(function (result) {
                console.log(result, "test result");
                // Request the route that returns all examples
                request.get('/api/user-schema').end(function (err, res) {
                    let responseStatus = res.status;
                    let responseBody = res.body;

                    // Run assertions on the response
                    expect(err).to.be.null;
                    expect(responseStatus).to.equal(200);
                    expect(responseBody).to.be.an('array').that.has.lengthOf(1);
                    expect(responseBody[0]).to.be.an('object').that.includes(
                        { userName: 'Mickey', email: 'mickey@yahoo.com', password: `mickey1234` }
                    );
                    // expect(responseBody[1]).to.be.an('object').that.includes(
                    //     { tripname: 'Seattle', list: [] }
                    // );

                    // The `done` function is used to end any asynchronous tests
                    done();
                });
            });
    });
});

describe('POST /api/user-schema', function () {
    beforeEach(function () {
        request = chai.request(server);
        // return db.mongoose.connect({
        //     useNewUrlParser: true
        // });
    });

    it('should save an example', function (done) {
        let reqBody = { userName: 'Mickey', email: 'mickey@yahoo.com', password: `mickey1234` };

        // POST the request body to the server
        request.post('/api/user-schema').send(reqBody).end(function (err, res) {
            var responseStatus = res.status;
            var responseBody = res.body;

            // Run assertions on the response
            expect(err).to.be.null;
            expect(responseStatus).to.equal(200);
            expect(responseBody).to.be.an('object').that.includes(reqBody);

            // The `done` function is used to end any asynchronous tests
            done();
        });
    });
});

describe('/PUT/:id user', function () {
    it('it should UPDATE the user id', (done) => {
        let user = new User({ userName: 'Mickey', email: 'mickey@yahoo.com', password: `mickey1234` })

            chai.request(server)
                .put('/trips/' + trip.id)
                .send({ tripname: "Miami", list: [] })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('tripname').to.equal('Miami');
                    res.body.trip.should.have.property('list').to.equal([]); 
                });
                done();
        });
    });
});

// describe('/DELETE/:id user', () => {
//     it('it should DELETE a user given the id', (done) => {
//         let trip = new Trip({ tripname: "Prague", list: [] })
//             
//         user.save((err, trip) => {
//             chai.request(server)
//                 .delete('/user/' + user.id)
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.should.be.a('object');
//                     res.body.should.have.property('Prague').to.equal('Prague');
//                     res.body.result.should.have.property('list').to.equal([]);
//                     done();
//                 });
//         });
//     });
// });