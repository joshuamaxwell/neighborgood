var attr = DS.attr;

App.Myhomes = DS.Model.extend({
  //trying to move towards user's having history and saved homes
  user: attr('string'),
  property_id: attr('number'),
  address: attr('string'),
  saved: attr('boolean'),
  clickDate: attr('number'),
  bathrooms: attr('number'),
  bedrooms: attr('number'),
  description: attr('string'),
  price: attr('number'),
  squarefeet: attr('number'),
  yearBuilt: attr('string')
  
})