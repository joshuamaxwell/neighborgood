App.PropertiesView = Ember.View.extend({

  didInsertElement: function (obj) {
    this._super();
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
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

})