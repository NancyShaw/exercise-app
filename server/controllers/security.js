const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;


module.exports.AuthenticateToken = (req, res, next)=> {
    const token = req.headers.authorization?.split(' ')[1];
    if (token == null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, JWT_SECRET, (err, user)=> {
        console.log(err);
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })

} 