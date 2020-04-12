/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/snaketron/js/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/snaketron/audio/random-race.mp3":
/*!*********************************************!*\
  !*** ./src/snaketron/audio/random-race.mp3 ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/e842b2e4f63f2d8fc9b8923e01fab3bf-random-race.mp3");

/***/ }),

/***/ "./src/snaketron/audio/random-race.ogg":
/*!*********************************************!*\
  !*** ./src/snaketron/audio/random-race.ogg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/c5ea8cb595ceee31e4e42527b4d36480-random-race.ogg");

/***/ }),

/***/ "./src/snaketron/js/main.ts":
/*!**********************************!*\
  !*** ./src/snaketron/js/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var SceneTitle_1 = __webpack_require__(/*! ./scenes/SceneTitle */ "./src/snaketron/js/scenes/SceneTitle.ts");
var SceneMain_1 = __webpack_require__(/*! ./scenes/SceneMain */ "./src/snaketron/js/scenes/SceneMain.ts");
var SceneOver_1 = __webpack_require__(/*! ./scenes/SceneOver */ "./src/snaketron/js/scenes/SceneOver.ts");
var Model_1 = __webpack_require__(/*! ../../toolbox/js/classes/ModelController/Model */ "./src/toolbox/js/classes/ModelController/Model.ts");
var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
}
var gameConfig_Desktop = {
    title: 'SnakeTron',
    type: Phaser.AUTO,
    scale: {
        width: 480,
        height: 640,
    },
    parent: 'div-phaser-game',
    scene: [SceneTitle_1.default, SceneMain_1.default, SceneOver_1.default]
};
var gameConfig_Mobile = {
    title: 'SnakeTron',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    parent: 'div-phaser-game',
    scene: [SceneTitle_1.default, SceneMain_1.default, SceneOver_1.default]
};
exports.emitter = new Phaser.Events.EventEmitter();
exports.model = new Model_1.default(isMobile > -1, exports.emitter);
exports.game = new Phaser.Game(isMobile > -1 ? gameConfig_Mobile : gameConfig_Desktop);


/***/ }),

/***/ "./src/snaketron/js/scenes/SceneMain.ts":
/*!**********************************************!*\
  !*** ./src/snaketron/js/scenes/SceneMain.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SceneMain = /** @class */ (function (_super) {
    __extends(SceneMain, _super);
    function SceneMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SceneMain;
}(Phaser.Scene));
exports.default = SceneMain;


/***/ }),

/***/ "./src/snaketron/js/scenes/SceneOver.ts":
/*!**********************************************!*\
  !*** ./src/snaketron/js/scenes/SceneOver.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SceneOver = /** @class */ (function (_super) {
    __extends(SceneOver, _super);
    function SceneOver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SceneOver;
}(Phaser.Scene));
exports.default = SceneOver;


/***/ }),

/***/ "./src/snaketron/js/scenes/SceneTitle.ts":
/*!***********************************************!*\
  !*** ./src/snaketron/js/scenes/SceneTitle.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var title_png_1 = __webpack_require__(/*! ../../../toolbox/images/title.png */ "./src/toolbox/images/title.png");
var align_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/align */ "./src/toolbox/js/classes/util/align.ts");
var AlignGrid_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/AlignGrid */ "./src/toolbox/js/classes/util/AlignGrid.ts");
var orange_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/orange.png */ "./src/toolbox/images/ui/buttons/round/orange.png");
var green_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/green.png */ "./src/toolbox/images/ui/buttons/round/green.png");
var FlatButton_1 = __webpack_require__(/*! ../../../toolbox/js/classes/ui/FlatButton */ "./src/toolbox/js/classes/ui/FlatButton.ts");
var Constants_1 = __webpack_require__(/*! ../../../toolbox/js/Constants */ "./src/toolbox/js/Constants.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/snaketron/js/main.ts");
var MediaManager_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/MediaManager */ "./src/toolbox/js/classes/util/MediaManager.ts");
var random_race_mp3_1 = __webpack_require__(/*! ../../audio/random-race.mp3 */ "./src/snaketron/audio/random-race.mp3");
var random_race_ogg_1 = __webpack_require__(/*! ../../audio/random-race.ogg */ "./src/snaketron/audio/random-race.ogg");
var SceneTitle = /** @class */ (function (_super) {
    __extends(SceneTitle, _super);
    function SceneTitle() {
        var _this = _super.call(this, { key: 'SceneTitle' }) || this;
        _this.startGame = function (params) {
            console.log(params);
            _this.scene.start('SceneMain');
        };
        return _this;
    }
    SceneTitle.prototype.preload = function () {
        this.load.image('title', title_png_1.default);
        this.load.image("buttonGreenRound", green_png_1.default);
        this.load.image("buttonOrangeRound", orange_png_1.default);
        this.load.audio('background', [random_race_mp3_1.default, random_race_ogg_1.default]);
    };
    SceneTitle.prototype.create = function () {
        console.log('SceneTitle create');
        this.grid = new AlignGrid_1.default({ rows: 11, columns: 11, scene: this }, this.game.config);
        var title = this.add.image(0, 0, 'title');
        align_1.default.scaleToGameW(title, 0.8, this.game.config);
        this.grid.placeAtIndex(38, title);
        var btnStart = new FlatButton_1.default({
            scene: this,
            key: "buttonGreenRound",
            text: "Start!",
            x: 240,
            y: 100,
            event: Constants_1.default.START_GAME,
            params: 'start_game'
        }, main_1.model);
        this.grid.placeAtIndex(93, btnStart);
        var mediaConfig = {
            scene: this
        };
        this.mediaManager = new MediaManager_1.default(mediaConfig, main_1.model);
        this.mediaManager.setBackgroundMusic('background');
        main_1.emitter.off(Constants_1.default.START_GAME).on(Constants_1.default.START_GAME, this.startGame);
    };
    SceneTitle.prototype.update = function () {
    };
    return SceneTitle;
}(Phaser.Scene));
exports.default = SceneTitle;


