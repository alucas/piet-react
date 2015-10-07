var Dispatcher = require("../dispatcher/Dispatcher");
var ActionTypeConstant = require("../constant/ActionTypeConstant");

var BoardAction = {
  addRow: function(nb) {
    if (typeof nb === "undefined") {
      nb = 1;
    }

    Dispatcher.dispatch({
      actionType: ActionTypeConstant.ADD_ROW,
      nb: nb
    });
  },

  deleteRow: function(nb) {
    if (typeof nb === "undefined") {
      nb = 1;
    }

    Dispatcher.dispatch({
      actionType: ActionTypeConstant.DELETE_ROW,
      nb: nb
    });
  },

  addColumn: function(nb) {
    if (typeof nb === "undefined") {
      nb = 1;
    }

    Dispatcher.dispatch({
      actionType: ActionTypeConstant.ADD_COLUMN,
      nb: nb
    });
  },

  deleteColumn: function(nb) {
    if (typeof nb === "undefined") {
      nb = 1;
    }

    Dispatcher.dispatch({
      actionType: ActionTypeConstant.DELETE_COLUMN,
      nb: nb
    });
  }
};

module.exports = BoardAction;
