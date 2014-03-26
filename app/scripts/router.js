App.Router.map(function () {
  // Add your routes here
  this.route('style-guide');
  this.route('account');
  this.route('profile');
  this.resource('properties'); 
  this.resource('property', {path: '/:property_id'});
  
  this.resource('myhomes', function(){
    this.route('myhome', {path: '/:property_id'}); //I think we'll end up removing this route
  });
});

App.Router.reopen({
  // rootURL: '/' //I thought we'd need to use this rootURL for dev but looks like it works
  //either way
  rootURL: '/neighborgood/' //this is where the root will need to change for deployment
})

