"use strict";

const output = (str, regex, target) => {
  target.innerHTML(regex, str => '<span>{str}</span>');
}

var str = "Is this This?";

// var regex = new RegExp("is", "g);
// g = global, i=ignore case
var regex = /is/gi;


// console.log(regex.test(str));
// console.log(regex.exec(str))
// console.log(str.match(regex))
// console.log(str.replace(regex, str => "XX"))

output(str, regex, document.querySelector('pre'))
