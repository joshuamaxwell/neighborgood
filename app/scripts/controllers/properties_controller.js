App.PropertiesController = Ember.ArrayController.extend({
  //adding 'needs', and 'application' so that i can access the search bar from the
  //nexted templates
  needs: "application",
  application: Ember.computed.alias("controllers.application"),

  init: function(){ 
    this._super();
    console.log('inside PropertiesController with model ', this.get('model'));
  },

  actions: {
    saveProperty: function(property){
      //I'm having to do all of this because I don't know how to 
      //relay the actual 'property' object nor do I know how to reference it
      //so this is the next best thing for now. it's basically just a copy of the 'property' 
      //model that gets sent into the 'myhomes' bucket
      //which means it can get out of sync with the actual 'property' model
      //on the server or theoretically on zillow
      var myhome = {
        address: property.get('address'),
        price: property.get('price'),
        bedrooms: property.get('bedrooms'),
        bathrooms: property.get('bathrooms'),
        squarefeet: property.get('squarefeet'),
        yearBuilt: property.get('yearBuilt'),
        description: property.get('description'),
        id: property.get('id'),
        saved: true,
        clickDate: Date.now()
      }
      myhome = this.store.createRecord('myhomes', myhome);
      console.log('this is home to be saved inside saveProperty ', myhome);
      myhome.save();
      // this.store.push(App.userProfile.user.id, myhome);
    },

    //////////////////
    //this is a new function that will look up the search bar parameters
    // and use geocode to get a latlon which it then feeds
    //into the google map setup
      lookupAddress: function(address){
        var geocoder = new google.maps.Geocoder();
        var that = this;
        geocoder.geocode( { 'address': address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var latlon = results[0].geometry.location;
            var lat = results[0].geometry.location.d;
            var lon = results[0].geometry.location.e;
            console.log('searchParams latlon: ', lat, ', ', lon);
            that.loadMap(lat, lon);
          } else {
            console.log('Geocode was not successful for the following reason: ', status);
          }
        });
      },
    ////////////////////


  }, // end of actions

  //loadMap function used to be called first but now it's called by lookupAddress function
  loadMap: function (lat, lon) {
    console.log('loading the map with coords: ', lat, ', ', lon);
    mapCanvas = $("#map-canvas")[0];

    var mapOptions = {
      center: new google.maps.LatLng(lat, lon),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: this.mapStyles
    };
    this.set('googleMap', new google.maps.Map(mapCanvas, mapOptions));

    //we don't need to assign a variable to the return value of this.pullInstagrams() so 
    //i'm going to just comment that line out and simply call the function
    // homeResults = this.pullInstagrams();
    this.pullInstagrams();

    var that=this;
    this.get('model').forEach(function(property, index, enumerable){
      that.setMarkers(property);
    })
    //now i maybe need to run this function over and over for each item in
    //the array by passing the properties in as arguments
  },

  mapInstagram: function(instagram){
    console.log('about to run each function over instagram results');
    // isolate the url & the lat/long
    console.log(instagram, " : ", instagram.images.thumbnail.url);  
    var that=this;

    var lat = instagram.location.latitude;
    var lon = instagram.location.longitude;
    var latlon = new google.maps.LatLng(lat, lon);
    // console.log('address inside setMarkers is ', property.address);
    var image = {
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTd_z4ttYllDoWctnMGoRg8nD1wb8udfbtthirjurZtnLvrp1cm',
      // This marker is 20 pixels wide by 32 pixels tall.
      size: new google.maps.Size(30, 30),
      // The origin for this image is 0,0.
      origin: new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      anchor: new google.maps.Point(0, 32)
    };
    var marker = new google.maps.Marker({
        map: that.get('googleMap'),
        title: instagram.caption?instagram.caption.text:'(no caption)',
        position: latlon,
        icon: image
    });
  },

  setMarkers: function(property){
    var that=this;
    var geocoder = new google.maps.Geocoder();
    // console.log('address inside setMarkers is ', property.address);
    geocoder.geocode( { 'address': property.get('address')}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // that.get('googleMap').setCenter(results[0].geometry.location); // I don't think I want to bounce around
        var marker = new google.maps.Marker({
            map: that.get('googleMap'),
            title: property.get('price').toString(),
            position: results[0].geometry.location 
        });
      } else {
        console.log('Geocode was not successful for the following reason: ', status);
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
        //
        results.data.forEach(function(value, index){
          that.mapInstagram(value)
        })
        // that.mapInstagrams(results.data)
      },
      error: function(){
        console.log('Bummer, something is wrong in pullInstagrams function.')
      }
    });

  },

  mapStyles: [
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


});