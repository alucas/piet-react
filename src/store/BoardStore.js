import assign from 'object-assign';
import { EventEmitter } from 'events';

import { dispatcher } from '../dispatcher/Dispatcher';
import * as ActionType from '../constant/ActionType';
import { COLOR } from '../constant/ColorConstant';

var STORE_EVENT = 'boardStore';

var INIT_VALUE = COLOR.NORMAL_BLACK;

function _getInitValue() {
  return INIT_VALUE.slice(0);
}

var _board = [
  [
    _getInitValue()
  ]
];


function _getBoardNbRow() {
  return _board.length;
}

function _getBoardNbColumn() {
  return _board[0].length;
}

function _addRow(nb) {
  _board.push(Array.apply(null, Array(_getBoardNbColumn())).map(() => {
    return _getInitValue();
  }));
}

function _deleteRow(nb) {
  var nbColumn = _getBoardNbColumn();
  var nbRow = _getBoardNbRow();
  if (nbRow === 1) {
    return;
  }

  if (nbRow - nb <= 0) {
    nb = nbRow - 1;
  }

  _board.splice(nbRow - nb, nb);
}

function _addColumn(nb) {
  _board.map((row) => {
    return row.push(_getInitValue());
  });
}

function _deleteColumn(nb) {
  var nbColumn = _getBoardNbColumn();
  if (nbColumn === 1) {
    return;
  }

  if (nbColumn - nb <= 0) {
    nb = nbColumn - 1;
  }

  _board.map((row) => {
    return row.splice(nbColumn - nb, nb);
  });
}

function _setColor(rowIndex, columnIndex, color) {
  _board[rowIndex][columnIndex] = color;
}

export var BoardStore = assign({}, EventEmitter.prototype, {
  getBoard: function() {
    return _board;
  },

  emitChange: function() {
    this.emit(STORE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(STORE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(STORE_EVENT, callback);
  }
});

dispatcher.register((action) => {
  switch(action.actionType) {
    case ActionType.ADD_ROW:
      _addRow(action.nb);
      BoardStore.emitChange();
      break;
    case ActionType.DELETE_ROW:
      _deleteRow(action.nb);
      BoardStore.emitChange();
      break;
    case ActionType.ADD_COLUMN:
      _addColumn(action.nb);
      BoardStore.emitChange();
      break;
    case ActionType.DELETE_COLUMN:
      _deleteColumn(action.nb);
      BoardStore.emitChange();
      break;
    case ActionType.SET_COLOR:
      _setColor(action.rowIndex, action.columnIndex, action.color);
      BoardStore.emitChange();
      break;

    default:
      // no opp
      break;
  }
});
