define(["@grafana/data","@grafana/runtime","react"], (__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE_react__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./UnityPanel.tsx":
/*!************************!*\
  !*** ./UnityPanel.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnityPanel": () => (/* binding */ UnityPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_unity_webgl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-unity-webgl */ "../node_modules/react-unity-webgl/distribution/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _div;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Mode;
(function (Mode) {
  Mode[Mode["specificGameObject"] = 0] = "specificGameObject";
  Mode[Mode["identifierAsGameObject"] = 1] = "identifierAsGameObject";
})(Mode || (Mode = {}));
var UnityPanel = function UnityPanel(_ref) {
  var options = _ref.options,
    data = _ref.data,
    width = _ref.width,
    height = _ref.height;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Mode.specificGameObject),
    _useState2 = _slicedToArray(_useState, 2),
    mode = _useState2[0],
    setMode = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    unityContext = _useState4[0],
    setUnityContext = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoaded = _useState6[0],
    setIsLoaded = _useState6[1];
  var createUnityContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var folder = options.folderUnityBuild;
    var filesName = options.nameOfFilesUnityBuild;
    setUnityContext(new react_unity_webgl__WEBPACK_IMPORTED_MODULE_1__.UnityContext({
      loaderUrl: "public/unitybuild/" + folder + "/" + filesName + ".loader.js",
      dataUrl: "public/unitybuild/" + folder + "/" + filesName + ".data",
      frameworkUrl: "public/unitybuild/" + folder + "/" + filesName + ".framework.js",
      codeUrl: "public/unitybuild/" + folder + "/" + filesName + ".wasm"
    }));
  }, [options.folderUnityBuild, options.nameOfFilesUnityBuild]);

  /**
   * 
   * @param deviceId 
   * @returns JSON with the value of each of the device properties at the given time
   */

  /*
  const getDataFromDevice = (deviceId:string) => {
    console.log(data)
    var res:any = {}
    data.series.forEach((serie) => {
      serie.fields.forEach((field) => {
        if(field.name.startsWith(options.property_start) && field.labels
            && field.labels[options.field_deviceId] !== null
            && field.labels[options.field_deviceId] === deviceId) {
             const name = field.name
            const endSubstring = (name.includes(options.property_end)) ? name.indexOf(options.property_end) : name.length
            var nameProperty = name.substring(((options.property_start).length), endSubstring)
            const subName = name.substring((endSubstring + options.property_end.length))
            nameProperty = nameProperty + subName
            var valueProperty = null
             if(field.state && field.state.calcs && field.state.calcs !== {}) {
              const calcs = field.state.calcs
              valueProperty = (calcs['lastNotNull']) ? calcs.lastNotNull : field.values.get(field.values.length-1)
            }
             res[nameProperty] = valueProperty
        }
      })
    })
    return res
  }
  */

  var addToObject = function addToObject(res, first, second, field, value) {
    var aux_time = res[first] ? res[first] : {};
    var aux_id = res[first] && res[first][second] ? res[first][second] : {};
    return _extends({}, res, _defineProperty({}, first, _extends({}, aux_time, _defineProperty({}, second, _extends({}, aux_id, _defineProperty({}, field, value))))));
  };
  var addToObjectById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (res, time, field, value, id) {
    return addToObject(res, id, time, field, value);
  }, []);
  var addToObjectByTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (res, time, field, value, id) {
    return addToObject(res, time, id, field, value);
  }, []);
  var getVariables = function getVariables() {
    var variables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var res = {};
    var dashboard_variables = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().getVariables();
    variables = variables.filter(function (item) {
      return item.length > 0 && (!item.startsWith("$") || item.length > 1);
    });
    variables.forEach(function (item) {
      var newItem = {};
      if (item.startsWith("$")) {
        var var_find = dashboard_variables.find(function (v) {
          return v.name === item.substring(1);
        });
        if (var_find) {
          newItem = _defineProperty({}, var_find.name, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().replace(item).trim());
        }
      } else {
        var split = item.split(":");
        newItem = split.length < 2 ? _defineProperty({}, item, item) : _defineProperty({}, split[0].trim(), split.slice(1).join(":").trim());
      }
      res = _extends({}, res, newItem);
    });
    return res;
  };
  var getAllData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    //Initialise result and select add function
    var res = {};
    var funcAdd = mode === Mode.specificGameObject ? addToObjectByTime : addToObjectById;
    //Filter the series by those with fields I am interested in.
    var series = fields.length === 0 ? data.series : data.series.filter(function (s) {
      return s.fields.some(function (r) {
        return fields.includes(r.name);
      });
    });
    //Scroll through the series
    series.forEach(function (serie) {
      //Search for the time field in the series
      var time_field = serie.fields.find(function (e) {
        return e["name"] === "Time";
      });
      if (time_field !== undefined) {
        //Search for the fields that correspond to the ones I am looking for
        var searched_fields = fields.length === 0 ? serie.fields.filter(function (s) {
          return s.name !== "Time";
        }) : serie.fields.filter(function (s) {
          return fields.includes(s.name);
        });
        searched_fields.forEach(function (field) {
          var id = field.labels ? field.labels[options.field_deviceId] : "undefined";
          for (var i = 0; i < serie.length; i++) {
            res = funcAdd(res, time_field.values.get(i), field.name, field.values.get(i), id);
          }
        });
      }
    });
    return res;
  }, [data, options, mode, addToObjectById, addToObjectByTime]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setMode(options.useSpecificGameObject ? Mode.specificGameObject : Mode.identifierAsGameObject);
    createUnityContext();
  }, [options.useSpecificGameObject, createUnityContext]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleDataFromUnity = function handleDataFromUnity(deviceId) {
      console.log("deviceId: " + deviceId);
      var queryObj = {};
      queryObj["var-" + options.variable_deviceId] = deviceId;
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getLocationSrv)().update({
        query: queryObj,
        partial: true,
        replace: true
      });
    };
    if (unityContext !== undefined) {
      unityContext.on(options.messageUnityToGetData, handleDataFromUnity);
      unityContext.on("loaded", function () {
        return setIsLoaded(true);
      });
    }
  }, [unityContext, options.variable_deviceId, options.messageUnityToGetData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log("useEffect data options");
    if (unityContext !== undefined && isLoaded) {
      var vars = getVariables(options.variables_to_send);
      if (Object.keys(vars).length > 0) {
        vars = {
          variables: vars
        };
      }
      var dataToSend = getAllData(options.fields_to_send);
      if (mode === Mode.specificGameObject) {
        dataToSend = _extends({}, vars, {
          series: dataToSend
        });
        console.log(dataToSend);
        unityContext.send(options.gameObjectUnityToReceiveData, options.functionUnityToReceiveData, JSON.stringify(dataToSend));
      } else {
        Object.keys(dataToSend).forEach(function (id) {
          var data_id = _extends({}, vars, {
            series: dataToSend[id]
          });
          console.log(data_id);
          unityContext.send(id, options.functionUnityToReceiveData, JSON.stringify(data_id));
        });
      }
      console.log("Todo enviado");
    }
  }, [data, options, isLoaded, mode, getAllData, unityContext]);
  return unityContext !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_unity_webgl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: width,
      height: height
    },
    unityContext: unityContext,
    tabIndex: 1
  })) : _div || (_div = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null));
};

