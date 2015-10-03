var assign = require("object-assign");
var EventEmitter = require("events").EventEmitter;

var Dispatcher = require("../dispatcher/Dispatcher");
var PietConstant = require("../constant/PietConstant");

var CHANGE_EVENT = "change";

var TYPE_ROW = "row";
var TYPE_COLUMN = "column"

var _boardSize = {
  row: 10,
  column: 10
}

function _add(type, nb) {
  if (typeof nb === 'undefined') {
    nb = 1;
  }

  _boardSize[type] += nb;
}

function _delete(type, nb) {
  if (typeof nb === 'undefined') {
    nb = 1;
  }

  if (_boardSize[type] - nb <= 1) {
    _boardSize[type] = 1;
    return;
  }

  _boardSize[type] -= nb;
}

var BoardSizeStore = assign({}, EventEmitter.prototype, {
  getNbRow: function() {
    return _boardSize[TYPE_ROW];
  },

  getNbColumn: function() {
    return _boardSize[TYPE_COLUMN];
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case PietConstant.ACTION_TYPE.ADD_ROW:
      _add(TYPE_ROW);
      BoardSizeStore.emitChange();
      break;
    case PietConstant.ACTION_TYPE.DELETE_ROW:
      _delete(TYPE_ROW);
      BoardSizeStore.emitChange();
      break;
    case PietConstant.ACTION_TYPE.ADD_COLUMN:
      _add(TYPE_COLUMN);
      BoardSizeStore.emitChange();
      break;
    case PietConstant.ACTION_TYPE.DELETE_COLUMN:
      _delete(TYPE_COLUMN);
      BoardSizeStore.emitChange();
      break;

    default:
      // no opp
  }
});

module.exports = BoardSizeStore;
