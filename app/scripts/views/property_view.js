App.PropertyView = Ember.View.extend({

  didInsertElement: function () {
    // this._super(); //I don't think an event has to call this._super()

    //figuring out where to call this .loadMap() function was
    //one of the most difficult things I've done in life..
    //but now maybe I have a better Idea of what the View is versus the template?
    //not really. good greif. I'm so upset about how long this took
    this.pullInstagrams();

  },

  pullInstagrams: function(){
        // Use property.address for  center points for Instagram pull 
        var that=this;
        var geocoder = new google.maps.Geocoder();

        var latlon, lat, lon;

        geocoder.geocode( { 'address': this.controller.get('address') }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            // this is where i  need to use the lat/lon results to feed into the instagram api request
            latlon = results[0].geometry.location
            console.log('latlon: ', latlon);
            lat = results[0].geometry.location.d;
            lon = results[0].geometry.location.e;
            $.ajax({
              url: 'https://api.instagram.com/v1/media/search?lat=' + lat + '&lng=' + lon + '&distance=2000&client_id=371ca2f6cfb64bfe9c71847cc6fe52c5&callback=?', 
              dataType: 'jsonp',
              success: function(results){
                that.controller.set('instagramPhotos', results.data);
                console.log('instagram photos have been set ', that.controller.get('instagramPhotos'));
              },
              error: function(){
                console.log('Bummer, something is wrong in pullInstagrams function inside PropertyController.')
              }
            });
           
          } else {
            console.log('Geocode was not successful for the following reason: ', status);
          }
        });

      }

});