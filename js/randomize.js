'use strict';

window.randomize = (function () {
  var getRandomInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return function (array) {
    var randomSetup = array[getRandomInRange(0, array.length - 1)];
    return randomSetup;
  };
})();
