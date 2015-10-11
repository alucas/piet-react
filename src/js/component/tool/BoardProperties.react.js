import React from 'react';

import BoardResizer from './BoardResizer.react';

export default class BoardProperties extends React.Component {
  render() {
    const { boardAction } = this.props;

    function addRow() { boardAction.addRow(1) };
    function deleteRow() { boardAction.deleteRow(1) };
    function addColumn() { boardAction.addColumn(1) };
    function deleteColumn() { boardAction.deleteColumn(1) };

    return (
      <div className="boardProperties">
        <BoardResizer label="Row" handleAdd={addRow} handleDelete={deleteRow} />
        <BoardResizer label="Column" handleAdd={addColumn} handleDelete={deleteColumn} />
      </div>
    );
  }
}
