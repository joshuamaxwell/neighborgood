App.PropertiesRoute = Ember.Route.extend({
  renderTemplate: function(controller){
    this._super();
    console.log('renderTemplate fired');
  },

  model: function() {
    //this is where we would connect to IDX or MLS or a home listing database
    //but for now this hook (or function) will return an array of home objects
    // console.log('this.store.findAll() ', this.store.findAll('properties'));
    return this.store.findAll('properties');
  },

  setupController: function(controller, model){
    controller.set('model', model);
    // controller.set('myhomes', );//set the controller's myhomes property from here?
  }

});