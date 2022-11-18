const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
await mongoose.connect (process.env.DB_URI);
console.log('Data base is connected');
    }
    catch (error) {
        console.log('data base is not connected');
    }
}
module.exports = dbconnect;