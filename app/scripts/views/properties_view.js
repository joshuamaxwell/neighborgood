App.PropertiesView = Ember.View.extend({

  didInsertElement: function () {
    // this._super(); //I don't think an event has to call this._super()

    // I've changed which method is called by 'didInsterElement'
    // to be the lookupAddress function which will geocode the searchbar
    // parameters and then in turn call the loadMap function
    
    // this.lookupAddress(this.controller.get('application.searchParams'));
    this.get('controller').send('lookupAddress', this.controller.get('application.searchParams'));
  },

});