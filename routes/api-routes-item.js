// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving Packing List Items from the database.
    app.get('/api/item-schema/:weather/:packing/:destination/:travel', function (req, res) { //Works

        console.log(req.params)
        // res.send(true)
        // console.log(req.body)
        db.packingItem.find({
                $and: [{
                        weather: req.params.weather
                    },
                    {
                        packing: req.params.packing
                    },
                    {
                        destination: req.params.destination
                    },
                    {
                        travel: req.params.travel
                    }
                ]
            })
            .then(function (dbpackingItem) {
                console.log(dbpackingItem)
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new Packing List Items in the database.
    app.post('/api/item-schema', function (req, res) { //Works
        console.log('------Adding Item in mongo');
        db.packingItem.create(req.body)
            .then(function (dbpackingItem) {
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    // PUT request: Route for updating Packing List content / saving updates 
    // app.post('/api/update/item-schema', function (req, res) {
    app.put('/api/item-schema', function (req, res) { // NOT working
        console.log('----> updating item <----');
        db.packingItem.findOneAndUpdate({
                _id: req.body.id
            }, {
                $set: {
                    item: req.body.item,
                    category: req.body.category,
                    weather: req.body.weather,
                    packing: req.body.packing,
                    destination: req.body.destination,
                    travel: req.body.travel,
                }
            })
            .then(function (dbpackingItem) {
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes Packing List content
    // app.post('/api/delete/item-schema/:packingItem_id', function (req, res) {
    app.delete('/api/item-schema/:packingItem_id', function (req, res) { //NOT working
        console.log('--------deleting item --------');
        db.packingItem.findByIdAndRemove(req.body.id, function (err, packingItem) {
            // db.packingItem.findByIdAndRemove(req.params.packingItem_id, function (err, packingItem) {
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