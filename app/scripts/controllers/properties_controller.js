App.PropertiesController = Ember.ArrayController.extend({

  init: function(){ 
    this._super();
    console.log('inside PropertiesController with model ', this.get('model'));
  },

  actions: {
    saveProperty: function(property){
      //I'm having to do all of this because I don't know how to 
      //relay the actual 'property' object nor do I know how to reference it
      //so this is the next best thing for now. it's basically just a copy of the 'property' 
      //model that gets sent into the 'myhomes' bucket
      //which means it can get out of sync with the actual 'property' model
      //on the server or theoretically on zillow
      var myhome = {
        address: property.get('address'),
        price: property.get('price'),
        bedrooms: property.get('bedrooms'),
        bathrooms: property.get('bathrooms'),
        squarefeet: property.get('squarefeet'),
        yearBuilt: property.get('yearBuilt'),
        description: property.get('description'),
        id: property.get('id'),
        saved: true,
        clickDate: Date.now()
      }
      myhome = this.store.createRecord('myhomes', myhome);
      console.log('this is home to be saved inside saveProperty ', myhome);
      myhome.save();
      this.store.push(App.userProfile.user.id, myhome);
    }

  }


});