import dispatcher from '../dispatcher/Dispatcher';
import * as ActionType from '../constant/ActionType';

const AppAction = {
  selectColor: function(color) {
    dispatcher.dispatch({
      actionType: ActionType.SELECT_COLOR,
      color: color
    });
  }
};

export default AppAction;
