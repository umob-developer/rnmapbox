"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _RNMBXSkyLayerNativeComponent = _interopRequireDefault(require("../specs/RNMBXSkyLayerNativeComponent"));
var _AbstractLayer = _interopRequireDefault(require("./AbstractLayer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Mapbox = _reactNative.NativeModules.RNMBXModule;
/**
 * SkyLayer is a spherical dome around the map that is always rendered behind all other layers
 */
class SkyLayer extends _AbstractLayer.default {
  static defaultProps = {
    sourceID: Mapbox.StyleSource.DefaultSourceID
  };
  render() {
    return /*#__PURE__*/_react.default.createElement(_RNMBXSkyLayerNativeComponent.default
    // @ts-expect-error just codegen stuff
    , _extends({
      ref: this.setNativeLayer
    }, this.baseProps));
  }
}
var _default = exports.default = SkyLayer;
//# sourceMappingURL=SkyLayer.js.map