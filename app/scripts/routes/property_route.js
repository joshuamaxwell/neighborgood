App.PropertyRoute = Ember.Route.extend({
  model: function(params){
    // console.log('this.store inside the MyhomesRoute: ', this.store.all('myhomes'));
    // return this.store.all('myhomes');
    return this.store.find('properties', {property_id: params.property_id});
  },

  
})