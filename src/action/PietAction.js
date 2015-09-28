var Dispatcher = require("../dispatcher/Dispatcher");
var PietConstant = require("../constant/PietConstant");

var PietAction = {
  toogle: function() {
    Dispatcher.dispatch({
      actionType: PietConstant.PIET_TOOGLE
    });
  }
};

module.exports = PietAction;
