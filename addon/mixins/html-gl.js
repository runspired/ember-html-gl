import Ember from 'ember';

const {
  Mixin
  } = Ember;

export default Mixin.create({
  didInsertElement() {
    this._super();
    this.$().htmlgl();
  }
});
