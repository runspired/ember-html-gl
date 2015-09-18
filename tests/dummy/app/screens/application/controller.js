import Ember from 'ember';

const {
  Controller
  } = Ember;

export default Controller.extend({

  isWebGL: false,

  defaultTitle: 'Quantum of Solace',

  actions: {
    toggleWebGL() {
      this.toggleProperty('isWebGL');
    },

    toggleTitle() {
      var newTitle = 'Quantum of Solace';
      if (this.get('defaultTitle') === 'Quantum of Solace') {
        newTitle = 'Some Other Bond Movie';
      }
      this.set('defaultTitle', newTitle);
    }
  }

});
