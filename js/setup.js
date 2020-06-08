'use strict';

var RANDOM_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var RANDOM_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var RANDOM_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var RANDOM_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

document.querySelector('.setup').classList.remove('hidden');

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomSetup = function (array) {
  var randomSetup = array[getRandomInRange(0, array.length - 1)];
  return randomSetup;
};

var createWizardSetup = function () {
  var object = {};
  object.name = getRandomSetup(RANDOM_NAME) + ' ' + getRandomSetup(RANDOM_LAST_NAME);
  object.coatColor = getRandomSetup(RANDOM_COAT_COLOR);
  object.eyesColor = getRandomSetup(RANDOM_EYES_COLOR);
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
