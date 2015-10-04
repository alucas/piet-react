var Dispatcher = require("../dispatcher/Dispatcher");
var PietConstant = require("../constant/PietConstant");

var PietAction = {
  addRow: function(nb) {
    if (typeof nb === "undefined") {
      nb = 1;
    }

    Dispatcher.dispatch({
      actionType: PietConstant.ACTION_TYPE.ADD_ROW,
      nb: nb
    });
  },

  deleteRow: function(nb) {
    if (typeof nb === "undefined") {
      nb = 1;
    }

    Dispatcher.dispatch({
      actionType: PietConstant.ACTION_TYPE.DELETE_ROW,
      nb: nb
    });
  },

  addColumn: function(nb) {
    if (typeof nb === "undefined") {
      nb = 1;
    }

    Dispatcher.dispatch({
      actionType: PietConstant.ACTION_TYPE.ADD_COLUMN,
      nb: nb
    });
  },

  deleteColumn: function(nb) {
    if (typeof nb === "undefined") {
      nb = 1;
    }

    Dispatcher.dispatch({
      actionType: PietConstant.ACTION_TYPE.DELETE_COLUMN,
      nb: nb
    });
  }
};

module.exports = PietAction;
