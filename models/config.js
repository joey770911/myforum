var config = {
    dbname:"dbhost",
    username:"root",
    password:"root",
    optino: {
        host: 'localhost',
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        storage: 'db.sqlite',
        logging: false
    }
}
module.exports = config;
