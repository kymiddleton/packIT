// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving Trips from the database.
    app.get('/api/trips-schema', function (req, res) { 
        db.trips.find({})
            .then(function (dbtrips) {
                res.json(dbtrips);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new Trips in the database.
    app.post('/api/trips-schema', function (req, res) { 
        console.log('------Adding Link in mongo');
        db.trips.create(req.body)
            .then(function (dbtrips) {
                res.json(dbtrips);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // PUT request: Route for updating Trips content / saving updates 
    app.put('/api/trips-schema', function (req, res) { 
        console.log('----> updating <----');
        db.links.findOneAndUpdate({
                _id: req.body.id
            }, {
                $set: {
                    url: req.body.url,
                    linkName: req.body.linkName
                }
            })
            .then(function (dbtrips) {
                res.json(dbtrips);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes Trip content
    app.delete('/api/trips-schema/:trips_id', function (req, res) { 
        console.log('--------deleting--------');
        db.trips.findByIdAndRemove(req.params.trip_id, function (err, trip) {
            if (err) return res.status(500).send(err);
            // We'll create a simple object to send back with a message and the id of the document that was removed
            const response = {
                message: "Link successfully deleted",
                id: trips._id
            };
            return res.status(200).send(response);
        });
    });
};