'use strict';
module.exports = function(app) {
  var sentencesList = require('../controllers/sentencesController');
  var checksList = require('../controllers/checksController');

  // todoList Routes
	app.route('/sentences')
    .get(sentencesList.list_all_sentences)
    .post(sentencesList.create_a_sentence);

  app.route('/sentence/:id')
    .get(sentencesList.read_a_sentence)
    .put(sentencesList.update_a_sentence)
    .delete(sentencesList.delete_a_sentence);

	app.route('/checks')
    .get(checksList.list_all_checks)
    .post(checksList.create_a_check);

  app.route('/check/:id')
    .get(checksList.read_a_check)
    .put(checksList.update_a_check)
    .delete(checksList.delete_a_check);
};