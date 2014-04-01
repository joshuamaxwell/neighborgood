var attr = DS.attr;

App.User = DS.Model.extend({
  //trying to move towards user's having history and saved homes
  myHomes: DS.hasMany('myhomes'),
  
  
  
})