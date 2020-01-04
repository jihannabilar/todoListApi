module.exports = {
    DB: process.env.HOST ? process.env.HOST : 'localhost',
    APP_PORT: process.env.APP_PORT ? process.env.PORT : 80,
};
