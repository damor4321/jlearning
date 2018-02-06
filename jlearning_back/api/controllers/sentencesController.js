'use strict';


// var mongoose = require('mongoose'),
  // Task = mongoose.model('Tasks');

exports.list_all_sentences = function(req, res) {
  res.send('Get all sentences not implemented. Sorry');
};


exports.create_a_sentence = function(req, res) {
   var data = req.body.data;
   res.send('Create sentence [' + data + '] not implemented. Sorry.');
};


exports.read_a_sentence = function(req, res) {
  var items = req.app.get('items');
  var idx=req.params.id;
  console.log('items['+idx+'] =' + JSON.stringify(items[idx]));
  res.send(items[idx]);
};


exports.update_a_sentence = function(req, res) {
   var itemId = req.body.id;
   var data = req.body.data;
   res.send('Update sentence ' + itemId + ' with [' + data + '] not implemented. Sorry.');
};


exports.delete_a_sentence = function(req, res) {
   var itemId = req.params.id;
   res.send('Delete sentence ' + itemId + ' not implemented. Sorry.');
};
