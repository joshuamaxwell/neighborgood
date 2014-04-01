App.Router.map(function () {
  this.route('style-guide');
  this.route('account');
  this.resource('properties'); 
  this.resource('property', {path: '/:property_id'}); 
  this.resource('myhomes');
});

App.Router.reopen({
  // rootURL: '/' //I thought we'd need to use this rootURL for dev but looks like it works
  //either way
  rootURL: '/neighborgood/' //this is where the root will need to change for deployment
})

