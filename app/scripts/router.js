App.Router.map(function () {
  // Add your routes here
  this.route('style-guide');
  this.route('account');
  this.route('profile');
  this.resource('properties', function(){ 
    this.route('property', {path: '/:property_id'});
    this.route('instagrams', {path:'/:instagram_id'});
  });
  this.resource('myhomes', function(){
    this.route('myhome', {path: '/:property_id'});
  });
});

App.Router.reopen({
  // rootURL: '/' //I thought we'd need to use this rootURL for dev but looks like it works
  //either way
  rootURL: '/neighborgood/' //this is where the root will need to change for deployment
})

