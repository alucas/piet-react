var React = require("react");

var BoardProperties = require("./tool/BoardProperties.react")

var ToolContainer = React.createClass({
  render: function() {
    return <div className="toolContainer">
      <BoardProperties />
    </div>
  }
})

module.exports = ToolContainer;
