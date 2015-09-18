import Ember from 'ember';
import layout from '../templates/components/html-gl';

const {
  Component
  } = Ember;

export default Component.extend({
  layout: layout,

  didInsertElement() {
    this._super();
    this.$().htmlgl();
  }

});
