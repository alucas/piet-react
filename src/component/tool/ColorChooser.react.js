var React = require("react");
var PietAction = require("../../action/PietAction");

var ColorChooser = React.createClass({
  render: function() {
    return <div className="colorChooser">
      <div className="colorLight">
        <div className="colorRed"></div>
        <div className="colorYellow"></div>
        <div className="colorGreen"></div>
        <div className="colorCyan"></div>
        <div className="colorBlue"></div>
        <div className="colorMagenta"></div>
      </div>
      <div className="colorNormal">
        <div className="colorRed"></div>
        <div className="colorYellow"></div>
        <div className="colorGreen"></div>
        <div className="colorCyan"></div>
        <div className="colorBlue"></div>
        <div className="colorMagenta"></div>
      </div>
      <div className="colorDark">
        <div className="colorRed"></div>
        <div className="colorYellow"></div>
        <div className="colorGreen"></div>
        <div className="colorCyan"></div>
        <div className="colorBlue"></div>
        <div className="colorMagenta"></div>
      </div>
      <div className="colorWB">
        <div className="colorWhite"></div>
        <div className="colorBlack"></div>
      </div>
    </div>
  },
})

module.exports = ColorChooser;
