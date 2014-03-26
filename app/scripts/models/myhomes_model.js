var attr = DS.attr;

App.Myhomes = DS.Model.extend({
  property_id: attr('number'),
  address: attr('string'),
  saved: attr('boolean'),
  clickDate: attr('number')
  
})