var React = require("react");

var BoardResizer = React.createClass({
  render: function() {
    return <div className="boardResizer">
      <div className="label">{this.props.label}</div>
      <div className="btn-group" role="group" aria-label="resize">
        <button type="button" className="btn btn-default" aria-label="delete" onClick={this.props.handleDelete}>
          <span className="glyphicon glyphicon-minus-sign"></span>
        </button>
        <button type="button" className="btn btn-default" aria-label="add" onClick={this.props.handleAdd}>
          <span className="glyphicon glyphicon-plus-sign"></span>
        </button>
      </div>
    </div>
  }
})

module.exports = BoardResizer;
