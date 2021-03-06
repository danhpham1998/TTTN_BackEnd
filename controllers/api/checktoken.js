const jwtHelper = require('../../helpers/jwt');

module.exports.checkTokenExpired = async (req, res) => {
    let token = req.params.token;
    if (token) {
        try {
            if (jwtHelper.jwtHelp.verifyJWT(token)) {
                res.status(200).json({
                    isTokenExpired: true,
                    message: 'token has not expired'
                })
            }
        } catch (error) {
            res.status(200).json({
                isTokenExpired: false,
                error: error,
                message: 'token has expired'
            })
        }
    } else {
        res.status(500).json({
            isTokenExpired: false,
            message: 'Please give params with token'
        })
    }
}