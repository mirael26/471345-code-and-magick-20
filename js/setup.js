'use strict';

var form = document.querySelector('.setup-wizard-form');
var userCoatInput = form.querySelector('input[name="coat-color"]');
var userEyesInput = form.querySelector('input[name="eyes-color"]');
var userFireballInput = form.querySelector('input[name="fireball-color"]');
var userSetup = document.querySelector('.setup-player');
var userCoat = userSetup.querySelector('.wizard-coat');
var userEyes = userSetup.querySelector('.wizard-eyes');
var userFireball = userSetup.querySelector('.setup-fireball-wrap');

window.colorize(userCoat, userCoatInput, window.const.RANDOM_COAT_COLOR);
window.colorize(userEyes, userEyesInput, window.const.RANDOM_EYES_COLOR);
window.colorize(userFireball, userFireballInput, window.const.RANDOM_FIREBALL_COLOR);

var createWizardSetup = function () {
  var object = {};
  object.name = window.randomize(window.const.RANDOM_NAME) + ' ' + window.randomize(window.const.RANDOM_LAST_NAME);
  object.coatColor = window.randomize(window.const.RANDOM_COAT_COLOR);
  object.eyesColor = window.randomize(window.const.RANDOM_EYES_COLOR);
  return object;
};

var wizardsSetup = [];

for (var i = 0; i < 4; i++) {
  wizardsSetup.push(createWizardSetup());
}

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');

var renderWizard = function (wizardSetup) {
  var wizard = wizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = wizardSetup.name;
  wizard.querySelector('.wizard-coat').style.fill = wizardSetup.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = wizardSetup.eyesColor;
  return wizard;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizardsSetup.length; j++) {
  fragment.appendChild(renderWizard(wizardsSetup[j]));
}

document.querySelector('.setup-similar-list').appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
