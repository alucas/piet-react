var Dispatcher = require("../dispatcher/Dispatcher");
var PietConstant = require("../constant/PietConstant");

var PietAction = {
  addRow: function() {
    Dispatcher.dispatch({
      actionType: PietConstant.ACTION_TYPE.ADD_ROW
    });
  },

  deleteRow: function() {
    Dispatcher.dispatch({
      actionType: PietConstant.ACTION_TYPE.DELETE_ROW
    });
  },

  addColumn: function() {
    Dispatcher.dispatch({
      actionType: PietConstant.ACTION_TYPE.ADD_COLUMN
    });
  },

  deleteColumn: function() {
    Dispatcher.dispatch({
      actionType: PietConstant.ACTION_TYPE.DELETE_COLUMN
    });
  }
};

module.exports = PietAction;
