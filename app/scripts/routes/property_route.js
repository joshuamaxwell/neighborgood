App.PropertyRoute = Ember.Route.extend({
  model: function(params){
    // console.log('this.store inside the MyhomesRoute: ', this.store.all('myhomes'));
    // return this.store.all('myhomes');
    console.log('PropertyRoute fired with params: ', params);
    // return {address: '103 Tyler STreet, grovetown, ga 30813'};
    // return this.store.find('properties', 0);
    return this.store.find('properties', params.property_id);
  },

  
})