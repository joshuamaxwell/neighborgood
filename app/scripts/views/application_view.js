App.ApplicationView = Ember.View.extend({
  didInsertElement: function(){
    //now that the Application template is loaded...

    //this gets the mmenu running
    //i HAD put this mmenu initialization in the app.js file, but DUHHHHHH
    //that only happens at the right time if the main page is loaded first, 
    //so i moved the mmenu initialization to the didInsterElement hook of the app
    //DUUUUUH

    $("#drawer").mmenu({

    },
    {
      selectedClass: "active"
    });
  }
});