var createGretting = function(message, name) {
  return message + name;
}

var arrowGreeting = (message, name) => {
  return message + name;
}

var betterGreeting = (message, name) => message + name;

var squared = x => x * x;

var delieverBoy = {
  name: "John",

  handleMessage: function (message, handler) {
    handler(message);
  },

  recieve: function () {
    var that = this;

    this.handleMessage("Hello ", function (message) {
      this.name //get the proper name

      console.log(message + that.name);
    })
  }
}
