import { dispatcher } from '../dispatcher/Dispatcher';
import * as ActionType from '../constant/ActionType';

export var BoardAction = {
  addRow: function(nb = 1) {
    dispatcher.dispatch({
      actionType: ActionType.ADD_ROW,
      nb: nb,
    });
  },

  deleteRow: function(nb = 1) {
    dispatcher.dispatch({
      actionType: ActionType.DELETE_ROW,
      nb: nb,
    });
  },

  addColumn: function(nb = 1) {
    dispatcher.dispatch({
      actionType: ActionType.ADD_COLUMN,
      nb: nb,
    });
  },

  deleteColumn: function(nb = 1) {
    dispatcher.dispatch({
      actionType: ActionType.DELETE_COLUMN,
      nb: nb,
    });
  },

  setColor: function(rowIndex, columnIndex, color) {
    dispatcher.dispatch({
      actionType: ActionType.SET_COLOR,
      rowIndex: rowIndex,
      columnIndex: columnIndex,
      color: color,
    });
  },
};
