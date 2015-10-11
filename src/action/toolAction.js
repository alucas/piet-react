import * as ActionType from '../constant/actionType';

export function selectColor(color) {
  return {
    type: ActionType.SELECT_COLOR,
    color: color
  };
}
