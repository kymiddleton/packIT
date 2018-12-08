// Require all models
const db = require('../models');

// ROUTING
module.exports = function (app) {

    // GET request: Route for retrieving users from the database.
    app.get('/api/user-schema', function (req, res) { //Working
        // console.log('----retrieving user----');
        db.user.find({})
            .then(function (dbuser) {
                // console.log(dbuser)
                res.json(dbuser);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // POST request: Route for creating new users in the database.
    app.post('/api/user-schema', function (req, res) {  //Working
        // console.log('------Adding User to Mongo');
        db.user.create(req.body)
            .then(function (dbuser) {
                res.json(dbuser);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // PUT request: Route for updating users
    app.put('/api/user-schema', function (req, res) { //Working
        // console.log('----> updating user <----');
        db.user.findOneAndUpdate({ userName: req.body.userName }, { $set: { userName: req.body.userName, email: req.body.email, password: req.body.password } })
            .then(function (dbuser) {
                console.log(res.body);
                //add error handling for null response
                if (res.body === null){
                    console.log("must pass in user info");
                    throw(err);
                } else {
                    res.json(dbuser);
                }
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // DELETE request: Deletes user content
    app.delete('/api/user-schema/:username', function (req, res) { // working
        // console.log('------deleting user------');
        db.user.findOneAndDelete({ userName: req.params.username }, function (err, links) {
            if (err) return res.status(500).send(err);
            const response = {
                message: "User successfully deleted"
            };
            return res.status(200).send(response);
        });
    });
};  