/*
Main js file

 */

import anime from './animejs'

var out = require('animejs')
console.log("animejs loaded");

module.exports = {
  foo: function () {
    var image = anime({
      targets: '#pic1',
      translateX: 250,
      direction: 'alternate',
      loop: true,
      duration: function(el, i, l) {
        return 1000 + (i * 1000);
      }
    });
  },
  bar: function () {
    console.log("bar");
  }
};

/* Make the pictures move around */
