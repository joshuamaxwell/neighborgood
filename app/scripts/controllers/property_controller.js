App.PropertyController = Ember.ObjectController.extend({
  init: function(){
  },

  actions: {
    printModel: function(){
      console.log('we are inside PropertyController: ', this.get('model'));  
    },

  },




})