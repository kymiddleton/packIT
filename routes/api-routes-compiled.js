// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving links from the database.
    app.get('/api/listLog/:weather/:packing/:destination/:travel', function (req, res) { //Works
        db.list.find({ 
                        weather: req.params.weather,
                        packing: req.params.pack,
                        destination: req.params.destination,
                        travel: req.params.travlevel})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new content, adding a new Link entry to the database.
    app.post('/api/listLog/:weather/:packing/:destination/:travel', function (req, res) {  //working
        console.log('------Adding Link in mongo');
        db.links.create()
            .then(function (dblinks) {
                res.json(dblinks);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // PUT request: Route for updating List content / saving updates 
    app.put('/api/listLog', function (req, res) { 
        console.log('----> updating <----');
        db.list.findOneAndUpdate({ _id: req.body.id }, )
            .then(function (dblist) {
                res.json(dblist);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes List content
    app.delete('/api/listLog/:list_id', function (req, res) {  
        console.log('--------deleting--------');
        db.list.findByIdAndRemove(req.params.list_id, function (err, list) {
            if (err) return res.status(500).send(err);
            // We'll create a simple object to send back with a message and the id of the document that was removed
            const response = {
                message: "List successfully deleted",
                id: list._id
            };
            return res.status(200).send(response);
        });
    });

};