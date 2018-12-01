// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving users from the database.
    app.get('/api/userLog', function (req, res) { 
        db.user.find({})
            .then(function (dbuser) {
                res.json(dbuser);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new users in the database.
    app.post('/api/userLog', function (req, res) {  
        console.log('------Adding Link in mongo');
        db.user.create(req.body)
            .then(function (dbuser) {
                res.json(dbuser);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // PUT request: Route for updating users
    app.put('/api/userLog', function (req, res) { 
        console.log('----> updating <----');
        db.user.findOneAndUpdate({ _id: req.body.id }, { $set: { userName: req.body.userName, email: req.body.email } })
            .then(function (dbuser) {
                res.json(dbuser);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes user content
    app.delete('/api/userLog/:user_id', function (req, res) { 
        console.log('--------deleting--------');
        db.user.findByIdAndRemove(req.params.user_id, function (err, user) {
            if (err) return res.status(500).send(err);
            // We'll create a simple object to send back with a message and the id of the document that was removed
            const response = {
                message: "User successfully deleted",
                id: user._id
            };
            return res.status(200).send(response);
        });
    });
};