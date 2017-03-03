// Vue.component('task-list', {
//   template: '<li><slot></slot></li>'
// });

// new Vue({
//   el: '#root'
// })

Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{ task.task }}</task>
    </div>
  `,

  data() {
    return {
      tasks: [
        { task: 'Milk', complete: true },
        { task: 'Chocolate', complete: true },
        { task: 'Water', complete: true },
        { task: 'Toothbrush', complete: true }
      ]
    };
  }
});

Vue.component('task', {
  template: '<li><slot></slot></li>',
});

new Vue({
  el: '#root'
});
