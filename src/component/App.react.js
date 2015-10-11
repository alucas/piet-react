import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ToolAction from '../action/toolAction';
import * as BoardAction from '../action/boardAction';

import Header from './Header.react';
import ToolContainer from './ToolContainer.react';
import BoardContainer from './BoardContainer.react';
import Footer from './Footer.react';

class App extends React.Component {
  render() {
    const { dispatch, color, board } = this.props;

    const toolAction = bindActionCreators(ToolAction, dispatch);
    const boardAction = bindActionCreators(BoardAction, dispatch);

    return (
      <div id="pietAppContainer">
        <Header />
        <div id="contentContainer">
          <ToolContainer toolAction={toolAction} boardAction={boardAction} color={color} />
          <BoardContainer boardAction={boardAction} color={color} board={board} />
        </div>
        <Footer />
      </div>
    );
  }
}

function select(state) {
  return {
    color: state.color,
    board: state.board,
  };
}

export default connect(select)(App);
