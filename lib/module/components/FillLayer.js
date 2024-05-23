function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { NativeModules } from 'react-native';
import RNMBXFillLayerNativeComponent from '../specs/RNMBXFillLayerNativeComponent';
import AbstractLayer from './AbstractLayer';
const Mapbox = NativeModules.RNMBXModule;

// @{codepart-replace-start(LayerPropsCommon.codepart-tsx)}

// @{codepart-replace-end}

/**
 * FillLayer is a style layer that renders one or more filled (and optionally stroked) polygons on the map.
 */
class FillLayer extends AbstractLayer {
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
      React.createElement(RNMBXFillLayerNativeComponent, _extends({
        ref: this.setNativeLayer
      }, props))
    );
  }
}
export default FillLayer;
//# sourceMappingURL=FillLayer.js.map