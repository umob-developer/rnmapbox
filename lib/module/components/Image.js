function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, forwardRef } from 'react';
import { findNodeHandle } from 'react-native';
import RNMBXImageNativeComponent from '../specs/RNMBXImageNativeComponent';
import NativeRNMBXImageModule from '../specs/NativeRNMBXImageModule';
const Image = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function Image({
  name,
  sdf,
  stretchX,
  stretchY,
  children
}, ref) {
  const nativeProps = {
    name,
    sdf,
    stretchX,
    stretchY,
    children
  };
  const imageRef = React.useRef(null);
  const refresh = () => {
    const handle = findNodeHandle(imageRef.current);
    NativeRNMBXImageModule.refresh(handle);
  };
  React.useImperativeHandle(ref, () => {
    return {
      refresh
    };
  });

  // @ts-expect-error just codegen stuff
  return /*#__PURE__*/React.createElement(RNMBXImageNativeComponent, _extends({}, nativeProps, {
    ref: imageRef
  }));
}));
Image.displayName = 'Image';
export default Image;
//# sourceMappingURL=Image.js.map