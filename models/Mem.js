// Mem.js

var mongoose = require('mongoose');

var memSchema = mongoose.Schema({
	word: {type: String, required: true},
	definition: {type: String, required: true},
	color: {type: String, required: true}	
});

var Mem = mongoose.model('mem', memSchema);

module.exports = Mem;