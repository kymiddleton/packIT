// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving Packing List Items from the database.
    app.put('/api/item-schema/items', function (req, res) { //Works
        
        // console.log(req.body)
        // res.send(true)
        db.packingItem.find({
            weather: req.body.weather,
            packing: req.body.packing,
            destination: req.body.destination,
            travel: req.body.travel
        })
            .then(function (dbpackingItem) {
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new Packing List Items in the database.
    app.post('/api/trips-schema', function (req, res) { //Works
        console.log('------Adding Link in mongo');
        db.trips.create(req.body)
            .then(function (dbpackingItem) {
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    // PUT request: Route for updating Packing List content / saving updates 
    app.put('/api/item-schema', function (req, res) {
        console.log('----> updating <----');
        db.packingIem.findOneAndUpdate({ _id: req.body.id })
            .then(function (dbpackingItem) {
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes Packing List content
    app.delete('/api/item-schema/:packingItem_id', function (req, res) {
        console.log('--------deleting--------');
        db.packingItem.findByIdAndRemove(req.params.packingItem_id, function (err, packingItem) {
            if (err) return res.status(500).send(err);
            // We'll create a simple object to send back with a message and the id of the document that was removed
            const response = {
                message: "List successfully deleted",
                id: packingItem._id
            };
            return res.status(200).send(response);
        });
    });
};