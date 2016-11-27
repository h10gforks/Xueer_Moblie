var Backbone = require("Backbone");

var AuthRegister = Backbone.Model.extend({
  initialize: function(options) {
    this.options = options;
  },
  url: "http://120.77.8.149:4399/api/users/"
});

module.exports = AuthRegister;
