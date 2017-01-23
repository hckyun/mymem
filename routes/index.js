var express = require('express');
var router = express.Router();

var Mem = require('../models/Mem');

// Index
router.get('/', function(req, res) {
	Mem.find({}, function(err, results) {
		if (err) res.json(err);
		res.render('index', { mems: results });
	});
});

// Create - Add Mem
router.post('/', function(req, res) {
	Mem.create(req.body, function(err, results) {
		if (err) res.json(err);
		res.end('{"success" : "Added Successfully", "status" : 200, "new_id" : "' + results._id + '"}');			
	});
});

// Destory
router.post('/delete', function(req, res) {	
	Mem.remove({_id: req.body.id}, function(err, results) {
		if (err) res.json(err)		
		res.end('{"success" : "Deleted Successfully", "status" : 200}');
	});
});

module.exports = router;
