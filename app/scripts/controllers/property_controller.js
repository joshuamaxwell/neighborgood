App.PropertyController = Ember.ObjectController.extend({
  init: function(){
  },

  actions: {
    printModel: function(){
      console.log('we are inside PropertyController: ', this.get('model'));  
    },
    
    pullInstagrams: function(){
      // Use property.address for  center points for Instagram pull 
      var that=this;
      var geocoder = new google.maps.Geocoder();

      var latlon, lat, lon; //needs to come from the geocode response

      geocoder.geocode( { 'address': this.get('address') }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          // this is where i  need to use the lat/lon results to feed into the instagram api request
          latlon = results[0].geometry.location
          console.log('latlon: ', latlon);
          lat = results[0].geometry.location.d;
          lon = results[0].geometry.location.e;
         
        } else {
          console.log('Geocode was not successful for the following reason: ', status);
        }
      });


      // pull in Instagram activity via the API
      $.ajax({
        url: 'https://api.instagram.com/v1/media/search?lat=' + lat + '&lng=' + lon + '&distance=2000&client_id=371ca2f6cfb64bfe9c71847cc6fe52c5&callback=?', 
        dataType: 'jsonp',
        success: function(results){
          //
          // results.data.forEach(function(value, index){
          //   //for each item in all the instagrams we'll want to add the image url to some property of the 
          //   //controller
          // })
        },
        error: function(){
          console.log('Bummer, something is wrong in pullInstagrams function inside PropertyController.')
        }
      });
    }

  },




})