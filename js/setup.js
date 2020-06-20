'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var form = document.querySelector('.setup-wizard-form');
var userName = form.querySelector('.setup-user-name');
var userCoatInput = form.querySelector('input[name="coat-color"]');
var userEyesInput = form.querySelector('input[name="eyes-color"]');
var userFireballInput = form.querySelector('input[name="fireball-color"]');
var userSetup = document.querySelector('.setup-player');
var userCoat = userSetup.querySelector('.wizard-coat');
var userEyes = userSetup.querySelector('.wizard-eyes');
var userFireball = userSetup.querySelector('.setup-fireball-wrap');

var RANDOM_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var RANDOM_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var RANDOM_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var RANDOM_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var RANDOM_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && !userName.matches(':focus')) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  window.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  window.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

userCoat.addEventListener('click', function () {
  userCoatInput.value = getRandomSetup(RANDOM_COAT_COLOR);
  userCoat.style.fill = userCoatInput.value;
});

userEyes.addEventListener('click', function () {
  userEyesInput.value = getRandomSetup(RANDOM_EYES_COLOR);
  userEyes.style.fill = userEyesInput.value;
});

userFireball.addEventListener('click', function () {
  userFireballInput.value = getRandomSetup(RANDOM_FIREBALL_COLOR);
  userFireball.style.backgroundColor = userFireballInput.value;
});


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
