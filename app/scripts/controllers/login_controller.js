//this code originally copy pasted from 
//http://blog.sensible.io/2013/05/23/how-to-write-a-login-form.html

App.LoginController = Ember.Controller.extend({
  controllerProperty: 'this is directly from the controller',

  actions: { 
    login: function() {
      //I am expecting for the next three lines of code to modify the model
      //that is sent to this controller from loginRoute and for those manipulations
      //to be instantly shown in the login template
      console.log('login clicked. model in LoginController before manipulation is: ', this.get('model'));
      this.set('controllerProperty', 'I changed the controller\'s property upon click');
      this.set("model.isProcessing", true);
      this.set("model.loginFailed", false);
      this.set("model.timeout", setTimeout(this.slowConnection.bind(this.get('model')), 5000));

      console.log('model in LoginController after manipulation is: ', this.get('model'));

      //use the auth object's login() method to log the user in
      App.auth.login('password', 
        {
          email: this.get('username'),
          password: this.get('password')
        }
      );
    }
  },

  slowConnection: function() {
    this.set("model.isSlowConnection", true);
  },
});