App.AccountRoute = Ember.Route.extend({

    model: function () {
      //this route returns the App.userProfile to its controller and template
      //App.userProfile is an Ember.Object created in app.js
      return App.userProfile;
    },
    
    setupController: function(controller, model){
      // I think this is the default configuration of setupController
      controller.set('model', model);
    }


});