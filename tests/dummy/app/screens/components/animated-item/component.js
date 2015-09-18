/**
 * Blatantly a rip of the main html-gl demo's slider
 * https://raw.githubusercontent.com/PixelsCommander/HTML-GL/master/demo/js/slider.js
 */
/*global document, parseInt, undefined*/
import Ember from 'ember';
import Layout from './template';

const {
  Component
  } = Ember;

const transformPropertyName = document.body.style.transform !== undefined ? 'transform' : 'WebkitTransform';


export default Component.extend({

  layout: Layout,

  isDragging: false,
  startX: 0,
  startLeft: 0,

  defaultTitle: 'Quantum of solace',

  _start(event) {
    this.set('isDragging', true);
    this.set('startX', (event.pageX || event.x) || event.touches[0].pageX);
    this.set('startLeft', this._getSliderX());
  },

  _end(/*event*/) {
    this.set('isDragging', false);
  },

  _move(event) {
    if (this.get('isDragging')) {
      let pageX = (event.pageX || event.x) || event.touches[0].pageX;
      this._setSliderX(pageX);
    }
  },

  _setSliderX(x) {
    let startX = this.get('startX');
    let startLeft = this.get('startLeft');
    (this.element.styleGL || this.element.style)[transformPropertyName] = 'translateZ(0) translateX(' + (startLeft - (startX - (x || 0))) + 'px)';
  },

  _getSliderX() {
    return parseInt(parseCSSTransform((this.element.styleGL || this.element.style)[transformPropertyName]).translateX) || 0
  },

  mouseDown(e) {
    this._start(e);
  },

  touchStart(e) {
    this._start(e);
  },

  mouseUp(e) {
    this._end(e);
  },

  touchEnd(e) {
    this._end(e);
  },

  mouseMove(e) {
    this._move(e);
  },

  touchMove(e) {
    this._move(e);
  },

  didInsertElement() {
    //Slider logic, written in HTML / JS.
    //The only difference between HTML GL and basic HTML is that you should use element.styleGL.transform instead of element.style.transform
    this.$().find('img').each(function() {
      this.ondragstart = function () {
        return false;
      }
    });

    this._super();
  },

  actions: {

  }

});


function parseCSSTransform(transformString) {
  return (transformString.match(/([\w]+)\(([^\)]+)\)/g) || [])
    //make pairs of prop and value
    .map(function (it) {
      return it.replace(/\)$/, "").split(/\(/)
    })
    //convert to key-value map/object
    .reduce(function (m, it) {
      return m[it[0]] = it[1], m
    }, {});
}
