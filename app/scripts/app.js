var App = window.App = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

$(function(){
    //this gets the mmenu running
    $("#drawer").mmenu({

    },
    {
      selectedClass: "active"
    });

    //grab a "Firebase reference" for our firebase database and use that reference
    //to instantiate a FirebaseSimpleLogin object to use for logging users in and out
    //and storing data to the user's model / profile
    App.firebaseRef = new Firebase('https://glaring-fire-2767.firebaseio.com');
    App.auth = new FirebaseSimpleLogin(App.firebaseRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log('there was a problem ', error);
        return error;
      } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
        return user;
      } else {
        // user is logged out
        console.log('I\'m not logged in so give me some options to log in please');
        return false; // not sure if this is kosher
      }
    });
})