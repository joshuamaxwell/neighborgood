App.ProfileRoute = Ember.Route.extend({
  model: function() {
    return App.user
  },

  //after we get(or don't get) the model from the router, if it's undefined
  //then we want to redirect to the login screen
  afterModel: function(user, transition) {
    if (!user) {
      this.transitionTo('login');
    }
  }
});
