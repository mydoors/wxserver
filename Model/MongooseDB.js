var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wxserver');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

module.exports={
    mongoose

}
