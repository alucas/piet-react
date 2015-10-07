var React = require("react");

var BoardProperties = require("./tool/BoardProperties.react")
var ColorChooser = require("./tool/ColorChooser.react")

var ToolContainer = React.createClass({
  render: function() {
    return <div className="toolContainer">
      <BoardProperties />
      <ColorChooser color={this.props.color} />
    </div>
  }
})

module.exports = ToolContainer;
