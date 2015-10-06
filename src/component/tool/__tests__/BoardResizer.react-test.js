jest.dontMock("../BoardResizer.react");

describe("BoardResizer", function() {
  var React;
  var TestUtils;
  var BoardResizer;

  var addFn = jest.genMockFunction();
  var deleteFn = jest.genMockFunction();

  function expectClickThruAdd(button) {
    addFn.mockClear();
    deleteFn.mockClear();

    TestUtils.Simulate.click(button);
    expect(addFn.mock.calls.length).toBe(1);
    expect(deleteFn.mock.calls.length).toBe(0);
  }

  function expectClickThruDelete(button) {
    addFn.mockClear();
    deleteFn.mockClear();

    TestUtils.Simulate.click(button);
    expect(addFn.mock.calls.length).toBe(0);
    expect(deleteFn.mock.calls.length).toBe(1);
  }

  //beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    BoardResizer = require('../BoardResizer.react');
  //});

  it("should have a label set", function() {
    var myLabel = "myLabel";

    var boardResizer = TestUtils.renderIntoDocument(
      <BoardResizer label={myLabel} />
    );

    var label = TestUtils.findRenderedDOMComponentWithClass(boardResizer, 'label');
    expect(React.findDOMNode(label).textContent).toEqual(myLabel);
  });

  it("should have two buttons", function() {
    var boardResizer = TestUtils.renderIntoDocument(
      <BoardResizer />
    );

    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(boardResizer, 'button');
    expect(buttons.length).toBe(2);
  });

  it("should call the delete callback when the first button is clicked", function() {
    var boardResizer = TestUtils.renderIntoDocument(
      <BoardResizer handleAdd={addFn} handleDelete={deleteFn} />
    );

    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(boardResizer, 'button');

    expectClickThruDelete(buttons[0]);
  });

  it("should call the add callback when the second button is clicked", function() {
    var boardResizer = TestUtils.renderIntoDocument(
      <BoardResizer handleAdd={addFn} handleDelete={deleteFn} />
    );

    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(boardResizer, 'button');

    expectClickThruAdd(buttons[1]);
  });
});
