// Set the require.js configuration for your application.
require.config({
  // Base url should be the application directory.
  "baseUrl": "/app/",
  
  // Require vendor scripts by using the vendor path.
  "paths": {
      "vendor": '../vendor/bower'
  },

  // Add shims so dependencies will be loaded correctly.
  "shim": {
    "vendor/backbone/backbone": {
        "deps": [
            "vendor/underscore/underscore"
        ],
        "exports": "Backbone"
    },
    "vendor/layoutmanager/backbone.layoutmanager": {
        "deps": [
            "vendor/jquery/jquery",
            "vendor/backbone/backbone",
            "vendor/underscore/underscore"
        ],
        "exports": "Backbone.Layout"
    },
    "vendor/underscore/underscore": {
        "exports": "_"
    }
  },

  // Set the main application file.
  deps: ["main"]
});
