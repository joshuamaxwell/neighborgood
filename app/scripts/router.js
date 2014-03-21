App.Router.map(function () {
  // Add your routes here
  this.route('style-guide');
  this.route('account');
  this.route('profile');
  this.resource('properties', function(){ 
    this.route('property', {path: '/:property_id'});
  });
  this.resource('myhomes', function(){
    this.route('myhome', {path: '/:property_id'});
  });
});

App.Router.reopen({
  // rootURL: '/' //use this rootURL for dev
  rootURL: '/neighborgood/' //this is where the root will need to change for deployment
})

