//const { lock } = require("../routes/saveData");

const API_KEY= process.env.API_KEY

const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey && apiKey === API_KEY) {
        next(); // API key is valid, proceed to the next middleware/route handler
    } else {
        res.status(401).json({ error: 'Unauthorized' }); // API key is missing or invalid
    }
};

module.exports =apiKeyAuth