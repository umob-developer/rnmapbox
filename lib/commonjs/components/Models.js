"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Models;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _RNMBXModelsNativeComponent = _interopRequireDefault(require("../specs/RNMBXModelsNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _resolveAssets(models) {
  const resolvedModels = {};
  Object.keys(models).forEach(key => {
    const model = models[key];
    if (typeof model === 'string') {
      resolvedModels[key] = {
        url: model
      };
    } else {
      const asset = _reactNative.Image.resolveAssetSource(model);
      if (!asset) {
        throw new Error(`Could not resolve model asset: ${model}`);
      }
      resolvedModels[key] = asset;
    }
  });
  return resolvedModels;
}

/**
 * Name of 3D model assets to be used in the map
 */
function Models(props) {
  const {
    models,
    ...restOfProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_RNMBXModelsNativeComponent.default, _extends({}, restOfProps, {
    models: _resolveAssets(models)
  }));
}
//# sourceMappingURL=Models.js.map