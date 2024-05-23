function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Image } from 'react-native';
import NativeModels from '../specs/RNMBXModelsNativeComponent';
function _resolveAssets(models) {
  const resolvedModels = {};
  Object.keys(models).forEach(key => {
    const model = models[key];
    if (typeof model === 'string') {
      resolvedModels[key] = {
        url: model
      };
    } else {
      const asset = Image.resolveAssetSource(model);
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
export default function Models(props) {
  const {
    models,
    ...restOfProps
  } = props;
  return /*#__PURE__*/React.createElement(NativeModels, _extends({}, restOfProps, {
    models: _resolveAssets(models)
  }));
}
//# sourceMappingURL=Models.js.map