function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { NativeModules } from 'react-native';
import RNMBXBackgroundLayerNativeComponent from '../specs/RNMBXBackgroundLayerNativeComponent';
import AbstractLayer from './AbstractLayer';
const MapboxGL = NativeModules.RNMBXModule;
class BackgroundLayer extends AbstractLayer {
  static defaultProps = {
    sourceID: MapboxGL.StyleSource.DefaultSourceID
  };
  render() {
    const props = {
      ...this.baseProps,
      sourceLayerID: this.props.sourceLayerID
    };
    return /*#__PURE__*/React.createElement(RNMBXBackgroundLayerNativeComponent
    // @ts-expect-error just codegen stuff
    , _extends({
      ref: this.setNativeLayer
    }, props));
  }
}
export default BackgroundLayer;
//# sourceMappingURL=BackgroundLayer.js.map