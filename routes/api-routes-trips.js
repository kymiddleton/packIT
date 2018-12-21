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


    // // // Pawan needs for his piece to delete one single item instead of deleting all items. 

    // // Pawan needs for his piece to delete one single item instead of deleting all items. 

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

    /*==================ROUTES FOR CUSTOMIZED ===================*/

    //Pawan needs to update one specific item instead of all items. 
    // app.put('/api/trips-schema/:category/:item', function (req, res) { //NOT working
    //     console.log('-------> updating <--------');
    //     db.trips.findOneAndUpdate({ _id: req.body._id }, {$set: {category: req.body.category, item: req.body.item}})
    //     .then(function (dbtrips) {
    //         res.json(dbtrips);
    //     })
    //     .catch(function (err) {
    //         res.json(err);
    //     });        
    // });

    // Pawan needs for his piece to delete one single item instead of deleting all items. 
    app.put('/api/trips-schema/:trips_id/:category/:item', function (req, res) {
        // working
        const {
            trips_id,
            category,
            item
        } = req.params;
        // const trip = await db.trips.findOne({
        //     _id: trips_id
        // });
        // console.log("Im here")
        // console.log(trip);
        // trip.tripList[category].push(item);
        // await trip.save();

        db.trips.find({
                _id: req.params.trips_id
            })
            .then(function (trip) {
                trip[0].tripList[category].push(item);
                console.log(trip[0].tripList[category]);
                db.trips.findOneAndUpdate({
                        _id: req.params.trips_id
                    }, trip[0], {new:true})
                    .then(function (results) {
                        res.json(results);
                    })
                    .catch(function (err) {
                        console.log(err);
                        res.json(err);
                    });
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });

        // res.json(trip);
    });


    app.delete('/api/trips-schema/:trips_id/:category/:item', async function (req, res) {
        // working
        const {
            trips_id,
            category,
            item
        } = req.params;
        // const trip = await db.trips.findOne({
        //     _id: trips_id
        // });
        // console.log(trip);
        // trip[0].tripList[category].splice(trip.tripList[category].indexOf(item), 1);
        // await trip.save();
        // res.json(trip);

        db.trips.find({
                _id: req.params.trips_id
            })
            .then(function (trip) {
                trip[0].tripList[category].splice(trip[0].tripList[category].indexOf(item), 1);;
                console.log(trip[0].tripList[category]);
                db.trips.findOneAndUpdate({
                        _id: req.params.trips_id
                    }, trip[0])
                    .then(function (results) {
                        res.json(results);
                    })
                    .catch(function (err) {
                        console.log(err);
                        res.json(err);
                    });
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });

        // db.trips.updateOne({
        //             _id: req.params.trips_id
        //         }, {
        //             $pullAll: {
        //                 updateObj: [req.params.item]
        //             }
        //         }


        //     )
    });
}
