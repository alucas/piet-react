var React = require("react");
var PietAction = require("../../action/PietAction");

var BoardResizer = require("./BoardResizer.react")

var BoardProperties = React.createClass({
  render: function() {
    return <div className="boardProperties">
      <BoardResizer label="Row" handleAdd={this._handleAddRow} handleDelete={this._handleDeleteRow} />
      <BoardResizer label="Column" handleAdd={this._handleAddColumn} handleDelete={this._handleDeleteColumn} />
    </div>
  },

  _handleAddRow: function() {
    PietAction.addRow();
  },

  _handleDeleteRow: function() {
    PietAction.deleteRow();
  },

  _handleAddColumn: function() {
    PietAction.addColumn();
  },

  _handleDeleteColumn: function() {
    PietAction.deleteColumn();
  }
})

module.exports = BoardProperties;
