App.Router.map(function () {
  // Add your routes here
  this.resource('style-guide')
});

App.Router.reopen({
  rootURL: '/' //this is where the root will need to change for deployment
})

