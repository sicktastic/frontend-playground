Vue.component('message', {
  template: `
  <article class="message">
    <div class="message-header">
      {{ title }}
    </div>

    <div class="message-body">
      {{ body }}
    </div>
  </article>
  `
});

new Vue({
  el: '#root'
})
