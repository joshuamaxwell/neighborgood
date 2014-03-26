var App = window.App = Ember.Application.create();

//instantiate our Firebase and store the
//reference in App.firebaseRef
App.firebaseRef = new Firebase('https://glaring-fire-2767.firebaseio.com');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
    // firebase: new Firebase("https://glaring-fire-2767.firebaseio.com")
    firebase: App.firebaseRef //first I'll try passing in the existing reference to Firebase
});

App.ApplicationSerializer = DS.FirebaseSerializer.extend();

//now let's make a generic local user object that can hold some globally needed properties
//this is the object that I intend to pass into the account controller and template
//so that the FirebaseSimpleLogin callback function can modify this model
//and the account template should update
App.UserProfile = Ember.Object.extend({});
App.userProfile = App.UserProfile.create({
    loginFailed: false,
    isProcessing: false,
    isSlowConnection: false,
    timeout: null
});

//the FirebaseSimpleLogin's callback function runs whenever the users 
//logged in status changes
App.auth = new FirebaseSimpleLogin(App.firebaseRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log('there was a problem. Error is: ', error);
    clearTimeout(App.userProfile.get("timeout"));
    App.userProfile.set("loginFailed", true);
    App.userProfile.set("loginError", error.message);
    App.userProfile.set("isProcessing", false);
    App.userProfile.set("isSlowConnection", false);
    console.log('there was a problem. App.userProfile is: ', App.userProfile);

  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    clearTimeout(App.userProfile.get("timeout"));
    App.userProfile.set("loginFailed", false);
    App.userProfile.set("isProcessing", false);
    App.userProfile.set("isSlowConnection", false);
    App.userProfile.set("user", user);
    console.log('great success. App.userProfile is: ', App.userProfile);
    
  } else {
    // user is logged out
    console.log('I\'m not logged in so give me some options to log in please');
  }
});


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

$(function(){
    //now that the DOM is loaded...

    //this gets the mmenu running
    $("#drawer").mmenu({

    },
    {
      selectedClass: "active"
    });
       
});

// Adding class on scroll to make navigation become transparent
$(document).on("scroll", function(){
    $('.navigation-bar').toggleClass("foggy", $(document).scrollTop()>40);
});
