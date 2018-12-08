// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving Packing List Items from the database.
    app.get('/api/item-schema/:weather/:packing/:destination/:travel', function (req, res) { //Works
        console.log(req.params)
        db.packingItem.find({$and :[
            {weather:{$in : [req.params.weather]}},
             {packing: {$in : [req.params.packing]}},
             {destination: {$in : [req.params.destination]}},
             {travel: {$in : [req.params.travel]}}
         ]})
            .then(function (dbpackingItem) {
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new Packing List Items in the database.
    app.post('/api/item-schema', function (req, res) { //Works
        // console.log('------Adding Item in mongo');
        db.packingItem.create(req.body)
            .then(function (dbpackingItem) {
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    // PUT request: Route for updating Packing List content / saving updates 
    app.put('/api/item-schema', function (req, res) { // Working
        // console.log('----> updating item <----');
        db.packingItem.findOneAndUpdate({ item_id: req.body.id }, 
            { $set: {
                item: req.body.item,
                category: req.body.category,
                weather: req.body.weather,
                packing: req.body.packing,
                destination: req.body.destination,
                travel: req.body.travel
            }})
            .then(function (dbpackingItem) {
                res.json(dbpackingItem);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes Packing List content
    app.delete('/api/item-schema/:item', function (req, res) { //Working
        // console.log('--------deleting item --------');
        db.packingItem.findOneAndRemove({item: req.params.item}, function (err, packingItem) {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Item successfully deleted",
            };
            return res.status(200).send(response);
        });
    });
};