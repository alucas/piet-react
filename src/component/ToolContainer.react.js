import React from 'react';

import { BoardProperties } from './tool/BoardProperties.react';
import { ColorChooser } from './tool/ColorChooser.react';

export class ToolContainer extends React.Component {
  render() {
    return (
      <div className="toolContainer">
        <BoardProperties />
        <ColorChooser color={this.props.color} />
      </div>
    );
  }
}
