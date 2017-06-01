const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
  // const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
};

p.addEventListener('click', makeGreen);

// Regular
console.log('normal stuff');

// Interpolated
let variable = 'VERY IMPORTANT';
console.log(`Trying the new ${variable} stuff`);
console.log('Trying the %s stuff', 'NEW');

// Styled
console.log('%c Is the styling working?', 'color: #f873fa;;');

// warning!
console.warn('BIG MISTAKE!');

// Error :|
console.error('you messed up');

// Info
console.info('Crocodiles are dangerous');

// Testing
console.assert(1 === 8, 'WRONG YOU IDIOT');
console.assert(p.classList.contains('nope'), 'WRONG AGAIN IDIOT');

// clearing
// console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together

// counting

// timing
