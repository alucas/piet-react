import React from 'react';

import BoardAction from '../action/BoardAction';
import { CLASSNAME } from '../constant/ColorConstant';

export default class BoardContainer extends React.Component {
  render() {
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
                    onClick={() => this._handleClick(i, j)}>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  _handleClick(rowIndex, columnIndex) {
    BoardAction.setColor(rowIndex, columnIndex, this.props.color);
  }
}
