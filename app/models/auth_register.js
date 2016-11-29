var Backbone = require("Backbone");

var AuthRegister = Backbone.Model.extend({
  initialize: function(options) {
    this.options = options;
  },
  url: "https://user.muxixyz.com/api/users/"
});

module.exports = AuthRegister;
