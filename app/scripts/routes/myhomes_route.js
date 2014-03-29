App.MyhomesRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('myhomes');
  },

  afterModel: function(myhomes, transition) {
    if (!App.userProfile.user) {
      this.transitionTo('account');
    }
  }
})