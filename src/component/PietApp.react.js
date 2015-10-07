var React = require("react");
var BoardStore = require("../store/BoardStore");
var AppStore = require("../store/AppStore");

var Header = require("./Header.react");
var ToolContainer = require("./ToolContainer.react")
var BoardContainer = require("./BoardContainer.react")
var Footer = require("./Footer.react");

var PietApp = React.createClass({
  getInitialState: function() {
    return {
      board: BoardStore.getBoard(),
      color: AppStore.getColor()
    };
  },

  componentDidMount: function() {
    BoardStore.addChangeListener(this._boardStoreHandler);
    AppStore.addChangeListener(this._appStoreHandler);
  },

  componentWillUnmount: function() {
    BoardStore.removeChangeListener(this._boardStoreHandler);
    AppStore.removeChangeListener(this._appStoreHandler);
  },

  render: function() {
    return <div id="pietAppContainer">
        <Header />
        <div id="contentContainer">
          <ToolContainer color={this.state.color} />
          <BoardContainer board={this.state.board} />
        </div>
        <Footer />
      </div>
  },

  _boardStoreHandler: function() {
    this.setState({
      board: BoardStore.getBoard()
    });
  },

  _appStoreHandler: function() {
    this.setState({
      color: AppStore.getColor()
    });
  }
});

module.exports = PietApp;
