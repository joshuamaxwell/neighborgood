var dbRoot = "https://glaring-fire-2767.firebaseIO.com";
var profilePath = dbRoot + "/profile";
App.ProfileRoute = Ember.Route.extend({
  model: function() {
    return EmberFire.Array.create({
      ref: new Firebase(profilePath)
    });
  },

  //after we get(or don't get) the model from the router, if it's undefined
  //then we want to redirect to the login screen
  afterModel: function(user, transition) {
    if (!user) {
      this.transitionTo('login');
    }
  }
});
