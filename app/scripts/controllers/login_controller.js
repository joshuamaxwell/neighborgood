//this code originally copy pasted from 
//http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

// I was extending Ember.Controller, but THE WHOLE TIME
// I should have been extending Ember.ObjectController
App.LoginController = Ember.ObjectController.extend({

  actions: { 
    
    register: function() {
      console.log('SIGN UP clicked. model in LoginController before manipulation is: ', this.get('model'));
      this.set("model.isProcessing", true);
      this.set("model.loginFailed", false);
      this.set("model.timeout", setTimeout(this.slowConnection.bind(this.get('model')), 5000));
      console.log('model in LoginController after manipulation is: ', this.get('model'));

      var that = this;

      App.auth.createUser(this.get('email'), this.get('password'), function(error, user) {
        if (!error) {
          console.log('successfully registered!');
          console.log('User Id: ' + user.id + ', Email: ' + user.email);
          clearTimeout(that.get("model.timeout"));
          that.set("model.isProcessing", false);
          that.set("model.isSlowConnection", false);
          that.set("model.user", user);
          console.log('great success. App.userProfile is: ', App.userProfile);
        }
        else {
          console.log("there was an error in registration: ", error);
          clearTimeout(that.get("model.timeout"));
          that.set("model.isProcessing", false);
          that.set("model.isSlowConnection", false);
          that.set("model.loginFailed", true);
        }
      });
    },

    login: function() {
      //I am expecting for the next three lines of code to modify the model
      //that is sent to this controller from loginRoute and for those manipulations
      //to be instantly shown in the login template
      console.log('login clicked. model in LoginController before manipulation is: ', this.get('model'));
      this.set("model.isProcessing", true);
      this.set("model.loginFailed", false);
      this.set("model.timeout", setTimeout(this.slowConnection.bind(this.get('model')), 5000));

      console.log('model in LoginController after manipulation is: ', this.get('model'));

      //use the auth object's login() method to log the user in
      App.auth.login('password', 
        {
          email: this.get('email'),
          password: this.get('password')
        }
      );
    },

    loginFacebook: function(){
      App.auth.login('facebook',{
        scope: 'email'
      });
    },
  
    loginTwitter: function(){
      App.auth.login('twitter');
    }
    
  },


  slowConnection: function() {
    this.set("model.isSlowConnection", true);
  },
});