/***/ }),

/***/ "../node_modules/react-unity-webgl/distribution/components/unity.js":
/*!**************************************************************************!*\
  !*** ../node_modules/react-unity-webgl/distribution/components/unity.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unity = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var react_2 = __webpack_require__(/*! react */ "react");
var use_unity_instance_1 = __webpack_require__(/*! ../hooks/use-unity-instance */ "../node_modules/react-unity-webgl/distribution/hooks/use-unity-instance.js");
var use_unity_loader_1 = __webpack_require__(/*! ../hooks/use-unity-loader */ "../node_modules/react-unity-webgl/distribution/hooks/use-unity-loader.js");
var generate_unity_instance_parameters_1 = __webpack_require__(/*! ../utils/generate-unity-instance-parameters */ "../node_modules/react-unity-webgl/distribution/utils/generate-unity-instance-parameters.js");
/**
 * A unique instance identifier for each mounted Unity Instance.
 */
var unityInstanceIdentifier = 0;
/**
 * Renders the Unity Instance to the React DOM.
 * @param props Properties of the Unity Component.
 * @returns A React Element.
 */
function Unity(props) {
    var htmlCanvasElement = (0, react_2.useRef)(null);
    var unityContext = (0, react_2.useState)(props.unityContext)[0];
    var unityInstanceParameters = (0, generate_unity_instance_parameters_1.generateUnityInstanceParameters)(unityContext, props);
    // The Unity Loader is required for the unity instance to be created.
    var unityLoaderStatus = (0, use_unity_loader_1.useUnityLoader)(unityContext.unityConfig.loaderUrl);
    // Creates the Unity Instance while defining a set of hooks which indicate
    // whether the Unity Instance is ready to be used among with its progression.
    var _a = (0, use_unity_instance_1.useUnityInstance)(unityLoaderStatus, htmlCanvasElement.current, unityInstanceParameters), unityInstance = _a.unityInstance, progression = _a.progression, error = _a.error;
    // Effect hook will be called when the Unity instance changes.
    (0, react_2.useEffect)(function () {
        // If the Unity Instance has been defined, it will be passed to the
        // Unity Context.
        if (unityInstance !== null) {
            unityContext.unityInstance = unityInstance;
        }
    }, [unityInstance]);
    // Effect hook will be called when the reference to the canvas changes.
    (0, react_2.useEffect)(function () {
        // Whether or not the canvas has been defined, it will be set as the
        // current html canvas element on the Unity Context.
        unityContext.htmlCanvasElement = htmlCanvasElement.current;
    }, [htmlCanvasElement]);
    // Effect hook will be called when the Unity Instance progession changes.
    (0, react_2.useEffect)(function () {
        // If the Unity Instance loading progression hits 1, then this means that
        //the Unity Instance is initialized successfully and is ready to be used.
        if (progression === 1) {
            // When the application is loaded, we'll send over a reference to the
            // canvas element. When the HTML Canvas Element ref is defined, an event
            // will be dispatched.
            if (htmlCanvasElement.current !== null) {
                unityContext.dispatchEvent("canvas", htmlCanvasElement.current);
            }
            // The loaded event is dispatched.
            unityContext.dispatchEvent("loaded");
        }
        // Dispatches an event every time the Unity Instance progression changes.
        unityContext.dispatchEvent("progress", progression);
    }, [progression]);
    // Effect hook will be called when the Unity Instance threw an error.
    (0, react_2.useEffect)(function () {
        // If the Unity Instance threw an error, then the error event is
        // dispatched.
        if (error !== null) {
            unityContext.dispatchEvent("error", error);
        }
    }, [error]);
    // Event hook will be called when the component mounts and unmounts.
    (0, react_2.useEffect)(function () {
        // Each time a component is mounted, the Unity Context identifier is
        // incremented to ensure that each component is referenced correctly.
        unityInstanceIdentifier++;
        return function () {
            // If the Unity Instance is defined, Quit will be invoked on the Unity
            // Instance. This removes the Unity Loader and Framework from memory.
            unityContext === null || unityContext === void 0 ? void 0 : unityContext.quitUnityInstance();
        };
    }, []);
    // Renders the actual canvas element which Unity will use to render.
    return (0, react_1.createElement)("canvas", {
        // Unity 2021.2 and above requires a unique identifier for each canvas
        // internally. This is not documented in the Unity documentation, but
        // it is required for the canvas to be rendered. This is further explained
        // in https://github.com/jeffreylanters/react-unity-webgl/issues/223.
        id: "unity-canvas-".concat(unityInstanceIdentifier),
        // A reference to the canvas element is required to create a Unity Instance.
        ref: htmlCanvasElement,
        // Push through of some properties.
        className: props.className || undefined,
        style: props.style || {},
        tabIndex: props.tabIndex || undefined,
    });
}
exports.Unity = Unity;


