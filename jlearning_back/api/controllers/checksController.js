'use strict';

function removeSpecials(str) {
    var lower = str.toLowerCase();
    var upper = str.toUpperCase();
    var res = "";
    for(var i=0; i<lower.length; ++i) {
        if(lower[i] != upper[i] || lower[i].trim() === '')
            res += str[i];
    }
    res = res.replace(/  /g, ' ');
    return res;
}

exports.list_all_checks = function(req, res) {
  res.send('Get all checks not implemented. Sorry');
};


exports.create_a_check = function(req, res) {
   var data = req.body.data;
   res.send('Create check [' + data + '] not implemented. Sorry.');
};


exports.read_a_check = function(req, res) {
  var Promise=require('bluebird');
  var cmd=require('node-cmd');

  const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd }) 
  getAsync('/home/david/DESARROLLO_NUEVO/jlearning/jlearning_back/analyzer_es.sh ').then(data => {
    var dataStr = JSON.stringify(data);
    return (removeSpecials(dataStr.substring(0, dataStr.indexOf("\\"))));
  }).then(data => {
    var items = req.app.get('items');
    for (var i=0; i< items.length; i++){
      var target = removeSpecials(JSON.stringify(items[i].target)).toLowerCase();
      // console.log('id: ' + items[i].id +' '+ data + '===?' + target);
      if( target === data ) {
          console.log('HIT id: ' + items[i].id +' '+ data + '===' + target);
          return('OK');
      }
    }
    console.log('FAILED: '+data+' doesn\'t match.');
    return('KO');
   }).then(result => {
      res.send(result);
   }
  );
};


exports.update_a_check = function(req, res) {
   var itemId = req.body.id;
   var data = req.body.data;
   res.send('Update check ' + itemId + ' with [' + data + '] not implemented. Sorry.');
};


exports.delete_a_check = function(req, res) {
   var itemId = req.params.id;
   res.send('Delete checks ' + itemId + ' not implemented. Sorry.');
};
