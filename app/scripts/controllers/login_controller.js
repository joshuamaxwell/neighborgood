//this code originally copy pasted from 
//http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

App.LoginController = Ember.Controller.extend({
  loginFailed: false,
  isProcessing: false,
  isSlowConnection: false,
  timeout: null,

  login: function() {
    this.setProperties({
      loginFailed: false,
      isProcessing: true
    });

    this.set("timeout", setTimeout(this.slowConnection.bind(this), 5000));
    
    var request = this.login('password', {
                          email: this.get('username'),
                          password: this.get('password')
                        }//the callback (upon error or success) is handled in app.js from FirebaseSimpleLogin() App.auth() callback
                        );
    // var request = $.post("/login", this.getProperties("username", "password"));
    // request.then(this.success.bind(this), this.failure.bind(this));
  },

  success: function() {
    this.reset();
    document.location = "/welcome";
  },

  failure: function() {
    this.reset();
    this.set("loginFailed", true);
  },

  slowConnection: function() {
    this.set("isSlowConnection", true);
  },

  reset: function() {
    clearTimeout(this.get("timeout"));
    this.setProperties({
      isProcessing: false,
      isSlowConnection: false
    });
  }
});