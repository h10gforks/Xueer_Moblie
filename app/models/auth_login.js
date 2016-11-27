var Backbone = require("Backbone");

var AuthLogin = Backbone.Model.extend({
  urlRoot: "http://120.77.8.149:4399/api/login/",
  default: {
    username: "",
    password: ""
  }
});

module.exports = AuthLogin;
