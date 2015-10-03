var React = require("react");
var BoardSizeStore = require("../store/BoardSizeStore");

var Header = require("./Header.react");
var ToolContainer = require("./ToolContainer.react")
var BoardContainer = require("./BoardContainer.react")
var Footer = require("./Footer.react");

var PietApp = React.createClass({
  getInitialState: function() {
    return {
      boardSize: {
        nbRow: BoardSizeStore.getNbRow(),
        nbColumn: BoardSizeStore.getNbColumn()
    }};
  },

  componentDidMount: function() {
    BoardSizeStore.addChangeListener(this._handleChange);
  },

  componentWillUnmount: function() {
    BoardSizeStore.removeChangeListener(this._handleChange);
  },

  render: function() {
    return <div id="pietAppContainer">
        <Header />
        <div id="contentContainer">
          <ToolContainer />
          <BoardContainer boardSize={this.state.boardSize} />
        </div>
        <Footer />
      </div>
  },

  _handleChange: function() {
    this.setState({
      boardSize: {
        nbRow: BoardSizeStore.getNbRow(),
        nbColumn: BoardSizeStore.getNbColumn()
    }});
  }
});

module.exports = PietApp;
