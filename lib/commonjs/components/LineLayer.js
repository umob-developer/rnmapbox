"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _RNMBXLineLayerNativeComponent = _interopRequireDefault(require("../specs/RNMBXLineLayerNativeComponent"));
var _AbstractLayer = _interopRequireDefault(require("./AbstractLayer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Mapbox = _reactNative.NativeModules.RNMBXModule;

// @{codepart-replace-start(LayerPropsCommon.codepart-tsx)}

// @{codepart-replace-end}

/**
 * LineLayer is a style layer that renders one or more stroked polylines on the map.
 */
class LineLayer extends _AbstractLayer.default {
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
      _react.default.createElement(_RNMBXLineLayerNativeComponent.default, _extends({
        ref: this.setNativeLayer
      }, props))
    );
  }
}
var _default = exports.default = LineLayer;
//# sourceMappingURL=LineLayer.js.map