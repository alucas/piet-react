import assign from 'object-assign';
import { EventEmitter } from 'events';

import dispatcher from '../dispatcher/Dispatcher';
import * as ActionType from '../constant/ActionType';
import { COLOR } from '../constant/ColorConstant';

var STORE_EVENT = 'appStore';

var _color = COLOR.NORMAL_BLACK;

function _setColor(color) {
  _color = color;
}

const AppStore = assign({}, EventEmitter.prototype, {
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

dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionType.SELECT_COLOR:
      _setColor(action.color);
      AppStore.emitChange();
      break;

    default:
      // no opp
      break;
  }
});

export default AppStore;
