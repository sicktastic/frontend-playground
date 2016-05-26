var calculator = {
  sum: 0,
  add: function(value) {
    this.sum = this.sum += value;
  },
  clear: function() {
    this.sum = 0;
  },
  equal: function() {
    return this.sum;
  }
}
