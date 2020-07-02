'use strict';

window.colorize = (function () {
  return function (element, input, colorCollection) {
    element.addEventListener('click', function () {
      var color = window.randomize(colorCollection);
      input.value = color;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
