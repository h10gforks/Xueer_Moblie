var Backbone = require("Backbone");

var CheckUsername = Backbone.Model.extend({
  urlRoot: "http://120.77.8.149:4399/api/check_username/"
});

module.exports = CheckUsername;
