import React from 'react';

import BoardProperties from './tool/BoardProperties.react';
import ColorChooser from './tool/ColorChooser.react';

export default class ToolContainer extends React.Component {
  render() {
    const { toolAction, boardAction, color } = this.props;

    return (
      <div className="toolContainer">
        <BoardProperties boardAction={boardAction} />
        <ColorChooser color={color} selectColor={toolAction.selectColor} />
      </div>
    );
  }
}
