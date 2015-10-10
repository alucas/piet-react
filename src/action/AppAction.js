import { dispatcher } from '../dispatcher/Dispatcher';
import { ActionTypeConstant } from '../constant/ActionTypeConstant';

export var AppAction = {
  selectColor: function(color) {
    dispatcher.dispatch({
      actionType: ActionTypeConstant.SELECT_COLOR,
      color: color
    });
  }
};
