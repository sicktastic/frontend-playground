Vue.component('task-list', {
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});
