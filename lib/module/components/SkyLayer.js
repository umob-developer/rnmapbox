function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { NativeModules } from 'react-native';
import RNMBXSkyLayerNativeComponent from '../specs/RNMBXSkyLayerNativeComponent';
import AbstractLayer from './AbstractLayer';
const Mapbox = NativeModules.RNMBXModule;
/**
 * SkyLayer is a spherical dome around the map that is always rendered behind all other layers
 */
class SkyLayer extends AbstractLayer {
  static defaultProps = {
    sourceID: Mapbox.StyleSource.DefaultSourceID
  };
  render() {
    return /*#__PURE__*/React.createElement(RNMBXSkyLayerNativeComponent
    // @ts-expect-error just codegen stuff
    , _extends({
      ref: this.setNativeLayer
    }, this.baseProps));
  }
}
export default SkyLayer;
//# sourceMappingURL=SkyLayer.js.map