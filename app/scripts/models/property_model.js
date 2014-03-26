var attr = DS.attr;

App.Property = DS.Model.extend({
  property_id: attr('number'),
  address: attr('string'),
  saved: attr('boolean')
  
})