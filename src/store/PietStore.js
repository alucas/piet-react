var assign = require("object-assign");
var EventEmitter = require("events").EventEmitter;
var Dispatcher = require("../dispatcher/Dispatcher");
var PietConstant = require("../constant/PietConstant");

var CHANGE_EVENT = "change";

var _value = true;

function toogle() {
  _value = !_value;
}

var PietStore = assign({}, EventEmitter.prototype, {
  getToogle: function() {
    return _value;
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
})

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case PietConstant.PIET_TOOGLE:
      toogle();
      PietStore.emitChange();
      break;

    default:
      // no opp
  }
});

module.exports = PietStore;
