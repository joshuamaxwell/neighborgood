App.PropertiesView = Ember.View.extend({

  didInsertElement: function () {
    // this._super(); //I don't think an event has to call this._super()
    console.log('enter the didInsertElement from the view');

    //figuring out where to call this .loadMap() function was
    //one of the most difficult things I've done in life..
    //but now maybe I have a better Idea of what the View is versus the template?
    //not really. good greif. I'm so upset about how long this took
    this.loadMap();
  },

  //I had started with this .loadMap() function in the controller and then moved it to .activate 
  //hook in the router, and finally to here in the view so I could use the didInsertElement hook
  //in stead of the window load event
  loadMap: function () {
    console.log('loading the map');
    mapCanvas = $("#map-canvas")[0];
    var mapOptions = {
      center: new google.maps.LatLng(34.842, -82.394),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#F5A9A9" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#F5A9A9" }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "color": "#46BDBD" }
    ]
  },{
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "color": "#E5E3D3" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "color": "#B8B6B1" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#16F2F2" }
    ]
  }
]
    };
    // I need this map variable to be accessable outside this function. I'd prefer to
    //store it somewhere in the controller or find out some way
    //to pass it to the controller.... I FOUND IT. I keep forgetting to always use the 
    //'getters and setters' I have access to the controller's properties from 
    //the view, i just have to use the this.get or this.set..
    //so now I can use a property called 'map' from inside this controller
    //....but looks like the best place to do any of this is still inside the view
    // because I don't see any other way to be sure that the DOM has finished
    // rendering
    // console.log('controller variable inthe view ', this.get('controller.model'));
    this.set('googleMap', new google.maps.Map(mapCanvas, mapOptions));


    this.pullInstagrams();
    // created variable to use in the console
    homeResults = this.pullInstagrams();

    var that=this;
    this.get('controller.model').forEach(function(property, index, enumerable){
      // console.log('the item.address inside the ember arrayController foreach is ', property.address );
      that.setMarkers(property);
    })
    //now i maybe need to run this function over and over for each item in
    //the array by passing the properties in as arguments
  },

  mapInstagrams: function(array){
    console.log('about to run each function over results');
    // isolate the url & the lat/long
    $.each(array, function(index, value){
      console.log('Each function ran on results.');
      console.log(index + ":" + value.images.thumbnail.url);  
    });
  },

  setMarkers: function(property){
    var that=this;
    var geocoder = new google.maps.Geocoder();
    // console.log('address inside setMarkers is ', property.address);
    geocoder.geocode( { 'address': property.address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // that.get('googleMap').setCenter(results[0].geometry.location); // I don't think I want to bounce around
        var marker = new google.maps.Marker({
            map: that.get('googleMap'),
            title: property.price.toString(),
            position: results[0].geometry.location 
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  },

  pullInstagrams: function(){
    // Use map center points for Instagram pull radius
    var that=this;
    
    // pull in Instagram activity via the API
    $.ajax({
      url: 'https://api.instagram.com/v1/media/search?lat=34.842&lng=-82.394&distance=2000&client_id=371ca2f6cfb64bfe9c71847cc6fe52c5&callback=?', 
      dataType: 'jsonp',
      success: function(results){
        console.log('Look here -', results.data);
        that.mapInstagrams(results.data)
      },
      error: function(){
        console.log('Bummer, something is wrong.')
      }
    });

  }

})