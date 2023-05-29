const { connect, connection } = require('mongoose');

connect('mongodb+srv://willrcline:Wi11C1ine$@cluster0.01hpv40.mongodb.net/mongo-mingle');

module.exports = connection;
