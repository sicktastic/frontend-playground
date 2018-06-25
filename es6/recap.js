'use strict';

console.log(productId);
var productId = 12;
// undefined

console.log(productId);
let productId = 12;
// ReferenceError


let productId = 12;
{
  let productId = 2000;
}
console.log(productId);
// 12

var getPrice = () => 5.99;
console.log(typeof getPrice);

///////////////////
// Template literal

const fruiteList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Kiwi</li>" +
    "<li>Kiwi</li>" +
  "</ul>"

const vegetableList = `
  <ul>
    <li>Potato</lo>
    <li>Potato</lo>
    <li>Potato</lo>
  </ul>
`;

let name = "Gary"
`Hello, ${name}`
