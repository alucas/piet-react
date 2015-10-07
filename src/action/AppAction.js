var Dispatcher = require("../dispatcher/Dispatcher");
var ActionTypeConstant = require("../constant/ActionTypeConstant");

var AppAction = {
  selectColor: function(color) {
    Dispatcher.dispatch({
      actionType: ActionTypeConstant.SET_COLOR,
      color: color
    });
  }
};

module.exports = AppAction;
