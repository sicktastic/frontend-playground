'use strict';

function greet(name='Anthony', timeOfDay='Day') {
  console.log(`Good ${timeOfDay}, ${name}!`);
}

// greet();
greet(undefined, 'Night');
