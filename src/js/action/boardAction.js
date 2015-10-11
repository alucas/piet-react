import * as ActionType from '../constant/actionType';

export function addRow(nb = 1) {
  return {
    type: ActionType.ADD_ROW,
    nb: nb,
  };
}

export function deleteRow(nb = 1) {
  return {
    type: ActionType.DELETE_ROW,
    nb: nb,
  };
}

export function addColumn(nb = 1) {
  return {
    type: ActionType.ADD_COLUMN,
    nb: nb,
  };
}

export function deleteColumn(nb = 1) {
  return {
    type: ActionType.DELETE_COLUMN,
    nb: nb,
  };
}

export function setColor(rowIndex, columnIndex, color) {
  return {
    type: ActionType.SET_COLOR,
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    color: color,
  };
}
