// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving List Items from the database.
    app.get('/api/listLog', function (req, res) { 
        db.list.find({})
            .then(function (dblist) {
                res.json(dblist);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new List Items in the database.
    app.post('/api/linksLog', function (req, res) {  
        console.log('------Adding Link in mongo');
        db.list.create(req.body)
            .then(function (dblist) {
                res.json(dblist);
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