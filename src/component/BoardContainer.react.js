var React = require("react");

var BoardContainer = React.createClass({
  render: function() {
    return <div className="boardContainer">
        {this.props.board.map(function(row, i) {
          return <div className="boardRow" key={i}>
              {row.map(function(column, i) {
                return <div className="boardColumn" key={i} style={{backgroundColor: "white"}}>
                  </div>;
              })}
            </div>;
        })}
    </div>;
  }
})

module.exports = BoardContainer;
