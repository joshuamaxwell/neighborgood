App.PropertiesController = Ember.ArrayController.extend({

  init: function(){ 
    this._super();
    // this.send('saveProperty', {property_id: 5555559, address: '103 Tyler Street, Grovetown, GA 30813', saved: true});
    console.log('inside PropertiesController with model ', this.get('model'));
  },

  actions: {
    saveProperty: function(property){
      var myhome = this.store.createRecord('myhomes', property);
      myhome.save().then(function(myhome){
        console.log('home saved to firebase ', property.property_id);
      }, function(myhome){
        console.log('i think the save failed ', myhome);
      });

      // console.log('what\'s in store? ', this.store.find('myhomes'));
      //this function should be sent the ID and Address of a home
      //that the user wants to save
      //this function should then save those two properties 
      //in addition to the user's id to the myhomes array model
      //I'm not sure how to do that since this controller's model is a 'Property'
      
    }

  }


});