App.ApplicationController = Ember.ObjectController.extend({
  //I'm adding this "needs" here and also in the "properties" controller so 
  //that they can access each other's properties from within the templates
  //and controllers and so they can call each other's actions
  //for example when you click the house icon, it's not the application action
  //that gets triggered,...it's the properties controller's action
  needs: 'properties',



})