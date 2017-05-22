var request = require('request')

module.exports = function(router) {
  'use strict';

  router.route('/')
  .get(function(req, res, next) {
    var apiUrl = 'https://1daycache.websummit.com/v1/conferences/companies/madmin/lists/top-50-previously-at-our-events/info?limit=15';
    var reqCall = {
        url: apiUrl,
        json: true
    }
    request.get(reqCall, function(err, response, json){
        if (err) {
            throw err;
        }
        if (response.statusCode == 200) {
            // var data = JSON.parse(json)
            res.send(json);
        } else {
            next();
        }
    });
  });
};