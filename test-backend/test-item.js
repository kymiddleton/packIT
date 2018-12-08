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
    beforeEach(function (done) {
        request = chai.request(server);
        db.item.deleteOne({}).then(() => {
            db.item.create([
                {
                    item: '',
                    category: '',
                    weather: '',
                    packing: '',
                    destination: '',
                    travel: '',
                }
            ]).then(() => done())
        })
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
                request.get('/api/item-schema').end(function (err, res) {
                    // Run assertions on the response
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    expect(res.body[0]).to.be.an('object').to.include({
                        item: '',
                        category: '',
                        weather: '',
                        packing: '',
                        destination: '',
                        travel: '',
                    });
                });
                done(); // The `done` function is used to end any asynchronous tests
            });
    });
});

// POST route for creating new users in the database.
describe('POST /api/item-schema', function () {
    beforeEach(function (done) {
        request = chai.request(server);
        db.packingItem.deleteMany({}).then(() => {
            db.packingItem.create([
                {
                    item: 'Rain boots',
                    category: 'footwear',
                    weather: 'rainy',
                    packing: 'typical',
                    destination: 'outdoor',
                    travel: 'car',
                }
            ]).then(() => done())
        })
    });

    it('should POST new item details in the database', function (done) {
        let reqBody = {
            item: 'Rain boots',
            category: 'footwear',
            weather: 'rainy',
            packing: 'typical',
            destination: 'outdoor',
            travel: 'car',
        },
    });

    // POST the request body to the server
    request.post('/api/item-schema').send(reqBody).end(function (err, res) {
        // console.log(res)
        // console.log(res.body, "POST response from users")

        // Run assertions on the response
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        // expect(res.status).to.be.an('string').that.has.lengthOf();
        // expect(res.body).to.include({ userName: 'donald', email: 'donald@yahoo.com', password: `donnie1234` });
        expect(res.body).to.be.an('object').to.have.deep.keys(
            {
                item: 'Rain boots',
                category: 'footwear',
                weather: 'rainy',
                packing: 'typical',
                destination: 'outdoor',
                travel: 'car',
            }
        );

        done(); // The `done` function is used to end any asynchronous tests
    });
});

//PUT route for updating users
describe('/PUT/:id item', function () {
    beforeEach(function (done) {
        request = chai.request(server);
        db.user.deleteMany({}).then(() => {
            done()
            // db.user.update([
            //     { }
            // ]).then(() => done())
        })
    });

    it('it should UPDATE items in the packing list', (done) => {
        let item = {
            "item": "Rain boots",
            "category": "footwear",
            "weather": "rainy",
            "packing": "typical",
            "destination": "outdoor",
            "travel": "car",
        }
        db.packingItem.create(item).then(function (err, res) {
            request.put('/api/item-schema').send({
                "item": "Rain boots",
                "category": "footwear",
                "weather": "rainy",
                "packing": "typical",
                "destination": "outdoor",
                "travel": "car"
            }).end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
            });
            done();
        })
    });
});



// DELETE route to delete user content
describe('/DELETE/api/item-schema/:id user', function () {
    beforeEach(function (done) {
        request = chai.request(server);
        // db.user.deleteMany({}).then(() => {
        //     db.user.update([
        //         { }
        //     ]).then(() => done())
        // })
        done()
    });

    it('it should DELETE an item by id', (done) => {
        let item = new db.packingItem({
            "item": "Rain boots",
            "category": "footwear",
            "weather": "rainy",
            "packing": "typical",
            "destination": "outdoor",
            "travel": "car"
        })
        item.save().then(function (err, res) {
            request.delete('/api/item-schema').end((err, res) => {

                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                res.body.should.be.a('object');
                // res.body.should.have.property('userName').to.equal('Mickey');
                res.body.result.should.have.property('message').to.equal('Trip successfully deleted');
            });
            done();
        });
    });
});