/***/ }),

/***/ "../node_modules/react-unity-webgl/distribution/hooks/use-unity-instance.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/react-unity-webgl/distribution/hooks/use-unity-instance.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useUnityInstance = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var use_unity_loader_1 = __webpack_require__(/*! ./use-unity-loader */ "../node_modules/react-unity-webgl/distribution/hooks/use-unity-loader.js");
/**
 * Creates a Unity Instance.
 * @param unityLoaderStatus The loader status
 * @param htmlCanvasElement A reference to the html canvas element
 * @param unityInstanceParameters The Unity instance parameters
 * @returns the Unity Instance among with the status of the Unity Instance.
 */
function useUnityInstance(unityLoaderStatus, htmlCanvasElement, unityInstanceParameters) {
    var _a = (0, react_1.useState)(0), progression = _a[0], setProgression = _a[1];
    var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
    var _c = (0, react_1.useState)(null), unityInstance = _c[0], setUnityInstance = _c[1];
    // Effect invoked when the Unity Loader status or canvas reference changes.
    (0, react_1.useEffect)(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var unityInstance_1, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (unityLoaderStatus !== use_unity_loader_1.Status.Loaded ||
                                htmlCanvasElement === null) {
                                // If the loader is not loaded, or the canvas is not available,
                                // we can't create the Unity instance yet.
                                setUnityInstance(null);
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            // It is possible for the application being rendered server side. In
                            // this scenario, the window is not available. We can't create the
                            // Unity Instance in this case.
                            if (typeof window === "undefined") {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, window.createUnityInstance(htmlCanvasElement, unityInstanceParameters, setProgression)];
                        case 2:
                            unityInstance_1 = _a.sent();
                            // When the Unity Instance is created, its reference is stored in the
                            // state while the error state is cleared.
                            setUnityInstance(unityInstance_1);
                            setError(null);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            // When the Unity Instance catches due to a fail during the creation,
                            // the Unity Instnace reference will be cleared while the error is
                            // placed into the state.
                            setUnityInstance(null);
                            setError(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        })();
    }, [unityLoaderStatus, htmlCanvasElement]);
    return { unityInstance: unityInstance, progression: progression, error: error };
}
exports.useUnityInstance = useUnityInstance;


