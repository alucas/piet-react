import React from 'react';

import * as BoardAction from '../action/boardAction';
import { CLASSNAME } from '../constant/colorConstant';

export default class BoardContainer extends React.Component {
  render() {
    const { boardAction, color } = this.props;

    function handleClick(rowIndex, columnIndex) {
      boardAction.setColor(rowIndex, columnIndex, color);
    }

    return (
      <div className="boardContainer"> {
        this.props.board.map((row, i) => {
          return (
            <div className="boardRow" key={i}> {
              row.map((column, j) => {
                return (
                  <div
                    key={j}
                    className={'boardColumn ' + CLASSNAME[column]}
                    onClick={() => handleClick(i, j)}>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
