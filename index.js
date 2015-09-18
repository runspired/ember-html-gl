/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-html-gl',

  included: function(app) {
    app.import(app.bowerDirectory + '/htmlgl/dist/htmlgl.min.js');
  }

};
