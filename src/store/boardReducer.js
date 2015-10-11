import * as ActionType from '../constant/actionType';
import { COLOR } from '../constant/colorConstant';

const intialState = [
  [COLOR.NORMAL_BLACK],
];

function getBoardNbRow(board) {
  return board.length;
}

function getBoardNbColumn(board) {
  return board[0].length;
}

function createArray(nb, initValueGenerator) {
  return Array.apply(null, Array(nb)).map(() => {
    return initValueGenerator();
  });
}

function addRow(board, color, nb) {
  return board.concat([createArray(getBoardNbColumn(board), () => color)]);
}

function deleteRow(board, nb) {
  const nbRow = getBoardNbRow(board);
  const nbColumn = getBoardNbColumn(board);

  if (nbRow === 1) {
    return board;
  }

  if (nbRow - nb <= 0) {
    nb = nbRow - 1;
  }

  return board.slice(0, nbRow - nb);
}

function addColumn(board, color, nb) {
  return board.map((row) => {
    return row.concat([color]);
  });
}

function deleteColumn(board, nb) {
  const nbColumn = getBoardNbColumn(board);
  if (nbColumn === 1) {
    return board;
  }

  if (nbColumn - nb <= 0) {
    nb = nbColumn - 1;
  }

  return board.map((row) => {
    return row.slice(0, nbColumn - nb);
  });
}

function setColor(board, rowIndex, columnIndex, color) {
  const nbRow = getBoardNbRow(board);
  const nbColumn = getBoardNbColumn(board);
  const rowToUpdate = board[rowIndex];

  return board.slice(0, rowIndex)
    .concat([rowToUpdate.slice(0, columnIndex)
             .concat([color])
             .concat(rowToUpdate.slice(columnIndex + 1, nbColumn))])
    .concat(board.slice(rowIndex + 1, nbRow));
}

export default function boardReducer(state = intialState, color, action) {
  switch(action.type) {
    case ActionType.ADD_ROW:
      return addRow(state, color, action.nb);
    case ActionType.DELETE_ROW:
      return deleteRow(state, action.nb);
    case ActionType.ADD_COLUMN:
      return addColumn(state, color, action.nb);
    case ActionType.DELETE_COLUMN:
      return deleteColumn(state, action.nb);
    case ActionType.SET_COLOR:
      return setColor(state, action.rowIndex, action.columnIndex, action.color);
    default:
      return state;
  }
};
