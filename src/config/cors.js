const whitelist = ['http://localhost:8080'];

const corsOptions = {
    origin: function (origin, callback) {
        console.log('Called from origin: ', origin);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

module.exports = corsOptions;