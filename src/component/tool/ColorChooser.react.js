"use strict"

var React = require("react");
var ClassNames = require('classnames');

var AppAction = require("../../action/AppAction");
var ColorConstant = require("../../constant/ColorConstant");

var _colors = [
  {className: "colorLRed", value:[ColorConstant.COLOR.LIGHT_RED]},
  {className: "colorLYellow", value:[ColorConstant.COLOR.LIGHT_YELLOW]},
  {className: "colorLGreen", value:[ColorConstant.COLOR.LIGHT_GREEN]},
  {className: "colorLCyan", value:[ColorConstant.COLOR.LIGHT_CYAN]},
  {className: "colorLBlue", value:[ColorConstant.COLOR.LIGHT_BLUE]},
  {className: "colorLMagenta", value:[ColorConstant.COLOR.LIGHT_MAGENTA]},
  {className: "colorNRed", value:[ColorConstant.COLOR.NORMAL_RED]},
  {className: "colorNYellow", value:[ColorConstant.COLOR.NORMAL_YELLOW]},
  {className: "colorNGreen", value:[ColorConstant.COLOR.NORMAL_GREEN]},
  {className: "colorNCyan", value:[ColorConstant.COLOR.NORMAL_CYAN]},
  {className: "colorNBlue", value:[ColorConstant.COLOR.NORMAL_BLUE]},
  {className: "colorNMagenta", value:[ColorConstant.COLOR.NORMAL_MAGENTA]},
  {className: "colorDRed", value:[ColorConstant.COLOR.DARK_RED]},
  {className: "colorDYellow", value:[ColorConstant.COLOR.DARK_YELLOW]},
  {className: "colorDGreen", value:[ColorConstant.COLOR.DARK_GREEN]},
  {className: "colorDCyan", value:[ColorConstant.COLOR.DARK_CYAN]},
  {className: "colorDBlue", value:[ColorConstant.COLOR.DARK_BLUE]},
  {className: "colorDMagenta", value:[ColorConstant.COLOR.DARK_MAGENTA]},
  {className: "colorNWhite", value:[ColorConstant.COLOR.NORMAL_WHITE]},
  {className: "colorNBlack", value:[ColorConstant.COLOR.NORMAL_BLACK]},
];

var ColorChooser = React.createClass({
  render: function() {
    var selectedColor = this.props.color;

    return <div className="colorChooser">{
      _colors.map(function(color, index) {
        var classes = {};
        classes[color.className] = true;
        classes["selectedColor"] = color.value == selectedColor;
        classes = ClassNames(classes);

        var handleClick = function() {
          AppAction.selectColor(color.value);
        };

        var selected = color == selectedColor;

        return <div key={index} className={classes} onClick={handleClick}></div>
      })}
    </div>;
  }
})

module.exports = ColorChooser;