/***/ }),

/***/ "../node_modules/react-unity-webgl/distribution/hooks/use-unity-loader.js":
/*!********************************************************************************!*\
  !*** ../node_modules/react-unity-webgl/distribution/hooks/use-unity-loader.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useUnityLoader = exports.Status = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var Status;
(function (Status) {
    Status["Idle"] = "Idle";
    Status["Loading"] = "Loading";
    Status["Loaded"] = "Loaded";
    Status["Error"] = "Error";
})(Status = exports.Status || (exports.Status = {}));
/**
 * Hook to embed a Unity Loader script.
 * @param src The source of the unity loader
 * @returns a hook that returns the status of the loader
 */
function useUnityLoader(src) {
    var _a = (0, react_1.useState)(src ? Status.Loading : Status.Idle), status = _a[0], setStatus = _a[1];
    // Effect hook will be invoked when the src changes.
    (0, react_1.useEffect)(function () {
        if (src === null) {
            setStatus(Status.Idle);
            return;
        }
        // Fetch existing script element by src
        // It may have been added by another instance of this hook
        var script = document.querySelector("script[src=\"".concat(src, "\"]"));
        if (script === null) {
            // Create script
            script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.setAttribute("data-status", "loading");
            // Add script to document body
            document.body.appendChild(script);
            // Store status in attribute on script
            // This can be read by other instances of this hook
            var setAttributeFromEvent = function (event) {
                script === null || script === void 0 ? void 0 : script.setAttribute("data-status", event.type === "load" ? "ready" : "error");
            };
            script.addEventListener("load", setAttributeFromEvent);
            script.addEventListener("error", setAttributeFromEvent);
        }
        else {
            // Grab existing script status from attribute and set to state.
            setStatus(script.getAttribute("data-status") === "ready"
                ? Status.Loaded
                : Status.Error);
        }
        // Script event handler to update status in state
        // Note: Even if the script already exists we still need to add
        // event handlers to update the state for *this* hook instance.
        var setStateFromEvent = function (event) {
            setStatus(event.type === "load" ? Status.Loaded : Status.Error);
        };
        // Add event listeners
        script.addEventListener("load", setStateFromEvent);
        script.addEventListener("error", setStateFromEvent);
        // Remove event listeners on cleanup
        return function () {
            if (script) {
                script.removeEventListener("load", setStateFromEvent);
                script.removeEventListener("error", setStateFromEvent);
                document.body.removeChild(script);
            }
        };
    }, [src] // Only re-run effect if script src changes
    );
    return status;
}
exports.useUnityLoader = useUnityLoader;


/***/ }),

/***/ "../node_modules/react-unity-webgl/distribution/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-unity-webgl/distribution/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnityContext = void 0;
var unity_1 = __webpack_require__(/*! ./components/unity */ "../node_modules/react-unity-webgl/distribution/components/unity.js");
var unity_context_1 = __webpack_require__(/*! ./library/unity-context */ "../node_modules/react-unity-webgl/distribution/library/unity-context.js");
Object.defineProperty(exports, "UnityContext", ({ enumerable: true, get: function () { return unity_context_1.UnityContext; } }));
// The Unity component
exports["default"] = unity_1.Unity;


