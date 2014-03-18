App.LoginRoute = Ember.Route.extend({

    model: function () {
        return App.auth;
    }
    //i have to set the controller?
});