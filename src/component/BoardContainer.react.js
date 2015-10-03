var React = require("react");

var BoardContainer = React.createClass({
  render: function() {
    return <div id="boardContainer">
      {this.props.boardSize.nbRow}{', '}{this.props.boardSize.nbColumn}
    </div>
  }
})

module.exports = BoardContainer;
