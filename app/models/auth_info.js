var Backbone = require("Backbone");

var AuthInfo = Backbone.Model.extend({
  initialize: function(options) {
    this.options = options;
  },
  url: function() {
    var base = "http://120.77.8.149:4399/api/users/";
    return base + this.options.uid + "/";
  }
});

module.exports = AuthInfo;
