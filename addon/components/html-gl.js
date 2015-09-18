import Ember from 'ember';
import layout from '../templates/components/html-gl';
import HtmlGL from '../mixins/html-gl';

const {
  Component
  } = Ember;

export default Component.extend(HtmlGL, {
  layout: layout
});
