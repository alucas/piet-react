import { dispatcher } from '../dispatcher/Dispatcher';
import * as ActionType from '../constant/ActionType';

export var AppAction = {
  selectColor: function(color) {
    dispatcher.dispatch({
      actionType: ActionType.SELECT_COLOR,
      color: color
    });
  }
};
