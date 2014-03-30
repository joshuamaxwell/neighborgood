var attr = DS.attr;

App.Properties = DS.Model.extend({
  address: attr('string'),
  bathrooms: attr('number'),
  bedrooms: attr('number'),
  picture: attr('string'),
  description: attr('string'),
  property_id: attr('number'),
  price: attr('number'),
  squarefeet: attr('number'),
  yearBuilt: attr('string')
  
})