/***/ }),

/***/ "./src/toolbox/images/title.png":
/*!**************************************!*\
  !*** ./src/toolbox/images/title.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/688e9e9b5ac5cf4d8086775e7f433364-title.png");

/***/ }),

/***/ "./src/toolbox/images/ui/buttons/round/green.png":
/*!*******************************************************!*\
  !*** ./src/toolbox/images/ui/buttons/round/green.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/fff65d54f8d05fa02bb8b67a0fabcb4b-green.png");

/***/ }),

/***/ "./src/toolbox/images/ui/buttons/round/orange.png":
/*!********************************************************!*\
  !*** ./src/toolbox/images/ui/buttons/round/orange.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/f78f45f153460ba186a809eab87c57b4-orange.png");

/***/ }),

/***/ "./src/toolbox/js/Constants.ts":
/*!*************************************!*\
  !*** ./src/toolbox/js/Constants.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.SET_SCORE = "SET_SCORE";
    Constants.SCORE_UPDATED = "SCORE_UPDATED";
    Constants.UP_POINTS = "UP_POINTS";
    Constants.BUTTON_PRESSED = "BUTTON_PRESSED";
    Constants.START_GAME = "START_GAME";
    Constants.RESTART_GAME = "RESTART_GAME";
    Constants.PLAY_SOUND = "PLAY_SOUND";
    Constants.MUSIC_CHANGED = "MUSIC_CHANGED";
    Constants.TOGGLE_MUSIC = "TOGGLE_MUSIC";
    Constants.TOGGLE_SFX = "TOGGLE_SFX";
    return Constants;
}());
exports.default = Constants;


/***/ }),

/***/ "./src/toolbox/js/classes/ModelController/Model.ts":
/*!*********************************************************!*\
  !*** ./src/toolbox/js/classes/ModelController/Model.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../../Constants */ "./src/toolbox/js/Constants.ts");
var Model = /** @class */ (function () {
    function Model(isMobile, emitter) {
        this._emitter = emitter;
        this._score = 0;
        this._isMobile = isMobile;
        this._soundOn = true;
        this._musicOn = true;
    }
    Object.defineProperty(Model.prototype, "emitter", {
        get: function () {
            return this._emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "gameOver", {
        get: function () {
            return this._gameOver;
        },
        set: function (val) {
            this._gameOver = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "musicOn", {
        get: function () {
            return this._musicOn;
        },
        set: function (val) {
            this._musicOn = val;
            this._emitter.emit(Constants_1.default.MUSIC_CHANGED);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "soundOn", {
        get: function () {
            return this._soundOn;
        },
        set: function (val) {
            this._soundOn = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (val) {
            this._score = val;
            this._emitter.emit(Constants_1.default.SCORE_UPDATED);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Model.prototype, "isMobile", {
        get: function () {
            return this._isMobile;
        },
        enumerable: true,
        configurable: true
    });
    return Model;
}());
exports.default = Model;


/***/ }),

/***/ "./src/toolbox/js/classes/ui/FlatButton.ts":
/*!*************************************************!*\
  !*** ./src/toolbox/js/classes/ui/FlatButton.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FlatButton = /** @class */ (function (_super) {
    __extends(FlatButton, _super);
    function FlatButton(config, model) {
        var _this = _super.call(this, config.scene) || this;
        _this.mouseOver = function () {
            _this.y -= 5;
        };
        _this.mouseOut = function () {
            _this.y += 5;
        };
        _this.pressed = function () {
            if (_this.config.params) {
                _this.emitter.emit(_this.config.event, _this.config.params);
            }
            else {
                _this.emitter.emit(_this.config.event);
            }
        };
        _this.config = config;
        _this.emitter = model.emitter;
        if (!config.scene) {
            console.error("Missing scene");
            return _this;
        }
        if (!config.key) {
            console.error("Missing key");
            return _this;
        }
        _this.scene = config.scene;
        _this.back = _this.scene.add.image(0, 0, config.key);
        _this.add(_this.back);
        if (config.text) {
            if (config.textConfig) {
                _this.text1 = _this.scene.add.text(0, 0, config.text, config.textConfig);
            }
            else {
                _this.text1 = _this.scene.add.text(0, 0, config.text);
            }
            _this.text1.setOrigin(0.5, 0.5);
            _this.add(_this.text1);
        }
        if (config.x) {
            _this.x = config.x;
        }
        if (config.y) {
            _this.y = config.y;
        }
        _this.scene.add.existing(_this);
        if (config.event) {
            _this.back.setInteractive();
            _this.back.on('pointerdown', _this.pressed);
        }
        if (!model.isMobile) {
            _this.back.on('pointerover', _this.mouseOver);
            _this.back.on('pointerout', _this.mouseOut);
        }
        return _this;
    }
    return FlatButton;
}(Phaser.GameObjects.Container));
exports.default = FlatButton;


/***/ }),

/***/ "./src/toolbox/js/classes/util/AlignGrid.ts":
/*!**************************************************!*\
  !*** ./src/toolbox/js/classes/util/AlignGrid.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AlignGrid = /** @class */ (function () {
    function AlignGrid(config, gameConfig) {
        var _this = this;
        this.debug = function () {
            _this.show();
            _this.showNumbers();
        };
        this.show = function () {
            _this.graphics = _this.scene.add.graphics();
            _this.graphics.lineStyle(2, 0xff0000);
            for (var index = 0; index < _this.config.width; index += _this.cw) {
                _this.graphics.moveTo(index, 0);
                _this.graphics.lineTo(index, _this.config.height);
            }
            for (var index = 0; index < _this.config.height; index += _this.ch) {
                _this.graphics.moveTo(0, index);
                _this.graphics.lineTo(_this.config.width, index);
            }
            _this.graphics.strokePath();
        };
        this.showNumbers = function () {
            var count = 0;
            for (var index = 0; index < _this.config.rows; index++) {
                for (var index_1 = 0; index_1 < _this.config.columns; index_1++) {
                    var numText = _this.scene.add.text(0, 0, count.toString(), { color: '#ff0000' });
                    numText.setOrigin(0.5, 0.5);
                    _this.placeAtIndex(count, numText);
                    count++;
                }
            }
        };
        // Place an object in the middle of the defined cell
        this.placeAt = function (x, y, obj) {
            // calc the position based upon the cellwidth & celheight
            var x2 = (_this.cw * x) + (_this.cw / 2);
            var y2 = (_this.ch * y) + (_this.ch / 2);
            obj.x = x2;
            obj.y = y2;
        };
        // Places the object at the given index, counting left to right top to bottom
        this.placeAtIndex = function (index, obj) {
            var y = Math.floor(index / _this.config.columns);
            var x = index - (y * _this.config.columns);
            _this.placeAt(x, y, obj);
        };
        this.config = config;
        if (!config.scene) {
            console.error("No scene provided");
            return;
        }
        if (!config.rows) {
            config.rows = 5;
        }
        if (!config.columns) {
            config.columns = 5;
        }
        if (!config.height) {
            config.height = +gameConfig.height;
        }
        if (!config.width) {
            config.width = +gameConfig.width;
        }
        this.scene = config.scene;
        // cells width
        this.cw = config.width / config.columns;
        // cells height
        this.ch = config.height / config.rows;
    }
    return AlignGrid;
}());
exports.default = AlignGrid;


/***/ }),

/***/ "./src/toolbox/js/classes/util/MediaManager.ts":
/*!*****************************************************!*\
  !*** ./src/toolbox/js/classes/util/MediaManager.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../../Constants */ "./src/toolbox/js/Constants.ts");
var MediaManager = /** @class */ (function () {
    function MediaManager(config, model) {
        var _this = this;
        this.playSound = function (key) {
            if (_this.model.soundOn) {
                var sound = _this.screen.sound.add(key);
                sound.play();
            }
        };
        this.musicChanged = function () {
            if (_this.background) {
                if (_this.model.musicOn) {
                    _this.background.play();
                }
                else {
                    _this.background.stop();
                }
            }
        };
        this.setBackgroundMusic = function (key) {
            console.log(_this.background);
            _this.background = _this.screen.sound.add(key, { volume: 0.5, loop: true });
            _this.musicChanged();
        };
        this.screen = config.scene;
        this.emitter = model.emitter;
        this.model = model;
        this.emitter.on(Constants_1.default.PLAY_SOUND, this.playSound);
        this.emitter.on(Constants_1.default.MUSIC_CHANGED, this.musicChanged);
    }
    return MediaManager;
}());
exports.default = MediaManager;


/***/ }),

