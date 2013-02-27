define([
  // Application.
  "app"
],

function(app) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    initialize: function() {
      // TODO: create main template with default views.
      app.useLayout("test").render();
    },

    index: function() {
      // TODO: reset views
    }
  });

  return Router;

});
