var attr = DS.attr;

App.Myhomes = DS.Model.extend({
  property_id: attr('number'),
  address: attr('string'),
  saved: attr('boolean'),
  clickDate: attr('number'),
  bathrooms: attr('number'),
  bedrooms: attr('number'),
  description: attr('string'),
  price: attr('number'),
  squarefeet: attr('number'),
  yearBuilt: attr('string'),
  picture: attr('string')
  
})