import React from 'react';

import { BoardAction } from '../../action/BoardAction';
import { BoardResizer } from './BoardResizer.react';

export class BoardProperties extends React.Component {
  render() {
    return (
      <div className="boardProperties">
        <BoardResizer label="Row" handleAdd={this._handleAddRow} handleDelete={this._handleDeleteRow} />
        <BoardResizer label="Column" handleAdd={this._handleAddColumn} handleDelete={this._handleDeleteColumn} />
      </div>
    );
  }

  _handleAddRow() {
    BoardAction.addRow();
  }

  _handleDeleteRow() {
    BoardAction.deleteRow();
  }

  _handleAddColumn() {
    BoardAction.addColumn();
  }

  _handleDeleteColumn() {
    BoardAction.deleteColumn();
  }
}
