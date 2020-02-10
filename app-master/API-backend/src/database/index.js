const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nouhaurest', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;

