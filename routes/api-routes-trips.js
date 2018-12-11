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
            // console.log('------Adding Trip Link in mongo');
            db.trips.create(req.body)
                .then(function (dbtrips) {
                    res.json(dbtrips);
                })
                .catch(function (err) {
                    res.json(err);
                });
        });

        // PUT request: Route for updating Trips content / saving updates 
        app.put('/api/trips-schema', function (req, res) { //Working
            // console.log('----> updating trip <----');
            db.trips.findOneAndUpdate({
                    _id: req.body.id
                }, {
                    $set: {
                        tripList: req.body.tripList,
                        tripName: req.body.tripName
                    }
                })
                .then(function (dbtrips) {
                    // console.log('updated trip', dbtrips)
                    res.json(dbtrips);
                })
                .catch(function (err) {
                    res.json(err);
                });
        });

        // DELETE request: Deletes Trip content
        app.delete('/api/trips-schema/:tripname', function (req, res) { //Working
            // console.log('--------deleting--------');
            db.trips.findOneAndDelete({
                tripName: req.params.tripname
            }, function (err, trips) {
                if (err) return res.status(500).send(err);
                const response = {
                    message: "Trip successfully deleted",
                };
                return res.status(200).send(response);
            });
        });

<<<<<<< HEAD
        // // // Pawan needs for his piece to delete one single item instead of deleting all items. 
=======
        // // Pawan needs for his piece to delete one single item instead of deleting all items. 
>>>>>>> b74032c5a57ba9ce2aa22e2bb3e11f8491877298
        // app.delete('/api/trips-schema/:trips_id/:category/:item', function (req, res) {
        //             console.log('--------deleting--------');
        //             db.trips.update({
        //                     _id: req.params.trips_id
        //                 }, {
        //                     $pullAll: {
        //                         [req.params.category]: [req.params.item]
        //                     }
        //                 })
        //                 .then(data => res.json(data))
        //         }

        //         //Pawan needs to update one specific item instead of all items. 
        //         app.put('/api/trips-schema/:trips_id/:category/:item', function (req, res) {
        //                 console.log('--------updating--------');
        //                 db.trips.update({
        //                         _id: req.params.trips_id
        //                     }, {
        //                         $pullAll: {
        //                             [req.params.category]: [req.params.item]
        //                         }
        //                     })
        //                     .then(data => res.json(data))
        //             }

        //         }
    }