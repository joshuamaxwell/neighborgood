App.Router.map(function () {
  // Add your routes here
  this.route('style-guide');
  this.route('login');
  this.route('profile');
  this.resource('properties', function(){
    this.route('property', {path: '/:property_id'})
  })
});

App.Router.reopen({
  rootURL: '/' //this is where the root will need to change for deployment
})

