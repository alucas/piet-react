import React from 'react';
import ClassNames from 'classnames';

import AppAction from '../../action/AppAction';
import { COLOR } from '../../constant/ColorConstant';

var _colors = [
  {className: 'colorLRed', value:COLOR.LIGHT_RED},
  {className: 'colorLYellow', value:COLOR.LIGHT_YELLOW},
  {className: 'colorLGreen', value:COLOR.LIGHT_GREEN},
  {className: 'colorLCyan', value:COLOR.LIGHT_CYAN},
  {className: 'colorLBlue', value:COLOR.LIGHT_BLUE},
  {className: 'colorLMagenta', value:COLOR.LIGHT_MAGENTA},
  {className: 'colorNRed', value:COLOR.NORMAL_RED},
  {className: 'colorNYellow', value:COLOR.NORMAL_YELLOW},
  {className: 'colorNGreen', value:COLOR.NORMAL_GREEN},
  {className: 'colorNCyan', value:COLOR.NORMAL_CYAN},
  {className: 'colorNBlue', value:COLOR.NORMAL_BLUE},
  {className: 'colorNMagenta', value:COLOR.NORMAL_MAGENTA},
  {className: 'colorDRed', value:COLOR.DARK_RED},
  {className: 'colorDYellow', value:COLOR.DARK_YELLOW},
  {className: 'colorDGreen', value:COLOR.DARK_GREEN},
  {className: 'colorDCyan', value:COLOR.DARK_CYAN},
  {className: 'colorDBlue', value:COLOR.DARK_BLUE},
  {className: 'colorDMagenta', value:COLOR.DARK_MAGENTA},
  {className: 'colorNWhite', value:COLOR.NORMAL_WHITE},
  {className: 'colorNBlack', value:COLOR.NORMAL_BLACK},
];

export default class ColorChooser extends React.Component {
  render() {
    let selectedColor = this.props.color;

    return (
      <div className="colorChooser"> {
        _colors.map((color, index) => {
          let classes = ClassNames({
            'selectedColor': color.value == selectedColor,
            [color.className]: true,
          });

          return (
            <div key={index} className={classes} onClick={() => AppAction.selectColor(color.value)}>
            </div>
          );
        })
      }
      </div>
    );
  }
};
