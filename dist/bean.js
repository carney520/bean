/*!
 * Bean v0.1.0
 * Licensed under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bean"] = factory();
	else
		root["bean"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(179);

	var _keys2 = _interopRequireDefault(_keys);

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	var _mixins = __webpack_require__(120);

	var _mixins2 = _interopRequireDefault(_mixins);

	__webpack_require__(334);

	var _dropdown = __webpack_require__(17);

	var _button = __webpack_require__(6);

	var _grid = __webpack_require__(107);

	var _icon = __webpack_require__(2);

	var _spinner = __webpack_require__(116);

	var _menu = __webpack_require__(29);

	var _form = __webpack_require__(104);

	var _modal = __webpack_require__(111);

	var _tooltip = __webpack_require__(119);

	var _popover = __webpack_require__(115);

	var _alert = __webpack_require__(101);

	var _pagination = __webpack_require__(114);

	var _tab = __webpack_require__(118);

	var _breadcrumbs = __webpack_require__(102);

	var _message = __webpack_require__(109);

	var _notification = __webpack_require__(112);

	var _nprogress = __webpack_require__(113);

	var _steps = __webpack_require__(117);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var components = {
	  Dropdown: _dropdown.Dropdown,
	  Alert: _alert.Alert,
	  Button: _button.Button,
	  ButtonGroup: _button.ButtonGroup,
	  Grid: _grid.Grid,
	  Cell: _grid.Cell,
	  Spinner: _spinner.Spinner,
	  Icon: _icon.Icon,
	  Menu: _menu.Menu,
	  MenuItem: _menu.MenuItem,
	  MenuDivider: _menu.MenuDivider,
	  Checkbox: _form.Checkbox,
	  CheckboxGroup: _form.CheckboxGroup,
	  Radio: _form.Radio,
	  RadioGroup: _form.RadioGroup,
	  Switch: _form.Switch,
	  Slider: _form.Slider,
	  Datepicker: _form.Datepicker,
	  Rangepicker: _form.Rangepicker,
	  Select: _form.Select,
	  Option: _form.Option,
	  TreeSelect: _form.TreeSelect,
	  Cascader: _form.Cascader,
	  Input: _form.Input,
	  InputGroup: _form.InputGroup,
	  InputNumber: _form.InputNumber,
	  Form: _form.Form,
	  FormGroup: _form.FormGroup,
	  Label: _form.Label,
	  HelpText: _form.HelpText,
	  Modal: _modal.Modal,
	  Tooltip: _tooltip.Tooltip,
	  Popover: _popover.Popover,
	  PopoverConfirm: _popover.PopoverConfirm,
	  Pagination: _pagination.Pagination,
	  Tab: _tab.Tab,
	  TabItem: _tab.TabItem,
	  Breadcrumbs: _breadcrumbs.Breadcrumbs,
	  BreadcrumbItem: _breadcrumbs.BreadcrumbItem,
	  Nprogress: _nprogress.Nprogress,
	  Steps: _steps.Steps,
	  Step: _steps.Step
	};

	var _vue = void 0;
	exports.default = (0, _extends3.default)({}, components, {
	  install: function install(Vue, options) {
	    if (_vue) return;
	    _vue = Vue;

	    (0, _mixins2.default)(Vue);
	    (0, _modal.installDialogs)(Vue);
	    (0, _message.installMessage)(Vue);
	    (0, _notification.installNotification)(Vue);

	    (0, _keys2.default)(components).forEach(function (name) {
	      Vue.component('B' + name, components[name]);
	    });
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.coerceNumber = coerceNumber;
	exports.coerceBoolean = coerceBoolean;
	function coerceNumber(value) {
	  return typeof value !== 'string' ? value : Number(value);
	}

	function coerceBoolean(value) {
	  return typeof value !== 'string' ? value : value === 'true' ? true : value === 'false' ? false : value === 'null' ? false : value === 'undefined' ? false : value;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Icon = undefined;

	var _icon = __webpack_require__(316);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Icon = _icon2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.warning = warning;
	exports.format = format;
	exports.isEmptyValue = isEmptyValue;
	exports.isEmptyObject = isEmptyObject;
	exports.asyncMap = asyncMap;
	exports.complementError = complementError;
	exports.deepMerge = deepMerge;
	var formatRegExp = /%[sdj%]/g;

	var warning2 = function warning2() {};

	if (false) {
	  warning2 = function warning2(type, message) {
	    if (typeof console !== 'undefined' && console.warn) {
	      console.warn(type, message);
	    }
	  };
	}

	function warning(type, errors) {
	  // only warn native warning, default type is string, confuses many people...
	  if (errors.every(function (e) {
	    return typeof e === 'string';
	  })) {
	    warning2(type, errors);
	  }
	}

	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}

	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
	}

	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}

	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}

	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;

	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }

	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}

	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;

	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }

	  next([]);
	}

	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}

	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var next = function next(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === objArrLength) {
	      callback(results);
	    }
	  };
	  objArrKeys.forEach(function (key) {
	    var arr = objArr[key];
	    if (firstFields.indexOf(key) !== -1) {
	      asyncSerialArray(arr, func, next);
	    } else {
	      asyncParallelArray(arr, func, next);
	    }
	  });
	}

	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}

	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
	          target[s] = _extends({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  required: __webpack_require__(53),
	  whitespace: __webpack_require__(86),
	  type: __webpack_require__(85),
	  range: __webpack_require__(84),
	  "enum": __webpack_require__(82),
	  pattern: __webpack_require__(83)
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ButtonGroup = exports.Button = undefined;

	var _button = __webpack_require__(290);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(289);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Button = _button2.default;
	exports.ButtonGroup = _buttonGroup2.default;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(46)('wks')
	  , uid        = __webpack_require__(35)
	  , Symbol     = __webpack_require__(9).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(5)
	  , ctx       = __webpack_require__(61)
	  , hide      = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _view = __webpack_require__(27);

	var _view2 = _interopRequireDefault(_view);

	var _coerces = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_view2.default],

	  props: {
	    name: String,

	    size: {
	      type: String,
	      validator: function validator(value) {
	        return ['tiny', 'small', undefined, 'large'].indexOf(value) !== -1;
	      }
	    },

	    value: {},

	    tabindex: {
	      type: Number,
	      coerce: _coerces.coerceNumber,
	      default: 0
	    },

	    disabled: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      isFocus: false
	    };
	  },


	  methods: {
	    focus: function focus() {
	      this.$el.scrollIntoView();
	    },
	    $changeInner: function $changeInner(cb) {
	      var _this = this;

	      this._valueChanging = true;
	      cb();

	      this.$nextTick(function () {
	        _this._valueChanging = false;
	      });
	    },
	    $isChangingInner: function $isChangingInner() {
	      return this._valueChanging;
	    },
	    _onFocus: function _onFocus(event) {
	      this.isFocus = true;
	      this.$notify('onfocus', event);
	    },
	    _onBlur: function _onBlur(event) {
	      this.isFocus = false;
	      this.$notify('onblur', event);
	    }
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(176);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(19)
	  , IE8_DOM_DEFINE = __webpack_require__(63)
	  , toPrimitive    = __webpack_require__(49)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(64)
	  , defined = __webpack_require__(32);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dropdown = undefined;

	var _dropdown = __webpack_require__(291);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Dropdown = _dropdown2.default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _validatable = __webpack_require__(106);

	var _validatable2 = _interopRequireDefault(_validatable);

	var _coerces = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_control2.default, _validatable2.default],

	  props: {
	    placeholder: {
	      type: String,
	      default: ''
	    },

	    allowClear: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  computed: {
	    showClear: function showClear() {
	      return this.isFocus && !this.showPlaceholder && !this.disabled;
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12)
	  , createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(13) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(69)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(185), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _parseInt = __webpack_require__(57);

	var _parseInt2 = _interopRequireDefault(_parseInt);

	var _isNan = __webpack_require__(23);

	var _isNan2 = _interopRequireDefault(_isNan);

	exports.dateFormat = dateFormat;
	exports.noop = noop;
	exports.warn = warn;
	exports.pageOffset = pageOffset;
	exports.isEmpty = isEmpty;
	exports.on = on;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function dateFormat() {
	  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
	  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
	  var inSecond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	  if (!(date instanceof Date)) {
	    var time = new Date(date);

	    if ((0, _isNan2.default)(time.getTime())) {
	      var toNumber = (0, _parseInt2.default)(date);
	      if ((0, _isNan2.default)(toNumber)) {
	        throw new TypeError(date + ' is not a valid Date');
	      } else {
	        date = inSecond ? new Date(toNumber * 1000) : new Date(toNumber);
	      }
	    } else {
	      date = time;
	    }
	  }

	  var year = date.getFullYear();
	  var month = date.getMonth() + 1;
	  var day = date.getDate();
	  var hour = date.getHours();
	  var hour12 = hour <= 12 ? hour : hour - 12;
	  var minute = date.getMinutes();
	  var second = date.getSeconds();

	  var map = {
	    YYYY: year,
	    MM: ('0' + month).slice(-2),
	    M: month,
	    DD: ('0' + day).slice(-2),
	    D: day,
	    H: hour,
	    HH: ('0' + hour).slice(-2),
	    h: hour12,
	    hh: ('0' + hour12).slice(-2),
	    m: minute,
	    mm: ('0' + minute).slice(-2),
	    s: second,
	    ss: ('0' + second).slice(-2)
	  };

	  return format.replace(/Y+|M+|D+|H+|h+|m+|s+/g, function (str) {
	    return map[str];
	  });
	}

	function noop() {}

	function warn(message) {
	  if (false) {
	    console.warn(message);
	    console.trace && console.trace();
	  }
	}

	function pageOffset(elem) {
	  var left = elem.offsetLeft;
	  var top = elem.offsetTop;
	  var offsetParent = elem.offsetParent;

	  while (offsetParent) {
	    left += offsetParent.offsetLeft;
	    top += offsetParent.offsetTop;
	    offsetParent = offsetParent.offsetParent;
	  }

	  return { left: left, top: top };
	}

	function isEmpty(obj) {
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}

	function on(target, eventType, callback) {
	  target.addEventListener(eventType, callback, false);
	  return {
	    remove: function remove() {
	      target.removeEventListener(eventType, callback, false);
	    }
	  };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  methods: {
	    $_bind: function $_bind(callback) {
	      var _this = this;

	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      if (typeof callback !== 'function') {
	        throw new TypeError('$_bind Error: callback must be a function.');
	      }

	      return function () {
	        for (var _len2 = arguments.length, other = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          other[_key2] = arguments[_key2];
	        }

	        return callback.apply(_this, args.concat(other));
	      };
	    },
	    $getSlot: function $getSlot(name) {
	      return this._slotContents && this._slotContents[name];
	    },
	    $notify: function $notify(eventName, orgEvent) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var eventData = (0, _extends3.default)({
	        object: this,
	        eventName: eventName,
	        original: orgEvent
	      }, options);
	      this.$emit(eventName, eventData);
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var iconName = exports.iconName = {
	  success: 'check-circle',
	  warning: 'exclamation-circle',
	  info: 'info-circle',
	  error: 'times-circle',
	  primary: 'info-circle',
	  alert: 'times-circle'
	};

	var iconColor = exports.iconColor = {
	  info: 'primary',
	  error: 'alert'
	};

	var typeMap = exports.typeMap = {
	  info: 'primary',
	  error: 'alert'
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MenuDivider = exports.MenuItem = exports.Menu = undefined;

	var _menu = __webpack_require__(319);

	var _menu2 = _interopRequireDefault(_menu);

	var _menuItem = __webpack_require__(318);

	var _menuItem2 = _interopRequireDefault(_menuItem);

	var _divider = __webpack_require__(317);

	var _divider2 = _interopRequireDefault(_divider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Menu = _menu2.default;
	exports.MenuItem = _menuItem2.default;
	exports.MenuDivider = _divider2.default;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(183), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(174);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(30);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 32 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(32);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(214)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(65)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, ruleType);
	    if (!(0, _util.isEmptyValue)(value, ruleType)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = type;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(26);

	exports.default = {
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover',
	      validator: function validator(value) {
	        return ['hover', 'focus', 'click', 'manual', undefined].indexOf(value) !== -1;
	      }
	    },

	    position: {
	      type: String,
	      default: 'bottom'
	    }
	  },

	  data: function data() {
	    return {
	      show: false,
	      shown: false
	    };
	  },


	  methods: {
	    active: function active() {
	      this.show = true;
	    },
	    hide: function hide() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  },

	  watch: {
	    'show': function show(val) {
	      if (val) {
	        this.$emit('onshow');
	        if (!this.shown) {
	          this.shown = true;
	        }
	      } else {
	        this.$emit('onhide');
	      }
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    var eleFirstChild = this.$els.trigger.firstChild;
	    var ele = eleFirstChild.nodeType === Node.ELEMENT_NODE ? eleFirstChild : this.$els.trigger;

	    switch (this.trigger) {
	      case 'hover':
	        this._mouseenterEvent = (0, _util.on)(ele, 'mouseenter', this.active);
	        this._mouseleaveEvent = (0, _util.on)(ele, 'mouseleave', this.hide);
	        break;
	      case 'focus':
	        this._focusEvent = (0, _util.on)(ele, 'focus', this.active);
	        this._blurEvent = (0, _util.on)(ele, 'blur', this.hide);
	        break;
	      case 'manual':
	        break;
	      default:
	        this._clickEvent = (0, _util.on)(ele, 'click', this.toggle);
	        this._closeEvent = (0, _util.on)(window, 'click', function (_ref) {
	          var target = _ref.target;

	          if (!_this.$el.contains(target)) {
	            _this.hide();
	          }
	        });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._mouseleaveEvent) {
	      this._mouseleaveEvent.remove();
	      this._mouseenterEvent.remove();
	    }
	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }
	    if (this._clickEvent) {
	      this._clickEvent.remove();
	      this._closeEvent.remove();
	    }
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(181);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(180);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(15)
	  , TAG = __webpack_require__(7)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(46)('keys')
	  , uid    = __webpack_require__(35);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 48 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(24);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(9)
	  , core           = __webpack_require__(5)
	  , LIBRARY        = __webpack_require__(42)
	  , wksExt         = __webpack_require__(51)
	  , defineProperty = __webpack_require__(12).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(7);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219);
	var global        = __webpack_require__(9)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(21)
	  , TO_STRING_TAG = __webpack_require__(7)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(3);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating required fields.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
	    errors.push(util.format(options.messages.required, rule.fullField));
	  }
	}

	exports["default"] = required;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _coerces = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_control2.default],

	  props: {
	    checked: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    checkedValue: {
	      default: true
	    },

	    uncheckedValue: {
	      default: false
	    },

	    button: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    buttonOptions: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _textField = __webpack_require__(18);

	var _textField2 = _interopRequireDefault(_textField);

	var _coerces = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_textField2.default],
	  props: {
	    multiple: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    dropdownStyle: Object,

	    labelKey: {
	      type: String,
	      default: 'label'
	    },

	    valueKey: {
	      type: String,
	      default: 'value'
	    }
	  },

	  data: function data() {
	    return {
	      selected: null
	    };
	  },


	  computed: {
	    selectClasses: function selectClasses() {
	      return ['--' + this.size, {
	        '--disabled': this.disabled
	      }];
	    },
	    label: function label() {
	      if (this.selected && !this.multiple) {
	        return this.selected[this.labelKey] || this.selected.label;
	      } else {
	        return null;
	      }
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.multiple ? !this.selected || this.selected.length === 0 : !this.label;
	    }
	  },

	  methods: {
	    select: function select(item, init) {
	      var _this = this;

	      this.$changeInner(function () {
	        if (item === null) {
	          if (_this.multiple) {
	            _this.value = [];
	            _this.selected = [];
	          } else {
	            _this.value = null;
	            _this.selected = null;
	          }
	          return;
	        } else {
	          var value = item[_this.valueKey] || item.value;

	          if (_this.multiple) {
	            _this.selected || (_this.selected = []);
	            _this.value || (_this.value = []);

	            if (_this.selected.indexOf(item) !== -1) {
	              _this.selected.$remove(item);
	              _this.value.$remove(value);
	            } else {
	              _this.selected.push(item);
	              if (!init) _this.value.push(value);
	            }
	          } else {
	            _this.selected = item;
	            if (!init) {
	              _this.value = value;
	            }
	          }
	        }

	        if (!_this.multiple) {
	          _this.$refs.dropdown.hide();
	        } else {
	          _this.$els.input.focus();
	        }

	        _this.$notify('onselect', null);
	      });
	    },
	    isActived: function isActived(item) {
	      if (this.multiple) {
	        return this.selected && this.selected.indexOf(item) !== -1;
	      } else {
	        return this.selected == item;
	      }
	    },
	    clear: function clear() {
	      this.select(null);
	      this.$refs.dropdown.hide();
	    },
	    remove: function remove(item) {
	      var _this2 = this;

	      this.$changeInner(function () {
	        var value = item[_this2.valueKey] || item.value;
	        _this2.selected.$remove(item);
	        _this2.value.$remove(value);
	      });
	    },
	    digest: function digest() {
	      var value = this.value;

	      this.selected = this.multiple ? [] : null;

	      if (value == null || Array.isArray(value) && value.length === 0 || typeof value === 'string' && value.trim() === '') {
	        return;
	      }

	      this.$broadcast('select:digest');
	    }
	  },

	  watch: {
	    value: function value(_value, oldValue) {
	      if (this.multiple) {
	        this.$notify('onchange', null, { value: _value, oldValue: oldValue });
	      } else if (_value !== oldValue) {
	        this.$notify('onchange', null, { value: _value, oldValue: oldValue });
	      }

	      if (!this.$isChangingInner()) {
	        this.digest();
	      }
	    }
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray2 = __webpack_require__(31);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	exports.coerceSize = coerceSize;
	exports.serializeClassName = serializeClassName;
	exports.serializeExpanded = serializeExpanded;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function parseLength(size) {
	  var _size$trim$split = size.trim().split(':'),
	      _size$trim$split2 = (0, _slicedToArray3.default)(_size$trim$split, 3),
	      small = _size$trim$split2[0],
	      medium = _size$trim$split2[1],
	      large = _size$trim$split2[2];

	  return {
	    small: small,
	    medium: medium,
	    large: large
	  };
	}

	function coerceSize(value) {
	  return typeof value !== 'string' ? value : parseLength(value);
	}

	function serializeClassName(container, values, type) {
	  var serialize = void 0;

	  switch (type) {
	    case 'size':
	      serialize = serializeCol;
	      break;
	    case 'push':
	      serialize = serializePush;
	      break;
	    case 'pull':
	      serialize = serializePull;
	      break;
	    case 'offset':
	      serialize = serializeOffset;
	      break;
	    case 'center':
	      serialize = serializeCenter;
	      break;
	    case 'uncenter':
	      serialize = serializeUncenter;
	      break;
	    case 'rowcollapse':
	      serialize = serializeRowCollapse;
	      break;
	    case 'rowuncollapse':
	      serialize = serializeRowUncollapse;
	      break;
	  }

	  for (var key in values) {
	    if (values[key]) {
	      container.push(serialize(values[key], key));
	    }
	  }
	}

	function serializeCol(value, breakpoint) {
	  return 'col--' + value + '@' + breakpoint;
	}

	function serializeOffset(value, breakpoint) {
	  return 'col--offset-' + value + '@' + breakpoint;
	}

	function serializePull(value, breakpoint) {
	  return 'col--pull-' + value + '@' + breakpoint;
	}

	function serializePush(value, breakpoint) {
	  return 'col--push-' + value + '@' + breakpoint;
	}

	function serializeCenter(value, breakpoint) {
	  return 'col--center@' + breakpoint;
	}

	function serializeUncenter(value, breakpoint) {
	  return 'col--uncenter@' + breakpoint;
	}

	function serializeRowCollapse(value, breakpoint) {
	  return 'row--collapse@' + breakpoint;
	}

	function serializeRowUncollapse(value, breakpoint) {
	  return 'row--uncollapse@' + breakpoint;
	}

	function serializeExpanded() {
	  return 'row--expanded';
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(187), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(177);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(173);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(40)
	  , TAG = __webpack_require__(7)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(194);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(13) && !__webpack_require__(14)(function(){
	  return Object.defineProperty(__webpack_require__(62)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(42)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(71)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(15)
	  , Iterators      = __webpack_require__(21)
	  , $iterCreate    = __webpack_require__(203)
	  , setToStringTag = __webpack_require__(44)
	  , getPrototypeOf = __webpack_require__(211)
	  , ITERATOR       = __webpack_require__(7)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(35)('meta')
	  , isObject = __webpack_require__(24)
	  , has      = __webpack_require__(15)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(14)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(19)
	  , dPs         = __webpack_require__(208)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(62)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(199).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(69)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(15)
	  , toIObject    = __webpack_require__(16)
	  , arrayIndexOf = __webpack_require__(196)(false)
	  , IE_PROTO     = __webpack_require__(45)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(5)
	  , fails   = __webpack_require__(14);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(32)
	  , fails   = __webpack_require__(14)
	  , spaces  = __webpack_require__(47)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(48)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(60)
	  , ITERATOR  = __webpack_require__(7)('iterator')
	  , Iterators = __webpack_require__(21);
	module.exports = __webpack_require__(5).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(129)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/checkbox/checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(241)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(131)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/datepicker/pane.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(243)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(143)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/radio/radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(255)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(144)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/select/option.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(256)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(160)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/modal/modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(273)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(3);

	var _validator = __webpack_require__(92);

	var _validator2 = _interopRequireDefault(_validator);

	var _messages2 = __webpack_require__(81);

	var _rule = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */
	function Schema(descriptor) {
	  this.rules = null;
	  this._messages = _messages2.messages;
	  this.define(descriptor);
	}

	Schema.prototype = {
	  messages: function messages(_messages) {
	    if (_messages) {
	      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
	    }
	    return this._messages;
	  },
	  define: function define(rules) {
	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }
	    if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }
	    this.rules = {};
	    var z = void 0;
	    var item = void 0;
	    for (z in rules) {
	      if (rules.hasOwnProperty(z)) {
	        item = rules[z];
	        this.rules[z] = Array.isArray(item) ? item : [item];
	      }
	    }
	  },
	  validate: function validate(source_) {
	    var _this = this;

	    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var oc = arguments[2];

	    var source = source_;
	    var options = o;
	    var callback = oc;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback();
	      }
	      return;
	    }
	    function complete(results) {
	      var i = void 0;
	      var field = void 0;
	      var errors = [];
	      var fields = {};

	      function add(e) {
	        if (Array.isArray(e)) {
	          errors = errors.concat.apply(errors, e);
	        } else {
	          errors.push(e);
	        }
	      }

	      for (i = 0; i < results.length; i++) {
	        add(results[i]);
	      }
	      if (!errors.length) {
	        errors = null;
	        fields = null;
	      } else {
	        for (i = 0; i < errors.length; i++) {
	          field = errors[i].field;
	          fields[field] = fields[field] || [];
	          fields[field].push(errors[i]);
	        }
	      }
	      callback(errors, fields);
	    }

	    if (options.messages) {
	      var messages = this.messages();
	      if (messages === _messages2.messages) {
	        messages = (0, _messages2.newMessages)();
	      }
	      (0, _util.deepMerge)(messages, options.messages);
	      options.messages = messages;
	    } else {
	      options.messages = this.messages();
	    }

	    options.error = _rule.error;
	    var arr = void 0;
	    var value = void 0;
	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      arr = _this.rules[z];
	      value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;
	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = _extends({}, source);
	          }
	          value = source[z] = rule.transform(value);
	        }
	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = _extends({}, rule);
	        }
	        rule.validator = _this.getValidationMethod(rule);
	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this.getType(rule);
	        if (!rule.validator) {
	          return;
	        }
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    (0, _util.asyncMap)(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;
	      function addFullfield(key, schema) {
	        return _extends({}, schema, {
	          fullField: rule.fullField + '.' + key
	        });
	      }

	      function cb() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        var errors = e;
	        if (!Array.isArray(errors)) {
	          errors = [errors];
	        }
	        if (errors.length) {
	          (0, _util.warning)('async-validator:', errors);
	        }
	        if (errors.length && rule.message) {
	          errors = [].concat(rule.message);
	        }

	        errors = errors.map((0, _util.complementError)(rule));

	        if ((options.first || options.fieldFirst) && errors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(errors);
	        }
	        if (!deep) {
	          doIt(errors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message) {
	              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
	            } else {
	              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
	            }
	            return doIt(errors);
	          }

	          var fieldsSchema = {};
	          if (rule.defaultField) {
	            for (var k in data.value) {
	              if (data.value.hasOwnProperty(k)) {
	                fieldsSchema[k] = rule.defaultField;
	              }
	            }
	          }
	          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
	          for (var f in fieldsSchema) {
	            if (fieldsSchema.hasOwnProperty(f)) {
	              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
	              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
	            }
	          }
	          var schema = new Schema(fieldsSchema);
	          schema.messages(options.messages);
	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }
	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            doIt(errs && errs.length ? errors.concat(errs) : errs);
	          });
	        }
	      }

	      rule.validator(rule, data.value, cb, data.source, options);
	    }, function (results) {
	      complete(results);
	    });
	  },
	  getType: function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }
	    if (typeof rule.validator !== 'function' && rule.type && !_validator2["default"].hasOwnProperty(rule.type)) {
	      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
	    }
	    return rule.type || 'string';
	  },
	  getValidationMethod: function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }
	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');
	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }
	    if (keys.length === 1 && keys[0] === 'required') {
	      return _validator2["default"].required;
	    }
	    return _validator2["default"][this.getType(rule)] || false;
	  }
	};

	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }
	  _validator2["default"][type] = validator;
	};

	Schema.messages = _messages2.messages;

	exports["default"] = Schema;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newMessages = newMessages;
	function newMessages() {
	  return {
	    "default": 'Validation error on field %s',
	    required: '%s is required',
	    "enum": '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      "boolean": '%s is not a %s',
	      integer: '%s is not an %s',
	      "float": '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}

	var messages = exports.messages = newMessages();

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(3);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	var ENUM = 'enum';

	/**
	 *  Rule for validating a value exists in an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, source, errors, options) {
	  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
	  if (rule[ENUM].indexOf(value) === -1) {
	    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	  }
	}

	exports["default"] = enumerable;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(3);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating a regular expression pattern.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, source, errors, options) {
	  if (rule.pattern instanceof RegExp) {
	    if (!rule.pattern.test(value)) {
	      errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	    }
	  }
	}

	exports["default"] = pattern;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(3);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating minimum and maximum allowed values.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number';
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);
	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  }
	  // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type
	  if (!key) {
	    return false;
	  }
	  if (str || arr) {
	    val = value.length;
	  }
	  if (len) {
	    if (val !== rule.len) {
	      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	}

	exports["default"] = range;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(3);

	var util = _interopRequireWildcard(_util);

	var _required = __webpack_require__(53);

	var _required2 = _interopRequireDefault(_required);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/* eslint max-len:0 */

	var pattern = {
	  email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
	  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};

	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  "float": function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }
	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }
	    return typeof value === 'number';
	  },
	  object: function object(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && !!value.match(pattern.email);
	  },
	  url: function url(value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	  }
	};

	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    (0, _required2["default"])(rule, value, source, errors, options);
	    return;
	  }
	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;
	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	    }
	    // straight typeof check
	  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
	    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	}

	exports["default"] = type;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(3);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(util.format(options.messages.whitespace, rule.fullField));
	  }
	}

	exports["default"] = whitespace;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates an array.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, 'array');
	    if (!(0, _util.isEmptyValue)(value, 'array')) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = array;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(3);

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a boolean.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = boolean;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function date(rule, value, callback, source, options) {
	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  // console.log('validate on %s value', value);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      if (value) {
	        _rule2["default"].range(rule, value.getTime(), source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}

	exports["default"] = date;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var ENUM = 'enum';

	/**
	 *  Validates an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value) {
	      _rule2["default"][ENUM](rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = enumerable;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number is a floating point number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = floatFn;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  string: __webpack_require__(100),
	  method: __webpack_require__(94),
	  number: __webpack_require__(95),
	  "boolean": __webpack_require__(88),
	  regexp: __webpack_require__(98),
	  integer: __webpack_require__(93),
	  "float": __webpack_require__(91),
	  array: __webpack_require__(87),
	  object: __webpack_require__(96),
	  "enum": __webpack_require__(90),
	  pattern: __webpack_require__(97),
	  email: __webpack_require__(37),
	  url: __webpack_require__(37),
	  date: __webpack_require__(89),
	  hex: __webpack_require__(37),
	  required: __webpack_require__(99)
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number is an integer.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = integer;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a function.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = method;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = number;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates an object.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = object;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a regular expression pattern.
	 *
	 *  Performs validation when a rule only contains
	 *  a pattern property but is not declared as a string type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2["default"].pattern(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = pattern;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates the regular expression type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = regexp;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  _rule2["default"].required(rule, value, source, errors, options, type);
	  callback(errors);
	}

	exports["default"] = required;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(4);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Performs validation for string types.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, 'string');
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	      _rule2["default"].pattern(rule, value, source, errors, options);
	      if (rule.whitespace === true) {
	        _rule2["default"].whitespace(rule, value, source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}

	exports["default"] = string;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Alert = undefined;

	var _alert = __webpack_require__(286);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Alert = _alert2.default;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BreadcrumbItem = exports.Breadcrumbs = undefined;

	var _breadcrumbs = __webpack_require__(288);

	var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

	var _breadcrumbItem = __webpack_require__(287);

	var _breadcrumbItem2 = _interopRequireDefault(_breadcrumbItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Breadcrumbs = _breadcrumbs2.default;
	exports.BreadcrumbItem = _breadcrumbItem2.default;

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function sameAs(name) {
	  return function (rule, value, callback, source, options) {
	    if (value === source[name]) {
	      callback();
	    } else {
	      callback(new Error(options.messages.sameAs || 'Provided password does not match'));
	    }
	  };
	}

	exports.sameAs = sameAs;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HelpText = exports.Label = exports.FormGroup = exports.Form = exports.InputNumber = exports.InputGroup = exports.Input = exports.Cascader = exports.TreeSelect = exports.Option = exports.Select = exports.Rangepicker = exports.Datepicker = exports.Slider = exports.Switch = exports.RadioGroup = exports.Radio = exports.CheckboxGroup = exports.Checkbox = undefined;

	var _checkbox = __webpack_require__(75);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _checkboxGroup = __webpack_require__(293);

	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

	var _radio = __webpack_require__(77);

	var _radio2 = _interopRequireDefault(_radio);

	var _radioGroup = __webpack_require__(305);

	var _radioGroup2 = _interopRequireDefault(_radioGroup);

	var _switch = __webpack_require__(310);

	var _switch2 = _interopRequireDefault(_switch);

	var _slider = __webpack_require__(309);

	var _slider2 = _interopRequireDefault(_slider);

	var _datepicker = __webpack_require__(294);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _rangepicker = __webpack_require__(296);

	var _rangepicker2 = _interopRequireDefault(_rangepicker);

	var _select = __webpack_require__(306);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(78);

	var _option2 = _interopRequireDefault(_option);

	var _treeSelect = __webpack_require__(312);

	var _treeSelect2 = _interopRequireDefault(_treeSelect);

	var _cascader = __webpack_require__(292);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _input = __webpack_require__(303);

	var _input2 = _interopRequireDefault(_input);

	var _inputGroup = __webpack_require__(301);

	var _inputGroup2 = _interopRequireDefault(_inputGroup);

	var _inputNumber = __webpack_require__(302);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _form = __webpack_require__(298);

	var _form2 = _interopRequireDefault(_form);

	var _formGroup = __webpack_require__(297);

	var _formGroup2 = _interopRequireDefault(_formGroup);

	var _label = __webpack_require__(304);

	var _label2 = _interopRequireDefault(_label);

	var _helpText = __webpack_require__(299);

	var _helpText2 = _interopRequireDefault(_helpText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Checkbox = _checkbox2.default;
	exports.CheckboxGroup = _checkboxGroup2.default;
	exports.Radio = _radio2.default;
	exports.RadioGroup = _radioGroup2.default;
	exports.Switch = _switch2.default;
	exports.Slider = _slider2.default;
	exports.Datepicker = _datepicker2.default;
	exports.Rangepicker = _rangepicker2.default;
	exports.Select = _select2.default;
	exports.Option = _option2.default;
	exports.TreeSelect = _treeSelect2.default;
	exports.Cascader = _cascader2.default;
	exports.Input = _input2.default;
	exports.InputGroup = _inputGroup2.default;
	exports.InputNumber = _inputNumber2.default;
	exports.Form = _form2.default;
	exports.FormGroup = _formGroup2.default;
	exports.Label = _label2.default;
	exports.HelpText = _helpText2.default;

/***/ },
/* 105 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMousePosition = getMousePosition;
	exports.pauseEvent = pauseEvent;
	exports.isTouchEvent = isTouchEvent;
	exports.getTouchPosition = getTouchPosition;
	function getMousePosition(event) {
	  return event.pageX;
	}

	function pauseEvent(event) {
	  event.stopPropagation();
	  event.preventDefault();
	}

	function isTouchEvent(event) {
	  return event.touches.length === 1 || event.type.toLowerCase() === 'touchend' && event.touches.length === 0;
	}

	function getTouchPosition(event) {
	  return event.touches[0].pageX;
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  props: {
	    validatable: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      validation: {
	        status: null,

	        message: null
	      }
	    };
	  },


	  methods: {
	    getValue: function getValue() {
	      return this.value;
	    },
	    setError: function setError(status, message) {
	      this.validation.status = status;
	      this.validation.message = message;
	    },
	    setValue: function setValue(value) {
	      this.value = value;
	    }
	  },

	  created: function created() {
	    if (this.validatable) {
	      if (this.name == null) {
	        return;
	      }
	      this.$dispatch('validatable:created', this);
	    }
	  }
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cell = exports.Grid = undefined;

	var _grid = __webpack_require__(315);

	var _grid2 = _interopRequireDefault(_grid);

	var _cell = __webpack_require__(314);

	var _cell2 = _interopRequireDefault(_cell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Grid = _grid2.default;
	exports.Cell = _cell2.default;

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  '500px': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1401 1547l-6 6q-113 114-259 175-154 64-317 64-165 0-317-64-148-63-259-175-113-112-175-258-42-103-54-189-4-28 48-36 51-8 56 20 1 1 1 4 18 90 46 159 50 124 152 226 98 98 226 152 132 56 276 56 143 0 276-56 128-55 225-152l6-6q10-10 25-6 12 3 33 22 36 37 17 58zM929 932l-66 66 63 63q21 21-7 49-17 17-32 17-10 0-19-10l-62-61-66 66q-5 5-15 5-15 0-31-16l-2-2q-18-15-18-29 0-7 8-17l66-65-66-66q-16-16 14-45 18-18 31-18 6 0 13 5l65 66 65-65q18-17 48 13 27 27 11 44zM1400 989q0 118-46 228-45 105-126 186-80 80-187 126t-228 46-228-46-187-126q-82-82-125-186-15-32-15-40h-1q-9-27 43-44 50-16 60 12 37 99 97 167h1v-339-2q3-136 102-232 105-103 253-103 147 0 251 103t104 249q0 147-104.5 251t-250.5 104q-58 0-112-16-28-11-13-61 16-51 44-43l14 3q14 3 32.5 6t30.5 3q104 0 176-71.5t72-174.5q0-101-72-171-71-71-175-71-107 0-178 80-64 72-64 160v413q110 67 242 67 96 0 185-36.5t156-103.5 103.5-155 36.5-183q0-198-141-339-140-140-339-140-200 0-340 140-53 53-77 87l-2 2q-8 11-13 15.5t-21.5 9.5-38.5-3q-21-5-36.5-16.5t-15.5-26.5v-680q0-15 10.5-26.5t27.5-11.5h877q30 0 30 55t-30 55h-811v483h1q40-42 102-84t108-61q109-46 231-46 121 0 228 46t187 126q81 81 126 186 46 112 46 229zM1369 408q9 8 9 18t-5.5 18-16.5 21q-26 26-39 26-9 0-16-7-106-91-207-133-128-56-276-56-133 0-262 49-27 10-45-37-9-25-8-38 3-16 16-20 130-57 299-57 164 0 316 64 137 58 235 152z'
	  },
	  'adjust': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 1440v-1088q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'adn': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 622l201 306h-402zM1133 1152h94l-459-691-459 691h94l104-160h522zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'align-center': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1408 960v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zM1664 576v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1280 192v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z'
	  },
	  'align-justify': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 960v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 576v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 192v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z'
	  },
	  'align-left': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1408 960v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zM1664 576v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1280 192v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z'
	  },
	  'align-right': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 960v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zM1792 576v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1792 192v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z'
	  },
	  'amazon': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zM1758 1361q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 0.5h-5.5-4.5t-3-0.5-2-1.5l-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zM1364 918q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zM692 939q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z'
	  },
	  'ambulance': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M640 1408q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM256 896h384v-256h-158q-14 2-22 9l-195 195q-7 12-9 22v30zM1536 1408q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1664 736v-192q0-14-9-23t-23-9h-224v-224q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v224h-224q-14 0-23 9t-9 23v192q0 14 9 23t23 9h224v224q0 14 9 23t23 9h192q14 0 23-9t9-23v-224h224q14 0 23-9t9-23zM1920 192v1152q0 26-19 45t-45 19h-192q0 106-75 181t-181 75-181-75-75-181h-384q0 106-75 181t-181 75-181-75-75-181h-128q-26 0-45-19t-19-45 19-45 45-19v-416q0-26 13-58t32-51l198-198q19-19 51-32t58-13h160v-320q0-26 19-45t45-19h1152q26 0 45 19t19 45z'
	  },
	  'anchor': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1792 1184v352q0 22-20 30-8 2-12 2-13 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z'
	  },
	  'android': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M493 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zM915 483q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zM103 667q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zM1163 686v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zM931 281q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zM1408 769v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z'
	  },
	  'angellist': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M953 378l-114 328 117 21q165-451 165-518 0-56-38-56-57 0-130 225zM654 1065l33 88q37-42 71-67l-33-5.5t-38.5-7-32.5-8.5zM362 169q0 98 159 521 18-10 49-10 15 0 75 5l-121-351q-75-220-123-220-19 0-29 17.5t-10 37.5zM283 928q0 36 51.5 119t117.5 153 100 70q14 0 25.5-13t11.5-27q0-24-32-102-13-32-32-72t-47.5-89-61.5-81-62-32q-20 0-45.5 27t-25.5 47zM125 1263q0 41 25 104 59 145 183.5 227t281.5 82q227 0 382-170 152-169 152-427 0-43-1-67t-11.5-62-30.5-56q-56-49-211.5-75.5t-270.5-26.5q-37 0-49 11-12 5-12 35 0 34 21.5 60t55.5 40 77.5 23.5 87.5 11.5 85 4 70 0h23q24 0 40 19 15 19 19 55-28 28-96 54-61 22-93 46-64 46-108.5 114t-44.5 137q0 31 18.5 88.5t18.5 87.5l-3 12q-4 12-4 14-137-10-146-216-8 2-41 2 2 7 2 21 0 53-40.5 89.5t-94.5 36.5q-82 0-166.5-78t-84.5-159q0-34 33-67 52 64 60 76 77 104 133 104 12 0 26.5-8.5t14.5-20.5q0-34-87.5-145t-116.5-111q-43 0-70 44.5t-27 90.5zM11 1272q0-101 42.5-163t136.5-88q-28-74-28-104 0-62 61-123t122-61q29 0 70 15-163-462-163-567 0-80 41-130.5t119-50.5q131 0 325 581 6 17 8 23 6-16 29-79.5t43.5-118.5 54-127.5 64.5-123 70.5-86.5 76.5-36q71 0 112 49t41 122q0 108-159 550 61 15 100.5 46t58.5 78 26 93.5 7 110.5q0 150-47 280t-132 225-211 150-278 55q-111 0-223-42-149-57-258-191.5t-109-286.5z'
	  },
	  'angle-double-down': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M1075 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zM1075 480q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z'
	  },
	  'angle-double-left': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M627 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zM1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z'
	  },
	  'angle-double-right': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zM979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z'
	  },
	  'angle-double-up': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M1075 1312q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23zM1075 928q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z'
	  },
	  'angle-down': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M1075 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z'
	  },
	  'angle-left': {
	    'width': 640,
	    'height': 1792,
	    'd': 'M627 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z'
	  },
	  'angle-right': {
	    'width': 640,
	    'height': 1792,
	    'd': 'M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z'
	  },
	  'angle-up': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M1075 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z'
	  },
	  'apple': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1393 1215q-39 125-123 250-129 196-257 196-49 0-140-32-86-32-151-32-61 0-142 33-81 34-132 34-152 0-301-259-147-261-147-503 0-228 113-374 112-144 284-144 72 0 177 30 104 30 138 30 45 0 143-34 102-34 173-34 119 0 213 65 52 36 104 100-79 67-114 118-65 94-65 207 0 124 69 223t158 126zM1017 42q0 61-29 136-30 75-93 138-54 54-108 72-37 11-104 17 3-149 78-257 74-107 250-148 1 3 2.5 11t2.5 11q0 4 0.5 10t0.5 10z'
	  },
	  'archive': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1088 832q0-26-19-45t-45-19h-256q-26 0-45 19t-19 45 19 45 45 19h256q26 0 45-19t19-45zM1664 640v960q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-960q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1728 192v256q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1536q26 0 45 19t19 45z'
	  },
	  'area-chart': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M2048 1536v128h-2048v-1536h128v1408h1920zM1664 512l256 896h-1664v-576l448-576 576 576z'
	  },
	  'arrow-circle-down': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1284 897q0-27-18-45l-91-91q-18-18-45-18t-45 18l-189 189v-502q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v502l-189-189q-19-19-45-19t-45 19l-91 91q-18 18-18 45t18 45l362 362 91 91q18 18 45 18t45-18l91-91 362-362q18-18 18-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'arrow-circle-left': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 960v-128q0-26-19-45t-45-19h-502l189-189q19-19 19-45t-19-45l-91-91q-18-18-45-18t-45 18l-362 362-91 91q-18 18-18 45t18 45l91 91 362 362q18 18 45 18t45-18l91-91q18-18 18-45t-18-45l-189-189h502q26 0 45-19t19-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'arrow-circle-o-down': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1120 928q0 12-10 24l-319 319q-11 9-23 9t-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-352q0-14 9-23t23-9h192q14 0 23 9t9 23v352h192q14 0 23 9t9 23zM768 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'arrow-circle-o-left': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1152 800v192q0 13-9.5 22.5t-22.5 9.5h-352v192q0 14-9 23t-23 9q-12 0-24-10l-319-319q-9-9-9-23t9-23l320-320q9-9 23-9 13 0 22.5 9.5t9.5 22.5v192h352q13 0 22.5 9.5t9.5 22.5zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'arrow-circle-o-right': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1152 896q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'arrow-circle-o-up': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1118 876q-8 20-30 20h-192v352q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-352h-192q-14 0-23-9t-9-23q0-12 10-24l319-319q11-9 23-9t23 9l320 320q15 16 7 35zM768 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'arrow-circle-right': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1285 896q0-27-18-45l-91-91-362-362q-18-18-45-18t-45 18l-91 91q-18 18-18 45t18 45l189 189h-502q-26 0-45 19t-19 45v128q0 26 19 45t45 19h502l-189 189q-19 19-19 45t19 45l91 91q18 18 45 18t45-18l362-362 91-91q18-18 18-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'arrow-circle-up': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1284 895q0-27-18-45l-362-362-91-91q-18-18-45-18t-45 18l-91 91-362 362q-18 18-18 45t18 45l91 91q18 18 45 18t45-18l189-189v502q0 26 19 45t45 19h128q26 0 45-19t19-45v-502l189 189q19 19 45 19t45-19l91-91q18-18 18-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'arrow-down': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1611 832q0 53-37 90l-651 652q-39 37-91 37-53 0-90-37l-651-652q-38-36-38-90 0-53 38-91l74-75q39-37 91-37 53 0 90 37l294 294v-704q0-52 38-90t90-38h128q52 0 90 38t38 90v704l294-294q37-37 90-37 52 0 91 37l75 75q37 39 37 91z'
	  },
	  'arrow-left': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z'
	  },
	  'arrow-right': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1472 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z'
	  },
	  'arrow-up': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1611 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z'
	  },
	  'arrows-alt': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1283 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z'
	  },
	  'arrows-h': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z'
	  },
	  'arrows-v': {
	    'width': 768,
	    'height': 1792,
	    'd': 'M704 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z'
	  },
	  'arrows': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z'
	  },
	  'asterisk': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1482 1050q46 26 59.5 77.5t-12.5 97.5l-64 110q-26 46-77.5 59.5t-97.5-12.5l-266-153v307q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-307l-266 153q-46 26-97.5 12.5t-77.5-59.5l-64-110q-26-46-12.5-97.5t59.5-77.5l266-154-266-154q-46-26-59.5-77.5t12.5-97.5l64-110q26-46 77.5-59.5t97.5 12.5l266 153v-307q0-52 38-90t90-38h128q52 0 90 38t38 90v307l266-153q46-26 97.5-12.5t77.5 59.5l64 110q26 46 12.5 97.5t-59.5 77.5l-266 154z'
	  },
	  'at': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M972 775q0-108-53.5-169t-147.5-61q-63 0-124 30.5t-110 84.5-79.5 137-30.5 180q0 112 53.5 173t150.5 61q96 0 176-66.5t122.5-166 42.5-203.5zM1536 896q0 111-37 197t-98.5 135-131.5 74.5-145 27.5q-6 0-15.5 0.5t-16.5 0.5q-95 0-142-53-28-33-33-83-52 66-131.5 110t-173.5 44q-161 0-249.5-95.5t-88.5-269.5q0-157 66-290t179-210.5 246-77.5q87 0 155 35.5t106 99.5l2-19 11-56q1-6 5.5-12t9.5-6h118q5 0 13 11 5 5 3 16l-120 614q-5 24-5 48 0 39 12.5 52t44.5 13q28-1 57-5.5t73-24 77-50 57-89.5 24-137q0-292-174-466t-466-174q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51q228 0 405-144 11-9 24-8t21 12l41 49q8 12 7 24-2 13-12 22-102 83-227.5 128t-258.5 45q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q344 0 556 212t212 556z'
	  },
	  'automobile': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M480 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zM516 768h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zM1888 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zM2048 992v384q0 14-9 23t-23 9h-96v128q0 80-56 136t-136 56-136-56-56-136v-128h-1024v128q0 80-56 136t-136 56-136-56-56-136v-128h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h768q98 0 179 63.5t104 157.5l105 419h28q93 0 158.5 65.5t65.5 158.5z'
	  },
	  'backward': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1619 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-8-9-13-19v710q0 26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19 32-13t13 32v710q5-11 13-19z'
	  },
	  'balance-scale': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1728 448l-384 704h768zM448 448l-384 704h768zM1269 256q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zM1088 272q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zM2176 1152q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zM896 1152q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z'
	  },
	  'ban': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1312 893q0-161-87-295l-754 753q137 89 297 89 111 0 211.5-43.5t173.5-116.5 116-174.5 43-212.5zM313 1192l755-754q-135-91-300-91-148 0-273 73t-198 199-73 274q0 162 89 299zM1536 893q0 157-61 300t-163.5 246-245 164-298.5 61-298.5-61-245-164-163.5-246-61-300 61-299.5 163.5-245.5 245-164 298.5-61 298.5 61 245 164 163.5 245.5 61 299.5z'
	  },
	  'bank': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zM256 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zM1851 1600q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z'
	  },
	  'bar-chart-o': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M640 896v512h-256v-512h256zM1024 384v1024h-256v-1024h256zM2048 1536v128h-2048v-1536h128v1408h1920zM1408 640v768h-256v-768h256zM1792 256v1152h-256v-1152h256z'
	  },
	  'bar-chart': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M640 896v512h-256v-512h256zM1024 384v1024h-256v-1024h256zM2048 1536v128h-2048v-1536h128v1408h1920zM1408 640v768h-256v-768h256zM1792 256v1152h-256v-1152h256z'
	  },
	  'barcode': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M63 1536h-63v-1408h63v1408zM126 1535h-32v-1407h32v1407zM220 1535h-31v-1407h31v1407zM377 1535h-31v-1407h31v1407zM534 1535h-62v-1407h62v1407zM660 1535h-31v-1407h31v1407zM723 1535h-31v-1407h31v1407zM786 1535h-31v-1407h31v1407zM943 1535h-63v-1407h63v1407zM1100 1535h-63v-1407h63v1407zM1226 1535h-63v-1407h63v1407zM1352 1535h-63v-1407h63v1407zM1446 1535h-63v-1407h63v1407zM1635 1535h-94v-1407h94v1407zM1698 1535h-32v-1407h32v1407zM1792 1536h-63v-1408h63v1408z'
	  },
	  'bars': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 832v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 320v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'
	  },
	  'battery-0': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z'
	  },
	  'battery-1': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M256 1280v-768h512v768h-512zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z'
	  },
	  'battery-2': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M256 1280v-768h896v768h-896zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z'
	  },
	  'battery-3': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M256 1280v-768h1280v768h-1280zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z'
	  },
	  'battery-4': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1920 512v768h-1664v-768h1664zM2048 1088h128v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288zM2304 704v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160q53 0 90.5 37.5t37.5 90.5z'
	  },
	  'battery-empty': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z'
	  },
	  'battery-full': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1920 512v768h-1664v-768h1664zM2048 1088h128v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288zM2304 704v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160q53 0 90.5 37.5t37.5 90.5z'
	  },
	  'battery-half': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M256 1280v-768h896v768h-896zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z'
	  },
	  'battery-quarter': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M256 1280v-768h512v768h-512zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z'
	  },
	  'battery-three-quarters': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M256 1280v-768h1280v768h-1280zM2176 576q53 0 90.5 37.5t37.5 90.5v384q0 53-37.5 90.5t-90.5 37.5v160q0 66-47 113t-113 47h-1856q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1856q66 0 113 47t47 113v160zM2176 1088v-384h-128v-288q0-14-9-23t-23-9h-1856q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23v-288h128z'
	  },
	  'bed': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M256 1024h1728q26 0 45 19t19 45v448h-256v-256h-1536v256h-256v-1216q0-26 19-45t45-19h128q26 0 45 19t19 45v704zM832 704q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM2048 960v-64q0-159-112.5-271.5t-271.5-112.5h-704q-26 0-45 19t-19 45v384h1152z'
	  },
	  'beer': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M640 896v-384h-256v256q0 53 37.5 90.5t90.5 37.5h128zM1664 1344v192h-1152v-192l128-192h-128q-159 0-271.5-112.5t-112.5-271.5v-320l-64-64 32-128h480l32-128h960l32 192-64 32v800z'
	  },
	  'behance-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zM499 495h-371v787h382q117 0 197-57.5t80-170.5q0-158-143-200 107-52 107-164 0-57-19.5-96.5t-56.5-60.5-79-29.5-97-8.5zM477 813h-176v-184h163q119 0 119 90 0 94-106 94zM486 1148h-185v-217h189q124 0 124 113 0 104-128 104zM1136 1180q-68 0-104-38t-36-107h411q1-10 1-30 0-132-74.5-220.5t-203.5-88.5q-128 0-210 86t-82 216q0 135 79 217t213 82q205 0 267-191h-138q-11 34-47.5 54t-75.5 20zM1126 814q113 0 124 122h-254q4-56 39-89t91-33zM964 548h319v77h-319v-77z'
	  },
	  'behance': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1848 339h-511v124h511v-124zM1596 765q-90 0-146 52.5t-62 142.5h408q-18-195-200-195zM1612 1350q63 0 122-32t76-87h221q-100 307-427 307-214 0-340.5-132t-126.5-347q0-208 130.5-345.5t336.5-137.5q138 0 240.5 68t153 179 50.5 248q0 17-2 47h-658q0 111 57.5 171.5t166.5 60.5zM277 1300h296q205 0 205-167 0-180-199-180h-302v347zM277 763h281q78 0 123.5-36.5t45.5-113.5q0-144-190-144h-260v294zM0 254h594q87 0 155 14t126.5 47.5 90 96.5 31.5 154q0 181-172 263 114 32 172 115t58 204q0 75-24.5 136.5t-66 103.5-98.5 71-121 42-134 13h-611v-1260z'
	  },
	  'bell-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zM246 1408h1300q-266-300-266-832 0-51-24-105t-69-103-121.5-80.5-169.5-31.5-169.5 31.5-121.5 80.5-69 103-24 105q0 532-266 832zM1728 1408q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z'
	  },
	  'bell-slash-o': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1040 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zM503 1221l877-760q-42-88-132.5-146.5t-223.5-58.5q-93 0-169.5 31.5t-121.5 80.5-69 103-24 105q0 384-137 645zM1856 1408q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-180.5-74.5-75.5-180.5l149-129h757q-166-187-227-459l111-97q61 356 298 556zM1942 16l84 96q8 10 7.5 23.5t-10.5 22.5l-1872 1622q-10 8-23.5 7t-21.5-11l-84-96q-8-10-7.5-23.5t10.5-21.5l186-161q-19-32-19-66 50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 124 18 219 82.5t148 157.5l418-363q10-8 23.5-7t21.5 11z'
	  },
	  'bell-slash': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1558 852q61 356 298 556 0 52-38 90t-90 38h-448q0 106-75 181t-181 75-180.5-74.5-75.5-180.5zM1024 1712q16 0 16-16t-16-16q-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5zM2026 112q8 10 7.5 23.5t-10.5 22.5l-1872 1622q-10 8-23.5 7t-21.5-11l-84-96q-8-10-7.5-23.5t10.5-21.5l186-161q-19-32-19-66 50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 124 18 219 82.5t148 157.5l418-363q10-8 23.5-7t21.5 11z'
	  },
	  'bell': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zM1728 1408q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z'
	  },
	  'bicycle': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M762 1152h-314q-40 0-57.5-35t6.5-67l188-251q-65-31-137-31-132 0-226 94t-94 226 94 226 226 94q115 0 203-72.5t111-183.5zM576 1024h186q-18-85-75-148zM1056 1024l288-384h-480l-99 132q105 103 126 252h165zM2176 1088q0-132-94-226t-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94 226-94 94-226zM2304 1088q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-97 39.5-183.5t109.5-149.5l-65-98-353 469q-18 26-51 26h-197q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q114 0 215 55l137-183h-224q-26 0-45-19t-19-45 19-45 45-19h384v128h435l-85-128h-222q-26 0-45-19t-19-45 19-45 45-19h256q33 0 53 28l267 400q91-44 192-44 185 0 316.5 131.5t131.5 316.5z'
	  },
	  'binoculars': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M704 320v768q0 26-19 45t-45 19v576q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-512l249-873q7-23 31-23h424zM1024 320v704h-256v-704h256zM1792 1216v512q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-576q-26 0-45-19t-19-45v-768h424q24 0 31 23zM736 32v224h-352v-224q0-14 9-23t23-9h288q14 0 23 9t9 23zM1408 32v224h-352v-224q0-14 9-23t23-9h288q14 0 23 9t9 23z'
	  },
	  'birthday-cake': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1408v384h-1792v-384q45 0 85-14t59-27.5 47-37.5q30-27 51.5-38t56.5-11 55.5 11 52.5 38q29 25 47 38t58 27 86 14q45 0 85-14.5t58-27 48-37.5q21-19 32.5-27t31-15 43.5-7q35 0 56.5 11t51.5 38q28 24 47 37.5t59 27.5 85 14 85-14 59-27.5 47-37.5q30-27 51.5-38t56.5-11q34 0 55.5 11t51.5 38q28 24 47 37.5t59 27.5 85 14zM1792 1088v192q-35 0-55.5-11t-52.5-38q-29-25-47-38t-58-27-85-14q-46 0-86 14t-58 27-47 38q-22 19-33 27t-31 15-44 7q-35 0-56.5-11t-51.5-38q-29-25-47-38t-58-27-86-14q-45 0-85 14.5t-58 27-48 37.5q-21 19-32.5 27t-31 15-43.5 7q-35 0-56.5-11t-51.5-38q-28-24-47-37.5t-59-27.5-85-14q-46 0-86 14t-58 27-47 38q-30 27-51.5 38t-56.5 11v-192q0-80 56-136t136-56h64v-448h256v448h256v-448h256v448h256v-448h256v448h64q80 0 136 56t56 136zM512 224q0 77-36 118.5t-92 41.5q-53 0-90.5-37.5t-37.5-90.5q0-29 9.5-51t23.5-34 31-28 31-31.5 23.5-44.5 9.5-67q38 0 83 74t45 150zM1024 224q0 77-36 118.5t-92 41.5q-53 0-90.5-37.5t-37.5-90.5q0-29 9.5-51t23.5-34 31-28 31-31.5 23.5-44.5 9.5-67q38 0 83 74t45 150zM1536 224q0 77-36 118.5t-92 41.5q-53 0-90.5-37.5t-37.5-90.5q0-29 9.5-51t23.5-34 31-28 31-31.5 23.5-44.5 9.5-67q38 0 83 74t45 150z'
	  },
	  'bitbucket-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M848 870q0-43-41-66t-77-1q-43 20-42.5 72.5t43.5 70.5q39 23 81-4t36-72zM928 854q8 66-36 121t-110 61-119-40-56-113q-2-49 25.5-93t72.5-64q70-31 141.5 10t81.5 118zM1100 463q-20 21-53.5 34t-53 16-63.5 8q-155 20-324 0-44-6-63-9.5t-52.5-16-54.5-32.5q13-19 36-31t40-15.5 47-8.5q198-35 408-1 33 5 51 8.5t43 16 39 31.5zM1142 1209q0-7 5.5-26.5t3-32-17.5-16.5q-161 106-365 106t-366-106l-12 6-5 12q26 154 41 210 47 81 204 108 249 46 428-53 34-19 49-51.5t22.5-85.5 12.5-71zM1272 516q9-53-8-75-43-55-155-88-216-63-487-36-132 12-226 46-38 15-59.5 25t-47 34-29.5 54q8 68 19 138t29 171 24 137q1 5 5 31t7 36 12 27 22 28q105 80 284 100 259 28 440-63 24-13 39.5-23t31-29 19.5-40q48-267 80-473zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'bitbucket': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M815 859q8 63-50.5 101t-111.5 6q-39-17-53.5-58t-0.5-82 52-58q36-18 72.5-12t64 35.5 27.5 67.5zM926 838q-14-107-113-164t-197-13q-63 28-100.5 88.5t-34.5 129.5q4 91 77.5 155t165.5 56q91-8 152-84t50-168zM1165 296q-20-27-56-44.5t-58-22-71-12.5q-291-47-566 2-43 7-66 12t-55 22-50 43q30 28 76 45.5t73.5 22 87.5 11.5q228 29 448 1 63-8 89.5-12t72.5-21.5 75-46.5zM1222 1331q-8 26-15.5 76.5t-14 84-28.5 70-58 56.5q-86 48-189.5 71.5t-202 22-201.5-18.5q-46-8-81.5-18t-76.5-27-73-43.5-52-61.5q-25-96-57-292l6-16 18-9q223 148 506.5 148t507.5-148q21 6 24 23t-5 45-8 37zM1403 370q-26 167-111 655-5 30-27 56t-43.5 40-54.5 31q-252 126-610 88-248-27-394-139-15-12-25.5-26.5t-17-35-9-34-6-39.5-5.5-35q-9-50-26.5-150t-28-161.5-23.5-147.5-22-158q3-26 17.5-48.5t31.5-37.5 45-30 46-22.5 48-18.5q125-46 313-64 379-37 676 50 155 46 215 122 16 20 16.5 51t-5.5 54z'
	  },
	  'bitcoin': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1167 640q18 182-131 258 117 28 175 103t45 214q-7 71-32.5 125t-64.5 89-97 58.5-121.5 34.5-145.5 15v255h-154v-251q-80 0-122-1v252h-154v-255q-18 0-54-0.5t-55-0.5h-200l31-183h111q50 0 58-51v-402h16q-6-1-16-1v-287q-13-68-89-68h-111v-164l212 1q64 0 97-1v-252h154v247q82-2 122-2v-245h154v252q79 7 140 22.5t113 45 82.5 78 36.5 114.5zM952 1185q0-36-15-64t-37-46-57.5-30.5-65.5-18.5-74-9-69-3-64.5 1-47.5 1v338q8 0 37 0.5t48 0.5 53-1.5 58.5-4 57-8.5 55.5-14 47.5-21 39.5-30 24.5-40 9.5-51zM881 709q0-33-12.5-58.5t-30.5-42-48-28-55-16.5-61.5-8-58-2.5-54 1-39.5 0.5v307q5 0 34.5 0.5t46.5 0 50-2 55-5.5 51.5-11 48.5-18.5 37-27 27-38.5 9-51z'
	  },
	  'black-tie': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M0 128h1536v1536h-1536v-1536zM1085 1243l-221-631 221-297h-634l221 297-221 631 317 304z'
	  },
	  'bluetooth-b': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M596 1423l173-172-173-172v344zM596 713l173-172-173-172v344zM628 896l356 356-539 540v-711l-297 296-108-108 372-373-372-373 108-108 297 296v-711l539 540z'
	  },
	  'bluetooth': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M841 1053l148 148-149 149zM840 442l149 149-148 148zM710 1666l464-464-306-306 306-306-464-464v611l-255-255-93 93 320 321-320 321 93 93 255-255v611zM1429 896q0 209-32 365.5t-87.5 257-140.5 162.5-181.5 86.5-219.5 24.5-219.5-24.5-181.5-86.5-140.5-162.5-87.5-257-32-365.5 32-365.5 87.5-257 140.5-162.5 181.5-86.5 219.5-24.5 219.5 24.5 181.5 86.5 140.5 162.5 87.5 257 32 365.5z'
	  },
	  'bold': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M555 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-0.5 159t-0.5 158q0 8-1 67.5t-0.5 96.5 4.5 83.5 12 66.5zM541 775q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-0.5 80t-0.5 79q0 46 1 69zM0 1664l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5 0.5-34v-35.5-30q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5 0.5t67.5 0.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z'
	  },
	  'bolt': {
	    'width': 896,
	    'height': 1792,
	    'd': 'M885 566q18 20 7 44l-540 1157q-13 25-42 25-4 0-14-2-17-5-25.5-19t-4.5-30l197-808-406 101q-4 1-12 1-18 0-31-11-18-15-13-39l201-825q4-14 16-23t28-9h328q19 0 32 12.5t13 29.5q0 8-5 18l-171 463 396-98q8-2 12-2 19 0 34 15z'
	  },
	  'bomb': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M571 589q-10-25-34-35t-49 0q-108 44-191 127t-127 191q-10 25 0 49t35 34q13 5 24 5 42 0 60-40 34-84 98.5-148.5t148.5-98.5q25-11 35-35t0-49zM1513 233l46 46-244 243 68 68q19 19 19 45.5t-19 45.5l-64 64q89 161 89 343 0 143-55.5 273.5t-150 225-225 150-273.5 55.5-273.5-55.5-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5q182 0 343 89l64-64q19-19 45.5-19t45.5 19l68 68zM1521 177q-10 10-22 10-13 0-23-10l-91-90q-9-10-9-23t9-23q10-9 23-9t23 9l90 91q10 9 10 22.5t-10 22.5zM1751 407q-11 9-23 9t-23-9l-90-91q-10-9-10-22.5t10-22.5q9-10 22.5-10t22.5 10l91 90q9 10 9 23t-9 23zM1792 224q0 14-9 23t-23 9h-96q-14 0-23-9t-9-23 9-23 23-9h96q14 0 23 9t9 23zM1600 32v96q0 14-9 23t-23 9-23-9-9-23v-96q0-14 9-23t23-9 23 9 9 23zM1751 87l-91 90q-10 10-22 10-13 0-23-10-10-9-10-22.5t10-22.5l90-91q10-9 23-9t23 9q9 10 9 23t-9 23z'
	  },
	  'book': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1639 478q40 57 18 129l-275 906q-19 64-76.5 107.5t-122.5 43.5h-923q-77 0-148.5-53.5t-99.5-131.5q-24-67-2-127 0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5 16.5-23.5q23-38 45-91.5t30-91.5q3-10 0.5-30t-0.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t0.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 16-36 19.5-32 26.5-23.5 36-11.5 47.5 5.5l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5t-128.5 34.5h-869q-27 0-38 15-11 16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zM575 480q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5zM492 736q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5z'
	  },
	  'bookmark-o': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1152 256h-1024v1242l423-406 89-85 89 85 423 406v-1242zM1164 128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z'
	  },
	  'bookmark': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1164 128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62v-1289q0-34 19.5-62t52.5-41q21-9 44-9h1048z'
	  },
	  'briefcase': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 256h512v-128h-512v128zM1792 896v480q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-480h672v160q0 26 19 45t45 19h320q26 0 45-19t19-45v-160h672zM1024 896v128h-256v-128h256zM1792 416v384h-1792v-384q0-66 47-113t113-47h352v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h352q66 0 113 47t47 113z'
	  },
	  'btc': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1167 640q18 182-131 258 117 28 175 103t45 214q-7 71-32.5 125t-64.5 89-97 58.5-121.5 34.5-145.5 15v255h-154v-251q-80 0-122-1v252h-154v-255q-18 0-54-0.5t-55-0.5h-200l31-183h111q50 0 58-51v-402h16q-6-1-16-1v-287q-13-68-89-68h-111v-164l212 1q64 0 97-1v-252h154v247q82-2 122-2v-245h154v252q79 7 140 22.5t113 45 82.5 78 36.5 114.5zM952 1185q0-36-15-64t-37-46-57.5-30.5-65.5-18.5-74-9-69-3-64.5 1-47.5 1v338q8 0 37 0.5t48 0.5 53-1.5 58.5-4 57-8.5 55.5-14 47.5-21 39.5-30 24.5-40 9.5-51zM881 709q0-33-12.5-58.5t-30.5-42-48-28-55-16.5-61.5-8-58-2.5-54 1-39.5 0.5v307q5 0 34.5 0.5t46.5 0 50-2 55-5.5 51.5-11 48.5-18.5 37-27 27-38.5 9-51z'
	  },
	  'bug': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1632 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13v-896h-128v896q-51 0-101.5-13.5t-87-33-66-39-43.5-32.5l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5t15.5-46.5l202-227q-58-114-58-274h-224q-26 0-45-19t-19-45 19-45 45-19h224v-294l-173-173q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zM1152 384h-640q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5z'
	  },
	  'building-o': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M384 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 544v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 544v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 288v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 544v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 288v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 544v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 288v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 288v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 1664h384v-1536h-1152v1536h384v-224q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v224zM1408 64v1664q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-1664q0-26 19-45t45-19h1280q26 0 45 19t19 45z'
	  },
	  'building': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1344 0q26 0 45 19t19 45v1664q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-1664q0-26 19-45t45-19h1280zM512 288v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM512 544v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM512 800v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM512 1056v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM384 1376v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM384 1120v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM384 864v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM384 608v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM384 352v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM896 1632v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM896 1120v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM896 864v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM896 608v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM896 352v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 1376v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 1120v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 864v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 608v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23zM1152 352v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23z'
	  },
	  'bullhorn': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1664 640q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5v384q0 52-38 90t-90 38q-417-347-812-380-58 19-91 66t-31 100.5 40 92.5q-20 33-23 65.5t6 58 33.5 55 48 50 61.5 50.5q-29 58-111.5 83t-168.5 11.5-132-55.5q-7-23-29.5-87.5t-32-94.5-23-89-15-101 3.5-98.5 22-110.5h-122q-66 0-113-47t-47-113v-192q0-66 47-113t113-47h480q435 0 896-384 52 0 90 38t38 90v384zM1536 1244v-954q-394 302-768 343v270q377 42 768 341z'
	  },
	  'bullseye': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM1152 896q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zM1280 896q0 212-150 362t-362 150-362-150-150-362 150-362 362-150 362 150 150 362zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'bus': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M384 1216q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1408 1216q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1362 820l-72-384q-5-23-22.5-37.5t-40.5-14.5h-918q-23 0-40.5 14.5t-22.5 37.5l-72 384q-5 30 14 53t49 23h1062q30 0 49-23t14-53zM1136 208q0-20-14-34t-34-14h-640q-20 0-34 14t-14 34 14 34 34 14h640q20 0 34-14t14-34zM1536 933v603h-128v128q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-128h-768v128q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5v-128h-128v-603q0-112 25-223l103-454q9-78 97.5-137t230-89 312.5-30 312.5 30 230 89 97.5 137l105 454q23 102 23 223z'
	  },
	  'buysellads': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M915 1086h-294l147-551zM1001 1408h311l-324-1024h-440l-324 1024h311l383-314zM1536 416v960q0 118-85 203t-203 85h-960q-118 0-203-85t-85-203v-960q0-118 85-203t203-85h960q118 0 203 85t85 203z'
	  },
	  'cab': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1824 896q93 0 158.5 65.5t65.5 158.5v384q0 14-9 23t-23 9h-96v64q0 80-56 136t-136 56-136-56-56-136v-64h-1024v64q0 80-56 136t-136 56-136-56-56-136v-64h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h128v-224q0-14 9-23t23-9h448q14 0 23 9t9 23v224h128q98 0 179 63.5t104 157.5l105 419h28zM320 1376q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM516 896h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zM1728 1376q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47z'
	  },
	  'calculator': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M384 1536q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM768 1536q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM384 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1152 1536q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM768 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM384 768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1152 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM768 768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1536 1536v-384q0-52-38-90t-90-38-90 38-38 90v384q0 52 38 90t90 38 90-38 38-90zM1152 768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1536 448v-256q0-26-19-45t-45-19h-1280q-26 0-45 19t-19 45v256q0 26 19 45t45 19h1280q26 0 45-19t19-45zM1536 768q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1664 128v1536q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1536q0-52 38-90t90-38h1408q52 0 90 38t38 90z'
	  },
	  'calendar-check-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1303 964l-512 512q-10 9-23 9t-23-9l-288-288q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l220 220 444-444q10-9 23-9t22 9l46 46q9 9 9 22t-9 23zM128 1664h1408v-1024h-1408v1024zM512 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1280 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z'
	  },
	  'calendar-minus-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1152 1120v64q0 14-9 23t-23 9h-576q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h576q14 0 23 9t9 23zM128 1664h1408v-1024h-1408v1024zM512 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1280 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z'
	  },
	  'calendar-o': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M128 1664h1408v-1024h-1408v1024zM512 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1280 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z'
	  },
	  'calendar-plus-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1536 256q52 0 90 38t38 90v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128zM1152 160v288q0 14 9 23t23 9h64q14 0 23-9t9-23v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM384 160v288q0 14 9 23t23 9h64q14 0 23-9t9-23v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zM1536 1664v-1024h-1408v1024h1408zM896 1088h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h64q14 0 23 9t9 23v224z'
	  },
	  'calendar-times-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1111 1385l-46 46q-9 9-22 9t-23-9l-188-189-188 189q-10 9-23 9t-22-9l-46-46q-9-9-9-22t9-23l189-188-189-188q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l188 188 188-188q10-9 23-9t22 9l46 46q9 9 9 22t-9 23l-188 188 188 188q9 10 9 23t-9 22zM128 1664h1408v-1024h-1408v1024zM512 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1280 448v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z'
	  },
	  'calendar': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M128 1664h288v-288h-288v288zM480 1664h320v-288h-320v288zM128 1312h288v-320h-288v320zM480 1312h320v-320h-320v320zM128 928h288v-288h-288v288zM864 1664h320v-288h-320v288zM480 928h320v-288h-320v288zM1248 1664h288v-288h-288v288zM864 1312h320v-320h-320v320zM512 448v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zM1248 1312h288v-320h-288v320zM864 928h320v-288h-320v288zM1248 928h288v-288h-288v288zM1280 448v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z'
	  },
	  'camera-retro': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M928 832q0-14-9-23t-23-9q-66 0-113 47t-47 113q0 14 9 23t23 9 23-9 9-23q0-40 28-68t68-28q14 0 23-9t9-23zM1152 962q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM128 1536h1536v-128h-1536v128zM1280 962q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zM256 320h384v-128h-384v128zM128 512h1536v-118-138h-828l-64 128h-644v128zM1792 256v1280q0 53-37.5 90.5t-90.5 37.5h-1536q-53 0-90.5-37.5t-37.5-90.5v-1280q0-53 37.5-90.5t90.5-37.5h1536q53 0 90.5 37.5t37.5 90.5z'
	  },
	  'camera': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M960 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zM1664 256q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zM960 1408q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'car': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M480 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zM516 768h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zM1888 1088q0-66-47-113t-113-47-113 47-47 113 47 113 113 47 113-47 47-113zM2048 992v384q0 14-9 23t-23 9h-96v128q0 80-56 136t-136 56-136-56-56-136v-128h-1024v128q0 80-56 136t-136 56-136-56-56-136v-128h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h768q98 0 179 63.5t104 157.5l105 419h28q93 0 158.5 65.5t65.5 158.5z'
	  },
	  'caret-down': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'
	  },
	  'caret-left': {
	    'width': 640,
	    'height': 1792,
	    'd': 'M640 448v896q0 26-19 45t-45 19-45-19l-448-448q-19-19-19-45t19-45l448-448q19-19 45-19t45 19 19 45z'
	  },
	  'caret-right': {
	    'width': 640,
	    'height': 1792,
	    'd': 'M576 896q0 26-19 45l-448 448q-19 19-45 19t-45-19-19-45v-896q0-26 19-45t45-19 45 19l448 448q19 19 19 45z'
	  },
	  'caret-square-o-down': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1145 675q18 35-5 66l-320 448q-19 27-52 27t-52-27l-320-448q-23-31-5-66 17-35 57-35h640q40 0 57 35zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'caret-square-o-left': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 576v640q0 26-19 45t-45 19q-20 0-37-12l-448-320q-27-19-27-52t27-52l448-320q17-12 37-12 26 0 45 19t19 45zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'caret-square-o-right': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1088 896q0 33-27 52l-448 320q-31 23-66 5-35-17-35-57v-640q0-40 35-57 35-18 66 5l448 320q27 19 27 52zM1280 1376v-960q0-14-9-23t-23-9h-960q-14 0-23 9t-9 23v960q0 14 9 23t23 9h960q14 0 23-9t9-23zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'caret-square-o-up': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1145 1117q-17 35-57 35h-640q-40 0-57-35-18-35 5-66l320-448q19-27 52-27t52 27l320 448q23 31 5 66zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'caret-up': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z'
	  },
	  'cart-arrow-down': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1280 704q0-26-19-45t-45-19-45 19l-147 146v-293q0-26-19-45t-45-19-45 19-19 45v293l-147-146q-19-19-45-19t-45 19-19 45 19 45l256 256q19 19 45 19t45-19l256-256q19-19 19-45zM640 1536q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1536 1536q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1664 448v512q0 24-16 42.5t-41 21.5l-1044 122q1 7 4.5 21.5t6 26.5 2.5 22q0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-14 11-39.5t29.5-59.5 20.5-38l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t20 15.5 13 24.5 7.5 26.5 5.5 29.5 4.5 25.5h1201q26 0 45 19t19 45z'
	  },
	  'cart-plus': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1216 704q0-26-19-45t-45-19h-128v-128q0-26-19-45t-45-19-45 19-19 45v128h-128q-26 0-45 19t-19 45 19 45 45 19h128v128q0 26 19 45t45 19 45-19 19-45v-128h128q26 0 45-19t19-45zM640 1536q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1536 1536q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1664 448v512q0 24-16 42.5t-41 21.5l-1044 122q1 7 4.5 21.5t6 26.5 2.5 22q0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-14 11-39.5t29.5-59.5 20.5-38l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t20 15.5 13 24.5 7.5 26.5 5.5 29.5 4.5 25.5h1201q26 0 45 19t19 45z'
	  },
	  'cc-amex': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M119 682h89l-45-108zM740 1208l74-79-70-79h-163v49h142v55h-142v54h159zM898 1130l99 110v-217zM1186 1083q0-33-40-33h-84v69h83q41 0 41-36zM1475 1079q0-29-42-29h-82v61h81q43 0 43-32zM1197 613q0-29-42-29h-82v60h81q43 0 43-31zM1656 682h89l-44-108zM699 527v271h-66v-212l-94 212h-57l-94-212v212h-132l-25-60h-135l-25 60h-70l116-271h96l110 257v-257h106l85 184 77-184h108zM1255 1083q0 20-5.5 35t-14 25-22.5 16.5-26 10-31.5 4.5-31.5 1-32.5-0.5-29.5-0.5v91h-126l-80-90-83 90h-256v-271h260l80 89 82-89h207q109 0 109 89zM964 742v56h-217v-271h217v57h-152v49h148v55h-148v54h152zM2304 1301v229q0 55-38.5 94.5t-93.5 39.5h-2040q-55 0-93.5-39.5t-38.5-94.5v-678h111l25-61h55l25 61h218v-46l19 46h113l20-47v47h541v-99l10-1q10 0 10 14v86h279v-23q23 12 55 18t52.5 6.5 63-0.5 51.5-1l25-61h56l25 61h227v-58l34 58h182v-378h-180v44l-25-44h-185v44l-23-44h-249q-69 0-109 22v-22h-172v22q-24-22-73-22h-628l-43 97-43-97h-198v44l-22-44h-169l-78 179v-391q0-55 38.5-94.5t93.5-39.5h2040q55 0 93.5 39.5t38.5 94.5v678h-120q-51 0-81 22v-22h-177q-55 0-78 22v-22h-316v22q-31-22-87-22h-209v22q-23-22-91-22h-234l-54 58-50-58h-349v378h343l55-59 52 59h211v-89h21q59 0 90-13v102h174v-99h8q8 0 10 2t2 10v87h529q57 0 88-24v24h168q60 0 95-17zM1546 1067q0 23-12 43t-34 29q25 9 34 26t9 46v54h-65v-45q0-33-12-43.5t-46-10.5h-69v99h-65v-271h154q48 0 77 15t29 58zM1269 600q0 24-12.5 44t-33.5 29q26 9 34.5 25.5t8.5 46.5v53h-65q0-9 0.5-26.5t0-25-3-18.5-8.5-16-17.5-8.5-29.5-3.5h-70v98h-64v-271l153 1q49 0 78 14.5t29 57.5zM1798 1209v56h-216v-271h216v56h-151v49h148v55h-148v54zM1372 527v271h-66v-271h66zM2065 1179q0 86-102 86h-126v-58h126q34 0 34-25 0-16-17-21t-41.5-5-49.5-3.5-42-22.5-17-55q0-39 26-60t66-21h130v57h-119q-36 0-36 25 0 16 17.5 20.5t42 4 49 2.5 42 21.5 17.5 54.5zM2304 1129v101q-24 35-88 35h-125v-58h125q33 0 33-25 0-13-12.5-19t-31-5.5-40-2-40-8-31-24-12.5-48.5q0-39 26.5-60t66.5-21h129v57h-118q-36 0-36 25 0 20 29 22t68.5 5 56.5 26zM2139 528v270h-92l-122-203v203h-132l-26-60h-134l-25 60h-75q-129 0-129-133 0-138 133-138h63v59q-7 0-28-1t-28.5-0.5-23 2-21.5 6.5-14.5 13.5-11.5 23-3 33.5q0 38 13.5 58t49.5 20h29l92-213h97l109 256v-256h99l114 188v-188h66z'
	  },
	  'cc-diners-club': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M858 1241v-693q-106 41-172 135.5t-66 211.5 66 211.5 172 134.5zM1362 895q0-117-66-211.5t-172-135.5v694q106-41 172-135.5t66-211.5zM1577 895q0 159-78.5 294t-213.5 213.5-294 78.5q-119 0-227.5-46.5t-187-125-125-187-46.5-227.5q0-159 78.5-294t213.5-213.5 294-78.5 294 78.5 213.5 213.5 78.5 294zM1960 902q0-139-55.5-261.5t-147.5-205.5-213.5-131-252.5-48h-301q-176 0-323.5 81t-235 230-87.5 335q0 171 87 317.5t236 231.5 323 85h301q129 0 251.5-50.5t214.5-135 147.5-202.5 55.5-246zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z'
	  },
	  'cc-discover': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M313 777q0 51-36 84-29 26-89 26h-17v-220h17q61 0 89 27 36 31 36 83zM2089 712q0 52-64 52h-19v-101h20q63 0 63 49zM380 777q0-74-50-120.5t-129-46.5h-95v333h95q74 0 119-38 60-51 60-128zM410 943h65v-333h-65v333zM730 842q0-40-20.5-62t-75.5-42q-29-10-39.5-19t-10.5-23q0-16 13.5-26.5t34.5-10.5q29 0 53 27l34-44q-41-37-98-37-44 0-74 27.5t-30 67.5q0 35 18 55.5t64 36.5q37 13 45 19 19 12 19 34 0 20-14 33.5t-36 13.5q-48 0-71-44l-42 40q44 64 115 64 51 0 83-30.5t32-79.5zM1008 932v-77q-37 37-78 37-49 0-80.5-32.5t-31.5-82.5q0-48 31.5-81.5t77.5-33.5q43 0 81 38v-77q-40-20-80-20-74 0-125.5 50.5t-51.5 123.5 51 123.5 125 50.5q42 0 81-19zM2240 1536v-527q-65 40-144.5 84t-237.5 117-329.5 137.5-417.5 134.5-504 118h1569q26 0 45-19t19-45zM1389 779q0-75-53-128t-128-53-128 53-53 128 53 128 128 53 128-53 53-128zM1541 952l144-342h-71l-90 224-89-224h-71l142 342h35zM1714 943h184v-56h-119v-90h115v-56h-115v-74h119v-57h-184v333zM2105 943h80l-105-140q76-16 76-94 0-47-31-73t-87-26h-97v333h65v-133h9zM2304 262v1268q0 56-38.5 95t-93.5 39h-2040q-55 0-93.5-39t-38.5-95v-1268q0-56 38.5-95t93.5-39h2040q55 0 93.5 39t38.5 95z'
	  },
	  'cc-jcb': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1951 998q0 26-15.5 44.5t-38.5 23.5q-8 2-18 2h-153v-140h153q10 0 18 2 23 5 38.5 23.5t15.5 44.5zM1933 785q0 25-15 42t-38 21q-3 1-15 1h-139v-129h139q3 0 8.5 0.5t6.5 0.5q23 4 38 21.5t15 42.5zM728 949v-308h-228v308q0 58-38 94.5t-105 36.5q-108 0-229-59v112q53 15 121 23t109 9l42 1q328 0 328-217zM1442 1133v-113q-99 52-200 59-108 8-169-41t-61-142 61-142 169-41q101 7 200 58v-112q-48-12-100-19.5t-80-9.5l-28-2q-127-6-218.5 14t-140.5 60-71 88-22 106 22 106 71 88 140.5 60 218.5 14q101-4 208-31zM2176 1018q0-54-43-88.5t-109-39.5v-3q57-8 89-41.5t32-79.5q0-55-41-88t-107-36q-3 0-12-0.5t-14-0.5h-455v510h491q74 0 121.5-36.5t47.5-96.5zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z'
	  },
	  'cc-mastercard': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M671 933h-13q-47 0-47 32 0 22 20 22 17 0 28-15t12-39zM1066 897h62v-3q1-4 0.5-6.5t-1-7-2-8-4.5-6.5-7.5-5-11.5-2q-28 0-36 38zM1606 933h-12q-48 0-48 32 0 22 20 22 17 0 28-15t12-39zM1925 907q0-41-30-41-19 0-31 20t-12 51q0 42 28 42 20 0 32.5-20t12.5-52zM480 766h87l-44 262h-56l32-201-71 201h-39l-4-200-34 200h-53l44-262h81l2 163zM733 873q0 6-4 42-16 101-17 113h-47l1-22q-20 26-58 26-23 0-37.5-16t-14.5-42q0-39 26-60.5t73-21.5q14 0 23 1 0-3 0.5-5.5t1-4.5 0.5-3q0-20-36-20-29 0-59 10 0-4 7-48 38-11 67-11 74 0 74 62zM889 815l-8 49q-22-3-41-3-27 0-27 17 0 8 4.5 12t21.5 11q40 19 40 60 0 72-87 71-34 0-58-6 0-2 7-49 29 8 51 8 32 0 32-19 0-7-4.5-11.5t-21.5-12.5q-43-20-43-59 0-72 84-72 30 0 50 4zM977 815h28l-7 52h-29q-2 17-6.5 40.5t-7 38.5-2.5 18q0 16 19 16 8 0 16-2l-8 47q-21 7-40 7-43 0-45-47 0-12 8-56 3-20 25-146h55zM1180 888q0 23-7 52h-111q-3 22 10 33t38 11q30 0 58-14l-9 54q-30 8-57 8-95 0-95-95 0-55 27.5-90.5t69.5-35.5q35 0 55.5 21t20.5 56zM1319 814q-13 23-22 62-22-2-31 24t-25 128h-56l3-14q22-130 29-199h51l-3 33q14-21 25.5-29.5t28.5-4.5zM1506 773l-9 57q-28-14-50-14-31 0-51 27.5t-20 70.5q0 30 13.5 47t38.5 17q21 0 48-13l-10 59q-28 8-50 8-45 0-71.5-30.5t-26.5-82.5q0-70 35.5-114.5t91.5-44.5q26 0 61 13zM1668 873q0 18-4 42-13 79-17 113h-46l1-22q-20 26-59 26-23 0-37-16t-14-42q0-39 25.5-60.5t72.5-21.5q15 0 23 1 2-7 2-13 0-20-36-20-29 0-59 10 0-4 8-48 38-11 67-11 73 0 73 62zM1809 814q-14 24-21 62-23-2-31.5 23t-25.5 129h-56l3-14q19-104 29-199h52q0 11-4 33 15-21 26.5-29.5t27.5-4.5zM1950 766h56l-43 262h-53l3-19q-23 23-52 23-31 0-49.5-24t-18.5-64q0-53 27.5-92t64.5-39q31 0 53 29zM2061 896q0-148-72.5-273t-198-198-273.5-73q-181 0-328 110 127 116 171 284h-50q-44-150-158-253-114 103-158 253h-50q44-168 171-284-147-110-328-110-148 0-273.5 73t-198 198-72.5 273 72.5 273 198 198 273.5 73q181 0 328-110-120-111-165-264h50q46 138 152 233 106-95 152-233h50q-45 153-165 264 147 110 328 110 148 0 273.5-73t198-198 72.5-273zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z'
	  },
	  'cc-paypal': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M745 906q0 37-25.5 61.5t-62.5 24.5q-29 0-46.5-16t-17.5-44q0-37 25-62.5t62-25.5q28 0 46.5 16.5t18.5 45.5zM1530 757q0 42-22 57t-66 15l-32 1 17-107q2-11 13-11h18q22 0 35 2t25 12.5 12 30.5zM1881 906q0 36-25.5 61t-61.5 25q-29 0-47-16t-18-44q0-37 25-62.5t62-25.5q28 0 46.5 16.5t18.5 45.5zM513 735q0-59-38.5-85.5t-100.5-26.5h-160q-19 0-21 19l-65 408q-1 6 3 11t10 5h76q20 0 22-19l18-110q1-8 7-13t15-6.5 17-1.5 19 1 14 1q86 0 135-48.5t49-134.5zM822 1047l41-261q1-6-3-11t-10-5h-76q-14 0-17 33-27-40-95-40-72 0-122.5 54t-50.5 127q0 59 34.5 94t92.5 35q28 0 58-12t48-32q-4 12-4 21 0 16 13 16h69q19 0 22-19zM1269 784q0-5-4-9.5t-9-4.5h-77q-11 0-18 10l-106 156-44-150q-5-16-22-16h-75q-5 0-9 4.5t-4 9.5q0 2 19.5 59t42 123 23.5 70q-82 112-82 120 0 13 13 13h77q11 0 18-10l255-368q2-2 2-7zM1649 735q0-59-38.5-85.5t-100.5-26.5h-159q-20 0-22 19l-65 408q-1 6 3 11t10 5h82q12 0 16-13l18-116q1-8 7-13t15-6.5 17-1.5 19 1 14 1q86 0 135-48.5t49-134.5zM1958 1047l41-261q1-6-3-11t-10-5h-76q-14 0-17 33-26-40-95-40-72 0-122.5 54t-50.5 127q0 59 34.5 94t92.5 35q29 0 59-12t47-32q0 1-2 9t-2 12q0 16 13 16h69q19 0 22-19zM2176 638v-1q0-14-13-14h-74q-11 0-13 11l-65 416-1 2q0 5 4 9.5t10 4.5h66q19 0 21-19zM392 772q-5 35-26 46t-60 11l-33 1 17-107q2-11 13-11h19q40 0 58 11.5t12 48.5zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z'
	  },
	  'cc-stripe': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1597 903q0 69-21 106-19 35-52 35-23 0-41-9v-224q29-30 57-30 57 0 57 122zM2035 867h-110q6-98 56-98 51 0 54 98zM476 1002q0-59-33-91.5t-101-57.5q-36-13-52-24t-16-25q0-26 38-26 58 0 124 33l18-112q-67-32-149-32-77 0-123 38-48 39-48 109 0 58 32.5 90.5t99.5 56.5q39 14 54.5 25.5t15.5 27.5q0 31-48 31-29 0-70-12.5t-72-30.5l-18 113q72 41 168 41 81 0 129-37 51-41 51-117zM771 787l19-111h-96v-135l-129 21-18 114-46 8-17 103h62v219q0 84 44 120 38 30 111 30 32 0 79-11v-118q-32 7-44 7-42 0-42-50v-197h77zM1087 812v-139q-15-3-28-3-32 0-55.5 16t-33.5 46l-10-56h-131v471h150v-306q26-31 82-31 16 0 26 2zM1124 1147h150v-471h-150v471zM1746 898q0-122-45-179-40-52-111-52-64 0-117 56l-8-47h-132v645l150-25v-151q36 11 68 11 83 0 134-56 61-65 61-202zM1278 550q0-33-23-56t-56-23-56 23-23 56 23 56.5 56 23.5 56-23.5 23-56.5zM2176 907q0-113-48-176-50-64-144-64-96 0-151.5 66t-55.5 180q0 128 63 188 55 55 161 55 101 0 160-40l-16-103q-57 31-128 31-43 0-63-19-23-19-28-66h248q2-14 2-52zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z'
	  },
	  'cc-visa': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1975 990h-138q14-37 66-179l3-9q4-10 10-26t9-26l12 55zM531 925l-58-295q-11-54-75-54h-268l-2 13q311 79 403 336zM710 576l-162 438-17-89q-26-70-85-129.5t-131-88.5l135 510h175l261-641h-176zM849 1218h166l104-642h-166zM1617 592q-69-27-149-27-123 0-201 59t-79 153q-1 102 145 174 48 23 67 41t19 39q0 30-30 46t-69 16q-86 0-156-33l-22-11-23 144q74 34 185 34 130 1 208.5-59t80.5-160q0-106-140-174-49-25-71-42t-22-38q0-22 24.5-38.5t70.5-16.5q70-1 124 24l15 8zM2042 576h-128q-65 0-87 54l-246 588h174l35-96h212q5 22 20 96h154zM2304 256v1280q0 52-38 90t-90 38h-2048q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h2048q52 0 90 38t38 90z'
	  },
	  'cc': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M785 1008h207q-14 158-98.5 248.5t-214.5 90.5q-162 0-254.5-116t-92.5-316q0-194 93-311.5t233-117.5q148 0 232 87t97 247h-203q-5-64-35.5-99t-81.5-35q-57 0-88.5 60.5t-31.5 177.5q0 48 5 84t18 69.5 40 51.5 66 18q95 0 109-139zM1497 1008h206q-14 158-98 248.5t-214 90.5q-162 0-254.5-116t-92.5-316q0-194 93-311.5t233-117.5q148 0 232 87t97 247h-204q-4-64-35-99t-81-35q-57 0-88.5 60.5t-31.5 177.5q0 48 5 84t18 69.5 39.5 51.5 65.5 18q49 0 76.5-38t33.5-101zM1856 889q0-207-15.5-307t-60.5-161q-6-8-13.5-14t-21.5-15-16-11q-86-63-697-63-625 0-710 63-5 4-17.5 11.5t-21 14-14.5 14.5q-45 60-60 159.5t-15 308.5q0 208 15 307.5t60 160.5q6 8 15 15t20.5 14 17.5 12q44 33 239.5 49t470.5 16q610 0 697-65 5-4 17-11t20.5-14 13.5-16q46-60 61-159t15-309zM2048 128v1536h-2048v-1536h2048z'
	  },
	  'certificate': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1376 896l138 135q30 28 20 70-12 41-52 51l-188 48 53 186q12 41-19 70-29 31-70 19l-186-53-48 188q-10 40-51 52-12 2-19 2-31 0-51-22l-135-138-135 138q-28 30-70 20-41-11-51-52l-48-188-186 53q-41 12-70-19-31-29-19-70l53-186-188-48q-40-10-52-51-10-42 20-70l138-135-138-135q-30-28-20-70 12-41 52-51l188-48-53-186q-12-41 19-70 29-31 70-19l186 53 48-188q10-41 51-51 41-12 70 19l135 139 135-139q29-30 70-19 41 10 51 51l48 188 186-53q41-12 70 19 31 29 19 70l-53 186 188 48q40 10 52 51 10 42-20 70z'
	  },
	  'chain-broken': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M439 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zM608 1312v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zM384 1088q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zM1648 1216q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zM1031 492l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zM1664 576q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zM1120 32v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zM1527 183l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z'
	  },
	  'chain': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1456 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zM753 511q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zM1648 1216q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z'
	  },
	  'check-circle-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1171 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'check-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1284 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'check-square-o': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1408 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zM1639 441l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z'
	  },
	  'check-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M685 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'check': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'
	  },
	  'chevron-circle-down': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M813 1299l454-454q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-307 307-307-307q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'chevron-circle-left': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M909 1395l102-102q19-19 19-45t-19-45l-307-307 307-307q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'chevron-circle-right': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M717 1395l454-454q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l307 307-307 307q-19 19-19 45t19 45l102 102q19 19 45 19t45-19zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'chevron-circle-up': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1165 1139l102-102q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l307-307 307 307q19 19 45 19t45-19zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'chevron-down': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z'
	  },
	  'chevron-left': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1171 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z'
	  },
	  'chevron-right': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1107 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z'
	  },
	  'chevron-up': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z'
	  },
	  'child': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1188 548l-292 292v824q0 46-33 79t-79 33-79-33-33-79v-384h-64v384q0 46-33 79t-79 33-79-33-33-79v-824l-292-292q-28-28-28-68t28-68 68-28 68 28l228 228h368l228-228q28-28 68-28t68 28 28 68-28 68zM864 384q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z'
	  },
	  'chrome': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M893 0q240-2 451 120 232 134 352 372l-742-39q-160-9-294 74.5t-185 229.5l-276-424q128-159 311-245.5t383-87.5zM146 405l337 663q72 143 211 217t293 45l-230 451q-212-33-385-157.5t-272.5-316-99.5-411.5q0-267 146-491zM1732 574q58 150 59.5 310.5t-48.5 306-153 272-246 209.5q-230 133-498 119l405-623q88-131 82.5-290.5t-106.5-277.5zM896 594q125 0 213.5 88.5t88.5 213.5-88.5 213.5-213.5 88.5-213.5-88.5-88.5-213.5 88.5-213.5 213.5-88.5z'
	  },
	  'circle-o-notch': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z'
	  },
	  'circle-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'circle-thin': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 256q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'clipboard': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z'
	  },
	  'clock-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M896 544v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'clone': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1664 1632v-1088q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5v1088q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5-9.5t9.5-22.5zM1792 544v1088q0 66-47 113t-113 47h-1088q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1088q66 0 113 47t47 113zM1408 160v160h-128v-160q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5v1088q0 13 9.5 22.5t22.5 9.5h160v128h-160q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1088q66 0 113 47t47 113z'
	  },
	  'close': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z'
	  },
	  'cloud-download': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1280 928q0-14-9-23t-23-9h-224v-352q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v352h-224q-13 0-22.5 9.5t-9.5 22.5q0 14 9 23l352 352q9 9 23 9t23-9l351-351q10-12 10-24zM1920 1152q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-130 70-240t188-165q-2-30-2-43 0-212 150-362t362-150q156 0 285.5 87t188.5 231q71-62 166-62 106 0 181 75t75 181q0 76-41 138 130 31 213.5 135.5t83.5 238.5z'
	  },
	  'cloud-upload': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1280 864q0-14-9-23l-352-352q-9-9-23-9t-23 9l-351 351q-10 12-10 24 0 14 9 23t23 9h224v352q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5v-352h224q13 0 22.5-9.5t9.5-22.5zM1920 1152q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-130 70-240t188-165q-2-30-2-43 0-212 150-362t362-150q156 0 285.5 87t188.5 231q71-62 166-62 106 0 181 75t75 181q0 76-41 138 130 31 213.5 135.5t83.5 238.5z'
	  },
	  'cloud': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1920 1152q0 159-112.5 271.5t-271.5 112.5h-1088q-185 0-316.5-131.5t-131.5-316.5q0-132 71-241.5t187-163.5q-2-28-2-43 0-212 150-362t362-150q158 0 286.5 88t187.5 230q70-62 166-62 106 0 181 75t75 181q0 75-41 138 129 30 213 134.5t84 239.5z'
	  },
	  'cny': {
	    'width': 1027,
	    'height': 1792,
	    'd': 'M603 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z'
	  },
	  'code-fork': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M288 1472q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM288 320q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM928 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM1024 448q0 52-26 96.5t-70 69.5q-2 287-226 414-68 38-203 81-128 40-169.5 71t-41.5 100v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56-136-56-56-136q0-52 26-96.5t70-69.5v-820q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136q0 52-26 96.5t-70 69.5v497q54-26 154-57 55-17 87.5-29.5t70.5-31 59-39.5 40.5-51 28-69.5 8.5-91.5q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136z'
	  },
	  'code': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M617 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zM1208 332l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zM1865 983l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z'
	  },
	  'codepen': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M216 1169l603 402v-359l-334-223zM154 1025l193-129-193-129v258zM973 1571l603-402-269-180-334 223v359zM896 1078l272-182-272-182-272 182zM485 803l334-223v-359l-603 402zM1445 896l193 129v-258zM1307 803l269-180-603-402v359zM1792 623v546q0 41-34 64l-819 546q-21 13-43 13t-43-13l-819-546q-34-23-34-64v-546q0-41 34-64l819-546q21-13 43-13t43 13l819 546q34 23 34 64z'
	  },
	  'codiepie': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1549 679q55 0 85.5 28.5t30.5 83.5-34 82-91 27h-136v177h-25v-398h170zM1710 1269l-4 11-5 10q-113 230-330.5 366t-474.5 136q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71q244 0 454.5 124t329.5 338l2 4 8 16q-30 15-136.5 68.5t-163.5 84.5q-6 3-479 268 384 183 799 366zM896 1770q250 0 462.5-132.5t322.5-357.5l-287-129q-72 140-206 222t-292 82q-151 0-280-75t-204-204-75-280 75-280 204-204 280-75 280 73.5 204 204.5l280-143q-116-208-321-329t-443-121q-119 0-232.5 31.5t-209 87.5-176.5 137-137 176.5-87.5 209-31.5 232.5 31.5 232.5 87.5 209 137 176.5 176.5 137 209 87.5 232.5 31.5z'
	  },
	  'coffee': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1664 640q0-80-56-136t-136-56h-64v384h64q80 0 136-56t56-136zM0 1408h1792q0 106-75 181t-181 75h-1280q-106 0-181-75t-75-181zM1856 640q0 159-112.5 271.5t-271.5 112.5h-64v32q0 92-66 158t-158 66h-704q-92 0-158-66t-66-158v-736q0-26 19-45t45-19h1152q159 0 271.5 112.5t112.5 271.5z'
	  },
	  'cog': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1536 787v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z'
	  },
	  'cogs': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M896 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1664 1408q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1664 384q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1280 805v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 10 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 9-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zM1920 1338v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zM1920 314v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z'
	  },
	  'columns': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M160 1536h608v-1152h-640v1120q0 13 9.5 22.5t22.5 9.5zM1536 1504v-1120h-640v1152h608q13 0 22.5-9.5t9.5-22.5zM1664 288v1216q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1344q66 0 113 47t47 113z'
	  },
	  'comment-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 384q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zM1792 896q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-0.5-12t2-10 4.5-9.5l6-9t7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-174 120-321.5t326-233 450-85.5 450 85.5 326 233 120 321.5z'
	  },
	  'comment': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 896q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22-17 2-30.5-9t-17.5-29v-1q-3-4-0.5-12t2-10 4.5-9.5l6-9t7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5 348-50.5q244 0 450 85.5t326 233 120 321.5z'
	  },
	  'commenting-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1024 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1408 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM896 384q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zM1792 896q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-0.5-12t2-10 4.5-9.5l6-9t7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5 348-50.5 348 50.5 286 136.5 191 204.5 71 248.5z'
	  },
	  'commenting': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 896q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1024 896q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1408 896q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1792 896q0 174-120 321.5t-326 233-450 85.5q-110 0-211-18-173 173-435 229-52 10-86 13-12 1-22-6t-13-18q-4-15 20-37 5-5 23.5-21.5t25.5-23.5 23.5-25.5 24-31.5 20.5-37 20-48 14.5-57.5 12.5-72.5q-146-90-229.5-216.5t-83.5-269.5q0-174 120-321.5t326-233 450-85.5 450 85.5 326 233 120 321.5z'
	  },
	  'comments-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M704 384q-153 0-286 52t-211.5 141-78.5 191q0 82 53 158t149 132l97 56-35 84q34-20 62-39l44-31 53 10q78 14 153 14 153 0 286-52t211.5-141 78.5-191-78.5-191-211.5-141-286-52zM704 256q191 0 353.5 68.5t256.5 186.5 94 257-94 257-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t0.5-6.5 2-6l2.5-5t3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5zM1526 1425q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5t2 6 0.5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230q0 120-71 224.5t-195 176.5z'
	  },
	  'comments': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1408 768q0 139-94 257t-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t0.5-6.5 2-6l2.5-5t3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5 353.5 68.5 256.5 186.5 94 257zM1792 1024q0 120-71 224.5t-195 176.5q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5t2 6 0.5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230z'
	  },
	  'compass': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M640 1088l256-128-256-128v256zM1024 497v542l-512 256v-542zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'compress': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zM1523 288q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z'
	  },
	  'connectdevelop': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M2048 895q0 21-13 36.5t-33 19.5l-205 356q3 9 3 18 0 20-12.5 35.5t-32.5 19.5l-193 337q3 8 3 16 0 23-16.5 40t-40.5 17q-25 0-41-18h-400q-17 20-43 20t-43-20h-399q-17 20-43 20-23 0-40-16.5t-17-40.5q0-8 4-20l-193-335q-20-4-32.5-19.5t-12.5-35.5q0-9 3-18l-206-356q-20-5-32.5-20.5t-12.5-35.5q0-21 13.5-36.5t33.5-19.5l199-344q0-1-0.5-3t-0.5-3q0-36 34-51l209-363q-4-10-4-18 0-24 17-40.5t40-16.5q26 0 44 21h396q16-21 43-21t43 21h398q18-21 44-21 23 0 40 16.5t17 40.5q0 6-4 18l207 358q23 1 39 17.5t16 38.5q0 13-7 27l187 324q19 4 31.5 19.5t12.5 35.5zM1063 1694h389l-342-354h-143l-342 354h360q18-16 39-16t39 16zM112 882q1 4 1 13 0 10-2 15l208 360q2 0 4.5 1t5.5 2.5l5 2.5 188-199v-347l-187-194q-13 8-29 10zM986 98h-388l190 200 554-200h-280q-16 16-38 16t-38-16zM1689 1310q1-6 5-11l-64-68-17 79h76zM1583 1310l22-105-252-266-296 307 63 64h463zM1495 1678l16-28 65-310h-427l333 343q8-4 13-5zM578 1694h5l342-354h-373v335l4 6q14 5 22 13zM552 1310h402l64-66-309-321-157 166v221zM359 1310h163v-189l-168 177q4 8 5 12zM358 485q0 1 0.5 2t0.5 2q0 16-8 29l171 177v-269zM552 415v311l153 157 297-314-223-236zM556 111l-4 8v264l205-74-191-201q-6 2-10 3zM1447 98h-16l-621 224 213 225zM1023 590l-297 315 311 319 296-307zM688 902l-136-141v284zM1038 1266l-42 44h85zM1374 918l238 251 132-624-3-5-1-1zM1718 518q-8-13-8-29v-2l-216-376q-5-1-13-5l-437 463 310 327zM522 394v-223l-163 282zM522 1340h-163l163 283v-283zM1607 1340l-48 227 130-227h-82zM1729 1270l207-361q-2-10-2-14 0-1 3-16l-171-296-129 612 77 82q5-3 15-7z'
	  },
	  'contao': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M138 128h197q-70 64-126 149-36 56-59 115t-30 125.5-8.5 120 10.5 132 21 126 28 136.5q4 19 6 28 51 238 81 329 57 171 152 275h-272q-48 0-82-34t-34-82v-1304q0-48 34-82t82-34zM1346 128h308q48 0 82 34t34 82v1304q0 48-34 82t-82 34h-178q212-210 196-565l-469 101q-2 45-12 82t-31 72-59.5 59.5-93.5 36.5q-123 26-199-40-32-27-53-61t-51.5-129-64.5-258q-35-163-45.5-263t-5.5-139 23-77q20-41 62.5-73t102.5-45q45-12 83.5-6.5t67 17 54 35 43 48 34.5 56.5l468-100q-68-175-180-287z'
	  },
	  'copy': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zM1152 597l-299 299h299v-299zM512 213l-299 299h299v-299zM708 860l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zM1664 1664v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z'
	  },
	  'copyright': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1150 1074v109q0 50-36.5 89t-94 60.5-118 32.5-117.5 11q-205 0-342.5-139t-137.5-346q0-203 136-339t339-136q34 0 75.5 4.5t93 18 92.5 34 69 56.5 28 81v109q0 16-16 16h-118q-16 0-16-16v-70q0-43-65.5-67.5t-137.5-24.5q-140 0-228.5 91.5t-88.5 237.5q0 151 91.5 249.5t233.5 98.5q68 0 138-24t70-66v-70q0-7 4.5-11.5t10.5-4.5h119q6 0 11 4.5t5 11.5zM768 256q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'creative-commons': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M605 1233q153 0 257-104 14-18 3-36l-45-82q-6-13-24-17-16-2-27 11l-4 3q-4 4-11.5 10t-17.5 13-23.5 14.5-28.5 13.5-33.5 9.5-37.5 3.5q-76 0-125-50t-49-127q0-76 48-125.5t122-49.5q37 0 71.5 14t50.5 28l16 14q11 11 26 10 16-2 24-14l53-78q13-20-2-39-3-4-11-12t-30-23.5-48.5-28-67.5-22.5-86-10q-148 0-246 96.5t-98 240.5q0 146 97 241.5t247 95.5zM1235 1233q153 0 257-104 14-18 4-36l-45-82q-8-14-25-17-16-2-27 11l-4 3q-4 4-11.5 10t-17.5 13-23.5 14.5-28.5 13.5-33.5 9.5-37.5 3.5q-76 0-125-50t-49-127q0-76 48-125.5t122-49.5q37 0 71.5 14t50.5 28l16 14q11 11 26 10 16-2 24-14l53-78q13-20-2-39-3-4-11-12t-30-23.5-48.5-28-67.5-22.5-86-10q-147 0-245.5 96.5t-98.5 240.5q0 146 97 241.5t247 95.5zM896 160q-150 0-286 58.5t-234.5 157-157 234.5-58.5 286 58.5 286 157 234.5 234.5 157 286 58.5 286-58.5 234.5-157 157-234.5 58.5-286-58.5-286-157-234.5-234.5-157-286-58.5zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71z'
	  },
	  'credit-card-alt': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M0 1504v-608h2304v608q0 66-47 113t-113 47h-1984q-66 0-113-47t-47-113zM640 1280v128h384v-128h-384zM256 1280v128h256v-128h-256zM2144 128q66 0 113 47t47 113v224h-2304v-224q0-66 47-113t113-47h1984z'
	  },
	  'credit-card': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1760 128q66 0 113 47t47 113v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600zM160 256q-13 0-22.5 9.5t-9.5 22.5v224h1664v-224q0-13-9.5-22.5t-22.5-9.5h-1600zM1760 1536q13 0 22.5-9.5t9.5-22.5v-608h-1664v608q0 13 9.5 22.5t22.5 9.5h1600zM256 1408v-128h256v128h-256zM640 1408v-128h384v128h-384z'
	  },
	  'crop': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M557 1280h595v-595zM512 1235l595-595h-595v595zM1664 1312v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z'
	  },
	  'crosshairs': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1197 1024h-109q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h109q-32-108-112.5-188.5t-188.5-112.5v109q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-109q-108 32-188.5 112.5t-112.5 188.5h109q26 0 45 19t19 45v128q0 26-19 45t-45 19h-109q32 108 112.5 188.5t188.5 112.5v-109q0-26 19-45t45-19h128q26 0 45 19t19 45v109q108-32 188.5-112.5t112.5-188.5zM1536 832v128q0 26-19 45t-45 19h-143q-37 161-154.5 278.5t-278.5 154.5v143q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-143q-161-37-278.5-154.5t-154.5-278.5h-143q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h143q37-161 154.5-278.5t278.5-154.5v-143q0-26 19-45t45-19h128q26 0 45 19t19 45v143q161 37 278.5 154.5t154.5 278.5h143q26 0 45 19t19 45z'
	  },
	  'css3': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M275 128h1505l-266 1333-804 267-698-267 71-356h297l-29 147 422 161 486-161 68-339h-1208l58-297h1209l38-191h-1208z'
	  },
	  'cube': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 1629l640-349v-636l-640 233v752zM832 764l698-254-698-254-698 254zM1664 512v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16l-704-384q-31-17-49-47t-18-65v-768q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z'
	  },
	  'cubes': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M640 1632l384-192v-314l-384 164v342zM576 1178l404-173-404-173-404 173zM1664 1632l384-192v-314l-384 164v342zM1600 1178l404-173-404-173-404 173zM1152 885l384-165v-266l-384 164v267zM1088 506l441-189-441-189-441 189zM2176 1024v416q0 36-19 67t-52 47l-448 224q-25 14-57 14t-57-14l-448-224q-5-2-7-4-2 2-7 4l-448 224q-25 14-57 14t-57-14l-448-224q-33-16-52-47t-19-67v-416q0-38 21.5-70t56.5-48l434-186v-400q0-38 21.5-70t56.5-48l448-192q23-10 50-10t50 10l448 192q35 16 56.5 48t21.5 70v400l434 186q36 16 57 48t21 70z'
	  },
	  'cut': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1260 960l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zM579 700q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zM494 1445q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zM672 832l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zM896 1056l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zM1600 1472l128-64-520-408-177 138q-2 3-13 7z'
	  },
	  'cutlery': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M640 64v640q0 61-35.5 111t-92.5 70v779q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-779q-57-20-92.5-70t-35.5-111v-640q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45zM1408 64v1600q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-512h-224q-13 0-22.5-9.5t-9.5-22.5v-800q0-132 94-226t226-94h256q26 0 45 19t19 45z'
	  },
	  'dashboard': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M384 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM576 704q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1004 1185l101-382q6-26-7.5-48.5t-38.5-29.5-48 6.5-30 39.5l-101 382q-60 5-107 43.5t-63 98.5q-20 77 20 146t117 89 146-20 89-117q16-60-6-117t-72-91zM1664 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1024 512q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1472 704q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1792 1152q0 261-141 483-19 29-54 29h-1402q-35 0-54-29-141-221-141-483 0-182 71-348t191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'dashcube': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M0 680q0-131 91.5-226.5t222.5-95.5h742l352-358v1470q0 132-91.5 227t-222.5 95h-780q-131 0-222.5-95t-91.5-227v-790zM1232 1434l-176-180v-425q0-46-32-79t-78-33h-484q-46 0-78 33t-32 79v492q0 46 32.5 79.5t77.5 33.5h770z'
	  },
	  'database': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zM768 1536q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zM768 1152q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zM768 0q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-128q0-69 103-128t280-93.5 385-34.5z'
	  },
	  'dedent': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z'
	  },
	  'delicious': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1472 1376v-480h-704v-704h-480q-93 0-158.5 65.5t-65.5 158.5v480h704v704h480q93 0 158.5-65.5t65.5-158.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'desktop': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1792 992v-832q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v832q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zM1920 160v1088q0 66-47 113t-113 47h-544q0 37 16 77.5t32 71 16 43.5q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45q0-14 16-44t32-70 16-78h-544q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
	  },
	  'deviantart': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 303l-303 582 24 31h279v415h-507l-44 30-142 273-30 30h-301v-303l303-583-24-30h-279v-415h507l44-30 142-273 30-30h301v303z'
	  },
	  'diamond': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M212 768l623 665-300-665h-323zM1024 1540l349-772h-698zM538 640l204-384h-262l-288 384h346zM1213 1433l623-665h-323zM683 640h682l-204-384h-274zM1510 640h346l-288-384h-262zM1651 154l384 512q14 18 13 41.5t-17 40.5l-960 1024q-18 20-47 20t-47-20l-960-1024q-16-17-17-40.5t13-41.5l384-512q18-26 51-26h1152q33 0 51 26z'
	  },
	  'digg': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M328 282h204v983h-532v-697h328v-286zM328 1101v-369h-123v369h123zM614 568v697h205v-697h-205zM614 282v204h205v-204h-205zM901 568h533v942h-533v-163h328v-82h-328v-697zM1229 1101v-369h-123v369h123zM1516 568h532v942h-532v-163h327v-82h-327v-697zM1843 1101v-369h-123v369h123z'
	  },
	  'dollar': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M978 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z'
	  },
	  'dot-circle-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM768 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'download': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1280 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1536 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 1120v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zM1339 551q17 41-14 70l-448 448q-18 19-45 19t-45-19l-448-448q-31-29-14-70 17-39 59-39h256v-448q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z'
	  },
	  'dribbble': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 1500q-42-241-140-498h-2l-2 1q-16 6-43 16.5t-101 49-137 82-131 114.5-103 148l-15-11q184 150 418 150 132 0 256-52zM839 893q-21-49-53-111-311 93-673 93-1 7-1 21 0 124 44 236.5t124 201.5q50-89 123.5-166.5t142.5-124.5 130.5-81 99.5-48l37-13q4-1 13-3.5t13-4.5zM732 681q-120-213-244-378-138 65-234 186t-128 272q302 0 606-80zM1416 1000q-210-60-409-29 87 239 128 469 111-75 185-189.5t96-250.5zM611 259q-1 0-2 1 1-1 2-1zM1201 404q-185-164-433-164-76 0-155 19 131 170 246 382 69-26 130-60.5t96.5-61.5 65.5-57 37.5-40.5zM1424 889q-3-232-149-410l-1 1q-9 12-19 24.5t-43.5 44.5-71 60.5-100 65-131.5 64.5q25 53 44 95 2 6 6.5 17.5t7.5 16.5q36-5 74.5-7t73.5-2 69 1.5 64 4 56.5 5.5 48 6.5 36.5 6 25 4.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'dropbox': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M402 707l494 305-342 285-490-319zM1388 1262v108l-490 293v1l-1-1-1 1v-1l-489-293v-108l147 96 342-284v-2l1 1 1-1v2l343 284zM554 118l342 285-494 304-338-270zM1390 707l338 271-489 319-343-285zM1239 118l489 319-338 270-494-304z'
	  },
	  'drupal': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1167 1586q-5-19-24-5-30 22-87 39t-131 17q-129 0-193-49-5-4-13-4-11 0-26 12-7 6-7.5 16t7.5 20q34 32 87.5 46t102.5 12.5 99-4.5q41-4 84.5-20.5t65-30 28.5-20.5q12-12 7-29zM1128 1471q-19-47-39-61-23-15-76-15-47 0-71 10-29 12-78 56-26 24-12 44 9 8 17.5 4.5t31.5-23.5q3-2 10.5-8.5t10.5-8.5 10-7 11.5-7 12.5-5 15-4.5 16.5-2.5 20.5-1q27 0 44.5 7.5t23 14.5 13.5 22q10 17 12.5 20t12.5-1q23-12 14-34zM1483 1190q0-22-5-44.5t-16.5-45-34-36.5-52.5-14q-33 0-97 41.5t-129 83.5-101 42q-27 1-63.5-19t-76-49-83.5-58-100-49-111-19q-115 1-197 78.5t-84 178.5q-2 112 74 164 29 20 62.5 28.5t103.5 8.5q57 0 132-32.5t134-71 120-70.5 93-31q26 1 65 31.5t71.5 67 68 67.5 55.5 32q35 3 58.5-14t55.5-63q28-41 42.5-101t14.5-106zM1536 1030q0 164-62 304.5t-166 236-242.5 149.5-290.5 54-293-57.5-247.5-157-170.5-241.5-64-302q0-89 19.5-172.5t49-145.5 70.5-118.5 78.5-94 78.5-69.5 64.5-46.5 42.5-24.5q14-8 51-26.5t54.5-28.5 48-30 60.5-44q36-28 58-72.5t30-125.5q129 155 186 193 44 29 130 68t129 66q21 13 39 25t60.5 46.5 76 70.5 75 95 69 122 47 148.5 19.5 177.5z'
	  },
	  'edge': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M69 795h1q16-126 58.5-241.5t115-217 167.5-176 223.5-117.5 276.5-43q231 0 414 105.5t294 303.5q104 187 104 442v188h-1125q1 111 53.5 192.5t136.5 122.5 189.5 57 213 3 208-46.5 173.5-84.5v377q-92 55-229.5 92t-312.5 38-316-53q-189-73-311.5-249t-124.5-372q-3-242 111-412t325-268q-48 60-78 125.5t-46 159.5h635q8-77-8-140t-47-101.5-70.5-66.5-80.5-41-75-20.5-56-8.5l-22-1q-135 5-259.5 44.5t-223.5 104.5-176 140.5-138 163.5z'
	  },
	  'edit': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z'
	  },
	  'eject': {
	    'width': 1538,
	    'height': 1792,
	    'd': 'M14 979l710-710q19-19 45-19t45 19l710 710q19 19 13 32t-32 13h-1472q-26 0-32-13t13-32zM1473 1536h-1408q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1408q26 0 45 19t19 45v256q0 26-19 45t-45 19z'
	  },
	  'ellipsis-h': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M384 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zM896 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zM1408 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z'
	  },
	  'ellipsis-v': {
	    'width': 384,
	    'height': 1792,
	    'd': 'M384 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zM384 736v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zM384 224v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z'
	  },
	  'empire': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M874 1638v66q-208-6-385-109.5t-283-275.5l58-34q29 49 73 99l65-57q148 168 368 212l-17 86q65 12 121 13zM276 1108l-83 28q22 60 49 112l-57 33q-98-180-98-385t98-385l57 33q-30 56-49 112l82 28q-35 100-35 212 0 109 36 212zM1528 1285l58 34q-106 172-283 275.5t-385 109.5v-66q56-1 121-13l-17-86q220-44 368-212l65 57q44-50 73-99zM1377 731l-233 80q14 42 14 85t-14 85l232 80q-31 92-98 169l-185-162q-57 67-147 85l48 241q-52 10-98 10t-98-10l48-241q-90-18-147-85l-185 162q-67-77-98-169l232-80q-14-42-14-85t14-85l-233-80q33-93 99-169l185 162q59-68 147-86l-48-240q44-10 98-10t98 10l-48 240q88 18 147 86l185-162q66 76 99 169zM874 88v66q-65 2-121 13l17 86q-220 42-368 211l-65-56q-38 42-73 98l-57-33q106-172 282-275.5t385-109.5zM1705 896q0 205-98 385l-57-33q27-52 49-112l-83-28q36-103 36-212 0-112-35-212l82-28q-19-56-49-112l57-33q98 180 98 385zM1585 473l-57 33q-35-56-73-98l-65 56q-148-169-368-211l17-86q-56-11-121-13v-66q209 6 385 109.5t282 275.5zM1748 896q0-173-67.5-331t-181.5-272-272-181.5-331-67.5-331 67.5-272 181.5-181.5 272-67.5 331 67.5 331 181.5 272 272 181.5 331 67.5 331-67.5 272-181.5 181.5-272 67.5-331zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'envelope-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-1-1q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zM1664 453v-11-13.5t-0.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h1 1q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zM1792 416v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z'
	  },
	  'envelope-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zM1280 1184v-436q-31 35-64 55-34 22-132.5 85t-151.5 99q-98 69-164 69v0 0q-66 0-164-69-46-32-141.5-92.5t-142.5-92.5q-12-8-33-27t-31-27v436q0 40 28 68t68 28h832q40 0 68-28t28-68zM1280 611q0-41-27.5-70t-68.5-29h-832q-40 0-68 28t-28 68q0 37 30.5 76.5t67.5 64.5q47 32 137.5 89t129.5 83q3 2 17 11.5t21 14 21 13 23.5 13 21.5 9.5 22.5 7.5 20.5 2.5 20.5-2.5 22.5-7.5 21.5-9.5 23.5-13 21-13 21-14 17-11.5l267-174q35-23 66.5-62.5t31.5-73.5z'
	  },
	  'envelope': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h1 1q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zM1792 416q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-1-1q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'
	  },
	  'eraser': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M896 1408l336-384h-768l-336 384h768zM1909 331q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z'
	  },
	  'eur': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M976 1307l35 159q3 12-3 22.5t-17 14.5l-5 1q-4 2-10.5 3.5t-16 4.5-21.5 5.5-25.5 5-30 5-33.5 4.5-36.5 3-38.5 1q-234 0-409-130.5t-238-351.5h-95q-13 0-22.5-9.5t-9.5-22.5v-113q0-13 9.5-22.5t22.5-9.5h66q-2-57 1-105h-67q-14 0-23-9t-9-23v-114q0-14 9-23t23-9h98q67-210 243.5-338t400.5-128q102 0 194 23 11 3 20 15 6 11 3 24l-43 159q-3 13-14 19.5t-24 2.5l-4-1q-4-1-11.5-2.5l-17.5-3.5t-22.5-3.5-26-3-29-2.5-29.5-1q-126 0-226 64t-150 176h468q16 0 25 12 10 12 7 26l-24 114q-5 26-32 26h-488q-3 37 0 105h459q15 0 25 12 9 12 6 27l-24 112q-2 11-11 18.5t-20 7.5h-387q48 117 149.5 185.5t228.5 68.5q18 0 36-1.5t33.5-3.5 29.5-4.5 24.5-5 18.5-4.5l12-3 5-2q13-5 26 2 12 7 15 21z'
	  },
	  'euro': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M976 1307l35 159q3 12-3 22.5t-17 14.5l-5 1q-4 2-10.5 3.5t-16 4.5-21.5 5.5-25.5 5-30 5-33.5 4.5-36.5 3-38.5 1q-234 0-409-130.5t-238-351.5h-95q-13 0-22.5-9.5t-9.5-22.5v-113q0-13 9.5-22.5t22.5-9.5h66q-2-57 1-105h-67q-14 0-23-9t-9-23v-114q0-14 9-23t23-9h98q67-210 243.5-338t400.5-128q102 0 194 23 11 3 20 15 6 11 3 24l-43 159q-3 13-14 19.5t-24 2.5l-4-1q-4-1-11.5-2.5l-17.5-3.5t-22.5-3.5-26-3-29-2.5-29.5-1q-126 0-226 64t-150 176h468q16 0 25 12 10 12 7 26l-24 114q-5 26-32 26h-488q-3 37 0 105h459q15 0 25 12 9 12 6 27l-24 112q-2 11-11 18.5t-20 7.5h-387q48 117 149.5 185.5t228.5 68.5q18 0 36-1.5t33.5-3.5 29.5-4.5 24.5-5 18.5-4.5l12-3 5-2q13-5 26 2 12 7 15 21z'
	  },
	  'exchange': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1184v192q0 13-9.5 22.5t-22.5 9.5h-1376v192q0 13-9.5 22.5t-22.5 9.5q-12 0-24-10l-319-320q-9-9-9-22 0-14 9-23l320-320q9-9 23-9 13 0 22.5 9.5t9.5 22.5v192h1376q13 0 22.5 9.5t9.5 22.5zM1792 640q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-1376q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1376v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z'
	  },
	  'exclamation-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM896 1375v-190q0-14-9-23.5t-22-9.5h-192q-13 0-23 10t-10 23v190q0 13 10 23t23 10h192q13 0 22-9.5t9-23.5zM894 1031l18-621q0-12-10-18-10-8-24-8h-220q-14 0-24 8-10 6-10 18l17 621q0 10 10 17.5t24 7.5h185q14 0 23.5-7.5t10.5-17.5z'
	  },
	  'exclamation-triangle': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zM1022 1001l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zM1008 67l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z'
	  },
	  'exclamation': {
	    'width': 640,
	    'height': 1792,
	    'd': 'M512 1248v224q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-224q0-26 19-45t45-19h256q26 0 45 19t19 45zM542 192l-28 768q-1 26-20.5 45t-45.5 19h-256q-26 0-45.5-19t-20.5-45l-28-768q-1-26 17.5-45t44.5-19h320q26 0 44.5 19t17.5 45z'
	  },
	  'expand': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M755 1056q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23zM1536 192v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45z'
	  },
	  'expeditedssl': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 64q-169 0-323 66t-265.5 177.5-177.5 265.5-66 323 66 323 177.5 265.5 265.5 177.5 323 66 323-66 265.5-177.5 177.5-265.5 66-323-66-323-177.5-265.5-265.5-177.5-323-66zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM496 832q16 0 16 16v480q0 16-16 16h-32q-16 0-16-16v-480q0-16 16-16h32zM896 896q53 0 90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46v114q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-114q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5zM896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM544 608v96q0 14 9 23t23 9h64q14 0 23-9t9-23v-96q0-93 65.5-158.5t158.5-65.5 158.5 65.5 65.5 158.5v96q0 14 9 23t23 9h64q14 0 23-9t9-23v-96q0-146-103-249t-249-103-249 103-103 249zM1408 1344v-512q0-26-19-45t-45-19h-896q-26 0-45 19t-19 45v512q0 26 19 45t45 19h896q26 0 45-19t19-45z'
	  },
	  'external-link-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 928v-480q0-26-19-45t-45-19h-480q-42 0-59 39-17 41 14 70l144 144-534 534q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l534-534 144 144q18 19 45 19 12 0 25-5 39-17 39-59zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'external-link': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1408 928v320q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-320q0-14 9-23t23-9h64q14 0 23 9t9 23zM1792 64v512q0 26-19 45t-45 19-45-19l-176-176-652 652q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l652-652-176-176q-19-19-19-45t19-45 45-19h512q26 0 45 19t19 45z'
	  },
	  'eye-slash': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M555 1335l78-141q-87-63-136-159t-49-203q0-121 61-225-229 117-381 353 167 258 427 375zM944 576q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zM1307 385q0 7-1 9-105 188-315 566t-316 567l-49 89q-10 16-28 16-12 0-134-70-16-10-16-28 0-12 44-87-143-65-263.5-173t-208.5-245q-20-31-20-69t20-69q153-235 380-371t496-136q89 0 180 17l54-97q10-16 28-16 5 0 18 6t31 15.5 33 18.5 31.5 18.5 19.5 11.5q16 10 16 27zM1344 832q0 139-79 253.5t-209 164.5l280-502q8 45 8 84zM1792 960q0 35-20 69-39 64-109 145-150 172-347.5 267t-419.5 95l74-132q212-18 392.5-137t301.5-307q-115-179-282-294l63-112q95 64 182.5 153t144.5 184q20 34 20 69z'
	  },
	  'eye': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zM944 576q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zM1792 960q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z'
	  },
	  'eyedropper': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1698 94q94 94 94 226.5t-94 225.5l-225 223 104 104q10 10 10 23t-10 23l-210 210q-10 10-23 10t-23-10l-105-105-603 603q-37 37-90 37h-203l-256 128-64-64 128-256v-203q0-53 37-90l603-603-105-105q-10-10-10-23t10-23l210-210q10-10 23-10t23 10l104 104 223-225q93-94 225.5-94t226.5 94zM512 1472l576-576-192-192-576 576v192h192z'
	  },
	  'facebook-f': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M959 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z'
	  },
	  'facebook-official': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1451 128q35 0 60 25t25 60v1366q0 35-25 60t-60 25h-391v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-735q-35 0-60-25t-25-60v-1366q0-35 25-60t60-25h1366z'
	  },
	  'facebook-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z'
	  },
	  'facebook': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M959 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z'
	  },
	  'fast-backward': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1747 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-9-9-13-19v710q0 26-13 32t-32-13l-710-710q-9-9-13-19v678q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h128q26 0 45 19t19 45v678q4-11 13-19l710-710q19-19 32-13t13 32v710q4-11 13-19z'
	  },
	  'fast-forward': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M45 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q8 8 13 19v-710q0-26 13-32t32 13l710 710q8 8 13 19v-678q0-26 19-45t45-19h128q26 0 45 19t19 45v1408q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-678q-5 10-13 19l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z'
	  },
	  'fax': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M288 384q66 0 113 47t47 113v1088q0 66-47 113t-113 47h-128q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h128zM1664 547q58 34 93 93t35 128v768q0 106-75 181t-181 75h-864q-66 0-113-47t-47-113v-1536q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v163zM928 1536v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM928 1280v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM928 1024v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1184 1536v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1184 1280v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1184 1024v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1440 1536v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1440 1280v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1440 1024v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zM1536 640v-256h-160q-40 0-68-28t-28-68v-160h-640v512h896z'
	  },
	  'feed': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M384 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM896 1467q2 28-17 48-18 21-47 21h-135q-25 0-43-16.5t-20-41.5q-22-229-184.5-391.5t-391.5-184.5q-25-2-41.5-20t-16.5-43v-135q0-29 21-47 17-17 43-17h5q160 13 306 80.5t259 181.5q114 113 181.5 259t80.5 306zM1408 1469q2 27-18 47-18 20-46 20h-143q-26 0-44.5-17.5t-19.5-42.5q-12-215-101-408.5t-231.5-336-336-231.5-408.5-102q-25-1-42.5-19.5t-17.5-43.5v-143q0-28 20-46 18-18 44-18h3q262 13 501.5 120t425.5 294q187 186 294 425.5t120 501.5z'
	  },
	  'female': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1280 1056q0 40-28 68t-68 28q-51 0-80-43l-227-341h-45v132l247 411q9 15 9 33 0 26-19 45t-45 19h-192v272q0 46-33 79t-79 33h-160q-46 0-79-33t-33-79v-272h-192q-26 0-45-19t-19-45q0-18 9-33l247-411v-132h-45l-227 341q-29 43-80 43-40 0-68-28t-28-68q0-29 16-53l256-384q73-107 176-107h384q103 0 176 107l256 384q16 24 16 53zM864 256q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z'
	  },
	  'fighter-jet': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1920 960q-1 32-288 96l-352 32-224 64h-64l-293 352h69q26 0 45 4.5t19 11.5-19 11.5-45 4.5h-96-160-64v-32h64v-416h-160l-192 224h-96l-32-32v-192h32v-32h128v-8l-192-24v-128l192-24v-8h-128v-32h-32v-192l32-32h96l192 224h160v-416h-64v-32h64 160 96q26 0 45 4.5t19 11.5-19 11.5-45 4.5h-69l293 352h64l224 64 352 32q261 58 287 93z'
	  },
	  'file-archive-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M640 384v-128h-128v128h128zM768 512v-128h-128v128h128zM640 640v-128h-128v128h128zM768 768v-128h-128v128h128zM1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-128v128h-128v-128h-512v1536h1280zM781 943l107 349q8 27 8 52 0 83-72.5 137.5t-183.5 54.5-183.5-54.5-72.5-137.5q0-25 8-52 21-63 120-396v-128h128v128h79q22 0 39 13t23 34zM640 1408q53 0 90.5-19t37.5-45-37.5-45-90.5-19-90.5 19-37.5 45 37.5 45 90.5 19z'
	  },
	  'file-audio-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM620 850q20 8 20 30v544q0 22-20 30-8 2-12 2-12 0-23-9l-166-167h-131q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h131l166-167q16-15 35-7zM1037 1539q31 0 50-24 129-159 129-363t-129-363q-16-21-43-24t-47 14q-21 17-23.5 43.5t14.5 47.5q100 123 100 282t-100 282q-17 21-14.5 47.5t23.5 42.5q18 15 40 15zM826 1391q27 0 47-20 87-93 87-219t-87-219q-18-19-45-20t-46 17-20 44.5 18 46.5q52 57 52 131t-52 131q-19 20-18 46.5t20 44.5q20 17 44 17z'
	  },
	  'file-code-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM480 768q8-11 21-12.5t24 6.5l51 38q11 8 12.5 21t-6.5 24l-182 243 182 243q8 11 6.5 24t-12.5 21l-51 38q-11 8-24 6.5t-21-12.5l-226-301q-14-19 0-38zM1282 1069q14 19 0 38l-226 301q-8 11-21 12.5t-24-6.5l-51-38q-11-8-12.5-21t6.5-24l182-243-182-243q-8-11-6.5-24t12.5-21l51-38q11-8 24-6.5t21 12.5zM662 1530q-13-2-20.5-13t-5.5-24l138-831q2-13 13-20.5t24-5.5l63 10q13 2 20.5 13t5.5 24l-138 831q-2 13-13 20.5t-24 5.5z'
	  },
	  'file-excel-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM429 1430v106h281v-106h-75l103-161q5-7 10-16.5t7.5-13.5 3.5-4h2q1 4 5 10 2 4 4.5 7.5t6 8 6.5 8.5l107 161h-76v106h291v-106h-68l-192-273 195-282h67v-107h-279v107h74l-103 159q-4 7-10 16.5t-9 13.5l-2 3h-2q-1-4-5-10-6-11-17-23l-106-159h76v-107h-290v107h68l189 272-194 283h-68z'
	  },
	  'file-image-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM1280 1216v320h-1024v-192l192-192 128 128 384-384zM448 1024q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z'
	  },
	  'file-movie-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM768 768q52 0 90 38t38 90v384q0 52-38 90t-90 38h-384q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h384zM1260 770q20 8 20 30v576q0 22-20 30-8 2-12 2-14 0-23-9l-265-266v-90l265-266q9-9 23-9 4 0 12 2z'
	  },
	  'file-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280z'
	  },
	  'file-pdf-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM894 1071q33 26 84 56 59-7 117-7 147 0 177 49 16 22 2 52 0 1-1 2l-2 2v1q-6 38-71 38-48 0-115-20t-130-53q-221 24-392 83-153 262-242 262-15 0-28-7l-24-12q-1-1-6-5-10-10-6-36 9-40 56-91.5t132-96.5q14-9 23 6 2 2 2 4 52-85 107-197 68-136 104-262-24-82-30.5-159.5t6.5-127.5q11-40 42-40h21 1q23 0 35 15 18 21 9 68-2 6-4 8 1 3 1 8v30q-2 123-14 192 55 164 146 238zM318 1482q52-24 137-158-51 40-87.5 84t-49.5 74zM716 562q-15 42-2 132 1-7 7-44 0-3 7-43 1-4 4-8-1-1-1-2t-0.5-1.5-0.5-1.5q-1-22-13-36 0 1-1 2v2zM592 1223q135-54 284-81-2-1-13-9.5t-16-13.5q-76-67-127-176-27 86-83 197-30 56-45 83zM1238 1207q-24-24-140-24 76 28 124 28 14 0 18-1 0-1-2-3z'
	  },
	  'file-photo-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM1280 1216v320h-1024v-192l192-192 128 128 384-384zM448 1024q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z'
	  },
	  'file-picture-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM1280 1216v320h-1024v-192l192-192 128 128 384-384zM448 1024q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z'
	  },
	  'file-powerpoint-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM416 1430v106h327v-106h-93v-167h137q76 0 118-15 67-23 106.5-87t39.5-146q0-81-37-141t-100-87q-48-19-130-19h-368v107h92v555h-92zM769 1150h-119v-268h120q52 0 83 18 56 33 56 115 0 89-62 120-31 15-78 15z'
	  },
	  'file-sound-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM620 850q20 8 20 30v544q0 22-20 30-8 2-12 2-12 0-23-9l-166-167h-131q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h131l166-167q16-15 35-7zM1037 1539q31 0 50-24 129-159 129-363t-129-363q-16-21-43-24t-47 14q-21 17-23.5 43.5t14.5 47.5q100 123 100 282t-100 282q-17 21-14.5 47.5t23.5 42.5q18 15 40 15zM826 1391q27 0 47-20 87-93 87-219t-87-219q-18-19-45-20t-46 17-20 44.5 18 46.5q52 57 52 131t-52 131q-19 20-18 46.5t20 44.5q20 17 44 17z'
	  },
	  'file-text-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM384 800q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64zM1120 1024q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zM1120 1280q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z'
	  },
	  'file-text': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 476q14 14 28 36h-472v-472q22 14 36 28zM992 640h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544q0 40 28 68t68 28zM1152 1376v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM1152 1120v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zM1152 864v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23z'
	  },
	  'file-video-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM768 768q52 0 90 38t38 90v384q0 52-38 90t-90 38h-384q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h384zM1260 770q20 8 20 30v576q0 22-20 30-8 2-12 2-14 0-23-9l-265-266v-90l265-266q9-9 23-9 4 0 12 2z'
	  },
	  'file-word-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zM233 768v107h70l164 661h159l128-485q7-20 10-46 2-16 2-24h4l3 24q1 3 3.5 20t5.5 26l128 485h159l164-661h70v-107h-300v107h90l-99 438q-5 20-7 46l-2 21h-4l-3-21q-1-5-4-21t-5-25l-144-545h-114l-144 545q-2 9-4.5 24.5t-3.5 21.5l-4 21h-4l-2-21q-2-26-7-46l-99-438h90v-107h-300z'
	  },
	  'file-zip-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M640 384v-128h-128v128h128zM768 512v-128h-128v128h128zM640 640v-128h-128v128h128zM768 768v-128h-128v128h128zM1468 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zM1024 136v376h376q-10-29-22-41l-313-313q-12-12-41-22zM1408 1664v-1024h-416q-40 0-68-28t-28-68v-416h-128v128h-128v-128h-512v1536h1280zM781 943l107 349q8 27 8 52 0 83-72.5 137.5t-183.5 54.5-183.5-54.5-72.5-137.5q0-25 8-52 21-63 120-396v-128h128v128h79q22 0 39 13t23 34zM640 1408q53 0 90.5-19t37.5-45-37.5-45-90.5-19-90.5 19-37.5 45 37.5 45 90.5 19z'
	  },
	  'file': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 512v-472q22 14 36 28l408 408q14 14 28 36h-472zM896 544q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z'
	  },
	  'files-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zM1152 597l-299 299h299v-299zM512 213l-299 299h299v-299zM708 860l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zM1664 1664v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z'
	  },
	  'film': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M384 1600v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM384 1216v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM384 832v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1408 1600v-512q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v512q0 26 19 45t45 19h768q26 0 45-19t19-45zM384 448v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 1600v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1408 832v-512q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v512q0 26 19 45t45 19h768q26 0 45-19t19-45zM1792 1216v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 832v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 448v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1920 288v1344q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1344q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
	  },
	  'filter': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1403 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z'
	  },
	  'fire-extinguisher': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M512 192q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 160v320q0 16-12 25-8 7-20 7-4 0-7-1l-448-96q-11-2-18-11t-7-20h-256v102q111 23 183.5 111t72.5 203v800q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-800q0-106 62.5-190.5t161.5-114.5v-111h-32q-59 0-115 23.5t-91.5 53-66 66.5-40.5 53.5-14 24.5q-17 35-57 35-16 0-29-7-23-12-31.5-37t3.5-49q5-10 14.5-26t37.5-53.5 60.5-70 85-67 108.5-52.5q-25-42-25-86 0-66 47-113t113-47 113 47 47 113q0 33-14 64h302q0-11 7-20t18-11l448-96q3-1 7-1 12 0 20 7 12 9 12 25z'
	  },
	  'fire': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1408 1696v64q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1152 640q0 78-24.5 144t-64 112.5-87.5 88-96 77.5-87.5 72-64 81.5-24.5 96.5q0 96 67 224l-4-1 1 1q-90-41-160-83t-138.5-100-113.5-122.5-72.5-150.5-27.5-184q0-78 24.5-144t64-112.5 87.5-88 96-77.5 87.5-72 64-81.5 24.5-96.5q0-94-66-224l3 1-1-1q90 41 160 83t138.5 100 113.5 122.5 72.5 150.5 27.5 184z'
	  },
	  'firefox': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M903 1792q-283 0-504.5-150.5t-329.5-398.5q-58-131-67-301t26-332.5 111-312 179-242.5l-11 281q11-14 68-15.5t70 15.5q42-81 160.5-138t234.5-59q-54 45-119.5 148.5t-58.5 163.5q25 8 62.5 13.5t63 7.5 68 4 50.5 3q15 5 9.5 45.5t-30.5 75.5q-5 7-16.5 18.5t-56.5 35.5-101 34l15 189-139-67q-18 43-7.5 81.5t36 66.5 65.5 41.5 81 6.5q51-9 98-34.5t83.5-45 73.5-17.5q61 4 89.5 33t19.5 65q-1 2-2.5 5.5t-8.5 12.5-18 15.5-31.5 10.5-46.5 1q-60 95-144.5 135.5t-209.5 29.5q74 61 162.5 82.5t168.5 6 154.5-52 128-87.5 80.5-104q43-91 39-192.5t-37.5-188.5-78.5-125q87 38 137 79.5t77 112.5q15-170-57.5-343t-209.5-284q265 77 412 279.5t151 517.5q2 127-40.5 255t-123.5 238-189 196-247.5 135.5-288.5 49.5z'
	  },
	  'flag-checkered': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M832 1000v-192q-181 16-384 117v185q205-96 384-110zM832 582v-197q-172 8-384 126v189q215-111 384-118zM1664 1045v-184q-235 116-384 71v-224q-20-6-39-15-5-3-33-17t-34.5-17-31.5-15-34.5-15.5-32.5-13-36-12.5-35-8.5-39.5-7.5-39.5-4-44-2q-23 0-49 3v222h19q102 0 192.5 29t197.5 82q19 9 39 15v188q42 17 91 17 120 0 293-92zM1664 618v-189q-169 91-306 91-45 0-78-8v196q148 42 384-90zM320 256q0 35-17.5 64t-46.5 46v1266q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-1266q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1792 320v763q0 39-35 57-10 5-17 9-218 116-369 116-88 0-158-35l-28-14q-64-33-99-48t-91-29-114-14q-102 0-235.5 44t-228.5 102q-15 9-33 9-16 0-32-8-32-19-32-56v-742q0-35 31-55 35-21 78.5-42.5t114-52 152.5-49.5 155-19q112 0 209 31t209 86q38 19 89 19 122 0 310-112 22-12 31-17 31-16 62 2 31 20 31 55z'
	  },
	  'flag-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1664 1045v-616q-169 91-306 91-82 0-145-32-100-49-184-76.5t-178-27.5q-173 0-403 127v599q245-113 433-113 55 0 103.5 7.5t98 26 77 31 82.5 39.5l28 14q44 22 101 22 120 0 293-92zM320 256q0 35-17.5 64t-46.5 46v1266q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-1266q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1792 320v763q0 39-35 57-10 5-17 9-218 116-369 116-88 0-158-35l-28-14q-64-33-99-48t-91-29-114-14q-102 0-235.5 44t-228.5 102q-15 9-33 9-16 0-32-8-32-19-32-56v-742q0-35 31-55 35-21 78.5-42.5t114-52 152.5-49.5 155-19q112 0 209 31t209 86q38 19 89 19 122 0 310-112 22-12 31-17 31-16 62 2 31 20 31 55z'
	  },
	  'flag': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M320 256q0 72-64 110v1266q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-1266q-64-38-64-110 0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1792 320v763q0 25-12.5 38.5t-39.5 27.5q-215 116-369 116-61 0-123.5-22t-108.5-48-115.5-48-142.5-22q-192 0-464 146-17 9-33 9-26 0-45-19t-19-45v-742q0-32 31-55 21-14 79-43 236-120 421-120 107 0 200 29t219 88q38 19 88 19 54 0 117.5-21t110-47 88-47 54.5-21q26 0 45 19t19 45z'
	  },
	  'flash': {
	    'width': 896,
	    'height': 1792,
	    'd': 'M885 566q18 20 7 44l-540 1157q-13 25-42 25-4 0-14-2-17-5-25.5-19t-4.5-30l197-808-406 101q-4 1-12 1-18 0-31-11-18-15-13-39l201-825q4-14 16-23t28-9h328q19 0 32 12.5t13 29.5q0 8-5 18l-171 463 396-98q8-2 12-2 19 0 34 15z'
	  },
	  'flask': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1527 1448q56 89 21.5 152.5t-140.5 63.5h-1152q-106 0-140.5-63.5t21.5-152.5l503-793v-399h-64q-26 0-45-19t-19-45 19-45 45-19h512q26 0 45 19t19 45-19 45-45 19h-64v399zM748 723l-272 429h712l-272-429-20-31v-37-399h-128v399 37z'
	  },
	  'flickr': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zM698 896q0-88-62-150t-150-62-150 62-62 150 62 150 150 62 150-62 62-150zM1262 896q0-88-62-150t-150-62-150 62-62 150 62 150 150 62 150-62 62-150z'
	  },
	  'floppy-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M384 1536h768v-384h-768v384zM1280 1536h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zM896 608v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zM1536 640v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z'
	  },
	  'folder-o': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1536 1312v-704q0-40-28-68t-68-28h-704q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v960q0 40 28 68t68 28h1216q40 0 68-28t28-68zM1664 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z'
	  },
	  'folder-open-o': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1781 931q0-35-53-35h-1088q-40 0-85.5 21.5t-71.5 52.5l-294 363q-18 24-18 40 0 35 53 35h1088q40 0 86-22t71-53l294-363q18-22 18-39zM640 768h768v-160q0-40-28-68t-68-28h-576q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v853l256-315q44-53 116-87.5t140-34.5zM1909 931q0 62-46 120l-295 363q-43 53-116 87.5t-140 34.5h-1088q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158v160h192q54 0 99 24.5t67 70.5q15 32 15 68z'
	  },
	  'folder-open': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1879 952q0 31-31 66l-336 396q-43 51-120.5 86.5t-143.5 35.5h-1088q-34 0-60.5-13t-26.5-43q0-31 31-66l336-396q43-51 120.5-86.5t143.5-35.5h1088q34 0 60.5 13t26.5 43zM1536 608v160h-832q-94 0-197 47.5t-164 119.5l-337 396-5 6q0-4-0.5-12.5t-0.5-12.5v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158z'
	  },
	  'folder': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1664 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z'
	  },
	  'font': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M725 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zM0 1664l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h75 53q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-0.5 13t-0.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z'
	  },
	  'fonticons': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M0 128h1536v1536h-1536v-1536zM908 448l-12 33 75 83-31 114 25 25 107-57 107 57 25-25-31-114 75-83-12-33h-95l-53-96h-32l-53 96h-95zM641 611q32 0 44.5 16t11.5 63l174-21q0-55-17.5-92.5t-50.5-56-69-25.5-85-7q-133 0-199 57.5t-66 182.5v72h-96v128h76q20 0 20 8v382q0 14-5 20t-18 7l-73 7v88h448v-86l-149-14q-6-1-8.5-1.5t-3.5-2.5-0.5-4 1-7 0.5-10v-387h191l38-128h-231q-6 0-2-6t4-9v-80q0-27 1.5-40.5t7.5-28 19.5-20 36.5-5.5zM1248 1440v-86l-54-9q-7-1-9.5-2.5t-2.5-3 1-7.5 1-12v-520h-275l-23 101 83 22q23 7 23 27v370q0 14-6 18.5t-20 6.5l-70 9v86h352z'
	  },
	  'fort-awesome': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 1008v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zM1152 1008v-224q0-16-16-16h-96q-16 0-16 16v224q0 16 16 16h96q16 0 16-16zM1664 1040v752h-640v-320q0-80-56-136t-136-56-136 56-56 136v320h-640v-752q0-16 16-16h96q16 0 16 16v112h128v-624q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h16v-393q-32-19-32-55 0-26 19-45t45-19 45 19 19 45q0 36-32 55v9h272q16 0 16 16v224q0 16-16 16h-272v128h16q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v112h128v-112q0-16 16-16h96q16 0 16 16v624h128v-112q0-16 16-16h96q16 0 16 16z'
	  },
	  'forumbee': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M934 150q-317 121-556 362.5t-358 560.5q-20-89-20-176 0-208 102.5-384.5t278.5-279 384-102.5q82 0 169 19zM1203 269q93 65 164 155-389 113-674.5 400.5t-396.5 676.5q-93-72-155-162 112-386 395-671t667-399zM470 1603q115-356 379.5-622t619.5-384q40 92 54 195-292 120-516 345t-343 518q-103-14-194-52zM1536 1661q-193-50-367-115-135 84-290 107 109-205 274-370.5t369-275.5q-21 152-101 284 65 175 115 370z'
	  },
	  'forward': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M45 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19 45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z'
	  },
	  'foursquare': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1000 434l37-194q5-23-9-40t-35-17h-712q-23 0-38.5 17t-15.5 37v1101q0 7 6 1l291-352q23-26 38-33.5t48-7.5h239q22 0 37-14.5t18-29.5q24-130 37-191 4-21-11.5-40t-36.5-19h-294q-29 0-48-19t-19-48v-42q0-29 19-47.5t48-18.5h346q18 0 35-13.5t20-29.5zM1227 212q-15 73-53.5 266.5t-69.5 350-35 173.5q-6 22-9 32.5t-14 32.5-24.5 33-38.5 21-58 10h-271q-13 0-22 10-8 9-426 494-22 25-58.5 28.5t-48.5-5.5q-55-22-55-98v-1410q0-55 38-102.5t120-47.5h888q95 0 127 53t10 159zM1227 212l-158 790q4-17 35-173.5t69.5-350 53.5-266.5z'
	  },
	  'frown-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1134 1229q8 25-4 48.5t-37 31.5-49-4-32-38q-25-80-92.5-129.5t-151.5-49.5-151.5 49.5-92.5 129.5q-8 26-31.5 38t-48.5 4q-26-8-38-31.5t-4-48.5q37-121 138-195t228-74 228 74 138 195zM640 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1152 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'futbol-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M609 816l287-208 287 208-109 336h-355zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM1515 1350q149-203 149-454v-3l-102 89-240-224 63-323 134 12q-150-206-389-282l53 124-287 159-287-159 53-124q-239 76-389 282l135-12 62 323-240 224-102-89v3q0 251 149 454l30-132 326 40 139 298-116 69q117 39 240 39t240-39l-116-69 139-298 326-40z'
	  },
	  'gamepad': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M832 1088v-128q0-14-9-23t-23-9h-192v-192q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v192h-192q-14 0-23 9t-9 23v128q0 14 9 23t23 9h192v192q0 14 9 23t23 9h128q14 0 23-9t9-23v-192h192q14 0 23-9t9-23zM1408 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1664 896q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1920 1024q0 212-150 362t-362 150q-192 0-338-128h-220q-146 128-338 128-212 0-362-150t-150-362 150-362 362-150h896q212 0 362 150t150 362z'
	  },
	  'gavel': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z'
	  },
	  'gbp': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1020 1137v367q0 14-9 23t-23 9h-956q-14 0-23-9t-9-23v-150q0-13 9.5-22.5t22.5-9.5h97v-383h-95q-14 0-23-9.5t-9-22.5v-131q0-14 9-23t23-9h95v-223q0-171 123.5-282t314.5-111q185 0 335 125 9 8 10 20.5t-7 22.5l-103 127q-9 11-22 12-13 2-23-7-5-5-26-19t-69-32-93-18q-85 0-137 47t-52 123v215h305q13 0 22.5 9t9.5 23v131q0 13-9.5 22.5t-22.5 9.5h-305v379h414v-181q0-13 9-22.5t23-9.5h162q14 0 23 9.5t9 22.5z'
	  },
	  'ge': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M874 1638v66q-208-6-385-109.5t-283-275.5l58-34q29 49 73 99l65-57q148 168 368 212l-17 86q65 12 121 13zM276 1108l-83 28q22 60 49 112l-57 33q-98-180-98-385t98-385l57 33q-30 56-49 112l82 28q-35 100-35 212 0 109 36 212zM1528 1285l58 34q-106 172-283 275.5t-385 109.5v-66q56-1 121-13l-17-86q220-44 368-212l65 57q44-50 73-99zM1377 731l-233 80q14 42 14 85t-14 85l232 80q-31 92-98 169l-185-162q-57 67-147 85l48 241q-52 10-98 10t-98-10l48-241q-90-18-147-85l-185 162q-67-77-98-169l232-80q-14-42-14-85t14-85l-233-80q33-93 99-169l185 162q59-68 147-86l-48-240q44-10 98-10t98 10l-48 240q88 18 147 86l185-162q66 76 99 169zM874 88v66q-65 2-121 13l17 86q-220 42-368 211l-65-56q-38 42-73 98l-57-33q106-172 282-275.5t385-109.5zM1705 896q0 205-98 385l-57-33q27-52 49-112l-83-28q36-103 36-212 0-112-35-212l82-28q-19-56-49-112l57-33q98 180 98 385zM1585 473l-57 33q-35-56-73-98l-65 56q-148-169-368-211l17-86q-56-11-121-13v-66q209 6 385 109.5t282 275.5zM1748 896q0-173-67.5-331t-181.5-272-272-181.5-331-67.5-331 67.5-272 181.5-181.5 272-67.5 331 67.5 331 181.5 272 272 181.5 331 67.5 331-67.5 272-181.5 181.5-272 67.5-331zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'gear': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1536 787v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z'
	  },
	  'gears': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M896 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1664 1408q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1664 384q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1280 805v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 10 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 9-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zM1920 1338v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zM1920 314v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z'
	  },
	  'genderless': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1024 960q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1152 960q0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5 223.5 45.5 184 123 123 184 45.5 223.5z'
	  },
	  'get-pocket': {
	    'width': 1720,
	    'height': 1792,
	    'd': 'M1565 128q65 0 110 45.5t45 110.5v519q0 176-68 336t-182.5 275-274 182.5-334.5 67.5q-176 0-335.5-67.5t-274.5-182.5-183-275-68-336v-519q0-64 46-110t110-46h1409zM861 1192q47 0 82-33l404-388q37-35 37-85 0-49-34.5-83.5t-83.5-34.5q-47 0-82 33l-323 310-323-310q-35-33-81-33-49 0-83.5 34.5t-34.5 83.5q0 51 36 85l405 388q33 33 81 33z'
	  },
	  'gg-circle': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M717 1354l271-271-279-279-88 88 192 191-96 96-279-279 279-279 40 40 87-87-127-128-454 454zM1075 1346l454-454-454-454-271 271 279 279 88-88-192-191 96-96 279 279-279 279-40-40-87 88zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'gg': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M736 800l384 384-384 384-672-672 672-672 168 168-96 96-72-72-480 480 480 480 193-193-289-287zM1312 224l672 672-672 672-168-168 96-96 72 72 480-480-480-480-193 193 289 287-96 96-384-384z'
	  },
	  'gift': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M928 1356v-56-468-192h-320v192 468 56q0 25 18 38.5t46 13.5h192q28 0 46-13.5t18-38.5zM472 512h195l-126-161q-26-31-69-31-40 0-68 28t-28 68 28 68 68 28zM1160 416q0-40-28-68t-68-28q-43 0-69 31l-125 161h194q40 0 68-28t28-68zM1536 672v320q0 14-9 23t-23 9h-96v416q0 40-28 68t-68 28h-1088q-40 0-68-28t-28-68v-416h-96q-14 0-23-9t-9-23v-320q0-14 9-23t23-9h440q-93 0-158.5-65.5t-65.5-158.5 65.5-158.5 158.5-65.5q107 0 168 77l128 165 128-165q61-77 168-77 93 0 158.5 65.5t65.5 158.5-65.5 158.5-158.5 65.5h440q14 0 23 9t9 23z'
	  },
	  'git-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M582 1308q0 66-93 66-107 0-107-63 0-64 98-64 102 0 102 61zM546 842q0 85-74 85-77 0-77-84 0-90 77-90 36 0 55 25.5t19 63.5zM712 767v-125q-78 29-135 29-50-29-110-29-86 0-145 57t-59 143q0 50 29.5 102t73.5 67v3q-38 17-38 85 0 53 41 77v3q-113 37-113 139 0 45 20 78.5t54 51 72 25.5 81 8q224 0 224-188 0-67-48-99t-126-46q-27-5-51.5-20.5t-24.5-39.5q0-44 49-52 77-15 122-70t45-134q0-24-10-52 37-9 49-13zM771 1186h137q-2-27-2-82v-387q0-46 2-69h-137q3 23 3 71v392q0 50-3 75zM1280 1170v-121q-30 21-68 21-53 0-53-82v-225h52q9 0 26.5 1t26.5 1v-117h-105q0-82 3-102h-140q4 24 4 55v47h-60v117q36-3 37-3 3 0 11 0.5t12 0.5v2h-2v217q0 37 2.5 64t11.5 56.5 24.5 48.5 43.5 31 66 12q64 0 108-24zM924 464q0-36-24-63.5t-60-27.5-60.5 27-24.5 64q0 36 25 62.5t60 26.5 59.5-27 24.5-62zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'git': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M595 1514q0-100-165-100-158 0-158 104 0 101 172 101 151 0 151-105zM536 759q0-61-30-102t-89-41q-124 0-124 145 0 135 124 135 119 0 119-137zM805 435v202q-36 12-79 22 16 43 16 84 0 127-73 216.5t-197 112.5q-40 8-59.5 27t-19.5 58q0 31 22.5 51.5t58 32 78.5 22 86 25.5 78.5 37.5 58 64 22.5 98.5q0 304-363 304-69 0-130-12.5t-116-41-87.5-82-32.5-127.5q0-165 182-225v-4q-67-41-67-126 0-109 63-137v-4q-72-24-119.5-108.5t-47.5-165.5q0-139 95-231.5t235-92.5q96 0 178 47 98 0 218-47zM1123 1316h-222q4-45 4-134v-609q0-94-4-128h222q-4 33-4 124v613q0 89 4 134zM1724 1094v196q-71 39-174 39-62 0-107-20t-70-50-39.5-78-18.5-92-4-103v-351h2v-4q-7 0-19-1t-18-1q-21 0-59 6v-190h96v-76q0-54-6-89h227q-6 41-6 165h171v190q-15 0-43.5-2t-42.5-2h-85v365q0 131 87 131 61 0 109-33zM1148 147q0 58-39 101.5t-96 43.5q-58 0-98-43.5t-40-101.5q0-59 39.5-103t98.5-44q58 0 96.5 44.5t38.5 102.5z'
	  },
	  'github-alt': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M640 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zM1280 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zM1440 1216q0-120-69-204t-187-84q-41 0-195 21-71 11-157 11t-157-11q-152-21-195-21-118 0-187 84t-69 204q0 88 32 153.5t81 103 122 60 140 29.5 149 7h168q82 0 149-7t140-29.5 122-60 81-103 32-153.5zM1664 1040q0 207-61 331-38 77-105.5 133t-141 86-170 47.5-171.5 22-167 4.5q-78 0-142-3t-147.5-12.5-152.5-30-137-51.5-121-81-86-115q-62-123-62-331 0-237 136-396-27-82-27-170 0-116 51-218 108 0 190 39.5t189 123.5q147-35 309-35 148 0 280 32 105-82 187-121t189-39q51 102 51 218 0 87-27 168 136 160 136 398z'
	  },
	  'github-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M394 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zM352 1291q9 12 0 19-8 6-17-7t0-18q9-7 17 6zM291 1231q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zM322 1265q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zM451 1377q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zM514 1382q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zM572 1372q2 10-14 14t-18-8 14-15q16-2 18 9zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 0.5 103t0.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'github': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 0.5 89t0.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'gittip': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M773 1302l350-473q16-22 24.5-59t-6-85-61.5-79q-40-26-83-25.5t-73.5 17.5-54.5 45q-36 40-96 40-59 0-95-40-24-28-54.5-45t-73.5-17.5-84 25.5q-46 31-60.5 79t-6 85 24.5 59zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'glass': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1699 186q0 35-43 78l-632 632v768h320q26 0 45 19t19 45-19 45-45 19h-896q-26 0-45-19t-19-45 19-45 45-19h320v-768l-632-632q-43-43-43-78 0-23 18-36.5t38-17.5 43-4h1408q23 0 43 4t38 17.5 18 36.5z'
	  },
	  'globe': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM1042 649q-2 1-9.5 9.5t-13.5 9.5q2 0 4.5-5t5-11 3.5-7q6-7 22-15 14-6 52-12 34-8 51 11-2-2 9.5-13t14.5-12q3-2 15-4.5t15-7.5l2-22q-12 1-17.5-7t-6.5-21q0 2-6 8 0-7-4.5-8t-11.5 1-9 1q-10-3-15-7.5t-8-16.5-4-15q-2-5-9.5-10.5t-9.5-10.5q-1-2-2.5-5.5t-3-6.5-4-5.5-5.5-2.5-7 5-7.5 10-4.5 5q-3-2-6-1.5t-4.5 1-4.5 3-5 3.5q-3 2-8.5 3t-8.5 2q15-5-1-11-10-4-16-3 9-4 7.5-12t-8.5-14h5q-1-4-8.5-8.5t-17.5-8.5-13-6q-8-5-34-9.5t-33-0.5q-5 6-4.5 10.5t4 14 3.5 12.5q1 6-5.5 13t-6.5 12q0 7 14 15.5t10 21.5q-3 8-16 16t-16 12q-5 8-1.5 18.5t10.5 16.5q2 2 1.5 4t-3.5 4.5-5.5 4-6.5 3.5l-3 2q-11 5-20.5-6t-13.5-26q-7-25-16-30-23-8-29 1-5-13-41-26-25-9-58-4 6-1 0-15-7-15-19-12 3-6 4-17.5t1-13.5q3-13 12-23 1-1 7-8.5t9.5-13.5 0.5-6q35 4 50-11 5-5 11.5-17t10.5-17q9-6 14-5.5t14.5 5.5 14.5 5q14 1 15.5-11t-7.5-20q12 1 3-17-5-7-8-9-12-4-27 5-8 4 2 8-1-1-9.5 10.5t-16.5 17.5-16-5q-1-1-5.5-13.5t-9.5-13.5q-8 0-16 15 3-8-11-15t-24-8q19-12-8-27-7-4-20.5-5t-19.5 4q-5 7-5.5 11.5t5 8 10.5 5.5 11.5 4 8.5 3q14 10 8 14-2 1-8.5 3.5t-11.5 4.5-6 4q-3 4 0 14t-2 14q-5-5-9-17.5t-7-16.5q7 9-25 6l-10-1q-4 0-16 2t-20.5 1-13.5-8q-4-8 0-20 1-4 4-2-4-3-11-9.5t-10-8.5q-46 15-94 41 6 1 12-1 5-2 13-6.5t10-5.5q34-14 42-7l5-5q14 16 20 25-7-4-30-1-20 6-22 12 7 12 5 18-4-3-11.5-10t-14.5-11-15-5q-16 0-22 1-146 80-235 222 7 7 12 8 4 1 5 9t2.5 11 11.5-3q9 8 3 19 1-1 44 27 19 17 21 21 3 11-10 18-1-2-9-9t-9-4q-3 5 0.5 18.5t10.5 12.5q-7 0-9.5 16t-2.5 35.5-1 23.5l2 1q-3 12 5.5 34.5t21.5 19.5q-13 3 20 43 6 8 8 9 3 2 12 7.5t15 10 10 10.5q4 5 10 22.5t14 23.5q-2 6 9.5 20t10.5 23q-1 0-2.5 1t-2.5 1q3 7 15.5 14t15.5 13q1 3 2 10t3 11 8 2q2-20-24-62-15-25-17-29-3-5-5.5-15.5t-4.5-14.5q2 0 6 1.5t8.5 3.5 7.5 4 2 3q-3 7 2 17.5t12 18.5 17 19 12 13q6 6 14 19.5t0 13.5q9 0 20 10t17 20q5 8 8 26t5 24q2 7 8.5 13.5t12.5 9.5l16 8t13 7q5 2 18.5 10.5t21.5 11.5q10 4 16 4t14.5-2.5 13.5-3.5q15-2 29 15t21 21q36 19 55 11-2 1 0.5 7.5t8 15.5 9 14.5 5.5 8.5q5 6 18 15t18 15q6-4 7-9-3 8 7 20t18 10q14-3 14-32-31 15-49-18 0-1-2.5-5.5t-4-8.5-2.5-8.5 0-7.5 5-3q9 0 10-3.5t-2-12.5-4-13q-1-8-11-20t-12-15q-5 9-16 8t-16-9q0 1-1.5 5.5t-1.5 6.5q-13 0-15-1 1-3 2.5-17.5t3.5-22.5q1-4 5.5-12t7.5-14.5 4-12.5-4.5-9.5-17.5-2.5q-19 1-26 20-1 3-3 10.5t-5 11.5-9 7q-7 3-24 2t-24-5q-13-8-22.5-29t-9.5-37q0-10 2.5-26.5t3-25-5.5-24.5q3-2 9-9.5t10-10.5q2-1 4.5-1.5t4.5 0 4-1.5 3-6q-1-1-4-3-3-3-4-3 7 3 28.5-1.5t27.5 1.5q15 11 22-2 0-1-2.5-9.5t-0.5-13.5q5 27 29 9 3 3 15.5 5t17.5 5q3 2 7 5.5t5.5 4.5 5-0.5 8.5-6.5q10 14 12 24 11 40 19 44 7 3 11 2t4.5-9.5 0-14-1.5-12.5l-1-8v-18l-1-8q-15-3-18.5-12t1.5-18.5 15-18.5q1-1 8-3.5t15.5-6.5 12.5-8q21-19 15-35 7 0 11-9-1 0-5-3t-7.5-5-4.5-2q9-5 2-16 5-3 7.5-11t7.5-10q9 12 21 2 7-8 1-16 5-7 20.5-10.5t18.5-9.5q7 2 8-2t1-12 3-12q4-5 15-9t13-5l17-11q3-4 0-4 18 2 31-11 10-11-6-20 3-6-3-9.5t-15-5.5q3-1 11.5-0.5t10.5-1.5q15-10-7-16-17-5-43 12zM879 1526q206-36 351-189-3-3-12.5-4.5t-12.5-3.5q-18-7-24-8 1-7-2.5-13t-8-9-12.5-8-11-7q-2-2-7-6t-7-5.5-7.5-4.5-8.5-2-10 1l-3 1q-3 1-5.5 2.5t-5.5 3-4 3 0 2.5q-21-17-36-22-5-1-11-5.5t-10.5-7-10-1.5-11.5 7q-5 5-6 15t-2 13q-7-5 0-17.5t2-18.5q-3-6-10.5-4.5t-12 4.5-11.5 8.5-9 6.5-8.5 5.5-8.5 7.5q-3 4-6 12t-5 11q-2-4-11.5-6.5t-9.5-5.5q2 10 4 35t5 38q7 31-12 48-27 25-29 40-4 22 12 26 0 7-8 20.5t-7 21.5q0 6 2 16z'
	  },
	  'google-plus-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M917 905q0-26-6-64h-362v132h217q-3 24-16.5 50t-37.5 53-66.5 44.5-96.5 17.5q-99 0-169-71t-70-171 70-171 169-71q92 0 153 59l104-101q-108-100-257-100-160 0-272 112.5t-112 271.5 112 271.5 272 112.5q165 0 266.5-105t101.5-270zM1262 951h109v-110h-109v-110h-110v110h-110v110h110v110h110v-110zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'google-plus': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1437 913q0 208-87 370.5t-248 254-369 91.5q-149 0-285-58t-234-156-156-234-58-285 58-285 156-234 234-156 285-58q286 0 491 192l-199 191q-117-113-292-113-123 0-227.5 62t-165.5 168.5-61 232.5 61 232.5 165.5 168.5 227.5 62q83 0 152.5-23t114.5-57.5 78.5-78.5 49-83 21.5-74h-416v-252h692q12 63 12 122zM2304 791v210h-209v209h-210v-209h-209v-210h209v-209h210v209h209z'
	  },
	  'google-wallet': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M602 587q19 61 31 123.5t17 141.5-14 159-62 145q-21-81-67-157t-95.5-127-99-90.5-78.5-57.5-33-19q-62-34-81.5-100t14.5-128 101-81.5 129 14.5q138 83 238 177zM927 300q11 25 20.5 46t36.5 100.5 42.5 150.5 25.5 179.5 0 205.5-47.5 209.5-105.5 208.5q-51 72-138 72-54 0-98-31-57-40-69-109t28-127q60-85 81-195t13-199.5-32-180.5-39-128-22-52q-31-63-8.5-129.5t85.5-97.5q34-17 75-17 47 0 88.5 25t63.5 69zM1248 969q-17 160-72 311-17-131-63-246 25-174-5-361-27-178-94-342 114 90 212 211 9 37 15 80 26 179 7 347zM1520 96q9 17 23.5 49.5t43.5 117.5 50.5 178 34 227.5 5 269-47 300-112.5 323.5q-22 48-66 75.5t-95 27.5q-39 0-74-16-67-31-92.5-100t4.5-136q58-126 90-257.5t37.5-239.5-3.5-213.5-26.5-180.5-38.5-138.5-32.5-90-15.5-32.5q-34-65-11.5-135.5t87.5-104.5q37-20 81-20 49 0 91.5 25.5t66.5 70.5z'
	  },
	  'google': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z'
	  },
	  'graduation-cap': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1774 836l18 316q4 69-82 128t-235 93.5-323 34.5-323-34.5-235-93.5-82-128l18-316 574 181q22 7 48 7t48-7zM2304 512q0 23-22 31l-1120 352q-4 1-10 1t-10-1l-652-206q-43 34-71 111.5t-34 178.5q63 36 63 109 0 69-58 107l58 433q2 14-8 25-9 11-24 11h-192q-15 0-24-11-10-11-8-25l58-433q-58-38-58-107 0-73 65-111 11-207 98-330l-333-104q-22-8-22-31t22-31l1120-352q4-1 10-1t10 1l1120 352q22 8 22 31z'
	  },
	  'gratipay': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M773 1302l350-473q16-22 24.5-59t-6-85-61.5-79q-40-26-83-25.5t-73.5 17.5-54.5 45q-36 40-96 40-59 0-95-40-24-28-54.5-45t-73.5-17.5-84 25.5q-46 31-60.5 79t-6 85 24.5 59zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'group': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M593 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zM1664 1533q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM1344 640q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zM1920 865q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zM1792 256q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z'
	  },
	  'h-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 1344v-896q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-512v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v896q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h512v320q0 26 19 45t45 19h128q26 0 45-19t19-45zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'hacker-news': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'hand-grab-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 384q-53 0-90.5 37.5t-37.5 90.5v128h-32v-93q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v429l-32-30v-172q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v224q0 47 35 82l310 296q39 39 39 102 0 26 19 45t45 19h640q26 0 45-19t19-45v-25q0-41 10-77l108-436q10-36 10-77v-246q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v32h-32v-125q0-40-25-72.5t-64-40.5q-14-2-23-2-46 0-79 33t-33 79v128h-32v-122q0-51-32.5-89.5t-82.5-43.5q-5-1-13-1zM768 256q84 0 149 50 57-34 123-34 59 0 111 27t86 76q27-7 59-7 100 0 170 71.5t70 171.5v246q0 51-13 108l-109 436q-6 24-6 71 0 80-56 136t-136 56h-640q-84 0-138-58.5t-54-142.5l-308-296q-76-73-76-175v-224q0-99 70.5-169.5t169.5-70.5q11 0 16 1 6-95 75.5-160t164.5-65q52 0 98 21 72-69 174-69z'
	  },
	  'hand-lizard-o': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1151 0q61 0 116 28t91 77l572 781q118 159 118 359v355q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-177l-286-143h-546q-80 0-136-56t-56-136v-32q0-119 84.5-203.5t203.5-84.5h420l42-128h-686q-100 0-173.5-67.5t-81.5-166.5q-65-79-65-182v-32q0-80 56-136t136-56h959zM1920 1600v-355q0-157-93-284l-573-781q-39-52-103-52h-959q-26 0-45 19t-19 45q0 32 1.5 49.5t9.5 40.5 25 43q10-31 35.5-50t56.5-19h832v32h-832q-26 0-45 19t-19 45q0 44 3 58 8 44 44 73t81 29h640 91q40 0 68 28t28 68q0 15-5 30l-64 192q-10 29-35 47.5t-56 18.5h-443q-66 0-113 47t-47 113v32q0 26 19 45t45 19h561q16 0 29 7l317 158q24 13 38.5 36t14.5 50v197q0 26 19 45t45 19h384q26 0 45-19t19-45z'
	  },
	  'hand-o-down': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 960q0-84-32-183t-64-194-32-167v-32h-640v32q0 35-12 67.5t-37 62.5-46 50-54 49q-9 8-14 12-81 72-145 112-22 14-68 38-3 1-22.5 10.5t-36 18.5-35.5 20-30.5 21.5-11.5 18.5q0 71 30.5 115.5t97.5 44.5q43 0 84.5-15t68-33 55-33 48.5-15v576q0 50 38.5 89t89.5 39q52 0 90-38t38-90v-331q46 35 103 35 69 0 119-53 32 18 69 18t73.5-17.5 52.5-47.5q24 4 56 4 85 0 126-48.5t41-135.5zM1280 192q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1536 956q0 142-77.5 230t-217.5 87l-5-1q-76 61-178 61-22 0-43-3-54 30-119 37v169q0 105-76 180.5t-181 75.5q-103 0-179-76t-76-180v-374q-54 22-128 22-121 0-188.5-81.5t-67.5-206.5q0-38 17.5-69.5t49.5-55 63-40.5 72-37 62-33q55-35 129-100 3-2 17-14t21.5-19 21.5-20.5 22.5-24 18-22.5 14-23.5 4.5-21.5v-288q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v288q0 59 59 223 69 190 69 317z'
	  },
	  'hand-o-left': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1376 1408h32v-640h-32q-35 0-67.5-12t-62.5-37-50-46-49-54q-2-3-3.5-4.5t-4-4.5-4.5-5q-72-81-112-145-14-22-38-68-1-3-10.5-22.5t-18.5-36-20-35.5-21.5-30.5-18.5-11.5q-71 0-115.5 30.5t-44.5 97.5q0 43 15 84.5t33 68 33 55 15 48.5h-576q-50 0-89 38.5t-39 89.5q0 52 38 90t90 38h331q-15 17-25 47.5t-10 55.5q0 69 53 119-18 32-18 69t17.5 73.5 47.5 52.5q-4 24-4 56 0 85 48.5 126t135.5 41q84 0 183-32t194-64 167-32zM1664 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1792 768v640q0 53-37.5 90.5t-90.5 37.5h-288q-59 0-223 59-190 69-317 69-142 0-230-77.5t-87-217.5l1-5q-61-76-61-178 0-22 3-43-33-57-37-119h-169q-105 0-180.5-76t-75.5-181q0-103 76-179t180-76h374q-22-60-22-128 0-122 81.5-189t206.5-67q38 0 69.5 17.5t55 49.5 40.5 63 37 72 33 62q35 55 100 129 2 3 14 17t19 21.5 20.5 21.5 24 22.5 22.5 18 23.5 14 21.5 4.5h288q53 0 90.5 37.5t37.5 90.5z'
	  },
	  'hand-o-right': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M256 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 768q0-51-39-89.5t-89-38.5h-576q0-20 15-48.5t33-55 33-68 15-84.5q0-67-44.5-97.5t-115.5-30.5q-24 0-90 139-24 44-37 65-40 64-112 145-71 81-101 106-69 57-140 57h-32v640h32q72 0 167 32t193.5 64 179.5 32q189 0 189-167 0-26-5-56 30-16 47.5-52.5t17.5-73.5-18-69q53-50 53-119 0-25-10-55.5t-25-47.5h331q52 0 90-38t38-90zM1792 767q0 105-75.5 181t-180.5 76h-169q-4 62-37 119 3 21 3 43 0 101-60 178 1 139-85 219.5t-227 80.5q-133 0-322-69-164-59-223-59h-288q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h288q10 0 21.5-4.5t23.5-14 22.5-18 24-22.5 20.5-21.5 19-21.5 14-17q65-74 100-129 13-21 33-62t37-72 40.5-63 55-49.5 69.5-17.5q125 0 206.5 67t81.5 189q0 68-22 128h374q104 0 180 76t76 179z'
	  },
	  'hand-o-up': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 1600q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 836q0-189-167-189-26 0-56 5-16-30-52.5-47.5t-73.5-17.5-69 18q-50-53-119-53-25 0-55.5 10t-47.5 25v-331q0-52-38-90t-90-38q-51 0-89.5 39t-38.5 89v576q-20 0-48.5-15t-55-33-68-33-84.5-15q-67 0-97.5 44.5t-30.5 115.5q0 24 139 90 44 24 65 37 64 40 145 112 81 71 106 101 57 69 57 140v32h640v-32q0-72 32-167t64-193.5 32-179.5zM1536 831q0 133-69 322-59 164-59 223v288q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5v-288q0-10-4.5-21.5t-14-23.5-18-22.5-22.5-24-21.5-20.5-21.5-19-17-14q-74-65-129-100-21-13-62-33t-72-37-63-40.5-49.5-55-17.5-69.5q0-125 67-206.5t189-81.5q68 0 128 22v-374q0-104 76-180t179-76q105 0 181 75.5t76 180.5v169q62 4 119 37 21-3 43-3 101 0 178 60 139-1 219.5 85t80.5 227z'
	  },
	  'hand-paper-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M880 128q-46 0-79 33t-33 79v656h-32v-528q0-46-33-79t-79-33-79 33-33 79v528 256l-154-205q-38-51-102-51-53 0-90.5 37.5t-37.5 90.5q0 43 26 77l384 512q38 51 102 51h688q34 0 61-22t34-56l76-405q5-32 5-59v-498q0-46-33-79t-79-33-79 33-33 79v272h-32v-528q0-46-33-79t-79-33-79 33-33 79v528h-32v-656q0-46-33-79t-79-33zM880 0q68 0 125.5 35.5t88.5 96.5q19-4 42-4 99 0 169.5 70.5t70.5 169.5v17q105-6 180.5 64t75.5 175v498q0 40-8 83l-76 404q-14 79-76.5 131t-143.5 52h-688q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-106 75-181t181-75q78 0 128 34v-434q0-99 70.5-169.5t169.5-70.5q23 0 42 4 31-61 88.5-96.5t125.5-35.5z'
	  },
	  'hand-peace-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1288 647q60 0 107 23 141 63 141 226v177q0 94-23 186l-85 339q-21 86-90.5 140t-157.5 54h-668q-106 0-181-75t-75-181v-401l-239-628q-17-45-17-91 0-106 75-181t181-75q80 0 145.5 45.5t93.5 119.5l17 44v-113q0-106 75-181t181-75 181 75 75 181v261q27-5 48-5 69 0 127.5 36.5t88.5 98.5zM1072 640q-33 0-60.5 18t-41.5 48l-74 163-71 155h55q50 0 90 31.5t50 80.5l154-338q10-20 10-46 0-46-33-79t-79-33zM1293 775q-22 0-40.5 8t-29 16-23.5 29.5-17 30.5-17 37l-132 290q-10 20-10 46 0 46 33 79t79 33q33 0 60.5-18t41.5-48l160-352q9-18 9-38 0-50-32-81.5t-82-31.5zM128 416q0 22 8 46l248 650v69l102-111q43-46 106-46h198l106-233v-535q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5v640h-64l-200-526q-14-37-47-59.5t-73-22.5q-53 0-90.5 37.5t-37.5 90.5zM1180 1664q44 0 78.5-27t45.5-70l85-339q19-73 19-155v-91l-141 310q-17 38-53 61t-78 23q-53 0-93.5-34.5t-48.5-86.5q-44 57-114 57h-208v-32h208q46 0 81-33t35-79-31-79-77-33h-296q-49 0-82 36l-126 136v308q0 53 37.5 90.5t90.5 37.5h668z'
	  },
	  'hand-pointer-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 128q-53 0-90.5 37.5t-37.5 90.5v512 384l-151-202q-41-54-107-54-52 0-89 38t-37 90q0 43 26 77l384 512q38 51 102 51h718q22 0 39.5-13.5t22.5-34.5l92-368q24-96 24-194v-217q0-41-28-71t-68-30-68 28-28 68h-32v-61q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v64h-32v-90q0-55-37-94.5t-91-39.5q-53 0-90.5 37.5t-37.5 90.5v96h-32v-570q0-55-37-94.5t-91-39.5zM640 0q107 0 181.5 77.5t74.5 184.5v220q22-2 32-2 99 0 173 69 47-21 99-21 113 0 184 87 27-7 56-7 94 0 159 67.5t65 161.5v217q0 116-28 225l-92 368q-16 64-68 104.5t-118 40.5h-718q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-105 74.5-180.5t179.5-75.5q71 0 130 35v-547q0-106 75-181t181-75zM768 1408v-384h-32v384h32zM1024 1408v-384h-32v384h32zM1280 1408v-384h-32v384h32z'
	  },
	  'hand-rock-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 384q-53 0-90.5 37.5t-37.5 90.5v128h-32v-93q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v429l-32-30v-172q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v224q0 47 35 82l310 296q39 39 39 102 0 26 19 45t45 19h640q26 0 45-19t19-45v-25q0-41 10-77l108-436q10-36 10-77v-246q0-48-32-81.5t-80-33.5q-46 0-79 33t-33 79v32h-32v-125q0-40-25-72.5t-64-40.5q-14-2-23-2-46 0-79 33t-33 79v128h-32v-122q0-51-32.5-89.5t-82.5-43.5q-5-1-13-1zM768 256q84 0 149 50 57-34 123-34 59 0 111 27t86 76q27-7 59-7 100 0 170 71.5t70 171.5v246q0 51-13 108l-109 436q-6 24-6 71 0 80-56 136t-136 56h-640q-84 0-138-58.5t-54-142.5l-308-296q-76-73-76-175v-224q0-99 70.5-169.5t169.5-70.5q11 0 16 1 6-95 75.5-160t164.5-65q52 0 98 21 72-69 174-69z'
	  },
	  'hand-scissors-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1073 1664h-177q-163 0-226-141-23-49-23-102v-5q-62-30-98.5-88.5t-36.5-127.5q0-38 5-48h-261q-106 0-181-75t-75-181 75-181 181-75h113l-44-17q-74-28-119.5-93.5t-45.5-145.5q0-106 75-181t181-75q46 0 91 17l628 239h401q106 0 181 75t75 181v668q0 88-54 157.5t-140 90.5l-339 85q-92 23-186 23zM1024 953l-155 71-163 74q-30 14-48 41.5t-18 60.5q0 46 33 79t79 33q26 0 46-10l338-154q-49-10-80.5-50t-31.5-90v-55zM1344 1264q0-46-33-79t-79-33q-26 0-46 10l-290 132q-28 13-37 17t-30.5 17-29.5 23.5-16 29-8 40.5q0 50 31.5 82t81.5 32q20 0 38-9l352-160q30-14 48-41.5t18-60.5zM1112 512l-650-248q-24-8-46-8-53 0-90.5 37.5t-37.5 90.5q0 40 22.5 73t59.5 47l526 200v64h-640q-53 0-90.5 37.5t-37.5 90.5 37.5 90.5 90.5 37.5h535l233-106v-198q0-63 46-106l111-102h-69zM1073 1536q82 0 155-19l339-85q43-11 70-45.5t27-78.5v-668q0-53-37.5-90.5t-90.5-37.5h-308l-136 126q-36 33-36 82v296q0 46 33 77t79 31 79-35 33-81v-208h32v208q0 70-57 114 52 8 86.5 48.5t34.5 93.5q0 42-23 78t-61 53l-310 141h91z'
	  },
	  'hand-spock-o': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M816 128q-48 0-79.5 34t-31.5 82q0 14 3 28l150 624h-26l-116-482q-9-38-39.5-62t-69.5-24q-47 0-79 34t-32 81q0 11 4 29 3 13 39 161t68 282 32 138v227l-307-230q-34-26-77-26-52 0-89.5 36.5t-37.5 88.5q0 67 56 110l507 379q34 26 76 26h694q33 0 59-20.5t34-52.5l100-401q8-30 10-88t9-86l116-478q3-12 3-26 0-46-33-79t-80-33q-38 0-69 25.5t-40 62.5l-99 408h-26l132-547q3-14 3-28 0-47-32-80t-80-33q-38 0-68.5 24t-39.5 62l-145 602h-127l-164-682q-9-38-39.5-62t-68.5-24zM1461 1792h-694q-85 0-153-51l-507-380q-50-38-78.5-94t-28.5-118q0-105 75-179t180-74q25 0 49.5 5.5t41.5 11 41 20.5 35 23 38.5 29.5 37.5 28.5l-123-512q-7-35-7-59 0-93 60-162t152-79q14-87 80.5-144.5t155.5-57.5q83 0 148 51.5t85 132.5l103 428 83-348q20-81 85-132.5t148-51.5q87 0 152.5 54t82.5 139q93 10 155 78t62 161q0 30-7 57l-116 477q-5 22-5 67 0 51-13 108l-101 401q-19 75-79.5 122.5t-137.5 47.5z'
	  },
	  'hand-stop-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M880 128q-46 0-79 33t-33 79v656h-32v-528q0-46-33-79t-79-33-79 33-33 79v528 256l-154-205q-38-51-102-51-53 0-90.5 37.5t-37.5 90.5q0 43 26 77l384 512q38 51 102 51h688q34 0 61-22t34-56l76-405q5-32 5-59v-498q0-46-33-79t-79-33-79 33-33 79v272h-32v-528q0-46-33-79t-79-33-79 33-33 79v528h-32v-656q0-46-33-79t-79-33zM880 0q68 0 125.5 35.5t88.5 96.5q19-4 42-4 99 0 169.5 70.5t70.5 169.5v17q105-6 180.5 64t75.5 175v498q0 40-8 83l-76 404q-14 79-76.5 131t-143.5 52h-688q-60 0-114.5-27.5t-90.5-74.5l-384-512q-51-68-51-154 0-106 75-181t181-75q78 0 128 34v-434q0-99 70.5-169.5t169.5-70.5q23 0 42 4 31-61 88.5-96.5t125.5-35.5z'
	  },
	  'hashtag': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M991 1024l64-256h-254l-64 256h254zM1759 520l-56 224q-7 24-31 24h-327l-64 256h311q15 0 25 12 10 14 6 28l-56 224q-5 24-31 24h-327l-81 328q-7 24-31 24h-224q-16 0-26-12-9-12-6-28l78-312h-254l-81 328q-7 24-31 24h-225q-15 0-25-12-9-12-6-28l78-312h-311q-15 0-25-12-9-12-6-28l56-224q7-24 31-24h327l64-256h-311q-15 0-25-12-10-14-6-28l56-224q5-24 31-24h327l81-328q7-24 32-24h224q15 0 25 12 9 12 6 28l-78 312h254l81-328q7-24 32-24h224q15 0 25 12 9 12 6 28l-78 312h311q15 0 25 12 9 12 6 28z'
	  },
	  'hdd-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1040 1216q0 33-23.5 56.5t-56.5 23.5-56.5-23.5-23.5-56.5 23.5-56.5 56.5-23.5 56.5 23.5 23.5 56.5zM1296 1216q0 33-23.5 56.5t-56.5 23.5-56.5-23.5-23.5-56.5 23.5-56.5 56.5-23.5 56.5 23.5 23.5 56.5zM1408 1376v-320q0-13-9.5-22.5t-22.5-9.5h-1216q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5-9.5t9.5-22.5zM178 896h1180l-157-482q-4-13-16-21.5t-26-8.5h-782q-14 0-26 8.5t-16 21.5zM1536 1056v320q0 66-47 113t-113 47h-1216q-66 0-113-47t-47-113v-320q0-25 16-75l197-606q17-53 63-86t101-33h782q55 0 101 33t63 86l197 606q16 50 16 75z'
	  },
	  'header': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1682 1664q-44 0-132.5-3.5t-133.5-3.5q-44 0-132 3.5t-132 3.5q-24 0-37-20.5t-13-45.5q0-31 17-46t39-17 51-7 45-15q33-21 33-140l-1-391q0-21-1-31-13-4-50-4h-675q-38 0-51 4-1 10-1 31l-1 371q0 142 37 164 16 10 48 13t57 3.5 45 15 20 45.5q0 26-12.5 48t-36.5 22q-47 0-139.5-3.5t-138.5-3.5q-43 0-128 3.5t-127 3.5q-23 0-35.5-21t-12.5-45q0-30 15.5-45t36-17.5 47.5-7.5 42-15q33-23 33-143l-1-57v-813q0-3 0.5-26t0-36.5-1.5-38.5-3.5-42-6.5-36.5-11-31.5-16-18q-15-10-45-12t-53-2-41-14-18-45q0-26 12-48t36-22q46 0 138.5 3.5t138.5 3.5q42 0 126.5-3.5t126.5-3.5q25 0 37.5 22t12.5 48q0 30-17 43.5t-38.5 14.5-49.5 4-43 13q-35 21-35 160l1 320q0 21 1 32 13 3 39 3h699q25 0 38-3 1-11 1-32l1-320q0-139-35-160-18-11-58.5-12.5t-66-13-25.5-49.5q0-26 12.5-48t37.5-22q44 0 132 3.5t132 3.5q43 0 129-3.5t129-3.5q25 0 37.5 22t12.5 48q0 30-17.5 44t-40 14.5-51.5 3-44 12.5q-35 23-35 161l1 943q0 119 34 140 16 10 46 13.5t53.5 4.5 41.5 15.5 18 44.5q0 26-12 48t-36 22z'
	  },
	  'headphones': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1664 886q0 166-60 314l-20 49-185 33q-22 83-90.5 136.5t-156.5 53.5v32q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23v32q71 0 130 35.5t93 95.5l68-12q29-95 29-193 0-148-88-279t-236.5-209-315.5-78-315.5 78-236.5 209-88 279q0 98 29 193l68 12q34-60 93-95.5t130-35.5v-32q0-14 9-23t23-9h64q14 0 23 9t9 23v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-32q-88 0-156.5-53.5t-90.5-136.5l-185-33-20-49q-60-148-60-314 0-151 67-291t179-242.5 266-163.5 320-61 320 61 266 163.5 179 242.5 67 291z'
	  },
	  'heart-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zM1792 596q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z'
	  },
	  'heart': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z'
	  },
	  'heartbeat': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1280 1024h305q-5 6-10 10.5t-9 7.5l-3 4-623 600q-18 18-44 18t-44-18l-624-602q-5-2-21-20h369q22 0 39.5-13.5t22.5-34.5l70-281 190 667q6 20 23 33t39 13q21 0 38-13t23-33l146-485 56 112q18 35 57 35zM1792 596q0 145-103 300h-369l-111-221q-8-17-25.5-27t-36.5-8q-45 5-56 46l-129 430-196-686q-6-20-23.5-33t-39.5-13-39 13.5-22 34.5l-116 464h-423q-103-155-103-300 0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z'
	  },
	  'history': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298zM896 608v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23z'
	  },
	  'home': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1408 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 0.5-3t0.5-3l575-474 575 474q1 2 1 6zM1631 923l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z'
	  },
	  'hospital-o': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M384 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 1312v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM640 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 1056v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1152 800v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM896 1664h384v-1152h-256v32q0 40-28 68t-68 28h-448q-40 0-68-28t-28-68v-32h-256v1152h384v-224q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v224zM896 480v-320q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v96h-128v-96q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-96h128v96q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zM1408 448v1280q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-1280q0-26 19-45t45-19h320v-288q0-40 28-68t68-28h448q40 0 68 28t28 68v288h320q26 0 45 19t19 45z'
	  },
	  'hotel': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M256 1024h1728q26 0 45 19t19 45v448h-256v-256h-1536v256h-256v-1216q0-26 19-45t45-19h128q26 0 45 19t19 45v704zM832 704q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM2048 960v-64q0-159-112.5-271.5t-271.5-112.5h-704q-26 0-45 19t-19 45v384h1152z'
	  },
	  'hourglass-1': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM1280 128h-1024q0 66 9 128h1006q9-61 9-128zM1280 1664q0-130-34-249.5t-90.5-208-126.5-152-146-94.5h-230q-76 31-146 94.5t-126.5 152-90.5 208-34 249.5h1024z'
	  },
	  'hourglass-2': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM1280 128h-1024q0 206 85 384h854q85-178 85-384zM1223 1344q-54-141-145.5-241.5t-194.5-142.5h-230q-103 42-194.5 142.5t-145.5 241.5h910z'
	  },
	  'hourglass-3': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM874 836q77-29 149-92.5t129.5-152.5 92.5-210 35-253h-1024q0 132 35 253t92.5 210 129.5 152.5 149 92.5q19 7 30.5 23.5t11.5 36.5-11.5 36.5-30.5 23.5q-137 51-244 196h700q-107-145-244-196-19-7-30.5-23.5t-11.5-36.5 11.5-36.5 30.5-23.5z'
	  },
	  'hourglass-end': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM874 836q77-29 149-92.5t129.5-152.5 92.5-210 35-253h-1024q0 132 35 253t92.5 210 129.5 152.5 149 92.5q19 7 30.5 23.5t11.5 36.5-11.5 36.5-30.5 23.5q-137 51-244 196h700q-107-145-244-196-19-7-30.5-23.5t-11.5-36.5 11.5-36.5 30.5-23.5z'
	  },
	  'hourglass-half': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM1280 128h-1024q0 206 85 384h854q85-178 85-384zM1223 1344q-54-141-145.5-241.5t-194.5-142.5h-230q-103 42-194.5 142.5t-145.5 241.5h910z'
	  },
	  'hourglass-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM874 836q77-29 149-92.5t129.5-152.5 92.5-210 35-253h-1024q0 132 35 253t92.5 210 129.5 152.5 149 92.5q19 7 30.5 23.5t11.5 36.5-11.5 36.5-30.5 23.5q-77 29-149 92.5t-129.5 152.5-92.5 210-35 253h1024q0-132-35-253t-92.5-210-129.5-152.5-149-92.5q-19-7-30.5-23.5t-11.5-36.5 11.5-36.5 30.5-23.5z'
	  },
	  'hourglass-start': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 128q0 261-106.5 461.5t-266.5 306.5q160 106 266.5 306.5t106.5 461.5h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96q0-261 106.5-461.5t266.5-306.5q-160-106-266.5-306.5t-106.5-461.5h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1472q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96zM1280 128h-1024q0 66 9 128h1006q9-61 9-128zM1280 1664q0-130-34-249.5t-90.5-208-126.5-152-146-94.5h-230q-76 31-146 94.5t-126.5 152-90.5 208-34 249.5h1024z'
	  },
	  'hourglass': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1504 1600q14 0 23 9t9 23v128q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h1472zM130 1536q3-55 16-107t30-95 46-87 53.5-76 64.5-69.5 66-60 70.5-55 66.5-47.5 65-43q-43-28-65-43t-66.5-47.5-70.5-55-66-60-64.5-69.5-53.5-76-46-87-30-95-16-107h1276q-3 55-16 107t-30 95-46 87-53.5 76-64.5 69.5-66 60-70.5 55-66.5 47.5-65 43q43 28 65 43t66.5 47.5 70.5 55 66 60 64.5 69.5 53.5 76 46 87 30 95 16 107h-1276zM1504 0q14 0 23 9t9 23v128q0 14-9 23t-23 9h-1472q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h1472z'
	  },
	  'houzz': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M512 1191l512-295v591l-512 296v-592zM0 896v591l512-296zM512 9v591l-512 296v-591zM512 600l512-295v591z'
	  },
	  'html5': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1130 597l16-175h-884l47 534h612l-22 228-197 53-196-53-13-140h-175l22 278 362 100h4v-1l359-99 50-544h-644l-15-181h674zM0 128h1408l-128 1438-578 162-574-162z'
	  },
	  'i-cursor': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M832 128q-320 0-320 224v416h128v128h-128v544q0 224 320 224h64v128h-64q-272 0-384-146-112 146-384 146h-64v-128h64q320 0 320-224v-544h-128v-128h128v-416q0-224-320-224h-64v-128h64q272 0 384 146 112-146 384-146h64v128h-64z'
	  },
	  'ils': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M992 624v496q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-496q0-112-80-192t-192-80h-272v1152q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-1344q0-14 9-23t23-9h464q135 0 249 66.5t180.5 180.5 66.5 249zM1376 160v880q0 135-66.5 249t-180.5 180.5-249 66.5h-464q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h160q14 0 23 9t9 23v768h272q112 0 192-80t80-192v-880q0-14 9-23t23-9h160q14 0 23 9t9 23z'
	  },
	  'image': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760 256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
	  },
	  'inbox': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1023 960h316q-1-3-2.5-8t-2.5-8l-212-496h-708l-212 496q-1 2-2.5 8t-2.5 8h316l95 192h320zM1536 990v482q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-482q0-62 25-123l238-552q10-25 36.5-42t52.5-17h832q26 0 52.5 17t36.5 42l238 552q25 61 25 123z'
	  },
	  'indent': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z'
	  },
	  'industry': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M448 0q26 0 45 19t19 45v891l536-429q17-14 40-14 26 0 45 19t19 45v379l536-429q17-14 40-14 26 0 45 19t19 45v1152q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-1664q0-26 19-45t45-19h384z'
	  },
	  'info-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zM896 480v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'info': {
	    'width': 640,
	    'height': 1792,
	    'd': 'M640 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zM512 192v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z'
	  },
	  'inr': {
	    'width': 898,
	    'height': 1792,
	    'd': 'M898 470v102q0 14-9 23t-23 9h-168q-23 144-129 234t-276 110q167 178 459 536 14 16 4 34-8 18-29 18h-195q-16 0-25-12-306-367-498-571-9-9-9-22v-127q0-13 9.5-22.5t22.5-9.5h112q132 0 212.5-43t102.5-125h-427q-14 0-23-9t-9-23v-102q0-14 9-23t23-9h413q-57-113-268-113h-145q-13 0-22.5-9.5t-9.5-22.5v-133q0-14 9-23t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9h-233q47 61 64 144h171q14 0 23 9t9 23z'
	  },
	  'instagram': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1362 1426v-648h-135q20 63 20 131 0 126-64 232.5t-174 168.5-240 62q-197 0-337-135.5t-140-327.5q0-68 20-131h-141v648q0 26 17.5 43.5t43.5 17.5h1069q25 0 43-17.5t18-43.5zM1078 893q0-124-90.5-211.5t-218.5-87.5q-127 0-217.5 87.5t-90.5 211.5 90.5 211.5 217.5 87.5q128 0 218.5-87.5t90.5-211.5zM1362 533v-165q0-28-20-48.5t-49-20.5h-174q-29 0-49 20.5t-20 48.5v165q0 29 20 49t49 20h174q29 0 49-20t20-49zM1536 325v1142q0 81-58 139t-139 58h-1142q-81 0-139-58t-58-139v-1142q0-81 58-139t139-58h1142q81 0 139 58t58 139z'
	  },
	  'institution': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zM256 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zM1851 1600q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z'
	  },
	  'internet-explorer': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 937q0 56-7 104h-1151q0 146 109.5 244.5t257.5 98.5q99 0 185.5-46.5t136.5-130.5h423q-56 159-170.5 281t-267.5 188.5-321 66.5q-187 0-356-83-228 116-394 116-237 0-237-263 0-115 45-275 17-60 109-229 199-360 475-606-184 79-427 354 63-274 283.5-449.5t501.5-175.5q30 0 45 1 255-117 433-117 64 0 116 13t94.5 40.5 66.5 76.5 24 115q0 116-75 286 101 182 101 390zM1722 297q0-83-53-132t-137-49q-108 0-254 70 121 47 222.5 131.5t170.5 195.5q51-135 51-216zM128 1534q0 86 48.5 132.5t134.5 46.5q115 0 266-83-122-72-213.5-183t-137.5-245q-98 205-98 332zM632 821h728q-5-142-113-237t-251-95q-144 0-251.5 95t-112.5 237z'
	  },
	  'intersex': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q126 158 126 359 0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-149-16-270.5-103t-186.5-223.5-53-291.5q16-204 160-353.5t347-172.5q118-14 228 19t198 103l255-254h-134q-14 0-23-9t-9-23v-64zM576 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'ioxhost': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1463 832q0 35-25 60.5t-61 25.5h-702q-36 0-61-25.5t-25-60.5 25-60.5 61-25.5h702q36 0 61 25.5t25 60.5zM1677 832q0-86-23-170h-982q-36 0-61-25t-25-60q0-36 25-61t61-25h908q-88-143-235-227t-320-84q-177 0-327.5 87.5t-238 237.5-87.5 327q0 86 23 170h982q36 0 61 25t25 60q0 36-25 61t-61 25h-908q88 143 235.5 227t320.5 84q132 0 253-51.5t208-139 139-208 52-253.5zM2048 577q0 35-25 60t-61 25h-131q17 85 17 170 0 167-65.5 319.5t-175.5 263-262.5 176-319.5 65.5q-246 0-448.5-133t-301.5-350h-189q-36 0-61-25t-25-61q0-35 25-60t61-25h132q-17-85-17-170 0-167 65.5-319.5t175.5-263 262.5-176 320.5-65.5q245 0 447.5 133t301.5 350h188q36 0 61 25t25 61z'
	  },
	  'italic': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M0 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z'
	  },
	  'joomla': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1070 1073l-160 160-151 152-30 30q-65 64-151.5 87t-171.5 2q-16 70-72 115t-129 45q-85 0-145-60.5t-60-145.5q0-72 44.5-128t113.5-72q-22-86 1-173t88-152l12-12 151 152-11 11q-37 37-37 89t37 90q37 37 89 37t89-37l30-30 151-152 161-160zM729 391l12 12-152 152-12-12q-37-37-89-37t-89 37-37 89.5 37 89.5l29 29 152 152 160 160-151 152-161-160-151-152-30-30q-68-67-90-159.5t5-179.5q-70-15-115-71t-45-129q0-85 60-145.5t145-60.5q76 0 133.5 49t69.5 123q84-20 169.5 3.5t149.5 87.5zM1536 1458q0 85-60 145.5t-145 60.5q-74 0-131-47t-71-118q-86 28-179.5 6t-161.5-90l-11-12 151-152 12 12q37 37 89 37t89-37 37-89-37-89l-30-30-152-152-160-160 152-152 160 160 152 152 29 30q64 64 87.5 150.5t2.5 171.5q76 11 126.5 68.5t50.5 134.5zM1534 334q0 77-51 135t-127 69q26 85 3 176.5t-90 158.5l-12 12-151-152 12-12q37-37 37-89t-37-89-89-37-89 37l-30 30-152 152-160 160-152-152 161-160 152-152 29-30q67-67 159-89.5t178 3.5q11-75 68.5-126t135.5-51q85 0 145 60.5t60 145.5z'
	  },
	  'jpy': {
	    'width': 1027,
	    'height': 1792,
	    'd': 'M603 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z'
	  },
	  'jsfiddle': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1800 772q111 46 179.5 145.5t68.5 221.5q0 164-118 280.5t-285 116.5q-4 0-11.5-0.5t-10.5-0.5h-1209-1-2-5q-170-10-288-125.5t-118-280.5q0-110 55-203t147-147q-12-39-12-82 0-115 82-196t199-81q95 0 172 58 75-154 222.5-248t326.5-94q166 0 306 80.5t221.5 218.5 81.5 301q0 6-0.5 18t-0.5 18zM468 1038q0 122 84 193t208 71q137 0 240-99-16-20-47.5-56.5t-43.5-50.5q-67 65-144 65-55 0-93.5-33.5t-38.5-87.5q0-53 38.5-87t91.5-34q44 0 84.5 21t73 55 65 75 69 82 77 75 97 55 121.5 21q121 0 204.5-71.5t83.5-190.5q0-121-84-192t-207-71q-143 0-241 97 14 16 29.5 34t34.5 40 29 34q66-64 142-64 52 0 92 33t40 84q0 57-37 91.5t-94 34.5q-43 0-82.5-21t-72-55-65.5-75-69.5-82-77.5-75-96.5-55-118.5-21q-122 0-207 70.5t-85 189.5z'
	  },
	  'key': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M832 512q0-80-56-136t-136-56-136 56-56 136q0 42 19 83-41-19-83-19-80 0-136 56t-56 136 56 136 136 56 136-56 56-136q0-42-19-83 41 19 83 19 80 0 136-56t56-136zM1683 1216q0 17-49 66t-66 49q-9 0-28.5-16t-36.5-33-38.5-40-24.5-26l-96 96 220 220q28 28 28 68 0 42-39 81t-81 39q-40 0-68-28l-671-671q-176 131-365 131-163 0-265.5-102.5t-102.5-265.5q0-160 95-313t248-248 313-95q163 0 265.5 102.5t102.5 265.5q0 189-131 365l355 355 96-96q-3-3-26-24.5t-40-38.5-33-36.5-16-28.5q0-17 49-66t66-49q13 0 23 10 6 6 46 44.5t82 79.5 86.5 86 73 78 28.5 41z'
	  },
	  'keyboard-o': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M384 1168v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM512 912v96q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h224q16 0 16 16zM384 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1408 1168v96q0 16-16 16h-864q-16 0-16-16v-96q0-16 16-16h864q16 0 16 16zM768 912v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM640 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1024 912v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM896 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1280 912v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1664 1168v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1152 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1408 656v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zM1664 656v352q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h112v-240q0-16 16-16h96q16 0 16 16zM1792 1408v-896h-1664v896h1664zM1920 512v896q0 53-37.5 90.5t-90.5 37.5h-1664q-53 0-90.5-37.5t-37.5-90.5v-896q0-53 37.5-90.5t90.5-37.5h1664q53 0 90.5 37.5t37.5 90.5z'
	  },
	  'krw': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M514 1195l81-299h-159l75 300q1 1 1 3t1 3q0-1 0.5-3.5t0.5-3.5zM630 768l35-128h-292l32 128h225zM822 768h139l-35-128h-70zM1271 1196l78-300h-162l81 299q0 1 0.5 3.5t1.5 3.5q0-1 0.5-3t0.5-3zM1382 768l33-128h-297l34 128h230zM1792 800v64q0 14-9 23t-23 9h-213l-164 616q-7 24-31 24h-159q-24 0-31-24l-166-616h-209l-167 616q-7 24-31 24h-159q-11 0-19.5-7t-10.5-17l-160-616h-208q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h175l-33-128h-142q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h109l-89-344q-5-15 5-28 10-12 26-12h137q26 0 31 24l90 360h359l97-360q7-24 31-24h126q24 0 31 24l98 360h365l93-360q5-24 31-24h137q16 0 26 12 10 13 5 28l-91 344h111q14 0 23 9t9 23v64q0 14-9 23t-23 9h-145l-34 128h179q14 0 23 9t9 23z'
	  },
	  'language': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M654 1078q-1 3-12.5-0.5t-31.5-11.5l-20-9q-44-20-87-49-7-5-41-31.5t-38-28.5q-67 103-134 181-81 95-105 110-4 2-19.5 4t-18.5 0q6-4 82-92 21-24 85.5-115t78.5-118q17-30 51-98.5t36-77.5q-8-1-110 33-8 2-27.5 7.5t-34.5 9.5-17 5q-2 2-2 10.5t-1 9.5q-5 10-31 15-23 7-47 0-18-4-28-21-4-6-5-23 6-2 24.5-5t29.5-6q58-16 105-32 100-35 102-35 10-2 43-19.5t44-21.5q9-3 21.5-8t14.5-5.5 6 0.5q2 12-1 33 0 2-12.5 27t-26.5 53.5-17 33.5q-25 50-77 131l64 28q12 6 74.5 32t67.5 28q4 1 10.5 25.5t4.5 30.5zM449 592q3 15-4 28-12 23-50 38-30 12-60 12-26-3-49-26-14-15-18-41l1-3q3 3 19.5 5t26.5 0 58-16q36-12 55-14 17 0 21 17zM1147 721l63 227-139-42zM39 1521l694-232v-1032l-694 233v1031zM1280 1204l102 31-181-657-100-31-216 536 102 31 45-110 211 65zM777 242l573 184v-380zM1088 1565l158 13-54 160-40-66q-130 83-276 108-58 12-91 12h-84q-79 0-199.5-39t-183.5-85q-8-7-8-16 0-8 5-13.5t13-5.5q4 0 18 7.5t30.5 16.5 20.5 11q73 37 159.5 61.5t157.5 24.5q95 0 167-14.5t157-50.5q15-7 30.5-15.5t34-19 28.5-16.5zM1536 486v1079l-774-246q-14 6-375 127.5t-368 121.5q-13 0-18-13 0-1-1-3v-1078q3-9 4-10 5-6 20-11 106-35 149-50v-384l558 198q2 0 160.5-55t316-108.5 161.5-53.5q20 0 20 21v418z'
	  },
	  'laptop': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M416 1280q-66 0-113-47t-47-113v-704q0-66 47-113t113-47h1088q66 0 113 47t47 113v704q0 66-47 113t-113 47h-1088zM384 416v704q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5-9.5t9.5-22.5v-704q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5zM1760 1344h160v96q0 40-47 68t-113 28h-1600q-66 0-113-28t-47-68v-96h160 1600zM1040 1440q16 0 16-16t-16-16h-160q-16 0-16 16t16 16h160z'
	  },
	  'lastfm-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1432 1052q0-173-234-239-35-10-53-16.5t-38-25-29-46.5q0-2-2-8.5t-3-12-1-7.5q0-36 24.5-59.5t60.5-23.5q54 0 71 15h-1q20 15 39 51l93-71q-39-54-49-64-33-29-67.5-39t-85.5-10q-80 0-142 57.5t-62 137.5q0 7 2 23 16 96 64.5 140t148.5 73q29 8 49 15.5t45 21.5 38.5 34.5 13.5 46.5v5q1 58-40.5 93t-100.5 35q-97 0-167-144-23-47-51.5-121.5t-48-125.5-54-110.5-74-95.5-103.5-60.5-147-24.5q-101 0-192 56t-144 148-50 192v1q4 108 50.5 199t133.5 147.5 196 56.5q186 0 279-110 20-27 31-51l-60-109q-42 80-99 116t-146 36q-115 0-191-87t-76-204q0-105 82-189t186-84q112 0 170 53.5t104 172.5q8 21 25.5 68.5t28.5 76.5 31.5 74.5 38.5 74 45.5 62.5 55.5 53.5 66 33 80 13.5q107 0 183-69.5t76-174.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'lastfm': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1292 704q0 6 10 41 10 29 25 49.5t41 34 44 20 55 16.5q325 91 325 332 0 146-105.5 242.5t-254.5 96.5q-59 0-111.5-18.5t-91.5-45.5-77-74.5-63-87.5-53.5-103.5-43.5-103-39.5-106.5-35.5-95q-32-81-61.5-133.5t-73.5-96.5-104-64-142-20q-96 0-183 55.5t-138 144.5-51 185q0 160 106.5 279.5t263.5 119.5q177 0 258-95 56-63 83-116l84 152q-15 34-44 70l1 1q-131 152-388 152-147 0-269.5-79t-190.5-207.5-68-274.5q0-105 43.5-206t116-176.5 172-121.5 204.5-46q87 0 159 19t123.5 50 95 80 72.5 99 58.5 117 50.5 124.5 50 130.5 55 127q96 200 233 200 81 0 138.5-48.5t57.5-128.5q0-42-19-72t-50.5-46-72.5-31.5-84.5-27-87.5-34-81-52-65-82-39-122.5q-3-16-3-33 0-110 87.5-192t198.5-78q78 3 120.5 14.5t90.5 53.5h-1q12 11 23 24.5t26 36 19 27.5l-129 99q-26-49-54-70v-1q-23-21-97-21-49 0-84 33t-35 83z'
	  },
	  'leaf': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1280 704q0-26-19-45t-45-19q-172 0-318 49.5t-259.5 134-235.5 219.5q-19 21-19 45 0 26 19 45t45 19q24 0 45-19 27-24 74-71t67-66q137-124 268.5-176t313.5-52q26 0 45-19t19-45zM1792 506q0 95-20 193-46 224-184.5 383t-357.5 268q-214 108-438 108-148 0-286-47-15-5-88-42t-96-37q-16 0-39.5 32t-45 70-52.5 70-60 32q-30 0-51-11t-31-24-27-42q-2-4-6-11t-5.5-10-3-9.5-1.5-13.5q0-35 31-73.5t68-65.5 68-56 31-48q0-4-14-38t-16-44q-9-51-9-104 0-115 43.5-220t119-184.5 170.5-139 204-95.5q55-18 145-25.5t179.5-9 178.5-6 163.5-24 113.5-56.5l29.5-29.5t29.5-28 27-20 36.5-16 43.5-4.5q39 0 70.5 46t47.5 112 24 124 8 96z'
	  },
	  'leanpub': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1893 392l155 1272q-131 0-257-57-200-91-393-91-226 0-374 148-148-148-374-148-193 0-393 91-128 57-252 57h-5l155-1272q224-127 482-127 233 0 387 106 154-106 387-106 258 0 482 127zM1398 1379q129 0 232 28.5t260 93.5l-124-1021q-171-78-368-78-224 0-374 141-150-141-374-141-197 0-368 78l-124 1021q105-43 165.5-65t148.5-39.5 178-17.5q202 0 374 108 172-108 374-108zM1438 1345l-55-907q-211 4-359 155-152-155-374-155-176 0-336 66l-114 941q124-51 228.5-76t221.5-25q209 0 374 102 172-107 374-102z'
	  },
	  'legal': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z'
	  },
	  'lemon-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1407 826q0-44-7-113.5t-18-96.5q-12-30-17-44t-9-36.5-4-48.5q0-23 5-68.5t5-67.5q0-37-10-55-4-1-13-1-19 0-58 4.5t-59 4.5q-60 0-176-24t-175-24q-43 0-94.5 11.5t-85 23.5-89.5 34q-137 54-202 103-96 73-159.5 189.5t-88 236-24.5 248.5q0 40 12.5 120t12.5 121q0 23-11 66.5t-11 65.5 12 36.5 34 14.5q24 0 72.5-11t73.5-11q57 0 169.5 15.5t169.5 15.5q181 0 284-36 129-45 235.5-152.5t166-245.5 59.5-275zM1535 824q0 165-70 327.5t-196 288-281 180.5q-124 44-326 44-57 0-170-14.5t-169-14.5q-24 0-72.5 14.5t-73.5 14.5q-73 0-123.5-55.5t-50.5-128.5q0-24 11-68t11-67q0-40-12.5-120.5t-12.5-121.5q0-111 18-217.5t54.5-209.5 100.5-194 150-156q78-59 232-120 194-78 316-78 60 0 175.5 24t173.5 24q19 0 57-5t58-5q81 0 118 50.5t37 134.5q0 23-5 68t-5 68q0 10 1 18.5t3 17 4 13.5 6.5 16 6.5 17q16 40 25 118.5t9 136.5z'
	  },
	  'level-down': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M32 256h704q13 0 22.5 9.5t9.5 23.5v863h192q40 0 58 37t-9 69l-320 384q-18 22-49 22t-49-22l-320-384q-26-31-9-69 18-37 58-37h192v-640h-320q-14 0-25-11l-160-192q-13-14-4-34 9-19 29-19z'
	  },
	  'level-up': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1018 603q-18 37-58 37h-192v864q0 14-9 23t-23 9h-704q-21 0-29-18-8-20 4-35l160-192q9-11 25-11h320v-640h-192q-40 0-58-37-17-37 9-68l320-384q18-22 49-22t49 22l320 384q27 32 9 68z'
	  },
	  'life-bouy': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z'
	  },
	  'life-buoy': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z'
	  },
	  'life-ring': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z'
	  },
	  'life-saver': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z'
	  },
	  'lightbulb-o': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M736 576q0 13-9.5 22.5t-22.5 9.5-22.5-9.5-9.5-22.5q0-46-54-71t-106-25q-13 0-22.5-9.5t-9.5-22.5 9.5-22.5 22.5-9.5q50 0 99.5 16t87 54 37.5 90zM896 576q0-72-34.5-134t-90-101.5-123-62-136.5-22.5-136.5 22.5-123 62-90 101.5-34.5 134q0 101 68 180 10 11 30.5 33t30.5 33q128 153 141 298h228q13-145 141-298 10-11 30.5-33t30.5-33q68-79 68-180zM1024 576q0 155-103 268-45 49-74.5 87t-59.5 95.5-34 107.5q47 28 47 82 0 37-25 64 25 27 25 64 0 52-45 81 13 23 13 47 0 46-31.5 71t-77.5 25q-20 44-60 70t-87 26-87-26-60-70q-46 0-77.5-25t-31.5-71q0-24 13-47-45-29-45-81 0-37 25-64-25-27-25-64 0-54 47-82-4-50-34-107.5t-59.5-95.5-74.5-87q-103-113-103-268 0-99 44.5-184.5t117-142 164-89 186.5-32.5 186.5 32.5 164 89 117 142 44.5 184.5z'
	  },
	  'line-chart': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M2048 1536v128h-2048v-1536h128v1408h1920zM1920 288v435q0 21-19.5 29.5t-35.5-7.5l-121-121-633 633q-10 10-23 10t-23-10l-233-233-416 416-192-192 585-585q10-10 23-10t23 10l233 233 464-464-121-121q-16-16-7.5-35.5t29.5-19.5h435q14 0 23 9t9 23z'
	  },
	  'link': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1456 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zM753 511q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zM1648 1216q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z'
	  },
	  'linkedin-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M237 1414h231v-694h-231v694zM483 506q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zM1068 1414h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'linkedin': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M349 625v991h-330v-991h330zM370 319q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zM1536 1048v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z'
	  },
	  'linux': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M663 411q-11 1-15.5 10.5t-8.5 9.5q-5 1-5-5 0-12 19-15h10zM750 425q-4 1-11.5-6.5t-17.5-4.5q24-11 32 2 3 6-3 9zM399 852q-4-1-6 3t-4.5 12.5-5.5 13.5-10 13q-7 10-1 12 4 1 12.5-7t12.5-18q1-3 2-7t2-6 1.5-4.5 0.5-4v-3t-1-2.5-3-2zM1254 1211q0-18-55-42 4-15 7.5-27.5t5-26 3-21.5 0.5-22.5-1-19.5-3.5-22-4-20.5-5-25-5.5-26.5q-10-48-47-103t-72-75q24 20 57 83 87 162 54 278-11 40-50 42-31 4-38.5-18.5t-8-83.5-11.5-107q-9-39-19.5-69t-19.5-45.5-15.5-24.5-13-15-7.5-7q-14-62-31-103t-29.5-56-23.5-33-15-40q-4-21 6-53.5t4.5-49.5-44.5-25q-15-3-44.5-18t-35.5-16q-8-1-11-26t8-51 36-27q37-3 51 30t4 58q-11 19-2 26.5t30 0.5q13-4 13-36v-37q-5-30-13.5-50t-21-30.5-23.5-15-27-7.5q-107 8-89 134 0 15-1 15-9-9-29.5-10.5t-33 0.5-15.5-5q1-57-16-90t-45-34q-27-1-41.5 27.5t-16.5 59.5q-1 15 3.5 37t13 37.5 15.5 13.5q10-3 16-14 4-9-7-8-7 0-15.5-14.5t-9.5-33.5q-1-22 9-37t34-14q17 0 27 21t9.5 39-1.5 22q-22 15-31 29-8 12-27.5 23.5t-20.5 12.5q-13 14-15.5 27t7.5 18q14 8 25 19.5t16 19 18.5 13 35.5 6.5q47 2 102-15 2-1 23-7t34.5-10.5 29.5-13 21-17.5q9-14 20-8 5 3 6.5 8.5t-3 12-16.5 9.5q-20 6-56.5 21.5t-45.5 19.5q-44 19-70 23-25 5-79-2-10-2-9 2t17 19q25 23 67 22 17-1 36-7t36-14 33.5-17.5 30-17 24.5-12 17.5-2.5 8.5 11q0 2-1 4.5t-4 5-6 4.5-8.5 5-9 4.5-10 5-9.5 4.5q-28 14-67.5 44t-66.5 43-49 1q-21-11-63-73-22-31-25-22-1 3-1 10 0 25-15 56.5t-29.5 55.5-21 58 11.5 63q-23 6-62.5 90t-47.5 141q-2 18-1.5 69t-5.5 59q-8 24-29 3-32-31-36-94-2-28 4-56 4-19-1-18l-4 5q-36 65 10 166 5 12 25 28t24 20q20 23 104 90.5t93 76.5q16 15 17.5 38t-14 43-45.5 23q8 15 29 44.5t28 54 7 70.5q46-24 7-92-4-8-10.5-16t-9.5-12-2-6q3-5 13-9.5t20 2.5q46 52 166 36 133-15 177-87 23-38 34-30 12 6 10 52-1 25-23 92-9 23-6 37.5t24 15.5q3-19 14.5-77t13.5-90q2-21-6.5-73.5t-7.5-97 23-70.5q15-18 51-18 1-37 34.5-53t72.5-10.5 60 22.5zM626 384q3-17-2.5-30t-11.5-15q-9-2-9 7 2 5 5 6 10 0 7 15-3 20 8 20 3 0 3-3zM1045 581q-2-8-6.5-11.5t-13-5-14.5-5.5q-5-3-9.5-8t-7-8-5.5-6.5-4-4-4 1.5q-14 16 7 43.5t39 31.5q9 1 14.5-8t3.5-20zM867 368q0-11-5-19.5t-11-12.5-9-3q-14 1-7 7l4 2q14 4 18 31 0 3 8-2zM921 135q0-2-2.5-5t-9-7-9.5-6q-15-15-24-15-9 1-11.5 7.5t-1 13-0.5 12.5q-1 4-6 10.5t-6 9 3 8.5q4 3 8 0t11-9 15-9q1-1 9-1t15-2 9-7zM1486 1476q20 12 31 24.5t12 24-2.5 22.5-15.5 22-23.5 19.5-30 18.5-31.5 16.5-32 15.5-27 13q-38 19-85.5 56t-75.5 64q-17 16-68 19.5t-89-14.5q-18-9-29.5-23.5t-16.5-25.5-22-19.5-47-9.5q-44-1-130-1-19 0-57 1.5t-58 2.5q-44 1-79.5 15t-53.5 30-43.5 28.5-53.5 11.5q-29-1-111-31t-146-43q-19-4-51-9.5t-50-9-39.5-9.5-33.5-14.5-17-19.5q-10-23 7-66.5t18-54.5q1-16-4-40t-10-42.5-4.5-36.5 10.5-27q14-12 57-14t60-12q30-18 42-35t12-51q21 73-32 106-32 20-83 15-34-3-43 10-13 15 5 57 2 6 8 18t8.5 18 4.5 17 1 22q0 15-17 49t-14 48q3 17 37 26 20 6 84.5 18.5t99.5 20.5q24 6 74 22t82.5 23 55.5 4q43-6 64.5-28t23-48-7.5-58.5-19-52-20-36.5q-121-190-169-242-68-74-113-40-11 9-15-15-3-16-2-38 1-29 10-52t24-47 22-42q8-21 26.5-72t29.5-78 30-61 39-54q110-143 124-195-12-112-16-310-2-90 24-151.5t106-104.5q39-21 104-21 53-1 106 13.5t89 41.5q57 42 91.5 121.5t29.5 147.5q-5 95 30 214 34 113 133 218 55 59 99.5 163t59.5 191q8 49 5 84.5t-12 55.5-20 22q-10 2-23.5 19t-27 35.5-40.5 33.5-61 14q-18-1-31.5-5t-22.5-13.5-13.5-15.5-11.5-20.5-9-19.5q-22-37-41-30t-28 49 7 97q20 70 1 195-10 65 18 100.5t73 33 85-35.5q59-49 89.5-66.5t103.5-42.5q53-18 77-36.5t18.5-34.5-25-28.5-51.5-23.5q-33-11-49.5-48t-15-72.5 15.5-47.5q1 31 8 56.5t14.5 40.5 20.5 28.5 21 19 21.5 13 16.5 9.5z'
	  },
	  'list-alt': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M384 1184v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 928v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM384 672v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zM1536 1184v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zM1536 928v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zM1536 672v64q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5zM1664 1376v-832q0-13-9.5-22.5t-22.5-9.5h-1472q-13 0-22.5 9.5t-9.5 22.5v832q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zM1792 288v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z'
	  },
	  'list-ol': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zM383 993v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zM384 413v99h-335v-99h107q0-41 0.5-122t0.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zM1792 800v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zM1792 288v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z'
	  },
	  'list-ul': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM384 896q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zM384 384q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1792 800v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zM1792 288v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z'
	  },
	  'list': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 928v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM256 544v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM256 160v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z'
	  },
	  'location-arrow': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1401 349l-640 1280q-17 35-57 35-5 0-15-2-22-5-35.5-22.5t-13.5-39.5v-576h-576q-22 0-39.5-13.5t-22.5-35.5 4-42 29-30l1280-640q13-7 29-7 27 0 45 19 15 14 18.5 34.5t-6.5 39.5z'
	  },
	  'lock': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M320 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zM1152 864v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z'
	  },
	  'long-arrow-down': {
	    'width': 768,
	    'height': 1792,
	    'd': 'M765 1299q8 19-5 35l-350 384q-10 10-23 10-14 0-24-10l-355-384q-13-16-5-35 9-19 29-19h224v-1248q0-14 9-23t23-9h192q14 0 23 9t9 23v1248h224q21 0 29 19z'
	  },
	  'long-arrow-left': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 800v192q0 14-9 23t-23 9h-1248v224q0 21-19 29t-35-5l-384-350q-10-10-10-23 0-14 10-24l384-354q16-14 35-6 19 9 19 29v224h1248q14 0 23 9t9 23z'
	  },
	  'long-arrow-right': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z'
	  },
	  'long-arrow-up': {
	    'width': 768,
	    'height': 1792,
	    'd': 'M765 493q-9 19-29 19h-224v1248q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-1248h-224q-21 0-29-19t5-35l350-384q10-10 23-10 14 0 24 10l355 384q13 16 5 35z'
	  },
	  'magic': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1190 581l293-293-107-107-293 293zM1637 288q0 27-18 45l-1286 1286q-18 18-45 18t-45-18l-198-198q-18-18-18-45t18-45l1286-1286q18-18 45-18t45 18l198 198q18 18 18 45zM286 98l98 30-98 30-30 98-30-98-98-30 98-30 30-98zM636 260l196 60-196 60-60 196-60-196-196-60 196-60 60-196zM1566 738l98 30-98 30-30 98-30-98-98-30 98-30 30-98zM926 98l98 30-98 30-30 98-30-98-98-30 98-30 30-98z'
	  },
	  'magnet': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 832v128q0 201-98.5 362t-274 251.5-395.5 90.5-395.5-90.5-274-251.5-98.5-362v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v128q0 52 23.5 90t53.5 57 71 30 64 13 44 2 44-2 64-13 71-30 53.5-57 23.5-90v-128q0-26 19-45t45-19h384q26 0 45 19t19 45zM512 192v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h384q26 0 45 19t19 45zM1536 192v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h384q26 0 45 19t19 45z'
	  },
	  'mail-forward': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98 0-175.5 6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123 0 6 2.5 23.5t2.5 26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451 0-199 53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z'
	  },
	  'mail-reply-all': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 1082v70q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v69l-397 398q-19 19-19 45t19 45zM1792 1120q0 58-17 133.5t-38.5 138-48 125-40.5 90.5l-20 40q-8 17-28 17-6 0-9-1-25-8-23-34 43-400-106-565-64-71-170.5-110.5t-267.5-52.5v251q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v262q411 28 599 221 169 173 169 509z'
	  },
	  'mail-reply': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1120q0 166-127 451-3 7-10.5 24t-13.5 30-13 22q-12 17-28 17-15 0-23.5-10t-8.5-25q0-9 2.5-26.5t2.5-23.5q5-68 5-123 0-101-17.5-181t-48.5-138.5-80-101-105.5-69.5-133-42.5-154-21.5-175.5-6h-224v256q0 26-19 45t-45 19-45-19l-512-512q-19-19-19-45t19-45l512-512q19-19 45-19t45 19 19 45v256h224q713 0 875 403 53 134 53 333z'
	  },
	  'male': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 704v416q0 40-28 68t-68 28-68-28-28-68v-352h-64v912q0 46-33 79t-79 33-79-33-33-79v-464h-64v464q0 46-33 79t-79 33-79-33-33-79v-912h-64v352q0 40-28 68t-68 28-68-28-28-68v-416q0-80 56-136t136-56h640q80 0 136 56t56 136zM736 256q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z'
	  },
	  'map-marker': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M768 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zM1024 640q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z'
	  },
	  'map-o': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M2020 11q28 20 28 53v1408q0 20-11 36t-29 23l-640 256q-24 11-48 0l-616-246-616 246q-10 5-24 5-19 0-36-11-28-20-28-53v-1408q0-20 11-36t29-23l640-256q24-11 48 0l616 246 616-246q32-13 60 6zM736 146v1270l576 230v-1270zM128 363v1270l544-217v-1270zM1920 1429v-1270l-544 217v1270z'
	  },
	  'map-pin': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M512 1088q66 0 128-15v655q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-655q61 15 128 15zM512 0q212 0 362 150t150 362-150 362-362 150-362-150-150-362 150-362 362-150zM512 224q14 0 23-9t9-23-9-23-23-9q-146 0-249 103t-103 249q0 14 9 23t23 9 23-9 9-23q0-119 84.5-203.5t203.5-84.5z'
	  },
	  'map-signs': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1745 297q10 10 10 23t-10 23l-141 141q-28 28-68 28h-1344q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h576v-64q0-26 19-45t45-19h128q26 0 45 19t19 45v64h512q40 0 68 28zM768 1216h256v512q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-512zM1600 768q26 0 45 19t19 45v256q0 26-19 45t-45 19h-1344q-40 0-68-28l-141-141q-10-10-10-23t10-23l141-141q28-28 68-28h512v-192h256v192h576z'
	  },
	  'map': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M512 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zM1760 0q13 0 22.5 9.5t9.5 22.5v1472q0 20-17 28l-480 256q-7 4-15 4-13 0-22.5-9.5t-9.5-22.5v-1472q0-20 17-28l480-256q7-4 15-4zM640 0q8 0 14 3l512 256q18 10 18 29v1472q0 13-9.5 22.5t-22.5 9.5q-8 0-14-3l-512-256q-18-10-18-29v-1472q0-13 9.5-22.5t22.5-9.5z'
	  },
	  'mars-double': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1536 416q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q76 95 107.5 214t9.5 247q-31 182-166 312t-318 156q-210 29-384.5-80t-241.5-300q-117-6-221-57.5t-177.5-133-113.5-192.5-32-230q9-135 78-252t182-191.5 248-89.5q118-14 227.5 19t198.5 103l255-254h-134q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q59 74 93 169 182 9 328 124l255-254h-134q-14 0-23-9t-9-23v-64zM1024 832q0-20-4-58-162 25-271 150t-109 292q0 20 4 58 162-25 271-150t109-292zM128 832q0 168 111 294t276 149q-3-29-3-59 0-210 135-369.5t338-196.5q-53-120-163.5-193t-245.5-73q-185 0-316.5 131.5t-131.5 316.5zM1088 1664q185 0 316.5-131.5t131.5-316.5q0-168-111-294t-276-149q3 29 3 59 0 210-135 369.5t-338 196.5q53 120 163.5 193t245.5 73z'
	  },
	  'mars-stroke-h': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1901 915q19 19 19 45t-19 45l-294 294q-9 10-22.5 10t-22.5-10l-45-45q-10-9-10-22.5t10-22.5l185-185h-294v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-132q-24 217-187.5 364.5t-384.5 147.5q-167 0-306-87t-212-236-54-319q15-133 88-245.5t188-182 249-80.5q155-12 292 52.5t224 186 103 271.5h132v-224q0-14 9-23t23-9h64q14 0 23 9t9 23v224h294l-185-185q-10-9-10-22.5t10-22.5l45-45q9-10 22.5-10t22.5 10zM576 1408q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'mars-stroke-v': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M640 644q217 24 364.5 187.5t147.5 384.5q0 167-87 306t-236 212-319 54q-133-15-245.5-88t-182-188-80.5-249q-12-155 52.5-292t186-224 271.5-103v-132h-160q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h160v-165l-92 92q-10 9-23 9t-22-9l-46-46q-9-9-9-22t9-23l202-201q19-19 45-19t45 19l202 201q9 10 9 23t-9 22l-46 46q-9 9-22 9t-23-9l-92-92v165h160q14 0 23 9t9 23v64q0 14-9 23t-23 9h-160v132zM576 1664q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'mars-stroke': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1472 128q26 0 45 19t19 45v416q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-262l-213 214 140 140q9 10 9 23t-9 22l-46 46q-9 9-22 9t-23-9l-140-141-78 79q126 156 126 359 0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5q203 0 359 126l78-78-172-172q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l172 172 213-213h-261q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h416zM576 1536q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'mars': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1472 128q26 0 45 19t19 45v416q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-262l-382 383q126 156 126 359 0 117-45.5 223.5t-123 184-184 123-223.5 45.5-223.5-45.5-184-123-123-184-45.5-223.5 45.5-223.5 123-184 184-123 223.5-45.5q203 0 359 126l382-382h-261q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h416zM576 1536q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'maxcdn': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1745 773l-164 763h-334l178-832q13-56-15-88-27-33-83-33h-169l-204 953h-334l204-953h-286l-204 953h-334l204-953-153-327h1276q101 0 189.5 40.5t147.5 113.5q60 73 81 168.5t0 194.5z'
	  },
	  'meanpath': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1311 842v114q0 24-13.5 38t-37.5 14h-202q-24 0-38-14t-14-38v-114q0-24 14-38t38-14h202q24 0 37.5 14t13.5 38zM821 1072v-250q0-53-32.5-85.5t-85.5-32.5h-133q-68 0-96 52-28-52-96-52h-130q-53 0-85.5 32.5t-32.5 85.5v250q0 22 21 22h55q22 0 22-22v-230q0-24 13.5-38t38.5-14h94q24 0 38 14t14 38v230q0 22 21 22h54q22 0 22-22v-230q0-24 14-38t38-14h97q24 0 37.5 14t13.5 38v230q0 22 22 22h55q21 0 21-22zM1410 976v-154q0-53-33-85.5t-86-32.5h-264q-53 0-86 32.5t-33 85.5v410q0 21 22 21h55q21 0 21-21v-180q31 42 94 42h191q53 0 86-32.5t33-85.5zM1536 360v1072q0 96-68 164t-164 68h-1072q-96 0-164-68t-68-164v-1072q0-96 68-164t164-68h1072q96 0 164 68t68 164z'
	  },
	  'medium': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M597 421v1173q0 25-12.5 42.5t-36.5 17.5q-17 0-33-8l-465-233q-21-10-35.5-33.5t-14.5-46.5v-1140q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5zM661 522l534 866-534-266v-600zM1792 540v1054q0 25-14 40.5t-38 15.5-47-13l-441-220zM1789 420q0 3-256.5 419.5t-300.5 487.5l-390-634 324-527q17-28 52-28 14 0 26 6l541 270q4 2 4 6z'
	  },
	  'medkit': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1280 1120v-192q0-14-9-23t-23-9h-224v-224q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v224h-224q-14 0-23 9t-9 23v192q0 14 9 23t23 9h224v224q0 14 9 23t23 9h192q14 0 23-9t9-23v-224h224q14 0 23-9t9-23zM640 384h512v-128h-512v128zM256 384v1280h-32q-92 0-158-66t-66-158v-832q0-92 66-158t158-66h32zM1440 384v1280h-1088v-1280h160v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h160zM1792 608v832q0 92-66 158t-158 66h-32v-1280h32q92 0 158 66t66 158z'
	  },
	  'meh-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1152 1088q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h640q26 0 45 19t19 45zM640 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1152 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'mercury': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M830 316q145 72 233.5 210.5t88.5 305.5q0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-217-24-364.5-187.5t-147.5-384.5q0-167 88.5-305.5t233.5-210.5q-165-96-228-273-6-16 3.5-29.5t26.5-13.5h69q21 0 29 20 44 106 140 171t214 65 214-65 140-171q8-20 37-20h61q17 0 26.5 13.5t3.5 29.5q-63 177-228 273zM576 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'microphone-slash': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M271 945l-101 101q-42-103-42-214v-128q0-26 19-45t45-19 45 19 19 45v128q0 53 15 113zM1385 343l-361 361v128q0 132-94 226t-226 94q-55 0-109-19l-96 96q97 51 205 51 185 0 316.5-131.5t131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-125-13-235-81l-254 254q-10 10-23 10t-23-10l-82-82q-10-10-10-23t10-23l1234-1234q10-10 23-10t23 10l82 82q10 10 10 23t-10 23zM1005 211l-621 621v-512q0-132 94-226t226-94q102 0 184.5 59t116.5 152z'
	  },
	  'microphone': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M1152 704v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-217-24-364.5-187.5t-147.5-384.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 185 131.5 316.5t316.5 131.5 316.5-131.5 131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45zM896 320v512q0 132-94 226t-226 94-226-94-94-226v-512q0-132 94-226t226-94 226 94 94 226z'
	  },
	  'minus-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1216 960v-128q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v128q0 26 19 45t45 19h768q26 0 45-19t19-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'minus-square-o': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1152 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zM1280 1248v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zM1408 416v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'minus-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 960v-128q0-26-19-45t-45-19h-896q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'minus': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1408 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z'
	  },
	  'mixcloud': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1645 1098q0-59-34-106.5t-87-68.5q-7 45-23 92-7 24-27.5 38t-44.5 14q-12 0-24-3-31-10-45-38.5t-4-58.5q23-71 23-143 0-123-61-227.5t-166-165.5-228-61q-134 0-247 73t-167 194q108 28 188 106 22 23 22 55t-22 54-54 22-55-22q-75-75-180-75-106 0-181 74.5t-75 180.5 75 180.5 181 74.5h1046q79 0 134.5-55.5t55.5-133.5zM1798 1098q0 142-100.5 242t-242.5 100h-1046q-169 0-289-119.5t-120-288.5q0-153 100-267t249-136q62-184 221-298t354-114q235 0 408.5 158.5t196.5 389.5q116 25 192.5 118.5t76.5 214.5zM2048 1098q0 175-97 319-23 33-64 33-24 0-43-13-26-17-32-48.5t12-57.5q71-104 71-233t-71-233q-18-26-12-57t32-49 57.5-11.5 49.5 32.5q97 142 97 318zM2304 1098q0 244-134 443-23 34-64 34-23 0-42-13-26-18-32.5-49t11.5-57q108-164 108-358 0-195-108-357-18-26-11.5-57.5t32.5-48.5q26-18 57-12t49 33q134 198 134 442z'
	  },
	  'mobile-phone': {
	    'width': 768,
	    'height': 1792,
	    'd': 'M464 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zM672 1248v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zM480 400q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zM768 384v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z'
	  },
	  'mobile': {
	    'width': 768,
	    'height': 1792,
	    'd': 'M464 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zM672 1248v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zM480 400q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zM768 384v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z'
	  },
	  'modx': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1427 709l-614-386 92-151h855zM405 974l-184-116v-858l1183 743zM1424 839l147 95v858l-532-335zM1387 818l-500 802h-855l356-571z'
	  },
	  'money': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M768 1152h384v-96h-128v-448h-114l-148 137 77 80q42-37 55-57h2v288h-128v96zM1280 896q0 70-21 142t-59.5 134-101.5 101-138 39-138-39-101.5-101-59.5-134-21-142 21-142 59.5-134 101.5-101 138-39 138 39 101.5 101 59.5 134 21 142zM1792 1152v-512q-106 0-181-75t-75-181h-1152q0 106-75 181t-181 75v512q106 0 181 75t75 181h1152q0-106 75-181t181-75zM1920 320v1152q0 26-19 45t-45 19h-1792q-26 0-45-19t-19-45v-1152q0-26 19-45t45-19h1792q26 0 45 19t19 45z'
	  },
	  'moon-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1262 1303q-54 9-110 9-182 0-337-90t-245-245-90-337q0-192 104-357-201 60-328.5 229t-127.5 384q0 130 51 248.5t136.5 204 204 136.5 248.5 51q144 0 273.5-61.5t220.5-171.5zM1465 1218q-94 203-283.5 324.5t-413.5 121.5q-156 0-298-61t-245-164-164-245-61-298q0-153 57.5-292.5t156-241.5 235.5-164.5 290-68.5q44-2 61 39 18 41-15 72-86 78-131.5 181.5t-45.5 218.5q0 148 73 273t198 198 273 73q118 0 228-51 41-18 72 13 14 14 17.5 34t-4.5 38z'
	  },
	  'mortar-board': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1774 836l18 316q4 69-82 128t-235 93.5-323 34.5-323-34.5-235-93.5-82-128l18-316 574 181q22 7 48 7t48-7zM2304 512q0 23-22 31l-1120 352q-4 1-10 1t-10-1l-652-206q-43 34-71 111.5t-34 178.5q63 36 63 109 0 69-58 107l58 433q2 14-8 25-9 11-24 11h-192q-15 0-24-11-10-11-8-25l58-433q-58-38-58-107 0-73 65-111 11-207 98-330l-333-104q-22-8-22-31t22-31l1120-352q4-1 10-1t10 1l1120 352q22 8 22 31z'
	  },
	  'motorcycle': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M2301 1036q12 103-22 198.5t-99 163.5-158.5 106-196.5 31q-161-11-279.5-125t-134.5-274q-12-111 27.5-210.5t118.5-170.5l-71-107q-96 80-151 194t-55 244q0 27-18.5 46.5t-45.5 19.5h-256-69q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q76 0 152 27l24-45q-123-110-304-110h-64q-26 0-45-19t-19-45 19-45 45-19h128q78 0 145 13.5t116.5 38.5 71.5 39.5 51 36.5h512 115l-85-128h-222q-30 0-49-22.5t-14-52.5q4-23 23-38t43-15h253q33 0 53 28l70 105 114-114q19-19 46-19h101q26 0 45 19t19 45v128q0 26-19 45t-45 19h-179l115 172q131-63 275-36 143 26 244 134.5t118 253.5zM448 1408q115 0 203-72.5t111-183.5h-314q-35 0-55-31-18-32-1-63l147-277q-47-13-91-13-132 0-226 94t-94 226 94 226 226 94zM1856 1408q132 0 226-94t94-226-94-226-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94z'
	  },
	  'mouse-pointer': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1133 1043q31 30 14 69-17 40-59 40h-382l201 476q10 25 0 49t-34 35l-177 75q-25 10-49 0t-35-34l-191-452-312 312q-19 19-45 19-12 0-24-5-40-17-40-59v-1504q0-42 40-59 12-5 24-5 27 0 45 19z'
	  },
	  'music': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 224v1120q0 50-34 89t-86 60.5-103.5 32-96.5 10.5-96.5-10.5-103.5-32-86-60.5-34-89 34-89 86-60.5 103.5-32 96.5-10.5q105 0 192 39v-537l-768 237v709q0 50-34 89t-86 60.5-103.5 32-96.5 10.5-96.5-10.5-103.5-32-86-60.5-34-89 34-89 86-60.5 103.5-32 96.5-10.5q105 0 192 39v-967q0-31 19-56.5t49-35.5l832-256q12-4 28-4 40 0 68 28t28 68z'
	  },
	  'navicon': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 832v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 320v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'
	  },
	  'neuter': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1152 576q0 221-147.5 384.5t-364.5 187.5v612q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-612q-217-24-364.5-187.5t-147.5-384.5q0-117 45.5-223.5t123-184 184-123 223.5-45.5 223.5 45.5 184 123 123 184 45.5 223.5zM576 1024q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'newspaper-o': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1024 512h-384v384h384v-384zM1152 1152v128h-640v-128h640zM1152 384v640h-640v-640h640zM1792 1152v128h-512v-128h512zM1792 896v128h-512v-128h512zM1792 640v128h-512v-128h512zM1792 384v128h-512v-128h512zM256 1344v-960h-128v960q0 26 19 45t45 19 45-19 19-45zM1920 1344v-1088h-1536v1088q0 33-11 64h1483q26 0 45-19t19-45zM2048 128v1216q0 80-56 136t-136 56h-1664q-80 0-136-56t-56-136v-1088h256v-128h1792z'
	  },
	  'object-group': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M2048 384h-128v1024h128v384h-384v-128h-1280v128h-384v-384h128v-1024h-128v-384h384v128h1280v-128h384v384zM1792 128v128h128v-128h-128zM128 128v128h128v-128h-128zM256 1664v-128h-128v128h128zM1664 1536v-128h128v-1024h-128v-128h-1280v128h-128v1024h128v128h1280zM1920 1664v-128h-128v128h128zM1280 640h384v768h-896v-256h-384v-768h896v256zM512 1024h640v-512h-640v512zM1536 1280v-512h-256v384h-384v128h640z'
	  },
	  'object-ungroup': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M2304 768h-128v640h128v384h-384v-128h-896v128h-384v-384h128v-128h-384v128h-384v-384h128v-640h-128v-384h384v128h896v-128h384v384h-128v128h384v-128h384v384zM2048 512v128h128v-128h-128zM1408 128v128h128v-128h-128zM128 128v128h128v-128h-128zM256 1280v-128h-128v128h128zM1536 1152h-128v128h128v-128zM384 1152h896v-128h128v-640h-128v-128h-896v128h-128v640h128v128zM896 1664v-128h-128v128h128zM2176 1664v-128h-128v128h128zM2048 1408v-640h-128v-128h-384v384h128v384h-384v-128h-384v128h128v128h896v-128h128z'
	  },
	  'odnoklassniki-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M927 580q0 66-46.5 112.5t-112.5 46.5-112.5-46.5-46.5-112.5 46.5-112.5 112.5-46.5 112.5 46.5 46.5 112.5zM1141 943q-10-20-28-32t-47.5-9.5-60.5 27.5q-10 8-29 20t-81 32-127 20-124-18-86-36l-27-18q-31-25-60.5-27.5t-47.5 9.5-28 32q-22 45-2 74.5t87 73.5q83 53 226 67l-51 52q-142 142-191 190-22 22-22 52.5t22 52.5l9 9q22 22 52.5 22t52.5-22l191-191q114 115 191 191 22 22 52.5 22t52.5-22l9-9q22-22 22-52.5t-22-52.5l-191-190-52-52q141-14 225-67 67-44 87-73.5t-2-74.5zM1092 580q0-134-95-229t-229-95-229 95-95 229 95 229 229 95 229-95 95-229zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'odnoklassniki': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M640 907q-188 0-321-133t-133-320q0-188 133-321t321-133 321 133 133 321q0 187-133 320t-321 133zM640 230q-92 0-157.5 65.5t-65.5 158.5q0 92 65.5 157.5t157.5 65.5 157.5-65.5 65.5-157.5q0-93-65.5-158.5t-157.5-65.5zM1163 962q13 27 15 49.5t-4.5 40.5-26.5 38.5-42.5 37-61.5 41.5q-115 73-315 94l73 72 267 267q30 31 30 74t-30 73l-12 13q-31 30-74 30t-74-30q-67-68-267-268l-267 268q-31 30-74 30t-73-30l-12-13q-31-30-31-73t31-74l267-267 72-72q-203-21-317-94-39-25-61.5-41.5t-42.5-37-26.5-38.5-4.5-40.5 15-49.5q10-20 28-35t42-22 56 2 65 35q5 4 15 11t43 24.5 69 30.5 92 24 113 11q91 0 174-25.5t120-50.5l38-25q33-26 65-35t56-2 42 22 28 35z'
	  },
	  'opencart': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1524 1561q0 68-48 116t-116 48-116.5-48-48.5-116 48.5-116.5 116.5-48.5 116 48.5 48 116.5zM775 1561q0 68-48.5 116t-116.5 48-116-48-48-116 48-116.5 116-48.5 116.5 48.5 48.5 116.5zM0 67q57 60 110.5 104.5t121 82 136 63 166 45.5 200 31.5 250 18.5 304 9.5 372.5 2.5q139 0 244.5 5t181 16.5 124 27.5 71 39.5 24 51.5-19.5 64-56.5 76.5-89.5 91-116 104.5-139 119q-185 157-286 247 29-51 76.5-109t94-105.5 94.5-98.5 83-91.5 54-80.5 13-70-45.5-55.5-116.5-41-204-23.5-304-5q-168 2-314-6t-256-23-204.5-41-159.5-51.5-122.5-62.5-91.5-66.5-68-71.5-50.5-69.5-40-68-36.5-59.5z'
	  },
	  'openid': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1086 0v1536l-272 128q-228-20-414-102t-293-208.5-107-272.5q0-140 100.5-263.5t275-205.5 391.5-108v172q-217 38-356.5 150t-139.5 255q0 152 154.5 267t388.5 145v-1360zM1755 582l37 390-525-114 147-83q-119-70-280-99v-172q277 33 481 157z'
	  },
	  'opera': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1493 228q-165-110-359-110-155 0-293 73t-240 200q-75 93-119.5 218t-48.5 266v42q4 141 48.5 266t119.5 218q102 127 240 200t293 73q194 0 359-110-121 108-274.5 168t-322.5 60q-29 0-43-1-175-8-333-82t-272-193-181-281-67-339q0-182 71-348t191-286 286-191 348-71h3q168 1 320.5 60.5t273.5 167.5zM1792 896q0 192-77 362.5t-213 296.5q-104 63-222 63-137 0-255-84 154-56 253.5-233t99.5-405q0-227-99-404t-253-234q119-83 254-83 119 0 226 65 135 125 210.5 295t75.5 361z'
	  },
	  'optin-monster': {
	    'width': 2296,
	    'height': 1792,
	    'd': 'M478 1675q-8 16-27 34.5t-37 25.5q-25 9-51.5-3.5t-28.5-31.5q-1-22 40-55t68-38q23-4 34 21.5t2 46.5zM1819 1675q7 16 26 34.5t38 25.5q25 9 51.5-3.5t27.5-31.5q2-22-39.5-55t-68.5-38q-22-4-33 21.5t-2 46.5zM1867 1566q13 27 56.5 59.5t77.5 41.5q45 13 82-4.5t37-50.5q0-46-67.5-100.5t-115.5-59.5q-40-5-63.5 37.5t-6.5 76.5zM428 1566q-13 27-56 59.5t-77 41.5q-45 13-82-4.5t-37-50.5q0-46 67.5-100.5t115.5-59.5q40-5 63 37.5t6 76.5zM1158 442h1q-41 0-76 15 27 8 44 30.5t17 49.5q0 35-27 60t-65 25q-52 0-80-43-5 23-5 42 0 74 56 126.5t135 52.5q80 0 136-52.5t56-126.5-56-126.5-136-52.5zM1462 224q-99-109-220.5-131.5t-245.5 44.5q27-60 82.5-96.5t118-39.5 121.5 17 99.5 74.5 44.5 131.5zM2212 1463q8 11-11 42 7 23 7 40 1 56-44.5 112.5t-109.5 91.5-118 37q-48 2-92-21.5t-66-65.5q-687 25-1259 0-23 41-66.5 65t-92.5 22q-86-3-179.5-80.5t-92.5-160.5q2-22 7-40-19-31-11-42 6-10 31-1 14-22 41-51-7-29 2-38 11-10 39 4 29-20 59-34 0-29 13-37 23-12 51 16 35-5 61 2 18 4 38 19v-73q-11 0-18-2-53-10-97-44.5t-55-87.5q-9-38 0-81 15-62 93-95 2-17 19-35.5t36-23.5 33 7.5 19 30.5h13q46 5 60 23 3 3 5 7 10-1 30.5-3.5t30.5-3.5q-15-11-30-17-23-40-91-43 0-6 1-10-62-2-118.5-18.5t-84.5-47.5q-32-36-42.5-92t-2.5-112q16-126 90-179 23-16 52-4.5t32 40.5q0 1 1.5 14t2.5 21 3 20 5.5 19 8.5 10q27 14 76 12 48-46 98-74-40-4-162 14l47-46q61-58 163-111 145-73 282-86-20-8-41-15.5t-47-14-42.5-10.5-47.5-11-43-10q595-126 904 139 98 84 158 222 85 10 121-9h1q5-3 8.5-10t5.5-19 3-19.5 3-21.5l1-14q3-28 32-40t52 5q73 52 91 178 7 57-3.5 113t-42.5 91q-28 32-83.5 48.5t-115.5 18.5v10q-71 2-95 43-14 5-31 17 11 1 32 3.5t30 3.5q1-4 5-8 16-18 60-23h13q5-18 19-30t33-8 36 23 19 36q79 32 93 95 9 40 1 81-12 53-56 88t-97 44q-10 2-17 2 0 49-1 73 20-15 38-19 26-7 61-2 28-28 51-16 14 9 14 37 33 16 59 34 27-13 38-4 10 10 2 38 28 30 41 51 23-8 31 1zM1937 511q0 29-9 54 82 32 112 132 4-37-9.5-98.5t-41.5-90.5q-20-19-36-17t-16 20zM1859 611q35 42 47.5 108.5t-0.5 124.5q67-13 97-45 13-14 18-28-3-64-31-114.5t-79-66.5q-15 15-52 21zM1822 615q-30 0-44-1 42 115 53 239 21 0 43-3 16-68 1-135t-53-100zM258 697q30-100 112-132-9-25-9-54 0-18-16.5-20t-35.5 17q-28 29-41.5 90.5t-9.5 98.5zM294 799q29 31 97 45-13-58-0.5-124.5t47.5-108.5v0q-37-6-52-21-51 16-78.5 66t-31.5 115q9 17 18 28zM471 853q14-124 73-235-19 4-55 18l-45 19v-1q-46 89-20 196 25 3 47 3zM1434 892q8 38 16.5 108.5t11.5 89.5q3 18 9.5 21.5t23.5-4.5q40-20 62-85.5t23-125.5q-24-2-146-4zM1152 251q-116 0-199 82.5t-83 198.5q0 117 83 199.5t199 82.5 199-82.5 83-199.5q0-116-83-198.5t-199-82.5zM1380 890q-106-2-211 0v-1q-1 27 2.5 86t13.5 66q29 14 93.5 14.5t95.5-10.5q9-3 11-39t-0.5-69.5-4.5-46.5zM1112 1089q8-4 9.5-48t-0.5-88-4-63v-1q-212 3-214 3-4 20-7 62t0 83 14 46q34 15 101 16t101-10zM718 900q-16 59 4.5 118.5t77.5 84.5q15 8 24 5t12-21q3-16 8-90t10-103q-69 2-136 6zM591 1026q3 23-34 36 132 141 271.5 240t305.5 154q172-49 310.5-146t293.5-250q-33-13-30-34l3-9v-1 1q-17-2-50-5.5t-48-4.5q-26 90-82 132-51 38-82-1-5-6-9-14-7-13-17-62-2 5-5 9t-7.5 7-8 5.5-9.5 4l-10 2.5t-12 2l-12 1.5t-13.5 1-13.5 0.5q-106 9-163-11-4 17-10 26.5t-21 15-23 7-36 3.5q-2 0-3 0.5t-3 0.5h-3q-179 17-203-40-2 63-56 54-47-8-91-54-12-13-20-26-17-29-26-65-58 6-87 10 1 2 4 10zM507 1654q3-14 3-30-17-71-51-130t-73-70q-41-12-101.5 14.5t-104.5 80-39 107.5q35 53 100 93t119 42q51 2 94-28t53-79zM510 1483q23 63 27 119 195-113 392-174-98-52-180.5-120t-179.5-165q-6 4-29 13 0 2-1 5t-1 4q31 18 22 37-12 23-56 34-10 13-29 24h-1q-2 83 1 150 19 34 35 73zM579 1649q532 21 1145 0-254-147-428-196-76 35-156 57-8 3-16 0-65-21-129-49-208 60-416 188h-1v1q1 0 1-1zM1763 1603q4-54 28-120 14-38 33-71l-1 1q3-77 3-153-15-8-30-25-42-9-56-33-9-20 22-38-2-4-2-9-16-4-28-12-204 190-383 284 198 59 414 176zM2155 1626q5-54-39-107.5t-104-80-102-14.5q-38 11-72.5 70.5t-51.5 129.5q0 16 3 30 10 49 53 79t94 28q54-2 119-42t100-93z'
	  },
	  'outdent': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zM1792 1312v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zM1792 928v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 544v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 160v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z'
	  },
	  'pagelines': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1402 1103q-32 80-76 138t-91 88.5-99 46.5-101.5 14.5-96.5-8.5-86.5-22-69.5-27.5-46-22.5l-17-10q-113 228-289.5 359.5t-384.5 132.5q-19 0-32-13t-13-32 13-31.5 32-12.5q173-1 322.5-107.5t251.5-294.5q-36 14-72 23t-83 13-91-2.5-93-28.5-92-59-84.5-100-74.5-146q114-47 214-57t167.5 7.5 124.5 56.5 88.5 77 56.5 82q53-131 79-291-7 1-18 2.5t-46.5 2.5-69.5-0.5-81.5-10-88.5-23-84-42.5-75-65-54.5-94.5-28.5-127.5q70-28 133.5-36.5t112.5 1 92 30 73.5 50 56 61 42 63 27.5 56 16 39.5l4 16q12-122 12-195-8-6-21.5-16t-49-44.5-63.5-71.5-54-93-33-112.5 12-127 70-138.5q73 25 127.5 61.5t84.5 76.5 48 85 20.5 89-0.5 85.5-13 76.5-19 62-17 42l-7 15q1 5 1 50.5t-1 71.5q3-7 10-18.5t30.5-43 50.5-58 71-55.5 91.5-44.5 112-14.5 132.5 24q-2 78-21.5 141.5t-50 104.5-69.5 71.5-81.5 45.5-84.5 24-80 9.5-67.5-1-46.5-4.5l-17-3q-23 147-73 283 6-7 18-18.5t49.5-41 77.5-52.5 99.5-42 117.5-20 129 23.5 137 77.5z'
	  },
	  'paint-brush': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1615 0q70 0 122.5 46.5t52.5 116.5q0 63-45 151-332 629-465 752-97 91-218 91-126 0-216.5-92.5t-90.5-219.5q0-128 92-212l638-579q59-54 130-54zM706 1034q39 76 106.5 130t150.5 76l1 71q4 213-129.5 347t-348.5 134q-123 0-218-46.5t-152.5-127.5-86.5-183-29-220q7 5 41 30t62 44.5 59 36.5 46 17q41 0 55-37 25-66 57.5-112.5t69.5-76 88-47.5 103-25.5 125-10.5z'
	  },
	  'paper-plane-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-527-215-298 327q-18 21-47 21-14 0-23-4-19-7-30-23.5t-11-36.5v-452l-472-193q-37-14-40-55-3-39 32-59l1664-960q35-21 68 2zM1422 1510l221-1323-1434 827 336 137 863-639-478 797z'
	  },
	  'paper-plane': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z'
	  },
	  'paperclip': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1404 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z'
	  },
	  'paragraph': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1278 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z'
	  },
	  'paste': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z'
	  },
	  'pause-circle-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM768 1440q148 0 273-73t198-198 73-273-73-273-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73zM864 1216q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23v576q0 14-9 23t-23 9h-192zM480 1216q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23v576q0 14-9 23t-23 9h-192z'
	  },
	  'pause-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M704 1184v-576q0-14-9-23t-23-9h-256q-14 0-23 9t-9 23v576q0 14 9 23t23 9h256q14 0 23-9t9-23zM1152 1184v-576q0-14-9-23t-23-9h-256q-14 0-23 9t-9 23v576q0 14 9 23t23 9h256q14 0 23-9t9-23zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'pause': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zM640 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z'
	  },
	  'paw': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M780 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zM438 955q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zM832 928q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zM1071 717q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zM1503 613q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z'
	  },
	  'paypal': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1519 646q18 84-4 204-87 444-565 444h-44q-25 0-44 16.5t-24 42.5l-4 19-55 346-2 15q-5 26-24.5 42.5t-44.5 16.5h-251q-21 0-33-15t-9-36q9-56 26.5-168t26.5-168 27-167.5 27-167.5q5-37 43-37h131q133 2 236-21 175-39 287-144 102-95 155-246 24-70 35-133 1-6 2.5-7.5t3.5-1 6 3.5q79 59 98 162zM1347 364q0 107-46 236-80 233-302 315-113 40-252 42 0 1-90 1l-90-1q-100 0-118 96-2 8-85 530-1 10-12 10h-295q-22 0-36.5-16.5t-11.5-38.5l232-1471q5-29 27.5-48t51.5-19h598q34 0 97.5 13t111.5 32q107 41 163.5 123t56.5 196z'
	  },
	  'pencil-square-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z'
	  },
	  'pencil-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M404 1108l152 152-52 52h-56v-96h-96v-56zM818 718q14 13-3 30l-291 291q-17 17-30 3-14-13 3-30l291-291q17-17 30-3zM544 1408l544-544-288-288-544 544v288h288zM1152 800l92-92q28-28 28-68t-28-68l-152-152q-28-28-68-28t-68 28l-92 92zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'pencil': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M363 1536l91-91-235-235-91 91v107h128v128h107zM886 608q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zM832 416l416 416-832 832h-416v-416zM1515 512q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z'
	  },
	  'percent': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 1280q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM512 512q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM1536 1280q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zM1440 192q0 20-13 38l-1056 1408q-19 26-51 26h-160q-26 0-45-19t-19-45q0-20 13-38l1056-1408q19-26 51-26h160q26 0 45 19t19 45zM768 512q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z'
	  },
	  'phone-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 1193q0-11-2-16-3-8-38.5-29.5t-88.5-49.5l-53-29q-5-3-19-13t-25-15-21-5q-18 0-47 32.5t-57 65.5-44 33q-7 0-16.5-3.5t-15.5-6.5-17-9.5-14-8.5q-99-55-170.5-126.5t-126.5-170.5q-2-3-8.5-14t-9.5-17-6.5-15.5-3.5-16.5q0-13 20.5-33.5t45-38.5 45-39.5 20.5-36.5q0-10-5-21t-15-25-13-19q-3-6-15-28.5t-25-45.5-26.5-47.5-25-40.5-16.5-18-16-2q-48 0-101 22-46 21-80 94.5t-34 130.5q0 16 2.5 34t5 30.5 9 33 10 29.5 12.5 33 11 30q60 164 216.5 320.5t320.5 216.5q6 2 30 11t33 12.5 29.5 10 33 9 30.5 5 34 2.5q57 0 130.5-34t94.5-80q22-53 22-101zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'phone': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z'
	  },
	  'photo': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760 256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
	  },
	  'picture-o': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760 256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
	  },
	  'pie-chart': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M768 890l546 546q-106 108-247.5 168t-298.5 60q-209 0-385.5-103t-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103v762zM955 896h773q0 157-60 298.5t-168 247.5zM1664 768h-768v-768q209 0 385.5 103t279.5 279.5 103 385.5z'
	  },
	  'pied-piper-alt': {
	    'width': 2038,
	    'height': 1792,
	    'd': 'M1222 929q75-3 143.5 20.5t118 58.5 101 94.5 84 108 75.5 120.5q33 56 78.5 109t75.5 80.5 99 88.5q-48 30-108.5 57.5t-138.5 59-114 47.5q-44-37-74-115t-43.5-164.5-33-180.5-42.5-168.5-72.5-123-122.5-48.5l-10 2-6 4q4 5 13 14 6 5 28 23.5t25.5 22 19 18 18 20.5 11.5 21 10.5 27.5 4.5 31 4 40.5l1 33q1 26-2.5 57.5t-7.5 52-12.5 58.5-11.5 53q-35-1-101 9.5t-98 10.5q-39 0-72-10-2-16-2-47 0-74 3-96 2-13 31.5-41.5t57-59 26.5-51.5q-24-2-43 24-36 53-111.5 99.5t-136.5 46.5q-25 0-75.5-63t-106.5-139.5-84-96.5q-6-4-27-30-482 112-513 112-16 0-28-11t-12-27q0-15 8.5-26.5t22.5-14.5l486-106q-8-14-8-25t5.5-17.5 16-11.5 20-7 23-4.5 18.5-4.5q4-1 15.5-7.5t17.5-6.5q15 0 28 16t20 33q163-37 172-37 17 0 29.5 11t12.5 28q0 15-8.5 26t-23.5 14l-182 40-1 16q-1 26 81.5 117.5t104.5 91.5q47 0 119-80t72-129q0-36-23.5-53t-51-18.5-51-11.5-23.5-34q0-16 10-34l-68-19q43-44 43-117 0-26-5-58 82-16 144-16 44 0 71.5 1.5t48.5 8.5 31 13.5 20.5 24.5 15.5 33.5 17 47.5 24 60l50-25q-3 40-23 60t-42.5 21-40 6.5-16.5 20.5zM1282 694q-5-5-13.5-15.5t-12-14.5-10.5-11.5-10-10.5l-8-8t-8.5-7.5-8-5-8.5-4.5q-7-3-14.5-5t-20.5-2.5-22-0.5h-32.5-37.5q-126 0-217 43 16-30 36-46.5t54-29.5 65.5-36 46-36.5 50-55 43.5-50.5q12 9 28 31.5t32 36.5 38 13l12-1v76l22 1q247-95 371-190 28-21 50-39t42.5-37.5 33-31 29.5-34 24-31 24.5-37 23-38 27-47.5 29.5-53l7-9q-2 53-43 139-79 165-205 264t-306 142q-14 3-42 7.5t-50 9.5-39 14q3 19 24.5 46t21.5 34q0 11-26 30zM1061 1615q39-26 131.5-47.5t146.5-21.5q9 0 22.5 15.5t28 42.5 26 50 24 51 14.5 33q-121 45-244 45-61 0-125-11zM822 968l48-12 109 177-73 48zM1323 1485q3 15 3 16 0 7-17.5 14.5t-46 13-54 9.5-53.5 7.5-32 4.5l-7-43q21-2 60.5-8.5t72-10 60.5-3.5h14zM866 857l-96 20-6-17q10-1 32.5-7t34.5-6q19 0 35 10zM1061 1491h31l10 83-41 12v-95zM1950 1v-1 1zM1950 1l-1 5-2 2 1-3zM1950 1l1-1z'
	  },
	  'pied-piper': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1046 1020q0 64-38 109t-91 45q-43 0-70-15v-277q28-17 70-17 53 0 91 45.5t38 109.5zM703 592q0 64-38 109.5t-91 45.5q-43 0-70-15v-277q28-17 70-17 53 0 91 45t38 109zM1265 1023q0-134-88-229t-213-95q-20 0-39 3-23 78-78 136-87 95-211 101v636l211-41v-206q51 19 117 19 125 0 213-95t88-229zM922 596q0-134-88.5-229t-213.5-95q-74 0-141 36h-186v840l211-41v-206q55 19 116 19 125 0 213.5-95t88.5-229zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'pinterest-p': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M0 597q0-108 37.5-203.5t103.5-166.5 152-123 185-78 202-26q158 0 294 66.5t221 193.5 85 287q0 96-19 188t-60 177-100 149.5-145 103-189 38.5q-68 0-135-32t-96-88q-10 39-28 112.5t-23.5 95-20.5 71-26 71-32 62.5-46 77.5-62 86.5l-14 5-9-10q-15-157-15-188 0-92 21.5-206.5t66.5-287.5 52-203q-32-65-32-169 0-83 52-156t132-73q61 0 95 40.5t34 102.5q0 66-44 191t-44 187q0 63 45 104.5t109 41.5q55 0 102-25t78.5-68 56-95 38-110.5 20-111 6.5-99.5q0-173-109.5-269.5t-285.5-96.5q-200 0-334 129.5t-134 328.5q0 44 12.5 85t27 65 27 45.5 12.5 30.5q0 28-15 73t-37 45q-2 0-17-3-51-15-90.5-56t-61-94.5-32.5-108-11-106.5z'
	  },
	  'pinterest-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1248 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-725q85-122 108-210 9-34 53-209 21 39 73.5 67t112.5 28q181 0 295.5-147.5t114.5-373.5q0-84-35-162.5t-96.5-139-152.5-97-197-36.5q-104 0-194.5 28.5t-153 76.5-107.5 109.5-66.5 128-21.5 132.5q0 102 39.5 180t116.5 110q13 5 23.5 0t14.5-19q10-44 15-61 6-23-11-42-50-62-50-150 0-150 103.5-256.5t270.5-106.5q149 0 232.5 81t83.5 210q0 168-67.5 286t-173.5 118q-60 0-97-43.5t-23-103.5q8-34 26.5-92.5t29.5-102 11-74.5q0-49-26.5-81.5t-75.5-32.5q-61 0-103.5 56.5t-42.5 139.5q0 72 24 121l-98 414q-24 100-7 254h-183q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z'
	  },
	  'pinterest': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 896q0 209-103 385.5t-279.5 279.5-385.5 103q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214t-172.5-163-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5-21.5 134q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5t273.5-108.5q151 0 235.5 82t84.5 213q0 170-68.5 289t-175.5 119q-61 0-98-43.5t-23-104.5q8-35 26.5-93.5t30-103 11.5-75.5q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281t-127-423q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'plane': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1376 160q44 52 12 148t-108 172l-161 161 160 696q5 19-12 33l-128 96q-7 6-19 6-4 0-7-1-15-3-21-16l-279-508-259 259 53 194q5 17-8 31l-96 96q-9 9-23 9h-2q-15-2-24-13l-189-252-252-189q-11-7-13-23-1-13 9-25l96-97q9-9 23-9 6 0 8 1l194 53 259-259-508-279q-14-8-17-24-2-16 9-27l128-128q14-13 30-8l665 159 160-160q76-76 172-108t148 12z'
	  },
	  'play-circle-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1184 896q0 37-32 55l-544 320q-15 9-32 9-16 0-32-8-32-19-32-56v-640q0-37 32-56 33-18 64 1l544 320q32 18 32 55zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'play-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM1152 951q32-18 32-55t-32-55l-544-320q-31-19-64-1-32 19-32 56v640q0 37 32 56 16 8 32 8 17 0 32-9z'
	  },
	  'play': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1384 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z'
	  },
	  'plug': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1755 453q37 37 37 90t-37 91l-401 400 150 150-160 160q-163 163-389.5 186.5t-411.5-100.5l-362 362h-181v-181l362-362q-124-185-100.5-411.5t186.5-389.5l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5l-400 401 234 234 401-400q38-37 91-37t90 37z'
	  },
	  'plus-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1216 960v-128q0-26-19-45t-45-19h-256v-256q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v256h-256q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45v-256h256q26 0 45-19t19-45zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'plus-square-o': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1152 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zM1280 1248v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zM1408 416v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'plus-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'plus': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1408 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'
	  },
	  'power-off': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 896q0 156-61 298t-164 245-245 164-298 61-298-61-245-164-164-245-61-298q0-182 80.5-343t226.5-270q43-32 95.5-25t83.5 50q32 42 24.5 94.5t-49.5 84.5q-98 74-151.5 181t-53.5 228q0 104 40.5 198.5t109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5q0-121-53.5-228t-151.5-181q-42-32-49.5-84.5t24.5-94.5q31-43 84-50t95 25q146 109 226.5 270t80.5 343zM896 128v640q0 52-38 90t-90 38-90-38-38-90v-640q0-52 38-90t90-38 90 38 38 90z'
	  },
	  'print': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M384 1536h896v-256h-896v256zM384 896h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zM1536 960q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 960v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z'
	  },
	  'product-hunt': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1150 762q0 56-39.5 95t-95.5 39h-253v-269h253q56 0 95.5 39.5t39.5 95.5zM1329 762q0-130-91.5-222t-222.5-92h-433v896h180v-269h253q130 0 222-91.5t92-221.5zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'puzzle-piece': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1664 1098q0 81-44.5 135t-123.5 54q-41 0-77.5-17.5t-59-38-56.5-38-71-17.5q-110 0-110 124 0 39 16 115t15 115v5q-22 0-33 1-34 3-97.5 11.5t-115.5 13.5-98 5q-61 0-103-26.5t-42-83.5q0-37 17.5-71t38-56.5 38-59 17.5-77.5q0-79-54-123.5t-135-44.5q-84 0-143 45.5t-59 127.5q0 43 15 83t33.5 64.5 33.5 53 15 50.5q0 45-46 89-37 35-117 35-95 0-245-24-9-2-27.5-4t-27.5-4l-13-2q-1 0-3-1-2 0-2-1v-1024q2 1 17.5 3.5t34 5 21.5 3.5q150 24 245 24 80 0 117-35 46-44 46-89 0-22-15-50.5t-33.5-53-33.5-64.5-15-83q0-82 59-127.5t144-45.5q80 0 134 44.5t54 123.5q0 41-17.5 77.5t-38 59-38 56.5-17.5 71q0 57 42 83.5t103 26.5q64 0 180-15t163-17v2q-1 2-3.5 17.5t-5 34-3.5 21.5q-24 150-24 245 0 80 35 117 44 46 89 46 22 0 50.5-15t53-33.5 64.5-33.5 83-15q82 0 127.5 59t45.5 143z'
	  },
	  'qq': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M270 806q-8-19-8-52 0-20 11-49t24-45q-1-22 7.5-53t22.5-43q0-139 92.5-288.5t217.5-209.5q139-66 324-66 133 0 266 55 49 21 90 48t71 56 55 68 42 74 32.5 84.5 25.5 89.5 22 98l1 5q55 83 55 150 0 14-9 40t-9 38q0 1 1.5 3.5t3.5 5 2 3.5q77 114 120.5 214.5t43.5 208.5q0 43-19.5 100t-55.5 57q-9 0-19.5-7.5t-19-17.5-19-26-16-26.5-13.5-26-9-17.5q-1-1-3-1l-5 4q-59 154-132 223 20 20 61.5 38.5t69 41.5 35.5 65q-2 4-4 16t-7 18q-64 97-302 97-53 0-110.5-9t-98-20-104.5-30q-15-5-23-7-14-4-46-4.5t-40-1.5q-41 45-127.5 65t-168.5 20q-35 0-69-1.5t-93-9-101-20.5-74.5-40-32.5-64q0-40 10-59.5t41-48.5q11-2 40.5-13t49.5-12q4 0 14-2 2-2 2-4l-2-3q-48-11-108-105.5t-73-156.5l-5-3q-4 0-12 20-18 41-54.5 74.5t-77.5 37.5h-1q-4 0-6-4.5t-5-5.5q-23-54-23-100 0-275 252-466z'
	  },
	  'qrcode': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M384 1152v128h-128v-128h128zM384 384v128h-128v-128h128zM1152 384v128h-128v-128h128zM128 1407h384v-383h-384v383zM128 640h384v-384h-384v384zM896 640h384v-384h-384v384zM640 896v640h-640v-640h640zM1152 1408v128h-128v-128h128zM1408 1408v128h-128v-128h128zM1408 896v384h-384v-128h-128v384h-128v-640h384v128h128v-128h128zM640 128v640h-640v-640h640zM1408 128v640h-640v-640h640z'
	  },
	  'question-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M896 1376v-192q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23-9t9-23zM1152 704q0-88-55.5-163t-138.5-116-170-41q-243 0-371 213-15 24 8 42l132 100q7 6 19 6 16 0 25-12 53-68 86-92 34-24 86-24 48 0 85.5 26t37.5 59q0 38-20 61t-68 45q-63 28-115.5 86.5t-52.5 125.5v36q0 14 9 23t23 9h192q14 0 23-9t9-23q0-19 21.5-49.5t54.5-49.5q32-18 49-28.5t46-35 44.5-48 28-60.5 12.5-81zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'question': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M704 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zM1020 656q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z'
	  },
	  'quote-left': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M768 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zM1664 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z'
	  },
	  'quote-right': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M768 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136zM1664 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136z'
	  },
	  'ra': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M19 874q8-217 116-406t305-318h5q0 1-1 3-8 8-28 33.5t-52 76.5-60 110.5-44.5 135.5-14 150.5 39 157.5 108.5 154q50 50 102 69.5t90.5 11.5 69.5-23.5 47-32.5l16-16q39-51 53-116.5t6.5-122.5-21-107-26.5-80l-14-29q-10-25-30.5-49.5t-43-41-43.5-29.5-35-19l-13-6 104-115q39 17 78 52t59 61l19 27q1-48-18.5-103.5t-40.5-87.5l-20-31 161-183 160 181q-33 46-52.5 102.5t-22.5 90.5l-4 33q22-37 61.5-72.5t67.5-52.5l28-17 103 115q-44 14-85 50t-60 65l-19 29q-31 56-48 133.5t-7 170 57 156.5q33 45 77.5 60.5t85 5.5 76-26.5 57.5-33.5l21-16q60-53 96.5-115t48.5-121.5 10-121.5-18-118-37-107.5-45.5-93-45-72-34.5-47.5l-13-17q-14-13-7-13l10 3q40 29 62.5 46t62 50 64 58 58.5 65 55.5 77 45.5 88 38 103 23.5 117 10.5 136q3 259-108 465t-312 321-456 115q-185 0-351-74t-283.5-198-184-293-60.5-353z'
	  },
	  'random': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M666 481q-60 92-137 273-22-45-37-72.5t-40.5-63.5-51-56.5-63-35-81.5-14.5h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q250 0 410 225zM1792 1280q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192q-32 0-85 0.5t-81 1-73-1-71-5-64-10.5-63-18.5-58-28.5-59-40-55-53.5-56-69.5q59-93 136-273 22 45 37 72.5t40.5 63.5 51 56.5 63 35 81.5 14.5h256v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23zM1792 384q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-192h-256q-48 0-87 15t-69 45-51 61.5-45 77.5q-32 62-78 171-29 66-49.5 111t-54 105-64 100-74 83-90 68.5-106.5 42-128 16.5h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224q48 0 87-15t69-45 51-61.5 45-77.5q32-62 78-171 29-66 49.5-111t54-105 64-100 74-83 90-68.5 106.5-42 128-16.5h256v-192q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z'
	  },
	  'rebel': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M19 874q8-217 116-406t305-318h5q0 1-1 3-8 8-28 33.5t-52 76.5-60 110.5-44.5 135.5-14 150.5 39 157.5 108.5 154q50 50 102 69.5t90.5 11.5 69.5-23.5 47-32.5l16-16q39-51 53-116.5t6.5-122.5-21-107-26.5-80l-14-29q-10-25-30.5-49.5t-43-41-43.5-29.5-35-19l-13-6 104-115q39 17 78 52t59 61l19 27q1-48-18.5-103.5t-40.5-87.5l-20-31 161-183 160 181q-33 46-52.5 102.5t-22.5 90.5l-4 33q22-37 61.5-72.5t67.5-52.5l28-17 103 115q-44 14-85 50t-60 65l-19 29q-31 56-48 133.5t-7 170 57 156.5q33 45 77.5 60.5t85 5.5 76-26.5 57.5-33.5l21-16q60-53 96.5-115t48.5-121.5 10-121.5-18-118-37-107.5-45.5-93-45-72-34.5-47.5l-13-17q-14-13-7-13l10 3q40 29 62.5 46t62 50 64 58 58.5 65 55.5 77 45.5 88 38 103 23.5 117 10.5 136q3 259-108 465t-312 321-456 115q-185 0-351-74t-283.5-198-184-293-60.5-353z'
	  },
	  'recycle': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M836 1169l-15 368-2 22-420-29q-36-3-67-31.5t-47-65.5q-11-27-14.5-55t4-65 12-55 21.5-64 19-53q78 12 509 28zM449 583l180 379-147-92q-63 72-111.5 144.5t-72.5 125-39.5 94.5-18.5 63l-4 21-190-357q-17-26-18-56t6-47l8-18q35-63 114-188l-140-86zM1680 1100l-188 359q-12 29-36.5 46.5t-43.5 20.5l-18 4q-71 7-219 12l8 164-230-367 211-362 7 173q170 16 283 5t170-33zM895 176q-47 63-265 435l-317-187-19-12 225-356q20-31 60-45t80-10q24 2 48.5 12t42 21 41.5 33 36 34.5 36 39.5 32 35zM1550 483l212 363q18 37 12.5 76t-27.5 74q-13 20-33 37t-38 28-48.5 22-47 16-51.5 14-46 12q-34-72-265-436l313-195zM1407 257l142-83-220 373-419-20 151-86q-34-89-75-166t-75.5-123.5-64.5-80-47-46.5l-17-13 405 1q31-3 58 10.5t39 28.5l11 15q39 61 112 190z'
	  },
	  'reddit-alien': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 846q0 58-29.5 105.5t-79.5 72.5q12 46 12 96 0 155-106.5 287t-290.5 208.5-400 76.5-399.5-76.5-290-208.5-106.5-287q0-47 11-94-51-25-82-73.5t-31-106.5q0-82 58-140.5t141-58.5q85 0 145 63 218-152 515-162l116-521q3-13 15-21t26-5l369 81q18-37 54-59.5t79-22.5q62 0 106 43.5t44 105.5-44 106-106 44-105.5-43.5-43.5-105.5l-334-74-104 472q300 9 519 160 58-61 143-61 83 0 141 58.5t58 140.5zM418 1045q0 62 43.5 106t105.5 44 106-44 44-106-44-105.5-106-43.5q-61 0-105 44t-44 105zM1228 1400q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20-160-20-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5 91 4.5 91-4.5 122.5-29.5 118.5-68zM1225 1195q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5 44 106 106 44z'
	  },
	  'reddit-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M939 1129q13 13 0 26-53 53-171 53t-171-53q-13-13 0-26 5-6 13-6t13 6q42 42 145 42t145-42q5-6 13-6t13 6zM676 973q0 31-23 54t-54 23-54-23-23-54q0-32 22.5-54.5t54.5-22.5 54.5 22.5 22.5 54.5zM1014 973q0 31-23 54t-54 23-54-23-23-54q0-32 22.5-54.5t54.5-22.5 54.5 22.5 22.5 54.5zM1229 870q0-42-30-72t-73-30q-42 0-73 31-113-78-267-82l54-243 171 39q1 32 23.5 54t53.5 22q32 0 54.5-22.5t22.5-54.5-22.5-54.5-54.5-22.5q-48 0-69 43l-189-42q-17-5-21 13l-60 268q-154 6-265 83-30-32-74-32-43 0-73 30t-30 72q0 30 16 55t42 38q-5 25-5 48 0 122 120 208.5t289 86.5q170 0 290-86.5t120-208.5q0-25-6-49 25-13 40.5-37.5t15.5-54.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'reddit': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1095 1167q16 16 0 31-62 62-199 62t-199-62q-16-15 0-31 6-6 15-6t15 6q48 49 169 49 120 0 169-49 6-6 15-6t15 6zM788 986q0 37-26 63t-63 26-63.5-26-26.5-63q0-38 26.5-64t63.5-26 63 26.5 26 63.5zM1183 986q0 37-26.5 63t-63.5 26-63-26-26-63 26-63.5 63-26.5 63.5 26 26.5 64zM1434 866q0-49-35-84t-85-35-86 36q-130-90-311-96l63-283 200 45q0 37 26 63t63 26 63.5-26.5 26.5-63.5-26.5-63.5-63.5-26.5q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97-35-37-87-37-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56 0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57 30-15 48-43.5t18-63.5zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'refresh': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1511 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zM1536 256v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z'
	  },
	  'registered': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1042 703q0-88-60-121-33-18-117-18h-123v281h162q66 0 102-37t36-105zM1094 988l205 373q8 17-1 31-8 16-27 16h-152q-20 0-28-17l-194-365h-155v350q0 14-9 23t-23 9h-134q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h294q128 0 190 24 85 31 134 109t49 180q0 92-42.5 165.5t-115.5 109.5q6 10 9 16zM896 160q-150 0-286 58.5t-234.5 157-157 234.5-58.5 286 58.5 286 157 234.5 234.5 157 286 58.5 286-58.5 234.5-157 157-234.5 58.5-286-58.5-286-157-234.5-234.5-157-286-58.5zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'remove': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z'
	  },
	  'renren': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1133 1570q-171 94-368 94-196 0-367-94 138-87 235.5-211t131.5-268q35 144 132.5 268t235.5 211zM638 142v485q0 252-126.5 459.5t-330.5 306.5q-181-215-181-495 0-187 83.5-349.5t229.5-269.5 325-137zM1536 898q0 280-181 495-204-99-330.5-306.5t-126.5-459.5v-485q179 30 325 137t229.5 269.5 83.5 349.5z'
	  },
	  'reorder': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 832v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zM1536 320v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'
	  },
	  'repeat': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z'
	  },
	  'reply-all': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 1082v70q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v69l-397 398q-19 19-19 45t19 45zM1792 1120q0 58-17 133.5t-38.5 138-48 125-40.5 90.5l-20 40q-8 17-28 17-6 0-9-1-25-8-23-34 43-400-106-565-64-71-170.5-110.5t-267.5-52.5v251q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v262q411 28 599 221 169 173 169 509z'
	  },
	  'reply': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1120q0 166-127 451-3 7-10.5 24t-13.5 30-13 22q-12 17-28 17-15 0-23.5-10t-8.5-25q0-9 2.5-26.5t2.5-23.5q5-68 5-123 0-101-17.5-181t-48.5-138.5-80-101-105.5-69.5-133-42.5-154-21.5-175.5-6h-224v256q0 26-19 45t-45 19-45-19l-512-512q-19-19-19-45t19-45l512-512q19-19 45-19t45 19 19 45v256h224q713 0 875 403 53 134 53 333z'
	  },
	  'retweet': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1280 1504q0 13-9.5 22.5t-22.5 9.5h-960q-8 0-13.5-2t-9-7-5.5-8-3-11.5-1-11.5v-13-11-160-416h-192q-26 0-45-19t-19-45q0-24 15-41l320-384q19-22 49-22t49 22l320 384q15 17 15 41 0 26-19 45t-45 19h-192v384h576q16 0 25 11l160 192q7 11 7 21zM1920 1088q0 24-15 41l-320 384q-20 23-49 23t-49-23l-320-384q-15-17-15-41 0-26 19-45t45-19h192v-384h-576q-16 0-25-12l-160-192q-7-9-7-20 0-13 9.5-22.5t22.5-9.5h960q8 0 13.5 2t9 7 5.5 8 3 11.5 1 11.5v13 11 160 416h192q26 0 45 19t19 45z'
	  },
	  'rmb': {
	    'width': 1027,
	    'height': 1792,
	    'd': 'M603 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z'
	  },
	  'road': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1111 996v-4l-24-320q-1-13-11-22.5t-23-9.5h-186q-13 0-23 9.5t-11 22.5l-24 320v4q-1 12 8 20t21 8h244q12 0 21-8t8-20zM1870 1463q0 73-46 73h-704q13 0 22-9.5t8-22.5l-20-256q-1-13-11-22.5t-23-9.5h-272q-13 0-23 9.5t-11 22.5l-20 256q-1 13 8 22.5t22 9.5h-704q-46 0-46-73 0-54 26-116l417-1044q8-19 26-33t38-14h339q-13 0-23 9.5t-11 22.5l-15 192q-1 14 8 23t22 9h166q13 0 22-9t8-23l-15-192q-1-13-11-22.5t-23-9.5h339q20 0 38 14t26 33l417 1044q26 62 26 116z'
	  },
	  'rocket': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1440 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM1664 160q0 249-75.5 430.5t-253.5 360.5q-81 80-195 176l-20 379q-2 16-16 26l-384 224q-7 4-16 4-12 0-23-9l-64-64q-13-14-8-32l85-276-281-281-276 85q-3 1-9 1-14 0-23-9l-64-64q-17-19-5-39l224-384q10-14 26-16l379-20q96-114 176-195 188-187 358-258t431-71q14 0 24 9.5t10 22.5z'
	  },
	  'rotate-left': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z'
	  },
	  'rotate-right': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z'
	  },
	  'rouble': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1043 565q0-100-65-162t-171-62h-320v448h320q106 0 171-62t65-162zM1280 565q0 193-126.5 315t-326.5 122h-340v118h505q14 0 23 9t9 23v128q0 14-9 23t-23 9h-505v192q0 14-9.5 23t-22.5 9h-167q-14 0-23-9t-9-23v-192h-224q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h224v-118h-224q-14 0-23-9t-9-23v-149q0-13 9-22.5t23-9.5h224v-629q0-14 9-23t23-9h539q200 0 326.5 122t126.5 315z'
	  },
	  'rss-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M512 1280q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM863 1374q-13-232-177-396t-396-177q-14-1-24 9t-10 23v128q0 13 8.5 22t21.5 10q154 11 264 121t121 264q1 13 10 21.5t22 8.5h128q13 0 23-10t9-24zM1247 1375q-5-154-56-297.5t-139.5-260-205-205-260-139.5-297.5-56q-14-1-23 9-10 10-10 23v128q0 13 9 22t22 10q204 7 378 111.5t278.5 278.5 111.5 378q1 13 10 22t22 9h128q13 0 23-10 11-9 9-23zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'rss': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M384 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM896 1467q2 28-17 48-18 21-47 21h-135q-25 0-43-16.5t-20-41.5q-22-229-184.5-391.5t-391.5-184.5q-25-2-41.5-20t-16.5-43v-135q0-29 21-47 17-17 43-17h5q160 13 306 80.5t259 181.5q114 113 181.5 259t80.5 306zM1408 1469q2 27-18 47-18 20-46 20h-143q-26 0-44.5-17.5t-19.5-42.5q-12-215-101-408.5t-231.5-336-336-231.5-408.5-102q-25-1-42.5-19.5t-17.5-43.5v-143q0-28 20-46 18-18 44-18h3q262 13 501.5 120t425.5 294q187 186 294 425.5t120 501.5z'
	  },
	  'rub': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1043 565q0-100-65-162t-171-62h-320v448h320q106 0 171-62t65-162zM1280 565q0 193-126.5 315t-326.5 122h-340v118h505q14 0 23 9t9 23v128q0 14-9 23t-23 9h-505v192q0 14-9.5 23t-22.5 9h-167q-14 0-23-9t-9-23v-192h-224q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h224v-118h-224q-14 0-23-9t-9-23v-149q0-13 9-22.5t23-9.5h224v-629q0-14 9-23t23-9h539q200 0 326.5 122t126.5 315z'
	  },
	  'ruble': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1043 565q0-100-65-162t-171-62h-320v448h320q106 0 171-62t65-162zM1280 565q0 193-126.5 315t-326.5 122h-340v118h505q14 0 23 9t9 23v128q0 14-9 23t-23 9h-505v192q0 14-9.5 23t-22.5 9h-167q-14 0-23-9t-9-23v-192h-224q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h224v-118h-224q-14 0-23-9t-9-23v-149q0-13 9-22.5t23-9.5h224v-629q0-14 9-23t23-9h539q200 0 326.5 122t126.5 315z'
	  },
	  'rupee': {
	    'width': 898,
	    'height': 1792,
	    'd': 'M898 470v102q0 14-9 23t-23 9h-168q-23 144-129 234t-276 110q167 178 459 536 14 16 4 34-8 18-29 18h-195q-16 0-25-12-306-367-498-571-9-9-9-22v-127q0-13 9.5-22.5t22.5-9.5h112q132 0 212.5-43t102.5-125h-427q-14 0-23-9t-9-23v-102q0-14 9-23t23-9h413q-57-113-268-113h-145q-13 0-22.5-9.5t-9.5-22.5v-133q0-14 9-23t23-9h832q14 0 23 9t9 23v102q0 14-9 23t-23 9h-233q47 61 64 144h171q14 0 23 9t9 23z'
	  },
	  'safari': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M949 893q0 26-16.5 45t-41.5 19q-26 0-45-16.5t-19-41.5q0-26 17-45t42-19 44 16.5 19 41.5zM964 951l350-581q-9 8-67.5 62.5t-125.5 116.5-136.5 127-117 110.5-50.5 51.5l-349 580q7-7 67-62t126-116.5 136-127 117-111 50-50.5zM1611 896q0 201-104 371-3-2-17-11t-26.5-16.5-16.5-7.5q-13 0-13 13 0 10 59 44-74 112-184.5 190.5t-241.5 110.5l-16-67q-1-10-15-10-5 0-8 5.5t-2 9.5l16 68q-72 15-146 15-199 0-372-105 1-2 13-20.5t21.5-33.5 9.5-19q0-13-13-13-6 0-17 14.5t-22.5 34.5-13.5 23q-113-75-192-187.5t-110-244.5l69-15q10-3 10-15 0-5-5.5-8t-10.5-2l-68 15q-14-72-14-139 0-206 109-379 2 1 18.5 12t30 19 17.5 8q13 0 13-12 0-6-12.5-15.5t-32.5-21.5l-20-12q77-112 189-189t244-107l15 67q2 10 15 10 5 0 8-5.5t2-10.5l-15-66q71-13 134-13 204 0 379 109-39 56-39 65 0 13 12 13 11 0 48-64 111 75 187.5 186t107.5 241l-56 12q-10 2-10 16 0 5 5.5 8t9.5 2l57-13q14 72 14 140zM1696 896q0-163-63.5-311t-170.5-255-255-170.5-311-63.5-311 63.5-255 170.5-170.5 255-63.5 311 63.5 311 170.5 255 255 170.5 311 63.5 311-63.5 255-170.5 170.5-255 63.5-311zM1792 896q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'save': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M384 1536h768v-384h-768v384zM1280 1536h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zM896 608v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zM1536 640v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z'
	  },
	  'scissors': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM1260 960l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zM579 700q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zM494 1445q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zM672 832l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zM896 1056l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zM1600 1472l128-64-520-408-177 138q-2 3-13 7z'
	  },
	  'scribd': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1500 1549q0 89-63 152.5t-153 63.5-153.5-63.5-63.5-152.5q0-90 63.5-153.5t153.5-63.5 153 63.5 63 153.5zM1267 1268q-115 15-192.5 102.5t-77.5 205.5q0 74 33 138-146 78-379 78-109 0-201-21t-153.5-54.5-110.5-76.5-76-85-44.5-83-23.5-66.5-6-39.5q0-19 4.5-42.5t18.5-56 36.5-58 64-43.5 94.5-18 94 17.5 63 41 35.5 53 17.5 49 4 33.5q0 34-23 81 28 27 82 42t93 17l40 1q115 0 190-51t75-133q0-26-9-48.5t-31.5-44.5-49.5-41-74-44-93.5-47.5-119.5-56.5q-28-13-43-20-116-55-187-100t-122.5-102-72-125.5-20.5-162.5q0-78 20.5-150t66-137.5 112.5-114 166.5-77 221.5-28.5q120 0 220 26t164.5 67 109.5 94 64 105.5 19 103.5q0 46-15 82.5t-36.5 58-48.5 36-49 19.5-39 5h-8-32t-39-5-44-14-41-28-37-46-24-70.5-10-97.5q-15-16-59-25.5t-81-10.5l-37-1q-68 0-117.5 31t-70.5 70-21 76q0 24 5 43t24 46 53 51 97 53.5 150 58.5q76 25 138.5 53.5t109 55.5 83 59 60.5 59.5 41 62.5 26.5 62 14.5 63.5 6 62 1 62.5z'
	  },
	  'search-minus': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1024 800v64q0 13-9.5 22.5t-22.5 9.5h-576q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h576q13 0 22.5 9.5t9.5 22.5zM1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 53-37.5 90.5t-90.5 37.5q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z'
	  },
	  'search-plus': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1024 800v64q0 13-9.5 22.5t-22.5 9.5h-224v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-224h-224q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h224v-224q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v224h224q13 0 22.5 9.5t9.5 22.5zM1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 53-37.5 90.5t-90.5 37.5q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z'
	  },
	  'search': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z'
	  },
	  'sellsy': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1500 1371v-733q0-21-15-36t-35-15h-93q-20 0-35 15t-15 36v733q0 20 15 35t35 15h93q20 0 35-15t15-35zM1216 1371v-531q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v531q0 20 15 35t35 15h101q20 0 35-15t15-35zM924 1371v-429q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v429q0 20 15 35t35 15h101q20 0 35-15t15-35zM632 1371v-362q0-20-15-35t-35-15h-101q-20 0-35 15t-15 35v362q0 20 15 35t35 15h101q20 0 35-15t15-35zM2048 1225q0 166-118 284t-284 118h-1244q-166 0-284-118t-118-284q0-116 63-214.5t168-148.5q-10-34-10-73 0-113 80.5-193.5t193.5-80.5q102 0 180 67 45-183 194-300t338-117q149 0 275 73.5t199.5 199.5 73.5 275q0 66-14 122 135 33 221 142.5t86 247.5z'
	  },
	  'send-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-527-215-298 327q-18 21-47 21-14 0-23-4-19-7-30-23.5t-11-36.5v-452l-472-193q-37-14-40-55-3-39 32-59l1664-960q35-21 68 2zM1422 1510l221-1323-1434 827 336 137 863-639-478 797z'
	  },
	  'send': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z'
	  },
	  'server': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M128 1408h1024v-128h-1024v128zM128 896h1024v-128h-1024v128zM1696 1344q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM128 384h1024v-128h-1024v128zM1696 832q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM1696 320q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zM1792 1152v384h-1792v-384h1792zM1792 640v384h-1792v-384h1792zM1792 128v384h-1792v-384h1792z'
	  },
	  'share-alt-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 1195q0-88-62.5-151t-150.5-63q-84 0-145 58l-241-120q2-16 2-23t-2-23l241-120q61 58 145 58 88 0 150.5-63t62.5-151-62.5-150.5-150.5-62.5-151 62.5-63 150.5q0 7 2 23l-241 120q-62-57-145-57-88 0-150.5 62.5t-62.5 150.5 62.5 150.5 150.5 62.5q83 0 145-57l241 120q-2 16-2 23 0 88 63 150.5t151 62.5 150.5-62.5 62.5-150.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'share-alt': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1216 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z'
	  },
	  'share-square-o': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1408 989v259q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h255v0q13 0 22.5 9.5t9.5 22.5q0 27-26 32-77 26-133 60-10 4-16 4h-112q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-214q0-19 18-29 28-13 54-37 16-16 35-8 21 9 21 29zM1645 493l-384 384q-18 19-45 19-12 0-25-5-39-17-39-59v-192h-160q-323 0-438 131-119 137-74 473 3 23-20 34-8 2-12 2-16 0-26-13-10-14-21-31t-39.5-68.5-49.5-99.5-38.5-114-17.5-122q0-49 3.5-91t14-90 28-88 47-81.5 68.5-74 94.5-61.5 124.5-48.5 159.5-30.5 196.5-11h160v-192q0-42 39-59 13-5 25-5 26 0 45 19l384 384q19 19 19 45t-19 45z'
	  },
	  'share-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1005 1101l352-352q19-19 19-45t-19-45l-352-352q-30-31-69-14-40 17-40 59v160q-119 0-216 19.5t-162.5 51-114 79-76.5 95.5-44.5 109-21.5 111.5-5 110.5q0 181 167 404 10 12 25 12 7 0 13-3 22-9 19-33-44-354 62-473 46-52 130-75.5t224-23.5v160q0 42 40 59 12 5 24 5 26 0 45-19zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'share': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98 0-175.5 6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123 0 6 2.5 23.5t2.5 26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451 0-199 53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z'
	  },
	  'shekel': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M992 624v496q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-496q0-112-80-192t-192-80h-272v1152q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-1344q0-14 9-23t23-9h464q135 0 249 66.5t180.5 180.5 66.5 249zM1376 160v880q0 135-66.5 249t-180.5 180.5-249 66.5h-464q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h160q14 0 23 9t9 23v768h272q112 0 192-80t80-192v-880q0-14 9-23t23-9h160q14 0 23 9t9 23z'
	  },
	  'sheqel': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M992 624v496q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-496q0-112-80-192t-192-80h-272v1152q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-1344q0-14 9-23t23-9h464q135 0 249 66.5t180.5 180.5 66.5 249zM1376 160v880q0 135-66.5 249t-180.5 180.5-249 66.5h-464q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h160q14 0 23 9t9 23v768h272q112 0 192-80t80-192v-880q0-14 9-23t23-9h160q14 0 23 9t9 23z'
	  },
	  'shield': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1088 960v-640h-448v1137q119-63 213-137 235-184 235-360zM1280 192v768q0 86-33.5 170.5t-83 150-118 127.5-126.5 103-121 77.5-89.5 49.5-42.5 20q-12 6-26 6t-26-6q-16-7-42.5-20t-89.5-49.5-121-77.5-126.5-103-118-127.5-83-150-33.5-170.5v-768q0-26 19-45t45-19h1152q26 0 45 19t19 45z'
	  },
	  'ship': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1811 1555q19-19 45-19t45 19l128 128-90 90-83-83-83 83q-18 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-128-128 90-90 83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83zM237 1517q-19 19-45 19t-45-19l-128-128 90-90 83 82 83-82q19-19 45-19t45 19l83 82 64-64v-293l-210-314q-17-26-7-56.5t40-40.5l177-58v-299h128v-128h256v-128h256v128h256v128h128v299l177 58q30 10 40 40.5t-7 56.5l-210 314v293l19-18q19-19 45-19t45 19l83 82 83-82q19-19 45-19t45 19l128 128-90 90-83-83-83 83q-18 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83zM640 384v128l384-128 384 128v-128h-128v-128h-512v128h-128z'
	  },
	  'shirtsinbulk': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M0 0h1536v1392l-776 338-760-338v-1392zM1436 1327v-926h-1336v926l661 294zM1436 301v-201h-1336v201h1336zM181 599v115h-37v-115h37zM181 747v115h-37v-115h37zM181 895v115h-37v-115h37zM181 1043v115h-37v-115h37zM181 1191v115h-37v-115h37zM207 1334l15-34 105 47-15 33zM343 1394l15-34 105 46-15 34zM478 1454l15-34 105 46-15 34zM614 1513l15-33 104 46-15 34zM797 1526l105-46 15 33-105 47zM932 1466l105-46 15 34-105 46zM1068 1406l105-46 15 34-105 46zM1203 1347l105-47 15 34-105 46zM259 147v36h-114v-36h114zM421 147v36h-115v-36h115zM583 147v36h-115v-36h115zM744 147v36h-114v-36h114zM906 147v36h-114v-36h114zM1068 147v36h-115v-36h115zM1230 147v36h-115v-36h115zM1391 147v36h-114v-36h114zM181 487v79h-37v-115h115v36h-78zM421 451v36h-115v-36h115zM583 451v36h-115v-36h115zM744 451v36h-114v-36h114zM906 451v36h-114v-36h114zM1068 451v36h-115v-36h115zM1230 451v36h-115v-36h115zM1355 566v-79h-78v-36h115v115h-37zM1355 714v-115h37v115h-37zM1355 862v-115h37v115h-37zM1355 1010v-115h37v115h-37zM1355 1158v-115h37v115h-37zM1355 1306v-115h37v115h-37zM760 1271q-129 0-221-91.5t-92-221.5q0-129 92-221t221-92q130 0 221.5 92t91.5 221q0 130-91.5 221.5t-221.5 91.5zM595 890q0 36 19.5 56.5t49.5 25 64 7 64 2 49.5 9 19.5 30.5q0 49-112 49-97 0-123-51h-3l-31 63q67 42 162 42 29 0 56.5-5t55.5-16 45.5-33 17.5-53q0-46-27.5-69.5t-67.5-27-79.5-3-67-5-27.5-25.5q0-21 20.5-33t40.5-15 41-3q34 0 70.5 11t51.5 34h3l30-58q-3-1-21-8.5t-22.5-9-19.5-7-22-7-20-4.5-24-4-23-1q-29 0-56.5 5t-54 16.5-43 34-16.5 53.5z'
	  },
	  'shopping-bag': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1757 1408l35 313q3 28-16 50-19 21-48 21h-1664q-29 0-48-21-19-22-16-50l35-313h1722zM1664 569l86 775h-1708l86-775q3-24 21-40.5t43-16.5h256v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h384v128q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5v-128h256q25 0 43 16.5t21 40.5zM1280 384v256q0 26-19 45t-45 19-45-19-19-45v-256q0-106-75-181t-181-75-181 75-75 181v256q0 26-19 45t-45 19-45-19-19-45v-256q0-159 112.5-271.5t271.5-112.5 271.5 112.5 112.5 271.5z'
	  },
	  'shopping-basket': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zM485 1568q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zM896 1504v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zM1280 1504v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zM1632 1509l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zM476 292l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z'
	  },
	  'shopping-cart': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M640 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zM1536 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zM1664 448v512q0 24-16.5 42.5t-40.5 21.5l-1044 122q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40 15.5-29.5l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t19.5 15.5 13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z'
	  },
	  'sign-in': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1184 896q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45zM1536 544v704q0 119-84.5 203.5t-203.5 84.5h-320q-13 0-22.5-9.5t-9.5-22.5q0-4-1-20t-0.5-26.5 3-23.5 10-19.5 20.5-6.5h320q66 0 113-47t47-113v-704q0-66-47-113t-113-47h-288-11-13t-11.5-1-11.5-3-8-5.5-7-9-2-13.5q0-4-1-20t-0.5-26.5 3-23.5 10-19.5 20.5-6.5h320q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'sign-out': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M640 1440q0 4 1 20t0.5 26.5-3 23.5-10 19.5-20.5 6.5h-320q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h320q13 0 22.5 9.5t9.5 22.5q0 4 1 20t0.5 26.5-3 23.5-10 19.5-20.5 6.5h-320q-66 0-113 47t-47 113v704q0 66 47 113t113 47h288 11 13t11.5 1 11.5 3 8 5.5 7 9 2 13.5zM1568 896q0 26-19 45l-544 544q-19 19-45 19t-45-19-19-45v-288h-448q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h448v-288q0-26 19-45t45-19 45 19l544 544q19 19 19 45z'
	  },
	  'signal': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M256 1440v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM640 1312v320q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-320q0-14 9-23t23-9h192q14 0 23 9t9 23zM1024 1056v576q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h192q14 0 23 9t9 23zM1408 672v960q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h192q14 0 23 9t9 23zM1792 160v1472q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-1472q0-14 9-23t23-9h192q14 0 23 9t9 23z'
	  },
	  'simplybuilt': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M863 1032q0-112-79.5-191.5t-191.5-79.5-191 79.5-79 191.5 79 191 191 79 191.5-79 79.5-191zM1726 1031q0-112-79-191t-191-79-191.5 79-79.5 191q0 113 79.5 192t191.5 79 191-79.5 79-191.5zM2048 222v1348q0 44-31.5 75.5t-76.5 31.5h-1832q-45 0-76.5-31.5t-31.5-75.5v-1348q0-44 31.5-75.5t76.5-31.5h431q44 0 76 31.5t32 75.5v161h754v-161q0-44 32-75.5t76-31.5h431q45 0 76.5 31.5t31.5 75.5z'
	  },
	  'sitemap': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 1248v320q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96v-192h-512v192h96q40 0 68 28t28 68v320q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96v-192h-512v192h96q40 0 68 28t28 68v320q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h96v-192q0-52 38-90t90-38h512v-192h-96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h320q40 0 68 28t28 68v320q0 40-28 68t-68 28h-96v192h512q52 0 90 38t38 90v192h96q40 0 68 28t28 68z'
	  },
	  'skyatlas': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1430 583zM1690 787q148 0 253 98.5t105 244.5q0 157-109 261.5t-267 104.5q-85 0-162-27.5t-138-73.5-118-106-109-126.5-103.5-132.5-108.5-126-117-106-136-73.5-159-27.5q-154 0-251.5 91.5t-97.5 244.5q0 157 104 250t263 93q100 0 208-37.5t193-98.5q5-4 21-18.5t30-24 22-9.5q14 0 24.5 10.5t10.5 24.5q0 24-60 77-101 88-234.5 142t-260.5 54q-133 0-245.5-58t-180-165-67.5-241q0-205 141.5-341t347.5-136q120 0 226.5 43.5t185.5 113 151.5 153 139 167.5 133.5 153.5 149.5 113 172.5 43.5q102 0 168.5-61.5t66.5-162.5q0-95-64.5-159t-159.5-64q-30 0-81.5 18.5t-68.5 18.5q-20 0-35.5-15t-15.5-35q0-18 8.5-57t8.5-59q0-159-107.5-263t-266.5-104q-58 0-111.5 18.5t-84 40.5-55.5 40.5-33 18.5q-15 0-25.5-10.5t-10.5-25.5q0-19 25-46 59-67 147-103.5t182-36.5q191 0 318 125.5t127 315.5q0 37-4 66 57-15 115-15z'
	  },
	  'skype': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1173 1063q0-50-19.5-91.5t-48.5-68.5-73-49-82.5-34-87.5-23l-104-24q-30-7-44-10.5t-35-11.5-30-16-16.5-21-7.5-30q0-77 144-77 43 0 77 12t54 28.5 38 33.5 40 29 48 12q47 0 75.5-32t28.5-77q0-55-56-99.5t-142-67.5-182-23q-68 0-132 15.5t-119.5 47-89 87-33.5 128.5q0 61 19 106.5t56 75.5 80 48.5 103 32.5l146 36q90 22 112 36 32 20 32 60 0 39-40 64.5t-105 25.5q-51 0-91.5-16t-65-38.5-45.5-45-46-38.5-54-16q-50 0-75.5 30t-25.5 75q0 92 122 157.5t291 65.5q73 0 140-18.5t122.5-53.5 88.5-93.5 33-131.5zM1536 1280q0 159-112.5 271.5t-271.5 112.5q-130 0-234-80-77 16-150 16-143 0-273.5-55.5t-225-150-150-225-55.5-273.5q0-73 16-150-80-104-80-234 0-159 112.5-271.5t271.5-112.5q130 0 234 80 77-16 150-16 143 0 273.5 55.5t225 150 150 225 55.5 273.5q0 73-16 150 80 104 80 234z'
	  },
	  'slack': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1519 776q62 0 103.5 40.5t41.5 101.5q0 97-93 130l-172 59 56 167q7 21 7 47 0 59-42 102t-101 43q-47 0-85.5-27t-53.5-72l-55-165-310 106 55 164q8 24 8 47 0 59-42 102t-102 43q-47 0-85-27t-53-72l-55-163-153 53q-29 9-50 9-61 0-101.5-40t-40.5-101q0-47 27.5-85t71.5-53l156-53-105-313-156 54q-26 8-48 8-60 0-101-40.5t-41-100.5q0-47 27.5-85t71.5-53l157-53-53-159q-8-24-8-47 0-60 42-102.5t102-42.5q47 0 85 27t53 72l54 160 310-105-54-160q-8-24-8-47 0-59 42.5-102t101.5-43q47 0 85.5 27.5t53.5 71.5l53 161 162-55q21-6 43-6 60 0 102.5 39.5t42.5 98.5q0 45-30 81.5t-74 51.5l-157 54 105 316 164-56q24-8 46-8zM725 1038l310-105-105-315-310 107z'
	  },
	  'sliders': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M352 1408v128h-352v-128h352zM704 1280q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zM864 896v128h-864v-128h864zM224 384v128h-224v-128h224zM1536 1408v128h-736v-128h736zM576 256q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zM1216 768q26 0 45 19t19 45v256q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h256zM1536 896v128h-224v-128h224zM1536 384v128h-864v-128h864z'
	  },
	  'slideshare': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M873 740q0 83-63.5 142.5t-152.5 59.5-152.5-59.5-63.5-142.5q0-84 63.5-143t152.5-59 152.5 59 63.5 143zM1375 740q0 83-63 142.5t-153 59.5q-89 0-152.5-59.5t-63.5-142.5q0-84 63.5-143t152.5-59q90 0 153 59t63 143zM1600 920v-667q0-87-32-123.5t-111-36.5h-1112q-83 0-112.5 34t-29.5 126v673q43 23 88.5 40t81 28 81 18.5 71 11 70 4 58.5 0.5 56.5-2 44.5-2q68-1 95 27 6 6 10 9 26 25 61 51 7-91 118-87 5 0 36.5 1.5t43 2 45.5 1 53-1 54.5-4.5 61-8.5 62-13.5 67-19.5 67.5-27 72-34.5zM1763 915q-121 149-372 252 84 285-23 465-66 113-183 148-104 32-182-15-86-51-82-164l-1-326v-1q-8-2-24.5-6t-23.5-5l-1 338q4 114-83 164-79 47-183 15-117-36-182-150-105-180-22-463-251-103-372-252-25-37-4-63t60 1q3 2 11 7t11 8v-694q0-72 47-123t114-51h1257q67 0 114 51t47 123v694l21-15q39-27 60-1t-4 63z'
	  },
	  'smile-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1134 1075q-37 121-138 195t-228 74-228-74-138-195q-8-25 4-48.5t38-31.5q25-8 48.5 4t31.5 38q25 80 92.5 129.5t151.5 49.5 151.5-49.5 92.5-129.5q8-26 32-38t49-4 37 31.5 4 48.5zM640 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1152 640q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'soccer-ball-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M609 816l287-208 287 208-109 336h-355zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM1515 1350q149-203 149-454v-3l-102 89-240-224 63-323 134 12q-150-206-389-282l53 124-287 159-287-159 53-124q-239 76-389 282l135-12 62 323-240 224-102-89v3q0 251 149 454l30-132 326 40 139 298-116 69q117 39 240 39t240-39l-116-69 139-298 326-40z'
	  },
	  'sort-alpha-asc': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1191 408h177l-72-218-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1572 1559v233h-584v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5 0.5t-7.5 0.5q-12 3-30 3h-232v115h-120v-229h567v89l-369 530q-6 8-21 26l-11 11v2l14-2q9-2 30-2h248v-119h121zM1661 662v106h-288v-106h75l-47-144h-243l-47 144h75v106h-287v-106h70l230-662h162l230 662h70z'
	  },
	  'sort-alpha-desc': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1191 1432h177l-72-218-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1661 1686v106h-288v-106h75l-47-144h-243l-47 144h75v106h-287v-106h70l230-662h162l230 662h70zM1572 535v233h-584v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5 0.5t-7.5 0.5q-12 3-30 3h-232v115h-120v-229h567v89l-369 530q-6 8-21 26l-11 10v3l14-3q9-1 30-1h248v-119h121z'
	  },
	  'sort-amount-asc': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1792 1568v192q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h832q14 0 23 9t9 23zM1600 1056v192q0 14-9 23t-23 9h-640q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h640q14 0 23 9t9 23zM1408 544v192q0 14-9 23t-23 9h-448q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h448q14 0 23 9t9 23zM1216 32v192q0 14-9 23t-23 9h-256q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h256q14 0 23 9t9 23z'
	  },
	  'sort-amount-desc': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1216 1568v192q0 14-9 23t-23 9h-256q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h256q14 0 23 9t9 23zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1408 1056v192q0 14-9 23t-23 9h-448q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h448q14 0 23 9t9 23zM1600 544v192q0 14-9 23t-23 9h-640q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h640q14 0 23 9t9 23zM1792 32v192q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h832q14 0 23 9t9 23z'
	  },
	  'sort-asc': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z'
	  },
	  'sort-desc': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'
	  },
	  'sort-down': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'
	  },
	  'sort-numeric-asc': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1346 1313q0-63-44-116t-103-53q-52 0-83 37t-31 94 36.5 95 104.5 38q50 0 85-27t35-68zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1486 1371q0 62-13 121.5t-41 114-68 95.5-98.5 65.5-127.5 24.5q-62 0-108-16-24-8-42-15l39-113q15 7 31 11 37 13 75 13 84 0 134.5-58.5t66.5-145.5h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5t-67-172.5q0-105 72-178t181-73q123 0 205 94.5t82 252.5zM1456 654v114h-469v-114h167v-432q0-7 0.5-19t0.5-17v-16h-2l-7 12q-8 13-26 31l-62 58-82-86 192-185h123v654h165z'
	  },
	  'sort-numeric-desc': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1346 289q0-63-44-116t-103-53q-52 0-83 37t-31 94 36.5 95 104.5 38q50 0 85-27t35-68zM736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zM1456 1678v114h-469v-114h167v-432q0-7 0.5-19t0.5-17v-16h-2l-7 12q-8 13-26 31l-62 58-82-86 192-185h123v654h165zM1486 347q0 62-13 121.5t-41 114-68 95.5-98.5 65.5-127.5 24.5q-62 0-108-16-24-8-42-15l39-113q15 7 31 11 37 13 75 13 84 0 134.5-58.5t66.5-145.5h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5t-67-172.5q0-105 72-178t181-73q123 0 205 94.5t82 252.5z'
	  },
	  'sort-up': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z'
	  },
	  'sort': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45zM1024 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z'
	  },
	  'soundcloud': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M784 1372l16-241-16-523q-1-10-7.5-17t-16.5-7q-9 0-16 7t-7 17l-14 523 14 241q1 10 7.5 16.5t15.5 6.5q22 0 24-23zM1080 1343l11-211-12-586q0-16-13-24-8-5-16-5t-16 5q-13 8-13 24l-1 6-10 579q0 1 11 236v1q0 10 6 17 9 11 23 11 11 0 20-9 9-7 9-20zM35 1003l20 128-20 126q-2 9-9 9t-9-9l-17-126 17-128q2-9 9-9t9 9zM121 924l26 207-26 203q-2 9-10 9-9 0-9-10l-23-202 23-207q0-9 9-9 8 0 10 9zM401 1377zM213 886l25 245-25 237q0 11-11 11-10 0-12-11l-21-237 21-245q2-12 12-12 11 0 11 12zM307 879l23 252-23 244q-2 13-14 13-13 0-13-13l-21-244 21-252q0-13 13-13 12 0 14 13zM401 897l21 234-21 246q-2 16-16 16-6 0-10.5-4.5t-4.5-11.5l-20-246 20-234q0-6 4.5-10.5t10.5-4.5q14 0 16 15zM784 1372zM495 751l21 380-21 246q0 7-5 12.5t-12 5.5q-16 0-18-18l-18-246 18-380q2-18 18-18 7 0 12 5.5t5 12.5zM589 665l19 468-19 244q0 8-5.5 13.5t-13.5 5.5q-18 0-20-19l-16-244 16-468q2-19 20-19 8 0 13.5 5.5t5.5 13.5zM687 625l18 506-18 242q-2 21-22 21-19 0-21-21l-16-242 16-506q0-9 6.5-15.5t14.5-6.5q9 0 15 6.5t7 15.5zM1079 1367v0 0zM881 621l15 510-15 239q0 10-7.5 17.5t-17.5 7.5-17-7-8-18l-14-239 14-510q0-11 7.5-18t17.5-7 17.5 7 7.5 18zM980 640l14 492-14 236q0 11-8 19t-19 8-19-8-9-19l-12-236 12-492q1-12 9-20t19-8 18.5 8 8.5 20zM1192 1132l-14 231v0q0 13-9 22t-22 9-22-9-10-22l-6-114-6-117 12-636v-3q2-15 12-24 9-7 20-7 8 0 15 5 14 8 16 26zM2304 1113q0 117-83 199.5t-200 82.5h-786q-13-2-22-11t-9-22v-899q0-23 28-33 85-34 181-34 195 0 338 131.5t160 323.5q53-22 110-22 117 0 200 83t83 201z'
	  },
	  'space-shuttle': {
	    'width': 2176,
	    'height': 1792,
	    'd': 'M620 1120q-110 64-268 64h-128v-64h-64q-13 0-22.5-23.5t-9.5-56.5q0-24 7-49-58-2-96.5-10.5t-38.5-20.5 38.5-20.5 96.5-10.5q-7-25-7-49 0-33 9.5-56.5t22.5-23.5h64v-64h128q158 0 268 64h1113q42 7 106.5 18t80.5 14q89 15 150 40.5t83.5 47.5 22.5 40-22.5 40-83.5 47.5-150 40.5q-16 3-80.5 14t-106.5 18h-1113zM1739 868q53 36 53 92t-53 92l81 30q68-48 68-122t-68-122zM625 1136h1015q-217 38-456 80-57 0-113 24t-83 48l-28 24-288 288q-26 26-70.5 45t-89.5 19h-96l-93-464h29q157 0 273-64zM352 720h-29l93-464h96q46 0 90 19t70 45l288 288q4 4 11 10.5t30.5 23 48.5 29 61.5 23 72.5 10.5l456 80h-1015q-116-64-273-64z'
	  },
	  'spinner': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zM1024 1600q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM320 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1522 1394q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM558 398q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zM1728 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zM1088 192q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM1618 398q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'
	  },
	  'spoon': {
	    'width': 768,
	    'height': 1792,
	    'd': 'M704 528q0 145-57 243.5t-152 135.5l45 821q2 26-16 45t-44 19h-192q-26 0-44-19t-16-45l45-821q-95-37-152-135.5t-57-243.5q0-128 42.5-249.5t117.5-200 160-78.5 160 78.5 117.5 200 42.5 249.5z'
	  },
	  'spotify': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1127 1210q0-32-30-51-193-115-447-115-133 0-287 34-42 9-42 52 0 20 13.5 34.5t35.5 14.5q5 0 37-8 132-27 243-27 226 0 397 103 19 11 33 11 19 0 33-13.5t14-34.5zM1223 995q0-40-35-61-237-141-548-141-153 0-303 42-48 13-48 64 0 25 17.5 42.5t42.5 17.5q7 0 37-8 122-33 251-33 279 0 488 124 24 13 38 13 25 0 42.5-17.5t17.5-42.5zM1331 747q0-47-40-70-126-73-293-110.5t-343-37.5q-204 0-364 47-23 7-38.5 25.5t-15.5 48.5q0 31 20.5 52t51.5 21q11 0 40-8 133-37 307-37 159 0 309.5 34t253.5 95q21 12 40 12 29 0 50.5-20.5t21.5-51.5zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'square-o': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1120 256h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-832q0-66-47-113t-113-47zM1408 416v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'stack-exchange': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1259 1253v66q0 85-57.5 144.5t-138.5 59.5h-57l-260 269v-269h-529q-81 0-138.5-59.5t-57.5-144.5v-66h1238zM1259 927v255h-1238v-255h1238zM1259 599v255h-1238v-255h1238zM1259 459v67h-1238v-67q0-84 57.5-143.5t138.5-59.5h846q81 0 138.5 59.5t57.5 143.5z'
	  },
	  'stack-overflow': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1289 1632h-1118v-480h-160v640h1438v-640h-160v480zM347 1108l33-157 783 165-33 156zM450 734l67-146 725 339-67 145zM651 378l102-123 614 513-102 123zM1048 0l477 641-128 96-477-641zM330 1471v-159h800v159h-800z'
	  },
	  'star-half-empty': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1186 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zM1638 695l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z'
	  },
	  'star-half-full': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1186 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zM1638 695l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z'
	  },
	  'star-half-o': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1186 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zM1638 695l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z'
	  },
	  'star-half': {
	    'width': 896,
	    'height': 1792,
	    'd': 'M832 32v1339l-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41z'
	  },
	  'star-o': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1137 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zM1664 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'
	  },
	  'star': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1664 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'
	  },
	  'steam-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1242 647q0-80-57-136.5t-137-56.5-136.5 57-56.5 136q0 80 56.5 136.5t136.5 56.5 137-56.5 57-136.5zM632 1235q0 83-58 140.5t-140 57.5q-56 0-103-29t-72-77q52 20 98 40 60 24 120-1.5t85-86.5q24-60-1.5-120t-86.5-84l-82-33q22-5 42-5 82 0 140 57.5t58 140.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-153l172 69q20 92 93.5 152t168.5 60q104 0 181-70t87-173l345-252q150 0 255.5-105.5t105.5-254.5q0-150-105.5-255.5t-255.5-105.5q-148 0-253 104.5t-107 252.5l-225 322q-9-1-28-1-75 0-137 37l-297-119v-468q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5zM1289 649q0 100-71 170.5t-171 70.5-170.5-70.5-70.5-170.5 70.5-171 170.5-71q101 0 171.5 70.5t70.5 171.5z'
	  },
	  'steam': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1582 582q0 101-71.5 172.5t-172.5 71.5-172.5-71.5-71.5-172.5 71.5-172.5 172.5-71.5 172.5 71.5 71.5 172.5zM812 1324q0-104-73-177t-177-73q-27 0-54 6l104 42q77 31 109.5 106.5t1.5 151.5q-31 77-107 109t-152 1q-21-8-62-24.5t-61-24.5q32 60 91 96.5t130 36.5q104 0 177-73t73-177zM1642 583q0-126-89.5-215.5t-215.5-89.5q-127 0-216.5 89.5t-89.5 215.5q0 127 89.5 216t216.5 89q126 0 215.5-89t89.5-216zM1792 583q0 189-133.5 322t-321.5 133l-437 319q-12 129-109 218t-229 89q-121 0-214-76t-118-192l-230-92v-429l389 157q79-48 173-48 13 0 35 2l284-407q2-187 135.5-319t320.5-132q188 0 321.5 133.5t133.5 321.5z'
	  },
	  'step-backward': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M979 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-9-9-13-19v678q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h128q26 0 45 19t19 45v678q4-11 13-19z'
	  },
	  'step-forward': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M45 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q8 8 13 19v-678q0-26 19-45t45-19h128q26 0 45 19t19 45v1408q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-678q-5 10-13 19z'
	  },
	  'stethoscope': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1280 704q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 704q0 62-35.5 111t-92.5 70v395q0 159-131.5 271.5t-316.5 112.5-316.5-112.5-131.5-271.5v-132q-164-20-274-128t-110-252v-512q0-26 19-45t45-19q6 0 16 2 17-30 47-48t65-18q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5q-33 0-64-18v402q0 106 94 181t226 75 226-75 94-181v-402q-31 18-64 18-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5q35 0 65 18t47 48q10-2 16-2 26 0 45 19t19 45v512q0 144-110 252t-274 128v132q0 106 94 181t226 75 226-75 94-181v-395q-57-21-92.5-70t-35.5-111q0-80 56-136t136-56 136 56 56 136z'
	  },
	  'sticky-note-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1400 1280h-248v248q29-10 41-22l185-185q12-12 22-41zM1120 1152h288v-896h-1280v1280h896v-288q0-40 28-68t68-28zM1536 224v1024q0 40-20 88t-48 76l-184 184q-28 28-76 48t-88 20h-1024q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1344q40 0 68 28t28 68z'
	  },
	  'sticky-note': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 1248v416h-928q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1344q40 0 68 28t28 68v928h-416q-40 0-68 28t-28 68zM1152 1280h381q-15 82-65 132l-184 184q-50 50-132 65v-381z'
	  },
	  'stop-circle-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M768 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zM768 1440q148 0 273-73t198-198 73-273-73-273-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73zM480 1216q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h576q14 0 23 9t9 23v576q0 14-9 23t-23 9h-576z'
	  },
	  'stop-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1088 1184v-576q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v576q0 14 9 23t23 9h576q14 0 23-9t9-23zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'stop': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 192v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z'
	  },
	  'street-view': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1408 1536q0 63-61.5 113.5t-164 81-225 46-253.5 15.5-253.5-15.5-225-46-164-81-61.5-113.5q0-49 33-88.5t91-66.5 118-44.5 131-29.5q26-5 48 10.5t26 41.5q5 26-10.5 48t-41.5 26q-58 10-106 23.5t-76.5 25.5-48.5 23.5-27.5 19.5-8.5 12q3 11 27 26.5t73 33 114 32.5 160.5 25 201.5 10 201.5-10 160.5-25 114-33 73-33.5 27-27.5q-1-4-8.5-11t-27.5-19-48.5-23.5-76.5-25-106-23.5q-26-4-41.5-26t-10.5-48q4-26 26-41.5t48-10.5q71 12 131 29.5t118 44.5 91 66.5 33 88.5zM1024 640v384q0 26-19 45t-45 19h-64v384q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-384h-64q-26 0-45-19t-19-45v-384q0-53 37.5-90.5t90.5-37.5h384q53 0 90.5 37.5t37.5 90.5zM928 256q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z'
	  },
	  'strikethrough': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zM483 832q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zM990 1088h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z'
	  },
	  'stumbleupon-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M866 839l90-27v-62q0-79-58-135t-138-56-138 55.5-58 134.5v283q0 20-14 33.5t-33 13.5-32.5-13.5-13.5-33.5v-120h-151v122q0 82 57.5 139t139.5 57q81 0 138.5-56.5t57.5-136.5v-280q0-19 13.5-33t33.5-14q19 0 32.5 14t13.5 33v54zM1199 1034v-122h-150v126q0 20-13.5 33.5t-33.5 13.5q-19 0-32.5-14t-13.5-33v-123l-90 26-60-28v123q0 80 58 137t139 57 138.5-57 57.5-139zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'stumbleupon': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1062 712v-118q0-42-30-72t-72-30-72 30-30 72v612q0 175-126 299t-303 124q-178 0-303.5-125.5t-125.5-303.5v-266h328v262q0 43 30 72.5t72 29.5 72-29.5 30-72.5v-620q0-171 126.5-292t301.5-121q176 0 302 122t126 294v136l-195 58zM1592 934h328v266q0 178-125.5 303.5t-303.5 125.5q-177 0-303-124.5t-126-300.5v-268l131 61 195-58v270q0 42 30 71.5t72 29.5 72-29.5 30-71.5v-275z'
	  },
	  'subscript': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M897 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zM1536 1586v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z'
	  },
	  'subway': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1088 0q185 0 316.5 93.5t131.5 226.5v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20h-1056q-22 0-30-20t8-35l213-202q-180-5-305.5-97t-125.5-222v-896q0-133 131.5-226.5t316.5-93.5h640zM288 1312q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM704 768v-512h-544v512h544zM1248 1312q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM1408 768v-512h-576v512h576z'
	  },
	  'suitcase': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 384h512v-128h-512v128zM288 384v1280h-64q-92 0-158-66t-66-158v-832q0-92 66-158t158-66h64zM1408 384v1280h-1024v-1280h128v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h128zM1792 608v832q0 92-66 158t-158 66h-64v-1280h64q92 0 158 66t66 158z'
	  },
	  'sun-o': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1472 896q0-117-45.5-223.5t-123-184-184-123-223.5-45.5-223.5 45.5-184 123-123 184-45.5 223.5 45.5 223.5 123 184 184 123 223.5 45.5 223.5-45.5 184-123 123-184 45.5-223.5zM1748 1173q-4 15-20 20l-292 96v306q0 16-13 26-15 10-29 4l-292-94-180 248q-10 13-26 13t-26-13l-180-248-292 94q-14 6-29-4-13-10-13-26v-306l-292-96q-16-5-20-20-5-17 4-29l180-248-180-248q-9-13-4-29 4-15 20-20l292-96v-306q0-16 13-26 15-10 29-4l292 94 180-248q9-12 26-12t26 12l180 248 292-94q14-6 29 4 13 10 13 26v306l292 96q16 5 20 20 5 16-4 29l-180 248 180 248q9 12 4 29z'
	  },
	  'superscript': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M897 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zM1534 690v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z'
	  },
	  'support': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zM896 1664q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zM896 1280q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zM1380 1063l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z'
	  },
	  'table': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M512 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM512 992v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1024 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM512 608v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1024 992v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1536 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1024 608v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1536 992v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1536 608v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zM1664 288v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z'
	  },
	  'tablet': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M640 1408q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1024 1248v-960q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zM1152 288v1088q0 66-47 113t-113 47h-832q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h832q66 0 113 47t47 113z'
	  },
	  'tachometer': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M384 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM576 704q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1004 1185l101-382q6-26-7.5-48.5t-38.5-29.5-48 6.5-30 39.5l-101 382q-60 5-107 43.5t-63 98.5q-20 77 20 146t117 89 146-20 89-117q16-60-6-117t-72-91zM1664 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1024 512q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1472 704q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1792 1152q0 261-141 483-19 29-54 29h-1402q-35 0-54-29-141-221-141-483 0-182 71-348t191-286 286-191 348-71 348 71 286 191 191 286 71 348z'
	  },
	  'tag': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M448 448q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1515 1024q0 53-37 90l-491 492q-39 37-91 37-53 0-90-37l-715-716q-38-37-64.5-101t-26.5-117v-416q0-52 38-90t90-38h416q53 0 117 26.5t102 64.5l715 714q37 39 37 91z'
	  },
	  'tags': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M448 448q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM1515 1024q0 53-37 90l-491 492q-39 37-91 37-53 0-90-37l-715-716q-38-37-64.5-101t-26.5-117v-416q0-52 38-90t90-38h416q53 0 117 26.5t102 64.5l715 714q37 39 37 91zM1899 1024q0 53-37 90l-491 492q-39 37-91 37-36 0-59-14t-53-45l470-470q37-37 37-90 0-52-37-91l-715-714q-38-38-102-64.5t-117-26.5h224q53 0 117 26.5t102 64.5l715 714q37 39 37 91z'
	  },
	  'tasks': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1024 1408h640v-128h-640v128zM640 896h1024v-128h-1024v128zM1280 384h384v-128h-384v128zM1792 1216v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 704v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45zM1792 192v256q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45z'
	  },
	  'taxi': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1824 896q93 0 158.5 65.5t65.5 158.5v384q0 14-9 23t-23 9h-96v64q0 80-56 136t-136 56-136-56-56-136v-64h-1024v64q0 80-56 136t-136 56-136-56-56-136v-64h-96q-14 0-23-9t-9-23v-384q0-93 65.5-158.5t158.5-65.5h28l105-419q23-94 104-157.5t179-63.5h128v-224q0-14 9-23t23-9h448q14 0 23 9t9 23v224h128q98 0 179 63.5t104 157.5l105 419h28zM320 1376q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47zM516 896h1016l-89-357q-2-8-14-17.5t-21-9.5h-768q-9 0-21 9.5t-14 17.5zM1728 1376q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47z'
	  },
	  'television': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1792 1248v-960q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zM1920 288v960q0 66-47 113t-113 47h-736v128h352q14 0 23 9t9 23v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-128h-736q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
	  },
	  'tencent-weibo': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M842 572q0 80-57 136.5t-136 56.5q-60 0-111-35-62 67-115 146-247 371-202 859 1 22-12.5 38.5t-34.5 18.5h-5q-20 0-35-13.5t-17-33.5q-14-126-3.5-247.5t29.5-217 54-186 69-155.5 74-125q61-90 132-165-16-35-16-77 0-80 56.5-136.5t136.5-56.5 136.5 56.5 56.5 136.5zM1223 583q0 158-78 292t-212.5 212-292.5 78q-64 0-131-14-21-5-32.5-23.5t-6.5-39.5q5-20 23-31.5t39-7.5q51 13 108 13 97 0 186-38t153-102 102-153 38-186-38-186-102-153-153-102-186-38-186 38-153 102-102 153-38 186q0 114 52 218 10 20 3.5 40t-25.5 30-39.5 3-30.5-26q-64-123-64-265 0-119 46.5-227t124.5-186 186-124 226-46q158 0 292.5 78t212.5 212.5 78 292.5z'
	  },
	  'terminal': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M585 983l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23zM1664 1440v64q0 14-9 23t-23 9h-960q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h960q14 0 23 9t9 23z'
	  },
	  'text-height': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zM81 129l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5 0.5t107.5 0.5h293q6 0 21 0.5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 0.5t14 0.5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-0.5-16.5 0.5q-17 0-66.5-0.5t-74.5-0.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 0.5-15.5t0.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z'
	  },
	  'text-width': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M81 129l54 27q12 5 211 5 44 0 132-2t132-2q70 0 246.5-1t304.5-0.5 247 4.5q33 1 56-31l42-1q4 0 14 0.5t14 0.5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-47.5t-15-73.5-7-36q-10-13-27-19-5-2-66-2-30 0-93-1t-103-1-94 2-96 7q-9 81-8 136l1 152v-52q0 55 1 154t1.5 180 0.5 153q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q7-16 11.5-74t6-145.5 1.5-155-0.5-153.5-0.5-89q0-7-2.5-21.5t-2.5-22.5q0-7 0.5-44t1-73 0-76.5-3-67.5-6.5-32q-11-12-162-12-41 0-163 13.5t-138 24.5q-19 12-34 71.5t-31.5 111.5-42.5 54q-42-26-56-44v-383zM1310 1411q12 0 42 19.5t57.5 41.5 59.5 49 36 30q26 21 26 49t-26 49q-4 3-36 30t-59.5 49-57.5 41.5-42 19.5q-13 0-20.5-10.5t-10-28.5-2.5-33.5 1.5-33 1.5-19.5h-1024q0 2 1.5 19.5t1.5 33-2.5 33.5-10 28.5-20.5 10.5q-12 0-42-19.5t-57.5-41.5-59.5-49-36-30q-26-21-26-49t26-49q4-3 36-30t59.5-49 57.5-41.5 42-19.5q13 0 20.5 10.5t10 28.5 2.5 33.5-1.5 33-1.5 19.5h1024q0-2-1.5-19.5t-1.5-33 2.5-33.5 10-28.5 20.5-10.5z'
	  },
	  'th-large': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M768 1024v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zM768 256v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zM1664 1024v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90zM1664 256v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-384q0-52 38-90t90-38h512q52 0 90 38t38 90z'
	  },
	  'th-list': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 1248v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zM512 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 736v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zM1792 224v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z'
	  },
	  'th': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM512 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1152 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 736v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zM1792 224v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z'
	  },
	  'thumb-tack': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M480 864v-448q0-14-9-23t-23-9-23 9-9 23v448q0 14 9 23t23 9 23-9 9-23zM1152 1216q0 26-19 45t-45 19h-429l-51 483q-2 12-10.5 20.5t-20.5 8.5h-1q-27 0-32-27l-76-485h-404q-26 0-45-19t-19-45q0-123 78.5-221.5t177.5-98.5v-512q-52 0-90-38t-38-90 38-90 90-38h640q52 0 90 38t38 90-38 90-90 38v512q99 0 177.5 98.5t78.5 221.5z'
	  },
	  'thumbs-down': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M256 576q0 26-19 45t-45 19q-27 0-45.5-19t-18.5-45q0-27 18.5-45.5t45.5-18.5q26 0 45 18.5t19 45.5zM416 1088v-640q0-26-19-45t-45-19h-288q-26 0-45 19t-19 45v640q0 26 19 45t45 19h288q26 0 45-19t19-45zM1545 939q55 61 55 149-1 78-57.5 135t-134.5 57h-277q4 14 8 24t11 22 10 18q18 37 27 57t19 58.5 10 76.5q0 24-0.5 39t-5 45-12 50-24 45-40 40.5-60 26-82.5 10.5q-26 0-45-19-20-20-34-50t-19.5-52-12.5-61q-9-42-13.5-60.5t-17.5-48.5-31-48q-33-33-101-120-49-64-101-121t-76-59q-25-2-43-20.5t-18-43.5v-641q0-26 19-44.5t45-19.5q35-1 158-44 77-26 120.5-39.5t121.5-29 144-15.5h17 76 36q133 2 197 78 58 69 49 181 39 37 54 94 17 61 0 117 46 61 43 137 0 32-15 76z'
	  },
	  'thumbs-o-down': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M256 448q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 1024q0-35-21.5-81t-53.5-47q15-17 25-47.5t10-55.5q0-69-53-119 18-32 18-69t-17.5-73.5-47.5-52.5q5-30 5-56 0-85-49-126t-136-41h-128q-131 0-342 73-5 2-29 10.5t-35.5 12.5-35 11.5-38 11-33 6.5-31.5 3h-32v640h32q16 0 35.5 9t40 27 38.5 35.5 40 44 34.5 42.5 31.5 41 23 30q55 68 77 91 41 43 59.5 109.5t30.5 125.5 38 85q96 0 128-47t32-145q0-59-48-160.5t-48-159.5h352q50 0 89-38.5t39-89.5zM1536 1025q0 103-76 179t-180 76h-176q48 99 48 192 0 118-35 186-35 69-102 101.5t-151 32.5q-51 0-90-37-34-33-54-82t-25.5-90.5-17.5-84.5-31-64q-48-50-107-127-101-131-137-155h-274q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h288q22 0 138-40 128-44 223-66t200-22h112q140 0 226.5 79t85.5 216v5q60 77 60 178 0 22-3 43 38 67 38 144 0 36-9 69 49 74 49 163z'
	  },
	  'thumbs-o-up': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M256 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1408 768q0-51-39-89.5t-89-38.5h-352q0-58 48-159.5t48-160.5q0-98-32-145t-128-47q-26 26-38 85t-30.5 125.5-59.5 109.5q-22 23-77 91-4 5-23 30t-31.5 41-34.5 42.5-40 44-38.5 35.5-40 27-35.5 9h-32v640h32q13 0 31.5 3t33 6.5 38 11 35 11.5 35.5 12.5 29 10.5q211 73 342 73h121q192 0 192-167 0-26-5-56 30-16 47.5-52.5t17.5-73.5-18-69q53-50 53-119 0-25-10-55.5t-25-47.5q32-1 53.5-47t21.5-81zM1536 767q0 89-49 163 9 33 9 69 0 77-38 144 3 21 3 43 0 101-60 178 1 139-85 219.5t-227 80.5h-36-93q-96 0-189.5-22.5t-216.5-65.5q-116-40-138-40h-288q-53 0-90.5-37.5t-37.5-90.5v-640q0-53 37.5-90.5t90.5-37.5h274q36-24 137-155 58-75 107-128 24-25 35.5-85.5t30.5-126.5 62-108q39-37 90-37 84 0 151 32.5t102 101.5 35 186q0 93-48 192h176q104 0 180 76t76 179z'
	  },
	  'thumbs-up': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M256 1344q0-26-19-45t-45-19q-27 0-45.5 19t-18.5 45q0 27 18.5 45.5t45.5 18.5q26 0 45-18.5t19-45.5zM416 832v640q0 26-19 45t-45 19h-288q-26 0-45-19t-19-45v-640q0-26 19-45t45-19h288q26 0 45 19t19 45zM1600 832q0 86-55 149 15 44 15 76 3 76-43 137 17 56 0 117-15 57-54 94 9 112-49 181-64 76-197 78h-36-76-17q-66 0-144-15.5t-121.5-29-120.5-39.5q-123-43-158-44-26-1-45-19.5t-19-44.5v-641q0-25 18-43.5t43-20.5q24-2 76-59t101-121q68-87 101-120 18-18 31-48t17.5-48.5 13.5-60.5q7-39 12.5-61t19.5-52 34-50q19-19 45-19 46 0 82.5 10.5t60 26 40 40.5 24 45 12 50 5 45 0.5 39q0 38-9.5 76t-19 60-27.5 56q-3 6-10 18t-11 22-8 24h277q78 0 135 57t57 135z'
	  },
	  'ticket': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1024 452l316 316-572 572-316-316zM813 1431l618-618q19-19 19-45t-19-45l-362-362q-18-18-45-18t-45 18l-618 618q-19 19-19 45t19 45l362 362q18 18 45 18t45-18zM1702 794l-907 908q-37 37-90.5 37t-90.5-37l-126-126q56-56 56-136t-56-136-136-56-136 56l-125-126q-37-37-37-90.5t37-90.5l907-906q37-37 90.5-37t90.5 37l125 125q-56 56-56 136t56 136 136 56 136-56l126 125q37 37 37 90.5t-37 90.5z'
	  },
	  'times-circle-o': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1097 1079l-146 146q-10 10-23 10t-23-10l-137-137-137 137q-10 10-23 10t-23-10l-146-146q-10-10-10-23t10-23l137-137-137-137q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l137 137 137-137q10-10 23-10t23 10l146 146q10 10 10 23t-10 23l-137 137 137 137q10 10 10 23t-10 23zM1312 896q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'times-circle': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1149 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zM1536 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'
	  },
	  'times': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z'
	  },
	  'tint': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M512 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zM1024 1024q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z'
	  },
	  'toggle-down': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1145 675q18 35-5 66l-320 448q-19 27-52 27t-52-27l-320-448q-23-31-5-66 17-35 57-35h640q40 0 57 35zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'toggle-left': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 576v640q0 26-19 45t-45 19q-20 0-37-12l-448-320q-27-19-27-52t27-52l448-320q17-12 37-12 26 0 45 19t19 45zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'toggle-off': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1152 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5 198.5-40.5 163.5-109.5 109.5-163.5 40.5-198.5zM1920 896q0-104-40.5-198.5t-109.5-163.5-163.5-109.5-198.5-40.5h-386q119 90 188.5 224t69.5 288-69.5 288-188.5 224h386q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5zM2048 896q0 130-51 248.5t-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5 51-248.5 136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5z'
	  },
	  'toggle-on': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M0 896q0-130 51-248.5t136.5-204 204-136.5 248.5-51h768q130 0 248.5 51t204 136.5 136.5 204 51 248.5-51 248.5-136.5 204-204 136.5-248.5 51h-768q-130 0-248.5-51t-204-136.5-136.5-204-51-248.5zM1408 1408q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5-198.5 40.5-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5z'
	  },
	  'toggle-right': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1088 896q0 33-27 52l-448 320q-31 23-66 5-35-17-35-57v-640q0-40 35-57 35-18 66 5l448 320q27 19 27 52zM1280 1376v-960q0-14-9-23t-23-9h-960q-14 0-23 9t-9 23v960q0 14 9 23t23 9h960q14 0 23-9t9-23zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'toggle-up': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1145 1117q-17 35-57 35h-640q-40 0-57-35-18-35 5-66l320-448q19-27 52-27t52 27l320 448q23 31 5 66zM1280 1376v-960q0-13-9.5-22.5t-22.5-9.5h-960q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5-9.5t9.5-22.5zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'trademark': {
	    'width': 1973,
	    'height': 1792,
	    'd': 'M857 544v117q0 13-9.5 22t-22.5 9h-298v812q0 13-9 22.5t-22 9.5h-135q-13 0-22.5-9t-9.5-23v-812h-297q-13 0-22.5-9t-9.5-22v-117q0-14 9-23t23-9h793q13 0 22.5 9.5t9.5 22.5zM1895 541l77 961q1 13-8 24-10 10-23 10h-134q-12 0-21-8.5t-10-20.5l-46-588-189 425q-8 19-29 19h-120q-20 0-29-19l-188-427-45 590q-1 12-10 20.5t-21 8.5h-135q-13 0-23-10-9-10-9-24l78-961q1-12 10-20.5t21-8.5h142q20 0 29 19l220 520q10 24 20 51 3-7 9.5-24.5t10.5-26.5l221-520q9-19 29-19h141q13 0 22 8.5t10 20.5z'
	  },
	  'train': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1088 0q185 0 316.5 93.5t131.5 226.5v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20h-1056q-22 0-30-20t8-35l213-202q-180-5-305.5-97t-125.5-222v-896q0-133 131.5-226.5t316.5-93.5h640zM768 1344q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM1344 768v-512h-1152v512h1152z'
	  },
	  'transgender-alt': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1280 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q126 158 126 359 0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-217-24-364.5-187.5t-147.5-384.5q0-201 126-359l-52-53-101 111q-9 10-22 10.5t-23-7.5l-48-44q-10-8-10.5-21.5t8.5-23.5l105-115-111-112v134q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-288q0-26 19-45t45-19h288q14 0 23 9t9 23v64q0 14-9 23t-23 9h-133l106 107 86-94q9-10 22-10.5t23 7.5l48 44q10 8 10.5 21.5t-8.5 23.5l-90 99 57 56q158-126 359-126t359 126l255-254h-134q-14 0-23-9t-9-23v-64zM832 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'transgender': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1024 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q126 158 126 359 0 221-147.5 384.5t-364.5 187.5v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-149-16-270.5-103t-186.5-223.5-53-291.5q16-204 160-353.5t347-172.5q118-14 228 19t198 103l255-254h-134q-14 0-23-9t-9-23v-64zM576 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z'
	  },
	  'trash-o': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M512 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM768 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM1024 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM1152 1460v-948h-896v948q0 22 7 40.5t14.5 27 10.5 8.5h832q3 0 10.5-8.5t14.5-27 7-40.5zM480 384h448l-48-117q-7-9-17-11h-317q-10 2-17 11zM1408 416v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z'
	  },
	  'trash': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M512 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zM768 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zM1024 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zM480 384h448l-48-117q-7-9-17-11h-317q-10 2-17 11zM1408 416v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z'
	  },
	  'tree': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1504 1472q0 26-19 45t-45 19h-462q1 17 6 87.5t5 108.5q0 25-18 42.5t-43 17.5h-320q-25 0-43-17.5t-18-42.5q0-38 5-108.5t6-87.5h-462q-26 0-45-19t-19-45 19-45l402-403h-229q-26 0-45-19t-19-45 19-45l402-403h-197q-26 0-45-19t-19-45 19-45l384-384q19-19 45-19t45 19l384 384q19 19 19 45t-19 45-45 19h-197l402 403q19 19 19 45t-19 45-45 19h-229l402 403q19 19 19 45z'
	  },
	  'trello': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M704 1344v-1024q0-14-9-23t-23-9h-480q-14 0-23 9t-9 23v1024q0 14 9 23t23 9h480q14 0 23-9t9-23zM1376 960v-640q0-14-9-23t-23-9h-480q-14 0-23 9t-9 23v640q0 14 9 23t23 9h480q14 0 23-9t9-23zM1536 192v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z'
	  },
	  'tripadvisor': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M651 997q0 39-27.5 66.5t-65.5 27.5q-39 0-66.5-27.5t-27.5-66.5q0-38 27.5-65.5t66.5-27.5q38 0 65.5 27.5t27.5 65.5zM1805 996q0 39-27.5 66.5t-66.5 27.5-66.5-27.5-27.5-66.5 27.5-66 66.5-27 66.5 27 27.5 66zM765 997q0-79-56.5-136t-136.5-57-136.5 56.5-56.5 136.5 56.5 136.5 136.5 56.5 136.5-56.5 56.5-136.5zM1918 996q0-80-56.5-136.5t-136.5-56.5q-79 0-136 56.5t-57 136.5 56.5 136.5 136.5 56.5 136.5-56.5 56.5-136.5zM850 997q0 116-81.5 197.5t-196.5 81.5q-116 0-197.5-82t-81.5-197 82-196.5 197-81.5 196.5 81.5 81.5 196.5zM2004 996q0 115-81.5 196.5t-197.5 81.5q-115 0-196.5-81.5t-81.5-196.5 81.5-196.5 196.5-81.5q116 0 197.5 81.5t81.5 196.5zM1040 999q0-191-135.5-326.5t-326.5-135.5q-125 0-231 62t-168 168.5-62 231.5 62 231.5 168 168.5 231 62q191 0 326.5-135.5t135.5-326.5zM1708 426q-254-111-556-111-319 0-573 110 117 0 223 45.5t182.5 122.5 122 183 45.5 223q0-115 43.5-219.5t118-180.5 177.5-123 217-50zM2187 999q0-191-135-326.5t-326-135.5-326.5 135.5-135.5 326.5 135.5 326.5 326.5 135.5 326-135.5 135-326.5zM1921 433h383q-44 51-75 114.5t-40 114.5q110 151 110 337 0 156-77 288t-209 208.5-287 76.5q-133 0-249-56t-196-155q-47 56-129 179-11-22-53.5-82.5t-74.5-97.5q-80 99-196.5 155.5t-249.5 56.5q-155 0-287-76.5t-209-208.5-77-288q0-186 110-337-9-51-40-114.5t-75-114.5h365q149-100 355-156.5t432-56.5q224 0 421 56t348 157z'
	  },
	  'trophy': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M458 883q-74-162-74-371h-256v96q0 78 94.5 162t235.5 113zM1536 608v-96h-256q0 209-74 371 141-29 235.5-113t94.5-162zM1664 480v128q0 71-41.5 143t-112 130-173 97.5-215.5 44.5q-42 54-95 95-38 34-52.5 72.5t-14.5 89.5q0 54 30.5 91t97.5 37q75 0 133.5 45.5t58.5 114.5v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-69 58.5-114.5t133.5-45.5q67 0 97.5-37t30.5-91q0-51-14.5-89.5t-52.5-72.5q-53-41-95-95-113-5-215.5-44.5t-173-97.5-112-130-41.5-143v-128q0-40 28-68t68-28h288v-96q0-66 47-113t113-47h576q66 0 113 47t47 113v96h288q40 0 68 28t28 68z'
	  },
	  'truck': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M640 1408q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM256 896h384v-256h-158q-13 0-22 9l-195 195q-9 9-9 22v30zM1536 1408q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM1792 320v1024q0 15-4 26.5t-13.5 18.5-16.5 11.5-23.5 6-22.5 2-25.5 0-22.5-0.5q0 106-75 181t-181 75-181-75-75-181h-384q0 106-75 181t-181 75-181-75-75-181h-64q-3 0-22.5 0.5t-25.5 0-22.5-2-23.5-6-16.5-11.5-13.5-18.5-4-26.5q0-26 19-45t45-19v-320q0-8-0.5-35t0-38 2.5-34.5 6.5-37 14-30.5 22.5-30l198-198q19-19 50.5-32t58.5-13h160v-192q0-26 19-45t45-19h1024q26 0 45 19t19 45z'
	  },
	  'try': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M1152 832q0 191-94.5 353t-256.5 256.5-353 94.5h-160q-14 0-23-9t-9-23v-611l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-93l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-250q0-14 9-23t23-9h160q14 0 23 9t9 23v181l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v93l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v487q188-13 318-151t130-328q0-14 9-23t23-9h160q14 0 23 9t9 23z'
	  },
	  'tty': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M448 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM256 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM832 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM640 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM66 768q-28 0-47-19t-19-46v-129h514v129q0 27-19 46t-46 19h-383zM1216 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1024 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1600 1312v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1408 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1792 520v13h-514v-10q0-104-382-102-382 1-382 102v10h-514v-13q0-17 8.5-43t34-64 65.5-75.5 110.5-76 160-67.5 224-47.5 293.5-18.5 293 18.5 224 47.5 160.5 67.5 110.5 76 65.5 75.5 34 64 8.5 43zM1792 928v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23zM1792 574v129q0 27-19 46t-46 19h-384q-27 0-46-19t-19-46v-129h514z'
	  },
	  'tumblr-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1136 1461l-62-183q-44 22-103 22-36 1-62-10.5t-38.5-31.5-17.5-40.5-5-43.5v-398h257v-194h-256v-326h-188q-8 0-9 10-5 44-17.5 87t-39 95-77 95-118.5 68v165h130v418q0 57 21.5 115t65 111 121 85.5 176.5 30.5q69-1 136.5-25t85.5-50zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'tumblr': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M944 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26t-142.5-74-95-106-55.5-120-16.5-118v-544h-168v-215q72-26 129-69.5t91-90 58-102 34-99 15-88.5q1-5 4.5-8.5t7.5-3.5h244v424h333v252h-334v518q0 30 6.5 56t22.5 52.5 49.5 41.5 81.5 14q78-2 134-29z'
	  },
	  'turkish-lira': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M1152 832q0 191-94.5 353t-256.5 256.5-353 94.5h-160q-14 0-23-9t-9-23v-611l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-93l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-250q0-14 9-23t23-9h160q14 0 23 9t9 23v181l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v93l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v487q188-13 318-151t130-328q0-14 9-23t23-9h160q14 0 23 9t9 23z'
	  },
	  'tv': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1792 1248v-960q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zM1920 288v960q0 66-47 113t-113 47h-736v128h352q14 0 23 9t9 23v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-128h-736q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
	  },
	  'twitch': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M896 434v434h-145v-434h145zM1294 434v434h-145v-434h145zM1294 1194l253-254v-795h-1194v1049h326v217l217-217h398zM1692 0v1013l-434 434h-326l-217 217h-217v-217h-398v-1158l109-289h1483z'
	  },
	  'twitter-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1280 610q-56 25-121 34 68-40 93-117-65 38-134 51-61-66-153-66-87 0-148.5 61.5t-61.5 148.5q0 29 5 48-129-7-242-65t-192-155q-29 50-29 106 0 114 91 175-47-1-100-26v2q0 75 50 133.5t123 72.5q-29 8-51 8-13 0-39-4 21 63 74.5 104t121.5 42q-116 90-261 90-26 0-50-3 148 94 322 94 112 0 210-35.5t168-95 120.5-137 75-162 24.5-168.5q0-18-1-27 63-45 105-109zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'twitter': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1620 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z'
	  },
	  'umbrella': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M896 828v580q0 104-76 180t-180 76-180-76-76-180q0-26 19-45t45-19 45 19 19 45q0 50 39 89t89 39 89-39 39-89v-580q33-11 64-11t64 11zM1664 855q0 13-9.5 22.5t-22.5 9.5q-11 0-23-10-49-46-93-69t-102-23q-68 0-128 37t-103 97q-7 10-17.5 28t-14.5 24q-11 17-28 17-18 0-29-17-4-6-14.5-24t-17.5-28q-43-60-102.5-97t-127.5-37-127.5 37-102.5 97q-7 10-17.5 28t-14.5 24q-11 17-29 17-17 0-28-17-4-6-14.5-24t-17.5-28q-43-60-103-97t-128-37q-58 0-102 23t-93 69q-12 10-23 10-13 0-22.5-9.5t-9.5-22.5q0-5 1-7 45-183 172.5-319.5t298-204.5 360.5-68q140 0 274.5 40t246.5 113.5 194.5 187 115.5 251.5q1 2 1 7zM896 128v98q-42-2-64-2t-64 2v-98q0-26 19-45t45-19 45 19 19 45z'
	  },
	  'underline': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M48 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 0.5 32.5t0.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zM1536 1632v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z'
	  },
	  'undo': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z'
	  },
	  'university': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zM256 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zM1851 1600q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z'
	  },
	  'unlink': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M439 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zM608 1312v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zM384 1088q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zM1648 1216q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zM1031 492l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zM1664 576q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zM1120 32v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zM1527 183l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z'
	  },
	  'unlock-alt': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M1056 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'
	  },
	  'unlock': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1664 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z'
	  },
	  'unsorted': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M1024 1088q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45zM1024 704q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z'
	  },
	  'upload': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1280 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1536 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1664 1248v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zM1339 600q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z'
	  },
	  'usb': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M2288 805q16 8 16 27t-16 27l-320 192q-8 5-16 5-9 0-16-4-16-10-16-28v-128h-858q37 58 83 165 16 37 24.5 55t24 49 27 47 27 34 31.5 26 33 8h96v-96q0-14 9-23t23-9h320q14 0 23 9t9 23v320q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-96h-96q-32 0-61-10t-51-23.5-45-40.5-37-46-33.5-57-28.5-57.5-28-60.5q-23-53-37-81.5t-36-65-44.5-53.5-46.5-17h-360q-22 84-91 138t-157 54q-106 0-181-75t-75-181 75-181 181-75q88 0 157 54t91 138h104q24 0 46.5-17t44.5-53.5 36-65 37-81.5q19-41 28-60.5t28.5-57.5 33.5-57 37-46 45-40.5 51-23.5 61-10h107q21-57 70-92.5t111-35.5q80 0 136 56t56 136-56 136-136 56q-62 0-111-35.5t-70-92.5h-107q-17 0-33 8t-31.5 26-27 34-27 47-24 49-24.5 55q-46 107-83 165h1114v-128q0-18 16-28t32 1z'
	  },
	  'usd': {
	    'width': 1024,
	    'height': 1792,
	    'd': 'M978 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z'
	  },
	  'user-md': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M384 1344q0 26-19 45t-45 19-45-19-19-45 19-45 45-19 45 19 19 45zM1408 1405q0 121-73 190t-194 69h-874q-121 0-194-69t-73-190q0-68 5.5-131t24-138 47.5-132.5 81-103 120-60.5q-22 52-22 120v203q-58 20-93 70t-35 111q0 80 56 136t136 56 136-56 56-136q0-61-35.5-111t-92.5-70v-203q0-62 25-93 132 104 295 104t295-104q25 31 25 93v64q-106 0-181 75t-75 181v89q-32 29-32 71 0 40 28 68t68 28 68-28 28-68q0-42-32-71v-89q0-52 38-90t90-38 90 38 38 90v89q-32 29-32 71 0 40 28 68t68 28 68-28 28-68q0-42-32-71v-89q0-68-34.5-127.5t-93.5-93.5q0-10 0.5-42.5t0-48-2.5-41.5-7-47-13-40q68 15 120 60.5t81 103 47.5 132.5 24 138 5.5 131zM1088 512q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z'
	  },
	  'user-plus': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M704 896q-159 0-271.5-112.5t-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5-112.5 271.5-271.5 112.5zM1664 1024h352q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-352v352q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-352h-352q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h352v-352q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v352zM928 1248q0 52 38 90t90 38h256v238q-68 50-171 50h-874q-121 0-194-69t-73-190q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q19 0 39 17 79 61 154.5 91.5t164.5 30.5 164.5-30.5 154.5-91.5q20-17 39-17 132 0 217 96h-223q-52 0-90 38t-38 90v192z'
	  },
	  'user-secret': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M576 1536l96-448-96-128-128-64zM832 1536l128-640-128 64-96 128zM992 526q-2-4-4-6-10-8-96-8-70 0-167 19-7 2-21 2t-21-2q-97-19-167-19-86 0-96 8-2 2-4 6 2 18 4 27 2 3 7.5 6.5t7.5 10.5q2 4 7.5 20.5t7 20.5 7.5 17 8.5 17 9 14 12 13.5 14 9.5 17.5 8 20.5 4 24.5 2q36 0 59-12.5t32.5-30 14.5-34.5 11.5-29.5 17.5-12.5h12q11 0 17.5 12.5t11.5 29.5 14.5 34.5 32.5 30 59 12.5q13 0 24.5-2t20.5-4 17.5-8 14-9.5 12-13.5 9-14 8.5-17 7.5-17 7-20.5 7.5-20.5q2-7 7.5-10.5t7.5-6.5q2-9 4-27zM1408 1405q0 121-73 190t-194 69h-874q-121 0-194-69t-73-190q0-61 4.5-118t19-125.5 37.5-123.5 63.5-103.5 93.5-74.5l-90-220h214q-22-64-22-128 0-12 2-32-194-40-194-96 0-57 210-99 17-62 51.5-134t70.5-114q32-37 76-37 30 0 84 31t84 31 84-31 84-31q44 0 76 37 36 42 70.5 114t51.5 134q210 42 210 99 0 56-194 96 7 81-20 160h214l-82 225q63 33 107.5 96.5t65.5 143.5 29 151.5 8 148.5z'
	  },
	  'user-times': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M704 896q-159 0-271.5-112.5t-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5-112.5 271.5-271.5 112.5zM1781 1216l249 249q9 9 9 23 0 13-9 22l-136 136q-9 9-22 9-14 0-23-9l-249-249-249 249q-9 9-23 9-13 0-22-9l-136-136q-9-9-9-22 0-14 9-23l249-249-249-249q-9-9-9-23 0-13 9-22l136-136q9-9 22-9 14 0 23 9l249 249 249-249q9-9 23-9 13 0 22 9l136 136q9 9 9 22 0 14-9 23zM1283 1216l-181 181q-37 37-37 91 0 53 37 90l83 83q-21 3-44 3h-874q-121 0-194-69t-73-190q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q19 0 39 17 154 122 319 122t319-122q20-17 39-17 28 0 57 6-28 27-41 50t-13 56q0 54 37 91z'
	  },
	  'user': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M1408 1405q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q9 0 42 21.5t74.5 48 108 48 133.5 21.5 133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM1088 512q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z'
	  },
	  'users': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M593 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zM1664 1533q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zM1344 640q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zM1920 865q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zM1792 256q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z'
	  },
	  'venus-double': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1790 529q12 155-52.5 292t-186 224-271.5 103v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-512v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224-52.5-292q17-206 164.5-356.5t352.5-169.5q206-21 377 94 171-115 377-94 205 19 352.5 169.5t164.5 356.5zM896 889q128-131 128-313t-128-313q-128 131-128 313t128 313zM576 1024q115 0 218-57-154-165-154-391 0-224 154-391-103-57-218-57-185 0-316.5 131.5t-131.5 316.5 131.5 316.5 316.5 131.5zM1152 1408v-260q-137-15-256-94-119 79-256 94v260h512zM1216 1024q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5q-115 0-218 57 154 167 154 391 0 226-154 391 103 57 218 57z'
	  },
	  'venus-mars': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1664 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-134l-254 255q76 95 107.5 214t9.5 247q-32 180-164.5 310t-313.5 157q-223 34-409-90-117 78-256 93v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-155-17-279.5-109.5t-187-237.5-39.5-307q25-187 159.5-322.5t320.5-164.5q224-34 410 90 146-97 320-97 201 0 359 126l255-254h-134q-14 0-23-9t-9-23v-64zM896 1145q128-131 128-313t-128-313q-128 131-128 313t128 313zM128 832q0 185 131.5 316.5t316.5 131.5q117 0 218-57-154-167-154-391t154-391q-101-57-218-57-185 0-316.5 131.5t-131.5 316.5zM1216 1280q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5q-117 0-218 57 154 167 154 391t-154 391q101 57 218 57z'
	  },
	  'venus': {
	    'width': 1280,
	    'height': 1792,
	    'd': 'M1152 576q0 221-147.5 384.5t-364.5 187.5v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224-52.5-292q11-134 80.5-249t182-188 245.5-88q170-19 319 54t236 212 87 306zM128 576q0 185 131.5 316.5t316.5 131.5 316.5-131.5 131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5z'
	  },
	  'viacoin': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1536 0l-192 448h192v192h-274l-55 128h329v192h-411l-357 832-357-832h-411v-192h329l-55-128h-274v-192h192l-192-448h256l323 768h378l323-768h256zM768 1216l108-256h-216z'
	  },
	  'video-camera': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z'
	  },
	  'vimeo-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1292 638q10-216-161-222-231-8-312 261 44-19 82-19 85 0 74 96-4 57-74 167t-105 110q-43 0-82-169-13-54-45-255-30-189-160-177-59 7-164 100l-81 72-81 72 52 67q76-52 87-52 57 0 107 179 15 55 45 164.5t45 164.5q68 179 164 179 157 0 383-294 220-283 226-444zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'vimeo': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1709 518q-10 236-332 651-333 431-562 431-142 0-240-263-44-160-132-482-72-262-157-262-18 0-127 76l-77-98q24-21 108-96.5t130-115.5q156-138 241-146 95-9 153 55.5t81 203.5q44 287 66 373 55 249 120 249 51 0 154-161 101-161 109-246 13-139-109-139-57 0-121 26 120-393 459-382 251 8 236 326z'
	  },
	  'vine': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M1497 827v198q-101 23-198 23-65 136-165.5 271t-181.5 215.5-128 106.5q-80 45-162-3-28-17-60.5-43.5t-85-83.5-102.5-128.5-107.5-184-105.5-244-91.5-314.5-70.5-390h283q26 218 70 398.5t104.5 317 121.5 235.5 140 195q169-169 287-406-142-72-223-220t-81-333q0-192 104-314.5t284-122.5q178 0 273 105.5t95 297.5q0 159-58 286-7 1-19.5 3t-46 2-63-6-62-25.5-50.5-51.5q31-103 31-184 0-87-29-132t-79-45q-53 0-85 49.5t-32 140.5q0 186 105 293.5t267 107.5q62 0 121-14z'
	  },
	  'vk': {
	    'width': 1920,
	    'height': 1792,
	    'd': 'M1917 520q23 64-150 294-24 32-65 85-78 100-90 131-17 41 14 81 17 21 81 82h1l1 1 1 1 2 2q141 131 191 221 3 5 6.5 12.5t7 26.5-0.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66-70.5-57.5l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211-130.5-272q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5 41.5 38.5 34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 17-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-0.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5t13-3 20-0.5l288-2q39-5 64 2.5t31 16.5z'
	  },
	  'volume-down': {
	    'width': 1152,
	    'height': 1792,
	    'd': 'M768 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zM1152 896q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z'
	  },
	  'volume-off': {
	    'width': 768,
	    'height': 1792,
	    'd': 'M768 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z'
	  },
	  'volume-up': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M768 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zM1152 896q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zM1408 896q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zM1664 896q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z'
	  },
	  'warning': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zM1022 1001l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zM1008 67l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z'
	  },
	  'wechat': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zM1323 968q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zM1087 461q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zM1722 968q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zM1456 571q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zM2048 1132q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z'
	  },
	  'weibo': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M675 1284q21-34 11-69t-45-50q-34-14-73-1t-60 46q-22 34-13 68.5t43 50.5 74.5 2.5 62.5-47.5zM769 1163q8-13 3.5-26.5t-17.5-18.5q-14-5-28.5 0.5t-21.5 18.5q-17 31 13 45 14 5 29-0.5t22-18.5zM943 1270q-45 102-158 150t-224 12q-107-34-147.5-126.5t6.5-187.5q47-93 151.5-139t210.5-19q111 29 158.5 119.5t2.5 190.5zM1255 1110q-9-96-89-170t-208.5-109-274.5-21q-223 23-369.5 141.5t-132.5 264.5q9 96 89 170t208.5 109 274.5 21q223-23 369.5-141.5t132.5-264.5zM1563 1114q0 68-37 139.5t-109 137-168.5 117.5-226 83-270.5 31-275-33.5-240.5-93-171.5-151-65-199.5q0-115 69.5-245t197.5-258q169-169 341.5-236t246.5 7q65 64 20 209-4 14-1 20t10 7 14.5-0.5 13.5-3.5l6-2q139-59 246-59t153 61q45 63 0 178-2 13-4.5 20t4.5 12.5 12 7.5 17 6q57 18 103 47t80 81.5 34 116.5zM1489 490q42 47 54.5 108.5t-6.5 117.5q-8 23-29.5 34t-44.5 4q-23-8-34-29.5t-4-44.5q20-63-24-111t-107-35q-24 5-45-8t-25-37q-5-24 8-44.5t37-25.5q60-13 119 5.5t101 65.5zM1670 327q87 96 112.5 222.5t-13.5 241.5q-9 27-34 40t-52 4-40-34-5-52q28-82 10-172t-80-158q-62-69-148-95.5t-173-8.5q-28 6-52-9.5t-30-43.5 9.5-51.5 43.5-29.5q123-26 244 11.5t208 134.5z'
	  },
	  'weixin': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zM1323 968q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zM1087 461q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zM1722 968q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zM1456 571q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zM2048 1132q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z'
	  },
	  'whatsapp': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M985 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zM782 1504q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zM782 122q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z'
	  },
	  'wheelchair': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M1023 1187l102 204q-58 179-210 290t-339 111q-156 0-288.5-77.5t-210-210-77.5-288.5q0-181 104.5-330t274.5-211l17 131q-122 54-195 165.5t-73 244.5q0 185 131.5 316.5t316.5 131.5q126 0 232.5-65t165-175.5 49.5-236.5zM1571 1287l58 114-256 128q-13 7-29 7-40 0-57-35l-239-477h-472q-24 0-42.5-16.5t-21.5-40.5l-96-779q-2-16 6-42 14-51 57-82.5t97-31.5q66 0 113 47t47 113q0 69-52 117.5t-120 41.5l37 289h423v128h-407l16 128h455q40 0 57 35l228 455z'
	  },
	  'wifi': {
	    'width': 2048,
	    'height': 1792,
	    'd': 'M1024 1523q-20 0-93-73.5t-73-93.5q0-32 62.5-54t103.5-22 103.5 22 62.5 54q0 20-73 93.5t-93 73.5zM1294 1252q-2 0-40-25t-101.5-50-128.5-25-128.5 25-101 50-40.5 25q-18 0-93.5-75t-75.5-93q0-13 10-23 78-77 196-121t233-44 233 44 196 121q10 10 10 23 0 18-75.5 93t-93.5 75zM1567 980q-11 0-23-8-136-105-252-154.5t-268-49.5q-85 0-170.5 22t-149 53-113.5 62-79 53-31 22q-17 0-92-75t-75-93q0-12 10-22 132-132 320-205t380-73 380 73 320 205q10 10 10 22 0 18-75 93t-92 75zM1838 709q-11 0-22-9-179-157-371.5-236.5t-420.5-79.5-420.5 79.5-371.5 236.5q-11 9-22 9-17 0-92.5-75t-75.5-93q0-13 10-23 187-186 445-288t527-102 527 102 445 288q10 10 10 23 0 18-75.5 93t-92.5 75z'
	  },
	  'wikipedia-w': {
	    'width': 2304,
	    'height': 1792,
	    'd': 'M1494 1639l-295-695q-25 49-158.5 305.5t-198.5 389.5q-1 1-27.5 0.5t-26.5-1.5q-82-193-255.5-587t-259.5-596q-21-50-66.5-107.5t-103.5-100.5-102-43q0-5-0.5-24t-0.5-27h583v50q-39 2-79.5 16t-66.5 43-10 64q26 59 216.5 499t235.5 540q31-61 140-266.5t131-247.5q-19-39-126-281t-136-295q-38-69-201-71v-50l513 1v47q-60 2-93.5 25t-12.5 69q33 70 87 189.5t86 187.5q110-214 173-363 24-55-10-79.5t-129-26.5q1-7 1-25v-24q64 0 170.5-0.5t180-1 92.5-0.5v49q-62 2-119 33t-90 81l-213 442q13 33 127.5 290t121.5 274l441-1017q-14-38-49.5-62.5t-65-31.5-55.5-8v-50l460 4 1 2-1 44q-139 4-201 145-526 1216-559 1291h-49z'
	  },
	  'windows': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M682 1006v651l-682-94v-557h682zM682 263v659h-682v-565zM1664 1006v786l-907-125v-661h907zM1664 128v794h-907v-669z'
	  },
	  'won': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M514 1195l81-299h-159l75 300q1 1 1 3t1 3q0-1 0.5-3.5t0.5-3.5zM630 768l35-128h-292l32 128h225zM822 768h139l-35-128h-70zM1271 1196l78-300h-162l81 299q0 1 0.5 3.5t1.5 3.5q0-1 0.5-3t0.5-3zM1382 768l33-128h-297l34 128h230zM1792 800v64q0 14-9 23t-23 9h-213l-164 616q-7 24-31 24h-159q-24 0-31-24l-166-616h-209l-167 616q-7 24-31 24h-159q-11 0-19.5-7t-10.5-17l-160-616h-208q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h175l-33-128h-142q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h109l-89-344q-5-15 5-28 10-12 26-12h137q26 0 31 24l90 360h359l97-360q7-24 31-24h126q24 0 31 24l98 360h365l93-360q5-24 31-24h137q16 0 26 12 10 13 5 28l-91 344h111q14 0 23 9t9 23v64q0 14-9 23t-23 9h-145l-34 128h179q14 0 23 9t9 23z'
	  },
	  'wordpress': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M127 896q0-163 67-313l367 1005q-196-95-315-281t-119-411zM1415 857q0 19-2.5 38.5t-10 49.5-11.5 44-17.5 59-17.5 58l-76 256-278-826q46-3 88-8 19-2 26-18.5t-2.5-31-28.5-13.5l-205 10q-75-1-202-10-12-1-20.5 5t-11.5 15-1.5 18.5 9 16.5 19.5 8l80 8 120 328-168 504-280-832q46-3 88-8 19-2 26-18.5t-2.5-31-28.5-13.5l-205 10q-7 0-23-0.5t-26-0.5q105-160 274.5-253.5t367.5-93.5q147 0 280.5 53t238.5 149h-10q-55 0-92 40.5t-37 95.5q0 12 2 24t4 21.5 8 23 9 21 12 22.5 12.5 21 14.5 24 14 23q63 107 63 212zM909 963l237 647q1 6 5 11-126 44-255 44-112 0-217-32zM1570 527q95 174 95 369 0 209-104 385.5t-279 278.5l235-678q59-169 59-276 0-42-6-79zM896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zM896 1751q173 0 331.5-68t273-182.5 182.5-273 68-331.5-68-331.5-182.5-273-273-182.5-331.5-68-331.5 68-273 182.5-182.5 273-68 331.5 68 331.5 182.5 273 273 182.5 331.5 68z'
	  },
	  'wrench': {
	    'width': 1664,
	    'height': 1792,
	    'd': 'M384 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zM1028 1052l-682 682q-37 37-90 37-52 0-91-37l-106-108q-38-36-38-90 0-53 38-91l681-681q39 98 114.5 173.5t173.5 114.5zM1662 617q0 39-23 106-47 134-164.5 217.5t-258.5 83.5q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q58 0 121.5 16.5t107.5 46.5q16 11 16 28t-16 28l-293 169v224l193 107q5-3 79-48.5t135.5-81 70.5-35.5q15 0 23.5 10t8.5 25z'
	  },
	  'xing-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M685 765q0-1-126-222-21-34-52-34h-184q-18 0-26 11-7 12 1 29l125 216v1l-196 346q-9 14 0 28 8 13 24 13h185q31 0 50-36zM1309 268q-7-12-24-12h-187q-30 0-49 35l-411 729q1 2 262 481 20 35 52 35h184q18 0 25-12 8-13-1-28l-260-476v-1l409-723q8-16 0-28zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'xing': {
	    'width': 1408,
	    'height': 1792,
	    'd': 'M597 667q-10 18-257 456-27 46-65 46h-239q-21 0-31-17t0-36l253-448q1 0 0-1l-161-279q-12-22-1-37 9-15 32-15h239q40 0 66 45zM1403 25q11 16 0 37l-528 934v1l336 615q11 20 1 37-10 15-32 15h-239q-42 0-66-45l-339-622q18-32 531-942 25-45 64-45h241q22 0 31 15z'
	  },
	  'y-combinator-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'y-combinator': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 128v1536h-1536v-1536h1536z'
	  },
	  'yahoo': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M859 957l13 707q-62-11-105-11-41 0-105 11l13-707q-40-69-168.5-295.5t-216.5-374.5-181-287q58 15 108 15 43 0 111-15 63 111 133.5 229.5t167 276.5 138.5 227q37-61 109.5-177.5t117.5-190 105-176 107-189.5q54 14 107 14 56 0 114-14v0q-28 39-60 88.5t-49.5 78.5-56.5 96-49 84q-146 248-353 610z'
	  },
	  'yc-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'yc': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M809 1004l266-499h-112l-157 312q-24 48-44 92l-42-92-155-312h-120l263 493v324h101v-318zM1536 128v1536h-1536v-1536h1536z'
	  },
	  'yelp': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M773 1319v127q-1 292-6 305-12 32-51 40-54 9-181.5-38t-162.5-89q-13-15-17-36-1-12 4-26 4-10 34-47t181-216q1 0 60-70 15-19 39.5-24.5t49.5 3.5q24 10 37.5 29t12.5 42zM624 1068q-3 55-52 70l-120 39q-275 88-292 88-35-2-54-36-12-25-17-75-8-76 1-166.5t30-124.5 56-32q13 0 202 77 70 29 115 47l84 34q23 9 35.5 30.5t11.5 48.5zM1450 1365q-7 54-91.5 161t-135.5 127q-37 14-63-7-14-10-184-287l-47-77q-14-21-11.5-46t19.5-46q35-43 83-26 1 1 119 40 203 66 242 79.5t47 20.5q28 22 22 61zM778 733q5 102-54 122-58 17-114-71l-378-598q-8-35 19-62 41-43 207.5-89.5t224.5-31.5q40 10 49 45 3 18 22 305.5t24 379.5zM1440 841q3 39-26 59-15 10-329 86-67 15-91 23l1-2q-23 6-46-4t-37-32q-30-47 0-87 1-1 75-102 125-171 150-204t34-39q28-19 65-2 48 23 123 133.5t81 167.5v3z'
	  },
	  'yen': {
	    'width': 1027,
	    'height': 1792,
	    'd': 'M603 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z'
	  },
	  'youtube-play': {
	    'width': 1792,
	    'height': 1792,
	    'd': 'M1280 896q0-37-30-54l-512-320q-31-20-65-2-33 18-33 56v640q0 38 33 56 16 8 31 8 20 0 34-10l512-320q30-17 30-54zM1792 896q0 96-1 150t-8.5 136.5-22.5 147.5q-16 73-69 123t-124 58q-222 25-671 25t-671-25q-71-8-124.5-58t-69.5-123q-14-65-21.5-147.5t-8.5-136.5-1-150 1-150 8.5-136.5 22.5-147.5q16-73 69-123t124-58q222-25 671-25t671 25q71 8 124.5 58t69.5 123q14 65 21.5 147.5t8.5 136.5 1 150z'
	  },
	  'youtube-square': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M919 1303v-157q0-50-29-50-17 0-33 16v224q16 16 33 16 29 0 29-49zM1103 1181h66v-34q0-51-33-51t-33 51v34zM532 915v70h-80v423h-74v-423h-78v-70h232zM733 1041v367h-67v-40q-39 45-76 45-33 0-42-28-6-16-6-54v-290h66v270q0 24 1 26 1 15 15 15 20 0 42-31v-280h67zM985 1152v146q0 52-7 73-12 42-53 42-35 0-68-41v36h-67v-493h67v161q32-40 68-40 41 0 53 42 7 21 7 74zM1236 1281v9q0 29-2 43-3 22-15 40-27 40-80 40-52 0-81-38-21-27-21-86v-129q0-59 20-86 29-38 80-38t78 38q21 28 21 86v76h-133v65q0 51 34 51 24 0 30-26 0-1 0.5-7t0.5-16.5v-21.5h68zM785 457v156q0 51-32 51t-32-51v-156q0-52 32-52t32 52zM1318 1170q0-177-19-260-10-44-43-73.5t-76-34.5q-136-15-412-15-275 0-411 15-44 5-76.5 34.5t-42.5 73.5q-20 87-20 260 0 176 20 260 10 43 42.5 73t75.5 35q137 15 412 15t412-15q43-5 75.5-35t42.5-73q20-84 20-260zM563 519l90-296h-75l-51 195-53-195h-78l24 69t23 69q35 103 46 158v201h74v-201zM852 600v-130q0-58-21-87-29-38-78-38-51 0-78 38-21 29-21 87v130q0 58 21 87 27 38 78 38 49 0 78-38 21-27 21-87zM1033 720h67v-370h-67v283q-22 31-42 31-15 0-16-16-1-2-1-26v-272h-67v293q0 37 6 55 11 27 43 27 36 0 77-45v40zM1536 416v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z'
	  },
	  'youtube': {
	    'width': 1536,
	    'height': 1792,
	    'd': 'M971 1244v211q0 67-39 67-23 0-45-22v-301q22-22 45-22 39 0 39 67zM1309 1245v46h-90v-46q0-68 45-68t45 68zM343 1027h107v-94h-312v94h105v569h100v-569zM631 1596h89v-494h-89v378q-30 42-57 42-18 0-21-21-1-3-1-35v-364h-89v391q0 49 8 73 12 37 58 37 48 0 102-61v54zM1060 1448v-197q0-73-9-99-17-56-71-56-50 0-93 54v-217h-89v663h89v-48q45 55 93 55 54 0 71-55 9-27 9-100zM1398 1438v-13h-91q0 51-2 61-7 36-40 36-46 0-46-69v-87h179v-103q0-79-27-116-39-51-106-51-68 0-107 51-28 37-28 116v173q0 79 29 116 39 51 108 51 72 0 108-53 18-27 21-54 2-9 2-58zM790 525v-210q0-69-43-69t-43 69v210q0 70 43 70t43-70zM1509 1276q0 234-26 350-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46t-57.5-99q-26-112-26-350 0-234 26-350 14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350zM511 0h102l-121 399v271h-100v-271q-14-74-61-212-37-103-65-187h106l71 263zM881 333v175q0 81-28 118-37 51-106 51-67 0-105-51-28-38-28-118v-175q0-80 28-117 38-51 105-51 69 0 106 51 28 37 28 117zM1216 171v499h-91v-55q-53 62-103 62-46 0-59-37-8-24-8-75v-394h91v367q0 33 1 35 3 22 21 22 27 0 57-43v-381h91z'
	  }
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.installMessage = installMessage;

	var _message = __webpack_require__(320);

	var _message2 = _interopRequireDefault(_message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function insertMessageContainer() {
	  var container = document.createElement('div');
	  container.className = 'messages';
	  return document.body.appendChild(container);
	}

	function installMessage(Vue) {
	  var MessageConstructor = Vue.extend(_message2.default);
	  var message = {};
	  var container = void 0;
	  var temp = document.createElement('div');['success', 'warning', 'info', 'error', 'loading'].forEach(function (type) {
	    message[type] = function () {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      if (container == null) {
	        container = insertMessageContainer();
	      }

	      if (typeof options === 'string') {
	        options = {
	          content: options
	        };
	      }

	      options = (0, _extends3.default)({
	        type: type,
	        content: 'message content'
	      }, options);

	      var instance = new MessageConstructor({
	        el: temp,
	        propsData: options
	      });

	      instance.$appendTo(container);
	    };
	  });

	  Vue.prototype.$message = message;
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.default = installDialogs;

	var _confirm = __webpack_require__(321);

	var _confirm2 = _interopRequireDefault(_confirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function installDialogs(Vue) {
	  var ConfirmConstructor = Vue.extend(_confirm2.default);
	  var modal = {};

	  modal.confirm = function () {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    if (typeof options === 'string') {
	      options = {
	        content: options
	      };
	    }

	    options = (0, _extends3.default)({
	      title: 'bean confirm',
	      content: 'bean confirm content'
	    }, options);

	    var temp = document.createElement('div');
	    var instance = new ConfirmConstructor({
	      el: temp,
	      propsData: options
	    });

	    instance.$on('onconfirm', function () {
	      if (options.onConfirm) options.onConfirm();
	    });

	    instance.$on('oncancel', function () {
	      if (options.onCancel) options.onCancel();
	    });

	    instance.$appendTo(document.body);
	    instance.show = true;
	  };['info', 'success', 'error', 'warning'].forEach(function (type) {
	    modal[type] = function () {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      if (typeof options === 'string') {
	        options = {
	          content: options
	        };
	      }

	      options = (0, _extends3.default)({
	        type: type,
	        alert: true,
	        title: 'bean alert',
	        content: 'bean content'
	      }, options);
	      var temp = document.createElement('div');
	      var instance = new ConfirmConstructor({
	        el: temp,
	        propsData: options
	      });

	      instance.$on('onconfirm', function () {
	        if (options.onConfirm) options.onConfirm();
	      });

	      instance.$appendTo(document.body);
	      instance.show = true;
	    };
	  });

	  Vue.prototype.$modal = modal;
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.installDialogs = exports.Modal = undefined;

	var _modal = __webpack_require__(79);

	var _modal2 = _interopRequireDefault(_modal);

	var _dialogs = __webpack_require__(110);

	var _dialogs2 = _interopRequireDefault(_dialogs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Modal = _modal2.default;
	exports.installDialogs = _dialogs2.default;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.installNotification = installNotification;

	var _notification = __webpack_require__(322);

	var _notification2 = _interopRequireDefault(_notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function insertNotificationContainer() {
	  var container = document.createElement('div');
	  container.className = 'notifications';
	  return document.body.appendChild(container);
	}

	function installNotification(Vue) {
	  var NotifcationCons = Vue.extend(_notification2.default);
	  var container = void 0;
	  var temp = document.createElement('div');

	  var notification = function notification() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var type = arguments[1];

	    if (container == null) {
	      container = insertNotificationContainer();
	    }

	    if (typeof options === 'string') {
	      options = {
	        content: options
	      };
	    }

	    options = (0, _extends3.default)({
	      title: 'Notification title',
	      content: 'Notification content'
	    }, options);

	    if (type === 'confirm') {
	      options.showConfirm = true;
	    } else if (type) {
	      options.type = type;
	      options.showIcon = true;
	    }

	    var instance = new NotifcationCons({
	      el: temp,
	      propsData: options
	    });

	    if (type === 'confirm') {
	      instance.$on('onconfirm', function () {
	        if (options.onConfirm) options.onConfirm();
	      });
	    }

	    instance.$appendTo(container);
	    return instance;
	  };['success', 'warning', 'info', 'error', 'confirm'].forEach(function (type) {
	    notification[type] = function (options) {
	      return notification(options, type);
	    };
	  });

	  Vue.prototype.$notification = notification;
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Nprogress = undefined;

	var _nprogress = __webpack_require__(323);

	var _nprogress2 = _interopRequireDefault(_nprogress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Nprogress = _nprogress2.default;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Pagination = undefined;

	var _pagination = __webpack_require__(324);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Pagination = _pagination2.default;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PopoverConfirm = exports.Popover = undefined;

	var _popover = __webpack_require__(326);

	var _popover2 = _interopRequireDefault(_popover);

	var _popoverConfirm = __webpack_require__(325);

	var _popoverConfirm2 = _interopRequireDefault(_popoverConfirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Popover = _popover2.default;
	exports.PopoverConfirm = _popoverConfirm2.default;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Spinner = undefined;

	var _spinner = __webpack_require__(328);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Spinner = _spinner2.default;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Step = exports.Steps = undefined;

	var _steps = __webpack_require__(330);

	var _steps2 = _interopRequireDefault(_steps);

	var _step = __webpack_require__(329);

	var _step2 = _interopRequireDefault(_step);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Steps = _steps2.default;
	exports.Step = _step2.default;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TabItem = exports.Tab = undefined;

	var _tab = __webpack_require__(332);

	var _tab2 = _interopRequireDefault(_tab);

	var _tabItem = __webpack_require__(331);

	var _tabItem2 = _interopRequireDefault(_tabItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Tab = _tab2.default;
	exports.TabItem = _tabItem2.default;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tooltip = undefined;

	var _tooltip = __webpack_require__(333);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Tooltip = _tooltip2.default;

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = installMixins;
	function installMixins(Vue) {
	  var p = Vue.prototype;

	  p.$getSlot = function (name) {
	    return this._slotContents && this._slotContents[name];
	  };
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	var _icon2 = __webpack_require__(28);

	exports.default = {
	  name: 'Alert',
	  components: {
	    Icon: _icon.Icon
	  },
	  transitions: {
	    fade: {
	      afterLeave: function afterLeave() {
	        var _this = this;

	        if (this.dismissable || this.duration > 0) {
	          this.$nextTick(function () {
	            _this.$destroy(true);
	          });
	        }
	      }
	    }
	  },
	  props: {
	    type: {
	      type: String,
	      default: 'warning'
	    },

	    showIcon: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    size: String,

	    description: String,

	    show: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean,
	      default: true
	    },

	    dismissable: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    duration: {
	      type: Number,
	      coerce: _coerces.coerceNumber,
	      default: 0
	    }
	  },

	  computed: {
	    _iconName: function _iconName() {
	      return _icon2.iconName[this.type];
	    },
	    _type: function _type() {
	      return _icon2.typeMap[this.type] || this.type;
	    },
	    alertClasses: function alertClasses() {
	      return ['--' + this._type, this.size && '--' + this.size, {
	        'with-description': !!this.description,
	        'with-icon': this.showIcon
	      }];
	    }
	  },

	  watch: {
	    duration: function duration(val) {
	      if (val > 0 && this.show) {
	        this.setupTimer();
	      }
	    }
	  },

	  methods: {
	    setupTimer: function setupTimer() {
	      var _this2 = this;

	      this._timer = setTimeout(function () {
	        _this2.show = false;
	      }, this.duration);
	    }
	  },

	  ready: function ready() {
	    var _this3 = this;

	    this.$watch('show', function (val) {
	      if (_this3._timer) clearTimeout(_this3._timer);
	      if (val && _this3.duration > 0) _this3.setupTimer;
	    }, { immediate: true });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._timer) clearTimeout(this._timer);
	  }
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  name: 'BreadcrumbItem',
	  props: {
	    disabled: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },
	  computed: {
	    separator: function separator() {
	      return this.$parent.separator;
	    }
	  }
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	exports.default = {
	  name: 'Breadcrumbs',
	  components: {
	    Icon: _icon.Icon
	  },
	  props: {
	    useVueRouter: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    separator: {
	      type: String,
	      default: '/'
	    }
	  },
	  computed: {
	    breadcrumbs: function breadcrumbs() {
	      if (!this.useVueRouter || this.$route == null) return [];
	      var crumbs = [];
	      var matched = this.$route.matched;
	      for (var i = 0, l = matched.length; i < l; i++) {
	        var item = matched[i].handler;
	        if (item.crumbs) {
	          var crumb = void 0;
	          if (typeof item.crumbs === 'string') {
	            crumb = {
	              title: item.crumbs
	            };
	          } else {
	            crumb = {
	              title: typeof item.crumbs.title === 'function' ? item.crumbs.title() : item.crumbs.title,
	              icon: item.crumbs.icon
	            };
	          }
	          crumb.path = item.path;
	          crumbs.push(crumb);
	        }
	      }
	      return crumbs;
	    }
	  },

	  created: function created() {
	    if (this.useVueRouter && this.$route == null) {
	      throw new TypeError('this.$route is undefined');
	    }
	  }
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'ButtonGroup',
	  props: {
	    direction: {
	      type: String,
	      validator: function validator(value) {
	        return ['vertical'].indexOf(value) !== -1;
	      }
	    },

	    size: {
	      type: String,
	      validator: function validator(value) {
	        return ['tiny', 'small', 'default', 'large'].indexOf(value) !== -1;
	      }
	    }
	  },

	  computed: {
	    buttonGroupClass: function buttonGroupClass() {
	      return [this.direction && '--' + this.direction, this.size && '--' + this.size];
	    }
	  }
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	exports.default = {
	  name: 'BButton',
	  components: {
	    Icon: _icon.Icon
	  },
	  props: {
	    type: {
	      type: String,
	      validator: function validator(value) {
	        return ['solid', 'flat', 'outline', 'dashed'].indexOf(value) !== -1;
	      }
	    },

	    nativeType: {
	      type: String,
	      default: 'button'
	    },

	    theme: String,

	    color: String,

	    size: {
	      type: String,
	      validator: function validator(value) {
	        return ['tiny', 'small', 'default', 'large'].indexOf(value) !== -1;
	      }
	    },

	    circle: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    block: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    disabled: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    checked: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    loading: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  computed: {
	    buttonClass: function buttonClass() {
	      return [this.size && '--' + this.size, this.theme && '--' + this.theme, this.color && '--' + this.color, this.type && '--' + this.type, {
	        '--block': this.block,
	        '--circle': this.circle,
	        'is-checked': this.checked,
	        'is-loading': this.loading,
	        'is-disabled': this.disabled
	      }];
	    }
	  },
	  methods: {
	    handleClick: function handleClick(event) {
	      if (this.loading || this.disabled) {
	        return;
	      } else {
	        this.$emit('onclick', event);
	      }
	    }
	  }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  props: {
	    dropdownStyle: {
	      type: Object
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      toggled: false
	    };
	  },


	  computed: {
	    dropdownClasses: function dropdownClasses() {
	      return [{
	        'is-open': this.toggled
	      }];
	    }
	  },

	  methods: {
	    show: function show() {
	      this.toggled = true;
	      window.addEventListener('click', this._handleWindowClick);
	    },
	    hide: function hide() {
	      this.toggled = false;
	      window.removeEventListener('click', this._handleWindowClick);
	    },
	    _handleWindowClick: function _handleWindowClick(event) {
	      if (!this.$el.contains(event.target)) this.hide();
	    },
	    toggle: function toggle(event) {
	      if (this.disabled) {
	        return;
	      }

	      if (this.toggled) {
	        this.hide();
	      } else {
	        this.show();
	      }
	    }
	  }
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(30);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _textField = __webpack_require__(18);

	var _textField2 = _interopRequireDefault(_textField);

	var _coerces = __webpack_require__(1);

	var _dropdown = __webpack_require__(17);

	var _icon = __webpack_require__(2);

	var _menu = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Cascader',
	  mixins: [_textField2.default],
	  components: {
	    Dropdown: _dropdown.Dropdown,
	    Icon: _icon.Icon,
	    Menu: _menu.Menu,
	    MenuItem: _menu.MenuItem
	  },
	  props: {

	    options: {
	      type: Array,
	      required: true
	    },

	    dropdownStyle: Object,

	    labelKey: {
	      type: String,
	      default: 'label'
	    },

	    valueKey: {
	      type: String,
	      default: 'value'
	    },

	    childrenKey: {
	      type: String,
	      default: 'children'
	    },

	    displayFormatter: {
	      type: Function,
	      default: function _default(labels, selecteds) {
	        return labels.join('/');
	      }
	    },

	    changeOnSelect: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      selected: [],

	      path: [],

	      list: []
	    };
	  },


	  computed: {
	    label: function label() {
	      var labelKey = this.labelKey;
	      var labels = this.selected.map(function (item) {
	        return item[labelKey];
	      });
	      return this.displayFormatter(labels, this.selected);
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.selected.length === 0;
	    },
	    cascaderClasses: function cascaderClasses() {
	      return ['--' + this.size, {
	        '--disabled': this.disabled
	      }];
	    }
	  },

	  methods: {
	    select: function select(level, index, item) {
	      if (item.disabled) return;

	      var children = item[this.childrenKey];
	      var currentLevel = this.list.length;

	      this.list = this.list.slice(0, level + 1);
	      this.path = this.path.slice(0, level);
	      this.path.push(index);

	      if (this.changeOnSelect) {
	        this.selected = this.selected.slice(0, level);
	        this.selected.push(item);
	        this._onChange();
	      }

	      if (Array.isArray(children) && children.length) {
	        this.list.push(children);

	        this.$els.input.focus();
	      } else {
	        this.$refs.dropdown.hide();
	        if (!this.changeOnSelect) {
	          this.selected = this._getSelectedByPath();
	          this._onChange();
	        }
	      }
	    },
	    clear: function clear() {
	      var _this = this;

	      this.$changeInner(function () {
	        _this.selected = _this.path = _this.value = [];
	        _this.list = [_this.options];
	        _this.$refs.dropdown.hide();
	      });
	    },
	    _onChange: function _onChange() {
	      var _this2 = this;

	      this.$changeInner(function () {
	        _this2.value = _this2.selected.map(function (item) {
	          return item[_this2.valueKey];
	        });
	        _this2.$notify('onchange', null, { value: _this2.value });
	      });
	    },
	    _getSelectedByPath: function _getSelectedByPath() {
	      var _this3 = this;

	      var selected = [];
	      var current = this.options;
	      this.path.forEach(function (index) {
	        selected.push(current[index]);
	        current = current[index][_this3.childrenKey];
	      });
	      return selected;
	    },
	    _isActived: function _isActived(level, index) {
	      return this.path[level] === index;
	    },
	    _refresh: function _refresh() {
	      var value = this.value;
	      if (value == null || !value.length) return this.clear();

	      var path = [];
	      var selected = [];
	      var list = [this.options];
	      var current = this.options;

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var val = _step.value;

	          var got = false;
	          for (var i = 0, l = current.length; i < l; i++) {
	            var item = current[i];
	            if (item[this.valueKey] === val) {
	              path.push(i);
	              selected.push(item);
	              current = item[this.childrenKey];
	              got = true;
	              break;
	            }
	          }

	          if (current && got) {
	            list.push(current);
	          } else {
	            break;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      this.selected = selected;
	      this.path = path;
	      this.list = list;
	    }
	  },

	  watch: {
	    value: function value() {
	      if (!this.$isChangingInner()) {
	        this._refresh();
	      }
	    }
	  },

	  ready: function ready() {
	    this._refresh();
	  }
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _checkbox = __webpack_require__(75);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _button = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'CheckboxGroup',
	  mixins: [_control2.default],

	  components: {
	    Checkbox: _checkbox2.default,
	    ButtonGroup: _button.ButtonGroup
	  },

	  props: {
	    options: {
	      type: Array,
	      required: true
	    },

	    labelKey: {
	      type: String,
	      default: 'label'
	    },

	    valueKey: {
	      type: String,
	      default: 'value'
	    },

	    button: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    direction: {
	      type: String,
	      validator: function validator(value) {
	        return ['vertical', undefined].indexOf(value) !== -1;
	      }
	    },

	    buttonOptions: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },

	  computed: {
	    checkboxGroupClass: function checkboxGroupClass() {
	      return [this.direction && '--' + this.direction];
	    }
	  },

	  watch: {
	    value: function value(_value) {
	      this.$notify('onChange', null, { value: _value });
	    }
	  }
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkable = __webpack_require__(54);

	var _checkable2 = _interopRequireDefault(_checkable);

	var _icon = __webpack_require__(2);

	var _button = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'CheckBox',
	  mixins: [_checkable2.default],
	  components: {
	    Icon: _icon.Icon,
	    'vButton': _button.Button
	  },
	  computed: {
	    checkboxClass: function checkboxClass() {
	      return [{
	        '--checked': this.checked,
	        '--disabled': this.disabled
	      }];
	    },


	    computed: {
	      _isCheckboxGroup: function _isCheckboxGroup() {
	        return Array.isArray(this.value);
	      }
	    }
	  },

	  methods: {
	    check: function check() {
	      if (Array.isArray(this.value) && this.value.indexOf(this.checkedValue) !== -1) {
	        this.value.push(this.checkedValue);
	      } else {
	        this.value = this.checkedValue;
	      }
	    },
	    _handleChange: function _handleChange() {
	      if (!this.disabled) {
	        this.checked = this.$els.input.checked;
	        this.$notify('onChange', null, { checked: this.checked, value: this.value });
	      }
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    if (this.checked) {
	      this.check();
	    } else {
	      this.checked = this.$els.input.checked;
	    }

	    this.$watch('value', function () {
	      _this.checked = _this.$els.input.checked;
	    });
	  }
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _textField = __webpack_require__(18);

	var _textField2 = _interopRequireDefault(_textField);

	var _pane = __webpack_require__(76);

	var _pane2 = _interopRequireDefault(_pane);

	var _dropdown = __webpack_require__(17);

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Datepicker',
	  mixins: [_textField2.default],
	  components: {
	    DatepickerPane: _pane2.default,
	    Dropdown: _dropdown.Dropdown,
	    Icon: _icon.Icon
	  },
	  props: {
	    format: String,
	    isSecond: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    dayNames: Array,
	    monthNames: Array,
	    todayText: String,
	    nowText: String,
	    dateFilter: Function,
	    allowTimepicker: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    showAdjacentMonth: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  computed: {
	    selectClasses: function selectClasses() {
	      return [this.size && '--' + this.size, {
	        'is-focus': this.isFocus,
	        'is-disabled': this.disabled
	      }];
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.value == null || this.value === '';
	    },
	    show: function show() {
	      return this.$refs.dropdown.toggled;
	    }
	  },

	  methods: {
	    _onChange: function _onChange() {
	      this.$notify('onchange', null, {
	        value: this.value
	      });
	      this.close();
	    },
	    clear: function clear() {
	      this.$refs.pane.clear();
	    },
	    close: function close() {
	      var dropdown = this.$refs.dropdown;
	      if (dropdown) {
	        dropdown.hide();
	      }
	      this.$els.input.focus();
	    }
	  }
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _parseInt = __webpack_require__(57);

	var _parseInt2 = _interopRequireDefault(_parseInt);

	var _isNan = __webpack_require__(23);

	var _isNan2 = _interopRequireDefault(_isNan);

	var _freeze = __webpack_require__(178);

	var _freeze2 = _interopRequireDefault(_freeze);

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _pane = __webpack_require__(311);

	var _pane2 = _interopRequireDefault(_pane);

	var _button = __webpack_require__(6);

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TEST_FORMAT = 'YYYY-MM-DD';

	var monthCache = {};

	window.monthCache = monthCache;

	exports.default = {
	  name: 'DatepickerPane',
	  mixins: [_control2.default],
	  components: {
	    TimepickerPane: _pane2.default,
	    Button: _button.Button,
	    Icon: _icon.Icon
	  },
	  props: {
	    format: {
	      type: String,
	      default: 'YYYY-MM-DD'
	    },

	    isSecond: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    dayNames: {
	      type: Array,
	      default: function _default() {
	        return ['日', '一', '二', '三', '四', '五', '六'];
	      }
	    },

	    monthNames: {
	      type: Array,
	      default: function _default() {
	        return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
	      }
	    },

	    todayText: {
	      type: String,
	      default: '今天'
	    },

	    nowText: {
	      type: String,
	      default: '现在'
	    },

	    dateFilter: {
	      type: Function,
	      default: function _default() {
	        return true;
	      }
	    },

	    allowTimepicker: {
	      coerce: function coerce(value) {
	        return !!value;
	      }
	    },

	    showAdjacentMonth: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    },

	    showShortcut: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    },

	    disabledHours: Function,
	    disabledMinutes: Function,
	    disabledSeconds: Function,
	    showDisabledItem: {},
	    showSeconds: {},

	    inRange: {
	      type: Function,
	      default: function _default() {
	        return false;
	      }
	    },

	    isActive: {
	      type: Function
	    },

	    canChangeMonth: {
	      type: Function
	    }
	  },

	  data: function data() {
	    return {
	      date: new Date(),

	      dateList: [],

	      time: {
	        hour: 0,
	        minute: 0
	      },

	      timepickerShow: false
	    };
	  },


	  computed: {
	    datepickerClasses: function datepickerClasses() {
	      return [{
	        '--hide-adjacent': !this.showAdjacentMonth
	      }];
	    },
	    _nowText: function _nowText() {
	      return this.allowTimepicker ? this.nowText : this.todayText;
	    },
	    yearText: function yearText() {
	      return this.date.getFullYear();
	    },
	    monthText: function monthText() {
	      var month = this.date.getMonth();
	      return this.monthNames[month] || month + 1;
	    },
	    hourText: function hourText() {
	      return ('0' + (this.time.hour || this.date.getHours())).slice(-2);
	    },
	    minuteText: function minuteText() {
	      return ('0' + (this.time.minute || this.date.getMinutes())).slice(-2);
	    },
	    _today: function _today() {
	      return this.stringify(new Date(), TEST_FORMAT);
	    },
	    _currentActive: function _currentActive() {
	      var tempDate = this._parse(this.value);
	      return tempDate && this.stringify(tempDate, TEST_FORMAT);
	    },
	    canPickNow: function canPickNow() {
	      return this.dateFilter(new Date());
	    },
	    _canChangeLastMonth: function _canChangeLastMonth() {
	      if (typeof this.canChangeMonth === 'function') {
	        var date = new Date(this.date);
	        date.setMonth(date.getMonth() - 1);
	        return this.canChangeMonth(date);
	      } else {
	        return true;
	      }
	    },
	    _canChangeNextMonth: function _canChangeNextMonth() {
	      if (typeof this.canChangeMonth === 'function') {
	        var date = new Date(this.date);
	        date.setMonth(date.getMonth() + 1);
	        return this.canChangeMonth(date);
	      } else {
	        return true;
	      }
	    }
	  },

	  methods: {
	    _getDateList: function _getDateList(row) {
	      var offset = row * 7;
	      return this.dateList.slice(offset, offset + 7);
	    },
	    getDate: function getDate() {
	      return this.date;
	    },
	    setDate: function setDate(date) {
	      this.date = date;
	    },
	    clear: function clear() {
	      var _this = this;

	      this.$changeInner(function () {
	        _this.value = '';
	        _this.date = new Date();
	        _this._onChange();
	      });
	    },
	    _toggleTimepicker: function _toggleTimepicker() {
	      this.timepickerShow = !this.timepickerShow;
	    },
	    _onChange: function _onChange() {
	      this.timepickerShow = false;
	      this.$notify('onchange', null, {
	        value: this.value,
	        date: new Date(this.date)
	      });
	    },
	    _changeYear: function _changeYear(value) {
	      this.date.setFullYear(this.date.getFullYear() + value, this.date.getMonth(), 1);
	      this.date = new Date(this.date);
	    },
	    _changeMonth: function _changeMonth(direction) {
	      var month = void 0;
	      if (direction === 'up' && this._canChangeLastMonth) {
	        month = this.date.getMonth() - 1;
	      } else if (direction === 'down' && this._canChangeNextMonth) {
	        month = this.date.getMonth() + 1;
	      } else {
	        return;
	      }

	      this.date.setMonth(month, 1);
	      this.date = new Date(this.date);
	    },
	    _handleTimeChange: function _handleTimeChange() {
	      var timepickerDate = this.$refs.timepicker.date;
	      var date = this.date;
	      var hour = timepickerDate.getHours();
	      var minute = timepickerDate.getMinutes();

	      date.setHours(hour);
	      date.setMinutes(minute);
	      this.time.hour = hour;
	      this.time.minute = minute;
	    },
	    _onHover: function _onHover(event, direction, item) {
	      this.$notify('onhover', event, {
	        direction: direction,
	        date: item.time
	      });
	    },
	    _pickDate: function _pickDate(item) {
	      var _this2 = this;

	      if (this._isDisabled(item.time)) return;

	      this.$changeInner(function () {
	        var time = item.time;
	        _this2.date.setFullYear(time.getFullYear());
	        _this2.date.setMonth(time.getMonth());
	        _this2.date.setDate(time.getDate());
	        _this2.date = new Date(_this2.date);
	        _this2.value = _this2.stringify();

	        if (!_this2.allowTimepicker) {
	          _this2._onChange();
	        }
	      });
	    },
	    pickNow: function pickNow() {
	      var _this3 = this;

	      if (!this.canPickNow) return;
	      this.$changeInner(function () {
	        var now = new Date();
	        _this3.date.setFullYear(now.getFullYear(), now.getMonth(), now.getDate());
	        _this3.date.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
	        _this3.date = new Date(_this3.date);
	        _this3.value = _this3.stringify();
	        _this3._onChange();
	      });
	    },
	    _done: function _done() {
	      var _this4 = this;

	      this.$changeInner(function () {
	        _this4.date = new Date(_this4.date);
	        _this4.value = _this4.stringify();
	        _this4._onChange();
	      });
	    },
	    stringify: function stringify() {
	      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.date;
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;

	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var hour = date.getHours();
	      var hour12 = hour <= 12 ? hour : hour - 12;
	      var minute = date.getMinutes();
	      var second = date.getSeconds();
	      var monthName = this.monthNames[month - 1];

	      var map = {
	        YYYY: year,
	        MMM: monthName,
	        MM: ('0' + month).slice(-2),
	        M: month,
	        DD: ('0' + day).slice(-2),
	        D: day,
	        H: hour,
	        HH: ('0' + hour).slice(-2),
	        h: hour12,
	        hh: ('0' + hour12).slice(-2),
	        m: minute,
	        mm: ('0' + minute).slice(-2),
	        s: second,
	        ss: ('0' + second).slice(-2)
	      };

	      return format.replace(/Y+|M+|D+|H+|h+|m+|s+/g, function (str) {
	        return map[str];
	      });
	    },
	    _isActive: function _isActive(date) {
	      if (typeof this.isActive === 'function') {
	        return this.isActive(date);
	      } else {
	        var currentValue = this.stringify(date, TEST_FORMAT);
	        return this._currentActive === currentValue;
	      }
	    },
	    _isToday: function _isToday(date) {
	      var currentValue = this.stringify(date, TEST_FORMAT);
	      return currentValue === this._today;
	    },
	    _isDisabled: function _isDisabled(date) {
	      return !this.dateFilter(date);
	    },
	    _isInRange: function _isInRange(date) {
	      return this.inRange(date);
	    },
	    _generateDate: function _generateDate() {
	      var cacheKey = '' + this.date.getFullYear() + this.date.getMonth();
	      if (cacheKey in monthCache) {
	        this.dateList = monthCache[cacheKey];
	        return;
	      }

	      var arr = [];

	      var time = new Date(this.date);

	      time.setMonth(time.getMonth(), 1);

	      var curFirstDay = time.getDay();

	      time.setDate(0);
	      var lastDayCount = time.getDate();

	      var tempYear = time.getFullYear();
	      var tempMonth = time.getMonth();

	      for (var i = curFirstDay; i > 0; i--) {
	        var date = lastDayCount - i + 1;
	        var _time = new Date(tempYear, tempMonth, date);
	        arr.push({
	          time: _time,
	          id: _time.getTime(),
	          value: date,
	          isPass: true
	        });
	      }

	      time.setMonth(time.getMonth() + 2, 0);

	      var curDayCount = time.getDate();
	      tempYear = time.getFullYear();
	      tempMonth = time.getMonth();

	      for (var _i = 1; _i <= curDayCount; _i++) {
	        var _time2 = new Date(tempYear, tempMonth, _i);
	        arr.push({
	          time: _time2,
	          id: _time2.getTime(),
	          value: _i
	        });
	      }

	      var count = arr.length <= 35 ? 35 : 42;
	      var j = 1;
	      var l = count - arr.length + 1;
	      time.setMonth(tempMonth + 1, 1);
	      tempYear = time.getFullYear();
	      tempMonth = time.getMonth();
	      while (j < l) {
	        var _time3 = new Date(tempYear, tempMonth, j);
	        arr.push({
	          time: _time3,
	          id: _time3.getTime(),
	          value: j,
	          isFuture: true
	        });
	        j++;
	      }

	      this.dateList = monthCache[cacheKey] = (0, _freeze2.default)(arr);
	    },
	    _parse: function _parse(value) {
	      if (value == null || value === '') return null;
	      if (!(value instanceof Date)) {
	        var time = new Date(value);
	        if ((0, _isNan2.default)(time.getTime())) {
	          var toNumber = (0, _parseInt2.default)(value);
	          if ((0, _isNan2.default)(toNumber)) {
	            return null;
	          } else {
	            return new Date(this.isSecond ? toNumber * 1000 : toNumber);
	          }
	        } else {
	          return time;
	        }
	      } else {
	        return value;
	      }
	    },
	    _update: function _update() {
	      var _this5 = this;

	      var date = this._parse(this.value);
	      if (date) {
	        this.$changeInner(function () {
	          _this5.date = date;
	          _this5.time.hour = _this5.date.getHours();
	          _this5.time.minute = _this5.date.getMinutes();
	          _this5.value = _this5.stringify();
	        });
	      } else {
	        this.date = new Date();
	      }
	    }
	  },

	  ready: function ready() {
	    this._update();
	  },


	  watch: {
	    date: function date() {
	      this._generateDate();
	    },
	    value: function value(_value, oldValue) {
	      if (_value !== oldValue && !this.$isChangingInner()) {
	        this._update();
	      }
	    }
	  }
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray2 = __webpack_require__(31);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _pane = __webpack_require__(76);

	var _pane2 = _interopRequireDefault(_pane);

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _util = __webpack_require__(26);

	var _button = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TEST_FORMAT = 'YYYY-MM-DD';

	exports.default = {
	  name: 'RangepickerPane',
	  mixins: [_control2.default],
	  components: {
	    DatepickerPane: _pane2.default,
	    Button: _button.Button
	  },

	  props: {
	    format: {},
	    isSecond: {},
	    dayNames: {},
	    monthNames: {},
	    todayText: {},
	    nowText: {},
	    allowTimepicker: {},
	    dateFilter: {},

	    disabledHours: Function,
	    disabledMinutes: Function,
	    disabledSeconds: Function,
	    showDisabledItem: {},
	    showSeconds: {}
	  },

	  data: function data() {
	    var fromMonth = new Date();
	    var toMonth = new Date();
	    toMonth.setMonth(fromMonth.getMonth() + 1);

	    return {
	      fromMonth: fromMonth,
	      toMonth: toMonth,

	      currentHandle: 'from',

	      fromDate: null,

	      toDate: null,

	      tempToDate: null
	    };
	  },


	  computed: {
	    canDone: function canDone() {
	      return this.fromDate != null && this.toDate != null;
	    }
	  },

	  methods: {
	    gotoToday: function gotoToday() {
	      var today = new Date();
	      this.$refs.from.setDate(today);
	      this.$refs.to.setDate(this._getNextMonth(today));
	    },
	    clear: function clear() {
	      var _this = this;

	      this.$changeInner(function () {
	        _this.value = [];
	        _this.fromDate = _this.toDate = null;
	        _this.currentHandle = 'from';

	        _this.$changeInner(function () {
	          _this.value = [];
	          _this.$notify('onchange', null, {
	            date: [],
	            value: []
	          });
	        });
	      });
	    },
	    _done: function _done() {
	      var _this2 = this;

	      if (!this.canDone) return;
	      var stringify = this.$refs.from.stringify;
	      var date = [new Date(this.fromDate), new Date(this.toDate)];
	      var value = [stringify(this.fromDate), stringify(this.toDate)];

	      this.$changeInner(function () {
	        _this2.value = value;
	        _this2.$notify('onchange', null, {
	          date: date,
	          value: value
	        });
	      });
	    },
	    _onHover: function _onHover(_ref) {
	      var date = _ref.date,
	          direction = _ref.direction;

	      if (direction === 'enter') {
	        if (this.fromDate && this.toDate == null && date > this.fromDate) {
	          this.tempToDate = date;
	        } else {
	          this.tempToDate = null;
	        }
	      }
	    },
	    _inRange: function _inRange(date) {
	      if (this.fromDate && (this.toDate || this.tempToDate)) {
	        var dateT = date.getTime();
	        var fromT = this.fromDate.getTime();
	        var toT = (this.toDate || this.tempToDate).getTime();
	        return dateT >= fromT && dateT <= toT;
	      } else {
	        return false;
	      }
	    },
	    _canChangeMonth: function _canChangeMonth(direction, date) {
	      if (this.$refs.from == null || this.$refs.to == null) {
	        return true;
	      }

	      date = this._unifyMonth(date);
	      var fromDate = this._unifyMonth(this.$refs.from.getDate() || new Date());
	      var toDate = this._unifyMonth(this.$refs.to.getDate() || this._getNextMonth(new Date()));

	      if (direction === 'from') {
	        return date < toDate;
	      } else {
	        return date > fromDate;
	      }
	    },
	    _handleChange: function _handleChange(_ref2) {
	      var value = _ref2.value,
	          date = _ref2.date;

	      date = this._unifyDate(date);

	      if (this.currentHandle === 'from') {
	        this.fromDate = date;
	        this.toDate = null;
	        this.currentHandle = 'to';
	      } else {
	        if (date <= this.fromDate) {
	          this.fromDate = date;
	          this.toDate = null;
	          this.currentHandle = 'to';
	        } else {
	          this.toDate = date;
	          this.currentHandle = 'from';
	        }
	      }
	    },
	    _isActive: function _isActive(date) {
	      var dateFormatted = this._normalize(date);
	      var fromDateFormatted = this._normalize(this.fromDate);
	      var toDateFormatted = this._normalize(this.toDate);

	      return dateFormatted === fromDateFormatted || dateFormatted === toDateFormatted;
	    },
	    _unifyDate: function _unifyDate(date) {
	      date = new Date(date);
	      if (this.allowTimepicker) {
	        return date;
	      } else {
	        date.setHours(0, 0, 0, 0);
	        return date;
	      }
	    },
	    _unifyMonth: function _unifyMonth(date) {
	      date = new Date(date);
	      date.setDate(1);
	      date.setHours(0, 0, 0, 0);
	      return date;
	    },
	    _getNextMonth: function _getNextMonth(date) {
	      date = new Date(date);
	      date.setMonth(date.getMonth() + 1);
	      return date;
	    },
	    _normalize: function _normalize(date) {
	      if (date) {
	        return (0, _util.dateFormat)(date, TEST_FORMAT);
	      }
	    },
	    _stringify: function _stringify(date) {
	      return this.$refs.from.stringify(date);
	    },
	    _parseDate: function _parseDate(value) {
	      return this.$refs.from._parse(value);
	    },
	    _parse: function _parse(value) {
	      this.fromDate = this.toDate = null;
	      if (value == null || !Array.isArray(value)) return;

	      var _value = (0, _slicedToArray3.default)(value, 2),
	          fromValue = _value[0],
	          toValue = _value[1];

	      var fromDate = this._parseDate(fromValue);
	      var toDate = this._parseDate(toValue);

	      if (fromDate && toDate) {
	        if (fromDate > toDate) {
	          var _ref3 = [toDate, fromDate];
	          fromDate = _ref3[0];
	          toDate = _ref3[1];
	        }
	        this.fromDate = fromDate;
	        this.toDate = toDate;
	      } else if (fromDate) {
	        this.fromDate = fromDate;
	      }

	      if (this.fromDate) {
	        this.fromMonth = this._unifyMonth(this.fromDate);

	        if (this.toDate) {
	          var toMonth = this._unifyMonth(this.toDate);
	          if (toMonth.getTime() === this.fromMonth.getTime()) {
	            this.toMonth = this._getNextMonth(toMonth);
	          } else {
	            this.toMonth = toMonth;
	          }
	        }
	      }
	    }
	  },

	  ready: function ready() {
	    this._parse(this.value);
	  },


	  watch: {
	    'value': function value(_value2, oldValue) {
	      if (_value2 !== oldValue && !this.$isChangingInner()) {
	        this._parse(_value2);
	      }
	    }
	  }
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _textField = __webpack_require__(18);

	var _textField2 = _interopRequireDefault(_textField);

	var _rangepickerPane = __webpack_require__(295);

	var _rangepickerPane2 = _interopRequireDefault(_rangepickerPane);

	var _dropdown = __webpack_require__(17);

	var _icon = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'DateRangepicker',
	  mixins: [_textField2.default],

	  components: {
	    RangepickerPane: _rangepickerPane2.default,
	    Dropdown: _dropdown.Dropdown,
	    Icon: _icon.Icon
	  },

	  props: {
	    format: {},
	    isSecond: {},
	    dayNames: {},
	    monthNames: {},
	    todayText: {},
	    nowText: {},
	    allowTimepicker: {},
	    dateFilter: {},
	    showAdjacentMonth: {},

	    disabledHours: Function,
	    disabledMinutes: Function,
	    disabledSeconds: Function,
	    showDisabledItem: {},
	    showSeconds: {}
	  },

	  computed: {
	    selectClasses: function selectClasses() {
	      return [this.size && '--' + this.size, {
	        'is-focus': this.isFocus,
	        'is-disabled': this.disabled
	      }];
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.value == null || Array.isArray(this.value) && this.value.length === 0;
	    },
	    label: function label() {
	      return this.showPlaceholder ? '' : this.value[0] + ' ~ ' + this.value[1];
	    },
	    show: function show() {
	      return this.$refs.dropdown.toggled;
	    }
	  },

	  methods: {
	    _onChange: function _onChange(_ref) {
	      var value = _ref.value;

	      this.value = value;
	      this.close();
	    },
	    close: function close() {
	      var dropdown = this.$refs.dropdown;
	      if (dropdown) {
	        dropdown.hide();
	      }
	      this.$els.input.focus();
	    },
	    clear: function clear() {
	      this.$refs.pane.clear();
	    }
	  }
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _view = __webpack_require__(27);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'FormGroup',
	  mixins: [_view2.default],
	  props: {
	    status: {
	      type: String,
	      validator: function validator(value) {
	        return ['info', 'success', 'warning', 'alert'].indexOf(value) !== -1;
	      }
	    },
	    label: String
	  },

	  data: function data() {
	    return {
	      relativeControl: null
	    };
	  },


	  computed: {
	    formGroupClasses: function formGroupClasses() {
	      return [{
	        'has-success': this.status === 'success',
	        'has-warning': this.status === 'warning',
	        'has-alert': this.status === 'alert',
	        'has-info': this.status === 'info'
	      }];
	    },
	    labelInserted: function labelInserted() {
	      return this.$getSlot('label') != null || this.label;
	    }
	  },

	  events: {
	    'validatable:created': function validatableCreated(vm) {
	      this.relativeControl = vm;
	      return true;
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    if (this.relativeControl) {
	      this.$watch('relativeControl.validation.status', function (val) {
	        _this.status = _this.relativeControl.validation.status;
	      });
	    }
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(58);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _toConsumableArray2 = __webpack_require__(59);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getIterator2 = __webpack_require__(30);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	var _view = __webpack_require__(27);

	var _view2 = _interopRequireDefault(_view);

	var _util = __webpack_require__(26);

	var _asyncValidator = __webpack_require__(80);

	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

	var _validators = __webpack_require__(103);

	var validators = _interopRequireWildcard(_validators);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BUILD_IN_TYPE = {
	  number: {
	    type: 'number'
	  },
	  integer: {
	    type: 'integer'
	  },
	  float: {
	    type: 'float'
	  },
	  date: {
	    type: 'date'
	  },
	  url: {
	    type: 'url'
	  },
	  email: {
	    type: 'email'
	  }
	};

	exports.default = {
	  name: 'vForm',
	  mixins: [_view2.default],
	  props: {
	    size: {
	      type: String,
	      default: 'default'
	    },

	    layout: {
	      type: String,
	      default: 'horizontal',
	      validator: function validator(value) {
	        return ['grid', 'inline', 'horizontal'].indexOf(value) !== -1;
	      }
	    },

	    action: {
	      type: String
	    },

	    validators: {
	      type: Object
	    },

	    options: {
	      type: Object,
	      default: function _default() {
	        return {
	          scrollable: true,
	          first: true
	        };
	      }
	    },

	    getStatus: {}
	  },

	  data: function data() {
	    return {
	      submitting: false,

	      fieldsDesc: {},
	      fieldsQueue: [],

	      rules: {},
	      schema: null
	    };
	  },


	  computed: {
	    validating: function validating() {
	      var _this = this;

	      return this.fieldsQueue.some(function (name) {
	        return _this.fieldsDesc[name].validating;
	      });
	    },
	    invalid: function invalid() {
	      var _this2 = this;

	      return this.fieldsQueue.some(function (name) {
	        return _this2.fieldsDesc[name].invalid;
	      });
	    },
	    errors: function errors() {
	      var _this3 = this;

	      var error = [];
	      this.fieldsQueue.forEach(function (name) {
	        var field = _this3.fieldsDesc[name];
	        if (field.invalid) {
	          error = error.concat(field.errors);
	        }
	      });

	      return error;
	    },
	    _status: function _status() {
	      var submitting = this.submitting,
	          validating = this.validating,
	          invalid = this.invalid,
	          errors = this.errors;

	      return {
	        submitting: submitting, validating: validating, invalid: invalid, errors: errors
	      };
	    },
	    formClasses: function formClasses() {
	      return ['--' + this.layout];
	    }
	  },

	  watch: {
	    _status: function _status(value) {
	      this.getStatus = value;
	    }
	  },

	  methods: {
	    _registerFormControl: function _registerFormControl(vm) {
	      var name = vm.name;

	      var isExisted = false;
	      if (name in this.fieldsDesc) {
	        (0, _util.warn)('Control \'' + name + '\' alredy existed.');
	        isExisted = true;
	      }

	      var desc = {
	        instance: vm,
	        index: isExisted ? this.fieldsQueue.indexOf(name) : this.fieldsQueue.length,
	        modified: false,
	        invalid: false,
	        errors: [],
	        validating: false,

	        _rules: null,

	        _schema: null
	      };

	      this.$set('fieldsDesc.' + name, desc);

	      if (!isExisted) {
	        this.fieldsQueue.push(name);
	      }

	      if (this._formReady && this.validators && this.validators[name]) {
	        this._registerRule(name, this.validators[name]);
	      }
	    },
	    _isBuildinType: function _isBuildinType(t) {
	      return t in BUILD_IN_TYPE;
	    },
	    _getBuildinRule: function _getBuildinRule(type) {
	      return BUILD_IN_TYPE[type];
	    },
	    _processBuildInRules: function _processBuildInRules(rules) {
	      var org = rules;
	      rules = [];
	      var testRule = function testRule(rule) {
	        rule = (0, _extends3.default)({}, rule);
	        for (var name in validators) {
	          if (name in rule) {
	            var newRule = {
	              validator: validators[name](rule[name]),
	              message: rule.message
	            };
	            rules.push(newRule);
	            delete rule[name];
	            delete rule.message;
	          }
	        }

	        if (!(0, _util.isEmpty)(rule)) {
	          rules.push(rule);
	        }
	        return rule;
	      };

	      if (Array.isArray(org)) {
	        org.forEach(function (rule) {
	          testRule(rule);
	        });
	      } else {
	        testRule(org);
	      }
	      return rules;
	    },
	    _registerRule: function _registerRule(name, validator) {
	      var _this4 = this;

	      var field = this.getField(name);
	      var trigger = validator.trigger;
	      var validateRules = validator.rules || validator.rule;

	      if (field) {
	        var type = field.instance.type;

	        if (this._isBuildinType(type)) {
	          if (validateRules == null) {
	            validateRules = [];
	          }

	          var declared = false;
	          if (Array.isArray(validateRules)) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	              for (var _iterator = (0, _getIterator3.default)(validateRules), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var rule = _step.value;

	                if ('type' in rule) {
	                  declared = true;
	                  break;
	                }
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }
	          } else {
	            declared = 'type' in validateRules;
	          }

	          if (!declared) {
	            var buildinRule = this._getBuildinRule(type);
	            validateRules = Array.isArray(validateRules) ? [].concat((0, _toConsumableArray3.default)(validateRules), [buildinRule]) : (0, _extends3.default)({}, validateRules, buildinRule);
	          }
	        }

	        if (validateRules) {
	          validateRules = this._processBuildInRules(validateRules);
	          field._schema = new _asyncValidator2.default((0, _defineProperty3.default)({}, name, validateRules));
	          field._rules = validateRules;
	          this.rules[name] = validateRules;

	          if (trigger) {
	            field.instance.$on(trigger, function () {
	              _this4.validateField(name);
	            });
	          }
	        }
	      }
	    },
	    getFields: function getFields() {
	      return this.fieldsDesc;
	    },
	    getField: function getField(name) {
	      return this.fieldsDesc[name];
	    },
	    getFieldsInstance: function getFieldsInstance() {
	      var rt = {};

	      for (var name in this.fieldsDesc) {
	        rt[name] = this.fieldsDesc[name].instance;
	      }
	      return rt;
	    },
	    getFieldInstance: function getFieldInstance(name) {
	      return this.fieldsDesc[name] ? this.fieldsDesc[name].instance : null;
	    },
	    getFieldsValue: function getFieldsValue() {
	      var rt = {};
	      for (var name in this.fieldsDesc) {
	        rt[name] = this.fieldsDesc[name].instance.getValue();
	      }
	      return rt;
	    },
	    getFieldValue: function getFieldValue(name) {
	      return this.fieldsDesc[name] ? this.fieldsDesc[name].instance.getValue() : null;
	    },
	    getFirstError: function getFirstError(name) {
	      if (name != null) {
	        return this.fieldsDesc[name] && this.fieldsDesc[name].errors[0];
	      } else {
	        for (var i = 0, l = this.fieldsQueue.length; i < l; i++) {
	          var field = this.getField(this.fieldsQueue[i]);
	          if (field.errors.length) {
	            return field.errors[0];
	          }
	        }
	      }
	    },
	    resetValidations: function resetValidations() {
	      for (var name in this.fieldsDesc) {
	        var field = this.fieldsDesc[name];
	        field.instance.setError(null, null);
	        field.errors = [];
	        field.invalid = false;
	      }
	    },
	    resetValidation: function resetValidation(name) {
	      var field = this.getField(name);
	      if (field) {
	        field.instance.setError(null, null);
	        field.invalid = false;
	        field.errors = [];
	      }
	    },
	    setFieldError: function setFieldError(name, errors) {
	      var field = this.getField(name);
	      if (field) {
	        var messages = errors.map(function (_ref2) {
	          var message = _ref2.message;
	          return message;
	        });
	        field.invalid = true;
	        field.errors = messages;
	        field.instance.setError('alert', messages);
	      }
	    },
	    validateFields: function validateFields() {
	      var _this5 = this;

	      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util.noop;

	      for (var name in this.fieldsDesc) {
	        var field = this.fieldsDesc[name];
	        field.invalid = false;
	        field.errors = [];
	        field.validating = true;
	        field.instance.setError(null, null);
	      }

	      var source = this.getFieldsValue();

	      this.schema.validate(source, function (errors, fields) {
	        var firstErrorField = null;
	        for (var _name in _this5.fieldsDesc) {
	          var _field = _this5.fieldsDesc[_name];
	          _field.validating = false;

	          if (fields && _name in fields) {
	            _this5.setFieldError(_name, fields[_name]);
	            if (firstErrorField === null || _field.index < firstErrorField.index) {
	              firstErrorField = _field;
	            }
	          }
	        }

	        if (firstErrorField) {
	          _this5.scrollIntoViewIfNeeded(firstErrorField.instance);
	        }

	        callback(errors, fields);
	      });
	    },
	    validateField: function validateField(name) {
	      var _this6 = this;

	      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.noop;

	      var field = this.getField(name);
	      if (field == null) return;

	      var instance = field.instance;
	      var source = this.getFieldsValue();


	      field.validating = true;
	      if (field.invalid) {
	        this.resetValidation(name);
	      }

	      field._schema.validate(source, function (errors, fields) {
	        field.validating = false;

	        if (errors) {
	          _this6.scrollIntoViewIfNeeded(instance);
	          _this6.setFieldError(name, errors);
	        }
	        callback(errors, fields);
	      });
	    },
	    scrollIntoViewIfNeeded: function scrollIntoViewIfNeeded(name) {
	      var marginTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

	      var instance = typeof name === 'string' ? this.getFieldInstance(name) : name;
	      if (instance && instance.$el) {
	        var el = instance.$el;
	        var offset = el.getBoundingClientRect().top;
	        var clientHeight = document.documentElement.clientHeight;
	        if (offset < 0 || offset > clientHeight) {
	          var _pageOffset = (0, _util.pageOffset)(el),
	              left = _pageOffset.left,
	              top = _pageOffset.top;

	          window.scrollTo(left, top - marginTop);
	        }
	      }
	    },
	    _submit: function _submit(event) {
	      var _this7 = this;

	      this.submitting = true;

	      if (this.validators == null) {
	        this.submitting = false;
	        this.$notify('onsubmit', event);
	      } else {
	        this.validateFields(function (errors) {
	          _this7.submitting = false;
	          if (!errors) {
	            _this7.$notify('onsubmit', event);
	          }
	        });
	      }
	    },
	    reset: function reset() {}
	  },

	  events: {
	    'validatable:created': function validatableCreated(vm) {
	      this._registerFormControl(vm);
	    }
	  },

	  ready: function ready() {
	    var _this8 = this;

	    if (this.validators) {
	      for (var name in this.validators) {
	        var validator = this.validators[name];
	        this._registerRule(name, validator);
	      }

	      this.schema = new _asyncValidator2.default(this.rules);
	      this.$watch('rules', function (val) {
	        _this8.schema = new _asyncValidator2.default(_this8.rules);
	      });
	    }

	    this.$broadcast('form:ready', this);
	    this._formReady = true;
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.fieldsDesc = null;
	  }
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _view = __webpack_require__(27);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'HelpText',
	  mixins: [_view2.default],
	  props: {
	    for: String,

	    text: String
	  },

	  data: function data() {
	    return {
	      message: null,
	      relativeControl: null
	    };
	  },


	  computed: {
	    _show: function _show() {
	      return this._message || this.$getSlot('default') != null;
	    },
	    _message: function _message() {
	      return this.message || this.text;
	    }
	  },

	  events: {
	    'form:ready': function formReady(form) {
	      var _this = this;

	      var control = form.getFieldInstance(this.for);

	      if (control) {
	        this.relativeControl = control;
	        this.$watch('relativeControl.validation.message', function (val) {
	          if (Array.isArray(val)) {
	            _this.message = val[0];
	          } else {
	            _this.message = null;
	          }
	        });
	      }
	    }
	  }
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icon = __webpack_require__(2);

	exports.default = {
	  name: 'FeebackIcons',
	  components: {
	    Icon: _icon.Icon
	  },
	  props: {
	    status: String
	  }
	};

/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'InputGroup',
	  props: {
	    color: String,
	    size: String
	  },
	  computed: {
	    inputGroupClass: function inputGroupClass() {
	      return [this.color && '--' + this.color, this.size && '--' + this.size];
	    },
	    _leftInserted: function _leftInserted() {
	      return !!this.$getSlot('left');
	    },
	    _rightInserted: function _rightInserted() {
	      return !!this.$getSlot('right');
	    }
	  }
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(39);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _isNan = __webpack_require__(23);

	var _isNan2 = _interopRequireDefault(_isNan);

	var _parseFloat = __webpack_require__(175);

	var _parseFloat2 = _interopRequireDefault(_parseFloat);

	var _textField = __webpack_require__(18);

	var _textField2 = _interopRequireDefault(_textField);

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'InputNumber',
	  mixins: [_textField2.default],
	  components: {
	    Icon: _icon.Icon
	  },
	  props: {
	    min: {
	      type: Number,
	      default: -Infinity,
	      coerce: _coerces.coerceNumber
	    },

	    max: {
	      type: Number,
	      default: Infinity,
	      coerce: _coerces.coerceNumber
	    },

	    step: {
	      type: Number,
	      default: 1,
	      coerce: _coerces.coerceNumber
	    },

	    value: {
	      type: Number,
	      coerce: _coerces.coerceNumber
	    },

	    validatable: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  computed: {
	    controlClasses: function controlClasses() {
	      return [{
	        'is-focus': this.isFocus,
	        'is-disabled': this.disabled
	      }];
	    },
	    _precision: function _precision() {
	      if (this.step === null) return 0;

	      var step = this.step.toString();
	      if (step.indexOf('.') !== -1) {
	        return step.length - step.indexOf('.') - 1;
	      } else {
	        return 0;
	      }
	    },
	    upDisabled: function upDisabled() {
	      return typeof this.value === 'number' && this.value >= this.max;
	    },
	    downDisabled: function downDisabled() {
	      return typeof this.value === 'number' && this.value <= this.min;
	    }
	  },

	  methods: {
	    _onChange: function _onChange(event) {
	      var value = event.target.value.trim();
	      this._parse(value);
	    },
	    _parse: function _parse(value) {
	      var _this = this;

	      if (!value || typeof value === 'number') {
	        return;
	      } else {
	        var _ret = function () {
	          var num = (0, _parseFloat2.default)(value);
	          if (!(0, _isNan2.default)(num)) {
	            _this.$changeInner(function () {
	              _this.value = (0, _parseFloat2.default)(num.toFixed(_this._precision));
	            });
	          } else {
	            return {
	              v: void 0
	            };
	          }
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	      }
	    },
	    _increase: function _increase(direction) {
	      var _this2 = this;

	      if (this.disabled) return;
	      var min = this.min,
	          max = this.max,
	          step = this.step,
	          val = this.value;

	      var value = Number(val);
	      if ((0, _isNan2.default)(value)) return;

	      value += direction === 'down' ? -step : step;
	      value = value > max ? max : value < min ? min : value;

	      this.$changeInner(function () {
	        _this2.value = value;
	      });
	      this.$els.input.focus;
	    }
	  },

	  watch: {
	    value: function value(_value, oldValue) {
	      if (!this.$isChangingInner()) {
	        this._parse(_value);
	      } else {
	        this.$notify('onchange', null, { value: _value, oldValue: oldValue });
	      }
	    }
	  },

	  ready: function ready() {
	    this._parse(this.value);
	  }
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNan = __webpack_require__(23);

	var _isNan2 = _interopRequireDefault(_isNan);

	var _textField = __webpack_require__(18);

	var _textField2 = _interopRequireDefault(_textField);

	var _feedbackIcons = __webpack_require__(300);

	var _feedbackIcons2 = _interopRequireDefault(_feedbackIcons);

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VInput',
	  mixins: [_textField2.default],
	  components: {
	    FeedbackIcons: _feedbackIcons2.default,
	    Icon: _icon.Icon
	  },
	  props: {
	    type: {
	      type: String,
	      default: 'text'
	    },

	    rows: {
	      type: Number,
	      default: 2,
	      coerce: _coerces.coerceNumber
	    },

	    status: {
	      type: String,
	      validator: function validator(value) {
	        return [undefined, 'success', 'warning', 'error', 'alert', 'info'].indexOf(value) !== -1;
	      }
	    },
	    number: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      hidePassword: true
	    };
	  },


	  computed: {
	    _value: {
	      get: function get() {
	        return this.value;
	      },
	      set: function set(value) {
	        if (this.number) {
	          var num = Number(value);
	          if ((0, _isNan2.default)(num)) {
	            this.value = value;
	          } else {
	            this.value = num;
	          }
	        } else {
	          this.value = value;
	        }
	      }
	    },
	    controlClasses: function controlClasses() {
	      return [this.size && '--' + this.size, this.type, {
	        'is-focus': this.isFocus,
	        'is-disabled': this.disabled
	      }];
	    },
	    _type: function _type() {
	      if (this.type === 'password') {
	        return this.hidePassword ? 'password' : 'text';
	      } else {
	        return this.type;
	      }
	    },
	    _status: function _status() {
	      return this.status || this.validation.status;
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.value == null || this.value === '';
	    }
	  },

	  methods: {
	    _onChange: function _onChange(event) {
	      this.$notify('onchange', event, {
	        value: this.value
	      });
	    },
	    _onInput: function _onInput(event) {
	      this.$notify('oninput', event, {
	        value: this.value
	      });
	    },
	    focus: function focus() {
	      var el = this.$els.input;
	      if (el) {
	        this.$nextTick(function () {
	          el.focus();
	          el.selectionStart = el.selectionEnd = el.value.length;
	        });
	      }
	    },
	    clear: function clear() {
	      this.value = '';
	      this.focus();
	      this._onChange();
	    },
	    togglePasswordHide: function togglePasswordHide() {
	      this.hidePassword = !this.hidePassword;
	      this.focus();
	    }
	  },
	  ready: function ready() {
	    if (this.number && typeof this.value !== 'number') {
	      var num = Number(this.value);
	      if (!(0, _isNan2.default)(num)) this.value = num;
	    }
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  name: 'vLabel',
	  props: {
	    size: String,
	    required: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    align: String
	  },
	  computed: {
	    labelClass: function labelClass() {
	      return [this.size && '--' + this.size];
	    },
	    labelStyle: function labelStyle() {
	      return {
	        'text-align': this.align
	      };
	    }
	  }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _radio = __webpack_require__(77);

	var _radio2 = _interopRequireDefault(_radio);

	var _button = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'RadioGroup',

	  mixins: [_control2.default],

	  components: {
	    Radio: _radio2.default,
	    ButtonGroup: _button.ButtonGroup
	  },

	  props: {
	    options: {
	      type: Array,
	      required: true
	    },

	    labelKey: {
	      type: String,
	      default: 'label'
	    },

	    valueKey: {
	      type: String,
	      default: 'value'
	    },

	    button: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    direction: {
	      type: String,
	      validator: function validator(value) {
	        return ['vertical', undefined].indexOf(value) !== -1;
	      }
	    },

	    buttonOptions: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },

	  computed: {
	    radioGroupClass: function radioGroupClass() {
	      return [this.direction && '--' + this.direction];
	    }
	  },

	  watch: {
	    value: function value(_value) {
	      this.$notify('onChange', null, { value: _value });
	    }
	  }
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkable = __webpack_require__(54);

	var _checkable2 = _interopRequireDefault(_checkable);

	var _button = __webpack_require__(6);

	var _icon = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Radio',
	  mixins: [_checkable2.default],

	  components: {
	    Icon: _icon.Icon,
	    'vButton': _button.Button
	  },

	  computed: {
	    radioClass: function radioClass() {
	      return [{
	        '--checked': this.checked,
	        '--disabled': this.disabled
	      }];
	    }
	  },

	  methods: {
	    handleChange: function handleChange(e) {
	      if (!this.disabled) {
	        this.checked = e.target.checked;
	      }
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    if (this.checked) {
	      this.value = this.checkedValue;
	    } else if (this.value === this.checkedValue) {
	      this.checked = true;
	    }

	    this.$watch('value', function () {
	      _this.checked = _this.$els.input.checked;
	    });

	    this.$watch('checked', function (value, oldValue) {
	      _this.$notify('onChange', null, { value: value });
	    });
	  }
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _menu = __webpack_require__(29);

	exports.default = {
	  name: 'VOption',
	  components: {
	    MenuItem: _menu.MenuItem
	  },
	  props: {
	    label: String,
	    value: {
	      required: true
	    },

	    disabled: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    selected: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      entry: {
	        label: '',
	        value: ''
	      }
	    };
	  },


	  computed: {
	    actived: function actived() {
	      return this.$select.isActived(this.entry);
	    },
	    _label: function _label() {
	      return this.$els.label.textContent;
	    }
	  },

	  methods: {
	    select: function select(init) {
	      if (!this.disabled || init) {
	        this.$select.select(this.entry, init);
	      }
	    },
	    didUpdate: function didUpdate(digest) {
	      var value = this.$select.value;
	      var multiple = this.$select.multiple;

	      if (multiple) {
	        if (value && ~value.indexOf(this.value)) {
	          this.select(true);
	        }
	      } else if (value === this.value) {
	        this.select(true);
	      }
	    }
	  },

	  created: function created() {
	    this.$dispatch('option:created', this);
	  },
	  ready: function ready() {
	    var _this = this;

	    this.entry.label = this._label;

	    this.$watch('value', function (val) {
	      _this.entry.value = val;
	      _this.didUpdate(false);
	    }, { immediate: true });

	    this.$watch('label', function (val) {
	      if (val != null) _this.entry.label = val;
	    });

	    if (this.selected) {
	      this.select(true);
	    }
	  },


	  events: {
	    'select:digest': function selectDigest() {
	      return this.didUpdate(true);
	    }
	  }
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(58);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _typeof2 = __webpack_require__(39);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	var _select = __webpack_require__(55);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(78);

	var _option2 = _interopRequireDefault(_option);

	var _dropdown = __webpack_require__(17);

	var _icon = __webpack_require__(2);

	var _menu = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VSelect',
	  mixins: [_select2.default],

	  components: {
	    VOption: _option2.default,
	    Dropdown: _dropdown.Dropdown,
	    Icon: _icon.Icon,
	    Menu: _menu.Menu
	  },

	  props: {
	    options: Array
	  },

	  data: function data() {
	    return {};
	  },


	  computed: {
	    _dropdownStyle: function _dropdownStyle() {
	      return (0, _extends3.default)({
	        minWidth: '100%'
	      }, this.dropdownStyle);
	    },
	    _options: function _options() {
	      var _this = this;

	      if (this.options && (0, _typeof3.default)(this.options[0]) !== 'object') {
	        return this.options.map(function (value) {
	          var _ref;

	          return _ref = {}, (0, _defineProperty3.default)(_ref, _this.labelKey, value), (0, _defineProperty3.default)(_ref, _this.valueKey, value), _ref;
	        });
	      } else {
	        return this.options;
	      }
	    },
	    collapsed: function collapsed() {
	      return !this.$refs.dropdown.toggled;
	    }
	  },

	  methods: {},

	  events: {
	    'option:created': function optionCreated(vm) {
	      vm.$select = this;
	    }
	  },

	  watch: {
	    options: function options(val, oldVal) {
	      if (val !== oldVal) {
	        this.digest();
	      }
	    }
	  }
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Handle',
	  props: ['showTip', 'value', 'offset', 'dragging', 'tipFormatter', 'currentHandle', 'handle'],
	  data: function data() {
	    return {
	      tipShow: false
	    };
	  },


	  computed: {
	    handleStyle: function handleStyle() {
	      return {
	        left: this.offset + '%'
	      };
	    },
	    canShowTip: function canShowTip() {
	      var tipShow = this.tipShow,
	          dragging = this.dragging,
	          currentHandle = this.currentHandle,
	          handle = this.handle;

	      return tipShow || dragging && currentHandle === handle;
	    }
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Scale',
	  props: ['step', 'min', 'max', 'minLabel', 'maxLabel', 'scales', 'showLabel', 'trackShowed', 'value'],
	  computed: {
	    isCustomScale: function isCustomScale() {
	      return this.scales != null && this.scales.length > 0;
	    },
	    stepScales: function stepScales() {
	      var min = this.min,
	          max = this.max,
	          step = this.step,
	          minLabel = this.minLabel,
	          maxLabel = this.maxLabel;

	      var scales = [],
	          i = 1,
	          value = min;
	      if (step === null) return scales;

	      var dividerCount = Math.round((max - min) / step);
	      scales.push({
	        offset: 0,
	        value: value,
	        label: minLabel
	      });

	      while (i <= dividerCount) {
	        scales.push({
	          offset: i / dividerCount * 100,
	          value: value += step
	        });
	        i++;
	      }

	      scales[scales.length - 1].label = maxLabel;
	      return scales;
	    },
	    _scales: function _scales() {
	      if (!this.isCustomScale && this.step) {
	        return this.stepScales;
	      } else {
	        return this.scales;
	      }
	    }
	  },

	  methods: {
	    isActived: function isActived(scaleValue) {
	      if (this.trackShowed) {
	        return this.value[0] <= scaleValue && scaleValue <= this.value[1];
	      }
	    }
	  }
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray2 = __webpack_require__(31);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(59);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _scale = __webpack_require__(308);

	var _scale2 = _interopRequireDefault(_scale);

	var _handle = __webpack_require__(307);

	var _handle2 = _interopRequireDefault(_handle);

	var _coerces = __webpack_require__(1);

	var _helpers = __webpack_require__(105);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Slider',
	  mixins: [_control2.default],
	  components: {
	    Scale: _scale2.default,
	    Handle: _handle2.default
	  },
	  props: {
	    range: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    isolate: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    min: {
	      type: Number,
	      default: 0,
	      coerce: _coerces.coerceNumber
	    },

	    max: {
	      type: Number,
	      default: 100,
	      coerce: _coerces.coerceNumber
	    },

	    step: {
	      type: Number,
	      coerce: _coerces.coerceNumber,
	      default: 1
	    },

	    showScale: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    showLabel: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    },

	    minLabel: {
	      type: [String, Object]
	    },

	    maxLabel: {
	      type: [String, Object]
	    },

	    scales: Array,

	    showTip: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    },

	    tipFormatter: {
	      type: Function,
	      default: function _default(value) {
	        return value;
	      }
	    },

	    onAfterChange: {
	      type: Function,
	      default: function _default() {}
	    }
	  },

	  data: function data() {
	    return {
	      currentHandle: null,

	      lowerHandle: null,

	      upperHandle: null,
	      dragging: false
	    };
	  },


	  computed: {
	    wrapperClasses: function wrapperClasses() {
	      return [{
	        '--icon-appended': this.$getSlot('icon-left') != null || this.$getSlot('icon-right') != null
	      }];
	    },
	    sliderClasses: function sliderClasses() {
	      return [{
	        'is-disabled': this.disabled
	      }];
	    },
	    canShowScale: function canShowScale() {
	      return this.showScale && (this.step != null || this._scales.length);
	    },
	    canShowTrack: function canShowTrack() {
	      return this.range || !this.isolate;
	    },
	    _precision: function _precision() {
	      if (this.step === null) return 0;

	      var step = this.step.toString();
	      if (step.indexOf('.') !== -1) {
	        return step.length - step.indexOf('.') - 1;
	      } else {
	        return 0;
	      }
	    },
	    _scales: function _scales() {
	      var _this = this;

	      if (this.scales) {
	        var scales = [].concat((0, _toConsumableArray3.default)(this.scales));
	        if (scales.find(function (_ref) {
	          var value = _ref.value;
	          return value === _this.min;
	        }) == null) {
	          scales.push({ value: this.min, label: this.minLabel });
	        }

	        if (scales.find(function (_ref2) {
	          var value = _ref2.value;
	          return value === _this.max;
	        }) == null) {
	          scales.push({ value: this.max, label: this.maxLabel });
	        }

	        return scales.map(function (scale) {
	          return (0, _extends3.default)({}, scale, {
	            offset: _this._getOffsetByValue(scale.value)
	          });
	        });
	      } else {
	        return [];
	      }
	    },
	    upperOffset: function upperOffset() {
	      return this._getOffsetByValue(this.upperHandle);
	    },
	    lowerOffset: function lowerOffset() {
	      return this._getOffsetByValue(this.lowerHandle);
	    },
	    trackStyle: function trackStyle() {
	      return {
	        left: this.lowerOffset + '%',
	        right: 100 - this.upperOffset + '%'
	      };
	    }
	  },

	  methods: {
	    _addEvents: function _addEvents(type) {
	      if (type === 'mouse') {
	        document.addEventListener('mousemove', this._onMousemove);
	        document.addEventListener('mouseup', this._onMouseend);
	      } else {
	        document.addEventListener('touchmove', this._onTouchmove);
	        document.addEventListener('touchend', this._onTouchend);
	      }
	    },
	    _removeEvents: function _removeEvents(type) {
	      if (type === 'mouse') {
	        document.removeEventListener('mousemove', this._onMousemove);
	        document.removeEventListener('mouseup', this._onMouseend);
	      } else {
	        document.removeEventListener('touchmove', this._onTouchmove);
	        document.removeEventListener('touchend', this._onTouchend);
	      }
	    },
	    _onChange: function _onChange(handleChanging, value) {
	      var _this2 = this;

	      this[handleChanging] = value;
	      this.$changeInner(function () {
	        if (_this2.range) {
	          var data = [_this2.lowerHandle, _this2.upperHandle];
	          _this2.value = data;
	          _this2.$notify('onChange', null, { value: data });
	        } else {
	          _this2.value = value;
	          _this2.$notify('onChange', null, { value: value });
	        }
	      });
	    },
	    _onMousedown: function _onMousedown(event) {
	      if (this.disabled) return;

	      var pos = (0, _helpers.getMousePosition)(event);
	      this._onStart(pos);
	      this._addEvents('mouse');
	      (0, _helpers.pauseEvent)(event);
	    },
	    _onMousemove: function _onMousemove(event) {
	      var pos = (0, _helpers.getMousePosition)(event);
	      this._onMove(event, pos);
	    },
	    _onMouseend: function _onMouseend(event) {
	      this._onEnd('mouse');
	    },
	    _onTouchstart: function _onTouchstart(event) {
	      if (this.disabled) return;
	      if (!(0, _helpers.isTouchEvent)(event)) return;
	      var pos = (0, _helpers.getTouchPosition)(event);
	      this._onStart(pos);
	      this._addEvents('touch');

	      (0, _helpers.pauseEvent)(event);
	    },
	    _onTouchmove: function _onTouchmove(event) {
	      if (!(0, _helpers.isTouchEvent)(event)) {
	        this._onEnd('touch');
	        return;
	      }

	      var pos = (0, _helpers.getTouchPosition)(event);
	      this._onMove(event, pos);
	    },
	    _onTouchend: function _onTouchend(event) {
	      this._onEnd('touch');
	    },
	    _onStart: function _onStart(position) {
	      var value = this._getValueByPosition(position);
	      this.startValue = value;
	      this.startPosition = position;

	      var upperHandle = this.upperHandle,
	          lowerHandle = this.lowerHandle;

	      var handleChanging = 'upperHandle';
	      if (this.range) {
	        if (Math.abs(upperHandle - value) > Math.abs(lowerHandle - value)) {
	          handleChanging = 'lowerHandle';
	        } else if (upperHandle === lowerHandle) {
	          handleChanging = value < upperHandle ? 'lowerHandle' : 'upperHandle';
	        }
	      }

	      this.currentHandle = handleChanging;
	      this.dragging = true;

	      if (value === this[handleChanging]) return;

	      this._onChange(handleChanging, value);
	    },
	    _onMove: function _onMove(e, position) {
	      (0, _helpers.pauseEvent)(e);
	      var min = this.min,
	          max = this.max,
	          startPosition = this.startPosition,
	          startValue = this.startValue,
	          currentHandle = this.currentHandle,
	          lowerHandle = this.lowerHandle,
	          upperHandle = this.upperHandle;

	      var diffPosition = position - startPosition;
	      var diffValue = diffPosition / this._getSliderLength() * (max - min);

	      var value = this._alignValue(startValue + diffValue);
	      if (this.range) {
	        if (currentHandle === 'upperHandle' && value < lowerHandle) {
	          this._onChange(currentHandle, lowerHandle);
	          this.currentHandle = 'lowerHandle';
	        } else if (currentHandle === 'lowerHandle' && value > upperHandle) {
	          this._onChange(currentHandle, upperHandle);
	          this.currentHandle = 'upperHandle';
	        } else if (value === this[currentHandle]) {
	          return;
	        }

	        this._onChange(this.currentHandle, value);
	      } else {
	        if (value === this[currentHandle]) return;
	        this._onChange(currentHandle, value);
	      }
	    },
	    _onEnd: function _onEnd(type) {
	      this._removeEvents(type);
	      this.$notify('onAfterChange', null, { value: this.value });
	      this.currentHandle = null;
	      this.dragging = false;
	    },
	    _getClosestStep: function _getClosestStep(val) {
	      var step = this.step,
	          _precision = this._precision;

	      return parseFloat((Math.round(val / step) * step).toFixed(_precision));
	    },
	    _alignValue: function _alignValue(val) {
	      var min = this.min,
	          max = this.max,
	          step = this.step,
	          _scales = this._scales;


	      if (val <= min) val = min;
	      if (val >= max) val = max;

	      if (_scales.length > 0) {
	        var scales = _scales;

	        if (step !== null) {
	          scales = _scales.concat([{ value: this._getClosestStep(val) }]);
	        }

	        var diffs = scales.map(function (_ref3) {
	          var value = _ref3.value;
	          return Math.abs(value - val);
	        });
	        var closestScale = Math.min.apply(Math, (0, _toConsumableArray3.default)(diffs));
	        return scales[diffs.indexOf(closestScale)].value;
	      } else if (step != null) {
	        return this._getClosestStep(val);
	      } else {
	        return val;
	      }
	    },
	    _getOffsetByValue: function _getOffsetByValue(value) {
	      var min = this.min,
	          max = this.max;

	      value = value || min;
	      return (value - min) / (max - min) * 100;
	    },
	    _getValueByOffset: function _getValueByOffset(offset) {
	      var min = this.min,
	          max = this.max;

	      var ratio = offset / this._getSliderLength();
	      return ratio * (max - min) + min;
	    },
	    _getValueByPosition: function _getValueByPosition(position) {
	      var offset = position - this._getSliderStart();
	      return this._alignValue(this._getValueByOffset(offset));
	    },
	    _getSliderLength: function _getSliderLength() {
	      var slider = this.$els.slider;
	      if (!slider) return 0;
	      return slider.clientWidth;
	    },
	    _getSliderStart: function _getSliderStart() {
	      var slider = this.$els.slider;

	      return slider.getBoundingClientRect().left + window.pageXOffset;
	    },
	    _refresh: function _refresh() {
	      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

	      if (value == null) return;
	      if (this.range && Array.isArray(value)) {
	        var _value = (0, _slicedToArray3.default)(value, 2),
	            lowerHandle = _value[0],
	            upperHandle = _value[1];

	        this.lowerHandle = this._alignValue(lowerHandle);
	        this.upperHandle = this._alignValue(upperHandle);
	      } else {
	        this.upperHandle = this._alignValue(this.value);
	      }
	    },
	    _checkStep: function _checkStep() {
	      var step = this.step,
	          min = this.min,
	          max = this.max;

	      var multiplier = Math.pow(10, this._precision);
	      if (step == null) return;
	      var modal = (max - min) * multiplier % (step * multiplier);
	      if (modal !== 0) {
	        throw new TypeError('Slider Error: step(' + step + ') isn\'t evenly divisible by \'max - min\'(' + (max - min) + ').');
	      }
	    }
	  },

	  compiled: function compiled() {
	    this._checkStep();
	    var range = this.range,
	        min = this.min;

	    var initialValue = range ? [min, min] : min;
	    var value = this.value != null ? this.value : initialValue;

	    if (range) {
	      this.lowerHandle = this._alignValue(value[0]);
	      this.upperHandle = this._alignValue(value[1]);
	    } else {
	      this.upperHandle = this._alignValue(value);
	    }
	  },


	  watch: {
	    step: function step(val, oldVal) {
	      if (val !== oldVal) {
	        this._checkStep();
	        this._refresh();
	      }
	    },
	    min: function min(val, oldVal) {
	      var _this3 = this;

	      if (val !== oldVal) {
	        if (this.$isChangingInner()) {
	          return;
	        }

	        this.$changeInner(function () {
	          if (val > _this3.max) {
	            var temp = _this3.max;
	            _this3.max = val;
	            _this3.min = temp;
	          }

	          _this3._checkStep();
	          _this3._refresh();
	        });
	      }
	    },
	    max: function max(val, oldVal) {
	      var _this4 = this;

	      if (val !== oldVal) {
	        if (this.$isChangingInner()) {
	          return;
	        }

	        this.$changeInner(function () {
	          if (val < _this4.min) {
	            _this4.max = _this4.min;
	            _this4.min = val;
	          }

	          _this4._checkStep();
	          _this4._refresh();
	        });
	      }
	    },
	    value: function value(val) {
	      if (!this.$isChangingInner()) {
	        this._refresh(val);
	      }
	    }
	  }
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _coerces = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Switch',
	  mixins: [_control2.default],
	  props: {

	    checked: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  computed: {
	    switchWrapperClass: function switchWrapperClass() {
	      return [this.size && '--' + this.size];
	    },
	    switchClass: function switchClass() {
	      return [{
	        'is-checked': this.checked,
	        'is-disabled': this.disabled
	      }];
	    }
	  },

	  methods: {
	    handleChange: function handleChange() {
	      if (!this.disabled) {
	        this.checked = !this.checked;
	        this.$notify('onChange', null, { checked: this.checked });
	      }
	    }
	  }
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isNan = __webpack_require__(23);

	var _isNan2 = _interopRequireDefault(_isNan);

	var _slicedToArray2 = __webpack_require__(31);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _getIterator2 = __webpack_require__(30);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _control = __webpack_require__(10);

	var _control2 = _interopRequireDefault(_control);

	var _coerces = __webpack_require__(1);

	var _util = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function combindSection(array, count, processItem) {
	  array = Array.isArray(array) ? array : [];
	  var out = [];

	  for (var i = 0; i < count; i++) {
	    out[i] = processItem(i, false);
	  }

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (0, _getIterator3.default)(array), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _i = _step.value;

	      if (_i < count) {
	        out[_i] = processItem(_i, true);
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return out;
	}

	exports.default = {
	  name: 'TimepickerPane',
	  mixins: [_control2.default],
	  directives: {
	    scrollActive: function scrollActive(value) {
	      var _this = this;

	      if (value) {
	        this.vm.$nextTick(function () {
	          var el = _this.el;
	          var parent = el.parentElement;
	          if (!_this.scrollTop) {
	            var top = parent.offsetHeight / 2 - el.offsetHeight / 2;
	            _this.scrollTop = el.offsetTop - top;
	          }

	          parent.scrollTop = _this.scrollTop;
	        });
	      }
	    }
	  },

	  props: {

	    separator: {
	      default: ':'
	    },

	    format: {
	      type: String,
	      default: 'HH:mm:ss'
	    },

	    disabledHours: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    },

	    disabledMinutes: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    },

	    disabledSeconds: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    },

	    showDisabledItem: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    },

	    showSeconds: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      date: new Date()
	    };
	  },


	  computed: {
	    timepickerClasses: function timepickerClasses() {
	      return [this.size && '--' + this.size, {
	        'hide-disabled': !this.showDisabledItem
	      }];
	    },
	    hour: function hour() {
	      return this.date && this.date.getHours();
	    },
	    minute: function minute() {
	      return this.date && this.date.getMinutes();
	    },
	    second: function second() {
	      return this.date && this.date.getSeconds();
	    },
	    hourList: function hourList() {
	      return combindSection(this.disabledHours(), 24, function (value, disabled) {
	        return { value: value, disabled: disabled };
	      });
	    },
	    minuteList: function minuteList() {
	      return combindSection(this.disabledMinutes(), 60, function (value, disabled) {
	        return { value: value, disabled: disabled };
	      });
	    },
	    secondList: function secondList() {
	      return combindSection(this.disabledSeconds(), 60, function (value, disabled) {
	        return { value: value, disabled: disabled };
	      });
	    }
	  },
	  methods: {
	    clear: function clear() {
	      var _this2 = this;

	      this.$changeInner(function () {
	        _this2.value = '';
	        _this2.date = new Date();
	        _this2.$notify('onchange', null, { value: _this2.value });
	      });
	    },
	    _formatNumber: function _formatNumber(value) {
	      return ('0' + value).slice(-2);
	    },
	    _parse: function _parse(value) {
	      if (value == null) return;
	      var date = new Date();

	      if (typeof value === 'string') {
	        var _value$split = value.split(this.separator),
	            _value$split2 = (0, _slicedToArray3.default)(_value$split, 3),
	            hour = _value$split2[0],
	            minute = _value$split2[1],
	            second = _value$split2[2];

	        var time = new Date(0, 0, 0, hour, minute, second);
	        if (!(0, _isNan2.default)(time.getTime())) {
	          date = time;
	        }
	      } else if (value instanceof Date) {
	        date = value;
	      }

	      this.date = date;
	    },
	    _handleClick: function _handleClick(event, section, item) {
	      var value = item.value,
	          disabled = item.disabled;

	      if (disabled || value === this[section]) return;
	      this._setValue(section, value);
	    },
	    _setValue: function _setValue(section, value) {
	      switch (section) {
	        case 'hour':
	          this.date.setHours(value);
	          break;
	        case 'minute':
	          this.date.setMinutes(value);
	          break;
	        default:
	          this.date.setSeconds(value);
	          break;
	      }

	      this.date = new Date(this.date);
	      this._onChange();
	    },
	    _onChange: function _onChange() {
	      var _this3 = this;

	      this.$changeInner(function () {
	        _this3.value = (0, _util.dateFormat)(_this3.date, _this3.format);
	        _this3.$notify('onchange', null, { value: _this3.value });
	      });
	    }
	  },

	  created: function created() {
	    this._parse(this.value);
	  },


	  watch: {
	    'value': function value(_value) {
	      if (this.$isChangingInner()) {
	        return;
	      } else {
	        this._parse(_value);
	      }
	    }
	  }
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(11);

	var _extends3 = _interopRequireDefault(_extends2);

	var _coerces = __webpack_require__(1);

	var _select = __webpack_require__(55);

	var _select2 = _interopRequireDefault(_select);

	var _tree = __webpack_require__(313);

	var _tree2 = _interopRequireDefault(_tree);

	var _dropdown = __webpack_require__(17);

	var _icon = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'TreeSelect',
	  mixins: [_select2.default],
	  components: {
	    Tree: _tree2.default,
	    Dropdown: _dropdown.Dropdown,
	    Icon: _icon.Icon
	  },

	  props: {
	    expandLevel: {
	      type: Number,
	      default: 2,
	      coerce: _coerces.coerceNumber
	    },

	    options: Array,

	    loadData: Function,

	    childrenKey: {
	      type: String,
	      default: 'children'
	    }
	  },

	  data: function data() {
	    return {};
	  },


	  computed: {
	    _dropdownStyle: function _dropdownStyle() {
	      return (0, _extends3.default)({
	        minWidth: '234px'
	      }, this.dropdownStyle);
	    },
	    isFit: function isFit() {
	      if (!this.multiple) {
	        return this.selected !== null;
	      } else {
	        return this.selected.length === this.value.length;
	      }
	    }
	  },

	  methods: {},

	  watch: {
	    options: function options(val, oldVal) {
	      if (val !== oldVal) {
	        this.digest();
	      }
	    }
	  },

	  events: {
	    'tree:created': function treeCreated(vm) {
	      vm.$select = this;
	    }
	  }
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(39);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'tree',
	  components: {
	    Icon: _icon.Icon
	  },
	  props: {
	    items: {
	      type: Array,
	      required: true
	    },

	    level: {
	      type: Number,
	      default: 1
	    },

	    collapsed: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      unCollapseds: []
	    };
	  },


	  methods: {
	    hasChildren: function hasChildren(item) {
	      return item[this.$select.childrenKey] && item[this.$select.childrenKey].length;
	    },
	    isCollapsed: function isCollapsed(item) {
	      return this.unCollapseds.indexOf(item) === -1;
	    },
	    toggle: function toggle(item) {
	      if (this.isCollapsed(item)) {
	        this.unCollapseds.push(item);
	      } else {
	        this.unCollapseds.$remove(item);
	      }
	    },
	    select: function select(item, init) {
	      if (!item.disabled || init) {
	        this.$select.select(item, init);
	      }
	    },
	    didItemsUpdate: function didItemsUpdate() {
	      var _this = this;

	      var expand = function expand() {
	        _this.unCollapseds = [];
	        _this.items.forEach(function (item) {
	          _this.unCollapseds.push(item);
	        });
	      };

	      if (this.$select.expandLevel === 0) {
	        expand();
	      } else if (this.$select.expandLevel > this.level) {
	        expand();
	      }
	    },
	    didUpdate: function didUpdate(digest) {
	      var _this2 = this;

	      var selectedValue = this.$select.value;
	      var valueKey = this.$select.valueKey;
	      var multiple = this.$select.multiple;

	      if (digest && this.$select.isFit) {
	        return false;
	      }

	      var _loop = function _loop(i, l) {
	        var item = _this2.items[i];
	        var itemValue = item[valueKey];
	        if (multiple) {
	          selectedValue.forEach(function (value) {
	            if (value === itemValue) {
	              _this2.select(item, true);
	            }
	          });
	        } else {
	          if (selectedValue === itemValue) {
	            _this2.select(item, true);
	            return {
	              v: false
	            };
	          }
	        }
	      };

	      for (var i = 0, l = this.items.length; i < l; i++) {
	        var _ret = _loop(i, l);

	        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	      }

	      return true;
	    }
	  },

	  created: function created() {
	    this.$dispatch('tree:created', this);
	  },
	  ready: function ready() {
	    this.didUpdate(false);
	    this.didItemsUpdate();
	  },


	  events: {
	    'select:digest': function selectDigest() {
	      return this.didUpdate(true);
	    }
	  },

	  watch: {
	    'items': function items() {
	      this.didItemsUpdate();
	    }
	  }
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _helpers = __webpack_require__(56);

	exports.default = {
	  name: 'cell',
	  props: {
	    size: {
	      type: Object,
	      default: function _default() {
	        return { small: { value: 24 } };
	      },
	      coerce: _helpers.coerceSize
	    },

	    collapse: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    uncollapse: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    push: {
	      type: Object,
	      default: function _default() {
	        return {};
	      },
	      coerce: _helpers.coerceSize
	    },

	    pull: {
	      type: Object,
	      default: function _default() {
	        return {};
	      },
	      coerce: _helpers.coerceSize
	    },

	    offset: {
	      type: Object,
	      default: function _default() {
	        return {};
	      },
	      coerce: _helpers.coerceSize
	    },

	    center: {
	      type: Object,
	      default: function _default() {
	        return {};
	      },
	      coerce: _helpers.coerceSize
	    },

	    uncenter: {
	      type: Object,
	      default: function _default() {
	        return {};
	      },
	      coerce: _helpers.coerceSize
	    }
	  },

	  data: function data() {
	    return {
	      classes: []
	    };
	  },
	  created: function created() {
	    (0, _helpers.serializeClassName)(this.classes, this.size, 'size');
	    (0, _helpers.serializeClassName)(this.classes, this.push, 'push');
	    (0, _helpers.serializeClassName)(this.classes, this.pull, 'pull');
	    (0, _helpers.serializeClassName)(this.classes, this.offset, 'offset');
	    (0, _helpers.serializeClassName)(this.classes, this.center, 'center');
	    (0, _helpers.serializeClassName)(this.classes, this.uncenter, 'uncenter');
	  }
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _helpers = __webpack_require__(56);

	var _coerces = __webpack_require__(1);

	exports.default = {
	  name: 'grid',
	  props: {
	    collapse: {
	      type: Object,
	      default: function _default() {
	        return {};
	      },
	      coerce: _helpers.coerceSize
	    },

	    uncollapse: {
	      type: Object,
	      default: function _default() {
	        return {};
	      },
	      coerce: _helpers.coerceSize
	    },

	    expanded: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      classes: []
	    };
	  },
	  created: function created() {
	    (0, _helpers.serializeClassName)(this.classes, this.collapse, 'rowcollapse');
	    (0, _helpers.serializeClassName)(this.classes, this.uncollapse, 'rowuncollapse');
	    if (this.expanded) this.classes.push((0, _helpers.serializeExpanded)());
	  }
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _fontAwesome = __webpack_require__(108);

	var _fontAwesome2 = _interopRequireDefault(_fontAwesome);

	var _coerces = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function coerceType(value) {
	  if (typeof value !== 'string') return value;
	  var types = value.trim().split(':');
	  var classes = {};
	  types.forEach(function (item) {
	    classes['--' + item] = true;
	  });
	  return classes;
	}

	exports.default = {
	  props: {
	    name: {
	      type: String,
	      required: true
	    },

	    type: {
	      type: Object,
	      coerce: coerceType
	    },

	    color: String,

	    loading: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    awesome: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean,
	      default: true
	    }
	  },

	  computed: {
	    iconClasses: function iconClasses() {
	      return [this.type, this.color && '--' + this.color, this.loading && 'is-loading'];
	    },
	    isAwesome: function isAwesome() {
	      return this.name in _fontAwesome2.default;
	    },
	    awesomeIcon: function awesomeIcon() {
	      return _fontAwesome2.default[this.name];
	    },
	    viewBox: function viewBox() {
	      if (this.awesomeIcon) {
	        return '0 0 ' + this.awesomeIcon.width + ' ' + this.awesomeIcon.height;
	      } else {
	        return '';
	      }
	    }
	  },

	  methods: {
	    coerceId: function coerceId(value) {
	      return value.charAt(0) === '#' ? value : '#' + value;
	    }
	  }
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  props: {
	    disabled: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    actived: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  computed: {
	    cssClass: function cssClass() {
	      return [{
	        '--disabled': this.disabled,
	        '--actived': this.actived
	      }];
	    }
	  }
	};

/***/ },
/* 157 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    layout: {
	      type: String,
	      default: 'vertical',
	      validator: function validator(value) {
	        return ['vertical', 'horizontal'].indexOf(value) !== -1;
	      }
	    }
	  },

	  computed: {
	    cssClass: function cssClass() {
	      return ['--' + this.layout];
	    }
	  }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	var _icon2 = __webpack_require__(28);

	exports.default = {
	  name: 'Message',
	  components: {
	    Icon: _icon.Icon
	  },
	  transitions: {
	    slide: {
	      afterLeave: function afterLeave() {
	        var _this = this;

	        this.$nextTick(function () {
	          _this.$destroy(true);
	        });
	      }
	    }
	  },
	  props: {
	    duration: {
	      type: Number,
	      default: 3000,
	      coerce: _coerces.coerceNumber
	    },
	    type: {
	      type: String,
	      default: 'info'
	    },
	    content: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      show: false
	    };
	  },

	  computed: {
	    _iconName: function _iconName() {
	      return _icon2.iconName[this.type] || 'spinner';
	    },
	    _iconColor: function _iconColor() {
	      return this.type === 'loading' ? '' : _icon2.iconColor[this.type] || this.type;
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    this.show = true;
	    setTimeout(function () {
	      _this2.show = false;
	    }, this.duration);
	  }
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _modal = __webpack_require__(79);

	var _modal2 = _interopRequireDefault(_modal);

	var _icon = __webpack_require__(2);

	var _button = __webpack_require__(6);

	var _icon2 = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Confirm',
	  components: {
	    Modal: _modal2.default,
	    Icon: _icon.Icon,
	    bButton: _button.Button
	  },
	  props: {
	    title: String,
	    content: String,
	    alert: Boolean,
	    type: String,
	    okText: { type: String, default: '确认' },
	    cancelText: { type: String, default: '取消' }
	  },

	  data: function data() {
	    return {
	      show: false
	    };
	  },


	  computed: {
	    _iconName: function _iconName() {
	      return _icon2.iconName[this.type] || 'question-circle';
	    },
	    _iconColor: function _iconColor() {
	      return _icon2.iconColor[this.type] || this.type || 'warning';
	    }
	  },

	  methods: {
	    confirm: function confirm(event) {
	      this.show = false;
	      this.$emit('onconfirm');
	    },
	    close: function close() {
	      this.show = false;
	      this.$emit('oncancel');
	    },
	    readyDestroy: function readyDestroy() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.$destroy(true);
	      });
	    }
	  }
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _button = __webpack_require__(6);

	exports.default = {
	  name: 'Modal',
	  components: {
	    bButton: _button.Button
	  },
	  props: {
	    show: {
	      type: Boolean,
	      required: true,
	      coerce: _coerces.coerceBoolean
	    },
	    title: String,
	    size: String,
	    okText: {
	      type: String,
	      default: '确定'
	    },
	    manual: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    cancelText: {
	      type: String,
	      default: '取消'
	    },
	    beforeClose: Function,
	    beforeConfirm: Function,
	    hideHeader: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    hideFooter: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    clickDimmerToClose: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean,
	      default: true
	    },
	    loading: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  transitions: {
	    fade: {
	      afterLeave: function afterLeave() {
	        this.$emit('onleave');
	      }
	    }
	  },

	  methods: {
	    close: function close(event) {
	      var _this = this;

	      if (this.beforeClose) {
	        this.beforeClose(function () {
	          _this.hide(event);
	        });
	      } else {
	        this.hide(event);
	      }
	    },
	    hide: function hide(event) {
	      if (event === 'confirm') {
	        this.$emit('onconfirm');
	      } else {
	        this.$emit('onclose');
	      }

	      if (this.manual) {
	        return;
	      } else {
	        this.show = false;
	      }
	    },
	    cancel: function cancel() {
	      this.close('cancel');
	    },
	    ok: function ok() {
	      var _this2 = this;

	      if (this.beforeConfirm) {
	        this.beforeConfirm(function () {
	          _this2.close('confirm');
	        });
	      } else {
	        this.close('confirm');
	      }
	    },
	    confirm: function confirm() {
	      this.ok();
	    }
	  },

	  ready: function ready() {
	    var _this3 = this;

	    var body = document.body;
	    var classList = body.classList;
	    this.$watch('show', function (val) {
	      if (val) {
	        classList.add('modal-open');
	        _this3.$emit('onshow');
	      } else {
	        classList.remove('modal-open');
	      }
	    }, { immediate: true });
	  }
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	var _button = __webpack_require__(6);

	var _icon2 = __webpack_require__(28);

	exports.default = {
	  name: 'Notification',
	  components: {
	    Icon: _icon.Icon,
	    bButton: _button.Button
	  },
	  transitions: {
	    notify: {
	      afterLeave: function afterLeave() {
	        var _this = this;

	        this.$nextTick(function () {
	          _this.$destroy(true);
	        });
	      }
	    }
	  },
	  props: {
	    type: {
	      type: String,
	      default: 'info'
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    content: {
	      type: String,
	      default: ''
	    },
	    showIcon: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    showConfirm: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    confirmText: {
	      type: String,
	      default: '确认'
	    },
	    duration: {
	      type: Number,
	      coerce: _coerces.coerceNumber,
	      default: 4500
	    }
	  },
	  data: function data() {
	    return {
	      show: false
	    };
	  },

	  computed: {
	    _iconName: function _iconName() {
	      return _icon2.iconName[this.type];
	    },
	    _iconColor: function _iconColor() {
	      return _icon2.iconColor[this.type] || this.type;
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	      this.$emit('onclose');
	    },
	    confirm: function confirm() {
	      this.show = false;
	      this.$emit('onconfirm');
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    this.show = true;
	    if (this.duration > 0) {
	      this._timer = setTimeout(function () {
	        _this2.close();
	      }, this.duration);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    clearTimeout(this._timer);
	  }
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _icon = __webpack_require__(2);

	function clamp(n, min, max) {
	  return n < min ? min : n > max ? max : n;
	}

	exports.default = {
	  name: 'NProgress',
	  components: {
	    Icon: _icon.Icon
	  },
	  props: {
	    minmum: {
	      type: Number,
	      default: 0.08,
	      coerce: _coerces.coerceNumber
	    },

	    easing: {
	      type: String,
	      default: 'ease'
	    },

	    speed: {
	      type: Number,
	      default: 350,
	      coerce: _coerces.coerceNumber
	    },

	    trickle: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    },

	    trickleSpeed: {
	      type: Number,
	      default: 250,
	      coerce: _coerces.coerceNumber
	    },

	    showSpinner: {
	      type: Boolean,
	      default: true,
	      coerce: _coerces.coerceBoolean
	    },

	    registerRouterHook: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      status: null
	    };
	  },


	  computed: {
	    isStarted: function isStarted() {
	      return typeof this.status === 'number';
	    },
	    computedOffset: function computedOffset() {
	      if (this.status != null) {
	        return '-' + (1 - this.status) * 100 + '%';
	      }
	      return 0;
	    },
	    barStyles: function barStyles() {
	      return {
	        transition: 'all ' + this.speed + 'ms ' + this.easing,
	        transform: 'translate3d(' + this.computedOffset + ', 0px, 0px)'
	      };
	    }
	  },
	  methods: {
	    set: function set(n) {
	      n = clamp(n, this.minmum, 1);
	      this.status = n;

	      if (n === 1) {
	        this.status = null;
	      }
	    },
	    start: function start() {
	      var _this = this;

	      if (!this.isStarted) this.set(0);

	      var work = function work() {
	        setTimeout(function () {
	          if (!_this.isStarted) return;
	          _this.inc();

	          work();
	        }, _this.trickleSpeed);
	      };

	      if (this.trickle) work();
	    },
	    done: function done() {
	      var _this2 = this;

	      if (!this.isStarted) return;
	      this.inc(0.3 + 0.5 * Math.random());
	      this.$nextTick(function () {
	        _this2.set(1);
	      });
	    },
	    inc: function inc(amount) {
	      var n = this.status;
	      if (!n) {
	        return this.start();
	      } else if (n > 1) {
	        return;
	      } else {
	        if (typeof amount !== 'number') {
	          if (n >= 0 && n < 0.25) {
	            amount = (Math.random() * 3 + 6) / 100;
	          } else if (n >= 0.25 && n < 0.65) {
	            amount = Math.random() * 3 / 100;
	          } else if (n >= 0.65 && n < 0.9) {
	            amount = Math.random() * 2 / 100;
	          } else if (n >= 0.9 && n < 0.99) {
	            amount = 0.005;
	          } else {
	            amount = 0;
	          }
	        }

	        n = clamp(n + amount, 0, 0.99);
	        return this.set(n);
	      }
	    }
	  },

	  events: {
	    'nprogress:start': function nprogressStart() {
	      this.start();
	    },
	    'nprogress:done': function nprogressDone() {
	      this.done();
	    }
	  },

	  created: function created() {
	    var _this3 = this;

	    if (this.registerRouterHook && this.$router) {
	      this.$router.beforeEach(function (_ref) {
	        var next = _ref.next;

	        _this3.start();
	        next();
	      });

	      this.$router.afterEach(function () {
	        _this3.done();
	      });
	    }
	  }
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  props: {
	    current: {
	      type: Number,
	      required: true,
	      coerce: _coerces.coerceNumber,
	      validator: function validator(value) {
	        return value >= 0;
	      }
	    },

	    count: {
	      type: Number,
	      required: true,
	      coerce: _coerces.coerceNumber,
	      validator: function validator(value) {
	        return value >= 0;
	      }
	    },

	    prevText: {
	      type: String,
	      default: '上一页'
	    },

	    nextText: {
	      type: String,
	      default: '下一页'
	    },

	    callback: {
	      type: Function,
	      default: function _default() {}
	    },

	    slideWindow: {
	      type: Number,
	      coerce: _coerces.coerceNumber,
	      default: 3
	    },

	    simple: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    size: String
	  },

	  computed: {
	    paginationClass: function paginationClass() {
	      return [this.size && '--' + this.size];
	    },
	    hasPrev: function hasPrev() {
	      return this.current > 1;
	    },
	    hasNext: function hasNext() {
	      return this.current < this.count;
	    },
	    items: function items() {
	      var _this = this;

	      if (this.simple) return;
	      var current = this.current;
	      var slideWindow = this.slideWindow;
	      var halfSlideWindow = Math.floor(slideWindow / 2);
	      var count = this.count;
	      var pages = [];
	      var desc = {};
	      var tempStart = 0;
	      var tempEnd = 0;

	      var pushItem = function pushItem(item) {
	        pages.push({
	          id: item,
	          value: item,
	          isCurrent: item === _this.current
	        });
	      };

	      tempStart = current - halfSlideWindow;
	      if (tempStart >= 1) {
	        desc.start = tempStart;
	        if (tempStart > halfSlideWindow + 1) {
	          desc.addHead = true;
	        } else {
	          desc.start = 1;
	        }
	      } else {
	        desc.start = 1;
	      }

	      tempEnd = current + halfSlideWindow;

	      if (tempStart <= 0) {
	        tempEnd = tempEnd - (tempStart - 1);
	      }

	      if (tempEnd <= count) {
	        desc.end = tempEnd;
	        if (count - tempEnd > halfSlideWindow + 1) {
	          desc.addTail = true;
	        } else {
	          desc.end = count;
	        }
	      } else {
	        var rest = desc.start - (tempEnd - count);
	        if (rest >= 1) {
	          if (rest > halfSlideWindow + 1) {
	            desc.start = rest;
	          } else {
	            desc.start = 1;
	            desc.addHead = false;
	          }
	        }
	        desc.end = count;
	      }

	      if (desc.addHead) {
	        for (var i = 1, l = halfSlideWindow; i <= l; i++) {
	          pushItem(i);
	        }

	        pushItem(-1);
	      }

	      for (var _i = desc.start, _l = desc.end; _i <= _l; _i++) {
	        pushItem(_i);
	      }

	      if (desc.addTail) {
	        pushItem(-2);
	        for (var _i2 = count - halfSlideWindow + 1, _l2 = count; _i2 <= _l2; _i2++) {
	          pushItem(_i2);
	        }
	      }

	      return pages;
	    }
	  },

	  methods: {
	    goTo: function goTo(item) {
	      if (item.isCurrent || item.id === 0) {
	        return;
	      } else {
	        this.current = item.id;
	        this.callback(item.id);
	      }
	    },
	    goToPrev: function goToPrev() {
	      if (this.hasPrev) {
	        this.current--;
	        this.callback(this.current);
	      }
	    },
	    goToNext: function goToNext() {
	      if (this.hasNext) {
	        this.current++;
	        this.callback(this.current);
	      }
	    }
	  }
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tooltip = __webpack_require__(38);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _icon = __webpack_require__(2);

	var _button = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'PopoverConfirm',
	  components: {
	    Icon: _icon.Icon,
	    bButton: _button.Button
	  },
	  mixins: [_tooltip2.default],
	  props: {
	    title: {
	      type: String,
	      required: true
	    },

	    okText: {
	      type: String,
	      default: '确认'
	    },

	    cancelText: {
	      type: String,
	      default: '取消'
	    },

	    trigger: {
	      type: String,
	      default: 'click'
	    }
	  },

	  methods: {
	    confirm: function confirm() {
	      this.$emit('onconfirm');
	      this.hide();
	    },
	    cancel: function cancel() {
	      this.$emit('oncancel');
	      this.hide();
	    }
	  }
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tooltip = __webpack_require__(38);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _coerces = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_tooltip2.default],
	  props: {
	    title: String,
	    trigger: {
	      default: 'click'
	    },
	    lazy: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  }
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  name: 'Spin',
	  props: {
	    type: {
	      type: String,
	      default: 'double-bounce',
	      validator: function validator(value) {
	        return ~['cube-grid', 'wandering-cubes', 'wave', 'double-bounce', 'folding-cube', 'rotating-plane'].indexOf(value);
	      }
	    },
	    color: {
	      type: String
	    },
	    light: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    dark: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    size: String,
	    text: String
	  },
	  computed: {
	    spinClass: function spinClass() {
	      return [this.size && '--' + this.size];
	    },
	    spinStyle: function spinStyle() {
	      return {
	        color: this.light ? '#fff' : this.dark ? '#252525' : this.color
	      };
	    }
	  }
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	var _spin = __webpack_require__(327);

	var _spin2 = _interopRequireDefault(_spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    Spin: _spin2.default
	  },
	  props: {
	    type: String,

	    light: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    dark: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    size: String,
	    text: String,

	    loading: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },

	    delay: {
	      type: Number,
	      coerce: _coerces.coerceNumber,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      isLoading: false
	    };
	  },

	  computed: {
	    asWrapper: function asWrapper() {
	      return !!this.$getSlot('default');
	    },
	    spinnerClass: function spinnerClass() {
	      return {
	        'as-wrapper': this.asWrapper,
	        'is-loading': this.isLoading
	      };
	    }
	  },
	  ready: function ready() {
	    var _this = this;

	    this.$watch('loading', function (val) {
	      if (val) {
	        _this.isLoading = true;
	      } else if (_this.delay > 0) {
	        _this._timer = setTimeout(function () {
	          _this.isLoading = false;
	        }, _this.delay);
	      } else {
	        _this.isLoading = false;
	      }
	    }, { immediate: true });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._timer) clearTimeout(this._timer);
	  }
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icon = __webpack_require__(2);

	exports.default = {
	  name: 'step',
	  components: {
	    Icon: _icon.Icon
	  },
	  props: {
	    status: {
	      type: String,
	      default: 'processing',
	      validator: function validator(val) {
	        return ['processing', 'error', 'waitting', 'finished'].indexOf(val) !== -1;
	      }
	    },

	    title: {
	      type: String,
	      default: ''
	    },

	    description: {
	      type: String,
	      default: ''
	    },

	    icon: String,

	    iconType: String,

	    iconStyle: Object
	  },

	  data: function data() {
	    return {
	      index: 0
	    };
	  },


	  computed: {
	    stepItemStyle: function stepItemStyle() {
	      return {
	        width: !this.isHorizontal || this.isLast ? '' : 1 / (this.$step.length - 1) * 100 + '%',
	        marginRight: !this.isHorizontal || this.isLast ? '' : this.$step.marginRight
	      };
	    },
	    stepItemClass: function stepItemClass() {
	      return ['--' + this.$step.size, '--' + this.$step.direction, {
	        '--processing': this.isProcessing,
	        '--waitting': this.isWaitting,
	        '--finished': this.isFinished,
	        '--error': this.isError,
	        '--next-step-error': this.isNextStepEror
	      }];
	    },
	    isHorizontal: function isHorizontal() {
	      return this.$step.direction === 'horizontal';
	    },
	    isProcessing: function isProcessing() {
	      return this.$step.current === this.index && (this.status === 'processing' || this.$step.status === 'processing');
	    },
	    isError: function isError() {
	      return this.$step.current === this.index && (this.status === 'error' || this.$step.status === 'error');
	    },
	    isNextStepEror: function isNextStepEror() {
	      return this.$step.items[this.index + 1] ? this.$step.items[this.index + 1].instance.isError : false;
	    },
	    isFinished: function isFinished() {
	      return this.$step.current > this.index;
	    },
	    isWaitting: function isWaitting() {
	      return this.$step.current < this.index;
	    },
	    isLast: function isLast() {
	      if (this.$step) {
	        return this.index + 1 === this.$step.length;
	      } else {
	        return false;
	      }
	    }
	  },

	  created: function created() {
	    this.$dispatch('step:created', {
	      instance: this
	    });
	  }
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  name: 'steps',
	  props: {
	    current: {
	      type: Number,
	      default: 0,
	      coerce: _coerces.coerceNumber
	    },

	    status: {
	      type: String,
	      default: 'processing',
	      validator: function validator(val) {
	        return ['processing', 'error'].indexOf(val) !== -1;
	      }
	    },

	    direction: {
	      type: String,
	      default: 'horizontal',
	      validator: function validator(val) {
	        return ['horizontal', 'vertical'].indexOf(val) !== -1;
	      }
	    },

	    size: {
	      type: String,
	      default: 'default',
	      validator: function validator(val) {
	        return ['default', 'small', 'large', 'xlarge'].indexOf(val) !== -1;
	      }
	    }
	  },

	  data: function data() {
	    return {
	      items: [],
	      lastStepOffsetWidth: 0
	    };
	  },


	  computed: {
	    length: function length() {
	      return this.items.length;
	    },
	    marginRight: function marginRight() {
	      return '-' + (this.lastStepOffsetWidth / (this.length - 1) + 1) + 'px';
	    }
	  },

	  events: {
	    'step:created': function stepCreated(payload) {
	      this.items.push(payload);
	      payload.instance.$step = this;
	      payload.instance.index = this.length - 1;
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    if (this.direction === 'horizontal') {
	      (function () {
	        var $lastStep = _this.items[_this.length - 1].instance.$el;
	        _this.lastStepOffsetWidth = $lastStep.offsetWidth;

	        _this.$watch('size', function (val, oldVal) {
	          if (val !== oldVal) {
	            _this.lastStepOffsetWidth = $lastStep.offsetWidth;
	          }
	        });
	      })();
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.items = [];
	  }
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  name: 'TabItem',
	  props: {
	    title: {
	      type: String,
	      required: true
	    },

	    disabled: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    },
	    lazy: {
	      type: Boolean,
	      coerce: _coerces.coerceBoolean
	    }
	  },

	  data: function data() {
	    return {
	      index: 0,

	      show: false,

	      shown: false
	    };
	  },


	  computed: {
	    show: function show() {
	      return this.$parent.active === this.index;
	    },
	    transition: function transition() {
	      return this.$parent.effect;
	    }
	  },

	  created: function created() {
	    this.$parent.items.push({
	      title: this.title,
	      disabled: this.disabled
	    });
	  },
	  ready: function ready() {
	    var _this = this;

	    for (var i = 0, l = this.$parent.$children.length; i < l; i++) {
	      if (this.$parent.$children[i].$el === this.$el) {
	        this.index = i;
	        break;
	      }
	    }

	    this.$watch('$parent.active', function (value) {
	      if (value === _this.index) {
	        _this.$emit('onshow', value);
	        if (!_this.shown) {
	          _this.$emit('onfirstshow', value);
	          _this.shown = true;
	        }
	      }
	    }, { immediate: true });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$parent.items.splice(this.index, 1);
	  }
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _coerces = __webpack_require__(1);

	exports.default = {
	  name: 'Tab',
	  props: {
	    active: {
	      type: Number,
	      coerce: _coerces.coerceNumber,
	      default: 0
	    },

	    effect: {
	      type: String,
	      default: 'fade'
	    },

	    beforeSwitch: Function
	  },

	  data: function data() {
	    return {
	      items: [],
	      mode: 'hash'
	    };
	  },


	  methods: {
	    switchTo: function switchTo(index, item) {
	      var _this = this;

	      if (!item) item = this.items[index];
	      var active = function active() {
	        _this.active = index;
	      };

	      if (item && !item.disabled) {
	        if (this.beforeSwitch) {
	          this.beforeSwitch(function () {
	            active();
	          });
	        } else {
	          active();
	        }
	      }
	    }
	  }
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tooltip = __webpack_require__(38);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Tooltip',
	  mixins: [_tooltip2.default],
	  props: {
	    text: {
	      type: String,
	      required: true
	    }
	  }
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(182), __esModule: true };

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(184), __esModule: true };

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(188), __esModule: true };

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(189), __esModule: true };

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(191), __esModule: true };

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(193), __esModule: true };

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(218);
	module.exports = __webpack_require__(5).Array.from;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	__webpack_require__(36);
	module.exports = __webpack_require__(216);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	__webpack_require__(36);
	module.exports = __webpack_require__(217);

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(220);
	module.exports = __webpack_require__(5).Number.isNaN;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(221);
	module.exports = parseFloat;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(222);
	module.exports = parseInt;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223);
	module.exports = __webpack_require__(5).Object.assign;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224);
	var $Object = __webpack_require__(5).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225);
	module.exports = __webpack_require__(5).Object.freeze;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(226);
	module.exports = __webpack_require__(5).Object.keys;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(228);
	__webpack_require__(227);
	__webpack_require__(229);
	__webpack_require__(230);
	module.exports = __webpack_require__(5).Symbol;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(52);
	module.exports = __webpack_require__(51).f('iterator');

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(16)
	  , toLength  = __webpack_require__(73)
	  , toIndex   = __webpack_require__(215);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(12)
	  , createDesc      = __webpack_require__(25);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(22)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(33);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(21)
	  , ITERATOR   = __webpack_require__(7)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(40);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(19);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(67)
	  , descriptor     = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(44)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(7)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(7)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(22)
	  , toIObject = __webpack_require__(16);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(22)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(33)
	  , toObject = __webpack_require__(34)
	  , IObject  = __webpack_require__(64)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(14)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(19)
	  , getKeys  = __webpack_require__(22);

	module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(33)
	  , createDesc     = __webpack_require__(25)
	  , toIObject      = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(49)
	  , has            = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(63)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(16)
	  , gOPN      = __webpack_require__(68).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(15)
	  , toObject    = __webpack_require__(34)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(9).parseFloat
	  , $trim       = __webpack_require__(72).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(47) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(9).parseInt
	  , $trim     = __webpack_require__(72).trim
	  , ws        = __webpack_require__(47)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(48)
	  , defined   = __webpack_require__(32);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(48)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(19)
	  , get      = __webpack_require__(74);
	module.exports = __webpack_require__(5).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(60)
	  , ITERATOR  = __webpack_require__(7)('iterator')
	  , Iterators = __webpack_require__(21);
	module.exports = __webpack_require__(5).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(61)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(34)
	  , call           = __webpack_require__(202)
	  , isArrayIter    = __webpack_require__(200)
	  , toLength       = __webpack_require__(73)
	  , createProperty = __webpack_require__(197)
	  , getIterFn      = __webpack_require__(74);

	$export($export.S + $export.F * !__webpack_require__(204)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(195)
	  , step             = __webpack_require__(205)
	  , Iterators        = __webpack_require__(21)
	  , toIObject        = __webpack_require__(16);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(65)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(212);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(213);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(207)});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(13), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(24)
	  , meta     = __webpack_require__(66).onFreeze;

	__webpack_require__(70)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(34)
	  , $keys    = __webpack_require__(22);

	__webpack_require__(70)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports) {

	

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(9)
	  , has            = __webpack_require__(15)
	  , DESCRIPTORS    = __webpack_require__(13)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(71)
	  , META           = __webpack_require__(66).KEY
	  , $fails         = __webpack_require__(14)
	  , shared         = __webpack_require__(46)
	  , setToStringTag = __webpack_require__(44)
	  , uid            = __webpack_require__(35)
	  , wks            = __webpack_require__(7)
	  , wksExt         = __webpack_require__(51)
	  , wksDefine      = __webpack_require__(50)
	  , keyOf          = __webpack_require__(206)
	  , enumKeys       = __webpack_require__(198)
	  , isArray        = __webpack_require__(201)
	  , anObject       = __webpack_require__(19)
	  , toIObject      = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(49)
	  , createDesc     = __webpack_require__(25)
	  , _create        = __webpack_require__(67)
	  , gOPNExt        = __webpack_require__(210)
	  , $GOPD          = __webpack_require__(209)
	  , $DP            = __webpack_require__(12)
	  , $keys          = __webpack_require__(22)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(68).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(33).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(42)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('asyncIterator');

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50)('observable');

/***/ },
/* 231 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 232 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"alertClasses\" v-show=\"show\" transition=\"fade\" class=\"alert\"><icon v-if=\"showIcon\" :name=\"_iconName\" :type=\"_type\" class=\"alert__icon\"></icon><slot></slot><div v-if=\"description\" class=\"alert__desc\">{{ description }}</div><button v-if=\"dismissable\" @click=\"show = false\" class=\"close-button\"></button></div>";

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{'is-disabled': disabled}\" :data-separator=\"separator\" class=\"breadcrumbs__item\"><slot></slot></div>";

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<div class=\"breadcrumbs\"><template v-if=\"useVueRouter\"><div v-for=\"item in breadcrumbs\" :data-separator=\"separator\" class=\"breadcrumbs__item\"> <a v-link=\"{path: item.path}\"><icon v-if=\"item.icon\" :name=\"item.icon\"></icon>{{item.title}}</a></div></template><template v-else=\"v-else\"><slot></slot></template></div>";

/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"buttonGroupClass\" class=\"button-group\"><slot></slot></div>";

/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = "<button :class=\"buttonClass\" :type=\"nativeType\" @click=\"handleClick\" class=\"button\"><icon name=\"circle-o-notch\" v-if=\"loading\" loading=\"loading\"></icon><slot v-else=\"v-else\"></slot></button>";

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"dropdownClasses\" class=\"dropdown\"><div v-el:title=\"v-el:title\" @click.prevent=\"toggle\" class=\"dropdown__title\"><slot></slot></div><div :style=\"dropdownStyle\" class=\"dropdown__pane\"><slot name=\"menu\"></slot></div></div>";

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = "<dropdown v-ref:dropdown=\"v-ref:dropdown\" :disabled=\"disabled\" :dropdown-style=\"_dropdownStyle\" class=\"form__select text-field\"><slot><div class=\"form__control-wrapper\"><div v-el:input=\"v-el:input\" :class=\"cascaderClasses\" :tabindex=\"tabindex\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"form__control as-select\"><div class=\"text-field__wrapper\"><div class=\"text-field__inner\"><span v-show=\"showPlaceholder\" class=\"form__placeholder\">{{ placeholder }}</span><span>{{ label }}</span><icon v-show=\"showClear\" name=\"times-circle\" type=\"button\" awesome=\"awesome\" transition=\"fade\" @click.stop.prevent=\"clear\" class=\"form__clear\"></icon></div><div class=\"text-field__addon\"><icon name=\"sort\" awesome=\"awesome\" class=\"icon-inset-control\"></icon></div></div></div></div></slot><div slot=\"menu\" class=\"cascader-menus\"><menu v-for=\"(level, item) of list\" class=\"cascader-menus__menu\"><menu-item v-for=\"child of item\" :disabled=\"child.disabled\" :actived=\"_isActived(level, $index)\" @click.stop.prevent=\"select(level, $index, child)\" class=\"cascader-menus__menu-item\"><span>{{ child[labelKey] }}</span><icon v-if=\"child[childrenKey]\" name=\"angle-right\" awesome=\"awesome\"></icon></menu-item></menu></div></dropdown>";

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<template v-if=\"!button\"><div :class=\"checkboxGroupClass\" class=\"checkbox-group\"><checkbox v-for=\"item of options\" :value.sync=\"value\" :checked-value=\"item[valueKey]\" :checked=\"item.checked\" :disabled=\"disabled || item.disabled\">{{ item[labelKey] }}</checkbox></div></template><template v-else=\"v-else\"><button-group :size=\"size\" :direction=\"direction\"><checkbox button=\"button\" v-for=\"item of options\" :value.sync=\"value\" :checked-value=\"item[valueKey]\" :checked=\"item.checked\" :disabled=\"disabled || item.disabled\" :button-options=\"buttonOptions\">{{ item[labelKey] }}</checkbox></button-group></template>";

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = "<label v-if=\"!button\" class=\"form-checkbox__wrapper form__static\"><span :class=\"checkboxClass\" class=\"form-checkbox\"><span class=\"form-checkbox__inner\"><icon v-show=\"checked\" awesome=\"awesome\" name=\"check\" transition=\"fade\" class=\"form-checkbox__icon\"></icon></span><input v-el:input=\"v-el:input\" type=\"checkbox\" v-model=\"value\" :disabled=\"disabled\" :tabindex=\"tabindex\" :autofocus=\"autofocus\" :true-value=\"checkedValue\" :false-value=\"uncheckedValue\" :value=\"checkedValue\" @focus=\"_onFocus\" @blur=\"_onBlur\" @change=\"_handleChange\" class=\"form-checkbox__input\"/></span><span class=\"form-checkbox__label\"><slot></slot></span></label><v-button v-else=\"v-else\" :disabled=\"disabled\" :checked=\"checked\" :size=\"buttonOptions.size\" :type=\"buttonOptions.type\" :theme=\"buttonOptions.theme\" :shape=\"buttonOptions.shape\"><input v-el:input=\"v-el:input\" type=\"checkbox\" v-model=\"value\" :tabindex=\"tabindex\" :autofocus=\"autofocus\" :disabled=\"disabled\" :true-value=\"checkedValue\" :false-value=\"uncheckedValue\" :value=\"checkedValue\" @change=\"_handleChange\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"form-checkbox__input\"/><slot></slot></v-button>";

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "<dropdown v-ref:dropdown=\"v-ref:dropdown\" :disabled=\"disabled\" :dropdown-style=\"_dropdownStyle\" class=\"form__select text-field\"><slot><div :class=\"selectClasses\" class=\"form__control\"><div class=\"text-field__wrapper\"><div class=\"text-field__inner\"><input v-el:input=\"v-el:input\" readonly=\"readonly\" :disabled=\"disabled\" :tabindex=\"tabindex\" :autofocus=\"autofocus\" :autocomplete=\"off\" :value=\"value\" :placeholder=\"placeholder\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"text-field__input\"/><icon v-show=\"showClear\" name=\"times-circle\" type=\"button\" transition=\"fade\" awesome=\"awesome\" @click.stop.prevent=\"clear\" class=\"form__clear\"></icon></div><div class=\"text-field__addon\"><icon name=\"calendar-o\" awesome=\"awesome\" class=\"icon-inset-control\"></icon></div></div></div></slot><datepicker-pane slot=\"menu\" v-ref:pane=\"v-ref:pane\" :allow-timepicker=\"allowTimepicker\" :day-names=\"dayNames\" :date-filter=\"dateFilter\" :format=\"format\" :is-second=\"isSecond\" :month-names=\"monthNames\" :now-text=\"nowText\" :size=\"size\" :show-adjacent-month=\"showAdjacentMonth\" :today-text=\"todayText\" :value.sync=\"value\" @onchange=\"_onChange\"></datepicker-pane></dropdown>";

/***/ },
/* 243 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"datepickerClasses\" class=\"datepicker\"><div class=\"datepicker__head\"><div class=\"datepicker__title\"><span class=\"datepicker__year\">{{ yearText }}/</span><span class=\"datepicker__month\">{{ monthText }}</span></div><div class=\"datepicker__ctrl\"><icon awesome=\"awesome\" name=\"angle-left\" :class=\"{'is-disabled': !_canChangeLastMonth}\" @click.prevent=\"_changeMonth('up')\" class=\"datepicker__btn\"></icon><icon awesome=\"awesome\" name=\"angle-right\" :class=\"{'is-disabled': !_canChangeNextMonth}\" @click.prevent=\"_changeMonth('down')\" class=\"datepicker__btn\"></icon></div><div v-if=\"allowTimepicker\" class=\"datepicker__time\"><span>{{ hourText }}:</span><span>{{ minuteText }}</span></div></div><div class=\"datepicker__content\"><table :class=\"{'element-invisible': timepickerShow}\" class=\"datepicker__content-inner\"><thead><tr class=\"datepicker__week-range\"><td v-for=\"day in dayNames\" class=\"datepicker__week\">{{ day }}</td></tr></thead><tbody><tr v-for=\"row of dateList.length / 7\" class=\"datepicker__date-range\"><td v-for=\"item of _getDateList(row)\" track-by=\"id\" :is-active=\"_isActive(item.time)\" :is-disabled=\"_isDisabled(item.time)\" :is-in-range=\"_isInRange(item.time)\" :class=\"[{'is-pass': item.isPass, 'is-future': item.isFuture, 'is-today': _isToday(item.time)}]\" @click.stop.prevent=\"_pickDate(item)\" @mouseenter=\"_onHover($event, 'enter', item)\" @mouseleave=\"_onHover($event, 'leave', item)\" class=\"datepicker__day\"><span class=\"datepicker__day-inner\">{{ item.value }}</span></td></tr></tbody></table><div v-if=\"allowTimepicker\" :class=\"{'element-invisible': !timepickerShow}\" class=\"datepicker__content-inner\"><timepicker-pane v-ref:timepicker=\"v-ref:timepicker\" :disabled-hours=\"disabledHours\" :disabled-minutes=\"disabledMinutes\" :disabled-seconds=\"disabledSeconds\" :show-disabled-item=\"showDisabledItem\" :show-seconds=\"showSeconds\" :value=\"date\" @onchange=\"_handleTimeChange\"></timepicker-pane></div></div><div v-if=\"showShortcut\" class=\"datepicker__foot\"><button @click.stop.prevent=\"pickNow\" :class=\"{'is-disabled': !canPickNow}\" class=\"button --primary --flat --tiny --block\">{{ _nowText }}</button></div><div v-if=\"allowTimepicker\" class=\"datepicker__foot text-right\"><button @click.prevent=\"_toggleTimepicker\" class=\"button --primary --flat --tiny\">{{ timepickerShow ? '选择日期' : '选择时间' }}</button><button @click.stop.prevent=\"_done\" class=\"button --primary --outline --tiny\">确定</button></div></div>";

/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "<div class=\"rangepicker\"><div class=\"rangepicker__content\"><datepicker-pane v-ref:from=\"v-ref:from\" :allow-timepicker=\"allowTimepicker\" :can-change-month=\"$_bind(_canChangeMonth, 'from')\" :date-filter=\"dateFilter\" :day-names=\"dayNames\" :disabled-hours=\"disabledHours\" :disabled-minutes=\"disabledMinutes\" :disabled-seconds=\"disabledSeconds\" :format=\"format\" :in-range=\"_inRange\" :is-second=\"isSecond\" :is-active=\"_isActive\" :month-names=\"monthNames\" :now-text=\"nowText\" @onchange=\"_handleChange\" @onhover=\"_onHover\" :show-adjacent-month=\"false\" :show-disabled-item=\"showDisabledItem\" :show-seconds=\"showSeconds\" :show-shortcut=\"false\" :size=\"size\" :today-text=\"todayText\" :value=\"fromMonth\"></datepicker-pane></div><div class=\"rangepicker__content\"><datepicker-pane v-ref:to=\"v-ref:to\" :allow-timepicker=\"allowTimepicker\" :can-change-month=\"$_bind(_canChangeMonth, 'to')\" :date-filter=\"dateFilter\" :day-names=\"dayNames\" :disabled-hours=\"disabledHours\" :disabled-minutes=\"disabledMinutes\" :disabled-seconds=\"disabledSeconds\" :format=\"format\" :in-range=\"_inRange\" :is-active=\"_isActive\" :is-second=\"isSecond\" :month-names=\"monthNames\" :now-text=\"nowText\" @onchange=\"_handleChange\" @onhover=\"_onHover\" :show-adjacent-month=\"false\" :show-disabled-item=\"showDisabledItem\" :show-seconds=\"showSeconds\" :show-shortcut=\"false\" :size=\"size\" :today-text=\"todayText\" :value=\"toMonth\"></datepicker-pane></div><div class=\"rangepicker__foot text-right\"><button @click.prevent=\"gotoToday\" class=\"button --primary --flat --tiny\"> 跳转到今天 </button><button :class=\"{'is-disabled': !canDone}\" @click.prevent=\"_done\" class=\"button --primary --outline --tiny\">确定</button></div></div>";

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "<dropdown v-ref:dropdown=\"v-ref:dropdown\" :disabled=\"disabled\" :dropdown-style=\"_dropdownStyle\" class=\"form__select form__datepicker\"><slot><div :class=\"selectClasses\" class=\"form__control\"><div class=\"text-field__wrapper\"><div class=\"text-field__inner\"><input v-el:input=\"v-el:input\" readonly=\"readonly\" :disabled=\"disabled\" :tabindex=\"tabindex\" :autofocus=\"autofocus\" :autocomplete=\"off\" :value=\"label\" :placeholder=\"placeholder\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"text-field__input\"/><icon v-show=\"showClear\" name=\"times-circle\" type=\"button\" transition=\"fade\" @click.stop.prevent=\"clear\" awesome=\"awesome\" class=\"form__clear\"></icon></div><div class=\"text-field__addon\"><icon name=\"calendar-o\" awesome=\"awesome\" class=\"icon-inset-control\"></icon></div></div></div></slot><rangepicker-pane slot=\"menu\" v-ref:pane=\"v-ref:pane\" :allow-timepicker=\"allowTimepicker\" :date-filter=\"dateFilter\" :day-names=\"dayNames\" :disabled-hours=\"disabledHours\" :disabled-minutes=\"disabledMinutes\" :disabled-seconds=\"disabledSeconds\" :size=\"size\" :format=\"format\" :is-second=\"isSecond\" :month-names=\"monthNames\" :now-text=\"nowText\" @onchange=\"_onChange\" :show-adjacent-month=\"showAdjacentMonth\" :show-disabled-item=\"showDisabledItem\" :show-seconds=\"showSeconds\" :today-text=\"todayText\" :value=\"value\"></rangepicker-pane></dropdown>";

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"formGroupClasses\" class=\"form__group\"><label v-if=\"label\" class=\"form__label\">{{ label }}</label><slot name=\"label\"></slot><div class=\"form__group-wrapper\"><slot></slot></div></div>";

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "<form novalidate=\"novalidate\" :class=\"formClasses\" @submit.prevent=\"_submit\" class=\"form\"><slot></slot></form>";

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "<div v-show=\"_show\" class=\"form__help-text\"><slot><span>{{ _message }}</span></slot></div>";

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = "<icon v-if=\"status === 'info'\" name=\"info\" type=\"primary\" awesome=\"awesome\"></icon><icon v-if=\"status === 'success'\" name=\"check\" type=\"success\" awesome=\"awesome\"></icon><icon v-if=\"status === 'warning'\" name=\"exclamation\" type=\"warning\" awesome=\"awesome\"></icon><icon v-if=\"status === 'alert'\" name=\"times\" type=\"alert\" awesome=\"awesome\"></icon>";

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"inputGroupClass\" class=\"form__input-group\"><div v-if=\"_leftInserted\" class=\"form__control-addon\"><slot name=\"left\"></slot></div><slot></slot><div v-if=\"_rightInserted\" class=\"form__control-addon\"><slot name=\"right\"></slot></div></div>";

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form__input-group\"><div @click.stop.prevent=\"_increase('down')\" :class=\"{'down-disabled': downDisabled}\" class=\"form__control-addon input-number-left\"><icon name=\"minus\" awesome=\"awesome\" type=\"button\"></icon></div><input :class=\"controlClasses\" v-el:input=\"v-el:input\" type=\"text\" autocomplete=\"off\" :autofocus=\"autofocus\" :placeholder=\"placeholder\" :value=\"value\" :disbaled=\"disbaled\" @change=\"_onChange\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"form__control\"/><div @click.stop.prevent=\"_increase('up')\" :class=\"{'up-disabled': upDisabled}\" class=\"form__control-addon input-number-right\"><icon name=\"plus\" awesome=\"awesome\" type=\"button\"></icon></div></div>";

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"controlClasses\" class=\"form__control text-field\"><div class=\"text-field__wrapper\"><div class=\"text-field__addon\"><slot name=\"addon-left\"><feedback-icons :status=\"_status\"></feedback-icons></slot></div><div class=\"text-field__inner\"><template v-if=\"type === 'textarea'\"><textarea v-el:input=\"v-el:input\" :disabled=\"disabled\" v-model=\"_value\" :autofocus=\"autofocus\" @focus=\"_onFocus\" @blur=\"_onBlur\" @change=\"_onChange\" @input=\"_onInput\" :rows=\"rows\" :placeholder=\"placeholder\" class=\"text-field__input\"></textarea></template><template v-else=\"v-else\"><input v-el:input=\"v-el:input\" :type=\"_type\" v-model=\"_value\" :disabled=\"disabled\" :autofocus=\"autofocus\" @focus=\"_onFocus\" @blur=\"_onBlur\" @change=\"_onChange\" @input=\"_onInput\" :placeholder=\"placeholder\" class=\"text-field__input\"/><icon v-show=\"type != 'textarea' &amp;&amp; showClear\" name=\"times-circle\" type=\"button\" awesome=\"awesome\" transition=\"fade\" @click.stop.prevent=\"clear\" class=\"form__clear\"></icon></template></div><div v-if=\"type === 'password'\" class=\"text-field__addon\"><icon :name=\"hidePassword ? 'eye' : 'eye-slash'\" type=\"button\" awesome=\"awesome\" @click.stop.prevent=\"togglePasswordHide\" class=\"icon-inset-control\"></icon></div><div class=\"text-field__addon\"><slot name=\"addon-right\"></slot></div></div></div>";

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "<label :class=\"labelClass\" :style=\"labelStyle\" class=\"form__label\"><span v-if=\"required\" class=\"text-alert\">*</span><span><slot></slot></span></label>";

/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = "<template v-if=\"!button\"><div :class=\"radioGroupClass\" class=\"radio-group\"><radio v-for=\"item of options\" :value.sync=\"value\" :checked-value=\"item[valueKey]\" :checked=\"item.checked\" :disabled=\"disabled || item.disabled\">{{ item[labelKey] }}</radio></div></template><template v-else=\"v-else\"><button-group :size=\"size\" :direction=\"direction\"><radio button=\"button\" v-for=\"item of options\" :value.sync=\"value\" :checked-value=\"item[valueKey]\" :checked=\"item.checked\" :disabled=\"disabled || item.disabled\" :button-options=\"buttonOptions\">{{ item[labelKey] }}</radio></button-group></template>";

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "<label v-if=\"!button\" class=\"form-checkbox__wrapper form__static\"><span :class=\"radioClass\" class=\"form-checkbox\"><span class=\"form-checkbox__inner-radio\"></span><input v-el:input=\"v-el:input\" type=\"radio\" v-model=\"value\" :tabindex=\"tabindex\" :disabled=\"disabled\" :value=\"checkedValue\" @focus=\"_onFocus\" @blur=\"_onBlur\" @change=\"handleChange\" class=\"form-checkbox__input\"/></span><span class=\"form-checkbox__label\"><slot></slot></span></label><v-button v-else=\"v-else\" :disabled=\"disabled\" :checked=\"checked\" :size=\"buttonOptions.size\" :type=\"buttonOptions.type\" :theme=\"buttonOptions.theme\" :shape=\"buttonOptions.shape\"><input v-el:input=\"v-el:input\" type=\"radio\" v-model=\"value\" :disabled=\"disabled\" :value=\"checkedValue\" :tabindex=\"tabindex\" @change=\"handleChange\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"form-checkbox__input\"/><slot></slot></v-button>";

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = "<menu-item :disabled=\"disabled\" :actived=\"actived\" @click=\"select()\"><span v-el:label=\"v-el:label\"><slot>{{ label }}</slot></span></menu-item>";

/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = "<dropdown v-ref:dropdown=\"v-ref:dropdown\" :disabled=\"disabled\" :dropdown-style=\"_dropdownStyle\" class=\"form__select text-field\"><div class=\"form__control-wrapper\"><div v-el:input=\"v-el:input\" :class=\"selectClasses\" :tabindex=\"tabindex\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"form__control as-select\"><div class=\"text-field__wrapper\"><div class=\"text-field__inner\"><span v-show=\"showPlaceholder\" class=\"form__placeholder\">{{ placeholder }}</span><span v-if=\"!multiple\">{{ label }}</span><div v-else=\"v-else\" class=\"form__tags\"><div v-for=\"item of selected\" class=\"form__tag\"><div class=\"form__tag-title\">{{ item[labelKey] || item.label }}</div><icon name=\"times\" awesome=\"awesome\" @click.prevent.stop=\"remove(item)\" class=\"form__tag-close\"></icon></div></div><icon v-show=\"showClear\" name=\"times-circle\" type=\"button\" awesome=\"awesome\" transition=\"fade\" @click.stop.prevent=\"clear\" class=\"form__clear\"></icon></div><div class=\"text-field__addon\"><icon name=\"sort\" awesome=\"awesome\" class=\"icon-inset-control\"></icon></div></div></div></div><div slot=\"menu\" class=\"select-content\"><menu><slot><template v-if=\"options\"><v-option v-for=\"item of _options\" :value=\"item[valueKey]\" :label=\"item[labelKey]\"></v-option></template></slot></menu></div></dropdown>";

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<div :style=\"handleStyle\" @mouseenter=\"tipShow = true\" @mouseleave=\"tipShow = false\" class=\"slider__handle\"><div v-if=\"showTip\" v-show=\"canShowTip\" transition=\"fade\" class=\"slider__tip\">{{ tipFormatter(value) }}</div></div>";

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<div class=\"slider__scale\"><div v-for=\"item of _scales\" :style=\"{left: item.offset + '%'}\" :class=\"{'is-actived': isActived(item.value)}\" class=\"slider__scale-value\"><div v-if=\"showLabel &amp;&amp; item.label\" :style=\"item.style\" class=\"slider__scale-title\"><icon v-if=\"typeof item.label === 'object'\" :name=\"item.label.name\" :type=\"item.label.type\" :awesome=\"item.label.awesome\"></icon><span v-else=\"v-else\">{{ item.label }}</span></div></div></div>";

/***/ },
/* 260 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"wrapperClasses\" class=\"form__slider slider__wrapper\"><slot name=\"icon-left\"></slot><div v-el:slider=\"v-el:slider\" :class=\"sliderClasses\" :tabindex=\"tabindex\" :autofocus=\"autofocus\" @mousedown=\"_onMousedown\" @touchstart=\"_onTouchstart\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"slider\"><handle :offset=\"upperOffset\" :value=\"upperHandle\" :show-tip=\"showTip\" :dragging=\"dragging\" :tip-formatter=\"tipFormatter\" :current-handle=\"currentHandle\" handle=\"upperHandle\"></handle><handle v-if=\"range\" :offset=\"lowerOffset\" :value=\"lowerHandle\" :show-tip=\"showTip\" :dragging=\"dragging\" :tip-formatter=\"tipFormatter\" :current-handle=\"currentHandle\" handle=\"lowerHandle\"></handle><div v-if=\"canShowTrack\" :style=\"trackStyle\" class=\"slider__track\"></div><scale v-if=\"canShowScale\" :min=\"min\" :max=\"max\" :min-label=\"minLabel\" :max-label=\"maxLabel\" :step=\"step\" :scales=\"_scales\" :track-showed=\"canShowTrack\" :value=\"[lowerHandle, upperHandle]\" :show-label=\"showLabel\"></scale></div><slot name=\"icon-right\"></slot></div>";

/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"switchWrapperClass\" class=\"form__switch\"><div :class=\"switchClass\" :tabindex=\"tabindex\" @click=\"handleChange\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"form-switch\"><div class=\"form-switch__toggle\"></div></div></div>";

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"timepickerClasses\" class=\"time-picker\"><div class=\"time-picker__section\"><div class=\"time-picker__title\">hh</div><ul class=\"time-picker__select\"><li v-for=\"_hour of hourList\" v-scroll-active=\"_hour.value === hour\" :class=\"{'is-active': _hour.value === hour, 'is-disabled': _hour.disabled }\" @click.prevent=\"_handleClick($event, 'hour', _hour)\" class=\"time-picker__option\">{{ _formatNumber(_hour.value) }}</li></ul></div><div class=\"time-picker__section\"><div class=\"time-picker__title\">mm</div><ul class=\"time-picker__select\"><li v-for=\"_minute in minuteList\" v-scroll-active=\"_minute.value === minute\" :class=\"{'is-active': _minute.value === minute, 'is-disabled': _minute.disabled}\" @click.prevent=\"_handleClick($event, 'minute', _minute)\" class=\"time-picker__option\">{{ _formatNumber(_minute.value) }}</li></ul></div><div v-if=\"showSeconds\" class=\"time-picker__section\"><div class=\"time-picker__title\">ss</div><ul class=\"time-picker__select\"><li v-for=\"_second in secondList\" v-scroll-active=\"_second.value === second\" :class=\"{'is-active': _second.value === second, 'is-disabled': _second.disabled}\" @click.prevent=\"_handleClick($event, 'second', _second)\" class=\"time-picker__option\">{{ _formatNumber(_second.value) }}</li></ul></div></div>";

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "<dropdown v-ref:dropdown=\"v-ref:dropdown\" :disabled=\"disabled\" :dropdown-style=\"_dropdownStyle\" class=\"form__select text-field\"><div class=\"form__control-wrapper\"><div v-el:input=\"v-el:input\" :class=\"selectClasses\" :tabindex=\"tabindex\" @focus=\"_onFocus\" @blur=\"_onBlur\" class=\"form__control as-select\"><div class=\"text-field__wrapper\"><div class=\"text-field__inner\"><span v-show=\"showPlaceholder\" class=\"form__placeholder\">{{ placeholder }}</span><span v-if=\"!multiple\">{{ label }}</span><div v-else=\"v-else\" class=\"form__tags\"><div v-for=\"item of selected\" class=\"form__tag\"><div class=\"form__tag-title\">{{ item[labelKey] }}</div><icon name=\"times\" @click.prevent.stop=\"remove(item)\" awesome=\"awesome\" class=\"form__tag-close\"></icon></div></div><icon v-show=\"showClear\" name=\"times-circle\" type=\"button\" awesome=\"awesome\" transition=\"fade\" @click.stop.prevent=\"clear\" class=\"form__clear\"></icon></div><div class=\"text-field__addon\"><icon name=\"sort\" awesome=\"awesome\" class=\"icon-inset-control\"></icon></div></div></div></div><div slot=\"menu\" class=\"tree-content\"><slot><tree v-if=\"options\" :items=\"options\"></tree></slot></div></dropdown>";

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"tree\"><li v-for=\"item of items\" class=\"tree__item\"><div class=\"tree__head\"><div v-if=\"hasChildren(item)\" class=\"tree__collapsed\"><icon v-if=\"hasChildren(item)\" awesome=\"awesome\" name=\"caret-down\" :type=\"'button' + (!isCollapsed(item) ? ':rotate-180' : '')\" @click=\"toggle(item)\"></icon></div><div @click=\"select(item)\" :class=\"{'--actived': this.$select.isActived(item), '--disabled': item.disabled}\" class=\"tree__title\">{{ item[$select.labelKey] }}</div></div><template v-if=\"hasChildren(item)\"><tree v-show=\"!isCollapsed(item)\" :items=\"item[$select.childrenKey]\" :level=\"level + 1\" class=\"tree__submenu\"></tree></template></li></ul>";

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classes\" class=\"col\"><slot></slot></div>";

/***/ },
/* 266 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"classes\" class=\"row\"><slot></slot></div>";

/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = "<svg :class=\"iconClasses\" :view-box.camel=\"isAwesome ? viewBox : undefined\" class=\"icon\"><template v-if=\"isAwesome\"><path :d=\"awesomeIcon.d\"></path></template><template v-else=\"v-else\"><use :xlink:href=\"coerceId(name)\"></use></template></svg>";

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = "<li class=\"menu__divider\"></li>";

/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"cssClass\" class=\"menu__item\"><slot></slot></li>";

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = "<ul :class=\"cssClass\" class=\"menu\"><slot></slot></ul>";

/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = "<div transition=\"slide\" v-show=\"show\" class=\"message\"><div class=\"message__body\"><icon :name=\"_iconName\" :color=\"_iconColor\" :loading=\"type === 'loading'\" awesome=\"awesome\" class=\"message__icon\"></icon><span class=\"message__content\">{{ content }}</span></div></div>";

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "<div><modal :show.sync=\"show\" :click-dimmer-to-close=\"false\" @onleave=\"readyDestroy\" hide-header=\"hide-header\" hide-footer=\"hide-footer\" class=\"confirm\"><div class=\"confirm__body\"><icon :name=\"_iconName\" :type=\"_iconColor + ':xlarge'\" awesome=\"awesome\" class=\"confirm__icon\"></icon><span class=\"confirm__title\">{{ title }}</span><p class=\"confirm__content\">{{ content }}</p><div class=\"confirm__footer\"> <b-button @onclick=\"confirm\" theme=\"primary\">{{ okText }}</b-button><b-button v-if=\"!alert\" @onclick=\"close\">{{ cancelText }}</b-button></div></div></modal></div>";

/***/ },
/* 273 */
/***/ function(module, exports) {

	module.exports = "<div v-show=\"show\" @click.self=\"clickDimmerToClose &amp;&amp; close('cancel')\" transition=\"fade\" :class=\"[size ? '--' + size : '']\" class=\"modal\"><div v-show=\"show\" transition=\"slide\" class=\"modal__dialog\"><div v-if=\"!hideHeader\" class=\"modal__header --primary\"><slot name=\"header\"><h5>{{ title }}</h5></slot><button @click=\"close\" class=\"close-button --light\"></button></div><div class=\"modal__content\"><slot name=\"content\"></slot><slot></slot></div><div v-if=\"!hideFooter\" class=\"modal__footer\"><slot name=\"footer\"><b-button theme=\"warning\" @onclick=\"confirm\" :loading=\"loading\">{{ okText }}</b-button><b-button @onclick=\"close\">{{ cancelText }}</b-button></slot></div></div></div>";

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = "<div v-show=\"show\" transition=\"notify\" :class=\"{'with-icon': showIcon}\" class=\"notification\"><icon v-if=\"showIcon\" :name=\"_iconName\" :color=\"_iconColor\" awesome=\"awesome\" class=\"notification__icon\"></icon><button @click=\"close\" class=\"notification__close close-button\"></button><div class=\"notification__body\"><div class=\"notification__title\">{{ title }}</div><div class=\"notification__content\"> {{ content }}</div></div><div v-if=\"showConfirm\" class=\"notification__actions\"><b-button @onclick=\"confirm\" type=\"flat\" :color=\"_iconColor\" size=\"small\">{{ confirmText }}</b-button></div></div>";

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = "<div v-show=\"status != null\" transition=\"fade\" class=\"nprogress\"><div :style=\"barStyles\" class=\"nprogress__bar\"><div class=\"nprogress__peg\"></div></div><icon v-if=\"showSpinner\" name=\"circle-o-notch\" type=\"primary:loader\" class=\"nprogress__spinner\"></icon></div>";

/***/ },
/* 276 */
/***/ function(module, exports) {

	module.exports = "<nav><ul :class=\"paginationClass\" class=\"pagination\"><li :class=\"{ '--disabled': !hasPrev }\" @click=\"goToPrev\" class=\"pagination__item\">{{ prevText }}</li><template v-if=\"!simple\"><template v-for=\"item in items\" track-by=\"id\"><li v-if=\"item.id &gt;= 0\" :class=\"{'--current': item.isCurrent}\" @click=\"goTo(item)\" class=\"pagination__item\">{{ item.value }}</li><li v-if=\"item.id &lt; 0\" class=\"pagination__ellipsis\"></li></template></template><li :class=\"{ '--disabled': !hasNext }\" @click=\"goToNext\" class=\"pagination__item\">{{ nextText }}</li></ul></nav>";

/***/ },
/* 277 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"['--'+position]\" class=\"popover\"><span v-el:trigger=\"v-el:trigger\"><slot></slot></span><div v-show=\"show\" class=\"popover__body\"><div class=\"popover__content\"><div class=\"popover-confirm__message\"><icon name=\"exclamation-circle\" type=\"warning\" awesome=\"awesome\"></icon><div class=\"popover-confirm__title\">{{ title }}</div></div><div class=\"popover-confirm__buttons\"><b-button theme=\"primary\" type=\"flat\" @onclick=\"cancel\" size=\"small\">{{ cancelText }}</b-button><b-button theme=\"primary\" @onclick=\"confirm\" size=\"small\">{{ okText }}</b-button></div></div></div></div>";

/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"['--'+position]\" class=\"popover\"><span v-el:trigger=\"v-el:trigger\"><slot></slot></span><div v-show=\"show\" class=\"popover__body\"><div class=\"popover__title\"><slot name=\"title\">{{ title }}</slot></div><div v-if=\"lazy ? shown : true\" class=\"popover__content\"><slot name=\"content\"></slot><slot></slot></div></div></div>";

/***/ },
/* 279 */
/***/ function(module, exports) {

	module.exports = "<span :style=\"spinStyle\" :class=\"spinClass\" class=\"spin\"><div v-if=\"type === 'cube-grid'\" class=\"sk-cube-grid\"><div class=\"sk-cube sk-cube1\"></div><div class=\"sk-cube sk-cube2\"></div><div class=\"sk-cube sk-cube3\"></div><div class=\"sk-cube sk-cube4\"></div><div class=\"sk-cube sk-cube5\"></div><div class=\"sk-cube sk-cube6\"></div><div class=\"sk-cube sk-cube7\"></div><div class=\"sk-cube sk-cube8\"></div><div class=\"sk-cube sk-cube9\"></div></div><div v-if=\"type === 'wandering-cubes'\" class=\"sk-wandering-cubes\"><div class=\"sk-cube sk-cube1\"></div><div class=\"sk-cube sk-cube2\"></div></div><div v-if=\"type === 'wave'\" class=\"sk-wave\"><div class=\"sk-rect sk-rect1\"></div><div class=\"sk-rect sk-rect2\"></div><div class=\"sk-rect sk-rect3\"></div><div class=\"sk-rect sk-rect4\"></div><div class=\"sk-rect sk-rect5\"></div></div><div v-if=\"type === 'double-bounce'\" class=\"sk-double-bounce\"><div class=\"sk-child sk-double-bounce1\"></div><div class=\"sk-child sk-double-bounce2\"></div></div><div v-if=\"type === 'folding-cube'\" class=\"sk-folding-cube\"><div class=\"sk-cube sk-cube1\"></div><div class=\"sk-cube sk-cube2\"></div><div class=\"sk-cube sk-cube3\"></div><div class=\"sk-cube sk-cube4\"></div></div><div v-if=\"type === 'rotating-plane'\" class=\"sk-rotating-plane\"></div><div v-if=\"text\" class=\"spin__text\">{{ text }}</div></span>";

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"spinnerClass\" class=\"spinner\"><spin :type=\"type\" :light=\"light\" :dark=\"dark\" :size=\"size\" :text=\"text\"></spin><slot></slot></div>";

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "<div :style=\"stepItemStyle\" :class=\"stepItemClass\" class=\"steps-item\"><div v-show=\"!isLast\" class=\"steps-item__tail\"></div><div class=\"steps-item__info\"><div class=\"steps-item__head\"><template v-if=\"icon\"><slot name=\"icon\"><icon :name=\"icon\" :type=\"iconType\" class=\"steps-item__icon --custom\"></icon></slot></template><template v-else=\"v-else\"><icon v-if=\"isFinished\" name=\"check\" awesome=\"awesome\" class=\"steps-item__icon\"></icon><icon v-if=\"isError\" name=\"close\" awesome=\"awesome\" class=\"steps-item__icon\"></icon><span v-if=\"(isWaitting || isProcessing) &amp;&amp; !isError \" class=\"steps-item__num-icon\">{{ index }}</span></template></div><div class=\"steps-item__main\"><div v-if=\"title\" class=\"steps-item__title\"><span class=\"steps-item__title-inner\"> {{ title }}</span></div><div v-if=\"description\" class=\"steps-item__description\">{{ description }}</div></div></div></div>";

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "<div class=\"steps\"><slot></slot></div>";

/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"{'--active': show}\" v-show=\"show\" :transition=\"transition\" class=\"tab__panel\"><template v-if=\"lazy ? shown : true\"><slot></slot></template></div>";

/***/ },
/* 284 */
/***/ function(module, exports) {

	module.exports = "<div><ul class=\"tab__header\"><li v-for=\"item in items\" :class=\"{'--active': $index === active, '--disable': item.disabled}\" @click.prevent=\"switchTo($index, item)\" :disabled=\"item.disabled\" class=\"tab__title\"><a href=\"#\">{{ item.title }}</a></li></ul><div v-el:tab-content=\"v-el:tab-content\" class=\"tab__content\"><slot></slot></div></div>";

/***/ },
/* 285 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"['--' + position]\" class=\"tooltip\"><span v-el:trigger=\"v-el:trigger\" tabindex=\"2\"><slot></slot></span><div v-show=\"show\" class=\"tooltip__tip\">{{ text }}</div></div>";

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(121)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/alert/alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(233)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(122)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/breadcrumbs/breadcrumb-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(234)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(123)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/breadcrumbs/breadcrumbs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(235)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(124)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/button/button-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(236)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(125)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/button/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(237)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(126)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/dropdown/dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(238)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(127)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/cascader/cascader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(239)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(128)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/checkbox/checkbox-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(240)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(130)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/datepicker/datepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(242)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(132)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/datepicker/rangepicker-pane.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(244)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(133)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/datepicker/rangepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(245)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(134)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/form-group/form-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(246)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(135)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/form/form.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(247)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(136)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/help-text/help-text.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(137)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/input/feedback-icons.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(249)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(138)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/input/input-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(250)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(139)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/input/input-number.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(251)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(140)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/input/input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(252)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(141)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/label/label.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(253)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(142)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/radio/radio-group.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(254)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(145)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/select/select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(257)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(146)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/slider/handle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(258)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(147)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/slider/scale.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(259)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(148)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/slider/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(260)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(149)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/switch/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(261)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(150)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/timepicker/pane.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(262)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(151)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/tree-select/tree-select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(263)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(152)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/form/tree-select/tree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(264)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(153)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/grid/cell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(265)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(154)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/grid/grid.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(266)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(155)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/icon/icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(267)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(268)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(156)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/menu/menu-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(269)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(157)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/menu/menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(270)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(158)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/message/message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(271)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(159)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/modal/confirm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(272)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(231)
	__vue_script__ = __webpack_require__(161)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/notification/notification.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(274)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(162)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/nprogress/nprogress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(275)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(163)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/pagination/pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(276)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(164)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/popover/popover-confirm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(277)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(165)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/popover/popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(278)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(166)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/spinner/spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(279)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(167)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/spinner/spinner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(280)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(168)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/steps/step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(281)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(169)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/steps/steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(282)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(170)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/tab/tab-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(283)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(171)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/tab/tab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(284)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(172)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/tooltip/tooltip.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(285)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(232)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ }
/******/ ])
});
;