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
            db.packingItem.create([{
                item: '',
                category: '',
                weather: '',
                packing: '',
                destination: '',
                travel: '',
            }]).then(() => done())
        });
    });

    it('should find all examples', function (done) {
        db.packingItem.create({ item: '', category: '', weather: '', packing: '', destination: '', travel: '', })
            .then(function () {
                // Request the route that returns all examples
                request.get('/api/item-schema/hot/pants/city/minimal').end(function (err, res) {
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

    it('should POST new items in the database', function () {
        let reqBody = { item: '', category: '', weather: '', packing: '', destination: '', travel: '' };

        // POST the request body to the server
        request.post('/api/item-schema').send(reqBody).end(function (err, res) {

            // Run assertions on the response
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.body).to.include({
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

    it('it should UPDATE the item id', (done) => {
        let item = new db.packingItem({item: '', category: '', weather: '', packing: '', destination: '',  travel: '' })
            
        request.put('/api/item-schema').send({
            item: 'fff',
            category: 'ggg',
            weather: 'www',
            packing: 'qqq',
            destination: 'bbb',
            travel: 'ddd'
        }).end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
        });
        done();
    });

    it('it should DELETE an item id', (done) => {
        let item = new db.packingItem({
            "item": "Rainboots",
            "category": "footwear",
            "weather": "rainy",
            "packing": "typical",
            "destination": "outdoor",
            "travel": "car"
        })

        request.delete('/api/item-schema/Rainboots').end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').to.equal('List successfully deleted');
        });
        done();
    });
});