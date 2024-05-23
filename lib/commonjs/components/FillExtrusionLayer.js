"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _RNMBXFillExtrusionLayerNativeComponent = _interopRequireDefault(require("../specs/RNMBXFillExtrusionLayerNativeComponent"));
var _AbstractLayer = _interopRequireDefault(require("./AbstractLayer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const MapboxGL = _reactNative.NativeModules.RNMBXModule;
/**
 * FillExtrusionLayer is a style layer that renders one or more 3D extruded polygons on the map.
 */
class FillExtrusionLayer extends _AbstractLayer.default {
  static defaultProps = {
    sourceID: MapboxGL.StyleSource.DefaultSourceID
  };
  render() {
    const props = {
      ...this.props,
      ...this.baseProps,
      sourceLayerID: this.props.sourceLayerID
    };
    return /*#__PURE__*/_react.default.createElement(_RNMBXFillExtrusionLayerNativeComponent.default
    // @ts-expect-error just codegen stuff
    , _extends({
      ref: this.setNativeLayer
    }, props));
  }
}
var _default = exports.default = FillExtrusionLayer;
//# sourceMappingURL=FillExtrusionLayer.js.map