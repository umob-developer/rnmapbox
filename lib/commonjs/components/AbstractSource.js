"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class AbstractSource extends _react.default.PureComponent {
  setNativeProps(props) {
    if (this._nativeRef) {
      this._nativeRef.setNativeProps(props);
    }
  }
  setNativeRef = instance => {
    this._nativeRef = instance;
  };
}
var _default = exports.default = AbstractSource;
//# sourceMappingURL=AbstractSource.js.map