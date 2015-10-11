import React from 'react';

export default class BoardResizer extends React.Component {
  render() {
    const { handleAdd, handleDelete, label } = this.props;

    return (
      <div className="boardResizer">
        <div className="label">{label}</div>
        <div className="btn-group" role="group" aria-label="resize">
          <button type="button" className="btn btn-default" aria-label="delete" onClick={handleDelete}>
            <span className="glyphicon glyphicon-minus-sign"></span>
          </button>
          <button type="button" className="btn btn-default" aria-label="add" onClick={handleAdd}>
            <span className="glyphicon glyphicon-plus-sign"></span>
          </button>
        </div>
      </div>
    );
  }
}
