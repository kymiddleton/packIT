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
describe('GET/api/item-schema/:weather/:packing/:destination/:travel', function () {
    // Before each test, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        db.packingItem.deleteMany({}).then(() => {
            db.packingItem.create([
                {
                    item: '',
                    category: '',
                    weather: '',
                    packing: '',
                    destination: '',
                    travel: '',
                }
            ]).then(() => done())
        });
    });

    //     it('should find all examples', function (done) {
    //         request.get('/api/item-schema/hot/pants/city/minimal').end(function (err, res) {
    //             // Run assertions on the response
    //             expect(err).to.be.null;
    //             expect(res.status).to.equal(200);
    //             expect(res.body[0]).to.be.an('object').to.include.keys({
    //                 item: [],
    //                 category: [],
    //                 weather: [],
    //                 packing: [],
    //                 destination: [],
    //                 travel: [],
    //             });
    //             done(); // The `done` function is used to end any asynchronous tests            
    //         });
    //     });
    // });

    it('should find all examples', function (done) {
        db.packingItem.create({
            item: '',
            category: '',
            weather: '',
            packing: '',
            destination: '',
            travel: '',
        }).then(function () {
            // console.log(result);
            // Request the route that returns all examples
            request.get('/api/item-schema/hot/pants/city/minimal').end(function (err, res) {
                // console.log(res.body);
                // Run assertions on the response
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body[0]).to.be.an('object').to.have.deep.keys({
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
            // ]).then(() => {
            //     done();
        })
    });

    it('should POST new items in the database', function (done) {
        let reqBody = {
            item: '',
            category: '',
            weather: '',
            packing: '',
            destination: '',
            travel: ''
        }

        // POST the request body to the server
        request.post('/api/item-schema').send(reqBody).end(function (err, res) {
            //console.log(res)
            console.log(res.body, "POST response from packingItems")

            // Run assertions on the response
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            // expect(responseBody).to.be.an('string').that.has.lengthOf();
            expect(res.body).to.have.deep.keys({
                item: 'Snow boots',
                category: 'footwear',
                weather: 'rainy',
                packing: 'typical',
                destination: 'outdoor',
                travel: 'car',
            });
            done(); // The `done` function is used to end any asynchronous tests
        });
    });
});

// //PUT route for updating users
// describe('/PUT/:id item', function () {
//     beforeEach(function (done) {
//         request = chai.request(server);
//         db.packingItem.deleteMany({}).then(() => {
//             // db.packingItem.update([
//             //     {
//             //         item: '',
//             //         category: '',
//             //         weather: '',
//             //         packing: '',
//             //         destination: '',
//             //         travel: ''

//             //     }
//             // ]).then(() => done())
//             done()
//         })
//     });

//     it('it should UPDATE the item id', (done) => {
//         let item = new db.packingItem({
//             item: '',
//             category: '',
//             weather: '',
//             packing: '',
//             destination: '',
//             travel: ''
//         })
//         item.save().then(() => {
//             request.put('/api/item-schema').send({
//                 item: 'fff',
//                 category: 'ggg',
//                 weather: 'www',
//                 packing: 'qqq',
//                 destination: 'bbb',
//                 travel: 'ddd'
//             }).end((err, res) => {
//             expect(res.status).to.equal(200);
//             expect(res.body).to.be.an('object');
//         });
//         done();
//         })

//     });
// });


// DELETE route to delete user content
// describe('/DELETE/api/item-schema/:id item', function () {
//     beforeEach(function (done) {
//         request = chai.request(server);
//         db.packingItem.deleteMany({}).then(() => {
//             // db.packingItem.update([
//             //     { userName: 'Mickey', email: 'mickey@yahoo.com', password: `mickey1234` }
//             // ]).then(() => done())
//         })
//     });

//     it('it should DELETE an item id', (done) => {
//         let item = new db.packingItem({
//             "item": "Rainboots",
//             "category": "footwear",
//             "weather": "rainy",
//             "packing": "typical",
//             "destination": "outdoor",
//             "travel": "car"
//         })
//         item.save().then(() => {
//             request.delete('/api/item-schema/Rainboots').end((err, res) => {
//                 expect(err).to.be.null;
//                 expect(res.status).to.equal(200);
//                 res.body.should.be.a('object');
//                 // res.body.should.have.property('userName').to.equal('Mickey');
//                 res.body.should.have.property('message').to.equal('Trip successfully deleted');
//             });
//             done();
//         })
//     });
// });

