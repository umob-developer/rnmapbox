"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Camera = void 0;
var _react = _interopRequireDefault(require("react"));
var _MapContext = _interopRequireDefault(require("../MapContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Camera extends _react.default.Component {
  static contextType = _MapContext.default;
  static UserTrackingModes = [];
  componentDidMount() {
    const {
      map
    } = this.context;
    const {
      centerCoordinate
    } = this.props;
    if (map && centerCoordinate) {
      map.flyTo({
        center: centerCoordinate
      });
    }
  }
  fitBounds(northEastCoordinates, southWestCoordinates, padding = 0, animationDuration = 0.0) {
    const {
      map
    } = this.context;
    if (map) {
      map.fitBounds([northEastCoordinates, southWestCoordinates]);
    }
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
}
exports.Camera = Camera;
var _default = exports.default = Camera;
//# sourceMappingURL=Camera.js.map