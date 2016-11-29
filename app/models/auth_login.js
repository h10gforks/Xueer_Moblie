var Backbone = require("Backbone");

var AuthLogin = Backbone.Model.extend({
  urlRoot: "https://user.muxixyz.com/api/login/",
  default: {
    username: "",
    password: ""
  }
});

module.exports = AuthLogin;
