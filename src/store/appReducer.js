import toolReducer from './toolReducer';
import boardReducer from './boardReducer';

export default function appReducer(state = {}, action) {
  return {
    color: toolReducer(state.color, action),
    board: boardReducer(state.board, state.color, action),
  };
}
