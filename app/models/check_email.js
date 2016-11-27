var Backbone = require("Backbone");

var CheckEmail = Backbone.Model.extend({
  urlRoot: "http://120.77.8.149:4399/api/check_email/"
});

module.exports = CheckEmail;
