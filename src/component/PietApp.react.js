var React = require("react");
var BoardStore = require("../store/BoardStore");

var Header = require("./Header.react");
var ToolContainer = require("./ToolContainer.react")
var BoardContainer = require("./BoardContainer.react")
var Footer = require("./Footer.react");

var PietApp = React.createClass({
  getInitialState: function() {
    return {
      board: BoardStore.getBoard()
    };
  },

  componentDidMount: function() {
    BoardStore.addChangeListener(this._handleChange);
  },

  componentWillUnmount: function() {
    BoardStore.removeChangeListener(this._handleChange);
  },

  render: function() {
    return <div id="pietAppContainer">
        <Header />
        <div id="contentContainer">
          <ToolContainer />
          <BoardContainer board={this.state.board} />
        </div>
        <Footer />
      </div>
  },

  _handleChange: function() {
    this.setState({
      board: BoardStore.getBoard()
    });
  }
});

module.exports = PietApp;
