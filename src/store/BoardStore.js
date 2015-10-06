"use strict";

var assign = require("object-assign");
var EventEmitter = require("events").EventEmitter;

var Dispatcher = require("../dispatcher/Dispatcher");
var PietConstant = require("../constant/PietConstant");

var STORE_EVENT = "boardStore";

var INIT_VALUE = [1, 1];

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
  _board.push(Array.apply(null, Array(_getBoardNbColumn())).map(function() {
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
  _board.map(function(row) {
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

  _board.map(function(row) {
    return row.splice(nbColumn - nb, nb);
  });
}

function _delete(type, nb) {
  if (_boardSize[type] - nb <= 1) {
    _boardSize[type] = 1;
    return;
  }

  _boardSize[type] -= nb;
}

var BoardSizeStore = assign({}, EventEmitter.prototype, {
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

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case PietConstant.ACTION_TYPE.ADD_ROW:
      _addRow(action.nb);
      BoardSizeStore.emitChange();
      break;
    case PietConstant.ACTION_TYPE.DELETE_ROW:
      _deleteRow(action.nb);
      BoardSizeStore.emitChange();
      break;
    case PietConstant.ACTION_TYPE.ADD_COLUMN:
      _addColumn(action.nb);
      BoardSizeStore.emitChange();
      break;
    case PietConstant.ACTION_TYPE.DELETE_COLUMN:
      _deleteColumn(action.nb);
      BoardSizeStore.emitChange();
      break;

    default:
      // no opp
      break;
  }
});

module.exports = BoardSizeStore;
