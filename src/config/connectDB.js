const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    //Database
    'd8qqs3cmib3j7o',
    //User
    'vtekkbmioqlams',
    //Password
    "0a687d7270174ba2202f22b808027a800ae9efc7a62282c9877f0fb9d5156eab",
    {
        host: 'ec2-52-5-110-35.compute-1.amazonaws.com',
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = connectDB;