'use strict';

let str = 'There are x days until ';

let halloweenDate = new Date(new Date().getFullYear(), 9, 31);

let complexStr = str.replace('x', dayCount(new Date, halloweenDate));

console.log(complexStr);
