const token = require('../lib/token');
const User = require.main.require('../models/user');

class SessionsController {

    create(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        User.find({email}, function (err, users) {
            // TODO: error handler
            const user = users[0];

            if (!user || user.password !== password) {
                res.send(401);
                return;
            }

            res.send({userId: user.id, authenticationToken: token});
        });
    }

}

module.exports = SessionsController;
