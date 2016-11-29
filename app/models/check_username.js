var Backbone = require("Backbone");

var CheckUsername = Backbone.Model.extend({
  urlRoot: "https://user.muxixyz.com/api/check_username/"
});

module.exports = CheckUsername;
