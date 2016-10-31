(function() {
  'use strict';

  var Quiz = React.createClass({
    render: function() {
      return <div>
          {this.props.books.map(function(b) {
            return <Book title={b} />;
          })}
        </div>;
    }
  });

  var Book =  React.createClass({
    redner: function() {
      return <div><h4>{this.props.title}</h4>
    }
  })

  React.renderComponent(<Quiz book={["The Lord of The Rings", "Hello World"]} />,
      document.getElementbyID('app'));
})();
