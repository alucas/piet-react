"use strict"

import React from "react";

import { BoardStore } from "../store/BoardStore";
import { AppStore } from "../store/AppStore";

import { Header } from "./Header.react";
import { ToolContainer } from "./ToolContainer.react";
import { BoardContainer } from "./BoardContainer.react";
import { Footer } from "./Footer.react";

export class PietApp extends React.Component {
  constructor() {
    super();

    this.state = {
      board: BoardStore.getBoard(),
      color: AppStore.getColor(),
    };

    BoardStore.addChangeListener(this._boardStoreHandler);
    AppStore.addChangeListener(this._appStoreHandler);
  }

  componentWillUnmount() {
    BoardStore.removeChangeListener(this._boardStoreHandler);
    AppStore.removeChangeListener(this._appStoreHandler);
  }

  render() {
    return (
      <div id="pietAppContainer">
        <Header />
          <div id="contentContainer">
            <ToolContainer color={this.state.color} />
            <BoardContainer color={this.state.color} board={this.state.board} />
        </div>
        <Footer />
      </div>
    );
  }

  _boardStoreHandler = () => {
    this.setState({board: BoardStore.getBoard()});
  }

  _appStoreHandler = () => {
    this.setState({color: AppStore.getColor()});
  }
};
