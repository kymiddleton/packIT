// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving Trips from the database.
    app.get('/api/trips-schema', function (req, res) { //Working
        db.trips.find({})
            .then(function (dbtrips) {
                res.json(dbtrips);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new Trips in the database.
    app.post('/api/trips-schema', function (req, res) { // Working
        console.log('------Adding Trip Link in mongo');
        db.trips.create(req.body)
            .then(function (dbtrips) {
                res.json(dbtrips);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // PUT request: Route for updating Trips content / saving updates 
    app.put('/api/trips-schema', function (req, res) { //NOT Working
        console.log('----> updating trip <----');
        console.log(req.body.tripList);
        console.log(req.body.tripName);
        db.trips.findOneAndUpdate({_id: req.body.id}, { $set: { tripList: req.body.tripList, tripName: req.body.tripName } })
            .then(function (dbtrips) {
                res.json(dbtrips);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes Trip content
    app.delete('/api/trips-schema/:id', function (req, res) { //NOT working
        console.log('--------deleting trip--------');
        db.trips.findByIdAndDelete(req.params.trips_id, function (err, trips) {
            if (err) return res.status(500).send(err);
            // We'll create a simple object to send back with a message and the id of the document that was removed
            const response = {
                message: "Trip successfully deleted",
                id: trips._id
            };
            return res.status(200).send(response);
        });
    });
};