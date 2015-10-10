import { dispatcher } from '../dispatcher/Dispatcher';
import { ActionTypeConstant } from '../constant/ActionTypeConstant';

export var BoardAction = {
  addRow: function(nb = 1) {
    dispatcher.dispatch({
      actionType: ActionTypeConstant.ADD_ROW,
      nb: nb,
    });
  },

  deleteRow: function(nb = 1) {
    dispatcher.dispatch({
      actionType: ActionTypeConstant.DELETE_ROW,
      nb: nb,
    });
  },

  addColumn: function(nb = 1) {
    dispatcher.dispatch({
      actionType: ActionTypeConstant.ADD_COLUMN,
      nb: nb,
    });
  },

  deleteColumn: function(nb = 1) {
    dispatcher.dispatch({
      actionType: ActionTypeConstant.DELETE_COLUMN,
      nb: nb,
    });
  },

  setColor: function(rowIndex, columnIndex, color) {
    dispatcher.dispatch({
      actionType: ActionTypeConstant.SET_COLOR,
      rowIndex: rowIndex,
      columnIndex: columnIndex,
      color: color,
    });
  },
};
