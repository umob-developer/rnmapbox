"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LocationModuleEventEmitter = exports.LocationManager = void 0;
var _reactNative = require("react-native");
const MapboxGL = _reactNative.NativeModules.RNMBXModule;
const MapboxGLLocationManager = _reactNative.NativeModules.RNMBXLocationModule;
const LocationModuleEventEmitter = exports.LocationModuleEventEmitter = new _reactNative.NativeEventEmitter(MapboxGLLocationManager);

/**
 * Location sent by locationManager
 */

/**
 * Coorinates sent by locationManager
 */

/**
 * LocationManager is a singleton, see `locationManager`
 */
class LocationManager {
  constructor() {
    this._listeners = [];
    this._lastKnownLocation = null;
    this._isListening = false;
    this._requestsAlwaysUse = false;
    this._onUpdate = this._onUpdate.bind(this);
    this.subscription = null;
    this._appStateListener = _reactNative.AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    this._mockLocation = null;
  }
  setMockLocation(updater) {
    this._mockLocation = updater;
  }
  hasMockLocation() {
    return this._mockLocation !== null;
  }
  async getLastKnownLocation() {
    if (this._mockLocation) {
      this._lastKnownLocation = this._mockLocation;
      return this._lastKnownLocation;
    }
    if (!this._lastKnownLocation) {
      let lastKnownLocation;

      // as location can be brittle it might happen,
      // that we get an exception from native land
      // let's silently catch it and simply log out
      // instead of throwing an exception
      try {
        lastKnownLocation = await MapboxGLLocationManager.getLastKnownLocation();
      } catch (error) {
        console.warn('locationManager Error: ', error);
      }
      if (!this._lastKnownLocation && lastKnownLocation) {
        this._lastKnownLocation = lastKnownLocation;
      }
    }
    return this._lastKnownLocation;
  }
  addListener(listener) {
    if (!this._isListening) {
      this.start();
    }
    if (!this._listeners.includes(listener)) {
      this._listeners.push(listener);
      if (this._lastKnownLocation) {
        listener(this._lastKnownLocation);
      }
    }
  }
  removeListener(listener) {
    this._listeners = this._listeners.filter(l => l !== listener);
    if (this._listeners.length === 0) {
      this.stop();
    }
  }
  removeAllListeners() {
    this._listeners = [];
    this.stop();
  }
  _handleAppStateChange(appState) {
    if (!this._requestsAlwaysUse) {
      if (appState === 'background') {
        this.stop();
      } else if (appState === 'active') {
        if (this._listeners.length > 0) {
          this.start();
        }
      }
    }
  }
  start(displacement = -1) {
    let validDisplacement = 1;
    if (displacement === -1 || displacement === null || displacement === undefined) {
      validDisplacement = this._minDisplacement || -1;
    } else {
      validDisplacement = displacement;
    }
    if (!this._isListening) {
      MapboxGLLocationManager.start(validDisplacement);
      this.subscription = LocationModuleEventEmitter.addListener(MapboxGL.LocationCallbackName.Update, this._onUpdate);
      this._isListening = true;
    }
  }
  stop() {
    MapboxGLLocationManager.stop();
    if (this._isListening && this.subscription) {
      this.subscription.remove();
    }
    this._isListening = false;
  }
  setMinDisplacement(minDisplacement) {
    this._minDisplacement = minDisplacement;
    MapboxGLLocationManager.setMinDisplacement(minDisplacement);
  }
  setRequestsAlwaysUse(requestsAlwaysUse) {
    MapboxGLLocationManager.setRequestsAlwaysUse(requestsAlwaysUse);
    this._requestsAlwaysUse = requestsAlwaysUse;
  }
  _onUpdate(newLocation) {
    let location = newLocation;
    if (this._mockLocation) {
      location = this._mockLocation;
    }
    this._lastKnownLocation = location;
    this._listeners.forEach(l => l(location));
  }

  /**
   * simulates location updates, experimental  [V10, iOS only]
   */
  _simulateHeading(changesPerSecond, increment) {
    MapboxGLLocationManager.simulateHeading(changesPerSecond, increment);
  }

  /**
   * Sets the period at which location events will be sent over the React Native bridge.
   * The default is 0, aka no limit. [V10, iOS only]
   *
   * @example
   * locationManager.setLocationEventThrottle(500);
   *
   * @param {Number} throttleValue event throttle value in ms.
   * @return {void}
   */
  setLocationEventThrottle(throttleValue) {
    MapboxGLLocationManager.setLocationEventThrottle(throttleValue);
  }
}
exports.LocationManager = LocationManager;
var _default = exports.default = new LocationManager();
//# sourceMappingURL=locationManager.js.map