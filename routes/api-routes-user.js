// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving users from the database.
    app.get('/api/user-schema', function (req, res) { //Works
        console.log('----retrieving user----');
        db.user.find({})
            .then(function (dbuser) {
                console.log(dbuser)
                res.json(dbuser);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new users in the database.
    app.post('/api/user-schema', function (req, res) {  //Working
        console.log('------Adding User to Mongo');
        db.user.create(req.body)
            .then(function (dbuser) {
                res.json(dbuser);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // PUT request: Route for updating users
    app.put('/api/user-schema', function (req, res) { // NOT working
        console.log('----> updating user <----');
        db.user.findOneAndUpdate({ _id: req.body.id }, { $set: { password: req.body.password, email: req.body.email, userName: req.body.userName } })
            .then(function (dbuser) {
                res.json(dbuser);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes user content
    app.delete('/api/user-schema/:id', function (req, res) { // NOT working
        console.log('------deleting user------');
        db.user.findOneAndDelete(req.params.user_id, function (err, links) {
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


// // DELETE request: Deletes user content
// app.delete('/api/user-schema/:id', function (req, res) { 
//     console.log('------deleting------');
//     db.user.deleteOne({_id: req.params.id})
//     .then(function (dbuser) {
//         res.json({
//             success: true
//         })
//     })
//     .catch(function (err) {
//         res.json({
//             success: false})
//     })
// });