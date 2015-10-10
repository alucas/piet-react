"use strict"

import React from "react";

export class BoardResizer extends React.Component {
  render() {
    return (
      <div className="boardResizer">
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
    );
  }
}
