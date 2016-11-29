var Backbone = require("Backbone");

var AuthInfo = Backbone.Model.extend({
  initialize: function(options) {
    this.options = options;
  },
  url: function() {
    var base = "https://user.muxixyz.com/api/users/";
    return base + this.options.uid + "/";
  }
});

module.exports = AuthInfo;
