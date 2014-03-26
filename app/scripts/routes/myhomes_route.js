App.MyhomesRoute = Ember.Route.extend({
  model: function(){
    // console.log('this.store inside the MyhomesRoute: ', this.store.all('myhomes'));
    // return this.store.all('myhomes');
    return this.sampleSet;
  },

  sampleSet: [
  {
    property_id: 5555551,//this is the ID from the IDX database
  }
  ]
})