/***/ }),

/***/ "../node_modules/react-unity-webgl/distribution/library/event-system.js":
/*!******************************************************************************!*\
  !*** ../node_modules/react-unity-webgl/distribution/library/event-system.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventSystem = void 0;
/**
 * An array of all instanciated Event Systems.
 */
var eventSystems = new Array();
/**
 * Dispatches an event that has been registered to all event systems.
 * @global
 * @param {string} eventName the event's name
 * @param {any} parameters the event's parameters
 * @example window.dispatchReactUnityEvent("gameOver", 180);
 */
var dispatchReactUnityEvent = function (eventName) {
    var parameters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parameters[_i - 1] = arguments[_i];
    }
    // This made should be made available to the global scope. When invoked, it
    // will dispatch the given event to all event systems.
    for (var _a = 0, eventSystems_1 = eventSystems; _a < eventSystems_1.length; _a++) {
        var eventSystem = eventSystems_1[_a];
        if (typeof eventSystem !== "undefined") {
            eventSystem.dispatchEvent.apply(eventSystem, __spreadArray([eventName], parameters, false));
        }
    }
};
/**
 * An event system.
 */
var EventSystem = /** @class */ (function () {
    function EventSystem() {
        /**
         * The event map contains all the events that have been registered to the
         * event system as a key-value pair of event name and event listener.
         * @private
         * @readonly
         */
        this.eventMap = new Map();
        // The event system will be pushed to the global list of event system
        // instances.
        eventSystems.push(this);
        // If we're running inside of a browser environment, some global properties
        // will be made available on the window allowing for Unity to communicate.
        if (typeof window !== "undefined") {
            // Register the global dispatch method.
            if (typeof window.dispatchReactUnityEvent === "undefined") {
                window.dispatchReactUnityEvent = dispatchReactUnityEvent;
            }
            // Create object for legacy bindings on the window.
            if (typeof window.ReactUnityWebGL === "undefined") {
                window.ReactUnityWebGL = {};
            }
        }
    }
    /**
     * Registers an event to the system.
     * @public
     * @param {string} eventName the event's name
     * @param {Function} eventListener the event's function
     */
    EventSystem.prototype.on = function (eventName, eventListener) {
        // Adds the event to the event map.
        this.eventMap.set(eventName, eventListener);
        // Add legacy binding to the window.
        if (typeof window !== "undefined") {
            window.ReactUnityWebGL[eventName] = function () {
                var parameters = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    parameters[_i] = arguments[_i];
                }
                return eventListener.apply(void 0, parameters);
            };
        }
    };
    /**
     * Removes all the Event Listeners with a specific Event Name.
     * @public
     * @param {string} eventName the event's name
     * @example unityContext.removeEventListener("progress");
     */
    EventSystem.prototype.removeEventListener = function (eventName) {
        // Remove the event from the event map.
        this.eventMap.delete(eventName);
        // Remove legacy binding from the window.
        if (typeof window !== "undefined") {
            delete window.ReactUnityWebGL[eventName];
        }
    };
    /**
     * Removes all the Event Listeners.
     * @public
     * @example unityContext.removeAllEventListeners();
     */
    EventSystem.prototype.removeAllEventListeners = function () {
        // Remove legacy bindings from the window.
        if (typeof window !== "undefined") {
            this.eventMap.forEach(function (_value, key) {
                delete window.ReactUnityWebGL[key];
            });
        }
        // Clear the event map.
        this.eventMap.clear();
    };
    /**
     * Dispatches an event that has been registered to the event system.
     * @public
     * @param {string} eventName the event's name
     * @param {any} parameters the event's parameters
     * @example unityContext.dispatchEventListener("gameOver", 180);
     */
    EventSystem.prototype.dispatchEvent = function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        var event = this.eventMap.get(eventName);
        if (typeof event !== "undefined") {
            event.apply(void 0, parameters);
        }
    };
    return EventSystem;
}());
exports.EventSystem = EventSystem;


/***/ }),

/***/ "../node_modules/react-unity-webgl/distribution/library/unity-context.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/react-unity-webgl/distribution/library/unity-context.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnityContext = void 0;
var event_system_1 = __webpack_require__(/*! ./event-system */ "../node_modules/react-unity-webgl/distribution/library/event-system.js");
/**
 * A Unity Context object can be fed to a Unity component instance to configure
 * the Unity Instance and handle the communication between the two.
 */
