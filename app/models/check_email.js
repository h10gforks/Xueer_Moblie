var Backbone = require("Backbone");

var CheckEmail = Backbone.Model.extend({
  urlRoot: "https://user.muxixyz.com/api/check_email/"
});

module.exports = CheckEmail;
