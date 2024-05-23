function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { NativeModules } from 'react-native';
import RNMBXLineLayerNativeComponent from '../specs/RNMBXLineLayerNativeComponent';
import AbstractLayer from './AbstractLayer';
const Mapbox = NativeModules.RNMBXModule;

// @{codepart-replace-start(LayerPropsCommon.codepart-tsx)}

// @{codepart-replace-end}

/**
 * LineLayer is a style layer that renders one or more stroked polylines on the map.
 */
class LineLayer extends AbstractLayer {
  static defaultProps = {
    sourceID: Mapbox.StyleSource.DefaultSourceID
  };
  render() {
    const props = {
      ...this.baseProps,
      sourceLayerID: this.props.sourceLayerID
    };
    return (
      /*#__PURE__*/
      // @ts-expect-error just codegen stuff
      React.createElement(RNMBXLineLayerNativeComponent, _extends({
        ref: this.setNativeLayer
      }, props))
    );
  }
}
export default LineLayer;
//# sourceMappingURL=LineLayer.js.map