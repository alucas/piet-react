"use strict"

var React = require("react");

var BoardAction = require("../action/BoardAction");
var ColorConstant = require("../constant/ColorConstant");

var BoardContainer = React.createClass({
  render: function() {
    return <div className="boardContainer">{
      this.props.board.map(function(row, i) {
        return <div className="boardRow" key={i}>{
          row.map(function(column, j) {
            return <div
                      key={j}
                      className={"boardColumn " + ColorConstant.CLASSNAME[column]}
                      onClick={function() {this._handleClick(i, j)}.bind(this)}>
            </div>;
          }.bind(this))}
        </div>;
      }.bind(this))}
    </div>;
  },

  _handleClick: function(rowIndex, columnIndex) {
    BoardAction.setColor(rowIndex, columnIndex, this.props.color);
  }
})

module.exports = BoardContainer;
