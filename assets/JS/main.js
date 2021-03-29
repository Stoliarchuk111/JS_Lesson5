/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

let container = null;
let prevIndicator = null;

function createContainer() {
  elem = document.createElement('div');

  elem.setAttribute('id', 'carousel');
  elem.setAttribute('class', 'carousel');
  document.querySelector('body').appendChild(elem);

  container = document.querySelector('#carousel');
}

function createSlides(n) {

  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');

  for (i = 0; i < n; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute(
      'class',
      i === 0 ? 'slides__item active' : 'slides__item'
    );

    slideLink.setAttribute('href', '#');
    slideItem.appendChild(slideLink);
    slidesContainer.appendChild(slideItem);

  }

  container.appendChild(slidesContainer);
}

function createIndicators(n) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');

  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute(
      'class',
      i === 0 ? 'indicators__item active' : 'indicators__item'
    );

    indicatorsItem.setAttribute('data-slide-to', i);
    indicatorsContainer.appendChild(indicatorsItem);
  }

  container.appendChild(indicatorsContainer);
}

function createControls() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');

  for (i = 0; i < 3; i++) {

    let controlItem = document.createElement('div');
    let controlIcon = document.createElement('i');
    const defItemClass = 'controls__item';
    const defIconClass = 'fas';

switch (i) {

  case 0:
    controlItem.setAttribute('class', `${defItemClass} controls__prev`);
    controlIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
    break;

  case 1:
    controlItem.setAttribute('class', `${defItemClass} controls__next`);
    controlIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
    break;

  case 2:
    controlItem.setAttribute('class', `${defItemClass} controls__pause`);
    controlIcon.setAttribute('class', `${defIconClass} fa-play`);
    break;
  }

    controlItem.appendChild(controlIcon);
    controlsContainer.appendChild(controlItem);
  }

  container.appendChild(controlsContainer);
}

function createStyle() {
  styleContainer = document.createElement('style');
  let styleCode = `
  body { font-family: Arial, serif; }
    .slides { height: 150px; padding: 0px; margin: 0px; list-style-type: none; }
    .slides__item { position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0;
     z-index: -999; transition: opacity 0.5s; font-size: 40px; padding: 40px; box-sizing: border-box;
     background: #333; color: #fff; }  
    .active { opacity: 1; z-index: 2; }   
    .slides__item:nth-of-type(1) { background: red; }   
    .slides__item:nth-of-type(2) { background: orange; }
    .slides__item:nth-of-type(3) { background: green; }  
    .slides__item:nth-of-type(4) { background: blue; }
    .slides__item:nth-of-type(5) { background: purple; }
    .controls__item { min-width: 24px; height: 24px; display: inline-block; padding: 5px; 
    margin: 10px 5px 5px 0; background-color: gray; color: white; cursor: pointer;
     user-select: none; text-align: center; }
    .indicators__item.active { background-color: red; }
    .far, .fas { font-size: 25px; }
    .controls, .slides { position: relative; }
    .indicators { display: flex; }
    .indicators__item { display: block; width: 20px; height: 20px; background-color: gray;
     margin: 5px; border-radius: 10px; 
    }`;

  styleContainer.innerHTML = styleCode;
  container.appendChild(styleContainer);
}

function indicatorsHandler(e) {
  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (prevIndicator !== null) prevIndicator.removeAttribute('style');

    prevIndicator = target;
  }
}

function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');

  indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}

createCarousel();