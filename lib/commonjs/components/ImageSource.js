"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NATIVE_MODULE_NAME = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
var _RNMBXImageSourceNativeComponent = _interopRequireDefault(require("../specs/RNMBXImageSourceNativeComponent"));
var _AbstractSource = _interopRequireDefault(require("./AbstractSource"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const NATIVE_MODULE_NAME = exports.NATIVE_MODULE_NAME = 'RNMBXImageSource';
/**
 * ImageSource is a content source that is used for a georeferenced raster image to be shown on the map.
 * The georeferenced image scales and rotates as the user zooms and rotates the map
 */
class ImageSource extends _AbstractSource.default {
  _getURL() {
    const {
      url
    } = this.props;
    if ((0, _utils.isNumber)(url)) {
      return (0, _utils.resolveImagePath)(url);
    } else {
      return url;
    }
  }
  render() {
    if (!this.props.url || !this.props.coordinates || !this.props.coordinates.length) {
      return null;
    }
    const props = {
      ...this.props,
      url: this._getURL()
    };
    return (
      /*#__PURE__*/
      // @ts-expect-error just codegen stuff
      _react.default.createElement(_RNMBXImageSourceNativeComponent.default, _extends({
        ref: this.setNativeRef
      }, props), (0, _utils.cloneReactChildrenWithProps)(this.props.children, {
        sourceID: this.props.id
      }))
    );
  }
}
var _default = exports.default = ImageSource;
//# sourceMappingURL=ImageSource.js.map