'use strict';

// Example 1
// let toybox ={ item1: 'care', item2: 'ball', item3: 'frisbee' } 
// let {item1, item2} = toybox;
// console.log(item1);

// Example 2
// let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];
// let [a, b, c, ...d] = widgets;
// console.log(d);

function getData({ url, method = 'post'} = {}, callback) {
  callback(url, method);
}

getData({ url: 'myposturl.com' }, function (url, method) {
  console.log(url, method);
})

getData({ url: 'myputurl.com', method: 'put' }, function (url, method) {
  console.log(url, method);
})
