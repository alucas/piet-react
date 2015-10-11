import * as ActionType from '../constant/actionType';
import { COLOR } from '../constant/colorConstant';

const initialState = COLOR.NORMAL_BLACK;

export default function toolReducer(state = initialState, action) {
  switch(action.type) {
    case ActionType.SELECT_COLOR:
      return action.color;

    default:
      return state;
  }
}
