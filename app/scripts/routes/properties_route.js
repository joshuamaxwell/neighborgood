App.PropertiesRoute = Ember.Route.extend({
  renderTemplate: function(controller){
    this._super();
    console.log('renderTemplate fired');
  },

  model: function() {
    //this is where we would connect to IDX or MLS or a home listing database
    //but for now this hook (or function) will return an array of home objects
    
    return this.results;
  },

  setupController: function(controller, model){
    controller.set('model', model);
    // controller.set('myhomes', );//set the controller's myhomes property from here?
  },

  results: [
      {
        address: '160 Ridgeland Dr UNIT 100, Greenville, SC',
        id: 5555551,
        price: 889601,
        bedrooms: 4,
        bathrooms: 1.5,
        squarefeet: 2648,
        yearBuilt: '2007',
        description: 'Joan Herlong 864-325-2112 Greenville\'s Number One Realtor. Downtown living across from Cleveland Park & the Swamp Rabbit! Your opportunity to own an entire floor\, the main floor\, at Ridgeland at the Park. All the luxuries you\'ve come to enjoy and expect\, but none of the work. Over 2700 sft. Custom\, wide louver plantation shutters thru out\, gorgeous hardwood floors\, high ceilings\, OPEN floor plan\, four bedrooms\, three full baths\, covered porch overlooking the park. Open versatile floor plan! Center attraction is granite kitchen w/stainless appliances\, gas cook top\, and inviting breakfast bar. ALL appliances stay\, including frig\, washer & dryer. Great Room w/GLFPLC accesses covered porch with privacy AND soothing park views. One car attached garage\, and one parking space out front. Ltd to serious qualified buyers\, advance notice please. SOLD COMPS: 111 Sherwood\, units 100\, 200 & 300.'
      },
      {
        address: '605 University Ridge, Greenville, SC',
        id: 5555552,
        price: 889601,
        bedrooms: 4,
        bathrooms: 1.5,
        squarefeet: 2648,
        yearBuilt: '2007',
        description: 'Joan Herlong 864-325-2112 Greenville\'s Number One Realtor. Downtown living across from Cleveland Park & the Swamp Rabbit! Your opportunity to own an entire floor\, the main floor\, at Ridgeland at the Park. All the luxuries you\'ve come to enjoy and expect\, but none of the work. Over 2700 sft. Custom\, wide louver plantation shutters thru out\, gorgeous hardwood floors\, high ceilings\, OPEN floor plan\, four bedrooms\, three full baths\, covered porch overlooking the park. Open versatile floor plan! Center attraction is granite kitchen w/stainless appliances\, gas cook top\, and inviting breakfast bar. ALL appliances stay\, including frig\, washer & dryer. Great Room w/GLFPLC accesses covered porch with privacy AND soothing park views. One car attached garage\, and one parking space out front. Ltd to serious qualified buyers\, advance notice please. SOLD COMPS: 111 Sherwood\, units 100\, 200 & 300.'
      },
      {
        address: '525 University Ridge, Greenville, SC',
        id: 5555553,
        price: 889601,
        bedrooms: 4,
        bathrooms: 1.5,
        squarefeet: 2648,
        yearBuilt: '2007',
        description: 'Joan Herlong 864-325-2112 Greenville\'s Number One Realtor. Downtown living across from Cleveland Park & the Swamp Rabbit! Your opportunity to own an entire floor\, the main floor\, at Ridgeland at the Park. All the luxuries you\'ve come to enjoy and expect\, but none of the work. Over 2700 sft. Custom\, wide louver plantation shutters thru out\, gorgeous hardwood floors\, high ceilings\, OPEN floor plan\, four bedrooms\, three full baths\, covered porch overlooking the park. Open versatile floor plan! Center attraction is granite kitchen w/stainless appliances\, gas cook top\, and inviting breakfast bar. ALL appliances stay\, including frig\, washer & dryer. Great Room w/GLFPLC accesses covered porch with privacy AND soothing park views. One car attached garage\, and one parking space out front. Ltd to serious qualified buyers\, advance notice please. SOLD COMPS: 111 Sherwood\, units 100\, 200 & 300.'
      },
      {
        address: '27 Cleveland St, Greenville, SC',
        id: 5555554,
        price: 889601,
        bedrooms: 4,
        bathrooms: 1.5,
        squarefeet: 2648,
        yearBuilt: '2007',
        description: 'Joan Herlong 864-325-2112 Greenville\'s Number One Realtor. Downtown living across from Cleveland Park & the Swamp Rabbit! Your opportunity to own an entire floor\, the main floor\, at Ridgeland at the Park. All the luxuries you\'ve come to enjoy and expect\, but none of the work. Over 2700 sft. Custom\, wide louver plantation shutters thru out\, gorgeous hardwood floors\, high ceilings\, OPEN floor plan\, four bedrooms\, three full baths\, covered porch overlooking the park. Open versatile floor plan! Center attraction is granite kitchen w/stainless appliances\, gas cook top\, and inviting breakfast bar. ALL appliances stay\, including frig\, washer & dryer. Great Room w/GLFPLC accesses covered porch with privacy AND soothing park views. One car attached garage\, and one parking space out front. Ltd to serious qualified buyers\, advance notice please. SOLD COMPS: 111 Sherwood\, units 100\, 200 & 300.'
      },
      {
        address: '205 Hope St, Greenville, SC',
        id: 5555555,
        price: 889601,
        bedrooms: 4,
        bathrooms: 1.5,
        squarefeet: 2648,
        yearBuilt: '2007',
        description: 'Joan Herlong 864-325-2112 Greenville\'s Number One Realtor. Downtown living across from Cleveland Park & the Swamp Rabbit! Your opportunity to own an entire floor\, the main floor\, at Ridgeland at the Park. All the luxuries you\'ve come to enjoy and expect\, but none of the work. Over 2700 sft. Custom\, wide louver plantation shutters thru out\, gorgeous hardwood floors\, high ceilings\, OPEN floor plan\, four bedrooms\, three full baths\, covered porch overlooking the park. Open versatile floor plan! Center attraction is granite kitchen w/stainless appliances\, gas cook top\, and inviting breakfast bar. ALL appliances stay\, including frig\, washer & dryer. Great Room w/GLFPLC accesses covered porch with privacy AND soothing park views. One car attached garage\, and one parking space out front. Ltd to serious qualified buyers\, advance notice please. SOLD COMPS: 111 Sherwood\, units 100\, 200 & 300.'
      },
      {
        address: '115 Sherwood St, Greenville, SC',
        id: 5555556,
        price: 889601,
        bedrooms: 4,
        bathrooms: 1.5,
        squarefeet: 2648,
        yearBuilt: '2007',
        description: 'Joan Herlong 864-325-2112 Greenville\'s Number One Realtor. Downtown living across from Cleveland Park & the Swamp Rabbit! Your opportunity to own an entire floor\, the main floor\, at Ridgeland at the Park. All the luxuries you\'ve come to enjoy and expect\, but none of the work. Over 2700 sft. Custom\, wide louver plantation shutters thru out\, gorgeous hardwood floors\, high ceilings\, OPEN floor plan\, four bedrooms\, three full baths\, covered porch overlooking the park. Open versatile floor plan! Center attraction is granite kitchen w/stainless appliances\, gas cook top\, and inviting breakfast bar. ALL appliances stay\, including frig\, washer & dryer. Great Room w/GLFPLC accesses covered porch with privacy AND soothing park views. One car attached garage\, and one parking space out front. Ltd to serious qualified buyers\, advance notice please. SOLD COMPS: 111 Sherwood\, units 100\, 200 & 300.'
      }
    ]
});