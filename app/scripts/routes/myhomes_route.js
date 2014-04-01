App.MyhomesRoute = Ember.Route.extend({
  model: function(){
    console.log('going to search for id of : ', App.userProfile.user.id.toString());
    var id = App.userProfile.user.id.toString();
    return this.store.find('myhomes');
  },

  afterModel: function(myhomes, transition) {
    if (!App.userProfile.user) {
      this.transitionTo('account');
    }
  }
})