var UnityContext = /** @class */ (function (_super) {
    __extends(UnityContext, _super);
    /**
     * Creates a new Unity Context instance which can be fed to a Unity component
     * in order to render a Unity Instance.
     * @param unityConfig The Unity Config
     */
    function UnityContext(unityConfig) {
        var _this = _super.call(this) || this;
        _this.unityConfig = unityConfig;
        _this.unityInstance = null;
        _this.htmlCanvasElement = null;
        return _this;
    }
    /**
     * Sends a message to the UnityInstance to invoke a public method.
     * @public
     * @param {string} gameObjectName the name of the game object in your Unity scene.
     * @param {string} methodName the name of the public method on the game object.
     * @param {string | number | boolean} parameter an optional method parameter.
     */
    UnityContext.prototype.send = function (gameObjectName, methodName, parameter) {
        if (this.unityInstance !== null) {
            if (typeof parameter === "undefined") {
                this.unityInstance.SendMessage(gameObjectName, methodName);
            }
            else {
                this.unityInstance.SendMessage(gameObjectName, methodName, parameter);
            }
        }
    };
    /**
     * Asynchronously ask for the pointer to be locked on current canvas. To track
     * the success or failure of the request, it is necessary to listen for the
     * pointerlockchange and pointerlockerror events at the Document level.
     * @public
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/requestPointerLock
     */
    UnityContext.prototype.requestPointerLock = function () {
        if (this.htmlCanvasElement !== null) {
            this.htmlCanvasElement.requestPointerLock();
        }
    };
    /**
     * Takes a screenshot of the canvas and returns a data URL containing image
     * data. The image data is in .png format unless otherwise specified.
     * @public
     * @param dataType The image format of the screenshot
     * @param quality The quality of the jpg or webp screenshot
     * @returns a data URL containing image data of a snapshot of the canvas
     */
    UnityContext.prototype.takeScreenshot = function (dataType, quality) {
        var _a;
        if (this.htmlCanvasElement !== null) {
            if (((_a = this.unityConfig.webglContextAttributes) === null || _a === void 0 ? void 0 : _a.preserveDrawingBuffer) !== true) {
                console.warn("Taking a screenshot requires 'preserveDrawingBuffer'.");
            }
            return this.htmlCanvasElement.toDataURL(dataType, quality);
        }
        return null;
    };
    /**
     * Enables or disabled the Fullscreen mode of the Unity Instance.
     * @public
     * @param {boolean} enabled
     */
    UnityContext.prototype.setFullscreen = function (enabled) {
        if (this.unityInstance !== null) {
            this.unityInstance.SetFullscreen(enabled === true ? 1 : 0);
        }
    };
    /**
     * Quits the Unity Instance and clears it from memory.
     * @public
     * @async
     * @returns A promise that resolves when the Unity Instance is quit.
     */
    UnityContext.prototype.quitUnityInstance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.unityInstance !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.unityInstance.Quit()];
                    case 1:
                        _a.sent();
                        this.unityInstance = null;
                        this.dispatchEvent("quitted");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return UnityContext;
}(event_system_1.EventSystem));
exports.UnityContext = UnityContext;


/***/ }),

/***/ "../node_modules/react-unity-webgl/distribution/utils/generate-unity-instance-parameters.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/react-unity-webgl/distribution/utils/generate-unity-instance-parameters.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateUnityInstanceParameters = void 0;
/**
 * Generates the parameters for the Unity Instance based on the Unity Context
 * and Unity Props passed to the component.
 * @param unityContext The Unity Context
 * @param unityProps The Unity Props passed to the component
 * @returns A Unity Instance Parameters object
 */
