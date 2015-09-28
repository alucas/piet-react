var React = require("react");
var PietStore = require("../store/PietStore");
var PietAction = require("../action/PietAction");
var Header = require("./Header.react");
var Footer = require("./Footer.react");

var PietApp = React.createClass({
  getInitialState: function() {
    return {toogle: PietStore.getToogle()};
  },

  componentDidMount: function() {
    PietStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PietStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return <div>
        <Header />
        <div onClick={this._onClick} >{this.state.toogle.toString()}</div>
        <Footer />
      </div>
  },

  _onClick: function() {
    PietAction.toogle();
  },

  _onChange: function() {
    this.setState({toogle: PietStore.getToogle()});
  }
});

module.exports = PietApp;