/***/ "./src/toolbox/js/classes/util/align.ts":
/*!**********************************************!*\
  !*** ./src/toolbox/js/classes/util/align.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Align = /** @class */ (function () {
    function Align() {
    }
    Align.scaleToGameW = function (obj, pct, gameConfig) {
        obj.displayWidth = +gameConfig.width * pct;
        obj.scaleY = obj.scaleX;
    };
    Align.center = function (obj, gameConfig) {
        this.centerH(obj, gameConfig);
        this.centerV(obj, gameConfig);
    };
    Align.centerH = function (obj, gameConfig) {
        obj.x = +gameConfig.width / 2;
    };
    Align.centerV = function (obj, gameConfig) {
        obj.x = +gameConfig.width / 2;
    };
    return Align;
}());
exports.default = Align;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9hdWRpby9yYW5kb20tcmFjZS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9hdWRpby9yYW5kb20tcmFjZS5vZ2ciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9qcy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZXRyb24vanMvc2NlbmVzL1NjZW5lTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2V0cm9uL2pzL3NjZW5lcy9TY2VuZU92ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9qcy9zY2VuZXMvU2NlbmVUaXRsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9pbWFnZXMvdGl0bGUucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2ltYWdlcy91aS9idXR0b25zL3JvdW5kL2dyZWVuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9pbWFnZXMvdWkvYnV0dG9ucy9yb3VuZC9vcmFuZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL01vZGVsQ29udHJvbGxlci9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL3VpL0ZsYXRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL0FsaWduR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL3V0aWwvTWVkaWFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9hbGlnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUFlLG9GQUF1Qiw0REFBNEQsRTs7Ozs7Ozs7Ozs7O0FDQWxHO0FBQWUsb0ZBQXVCLDREQUE0RCxFOzs7Ozs7Ozs7Ozs7OztBQ0FsRyxzRkFBaUM7QUFDakMsNkdBQTZDO0FBQzdDLDBHQUEyQztBQUMzQywwR0FBMkM7QUFDM0MsNklBQW1FO0FBRW5FLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JELElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFDO0lBQ2YsUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ3BEO0FBRUQsSUFBTSxrQkFBa0IsR0FBaUM7SUFDckQsS0FBSyxFQUFFLFdBQVc7SUFDbEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBQ2pCLEtBQUssRUFBRTtRQUNILEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNELE1BQU0sRUFBRSxpQkFBaUI7SUFDekIsS0FBSyxFQUFFLENBQUMsb0JBQVUsRUFBRSxtQkFBUyxFQUFFLG1CQUFTLENBQUM7Q0FDNUMsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQWlDO0lBQ3BELEtBQUssRUFBRSxXQUFXO0lBQ2xCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUNqQixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7UUFDeEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQzdCO0lBQ0QsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixLQUFLLEVBQUUsQ0FBQyxvQkFBVSxFQUFFLG1CQUFTLEVBQUUsbUJBQVMsQ0FBQztDQUM1QztBQUVZLGVBQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDM0MsYUFBSyxHQUFHLElBQUksZUFBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxlQUFPLENBQUMsQ0FBQztBQUMxQyxZQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQzVGO0lBQXdCLDZCQUFZO0lBQXBDOztJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQ0FGdUIsTUFBTSxDQUFDLEtBQUssR0FFbkM7QUFHRCxrQkFBZSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMekI7SUFBd0IsNkJBQVk7SUFBcEM7O0lBR0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxDQUh1QixNQUFNLENBQUMsS0FBSyxHQUduQztBQUVELGtCQUFlLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x6QixpSEFBeUQ7QUFFekQsMEhBQTJEO0FBQzNELHNJQUFtRTtBQUVuRSxzSkFBdUY7QUFDdkYsbUpBQXFGO0FBQ3JGLHFJQUFtRTtBQUNuRSw0R0FBc0Q7QUFDdEQsOEVBQXlDO0FBRXpDLCtJQUF5RTtBQUV6RSx3SEFBNkQ7QUFDN0Qsd0hBQTZEO0FBRTdEO0lBQXlCLDhCQUFZO0lBSWpDO1FBQUEsWUFDSSxrQkFBTSxFQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUMsQ0FBQyxTQUM3QjtRQTJDTyxlQUFTLEdBQUcsVUFBQyxNQUFXO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ2pDLENBQUM7O0lBOUNELENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLG1CQUFRLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMseUJBQWtCLEVBQUUseUJBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxGLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUMsZUFBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWxDLElBQU0sUUFBUSxHQUFHLElBQUksb0JBQVUsQ0FBQztZQUM1QixLQUFLLEVBQUUsSUFBSTtZQUNYLEdBQUcsRUFBRSxrQkFBa0I7WUFDdkIsSUFBSSxFQUFFLFFBQVE7WUFDZCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sS0FBSyxFQUFFLG1CQUFTLENBQUMsVUFBVTtZQUMzQixNQUFNLEVBQUUsWUFBWTtTQUN2QixFQUFFLFlBQUssQ0FBQyxDQUFDO1FBRVYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLElBQU0sV0FBVyxHQUF3QjtZQUNyQyxLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksc0JBQVksQ0FBQyxXQUFXLEVBQUUsWUFBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuRCxjQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUvRSxDQUFDO0lBRUQsMkJBQU0sR0FBTjtJQUVBLENBQUM7SUFNTCxpQkFBQztBQUFELENBQUMsQ0FyRHdCLE1BQU0sQ0FBQyxLQUFLLEdBcURwQztBQUVELGtCQUFlLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZFMUI7QUFBZSxvRkFBdUIsc0RBQXNELEU7Ozs7Ozs7Ozs7OztBQ0E1RjtBQUFlLG9GQUF1QixzREFBc0QsRTs7Ozs7Ozs7Ozs7O0FDQTVGO0FBQWUsb0ZBQXVCLHVEQUF1RCxFOzs7Ozs7Ozs7Ozs7OztBQ0E3RjtJQUFBO0lBV0EsQ0FBQztJQVYwQixtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qix1QkFBYSxHQUFHLGVBQWUsQ0FBQztJQUNoQyxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qix3QkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ2xDLG9CQUFVLEdBQUcsWUFBWSxDQUFDO0lBQzFCLHNCQUFZLEdBQUcsY0FBYyxDQUFDO0lBQzlCLG9CQUFVLEdBQUcsWUFBWSxDQUFDO0lBQzFCLHVCQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLHNCQUFZLEdBQUcsY0FBYyxDQUFDO0lBQzlCLG9CQUFVLEdBQUcsWUFBWSxDQUFDO0lBQ3JELGdCQUFDO0NBQUE7QUFFRCxrQkFBZSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2J6Qiw4RkFBd0M7QUFFeEM7SUFtREksZUFBWSxRQUFpQixFQUFFLE9BQW1DO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFqREQsc0JBQUksMEJBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFRO2FBSVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQU5ELFVBQWEsR0FBWTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDBCQUFPO2FBS1g7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQVBELFVBQVksR0FBWTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBTUQsc0JBQUksMEJBQU87YUFJWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBTkQsVUFBWSxHQUFZO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksd0JBQUs7YUFLVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBUEQsVUFBVSxHQUFXO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSwyQkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBVUwsWUFBQztBQUFELENBQUM7QUFFRCxrQkFBZSxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RHJCO0lBQXlCLDhCQUE0QjtJQU1qRCxvQkFBWSxNQUF5QixFQUFFLEtBQVk7UUFBbkQsWUFDSSxrQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBZ0R0QjtRQUVPLGVBQVMsR0FBRztZQUNoQixLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBRU8sY0FBUSxHQUFHO1lBQ2YsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUVPLGFBQU8sR0FBRztZQUNkLElBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQzNEO2lCQUNHO2dCQUNBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEM7UUFDTCxDQUFDO1FBaEVHLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUU3QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQztZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7O1NBRWxDO1FBRUQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUM7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztTQUVoQztRQUVELEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUM7WUFDWixJQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUU7aUJBQUs7Z0JBQ0YsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkQ7WUFDRCxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUM7WUFDUixLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUM7WUFDVCxLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFFRCxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFFOUIsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQztTQUM1QztRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3Qzs7SUFFTCxDQUFDO0lBa0JMLGlCQUFDO0FBQUQsQ0FBQyxDQXpFd0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBeUVwRDtBQUVELGtCQUFlLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUUxQjtJQU9JLG1CQUFZLE1BQW1CLEVBQUUsVUFBOEI7UUFBL0QsaUJBMEJDO1FBRU0sVUFBSyxHQUFHO1lBQ1gsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osS0FBSSxDQUFDLFdBQVcsRUFBRTtRQUN0QixDQUFDO1FBRU8sU0FBSSxHQUFHO1lBQ1gsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBRyxLQUFJLENBQUMsRUFBRSxFQUFFO2dCQUM1RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25EO1lBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBRyxLQUFJLENBQUMsRUFBRSxFQUFFO2dCQUM3RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRU8sZ0JBQVcsR0FBRztZQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ25ELEtBQUssSUFBSSxPQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQUssR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFLLEVBQUUsRUFBRTtvQkFDdEQsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFFLENBQUM7b0JBQ2pGLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbEMsS0FBSyxFQUFFLENBQUM7aUJBQ1g7YUFDSjtRQUNMLENBQUM7UUFFRCxvREFBb0Q7UUFDN0MsWUFBTyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxHQUFRO1lBQzVDLHlEQUF5RDtZQUN6RCxJQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQU0sRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFekMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDWCxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFFRCw2RUFBNkU7UUFDdEUsaUJBQVksR0FBRyxVQUFDLEtBQWEsRUFBRSxHQUFRO1lBQzFDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsSUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFNUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUE1RUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUM7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkMsT0FBTztTQUNWO1FBQ0QsSUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNuQjtRQUNELElBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDO1lBQ2YsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQztZQUNkLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQ3RDO1FBQ0QsSUFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUM7WUFDYixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUUxQixjQUFjO1FBQ2QsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEMsZUFBZTtRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFzREwsZ0JBQUM7QUFBRCxDQUFDO0FBRUQsa0JBQWUsU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxRnpCLDhGQUF3QztBQUd4QztJQU1JLHNCQUFZLE1BQTJCLEVBQUUsS0FBWTtRQUFyRCxpQkFNQztRQUVPLGNBQVMsR0FBRyxVQUFDLEdBQVc7WUFDNUIsSUFBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQztnQkFDbEIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEI7UUFDTCxDQUFDO1FBRU8saUJBQVksR0FBRztZQUNuQixJQUFHLEtBQUksQ0FBQyxVQUFVLEVBQUM7Z0JBQ2YsSUFBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQztvQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDMUI7YUFDSjtRQUNMLENBQUM7UUFFTSx1QkFBa0IsR0FBRyxVQUFDLEdBQVc7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUN4RSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQTVCRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLG1CQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXdCTCxtQkFBQztBQUFELENBQUM7QUFFRCxrQkFBZSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFDNUI7SUFBQTtJQXFCQSxDQUFDO0lBcEJVLGtCQUFZLEdBQW5CLFVBQW9CLEdBQVEsRUFBRSxHQUFXLEVBQUUsVUFBOEI7UUFDckUsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRU0sWUFBTSxHQUFiLFVBQWMsR0FBUSxFQUFFLFVBQThCO1FBRWxELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxhQUFPLEdBQWQsVUFBZSxHQUFRLEVBQUUsVUFBOEI7UUFFbkQsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxhQUFPLEdBQWQsVUFBZSxHQUFRLEVBQUUsVUFBOEI7UUFFbkQsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQUVELGtCQUFlLEtBQUssQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3NuYWtldHJvbi9qcy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9lODQyYjJlNGY2M2YyZDhmYzliODkyM2UwMWZhYjNiZi1yYW5kb20tcmFjZS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2M1ZWE4Y2I1OTVjZWVlMzFlNGU0MjUyN2I0ZDM2NDgwLXJhbmRvbS1yYWNlLm9nZ1wiOyIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgU2NlbmVUaXRsZSBmcm9tICcuL3NjZW5lcy9TY2VuZVRpdGxlJztcclxuaW1wb3J0IFNjZW5lTWFpbiBmcm9tICcuL3NjZW5lcy9TY2VuZU1haW4nO1xyXG5pbXBvcnQgU2NlbmVPdmVyIGZyb20gJy4vc2NlbmVzL1NjZW5lT3Zlcic7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi90b29sYm94L2pzL2NsYXNzZXMvTW9kZWxDb250cm9sbGVyL01vZGVsJztcclxuXHJcbmxldCBpc01vYmlsZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihgTW9iaWxlYCk7XHJcbmlmIChpc01vYmlsZSA9PSAtMSl7XHJcbiAgICBpc01vYmlsZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihgVGFibGV0YCk7XHJcbn1cclxuXHJcbmNvbnN0IGdhbWVDb25maWdfRGVza3RvcDogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnU25ha2VUcm9uJyxcclxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogNDgwLFxyXG4gICAgICAgIGhlaWdodDogNjQwLFxyXG4gICAgfSxcclxuICAgIHBhcmVudDogJ2Rpdi1waGFzZXItZ2FtZScsXHJcbiAgICBzY2VuZTogW1NjZW5lVGl0bGUsIFNjZW5lTWFpbiwgU2NlbmVPdmVyXVxyXG59O1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZ19Nb2JpbGU6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogJ1NuYWtlVHJvbicsXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgfSxcclxuICAgIHBhcmVudDogJ2Rpdi1waGFzZXItZ2FtZScsXHJcbiAgICBzY2VuZTogW1NjZW5lVGl0bGUsIFNjZW5lTWFpbiwgU2NlbmVPdmVyXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW1pdHRlciA9IG5ldyBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcigpO1xyXG5leHBvcnQgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoaXNNb2JpbGUgPiAtMSwgZW1pdHRlcik7XHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGlzTW9iaWxlID4gLTEgPyBnYW1lQ29uZmlnX01vYmlsZSA6IGdhbWVDb25maWdfRGVza3RvcCk7IiwiY2xhc3MgU2NlbmVNYWluIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2VuZU1haW47IiwiY2xhc3MgU2NlbmVPdmVyIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2VuZU92ZXI7IiwiaW1wb3J0IHRpdGxlSW1nIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3RpdGxlLnBuZyc7XHJcblxyXG5pbXBvcnQgQWxpZ24gZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3V0aWwvYWxpZ24nO1xyXG5pbXBvcnQgQWxpZ25HcmlkIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL0FsaWduR3JpZCc7XHJcblxyXG5pbXBvcnQgYnV0dG9uT3JhbmdlUm91bmRJbWcgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdWkvYnV0dG9ucy9yb3VuZC9vcmFuZ2UucG5nJztcclxuaW1wb3J0IGJ1dHRvbkdyZWVuUm91bmRJbWcgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdWkvYnV0dG9ucy9yb3VuZC9ncmVlbi5wbmcnO1xyXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdWkvRmxhdEJ1dHRvbic7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBlbWl0dGVyLCBtb2RlbCB9IGZyb20gJy4uL21haW4nO1xyXG5pbXBvcnQgSU1lZGlhTWFuYWdlckNvbmZpZyBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvSU1lZGlhTWFuYWdlckNvbmZpZyc7XHJcbmltcG9ydCBNZWRpYU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3V0aWwvTWVkaWFNYW5hZ2VyJztcclxuXHJcbmltcG9ydCBiYWNrZ3JvdW5kU291bmRtcDMgZnJvbSAnLi4vLi4vYXVkaW8vcmFuZG9tLXJhY2UubXAzJztcclxuaW1wb3J0IGJhY2tncm91bmRTb3VuZG9nZyBmcm9tICcuLi8uLi9hdWRpby9yYW5kb20tcmFjZS5vZ2cnO1xyXG5cclxuY2xhc3MgU2NlbmVUaXRsZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIGdyaWQ6IEFsaWduR3JpZDtcclxuICAgIHByaXZhdGUgbWVkaWFNYW5hZ2VyOiBNZWRpYU1hbmFnZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OiAnU2NlbmVUaXRsZSd9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndGl0bGUnLCB0aXRsZUltZyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGBidXR0b25HcmVlblJvdW5kYCwgYnV0dG9uR3JlZW5Sb3VuZEltZyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGBidXR0b25PcmFuZ2VSb3VuZGAsIGJ1dHRvbk9yYW5nZVJvdW5kSW1nKTtcclxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2JhY2tncm91bmQnLCBbYmFja2dyb3VuZFNvdW5kbXAzLCBiYWNrZ3JvdW5kU291bmRvZ2ddKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NjZW5lVGl0bGUgY3JlYXRlJyk7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEFsaWduR3JpZCh7cm93czogMTEsIGNvbHVtbnM6IDExLCBzY2VuZTogdGhpc30sIHRoaXMuZ2FtZS5jb25maWcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5hZGQuaW1hZ2UoMCwgMCwgJ3RpdGxlJyk7XHJcbiAgICAgICAgQWxpZ24uc2NhbGVUb0dhbWVXKHRpdGxlLCAwLjgsIHRoaXMuZ2FtZS5jb25maWcpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgoMzgsIHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuU3RhcnQgPSBuZXcgRmxhdEJ1dHRvbih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICBrZXk6IFwiYnV0dG9uR3JlZW5Sb3VuZFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlN0YXJ0IVwiLFxyXG4gICAgICAgICAgICB4OiAyNDAsXHJcbiAgICAgICAgICAgIHk6IDEwMCxcclxuICAgICAgICAgICAgZXZlbnQ6IENvbnN0YW50cy5TVEFSVF9HQU1FLFxyXG4gICAgICAgICAgICBwYXJhbXM6ICdzdGFydF9nYW1lJ1xyXG4gICAgICAgIH0sIG1vZGVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkLnBsYWNlQXRJbmRleCg5MywgYnRuU3RhcnQpO1xyXG5cclxuICAgICAgICBjb25zdCBtZWRpYUNvbmZpZzogSU1lZGlhTWFuYWdlckNvbmZpZyA9IHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWVkaWFNYW5hZ2VyID0gbmV3IE1lZGlhTWFuYWdlcihtZWRpYUNvbmZpZywgbW9kZWwpO1xyXG4gICAgICAgIHRoaXMubWVkaWFNYW5hZ2VyLnNldEJhY2tncm91bmRNdXNpYygnYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBlbWl0dGVyLm9mZihDb25zdGFudHMuU1RBUlRfR0FNRSkub24oQ29uc3RhbnRzLlNUQVJUX0dBTUUsIHRoaXMuc3RhcnRHYW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0R2FtZSA9IChwYXJhbXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnU2NlbmVNYWluJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NlbmVUaXRsZTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzY4OGU5ZTliNWFjNWNmNGQ4MDg2Nzc1ZTdmNDMzMzY0LXRpdGxlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZmZmNjVkNTRmOGQwNWZhMDJiYjhiNjdhMGZhYmNiNGItZ3JlZW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mNzhmNDVmMTUzNDYwYmExODZhODA5ZWFiODdjNTdiNC1vcmFuZ2UucG5nXCI7IiwiY2xhc3MgQ29uc3RhbnRze1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTRVRfU0NPUkUgPSBcIlNFVF9TQ09SRVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTQ09SRV9VUERBVEVEID0gXCJTQ09SRV9VUERBVEVEXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVQX1BPSU5UUyA9IFwiVVBfUE9JTlRTXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJVVFRPTl9QUkVTU0VEID0gXCJCVVRUT05fUFJFU1NFRFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTVEFSVF9HQU1FID0gXCJTVEFSVF9HQU1FXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJFU1RBUlRfR0FNRSA9IFwiUkVTVEFSVF9HQU1FXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBMQVlfU09VTkQgPSBcIlBMQVlfU09VTkRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTVVTSUNfQ0hBTkdFRCA9IFwiTVVTSUNfQ0hBTkdFRFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUT0dHTEVfTVVTSUMgPSBcIlRPR0dMRV9NVVNJQ1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUT0dHTEVfU0ZYID0gXCJUT0dHTEVfU0ZYXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50czsiLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi8uLi9Db25zdGFudHNcIjtcclxuXHJcbmNsYXNzIE1vZGVsIHtcclxuICAgIHByaXZhdGUgX2VtaXR0ZXI6IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9pc01vYmlsZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3NvdW5kT246IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9tdXNpY09uOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZ2FtZU92ZXI6IGJvb2xlYW47XHJcblxyXG4gICAgZ2V0IGVtaXR0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXR0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGdhbWVPdmVyKHZhbDogYm9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5fZ2FtZU92ZXIgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lT3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbXVzaWNPbih2YWw6IGJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX211c2ljT24gPSB2YWw7XHJcbiAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KENvbnN0YW50cy5NVVNJQ19DSEFOR0VEKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbXVzaWNPbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdXNpY09uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzb3VuZE9uKHZhbDogYm9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5fc291bmRPbiA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc291bmRPbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRPbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2NvcmUodmFsOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gdmFsO1xyXG4gICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChDb25zdGFudHMuU0NPUkVfVVBEQVRFRCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3JlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc01vYmlsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNNb2JpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoaXNNb2JpbGU6IGJvb2xlYW4sIGVtaXR0ZXI6IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gMDtcclxuICAgICAgICB0aGlzLl9pc01vYmlsZSA9IGlzTW9iaWxlO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kT24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX211c2ljT24gPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbDsiLCJpbXBvcnQgSUZsYXRCdXR0b25Db25maWcgZnJvbSBcIi4uL0lGbGF0QnV0dG9uQ29uZmlnXCI7XHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vTW9kZWxDb250cm9sbGVyL01vZGVsXCI7XHJcblxyXG5jbGFzcyBGbGF0QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgICBwcml2YXRlIGNvbmZpZzogSUZsYXRCdXR0b25Db25maWc7XHJcbiAgICBwcml2YXRlIGJhY2s6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgcHJpdmF0ZSBlbWl0dGVyOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElGbGF0QnV0dG9uQ29uZmlnLCBtb2RlbDogTW9kZWwpIHtcclxuICAgICAgICBzdXBlcihjb25maWcuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBtb2RlbC5lbWl0dGVyO1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5zY2VuZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIHNjZW5lXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighY29uZmlnLmtleSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIGtleVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGNvbmZpZy5zY2VuZTtcclxuICAgICAgICB0aGlzLmJhY2sgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgwLCAwLCBjb25maWcua2V5KTtcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJhY2spO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLnRleHQpe1xyXG4gICAgICAgICAgICBpZihjb25maWcudGV4dENvbmZpZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQxID0gdGhpcy5zY2VuZS5hZGQudGV4dCgwLCAwLCBjb25maWcudGV4dCwgY29uZmlnLnRleHRDb25maWcpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQxID0gdGhpcy5zY2VuZS5hZGQudGV4dCgwLCAwLCBjb25maWcudGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0MS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnRleHQxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNvbmZpZy54KXtcclxuICAgICAgICAgICAgdGhpcy54ID0gY29uZmlnLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcueSl7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IGNvbmZpZy55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5ldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFjay5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2sub24oJ3BvaW50ZXJkb3duJywgdGhpcy5wcmVzc2VkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtb2RlbC5pc01vYmlsZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFjay5vbigncG9pbnRlcm92ZXInLCB0aGlzLm1vdXNlT3Zlcik7XHJcbiAgICAgICAgICAgIHRoaXMuYmFjay5vbigncG9pbnRlcm91dCcsIHRoaXMubW91c2VPdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy55IC09IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZU91dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnkgKz0gNTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXNzZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5jb25maWcucGFyYW1zKXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5jb25maWcuZXZlbnQsIHRoaXMuY29uZmlnLnBhcmFtcylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5jb25maWcuZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxhdEJ1dHRvbjsiLCJpbXBvcnQgSUdyaWRDb25maWcgZnJvbSBcIi4uL0lHcmlkQ29uZmlnXCI7XHJcblxyXG5jbGFzcyBBbGlnbkdyaWQge1xyXG4gICAgcHJpdmF0ZSBjb25maWc6IElHcmlkQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSBjdzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjaDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUdyaWRDb25maWcsIGdhbWVDb25maWc6IFBoYXNlci5Db3JlLkNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICBpZighY29uZmlnLnNjZW5lKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHNjZW5lIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFjb25maWcucm93cyl7XHJcbiAgICAgICAgICAgIGNvbmZpZy5yb3dzID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWNvbmZpZy5jb2x1bW5zKXtcclxuICAgICAgICAgICAgY29uZmlnLmNvbHVtbnMgPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighY29uZmlnLmhlaWdodCl7XHJcbiAgICAgICAgICAgIGNvbmZpZy5oZWlnaHQgPSArZ2FtZUNvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFjb25maWcud2lkdGgpe1xyXG4gICAgICAgICAgICBjb25maWcud2lkdGggPSArZ2FtZUNvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XHJcblxyXG4gICAgICAgIC8vIGNlbGxzIHdpZHRoXHJcbiAgICAgICAgdGhpcy5jdyA9IGNvbmZpZy53aWR0aCAvIGNvbmZpZy5jb2x1bW5zO1xyXG4gICAgICAgIC8vIGNlbGxzIGhlaWdodFxyXG4gICAgICAgIHRoaXMuY2ggPSBjb25maWcuaGVpZ2h0IC8gY29uZmlnLnJvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYnVnID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2hvd051bWJlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvdyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgyLCAweGZmMDAwMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLndpZHRoOyBpbmRleCs9IHRoaXMuY3cpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oaW5kZXgsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhpbmRleCwgdGhpcy5jb25maWcuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbmZpZy5oZWlnaHQ7IGluZGV4Kz0gdGhpcy5jaCkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbygwLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuY29uZmlnLndpZHRoLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dOdW1iZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLnJvd3M7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLmNvbHVtbnM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bVRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDAsIDAsIGNvdW50LnRvU3RyaW5nKCksIHtjb2xvcjogJyNmZjAwMDAnfSApO1xyXG4gICAgICAgICAgICAgICAgbnVtVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUF0SW5kZXgoY291bnQsIG51bVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2UgYW4gb2JqZWN0IGluIHRoZSBtaWRkbGUgb2YgdGhlIGRlZmluZWQgY2VsbFxyXG4gICAgcHVibGljIHBsYWNlQXQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9iajogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gY2FsYyB0aGUgcG9zaXRpb24gYmFzZWQgdXBvbiB0aGUgY2VsbHdpZHRoICYgY2VsaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgeDIgPSAodGhpcy5jdyAqIHgpICsgKHRoaXMuY3cgLyAyKTtcclxuICAgICAgICBjb25zdCB5MiA9ICh0aGlzLmNoICogeSkgKyAodGhpcy5jaCAvIDIpO1xyXG5cclxuICAgICAgICBvYmoueCA9IHgyO1xyXG4gICAgICAgIG9iai55ID0geTI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2VzIHRoZSBvYmplY3QgYXQgdGhlIGdpdmVuIGluZGV4LCBjb3VudGluZyBsZWZ0IHRvIHJpZ2h0IHRvcCB0byBib3R0b21cclxuICAgIHB1YmxpYyBwbGFjZUF0SW5kZXggPSAoaW5kZXg6IG51bWJlciwgb2JqOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuY29uZmlnLmNvbHVtbnMpO1xyXG4gICAgICAgIGNvbnN0IHggPSBpbmRleCAtICh5ICogdGhpcy5jb25maWcuY29sdW1ucyk7XHJcblxyXG4gICAgICAgIHRoaXMucGxhY2VBdCh4LCB5LCBvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGlnbkdyaWQ7IiwiaW1wb3J0IElNZWRpYU1hbmFnZXJDb25maWcgZnJvbSBcIi4uL0lNZWRpYU1hbmFnZXJDb25maWdcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vTW9kZWxDb250cm9sbGVyL01vZGVsXCI7XHJcblxyXG5jbGFzcyBNZWRpYU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzY3JlZW46IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHByaXZhdGUgZW1pdHRlcjogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXI7XHJcbiAgICBwcml2YXRlIG1vZGVsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTWVkaWFNYW5hZ2VyQ29uZmlnLCBtb2RlbDogTW9kZWwpe1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gY29uZmlnLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG1vZGVsLmVtaXR0ZXI7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihDb25zdGFudHMuUExBWV9TT1VORCwgdGhpcy5wbGF5U291bmQpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihDb25zdGFudHMuTVVTSUNfQ0hBTkdFRCwgdGhpcy5tdXNpY0NoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheVNvdW5kID0gKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5tb2RlbC5zb3VuZE9uKXtcclxuICAgICAgICAgICAgY29uc3Qgc291bmQgPSB0aGlzLnNjcmVlbi5zb3VuZC5hZGQoa2V5KTtcclxuICAgICAgICAgICAgc291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11c2ljQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLmJhY2tncm91bmQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vZGVsLm11c2ljT24pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEJhY2tncm91bmRNdXNpYyA9IChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5zY3JlZW4uc291bmQuYWRkKGtleSwge3ZvbHVtZTogMC41LCBsb29wOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5tdXNpY0NoYW5nZWQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVkaWFNYW5hZ2VyOyIsImNsYXNzIEFsaWduIHtcclxuICAgIHN0YXRpYyBzY2FsZVRvR2FtZVcob2JqOiBhbnksIHBjdDogbnVtYmVyLCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWcpe1xyXG4gICAgICAgIG9iai5kaXNwbGF5V2lkdGggPSArZ2FtZUNvbmZpZy53aWR0aCAqIHBjdDtcclxuICAgICAgICBvYmouc2NhbGVZID0gb2JqLnNjYWxlWDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2VudGVyKG9iajogYW55LCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJIKG9iaiwgZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJWKG9iaiwgZ2FtZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNlbnRlckgob2JqOiBhbnksIGdhbWVDb25maWc6IFBoYXNlci5Db3JlLkNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBvYmoueCA9ICtnYW1lQ29uZmlnLndpZHRoIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2VudGVyVihvYmo6IGFueSwgZ2FtZUNvbmZpZzogUGhhc2VyLkNvcmUuQ29uZmlnKVxyXG4gICAge1xyXG4gICAgICAgIG9iai54ID0gK2dhbWVDb25maWcud2lkdGggLyAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGlnbjsiXSwic291cmNlUm9vdCI6IiJ9