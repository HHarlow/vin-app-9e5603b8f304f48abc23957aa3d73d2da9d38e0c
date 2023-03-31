const User = require("../models/vehicle.model")
register: (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "*beep beep!*", user: user });
        })
        .catch(err => res.json(err));
}

