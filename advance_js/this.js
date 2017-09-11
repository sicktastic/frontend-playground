// go over in depth of this

console.log(this);

this.anthony = 1;

// console.log(this.anthony);
// console.log(window.anthony);
// console.log(anthony);

// function checkThis() {
//   console.log(this);
// }
// checkThis();

var anthony = {
  checkThis: function() {
    // stablelize

    var self = this;

    console.log(self);

    function checkOther() {
      console.log(self);

      // this calls window again
      this.moo = 1 
    }

    checkOther();

    console.log(self.moo);
    console.log(window.moo);
  }
}
anthony.checkThis();
// console.log(anthony);

// calls global object again
// var func = anthony.checkThis;
// func();