function generateUnityInstanceParameters(unityContext, unityProps) {
    // Creation of an object with the parameters for the Unity Instance.
    var unityInstanceParameters = __assign({}, unityContext.unityConfig);
    // Print and printErr event hooks will be intercepted in order to catch
    // messages to the Unity Context.
    unityInstanceParameters.print = function (message) {
        unityContext.dispatchEvent("debug", message);
    };
    unityInstanceParameters.printErr = function (error) {
        unityContext.dispatchEvent("error", error);
    };
    // Some preferences will be set based on props and context config.
    if (typeof unityProps.devicePixelRatio !== "undefined") {
        unityInstanceParameters.devicePixelRatio = unityProps.devicePixelRatio;
    }
    if (typeof unityContext.unityConfig.webglContextAttributes !== "undefined") {
        unityInstanceParameters.webglContextAttributes =
            unityContext.unityConfig.webglContextAttributes;
    }
    if (typeof unityProps.matchWebGLToCanvasSize !== "undefined") {
        unityInstanceParameters.matchWebGLToCanvasSize =
            unityProps.matchWebGLToCanvasSize;
    }
    return unityInstanceParameters;
}
exports.generateUnityInstanceParameters = generateUnityInstanceParameters;


/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var UnityPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! UnityPanel */ "./UnityPanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(UnityPanel__WEBPACK_IMPORTED_MODULE_1__.UnityPanel).setPanelOptions(function (builder) {
  return builder.addTextInput({
    path: 'field_deviceId',
    name: 'Field of the id',
    description: 'Name of the query field that indicates the id to which the data refers.',
    defaultValue: 'thingId',
    category: ['Data options']
  }).addStringArray({
    path: 'variables_to_send',
    name: 'Variables to send',
    description: 'Variables to be sent together with the temporary data. To specify dashboard variables, precede them with $ (example: $ini_time). You can add other variables using the format NAME:VALUE (example: board_name:test).',
    defaultValue: [],
    category: ['Data options']
  }).addStringArray({
    path: 'fields_to_send',
    name: 'Fields to send',
    description: 'List of fields to be sent to the Unity model. If this field is not filled in, all available fields will be sent.',
    defaultValue: [],
    category: ['Data options']
  }).addTextInput({
    path: 'variable_deviceId',
    name: 'Grafana dashboard variable of selected device id',
    description: 'Name of the Grafana dashboard variable that stores the id of the selected device. This will allow displaying information about it in other panels.',
    defaultValue: 'deviceId',
    category: ['Dashboard options']
  }).addTextInput({
    path: 'messageUnityToGetData',
    name: 'Unity event to get data',
    description: 'Name of the event sent by Unity to the panel to set dashboard variable.',
    defaultValue: 'GetData',
    category: ['Unity options']
  }).addBooleanSwitch({
    path: 'useSpecificGameObject',
    name: 'Send data to a specific gameobject',
    description: 'Enable to send the data to a specific Unity gameobject. Disable to send the data of each identifier to a gameobject with the same identifier.',
    defaultValue: true,
    category: ['Unity options']
  }).addTextInput({
    path: 'gameObjectUnityToReceiveData',
    name: 'Unity GameObject that will receive the data',
    description: 'Name of the Unity gameobject that receives the data provided by the query. It must contain the receiving function indicated in the following field.',
    defaultValue: '',
    category: ['Unity options'],
    showIf: function showIf(config) {
      return config.useSpecificGameObject;
    }
  }).addTextInput({
    path: 'functionUnityToReceiveData',
    name: 'Unity function that will receive the data',
    description: 'Name of the Unity function that receives the data provided by the query. In this function we can make our model change depending on the information received.',
    defaultValue: 'SetValues',
    category: ['Unity options']
  }).addTextInput({
    path: 'folderUnityBuild',
    name: 'Folder with Unity model',
    description: 'Name of the folder that contains the Unity model files built in WebGL that we want to display. This should be inside the grafana public/unitybuild folder.',
    defaultValue: 'raspberry',
    category: ['Unity options']
  }).addTextInput({
    path: 'nameOfFilesUnityBuild',
    name: 'Unity build file names',
    description: 'Name of the files obtained as a result of compiling the Unity model in WebGL. There must be 4 files with the same name and extensions: .data, .framework, .loader and .wasm. They must be contained in the folder specified in the previous field.',
    defaultValue: 'myunityapp',
    category: ['Unity options']
  });
  /*
  .addBooleanSwitch({
    path: 'showSeriesCount',
    name: 'Show series counter',
    defaultValue: false,
  })
  .addRadio({
    path: 'seriesCountSize',
    defaultValue: 'sm',
    name: 'Series counter size',
    settings: {
      options: [
        {
          value: 'sm',
          label: 'Small',
        },
        {
          value: 'md',
          label: 'Medium',
        },
        {
          value: 'lg',
          label: 'Large',
        },
      ],
    },
    showIf: config => config.showSeriesCount,
  });*/
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=module.js.map