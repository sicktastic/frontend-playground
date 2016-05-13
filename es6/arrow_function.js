var createGretting = function(message, name) {
  return message + name;
}

var arrowGreeting = (message, name) => {
  return message + name;
}

var betterGreeting = (message, name) => message + name;

var squared = x => x * x;

// Original
var deliveryBoy = {
  name: "Anthony",

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

// Arrow Function
var delivery = {
  name: "Anthony",

  handleMessage: function (message, handler) {
    handler(message);
  },

  receive: function () {
    this.handleMessage("Hello, ", messages => console.log(message + this.name))
  }
}

deliverBoy.receive();
