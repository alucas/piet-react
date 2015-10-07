"use strict";

var assign = require("object-assign");
var EventEmitter = require("events").EventEmitter;

var Dispatcher = require("../dispatcher/Dispatcher");
var ActionTypeConstant = require("../constant/ActionTypeConstant");
var ColorConstant = require("../constant/ColorConstant");

var STORE_EVENT = "appStore";

var _color = ColorConstant.COLOR.NORMAL_WHITE;

function _setColor(color) {
  _color = color;
}

var AppStore = assign({}, EventEmitter.prototype, {
  getColor: function() {
    return _color;
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
    case ActionTypeConstant.SET_COLOR:
      _setColor(action.color);
      AppStore.emitChange();
      break;

    default:
      // no opp
      break;
  }
});

module.exports = AppStore;
