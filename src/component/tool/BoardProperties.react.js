var React = require("react");
var BoardAction = require("../../action/BoardAction");

var BoardResizer = require("./BoardResizer.react")

var BoardProperties = React.createClass({
  render: function() {
    return <div className="boardProperties">
      <BoardResizer label="Row" handleAdd={this._handleAddRow} handleDelete={this._handleDeleteRow} />
      <BoardResizer label="Column" handleAdd={this._handleAddColumn} handleDelete={this._handleDeleteColumn} />
    </div>
  },

  _handleAddRow: function() {
    BoardAction.addRow();
  },

  _handleDeleteRow: function() {
    BoardAction.deleteRow();
  },

  _handleAddColumn: function() {
    BoardAction.addColumn();
  },

  _handleDeleteColumn: function() {
    BoardAction.deleteColumn();
  }
})

module.exports = BoardProperties;
