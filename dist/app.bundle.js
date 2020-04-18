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

/***/ "./src/snaketron/images/background.jpg":
/*!*********************************************!*\
  !*** ./src/snaketron/images/background.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/38bb8b38596557e53a658a8dc62b5a62-background.jpg");

/***/ }),

/***/ "./src/snaketron/js/classes/CameraManager.ts":
/*!***************************************************!*\
  !*** ./src/snaketron/js/classes/CameraManager.ts ***!
  \***************************************************/
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
var CameraManager = /** @class */ (function (_super) {
    __extends(CameraManager, _super);
    function CameraManager(config, camera) {
        var _this = _super.call(this, config.scene) || this;
        _this.addCameraHints = function () {
            var hints = [
                {
                    x: 400,
                    y: 0,
                    width: 100,
                    height: 5,
                    alpha: 0.5,
                    startDeg: -60,
                    endDeg: -30
                },
                {
                    x: 495,
                    y: 0,
                    width: 5,
                    height: 100,
                    alpha: 0.5,
                    startDeg: -60,
                    endDeg: -30
                },
                {
                    x: 495,
                    y: 150,
                    width: 5,
                    height: 200,
                    alpha: 0.5,
                    startDeg: -30,
                    endDeg: 30
                },
                {
                    x: 400,
                    y: 495,
                    width: 100,
                    height: 5,
                    alpha: 0.5,
                    startDeg: 30,
                    endDeg: 60
                },
                {
                    x: 495,
                    y: 400,
                    width: 5,
                    height: 100,
                    alpha: 0.5,
                    startDeg: 30,
                    endDeg: 60
                },
                {
                    x: 150,
                    y: 495,
                    width: 200,
                    height: 5,
                    alpha: 0.5,
                    startDeg: 60,
                    endDeg: 120
                },
                {
                    x: 0,
                    y: 495,
                    width: 100,
                    height: 5,
                    alpha: 0.5,
                    startDeg: 120,
                    endDeg: 150
                },
                {
                    x: 0,
                    y: 400,
                    width: 5,
                    height: 100,
                    alpha: 0.5,
                    startDeg: 120,
                    endDeg: 150
                },
                {
                    x: 0,
                    y: 150,
                    width: 5,
                    height: 200,
                    alpha: 0.5,
                    startDeg: 150,
                    endDeg: -150,
                    bounds: true
                },
                {
                    // TL Corner Horizontal
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 5,
                    alpha: 0.5,
                    startDeg: -150,
                    endDeg: -120
                }, {
                    // TL Corner Vertical
                    x: 0,
                    y: 0,
                    width: 5,
                    height: 100,
                    alpha: 0.5,
                    startDeg: -150,
                    endDeg: -120
                },
                {
                    x: 150,
                    y: 0,
                    width: 200,
                    height: 5,
                    alpha: 0.5,
                    startDeg: -120,
                    endDeg: -60
                }
            ];
            hints.forEach(function (hint) {
                var hintRect = _this.scene.add.rectangle(hint.x, hint.y, hint.width, hint.height, 0x36ff14, 0.75).setScrollFactor(0).setOrigin(0, 0);
                hintRect.StartDeg = hint.startDeg;
                hintRect.EndDeg = hint.endDeg;
                hintRect.goToBounds = hint.bounds;
                hintRect.setVisible(false);
                _this.cameraHints.add(hintRect);
            });
        };
        // TODO:- Make generic
        _this.objectInCameraViewport = function (obj) {
            var x = _this.camera.midPoint.x - 250;
            var width = _this.camera.midPoint.x + 250;
            var y = _this.camera.midPoint.y - 250;
            var height = _this.camera.midPoint.y + 250;
            var bounds = new Phaser.Geom.Rectangle(x, y, width, height);
            return bounds.contains(obj.x, obj.y);
        };
        _this.showCameraHints = function (show) {
            _this.cameraHints.children.iterate(function (part) {
                part.fillColor = 0x36ff14; // Green
                part.setVisible(show);
            });
        };
        _this.highlightCameraHint = function (angle) {
            _this.cameraHints.children.iterate(function (child) {
                if ((angle > child.StartDeg && angle < child.EndDeg) || (child.goToBounds && (angle < child.EndDeg || angle > child.StartDeg))) {
                    child.setVisible(true);
                }
                else {
                    child.setVisible(false);
                }
            });
        };
        _this.getAngleToTarget = function (head, target) {
            var angleRadian = Phaser.Math.Angle.Between(head.x, head.y, target.x, target.y);
            var angleDeg = angleRadian * 180 / Math.PI;
            return angleDeg;
        };
        _this.updateHints = function (playerHead, target) {
            if (!_this.objectInCameraViewport(target)) {
                console.log('in viewport');
                _this.highlightCameraHint(_this.getAngleToTarget(playerHead, target));
            }
            else {
                _this.showCameraHints(false);
            }
        };
        _this.scene = config.scene;
        _this.camera = camera;
        // Add camera hints before we start moving the camera around with 'follow'
        _this.cameraHints = _this.scene.add.group();
        _this.addCameraHints();
        return _this;
    }
    return CameraManager;
}(Phaser.GameObjects.Container));
exports.default = CameraManager;


/***/ }),

/***/ "./src/snaketron/js/classes/Player.ts":
/*!********************************************!*\
  !*** ./src/snaketron/js/classes/Player.ts ***!
  \********************************************/
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
var TravelDirection_1 = __webpack_require__(/*! ../enums/TravelDirection */ "./src/snaketron/js/enums/TravelDirection.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/snaketron/js/main.ts");
var Constants_1 = __webpack_require__(/*! ../../../toolbox/js/Constants */ "./src/toolbox/js/Constants.ts");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(startIndex, length, scene, grid, gridConfig, gameConfig) {
        var _this = _super.call(this, scene) || this;
        _this._isDead = false;
        _this.addPendingTailPieces = function () {
            if (!_this.addTailPiece) {
                return;
            }
            _this.addTailPiece = false;
            var lastChild = _this.parts.getChildren()[_this.parts.getLength() - 1];
            var rectTail = _this.scene.add.rectangle(0, 0, 20, 20, 0xffffff);
            // Align.scaleToGameW(rectTail, 0.04, this.gameConfig)
            rectTail.gridIndex = lastChild.gridIndex; // the position of what we are going to follow
            rectTail.directionOfTravel = lastChild.directionOfTravel;
            // Calculate the starting position by going int eh opposite direction of current travel
            rectTail.directionOfTravel = _this.getOpposingDirection(lastChild.directionOfTravel);
            rectTail.gridIndex = _this.getNextGridPosition(rectTail);
            rectTail.directionOfTravel = _this.getOpposingDirection(rectTail.directionOfTravel); // Besure to reset travel direction
            _this.grid.placeAtIndex(rectTail.gridIndex, rectTail);
            _this.parts.add(rectTail);
        };
        _this.getOpposingDirection = function (direction) {
            switch (direction) {
                case TravelDirection_1.default.UP:
                    return TravelDirection_1.default.DOWN;
                case TravelDirection_1.default.DOWN:
                    return TravelDirection_1.default.UP;
                case TravelDirection_1.default.LEFT:
                    return TravelDirection_1.default.RIGHT;
                case TravelDirection_1.default.RIGHT:
                    return TravelDirection_1.default.LEFT;
            }
        };
        _this.queuePieceAddition = function () {
            _this.addTailPiece = true;
        };
        _this.setTravelDirection = function (direction) {
            var head = _this.parts.getFirstAlive();
            // Check we cant turn back on ourselves
            if (_this.getOpposingDirection(head.directionOfTravel) !== direction) {
                head.nextTravelDirection = direction;
            }
        };
        _this.movePlayer = function () {
            // Always start with the head
            var previousPart = _this.parts.getFirstAlive();
            _this.parts.children.iterate(function (child) {
                // Should we be changing direction?
                child.directionOfTravel = child.nextTravelDirection || child.directionOfTravel || previousPart.directionOfTravel;
                var nextPosition = _this.getNextGridPosition(child);
                _this.grid.placeAtIndex(nextPosition, child);
                child.gridIndex = nextPosition;
                // See if the part in front of us is going a different way, and follow them
                child.nextTravelDirection = previousPart.directionOfTravel;
                // So any other parts can follow us
                previousPart = child;
            });
            // After we have moved, add tail pieces
            _this.addPendingTailPieces();
        };
        _this.kill = function (callback) {
            _this._isDead = true;
            _this.scene.tweens.add({
                targets: _this.parts.getChildren(),
                duration: 1000,
                y: main_1.game.config.height,
                angle: -270,
                onComplete: callback,
                completeDelay: 1000
            });
        };
        _this.getNextGridPosition = function (part) {
            var rows = _this.gridConfig.rows;
            var columns = _this.gridConfig.columns;
            switch (part.directionOfTravel) {
                case TravelDirection_1.default.RIGHT: {
                    var nextPosition = part.gridIndex + 1;
                    if (Math.floor(nextPosition / columns) > Math.floor(part.gridIndex / columns)) {
                        nextPosition -= columns;
                    }
                    return nextPosition;
                }
                case TravelDirection_1.default.DOWN: {
                    var nextPosition = part.gridIndex + rows;
                    if (Math.floor(nextPosition / rows) >= rows) {
                        nextPosition -= rows * columns;
                    }
                    return nextPosition;
                }
                case TravelDirection_1.default.UP: {
                    var nextPosition = part.gridIndex - rows;
                    if (Math.floor(nextPosition / rows) < 0) {
                        nextPosition += rows * columns;
                    }
                    return nextPosition;
                }
                case TravelDirection_1.default.LEFT: {
                    var nextPosition = part.gridIndex - 1;
                    if (Math.floor(nextPosition / columns) < Math.floor(part.gridIndex / columns)) {
                        nextPosition += columns;
                    }
                    return nextPosition;
                }
            }
        };
        _this.checkPlayerCollision = function (foodTarget) {
            var headIndex = _this.currentPlayersHeadPosition;
            _this.checkPlayerCollisionWithFood(headIndex, foodTarget);
            _this.checkPlayerCollisionWithSelfSnake(headIndex, _this.positionWithoutHead);
        };
        // Check if the player has collided with food, and eat it if necessary
        _this.checkPlayerCollisionWithFood = function (headIndex, foodTarget) {
            if (foodTarget && headIndex > -1) {
                if (headIndex == foodTarget.gridIndex) {
                    // OM NOM NOM NOM
                    _this.queuePieceAddition();
                    main_1.emitter.emit(Constants_1.default.FOOD_EATEN, foodTarget);
                    main_1.emitter.emit(Constants_1.default.UP_POINTS, 1);
                }
            }
        };
        _this.checkPlayerCollisionWithSelfSnake = function (headIndex, snake) {
            if (snake.indexOf(headIndex) > -1) {
                // uh oh! We dead.
                // Fire an event or sumin
                // this.scene.camera.shake(250);
                _this.kill(function () {
                    // Have finished animating the player
                    _this.scene.scene.start("SceneOver");
                });
            }
        };
        _this.scene = scene;
        _this.parts = _this.scene.add.group();
        _this.grid = grid;
        _this.gridConfig = gridConfig;
        _this.gameConfig = gameConfig;
        var rectHead = _this.scene.add.rectangle(0, 0, 20, 20, 0xffffff);
        // Align.scaleToGameW(rectHead, 0.04, gameConfig)
        grid.placeAtIndex(startIndex, rectHead);
        rectHead.gridIndex = startIndex;
        rectHead.directionOfTravel = TravelDirection_1.default.RIGHT;
        _this.parts.add(rectHead);
        for (var index = 1; index < length; index++) {
            var rectTail = _this.scene.add.rectangle(0, 0, 20, 20, 0xffffff);
            // Align.scaleToGameW(rectTail, 0.04, gameConfig)
            var positionTail = startIndex - index;
            rectTail.gridIndex = positionTail;
            _this.grid.placeAtIndex(startIndex - index, rectTail); // Head is on  the right, tail left so - the index
            _this.parts.add(rectTail);
        }
        return _this;
    }
    Object.defineProperty(Player.prototype, "isDead", {
        get: function () {
            return this._isDead;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "head", {
        get: function () {
            return this.parts.getFirstAlive();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "currentPlayersHeadPosition", {
        get: function () {
            return this.head.gridIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "fullPosition", {
        get: function () {
            // Return an array with the current index of all parts
            return this.parts.children.getArray().map(function (part) {
                return part.gridIndex;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "positionWithoutHead", {
        get: function () {
            var fullPosition = this.fullPosition;
            fullPosition.shift();
            return fullPosition;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}(Phaser.GameObjects.Container));
exports.default = Player;


/***/ }),

/***/ "./src/snaketron/js/enums/TravelDirection.ts":
/*!***************************************************!*\
  !*** ./src/snaketron/js/enums/TravelDirection.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TravelDirection;
(function (TravelDirection) {
    TravelDirection[TravelDirection["RIGHT"] = 1] = "RIGHT";
    TravelDirection[TravelDirection["DOWN"] = 2] = "DOWN";
    TravelDirection[TravelDirection["LEFT"] = 3] = "LEFT";
    TravelDirection[TravelDirection["UP"] = 4] = "UP";
})(TravelDirection || (TravelDirection = {}));
exports.default = TravelDirection;


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
var Controller_1 = __webpack_require__(/*! ../../toolbox/js/classes/ModelController/Controller */ "./src/toolbox/js/classes/ModelController/Controller.ts");
var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
}
var gameConfig_Desktop = {
    title: 'SnakeTron',
    type: Phaser.AUTO,
    scale: {
        width: 1000,
        height: 1000,
    },
    transparent: true,
    backgroundColor: '#000000',
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
exports.controller = new Controller_1.default(exports.model);
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
var AlignGrid_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/AlignGrid */ "./src/toolbox/js/classes/util/AlignGrid.ts");
var Player_1 = __webpack_require__(/*! ../classes/Player */ "./src/snaketron/js/classes/Player.ts");
var TravelDirection_1 = __webpack_require__(/*! ../enums/TravelDirection */ "./src/snaketron/js/enums/TravelDirection.ts");
var ScoreBox_1 = __webpack_require__(/*! ../../../toolbox/js/classes/components/ScoreBox */ "./src/toolbox/js/classes/components/ScoreBox.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/snaketron/js/main.ts");
var Constants_1 = __webpack_require__(/*! ../../../toolbox/js/Constants */ "./src/toolbox/js/Constants.ts");
var background_jpg_1 = __webpack_require__(/*! ../../images/background.jpg */ "./src/snaketron/images/background.jpg");
var CameraManager_1 = __webpack_require__(/*! ../classes/CameraManager */ "./src/snaketron/js/classes/CameraManager.ts");
var SceneMain = /** @class */ (function (_super) {
    __extends(SceneMain, _super);
    function SceneMain() {
        var _this = _super.call(this, 'SceneMain') || this;
        _this.gridCellHeight = 20;
        _this.gridCellWidth = 20;
        _this.previousTime = 0;
        _this.gameSpeed = 100; // ms between moving the player
        _this.shouldAddFood = false;
        _this.foodEaten = function (food) {
            _this.removeFoodItem(food);
            _this.shouldAddFood = true;
        };
        // Can be made generic
        _this.removeFoodItem = function (food) {
            food.destroy();
        };
        _this.getRandomIndex = function () {
            var placement = Math.floor(Math.random() * (_this.gridConfig.rows * _this.gridConfig.columns));
            var occupiedSpace = _this.player.fullPosition;
            // Keep going until we find an available index
            // TODO:- What if there are NO available squares? There will be a better way to do this to consciously look instead
            // of recursively drilling until we hit something. TODO:- 
            if (occupiedSpace.indexOf(placement) > -1) {
                return _this.getRandomIndex();
            }
            return placement;
        };
        _this.addPendingFood = function () {
            if (!_this.shouldAddFood) {
                return;
            }
            _this.shouldAddFood = false;
            var food = _this.add.rectangle(0, 0, 10, 10, 0xffffff);
            var placement = _this.getRandomIndex();
            // Align.scaleToGameW(food, 0.02, this.game.config);
            _this.grid.placeAtIndex(placement, food);
            food.gridIndex = placement;
            _this.food = food;
        };
        return _this;
    }
    SceneMain.prototype.preload = function () {
        this.load.image('background', background_jpg_1.default);
    };
    SceneMain.prototype.create = function () {
        this.back = this.add.image(0, 0, 'background');
        this.back.setOrigin(0, 0);
        main_1.model.score = 0;
        var columns = +this.game.config.width / this.gridCellWidth;
        var rows = +this.game.config.height / this.gridCellHeight;
        // Grid
        this.gridConfig = {
            rows: rows,
            columns: columns,
            scene: this
        };
        this.grid = new AlignGrid_1.default(this.gridConfig, this.game.config);
        // Score Box
        this.scoreBox = new ScoreBox_1.default({ scene: this, x: 465, y: 25, originX: 1, originY: 1 }, main_1.model); // 1 zoom
        // Player
        this.player = new Player_1.default(90, 5, this, this.grid, this.gridConfig, this.game.config);
        // Cameras
        this.cameras.main.setBounds(0, 0, +this.game.config.width, +this.game.config.height);
        // Setup CameraManager
        this.cameraManager = new CameraManager_1.default({ scene: this }, this.cameras.main);
        this.cameras.main.startFollow(this.player.head, true);
        this.cameras.main.setLerp(0.1, 0.1);
        this.cameras.main.setViewport((+this.game.config.width - 500) / 2, (+this.game.config.height - 500) / 2, 500, 500);
        this.previousTime = this.game.getTime();
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.keyboardInput_H = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        this.shouldAddFood = true;
        main_1.emitter.off(Constants_1.default.FOOD_EATEN).on(Constants_1.default.FOOD_EATEN, this.foodEaten);
        // this.grid.debug();
    };
    SceneMain.prototype.update = function (time, delta) {
        if (this.player.isDead) {
            return;
        }
        // Only move if we have hit the epoch 
        if (Math.floor(time) - this.gameSpeed > this.previousTime) {
            this.previousTime = Math.floor(time);
            this.player.movePlayer();
            this.player.checkPlayerCollision(this.food);
            this.addPendingFood();
            this.cameraManager.updateHints(this.player.head, this.food);
        }
        // User can tell it to change direction whenever they want
        if (this.cursorKeys.up.isDown) {
            this.player.setTravelDirection(TravelDirection_1.default.UP);
        }
        if (this.cursorKeys.down.isDown) {
            this.player.setTravelDirection(TravelDirection_1.default.DOWN);
        }
        if (this.cursorKeys.left.isDown) {
            this.player.setTravelDirection(TravelDirection_1.default.LEFT);
        }
        if (this.cursorKeys.right.isDown) {
            this.player.setTravelDirection(TravelDirection_1.default.RIGHT);
        }
        // TODO:- Activate the powerup
        // if (this.keyboardInput_H.isDown){
        //     this.showCameraHints(true);
        // }
        // DEBUG:- Add tail piece
        if (this.cursorKeys.space.isDown) {
            this.player.queuePieceAddition();
        }
        // DEBUG:- Add food piece
        if (this.cursorKeys.shift.isDown) {
            this.shouldAddFood = true;
        }
    };
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
var title_png_1 = __webpack_require__(/*! ../../../toolbox/images/title.png */ "./src/toolbox/images/title.png");
var AlignGrid_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/AlignGrid */ "./src/toolbox/js/classes/util/AlignGrid.ts");
var align_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/align */ "./src/toolbox/js/classes/util/align.ts");
var green_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/green.png */ "./src/toolbox/images/ui/buttons/round/green.png");
var orange_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/orange.png */ "./src/toolbox/images/ui/buttons/round/orange.png");
var FlatButton_1 = __webpack_require__(/*! ../../../toolbox/js/classes/ui/FlatButton */ "./src/toolbox/js/classes/ui/FlatButton.ts");
var Constants_1 = __webpack_require__(/*! ../../../toolbox/js/Constants */ "./src/toolbox/js/Constants.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/snaketron/js/main.ts");
var SceneOver = /** @class */ (function (_super) {
    __extends(SceneOver, _super);
    function SceneOver() {
        var _this = _super.call(this, 'SceneOver') || this;
        _this.restartGame = function (params) {
            console.log(params);
            _this.scene.start('SceneMain');
        };
        return _this;
    }
    SceneOver.prototype.preload = function () {
        this.load.image('title', title_png_1.default);
        this.load.image("buttonGreenRound", green_png_1.default);
        this.load.image("buttonOrangeRound", orange_png_1.default);
    };
    SceneOver.prototype.create = function () {
        this.grid = new AlignGrid_1.default({ rows: 11, columns: 11, scene: this }, this.game.config);
        var title = this.add.image(0, 0, 'title');
        align_1.default.scaleToGameW(title, 0.8, this.game.config);
        this.grid.placeAtIndex(38, title);
        var btnStart = new FlatButton_1.default({
            scene: this,
            key: "buttonGreenRound",
            text: "Play Again.",
            x: 240,
            y: 100,
            event: Constants_1.default.RESTART_GAME,
            params: 'restart_game'
        }, main_1.model);
        this.grid.placeAtIndex(93, btnStart);
        main_1.emitter.off(Constants_1.default.RESTART_GAME).on(Constants_1.default.RESTART_GAME, this.restartGame);
        this.scene.stop('SceneMain');
    };
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
var green_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/toggles/green.png */ "./src/toolbox/images/ui/toggles/green.png");
var sfx_off_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/icons/sfx_off.png */ "./src/toolbox/images/ui/icons/sfx_off.png");
var sfx_on_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/icons/sfx_on.png */ "./src/toolbox/images/ui/icons/sfx_on.png");
var music_on_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/icons/music_on.png */ "./src/toolbox/images/ui/icons/music_on.png");
var music_off_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/icons/music_off.png */ "./src/toolbox/images/ui/icons/music_off.png");
var align_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/align */ "./src/toolbox/js/classes/util/align.ts");
var AlignGrid_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/AlignGrid */ "./src/toolbox/js/classes/util/AlignGrid.ts");
var orange_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/orange.png */ "./src/toolbox/images/ui/buttons/round/orange.png");
var green_png_2 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/green.png */ "./src/toolbox/images/ui/buttons/round/green.png");
var FlatButton_1 = __webpack_require__(/*! ../../../toolbox/js/classes/ui/FlatButton */ "./src/toolbox/js/classes/ui/FlatButton.ts");
var Constants_1 = __webpack_require__(/*! ../../../toolbox/js/Constants */ "./src/toolbox/js/Constants.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/snaketron/js/main.ts");
var MediaManager_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/MediaManager */ "./src/toolbox/js/classes/util/MediaManager.ts");
var random_race_mp3_1 = __webpack_require__(/*! ../../audio/random-race.mp3 */ "./src/snaketron/audio/random-race.mp3");
var random_race_ogg_1 = __webpack_require__(/*! ../../audio/random-race.ogg */ "./src/snaketron/audio/random-race.ogg");
var SoundButtons_1 = __webpack_require__(/*! ../../../toolbox/js/classes/ui/SoundButtons */ "./src/toolbox/js/classes/ui/SoundButtons.ts");
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
        this.load.image("buttonGreenRound", green_png_2.default);
        this.load.image("buttonOrangeRound", orange_png_1.default);
        this.load.audio('background', [random_race_mp3_1.default, random_race_ogg_1.default]);
        this.load.image("toggleBack", green_png_1.default);
        this.load.image("sfxOff", sfx_off_png_1.default);
        this.load.image("sfxOn", sfx_on_png_1.default);
        this.load.image("musicOn", music_on_png_1.default);
        this.load.image("musicOff", music_off_png_1.default);
    };
    SceneTitle.prototype.create = function () {
        console.log('SceneTitle create');
        this.grid = new AlignGrid_1.default({ rows: 11, columns: 11, scene: this }, this.game.config);
        this.soundButtons = new SoundButtons_1.default({ scene: this, gameConfig: this.game.config }, main_1.model);
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

/***/ "./src/toolbox/images/ui/icons/music_off.png":
/*!***************************************************!*\
  !*** ./src/toolbox/images/ui/icons/music_off.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/fbc17613093d510acc15f6c5335e675f-music_off.png");

/***/ }),

/***/ "./src/toolbox/images/ui/icons/music_on.png":
/*!**************************************************!*\
  !*** ./src/toolbox/images/ui/icons/music_on.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/361e510909df0343d4fc7c5222e55dea-music_on.png");

/***/ }),

/***/ "./src/toolbox/images/ui/icons/sfx_off.png":
/*!*************************************************!*\
  !*** ./src/toolbox/images/ui/icons/sfx_off.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/3fe8dff75558887c93ce3e41d5de40c7-sfx_off.png");

/***/ }),

/***/ "./src/toolbox/images/ui/icons/sfx_on.png":
/*!************************************************!*\
  !*** ./src/toolbox/images/ui/icons/sfx_on.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/50fa8627f26f9a28c8b68b035c287b54-sfx_on.png");

/***/ }),

/***/ "./src/toolbox/images/ui/toggles/green.png":
/*!*************************************************!*\
  !*** ./src/toolbox/images/ui/toggles/green.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/a159891f2737e8d5b7cebfd952b3a774-green.png");

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
    Constants.FOOD_EATEN = "FOOD_EATEN";
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

/***/ "./src/toolbox/js/classes/ModelController/Controller.ts":
/*!**************************************************************!*\
  !*** ./src/toolbox/js/classes/ModelController/Controller.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(/*! ../../Constants */ "./src/toolbox/js/Constants.ts");
var Controller = /** @class */ (function () {
    function Controller(model) {
        var _this = this;
        this.setScore = function (score) {
            _this.model.score = score;
        };
        this.upPoints = function (points) {
            var newScore = _this.model.score + points;
            _this.model.score = newScore;
        };
        this.toggleMusic = function (val) {
            _this.model.musicOn = val;
        };
        this.toggleSfx = function (val) {
            _this.model.soundOn = val;
        };
        this.model = model;
        this.emitter = model.emitter;
        this.emitter.on(Constants_1.default.SET_SCORE, this.setScore);
        this.emitter.on(Constants_1.default.UP_POINTS, this.upPoints);
        this.emitter.on(Constants_1.default.TOGGLE_MUSIC, this.toggleMusic);
        this.emitter.on(Constants_1.default.TOGGLE_SFX, this.toggleSfx);
    }
    return Controller;
}());
exports.default = Controller;


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

/***/ "./src/toolbox/js/classes/components/ScoreBox.ts":
/*!*******************************************************!*\
  !*** ./src/toolbox/js/classes/components/ScoreBox.ts ***!
  \*******************************************************/
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
var Constants_1 = __webpack_require__(/*! ../../Constants */ "./src/toolbox/js/Constants.ts");
;
var ScoreBox = /** @class */ (function (_super) {
    __extends(ScoreBox, _super);
    function ScoreBox(config, model) {
        var _this = _super.call(this, config.scene) || this;
        _this.scoreUpdated = function () {
            if (_this.text1 && !_this.model.gameOver) {
                _this.text1.setText("SCORE:" + _this.model.score);
            }
        };
        _this.model = model;
        _this.scene = config.scene;
        _this.text1 = _this.scene.add.text(config.x || 0, config.y || 0, "SCORE:0");
        _this.text1.setOrigin(config.originX || 0.5, config.originY || 0.5);
        _this.text1.setScrollFactor(0).setFontSize(12);
        // this.add(this.text1);
        // this.scene.add.existing(this);
        model.emitter.off(Constants_1.default.SCORE_UPDATED).on(Constants_1.default.SCORE_UPDATED, _this.scoreUpdated);
        return _this;
    }
    return ScoreBox;
}(Phaser.GameObjects.Container));
exports.default = ScoreBox;


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

/***/ "./src/toolbox/js/classes/ui/SoundButtons.ts":
/*!***************************************************!*\
  !*** ./src/toolbox/js/classes/ui/SoundButtons.ts ***!
  \***************************************************/
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
var ToggleButton_1 = __webpack_require__(/*! ./ToggleButton */ "./src/toolbox/js/classes/ui/ToggleButton.ts");
var Constants_1 = __webpack_require__(/*! ../../Constants */ "./src/toolbox/js/Constants.ts");
var SoundButtons = /** @class */ (function (_super) {
    __extends(SoundButtons, _super);
    function SoundButtons(config, model) {
        var _this = _super.call(this, config.scene) || this;
        _this.model = model;
        _this.scene = config.scene;
        var musicToggleButton = new ToggleButton_1.default({
            gameConfig: config.gameConfig,
            backKey: 'toggleBack',
            offIcon: 'musicOff',
            onIcon: 'musicOn',
            scene: config.scene,
            value: true,
            event: Constants_1.default.TOGGLE_MUSIC,
            x: 240,
            y: 450
        }, _this.model.emitter);
        var sfxToggleButton = new ToggleButton_1.default({
            gameConfig: config.gameConfig,
            backKey: 'toggleBack',
            offIcon: 'sfxOff',
            onIcon: 'sfxOn',
            scene: config.scene,
            value: true,
            event: Constants_1.default.TOGGLE_SFX,
            x: 240,
            y: 450
        }, _this.model.emitter);
        _this.add(musicToggleButton);
        _this.add(sfxToggleButton);
        musicToggleButton.y = musicToggleButton.height / 2;
        musicToggleButton.x = musicToggleButton.width / 2;
        sfxToggleButton.x = +config.gameConfig.width - (sfxToggleButton.width / 2);
        sfxToggleButton.y = musicToggleButton.y;
        if (!model.musicOn) {
            musicToggleButton.toggle();
        }
        if (!model.soundOn) {
            sfxToggleButton.toggle();
        }
        _this.scene.add.existing(_this);
        return _this;
    }
    return SoundButtons;
}(Phaser.GameObjects.Container));
exports.default = SoundButtons;


/***/ }),

/***/ "./src/toolbox/js/classes/ui/ToggleButton.ts":
/*!***************************************************!*\
  !*** ./src/toolbox/js/classes/ui/ToggleButton.ts ***!
  \***************************************************/
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
var align_1 = __webpack_require__(/*! ../util/align */ "./src/toolbox/js/classes/util/align.ts");
var ToggleButton = /** @class */ (function (_super) {
    __extends(ToggleButton, _super);
    function ToggleButton(config, emitter) {
        var _this = _super.call(this, config.scene) || this;
        _this.toggle = function () {
            _this.value = !_this.value;
            _this.setIcons();
            if (_this.event) {
                _this.emitter.emit(_this.event, _this.value);
            }
        };
        _this.setIcons = function () {
            _this.onIcon.visible = _this.value;
            _this.offIcon.visible = !_this.value;
        };
        _this.config = config;
        _this.scene = config.scene;
        _this.emitter = emitter;
        _this.back = _this.scene.add.image(0, 0, config.backKey);
        _this.onIcon = _this.scene.add.image(0, 0, config.onIcon);
        _this.offIcon = _this.scene.add.image(0, 0, config.offIcon);
        align_1.default.scaleToGameW(_this.back, 0.1, config.gameConfig);
        align_1.default.scaleToGameW(_this.onIcon, 0.05, config.gameConfig);
        align_1.default.scaleToGameW(_this.offIcon, 0.05, config.gameConfig);
        _this.add(_this.back);
        _this.add(_this.onIcon);
        _this.add(_this.offIcon);
        _this.value = config.value;
        if (config.event) {
            _this.event = config.event;
        }
        _this.setIcons();
        _this.back.setInteractive();
        _this.back.on('pointerdown', _this.toggle);
        if (config.x) {
            _this.x = config.x;
        }
        if (config.y) {
            _this.y = config.y;
        }
        _this.setSize(_this.back.displayWidth, _this.back.displayHeight);
        _this.scene.add.existing(_this);
        return _this;
    }
    return ToggleButton;
}(Phaser.GameObjects.Container));
exports.default = ToggleButton;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9hdWRpby9yYW5kb20tcmFjZS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9hdWRpby9yYW5kb20tcmFjZS5vZ2ciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9pbWFnZXMvYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9qcy9jbGFzc2VzL0NhbWVyYU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9qcy9jbGFzc2VzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2V0cm9uL2pzL2VudW1zL1RyYXZlbERpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2V0cm9uL2pzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuYWtldHJvbi9qcy9zY2VuZXMvU2NlbmVNYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZXRyb24vanMvc2NlbmVzL1NjZW5lT3Zlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2V0cm9uL2pzL3NjZW5lcy9TY2VuZVRpdGxlLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2ltYWdlcy90aXRsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvaW1hZ2VzL3VpL2J1dHRvbnMvcm91bmQvZ3JlZW4ucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2ltYWdlcy91aS9idXR0b25zL3JvdW5kL29yYW5nZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvaW1hZ2VzL3VpL2ljb25zL211c2ljX29mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvaW1hZ2VzL3VpL2ljb25zL211c2ljX29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9pbWFnZXMvdWkvaWNvbnMvc2Z4X29mZi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvaW1hZ2VzL3VpL2ljb25zL3NmeF9vbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvaW1hZ2VzL3VpL3RvZ2dsZXMvZ3JlZW4ucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL01vZGVsQ29udHJvbGxlci9Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL2NsYXNzZXMvTW9kZWxDb250cm9sbGVyL01vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL2NsYXNzZXMvY29tcG9uZW50cy9TY29yZUJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL3VpL0ZsYXRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvanMvY2xhc3Nlcy91aS9Tb3VuZEJ1dHRvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvanMvY2xhc3Nlcy91aS9Ub2dnbGVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL0FsaWduR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL3V0aWwvTWVkaWFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9hbGlnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7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QUFDLE9BQU8sR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkMsQ0FBQztRQW5ERyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUQsZUFBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEQsZUFBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsZUFBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFMUQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdkIsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRTFCLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUVELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekMsSUFBRyxNQUFNLENBQUMsQ0FBQyxFQUFDO1lBQ1IsS0FBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFDO1lBQ1QsS0FBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTlELEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDbEMsQ0FBQztJQWVMLG1CQUFDO0FBQUQsQ0FBQyxDQS9EMEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBK0R0RDtBQUVELGtCQUFlLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEU1QjtJQU9JLG1CQUFZLE1BQW1CLEVBQUUsVUFBOEI7UUFBL0QsaUJBMEJDO1FBRU0sVUFBSyxHQUFHO1lBQ1gsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osS0FBSSxDQUFDLFdBQVcsRUFBRTtRQUN0QixDQUFDO1FBRU8sU0FBSSxHQUFHO1lBQ1gsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBRyxLQUFJLENBQUMsRUFBRSxFQUFFO2dCQUM1RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25EO1lBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBRyxLQUFJLENBQUMsRUFBRSxFQUFFO2dCQUM3RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRU8sZ0JBQVcsR0FBRztZQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ25ELEtBQUssSUFBSSxPQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQUssR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFLLEVBQUUsRUFBRTtvQkFDdEQsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFH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QUFDO0lBcEJVLGtCQUFZLEdBQW5CLFVBQW9CLEdBQVEsRUFBRSxHQUFXLEVBQUUsVUFBOEI7UUFDckUsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRU0sWUFBTSxHQUFiLFVBQWMsR0FBUSxFQUFFLFVBQThCO1FBRWxELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxhQUFPLEdBQWQsVUFBZSxHQUFRLEVBQUUsVUFBOEI7UUFFbkQsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxhQUFPLEdBQWQsVUFBZSxHQUFRLEVBQUUsVUFBOEI7UUFFbkQsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQUVELGtCQUFlLEtBQUssQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3NuYWtldHJvbi9qcy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9lODQyYjJlNGY2M2YyZDhmYzliODkyM2UwMWZhYjNiZi1yYW5kb20tcmFjZS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2M1ZWE4Y2I1OTVjZWVlMzFlNGU0MjUyN2I0ZDM2NDgwLXJhbmRvbS1yYWNlLm9nZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvMzhiYjhiMzg1OTY1NTdlNTNhNjU4YThkYzYyYjVhNjItYmFja2dyb3VuZC5qcGdcIjsiLCJpbXBvcnQgQ2FtZXJhSGludCBmcm9tIFwiLi9DYW1lcmFIaW50XCI7XHJcblxyXG5pbnRlcmZhY2UgSVNjb3JlYm94Q29uZmlnIHtcclxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmVcclxufVxyXG5cclxuY2xhc3MgQ2FtZXJhTWFuYWdlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGNhbWVyYUhpbnRzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJU2NvcmVib3hDb25maWcsIGNhbWVyYTogUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5DYW1lcmEpe1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZy5zY2VuZSlcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGNvbmZpZy5zY2VuZTtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGNhbWVyYSBoaW50cyBiZWZvcmUgd2Ugc3RhcnQgbW92aW5nIHRoZSBjYW1lcmEgYXJvdW5kIHdpdGggJ2ZvbGxvdydcclxuICAgICAgICB0aGlzLmNhbWVyYUhpbnRzID0gdGhpcy5zY2VuZS5hZGQuZ3JvdXAoKTtcclxuICAgICAgICB0aGlzLmFkZENhbWVyYUhpbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRDYW1lcmFIaW50cyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaGludHMgPSBbXHJcbiAgICAgICAgeyAvLyBUUiBDb3JuZXIgSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICB4OiA0MDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNSxcclxuICAgICAgICAgICAgYWxwaGE6IDAuNSxcclxuICAgICAgICAgICAgc3RhcnREZWc6IC02MCxcclxuICAgICAgICAgICAgZW5kRGVnOiAtMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgLy8gVFIgQ29ybmVyIFZlcnRpY2FsXHJcbiAgICAgICAgICAgIHg6IDQ5NSxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICBhbHBoYTogMC41LFxyXG4gICAgICAgICAgICBzdGFydERlZzogLTYwLFxyXG4gICAgICAgICAgICBlbmREZWc6IC0zMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAvLyBSaWdodFxyXG4gICAgICAgICAgICB4OiA0OTUsXHJcbiAgICAgICAgICAgIHk6IDE1MCxcclxuICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICBhbHBoYTogMC41LFxyXG4gICAgICAgICAgICBzdGFydERlZzogLTMwLFxyXG4gICAgICAgICAgICBlbmREZWc6IDMwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIEJSIENvcm5lciBIb3Jpem9udGFsXHJcbiAgICAgICAgICAgIHg6IDQwMCxcclxuICAgICAgICAgICAgeTogNDk1LFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiAzMCxcclxuICAgICAgICAgICAgZW5kRGVnOiA2MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAvLyBCUiBDb3JuZXIgVmVydGljYWxcclxuICAgICAgICAgICAgeDogNDk1LFxyXG4gICAgICAgICAgICB5OiA0MDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgYWxwaGE6IDAuNSxcclxuICAgICAgICAgICAgc3RhcnREZWc6IDMwLFxyXG4gICAgICAgICAgICBlbmREZWc6IDYwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIEJvdHRvbVxyXG4gICAgICAgICAgICB4OiAxNTAsXHJcbiAgICAgICAgICAgIHk6IDQ5NSxcclxuICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICBhbHBoYTogMC41LFxyXG4gICAgICAgICAgICBzdGFydERlZzogNjAsXHJcbiAgICAgICAgICAgIGVuZERlZzogMTIwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIEJMIENvcm5lciBIb3Jpem9udGFsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDQ5NSxcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICBhbHBoYTogMC41LFxyXG4gICAgICAgICAgICBzdGFydERlZzogMTIwLFxyXG4gICAgICAgICAgICBlbmREZWc6IDE1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAvLyBCTCBDb3JuZXIgVmVydGljYWxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogNDAwLFxyXG4gICAgICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiAxMjAsXHJcbiAgICAgICAgICAgIGVuZERlZzogMTUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIExlZnRcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMTUwLFxyXG4gICAgICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiAxNTAsIC8vIFRPRE86LSBcclxuICAgICAgICAgICAgZW5kRGVnOiAtMTUwLCAvLyBUT0RPOi0gXHJcbiAgICAgICAgICAgIGJvdW5kczogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUTCBDb3JuZXIgSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiAtMTUwLFxyXG4gICAgICAgICAgICBlbmREZWc6IC0xMjBcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgLy8gVEwgQ29ybmVyIFZlcnRpY2FsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgYWxwaGE6IDAuNSxcclxuICAgICAgICAgICAgc3RhcnREZWc6IC0xNTAsXHJcbiAgICAgICAgICAgIGVuZERlZzogLTEyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAvLyBUb3BcclxuICAgICAgICAgICAgeDogMTUwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiAtMTIwLFxyXG4gICAgICAgICAgICBlbmREZWc6IC02MFxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICBoaW50cy5mb3JFYWNoKGhpbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoaW50UmVjdCA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShoaW50LngsIGhpbnQueSwgaGludC53aWR0aCwgaGludC5oZWlnaHQsIDB4MzZmZjE0LCAwLjc1KS5zZXRTY3JvbGxGYWN0b3IoMCkuc2V0T3JpZ2luKDAsIDApIGFzIENhbWVyYUhpbnQ7XHJcbiAgICAgICAgICAgIGhpbnRSZWN0LlN0YXJ0RGVnID0gaGludC5zdGFydERlZztcclxuICAgICAgICAgICAgaGludFJlY3QuRW5kRGVnID0gaGludC5lbmREZWc7XHJcbiAgICAgICAgICAgIGhpbnRSZWN0LmdvVG9Cb3VuZHMgPSBoaW50LmJvdW5kcztcclxuICAgICAgICAgICAgaGludFJlY3Quc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhSGludHMuYWRkKGhpbnRSZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOi0gTWFrZSBnZW5lcmljXHJcbiAgICBwcml2YXRlIG9iamVjdEluQ2FtZXJhVmlld3BvcnQgPSAob2JqOiBhbnkpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCB4ID0gdGhpcy5jYW1lcmEubWlkUG9pbnQueCAtIDI1MDtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FtZXJhLm1pZFBvaW50LnggKyAyNTA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuY2FtZXJhLm1pZFBvaW50LnkgLSAyNTA7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYW1lcmEubWlkUG9pbnQueSArIDI1MDtcclxuXHJcbiAgICAgICAgY29uc3QgYm91bmRzID0gbmV3IFBoYXNlci5HZW9tLlJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4gYm91bmRzLmNvbnRhaW5zKG9iai54LCBvYmoueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93Q2FtZXJhSGludHMgPSAoc2hvdzogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhSGludHMuY2hpbGRyZW4uaXRlcmF0ZSgocGFydDogQ2FtZXJhSGludCkgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0LmZpbGxDb2xvciA9IDB4MzZmZjE0OyAvLyBHcmVlblxyXG4gICAgICAgICAgICBwYXJ0LnNldFZpc2libGUoc2hvdyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWdobGlnaHRDYW1lcmFIaW50ID0gKGFuZ2xlOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLmNhbWVyYUhpbnRzLmNoaWxkcmVuLml0ZXJhdGUoKGNoaWxkOiBDYW1lcmFIaW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgoYW5nbGUgPiBjaGlsZC5TdGFydERlZyAmJiBhbmdsZSA8IGNoaWxkLkVuZERlZykgfHwgKGNoaWxkLmdvVG9Cb3VuZHMgJiYgKGFuZ2xlIDwgY2hpbGQuRW5kRGVnIHx8IGFuZ2xlID4gY2hpbGQuU3RhcnREZWcpKSl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBbmdsZVRvVGFyZ2V0ID0gKGhlYWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSwgdGFyZ2V0OiBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGUpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlUmFkaWFuID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlbihoZWFkLngsIGhlYWQueSwgdGFyZ2V0LngsIHRhcmdldC55KTtcclxuICAgICAgICBsZXQgYW5nbGVEZWcgPSBhbmdsZVJhZGlhbiAqIDE4MCAvIE1hdGguUElcclxuXHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlRGVnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVIaW50cyA9IChwbGF5ZXJIZWFkOiBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGUsIHRhcmdldDogUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLm9iamVjdEluQ2FtZXJhVmlld3BvcnQodGFyZ2V0KSl7ICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIHZpZXdwb3J0JylcclxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRDYW1lcmFIaW50KHRoaXMuZ2V0QW5nbGVUb1RhcmdldChwbGF5ZXJIZWFkLCB0YXJnZXQpKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NhbWVyYUhpbnRzKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbWVyYU1hbmFnZXI7IiwiaW1wb3J0IFBsYXllclBhcnQgZnJvbSBcIi4vUGxheWVyUGFydFwiO1xyXG5pbXBvcnQgQWxpZ25HcmlkIGZyb20gXCIuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9BbGlnbkdyaWRcIjtcclxuaW1wb3J0IEFsaWduIGZyb20gXCIuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9hbGlnblwiO1xyXG5pbXBvcnQgVHJhdmVsRGlyZWN0aW9uIGZyb20gXCIuLi9lbnVtcy9UcmF2ZWxEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2FtZSwgZW1pdHRlciB9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCBJR3JpZENvbmZpZyBmcm9tIFwiLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL0lHcmlkQ29uZmlnXCI7XHJcbmltcG9ydCBGb29kIGZyb20gXCIuL0Zvb2RcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vLi4vdG9vbGJveC9qcy9Db25zdGFudHNcIjtcclxuXHJcbmNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG4gICAgcHJpdmF0ZSBwYXJ0czogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwOyAvLyBUaGUgZ3JpZCBpZCBvZiBlYWNoIHBhcnRcclxuICAgIHByaXZhdGUgZ3JpZDogQWxpZ25HcmlkO1xyXG4gICAgcHJpdmF0ZSBncmlkQ29uZmlnOiBJR3JpZENvbmZpZztcclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzogUGhhc2VyLkNvcmUuQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBhZGRUYWlsUGllY2U6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9pc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBnZXQgaXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlYWQoKTogUGxheWVyUGFydCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydHMuZ2V0Rmlyc3RBbGl2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UGxheWVyc0hlYWRQb3NpdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQuZ3JpZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmdWxsUG9zaXRpb24oKTogbnVtYmVyW10ge1xyXG4gICAgICAgIC8vIFJldHVybiBhbiBhcnJheSB3aXRoIHRoZSBjdXJyZW50IGluZGV4IG9mIGFsbCBwYXJ0c1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRzLmNoaWxkcmVuLmdldEFycmF5KCkubWFwKCAocGFydDogUGxheWVyUGFydCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydC5ncmlkSW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uV2l0aG91dEhlYWQoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGNvbnN0IGZ1bGxQb3NpdGlvbiA9IHRoaXMuZnVsbFBvc2l0aW9uO1xyXG4gICAgICAgIGZ1bGxQb3NpdGlvbi5zaGlmdCgpXHJcbiAgICAgICAgcmV0dXJuIGZ1bGxQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGFydEluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBzY2VuZTogUGhhc2VyLlNjZW5lLCBncmlkOiBBbGlnbkdyaWQsIGdyaWRDb25maWc6IElHcmlkQ29uZmlnLCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWcpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLnBhcnRzID0gdGhpcy5zY2VuZS5hZGQuZ3JvdXAoKTtcclxuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xyXG4gICAgICAgIHRoaXMuZ3JpZENvbmZpZyA9IGdyaWRDb25maWc7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gZ2FtZUNvbmZpZztcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdEhlYWQgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgMjAsIDIwLCAweGZmZmZmZikgYXMgUGxheWVyUGFydDtcclxuICAgICAgICAvLyBBbGlnbi5zY2FsZVRvR2FtZVcocmVjdEhlYWQsIDAuMDQsIGdhbWVDb25maWcpXHJcbiAgICAgICAgZ3JpZC5wbGFjZUF0SW5kZXgoc3RhcnRJbmRleCwgcmVjdEhlYWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlY3RIZWFkLmdyaWRJbmRleCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgcmVjdEhlYWQuZGlyZWN0aW9uT2ZUcmF2ZWwgPSBUcmF2ZWxEaXJlY3Rpb24uUklHSFQ7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hZGQocmVjdEhlYWQpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0VGFpbCA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCAyMCwgMjAsIDB4ZmZmZmZmKSBhcyBQbGF5ZXJQYXJ0O1xyXG4gICAgICAgICAgICAvLyBBbGlnbi5zY2FsZVRvR2FtZVcocmVjdFRhaWwsIDAuMDQsIGdhbWVDb25maWcpXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uVGFpbCA9IHN0YXJ0SW5kZXggLSBpbmRleDtcclxuICAgICAgICAgICAgcmVjdFRhaWwuZ3JpZEluZGV4ID0gcG9zaXRpb25UYWlsO1xyXG4gICAgICAgICAgICB0aGlzLmdyaWQucGxhY2VBdEluZGV4KHN0YXJ0SW5kZXggLSBpbmRleCwgcmVjdFRhaWwpOyAgLy8gSGVhZCBpcyBvbiAgdGhlIHJpZ2h0LCB0YWlsIGxlZnQgc28gLSB0aGUgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuYWRkKHJlY3RUYWlsKTsgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkUGVuZGluZ1RhaWxQaWVjZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5hZGRUYWlsUGllY2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZFRhaWxQaWVjZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZCA9IHRoaXMucGFydHMuZ2V0Q2hpbGRyZW4oKVt0aGlzLnBhcnRzLmdldExlbmd0aCgpIC0gMV0gYXMgUGxheWVyUGFydDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdFRhaWwgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgMjAsIDIwLCAweGZmZmZmZikgYXMgUGxheWVyUGFydDtcclxuICAgICAgICAvLyBBbGlnbi5zY2FsZVRvR2FtZVcocmVjdFRhaWwsIDAuMDQsIHRoaXMuZ2FtZUNvbmZpZylcclxuICAgICAgICByZWN0VGFpbC5ncmlkSW5kZXggPSBsYXN0Q2hpbGQuZ3JpZEluZGV4OyAvLyB0aGUgcG9zaXRpb24gb2Ygd2hhdCB3ZSBhcmUgZ29pbmcgdG8gZm9sbG93XHJcbiAgICAgICAgcmVjdFRhaWwuZGlyZWN0aW9uT2ZUcmF2ZWwgPSBsYXN0Q2hpbGQuZGlyZWN0aW9uT2ZUcmF2ZWw7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc3RhcnRpbmcgcG9zaXRpb24gYnkgZ29pbmcgaW50IGVoIG9wcG9zaXRlIGRpcmVjdGlvbiBvZiBjdXJyZW50IHRyYXZlbFxyXG4gICAgICAgIHJlY3RUYWlsLmRpcmVjdGlvbk9mVHJhdmVsID0gdGhpcy5nZXRPcHBvc2luZ0RpcmVjdGlvbihsYXN0Q2hpbGQuZGlyZWN0aW9uT2ZUcmF2ZWwpXHJcbiAgICAgICAgcmVjdFRhaWwuZ3JpZEluZGV4ID0gdGhpcy5nZXROZXh0R3JpZFBvc2l0aW9uKHJlY3RUYWlsKTtcclxuICAgICAgICByZWN0VGFpbC5kaXJlY3Rpb25PZlRyYXZlbCA9IHRoaXMuZ2V0T3Bwb3NpbmdEaXJlY3Rpb24ocmVjdFRhaWwuZGlyZWN0aW9uT2ZUcmF2ZWwpOy8vIEJlc3VyZSB0byByZXNldCB0cmF2ZWwgZGlyZWN0aW9uXHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgocmVjdFRhaWwuZ3JpZEluZGV4LCByZWN0VGFpbCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hZGQocmVjdFRhaWwpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldE9wcG9zaW5nRGlyZWN0aW9uID0gKGRpcmVjdGlvbjogVHJhdmVsRGlyZWN0aW9uKTogVHJhdmVsRGlyZWN0aW9uID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFRyYXZlbERpcmVjdGlvbi5VUDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmF2ZWxEaXJlY3Rpb24uRE9XTjtcclxuICAgICAgICAgICAgY2FzZSBUcmF2ZWxEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmF2ZWxEaXJlY3Rpb24uVVA7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhdmVsRGlyZWN0aW9uLkxFRlQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhdmVsRGlyZWN0aW9uLlJJR0hUO1xyXG4gICAgICAgICAgICBjYXNlIFRyYXZlbERpcmVjdGlvbi5SSUdIVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmF2ZWxEaXJlY3Rpb24uTEVGVDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXVlUGllY2VBZGRpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFkZFRhaWxQaWVjZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYXZlbERpcmVjdGlvbiA9IChkaXJlY3Rpb246IFRyYXZlbERpcmVjdGlvbikgID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5wYXJ0cy5nZXRGaXJzdEFsaXZlKCk7IFxyXG5cclxuICAgICAgICAvLyBDaGVjayB3ZSBjYW50IHR1cm4gYmFjayBvbiBvdXJzZWx2ZXNcclxuICAgICAgICBpZih0aGlzLmdldE9wcG9zaW5nRGlyZWN0aW9uKGhlYWQuZGlyZWN0aW9uT2ZUcmF2ZWwpICE9PSBkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBoZWFkLm5leHRUcmF2ZWxEaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlUGxheWVyID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIEFsd2F5cyBzdGFydCB3aXRoIHRoZSBoZWFkXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUGFydDogUGxheWVyUGFydCA9IHRoaXMucGFydHMuZ2V0Rmlyc3RBbGl2ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnRzLmNoaWxkcmVuLml0ZXJhdGUoKGNoaWxkOiBQbGF5ZXJQYXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFNob3VsZCB3ZSBiZSBjaGFuZ2luZyBkaXJlY3Rpb24/XHJcbiAgICAgICAgICAgIGNoaWxkLmRpcmVjdGlvbk9mVHJhdmVsID0gY2hpbGQubmV4dFRyYXZlbERpcmVjdGlvbiB8fCBjaGlsZC5kaXJlY3Rpb25PZlRyYXZlbCB8fCBwcmV2aW91c1BhcnQuZGlyZWN0aW9uT2ZUcmF2ZWw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zaXRpb24gPSB0aGlzLmdldE5leHRHcmlkUG9zaXRpb24oY2hpbGQpXHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgobmV4dFBvc2l0aW9uLCBjaGlsZCk7XHJcbiAgICAgICAgICAgIGNoaWxkLmdyaWRJbmRleCA9IG5leHRQb3NpdGlvbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlZSBpZiB0aGUgcGFydCBpbiBmcm9udCBvZiB1cyBpcyBnb2luZyBhIGRpZmZlcmVudCB3YXksIGFuZCBmb2xsb3cgdGhlbVxyXG4gICAgICAgICAgICBjaGlsZC5uZXh0VHJhdmVsRGlyZWN0aW9uID0gcHJldmlvdXNQYXJ0LmRpcmVjdGlvbk9mVHJhdmVsO1xyXG5cclxuICAgICAgICAgICAgLy8gU28gYW55IG90aGVyIHBhcnRzIGNhbiBmb2xsb3cgdXNcclxuICAgICAgICAgICAgcHJldmlvdXNQYXJ0ID0gY2hpbGQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFmdGVyIHdlIGhhdmUgbW92ZWQsIGFkZCB0YWlsIHBpZWNlc1xyXG4gICAgICAgIHRoaXMuYWRkUGVuZGluZ1RhaWxQaWVjZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2lsbCA9IChjYWxsYmFjazogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5faXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnBhcnRzLmdldENoaWxkcmVuKCksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICB5OiBnYW1lLmNvbmZpZy5oZWlnaHQsXHJcbiAgICAgICAgICAgIGFuZ2xlOiAtMjcwLFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgY29tcGxldGVEZWxheTogMTAwMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZXh0R3JpZFBvc2l0aW9uID0gKHBhcnQ6IFBsYXllclBhcnQpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLmdyaWRDb25maWcucm93cztcclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5ncmlkQ29uZmlnLmNvbHVtbnM7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocGFydC5kaXJlY3Rpb25PZlRyYXZlbCl7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhdmVsRGlyZWN0aW9uLlJJR0hUOntcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zaXRpb24gPSAgcGFydC5ncmlkSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IobmV4dFBvc2l0aW9uIC8gY29sdW1ucykgPiBNYXRoLmZsb29yKHBhcnQuZ3JpZEluZGV4IC8gY29sdW1ucykpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQb3NpdGlvbiAtPSBjb2x1bW5zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRyYXZlbERpcmVjdGlvbi5ET1dOOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gIHBhcnQuZ3JpZEluZGV4ICsgcm93cztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihuZXh0UG9zaXRpb24gLyByb3dzKSA+PSByb3dzKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UG9zaXRpb24gLT0gcm93cyAqIGNvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVHJhdmVsRGlyZWN0aW9uLlVQOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gIHBhcnQuZ3JpZEluZGV4IC0gcm93cztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihuZXh0UG9zaXRpb24gLyByb3dzKSA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQb3NpdGlvbiArPSByb3dzICogY29sdW1ucztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0UG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUcmF2ZWxEaXJlY3Rpb24uTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRQb3NpdGlvbiA9ICBwYXJ0LmdyaWRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihuZXh0UG9zaXRpb24gLyBjb2x1bW5zKSA8IE1hdGguZmxvb3IocGFydC5ncmlkSW5kZXggLyBjb2x1bW5zKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBvc2l0aW9uICs9IGNvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja1BsYXllckNvbGxpc2lvbiA9IChmb29kVGFyZ2V0OiBGb29kKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZEluZGV4ID0gdGhpcy5jdXJyZW50UGxheWVyc0hlYWRQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja1BsYXllckNvbGxpc2lvbldpdGhGb29kKGhlYWRJbmRleCwgZm9vZFRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1BsYXllckNvbGxpc2lvbldpdGhTZWxmU25ha2UoaGVhZEluZGV4LCB0aGlzLnBvc2l0aW9uV2l0aG91dEhlYWQpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBsYXllciBoYXMgY29sbGlkZWQgd2l0aCBmb29kLCBhbmQgZWF0IGl0IGlmIG5lY2Vzc2FyeVxyXG4gICAgcHJpdmF0ZSBjaGVja1BsYXllckNvbGxpc2lvbldpdGhGb29kID0gKGhlYWRJbmRleDogbnVtYmVyLCBmb29kVGFyZ2V0OiBGb29kKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvb2RUYXJnZXQgJiYgaGVhZEluZGV4ID4gLTEpe1xyXG4gICAgICAgICAgICBpZiAoaGVhZEluZGV4ID09IGZvb2RUYXJnZXQuZ3JpZEluZGV4KXtcclxuICAgICAgICAgICAgICAgIC8vIE9NIE5PTSBOT00gTk9NXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlUGllY2VBZGRpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoQ29uc3RhbnRzLkZPT0RfRUFURU4sIGZvb2RUYXJnZXQpXHJcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoQ29uc3RhbnRzLlVQX1BPSU5UUywgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1BsYXllckNvbGxpc2lvbldpdGhTZWxmU25ha2UgPSAoaGVhZEluZGV4OiBudW1iZXIsIHNuYWtlOiBudW1iZXJbXSkgID0+IHtcclxuICAgICAgICBpZihzbmFrZS5pbmRleE9mKGhlYWRJbmRleCkgPiAtMSl7XHJcbiAgICAgICAgICAgIC8vIHVoIG9oISBXZSBkZWFkLlxyXG4gICAgICAgICAgICAvLyBGaXJlIGFuIGV2ZW50IG9yIHN1bWluXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NlbmUuY2FtZXJhLnNoYWtlKDI1MCk7XHJcbiAgICAgICAgICAgIHRoaXMua2lsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYXZlIGZpbmlzaGVkIGFuaW1hdGluZyB0aGUgcGxheWVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KFwiU2NlbmVPdmVyXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJlbnVtIFRyYXZlbERpcmVjdGlvbiB7XHJcbiAgICBSSUdIVCA9IDEsXHJcbiAgICBET1dOID0gMixcclxuICAgIExFRlQgPSAzLFxyXG4gICAgVVAgPSA0LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxEaXJlY3Rpb247IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBTY2VuZVRpdGxlIGZyb20gJy4vc2NlbmVzL1NjZW5lVGl0bGUnO1xyXG5pbXBvcnQgU2NlbmVNYWluIGZyb20gJy4vc2NlbmVzL1NjZW5lTWFpbic7XHJcbmltcG9ydCBTY2VuZU92ZXIgZnJvbSAnLi9zY2VuZXMvU2NlbmVPdmVyJztcclxuaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy9Nb2RlbENvbnRyb2xsZXIvTW9kZWwnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi8uLi90b29sYm94L2pzL2NsYXNzZXMvTW9kZWxDb250cm9sbGVyL0NvbnRyb2xsZXInO1xyXG5cclxubGV0IGlzTW9iaWxlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGBNb2JpbGVgKTtcclxuaWYgKGlzTW9iaWxlID09IC0xKXtcclxuICAgIGlzTW9iaWxlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGBUYWJsZXRgKTtcclxufVxyXG5cclxuY29uc3QgZ2FtZUNvbmZpZ19EZXNrdG9wOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6ICdTbmFrZVRyb24nLFxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiAxMDAwLFxyXG4gICAgICAgIGhlaWdodDogMTAwMCxcclxuICAgIH0sXHJcbiAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgcGFyZW50OiAnZGl2LXBoYXNlci1nYW1lJyxcclxuICAgIHNjZW5lOiBbU2NlbmVUaXRsZSwgU2NlbmVNYWluLCBTY2VuZU92ZXJdXHJcbn07XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnX01vYmlsZTogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnU25ha2VUcm9uJyxcclxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB9LFxyXG4gICAgcGFyZW50OiAnZGl2LXBoYXNlci1nYW1lJyxcclxuICAgIHNjZW5lOiBbU2NlbmVUaXRsZSwgU2NlbmVNYWluLCBTY2VuZU92ZXJdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbWl0dGVyID0gbmV3IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyKCk7XHJcbmV4cG9ydCBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbChpc01vYmlsZSA+IC0xLCBlbWl0dGVyKTtcclxuZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCk7XHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGlzTW9iaWxlID4gLTEgPyBnYW1lQ29uZmlnX01vYmlsZSA6IGdhbWVDb25maWdfRGVza3RvcCk7IiwiaW1wb3J0IElHcmlkQ29uZmlnIGZyb20gXCIuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvSUdyaWRDb25maWdcIjtcclxuaW1wb3J0IEFsaWduR3JpZCBmcm9tIFwiLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3V0aWwvQWxpZ25HcmlkXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2NsYXNzZXMvUGxheWVyXCI7XHJcbmltcG9ydCBUcmF2ZWxEaXJlY3Rpb24gZnJvbSBcIi4uL2VudW1zL1RyYXZlbERpcmVjdGlvblwiO1xyXG5pbXBvcnQgQWxpZ24gZnJvbSBcIi4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL2FsaWduXCI7XHJcbmltcG9ydCBGb29kIGZyb20gXCIuLi9jbGFzc2VzL0Zvb2RcIjtcclxuaW1wb3J0IFNjb3JlQm94IGZyb20gXCIuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvY29tcG9uZW50cy9TY29yZUJveFwiO1xyXG5pbXBvcnQgeyBtb2RlbCwgZW1pdHRlciB9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uLy4uLy4uL3Rvb2xib3gvanMvQ29uc3RhbnRzXCI7XHJcblxyXG5pbXBvcnQgYmFja2dyb3VuZEltZyBmcm9tICcuLi8uLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcnO1xyXG5pbXBvcnQgQ2FtZXJhSGludCBmcm9tIFwiLi4vY2xhc3Nlcy9DYW1lcmFIaW50XCI7XHJcbmltcG9ydCBDYW1lcmFNYW5hZ2VyIGZyb20gXCIuLi9jbGFzc2VzL0NhbWVyYU1hbmFnZXJcIjtcclxuXHJcbmNsYXNzIFNjZW5lTWFpbiBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBncmlkQ2VsbEhlaWdodDogbnVtYmVyID0gMjA7XHJcbiAgICBwcml2YXRlIGdyaWRDZWxsV2lkdGg6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIHByaXZhdGUgZ3JpZDogQWxpZ25HcmlkO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgcHJldmlvdXNUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICAgIHByaXZhdGUga2V5Ym9hcmRJbnB1dF9IOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBzY29yZUJveDogU2NvcmVCb3g7XHJcbiAgICBwcml2YXRlIGNhbWVyYU1hbmFnZXI6IENhbWVyYU1hbmFnZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lU3BlZWQ6IG51bWJlciA9IDEwMDsgLy8gbXMgYmV0d2VlbiBtb3ZpbmcgdGhlIHBsYXllclxyXG5cclxuICAgIHByaXZhdGUgZ3JpZENvbmZpZzogSUdyaWRDb25maWc7XHJcbiAgICBwcml2YXRlIHNob3VsZEFkZEZvb2Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGZvb2Q6IEZvb2Q7XHJcblxyXG4gICAgcHJpdmF0ZSBiYWNrOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignU2NlbmVNYWluJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpe1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsIGJhY2tncm91bmRJbWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuYmFjayA9IHRoaXMuYWRkLmltYWdlKDAsIDAsICdiYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5iYWNrLnNldE9yaWdpbigwLCAwKTtcclxuICAgICAgICBtb2RlbC5zY29yZSA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSArdGhpcy5nYW1lLmNvbmZpZy53aWR0aCAvIHRoaXMuZ3JpZENlbGxXaWR0aDtcclxuICAgICAgICBjb25zdCByb3dzID0gK3RoaXMuZ2FtZS5jb25maWcuaGVpZ2h0IC8gdGhpcy5ncmlkQ2VsbEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gR3JpZFxyXG4gICAgICAgIHRoaXMuZ3JpZENvbmZpZyA9IHtcclxuICAgICAgICAgICAgcm93czogcm93cyxcclxuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBBbGlnbkdyaWQodGhpcy5ncmlkQ29uZmlnLCB0aGlzLmdhbWUuY29uZmlnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTY29yZSBCb3hcclxuICAgICAgICB0aGlzLnNjb3JlQm94ID0gbmV3IFNjb3JlQm94KHtzY2VuZTogdGhpcywgeDogNDY1LCB5OiAyNSwgb3JpZ2luWDogMSwgb3JpZ2luWTogMX0sIG1vZGVsKTsgLy8gMSB6b29tXHJcblxyXG4gICAgICAgIC8vIFBsYXllclxyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcig5MCwgNSwgdGhpcywgdGhpcy5ncmlkLCB0aGlzLmdyaWRDb25maWcsIHRoaXMuZ2FtZS5jb25maWcpO1xyXG5cclxuICAgICAgICAvLyBDYW1lcmFzXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Qm91bmRzKDAsIDAsICt0aGlzLmdhbWUuY29uZmlnLndpZHRoLCArdGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldHVwIENhbWVyYU1hbmFnZXJcclxuICAgICAgICB0aGlzLmNhbWVyYU1hbmFnZXIgPSBuZXcgQ2FtZXJhTWFuYWdlcih7c2NlbmU6IHRoaXN9LCB0aGlzLmNhbWVyYXMubWFpbik7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnN0YXJ0Rm9sbG93KHRoaXMucGxheWVyLmhlYWQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldExlcnAoMC4xLCAwLjEpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Vmlld3BvcnQoKCt0aGlzLmdhbWUuY29uZmlnLndpZHRoIC0gNTAwKSAvIDIsICgrdGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQgLSA1MDApIC8gMiwgNTAwLCA1MDApO1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aGlzLmdhbWUuZ2V0VGltZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dF9IID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkgpO1xyXG4gICAgICAgIHRoaXMuc2hvdWxkQWRkRm9vZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGVtaXR0ZXIub2ZmKENvbnN0YW50cy5GT09EX0VBVEVOKS5vbihDb25zdGFudHMuRk9PRF9FQVRFTiwgdGhpcy5mb29kRWF0ZW4pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdyaWQuZGVidWcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvb2RFYXRlbiA9IChmb29kOiBGb29kKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGb29kSXRlbShmb29kKTtcclxuICAgICAgICB0aGlzLnNob3VsZEFkZEZvb2QgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuaXNEZWFkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT25seSBtb3ZlIGlmIHdlIGhhdmUgaGl0IHRoZSBlcG9jaCBcclxuICAgICAgICBpZihNYXRoLmZsb29yKHRpbWUpIC0gdGhpcy5nYW1lU3BlZWQgPiB0aGlzLnByZXZpb3VzVGltZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RpbWUgPSBNYXRoLmZsb29yKHRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlUGxheWVyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jaGVja1BsYXllckNvbGxpc2lvbih0aGlzLmZvb2QpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRQZW5kaW5nRm9vZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYU1hbmFnZXIudXBkYXRlSGludHModGhpcy5wbGF5ZXIuaGVhZCwgdGhpcy5mb29kKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2VyIGNhbiB0ZWxsIGl0IHRvIGNoYW5nZSBkaXJlY3Rpb24gd2hlbmV2ZXIgdGhleSB3YW50XHJcbiAgICAgICAgaWYodGhpcy5jdXJzb3JLZXlzLnVwLmlzRG93bil7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFRyYXZlbERpcmVjdGlvbihUcmF2ZWxEaXJlY3Rpb24uVVApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmN1cnNvcktleXMuZG93bi5pc0Rvd24pe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRUcmF2ZWxEaXJlY3Rpb24oVHJhdmVsRGlyZWN0aW9uLkRPV04pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmN1cnNvcktleXMubGVmdC5pc0Rvd24pe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRUcmF2ZWxEaXJlY3Rpb24oVHJhdmVsRGlyZWN0aW9uLkxFRlQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmN1cnNvcktleXMucmlnaHQuaXNEb3duKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0VHJhdmVsRGlyZWN0aW9uKFRyYXZlbERpcmVjdGlvbi5SSUdIVCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOi0gQWN0aXZhdGUgdGhlIHBvd2VydXBcclxuICAgICAgICAvLyBpZiAodGhpcy5rZXlib2FyZElucHV0X0guaXNEb3duKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zaG93Q2FtZXJhSGludHModHJ1ZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBERUJVRzotIEFkZCB0YWlsIHBpZWNlXHJcbiAgICAgICAgaWYodGhpcy5jdXJzb3JLZXlzLnNwYWNlLmlzRG93bil7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnF1ZXVlUGllY2VBZGRpdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gREVCVUc6LSBBZGQgZm9vZCBwaWVjZVxyXG4gICAgICAgIGlmKHRoaXMuY3Vyc29yS2V5cy5zaGlmdC5pc0Rvd24pe1xyXG4gICAgICAgICAgICB0aGlzLnNob3VsZEFkZEZvb2QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuICAgIC8vIENhbiBiZSBtYWRlIGdlbmVyaWNcclxuICAgIHByaXZhdGUgcmVtb3ZlRm9vZEl0ZW0gPSAoZm9vZCA6Rm9vZCkgPT4ge1xyXG4gICAgICAgIGZvb2QuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZG9tSW5kZXggPSAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICBsZXQgcGxhY2VtZW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuZ3JpZENvbmZpZy5yb3dzICogdGhpcy5ncmlkQ29uZmlnLmNvbHVtbnMpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2NjdXBpZWRTcGFjZSA9IHRoaXMucGxheWVyLmZ1bGxQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgLy8gS2VlcCBnb2luZyB1bnRpbCB3ZSBmaW5kIGFuIGF2YWlsYWJsZSBpbmRleFxyXG4gICAgICAgIC8vIFRPRE86LSBXaGF0IGlmIHRoZXJlIGFyZSBOTyBhdmFpbGFibGUgc3F1YXJlcz8gVGhlcmUgd2lsbCBiZSBhIGJldHRlciB3YXkgdG8gZG8gdGhpcyB0byBjb25zY2lvdXNseSBsb29rIGluc3RlYWRcclxuICAgICAgICAvLyBvZiByZWN1cnNpdmVseSBkcmlsbGluZyB1bnRpbCB3ZSBoaXQgc29tZXRoaW5nLiBUT0RPOi0gXHJcbiAgICAgICAgaWYgKG9jY3VwaWVkU3BhY2UuaW5kZXhPZihwbGFjZW1lbnQpID4gLTEpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21JbmRleCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFBlbmRpbmdGb29kID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRBZGRGb29kKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3VsZEFkZEZvb2QgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBmb29kID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIDEwLCAxMCwgMHhmZmZmZmYpIGFzIEZvb2Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21JbmRleCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFsaWduLnNjYWxlVG9HYW1lVyhmb29kLCAwLjAyLCB0aGlzLmdhbWUuY29uZmlnKTtcclxuICAgICAgICB0aGlzLmdyaWQucGxhY2VBdEluZGV4KHBsYWNlbWVudCwgZm9vZCk7XHJcbiAgICAgICAgZm9vZC5ncmlkSW5kZXggPSBwbGFjZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5mb29kID0gZm9vZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2VuZU1haW47IiwiaW1wb3J0IHRpdGxlSW1nIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3RpdGxlLnBuZyc7XHJcbmltcG9ydCBBbGlnbkdyaWQgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3V0aWwvQWxpZ25HcmlkJztcclxuaW1wb3J0IEFsaWduIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL2FsaWduJztcclxuXHJcbmltcG9ydCBidXR0b25HcmVlblJvdW5kSW1nIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3VpL2J1dHRvbnMvcm91bmQvZ3JlZW4ucG5nJztcclxuaW1wb3J0IGJ1dHRvbk9yYW5nZVJvdW5kSW1nIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3VpL2J1dHRvbnMvcm91bmQvb3JhbmdlLnBuZyc7XHJcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy91aS9GbGF0QnV0dG9uJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGVtaXR0ZXIsIG1vZGVsIH0gZnJvbSAnLi4vbWFpbic7XHJcblxyXG5jbGFzcyBTY2VuZU92ZXIgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBncmlkOiBBbGlnbkdyaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignU2NlbmVPdmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpdGxlJywgdGl0bGVJbWcpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZShgYnV0dG9uR3JlZW5Sb3VuZGAsIGJ1dHRvbkdyZWVuUm91bmRJbWcpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZShgYnV0dG9uT3JhbmdlUm91bmRgLCBidXR0b25PcmFuZ2VSb3VuZEltZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBBbGlnbkdyaWQoe3Jvd3M6IDExLCBjb2x1bW5zOiAxMSwgc2NlbmU6IHRoaXN9LCB0aGlzLmdhbWUuY29uZmlnKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuYWRkLmltYWdlKDAsIDAsICd0aXRsZScpO1xyXG4gICAgICAgIEFsaWduLnNjYWxlVG9HYW1lVyh0aXRsZSwgMC44LCB0aGlzLmdhbWUuY29uZmlnKTtcclxuICAgICAgICB0aGlzLmdyaWQucGxhY2VBdEluZGV4KDM4LCB0aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blN0YXJ0ID0gbmV3IEZsYXRCdXR0b24oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAga2V5OiBcImJ1dHRvbkdyZWVuUm91bmRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJQbGF5IEFnYWluLlwiLFxyXG4gICAgICAgICAgICB4OiAyNDAsXHJcbiAgICAgICAgICAgIHk6IDEwMCxcclxuICAgICAgICAgICAgZXZlbnQ6IENvbnN0YW50cy5SRVNUQVJUX0dBTUUsXHJcbiAgICAgICAgICAgIHBhcmFtczogJ3Jlc3RhcnRfZ2FtZSdcclxuICAgICAgICB9LCBtb2RlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgoOTMsIGJ0blN0YXJ0KTtcclxuXHJcbiAgICAgICAgZW1pdHRlci5vZmYoQ29uc3RhbnRzLlJFU1RBUlRfR0FNRSkub24oQ29uc3RhbnRzLlJFU1RBUlRfR0FNRSwgdGhpcy5yZXN0YXJ0R2FtZSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdG9wKCdTY2VuZU1haW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3RhcnRHYW1lID0gKHBhcmFtczogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdTY2VuZU1haW4nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjZW5lT3ZlcjsiLCJpbXBvcnQgdGl0bGVJbWcgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdGl0bGUucG5nJztcclxuXHJcbmltcG9ydCBncmVlblRvZ2dsZUJhY2sgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdWkvdG9nZ2xlcy9ncmVlbi5wbmcnO1xyXG5pbXBvcnQgc2Z4T2ZmSWNvbiBmcm9tICcuLi8uLi8uLi90b29sYm94L2ltYWdlcy91aS9pY29ucy9zZnhfb2ZmLnBuZyc7XHJcbmltcG9ydCBzZnhPbkljb24gZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdWkvaWNvbnMvc2Z4X29uLnBuZyc7XHJcbmltcG9ydCBtdXNpY09uSWNvbiBmcm9tICcuLi8uLi8uLi90b29sYm94L2ltYWdlcy91aS9pY29ucy9tdXNpY19vbi5wbmcnO1xyXG5pbXBvcnQgbXVzaWNPZmZJY29uIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3VpL2ljb25zL211c2ljX29mZi5wbmcnO1xyXG5cclxuaW1wb3J0IEFsaWduIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL2FsaWduJztcclxuaW1wb3J0IEFsaWduR3JpZCBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9BbGlnbkdyaWQnO1xyXG5cclxuaW1wb3J0IGJ1dHRvbk9yYW5nZVJvdW5kSW1nIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3VpL2J1dHRvbnMvcm91bmQvb3JhbmdlLnBuZyc7XHJcbmltcG9ydCBidXR0b25HcmVlblJvdW5kSW1nIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3VpL2J1dHRvbnMvcm91bmQvZ3JlZW4ucG5nJztcclxuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3VpL0ZsYXRCdXR0b24nOyBcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGVtaXR0ZXIsIG1vZGVsIH0gZnJvbSAnLi4vbWFpbic7XHJcbmltcG9ydCBJTWVkaWFNYW5hZ2VyQ29uZmlnIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy9JTWVkaWFNYW5hZ2VyQ29uZmlnJztcclxuaW1wb3J0IE1lZGlhTWFuYWdlciBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9NZWRpYU1hbmFnZXInO1xyXG5cclxuaW1wb3J0IGJhY2tncm91bmRTb3VuZG1wMyBmcm9tICcuLi8uLi9hdWRpby9yYW5kb20tcmFjZS5tcDMnO1xyXG5pbXBvcnQgYmFja2dyb3VuZFNvdW5kb2dnIGZyb20gJy4uLy4uL2F1ZGlvL3JhbmRvbS1yYWNlLm9nZyc7XHJcbmltcG9ydCBTb3VuZEJ1dHRvbnMgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3VpL1NvdW5kQnV0dG9ucyc7XHJcblxyXG5jbGFzcyBTY2VuZVRpdGxlIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgZ3JpZDogQWxpZ25HcmlkO1xyXG4gICAgcHJpdmF0ZSBtZWRpYU1hbmFnZXI6IE1lZGlhTWFuYWdlcjtcclxuICAgIHByaXZhdGUgc291bmRCdXR0b25zOiBTb3VuZEJ1dHRvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OiAnU2NlbmVUaXRsZSd9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndGl0bGUnLCB0aXRsZUltZyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGBidXR0b25HcmVlblJvdW5kYCwgYnV0dG9uR3JlZW5Sb3VuZEltZyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGBidXR0b25PcmFuZ2VSb3VuZGAsIGJ1dHRvbk9yYW5nZVJvdW5kSW1nKTtcclxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2JhY2tncm91bmQnLCBbYmFja2dyb3VuZFNvdW5kbXAzLCBiYWNrZ3JvdW5kU291bmRvZ2ddKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwidG9nZ2xlQmFja1wiLCBncmVlblRvZ2dsZUJhY2spO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZShcInNmeE9mZlwiLCBzZnhPZmZJY29uKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJzZnhPblwiLCBzZnhPbkljb24pO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZShcIm11c2ljT25cIiwgbXVzaWNPbkljb24pO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZShcIm11c2ljT2ZmXCIsIG11c2ljT2ZmSWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTY2VuZVRpdGxlIGNyZWF0ZScpO1xyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBBbGlnbkdyaWQoe3Jvd3M6IDExLCBjb2x1bW5zOiAxMSwgc2NlbmU6IHRoaXN9LCB0aGlzLmdhbWUuY29uZmlnKTtcclxuICAgICAgICB0aGlzLnNvdW5kQnV0dG9ucyA9IG5ldyBTb3VuZEJ1dHRvbnMoe3NjZW5lOiB0aGlzLCBnYW1lQ29uZmlnOiB0aGlzLmdhbWUuY29uZmlnfSwgbW9kZWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5hZGQuaW1hZ2UoMCwgMCwgJ3RpdGxlJyk7XHJcbiAgICAgICAgQWxpZ24uc2NhbGVUb0dhbWVXKHRpdGxlLCAwLjgsIHRoaXMuZ2FtZS5jb25maWcpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgoMzgsIHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuU3RhcnQgPSBuZXcgRmxhdEJ1dHRvbih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICBrZXk6IFwiYnV0dG9uR3JlZW5Sb3VuZFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlN0YXJ0IVwiLFxyXG4gICAgICAgICAgICB4OiAyNDAsXHJcbiAgICAgICAgICAgIHk6IDEwMCxcclxuICAgICAgICAgICAgZXZlbnQ6IENvbnN0YW50cy5TVEFSVF9HQU1FLFxyXG4gICAgICAgICAgICBwYXJhbXM6ICdzdGFydF9nYW1lJ1xyXG4gICAgICAgIH0sIG1vZGVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkLnBsYWNlQXRJbmRleCg5MywgYnRuU3RhcnQpO1xyXG5cclxuICAgICAgICBjb25zdCBtZWRpYUNvbmZpZzogSU1lZGlhTWFuYWdlckNvbmZpZyA9IHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWVkaWFNYW5hZ2VyID0gbmV3IE1lZGlhTWFuYWdlcihtZWRpYUNvbmZpZywgbW9kZWwpO1xyXG4gICAgICAgIHRoaXMubWVkaWFNYW5hZ2VyLnNldEJhY2tncm91bmRNdXNpYygnYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBlbWl0dGVyLm9mZihDb25zdGFudHMuU1RBUlRfR0FNRSkub24oQ29uc3RhbnRzLlNUQVJUX0dBTUUsIHRoaXMuc3RhcnRHYW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0R2FtZSA9IChwYXJhbXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnU2NlbmVNYWluJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NlbmVUaXRsZTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzY4OGU5ZTliNWFjNWNmNGQ4MDg2Nzc1ZTdmNDMzMzY0LXRpdGxlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZmZmNjVkNTRmOGQwNWZhMDJiYjhiNjdhMGZhYmNiNGItZ3JlZW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mNzhmNDVmMTUzNDYwYmExODZhODA5ZWFiODdjNTdiNC1vcmFuZ2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mYmMxNzYxMzA5M2Q1MTBhY2MxNWY2YzUzMzVlNjc1Zi1tdXNpY19vZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8zNjFlNTEwOTA5ZGYwMzQzZDRmYzdjNTIyMmU1NWRlYS1tdXNpY19vbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzNmZThkZmY3NTU1ODg4N2M5M2NlM2U0MWQ1ZGU0MGM3LXNmeF9vZmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy81MGZhODYyN2YyNmY5YTI4YzhiNjhiMDM1YzI4N2I1NC1zZnhfb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9hMTU5ODkxZjI3MzdlOGQ1YjdjZWJmZDk1MmIzYTc3NC1ncmVlbi5wbmdcIjsiLCJjbGFzcyBDb25zdGFudHN7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNFVF9TQ09SRSA9IFwiU0VUX1NDT1JFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNDT1JFX1VQREFURUQgPSBcIlNDT1JFX1VQREFURURcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVVBfUE9JTlRTID0gXCJVUF9QT0lOVFNcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRk9PRF9FQVRFTiA9IFwiRk9PRF9FQVRFTlwiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQlVUVE9OX1BSRVNTRUQgPSBcIkJVVFRPTl9QUkVTU0VEXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUQVJUX0dBTUUgPSBcIlNUQVJUX0dBTUVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTVEFSVF9HQU1FID0gXCJSRVNUQVJUX0dBTUVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUExBWV9TT1VORCA9IFwiUExBWV9TT1VORFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBNVVNJQ19DSEFOR0VEID0gXCJNVVNJQ19DSEFOR0VEXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRPR0dMRV9NVVNJQyA9IFwiVE9HR0xFX01VU0lDXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRPR0dMRV9TRlggPSBcIlRPR0dMRV9TRlhcIjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uLy4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vTW9kZWxcIjtcclxuXHJcbmNsYXNzIENvbnRyb2xsZXJ7XHJcbiAgICBwcml2YXRlIG1vZGVsOiBNb2RlbDtcclxuICAgIHByaXZhdGUgZW1pdHRlcjogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG1vZGVsLmVtaXR0ZXI7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLm9uKENvbnN0YW50cy5TRVRfU0NPUkUsIHRoaXMuc2V0U2NvcmUpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihDb25zdGFudHMuVVBfUE9JTlRTLCB0aGlzLnVwUG9pbnRzKTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIub24oQ29uc3RhbnRzLlRPR0dMRV9NVVNJQywgdGhpcy50b2dnbGVNdXNpYyk7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLm9uKENvbnN0YW50cy5UT0dHTEVfU0ZYLCB0aGlzLnRvZ2dsZVNmeCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2NvcmUgPSAoc2NvcmU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2NvcmUgPSBzY29yZTtcclxuICAgIH1cclxuXHJcbiAgICB1cFBvaW50cyA9IChwb2ludHM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1Njb3JlID0gIHRoaXMubW9kZWwuc2NvcmUgKyBwb2ludHM7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zY29yZSA9IG5ld1Njb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU11c2ljID0gKHZhbDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHRoaXMubW9kZWwubXVzaWNPbiA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTZnggPSAodmFsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zb3VuZE9uID0gdmFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uLy4uL0NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBfZW1pdHRlcjogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzTW9iaWxlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfc291bmRPbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX211c2ljT246IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9nYW1lT3ZlcjogYm9vbGVhbjtcclxuXHJcbiAgICBnZXQgZW1pdHRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW1pdHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZ2FtZU92ZXIodmFsOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLl9nYW1lT3ZlciA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVPdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtdXNpY09uKHZhbDogYm9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5fbXVzaWNPbiA9IHZhbDtcclxuICAgICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoQ29uc3RhbnRzLk1VU0lDX0NIQU5HRUQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtdXNpY09uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX211c2ljT247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNvdW5kT24odmFsOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLl9zb3VuZE9uID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzb3VuZE9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZE9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzY29yZSh2YWw6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KENvbnN0YW50cy5TQ09SRV9VUERBVEVEKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc01vYmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihpc01vYmlsZTogYm9vbGVhbiwgZW1pdHRlcjogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIpIHtcclxuICAgICAgICB0aGlzLl9lbWl0dGVyID0gZW1pdHRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2lzTW9iaWxlID0gaXNNb2JpbGU7XHJcbiAgICAgICAgdGhpcy5fc291bmRPbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fbXVzaWNPbiA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsOyIsImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uLy4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsQ29udHJvbGxlci9Nb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2NvcmVib3hDb25maWcge1xyXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcclxuICAgIHg/IDpudW1iZXIsXHJcbiAgICB5PzogbnVtYmVyLFxyXG4gICAgb3JpZ2luWD86IG51bWJlcixcclxuICAgIG9yaWdpblk/OiBudW1iZXJcclxufTtcclxuXHJcbmNsYXNzIFNjb3JlQm94IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgICBwcml2YXRlIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIHByaXZhdGUgbW9kZWw6IE1vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSVNjb3JlYm94Q29uZmlnLCBtb2RlbDogTW9kZWwpIHtcclxuICAgICAgICBzdXBlcihjb25maWcuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gY29uZmlnLnNjZW5lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGV4dDEgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KGNvbmZpZy54IHx8IDAgLCBjb25maWcueSB8fCAwLCBcIlNDT1JFOjBcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRPcmlnaW4oY29uZmlnLm9yaWdpblggfHwgMC41LCBjb25maWcub3JpZ2luWSB8fCAwLjUpO1xyXG4gICAgICAgIHRoaXMudGV4dDEuc2V0U2Nyb2xsRmFjdG9yKDApLnNldEZvbnRTaXplKDEyKTtcclxuICAgICAgICAvLyB0aGlzLmFkZCh0aGlzLnRleHQxKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgICAgIG1vZGVsLmVtaXR0ZXIub2ZmKENvbnN0YW50cy5TQ09SRV9VUERBVEVEKS5vbihDb25zdGFudHMuU0NPUkVfVVBEQVRFRCwgdGhpcy5zY29yZVVwZGF0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2NvcmVVcGRhdGVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMudGV4dDEgJiYgIXRoaXMubW9kZWwuZ2FtZU92ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHQxLnNldFRleHQoYFNDT1JFOiR7dGhpcy5tb2RlbC5zY29yZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjb3JlQm94OyIsImltcG9ydCBJRmxhdEJ1dHRvbkNvbmZpZyBmcm9tIFwiLi4vSUZsYXRCdXR0b25Db25maWdcIjtcclxuaW1wb3J0IE1vZGVsIGZyb20gXCIuLi9Nb2RlbENvbnRyb2xsZXIvTW9kZWxcIjtcclxuXHJcbmNsYXNzIEZsYXRCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICAgIHByaXZhdGUgY29uZmlnOiBJRmxhdEJ1dHRvbkNvbmZpZztcclxuICAgIHByaXZhdGUgYmFjazogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSB0ZXh0MTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIGVtaXR0ZXI6IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUZsYXRCdXR0b25Db25maWcsIG1vZGVsOiBNb2RlbCkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZy5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG1vZGVsLmVtaXR0ZXI7XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLnNjZW5lKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk1pc3Npbmcgc2NlbmVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFjb25maWcua2V5KXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk1pc3Npbmcga2V5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gY29uZmlnLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuYmFjayA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDAsIDAsIGNvbmZpZy5rZXkpO1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYmFjayk7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcudGV4dCl7XHJcbiAgICAgICAgICAgIGlmKGNvbmZpZy50ZXh0Q29uZmlnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDEgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDAsIDAsIGNvbmZpZy50ZXh0LCBjb25maWcudGV4dENvbmZpZyk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDEgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDAsIDAsIGNvbmZpZy50ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRleHQxLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMudGV4dDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY29uZmlnLngpe1xyXG4gICAgICAgICAgICB0aGlzLnggPSBjb25maWcueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy55KXtcclxuICAgICAgICAgICAgdGhpcy55ID0gY29uZmlnLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmV2ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5iYWNrLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFjay5vbigncG9pbnRlcmRvd24nLCB0aGlzLnByZXNzZWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1vZGVsLmlzTW9iaWxlKXtcclxuICAgICAgICAgICAgdGhpcy5iYWNrLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMubW91c2VPdmVyKTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrLm9uKCdwb2ludGVyb3V0JywgdGhpcy5tb3VzZU91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdXNlT3ZlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnkgLT0gNTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdXNlT3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMueSArPSA1O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJlc3NlZCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZy5wYXJhbXMpe1xyXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdCh0aGlzLmNvbmZpZy5ldmVudCwgdGhpcy5jb25maWcucGFyYW1zKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdCh0aGlzLmNvbmZpZy5ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGF0QnV0dG9uOyIsImltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4vVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uLy4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsQ29udHJvbGxlci9Nb2RlbFwiO1xyXG5cclxuY2xhc3MgU291bmRCdXR0b25zIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgICBwcml2YXRlIG1vZGVsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiB7c2NlbmU6IFBoYXNlci5TY2VuZSwgZ2FtZUNvbmZpZzogUGhhc2VyLkNvcmUuQ29uZmlnfSwgbW9kZWw6IE1vZGVsKXtcclxuICAgICAgICBzdXBlcihjb25maWcuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gY29uZmlnLnNjZW5lO1xyXG5cclxuICAgICAgICBjb25zdCBtdXNpY1RvZ2dsZUJ1dHRvbiA9IG5ldyBUb2dnbGVCdXR0b24oe1xyXG4gICAgICAgICAgICBnYW1lQ29uZmlnOiBjb25maWcuZ2FtZUNvbmZpZyxcclxuICAgICAgICAgICAgYmFja0tleTogJ3RvZ2dsZUJhY2snLFxyXG4gICAgICAgICAgICBvZmZJY29uOiAnbXVzaWNPZmYnLFxyXG4gICAgICAgICAgICBvbkljb246ICdtdXNpY09uJyxcclxuICAgICAgICAgICAgc2NlbmU6IGNvbmZpZy5zY2VuZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgIGV2ZW50OiBDb25zdGFudHMuVE9HR0xFX01VU0lDLFxyXG4gICAgICAgICAgICB4OiAyNDAsXHJcbiAgICAgICAgICAgIHk6IDQ1MFxyXG4gICAgICAgIH0sIHRoaXMubW9kZWwuZW1pdHRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNmeFRvZ2dsZUJ1dHRvbiA9IG5ldyBUb2dnbGVCdXR0b24oe1xyXG4gICAgICAgICAgICBnYW1lQ29uZmlnOiBjb25maWcuZ2FtZUNvbmZpZyxcclxuICAgICAgICAgICAgYmFja0tleTogJ3RvZ2dsZUJhY2snLFxyXG4gICAgICAgICAgICBvZmZJY29uOiAnc2Z4T2ZmJyxcclxuICAgICAgICAgICAgb25JY29uOiAnc2Z4T24nLFxyXG4gICAgICAgICAgICBzY2VuZTogY29uZmlnLnNjZW5lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgZXZlbnQ6IENvbnN0YW50cy5UT0dHTEVfU0ZYLFxyXG4gICAgICAgICAgICB4OiAyNDAsXHJcbiAgICAgICAgICAgIHk6IDQ1MFxyXG4gICAgICAgIH0sIHRoaXMubW9kZWwuZW1pdHRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkKG11c2ljVG9nZ2xlQnV0dG9uKTtcclxuICAgICAgICB0aGlzLmFkZChzZnhUb2dnbGVCdXR0b24pO1xyXG5cclxuICAgICAgICBtdXNpY1RvZ2dsZUJ1dHRvbi55ID0gbXVzaWNUb2dnbGVCdXR0b24uaGVpZ2h0IC8gMjtcclxuICAgICAgICBtdXNpY1RvZ2dsZUJ1dHRvbi54ID0gbXVzaWNUb2dnbGVCdXR0b24ud2lkdGggLyAyO1xyXG5cclxuICAgICAgICBzZnhUb2dnbGVCdXR0b24ueCA9ICtjb25maWcuZ2FtZUNvbmZpZy53aWR0aCAtIChzZnhUb2dnbGVCdXR0b24ud2lkdGggLyAyKTtcclxuICAgICAgICBzZnhUb2dnbGVCdXR0b24ueSA9IG11c2ljVG9nZ2xlQnV0dG9uLnk7XHJcblxyXG4gICAgICAgIGlmKCFtb2RlbC5tdXNpY09uKXtcclxuICAgICAgICAgICAgbXVzaWNUb2dnbGVCdXR0b24udG9nZ2xlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFtb2RlbC5zb3VuZE9uKXtcclxuICAgICAgICAgICAgc2Z4VG9nZ2xlQnV0dG9uLnRvZ2dsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3VuZEJ1dHRvbnM7IiwiaW1wb3J0IElUb2dnbGVCdXR0b25Db25maWcgZnJvbSBcIi4uLy4uL0lUb2dnbGVCdXR0b25Db25maWdcIjtcclxuaW1wb3J0IEFsaWduIGZyb20gXCIuLi91dGlsL2FsaWduXCI7XHJcblxyXG5jbGFzcyBUb2dnbGVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICAgIHByaXZhdGUgY29uZmlnOiBJVG9nZ2xlQnV0dG9uQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBiYWNrOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIG9uSWNvbjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBvZmZJY29uOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIHZhbHVlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBldmVudD86IHN0cmluZztcclxuICAgIHByaXZhdGUgZW1pdHRlcjogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJVG9nZ2xlQnV0dG9uQ29uZmlnLCBlbWl0dGVyOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZy5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGNvbmZpZy5zY2VuZTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2sgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgwLCAwLCBjb25maWcuYmFja0tleSk7XHJcbiAgICAgICAgdGhpcy5vbkljb24gPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgwLCAwLCBjb25maWcub25JY29uKTtcclxuICAgICAgICB0aGlzLm9mZkljb24gPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgwLCAwLCBjb25maWcub2ZmSWNvbik7XHJcblxyXG4gICAgICAgIEFsaWduLnNjYWxlVG9HYW1lVyh0aGlzLmJhY2ssIDAuMSwgY29uZmlnLmdhbWVDb25maWcpO1xyXG4gICAgICAgIEFsaWduLnNjYWxlVG9HYW1lVyh0aGlzLm9uSWNvbiwgMC4wNSwgY29uZmlnLmdhbWVDb25maWcpO1xyXG4gICAgICAgIEFsaWduLnNjYWxlVG9HYW1lVyh0aGlzLm9mZkljb24sIDAuMDUsIGNvbmZpZy5nYW1lQ29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5iYWNrKTtcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLm9uSWNvbik7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5vZmZJY29uKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbmZpZy52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5ldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50ID0gY29uZmlnLmV2ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRJY29ucygpO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2suc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICB0aGlzLmJhY2sub24oJ3BvaW50ZXJkb3duJywgdGhpcy50b2dnbGUpO1xyXG5cclxuICAgICAgICBpZihjb25maWcueCl7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IGNvbmZpZy54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLnkpe1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBjb25maWcueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2l6ZSh0aGlzLmJhY2suZGlzcGxheVdpZHRoLCB0aGlzLmJhY2suZGlzcGxheUhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gIXRoaXMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRJY29ucygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMuZXZlbnQsIHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEljb25zID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25JY29uLnZpc2libGUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMub2ZmSWNvbi52aXNpYmxlID0gIXRoaXMudmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUJ1dHRvbjsiLCJpbXBvcnQgSUdyaWRDb25maWcgZnJvbSBcIi4uL0lHcmlkQ29uZmlnXCI7XHJcblxyXG5jbGFzcyBBbGlnbkdyaWQge1xyXG4gICAgcHJpdmF0ZSBjb25maWc6IElHcmlkQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSBjdzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjaDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUdyaWRDb25maWcsIGdhbWVDb25maWc6IFBoYXNlci5Db3JlLkNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICBpZighY29uZmlnLnNjZW5lKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHNjZW5lIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFjb25maWcucm93cyl7XHJcbiAgICAgICAgICAgIGNvbmZpZy5yb3dzID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWNvbmZpZy5jb2x1bW5zKXtcclxuICAgICAgICAgICAgY29uZmlnLmNvbHVtbnMgPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighY29uZmlnLmhlaWdodCl7XHJcbiAgICAgICAgICAgIGNvbmZpZy5oZWlnaHQgPSArZ2FtZUNvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFjb25maWcud2lkdGgpe1xyXG4gICAgICAgICAgICBjb25maWcud2lkdGggPSArZ2FtZUNvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XHJcblxyXG4gICAgICAgIC8vIGNlbGxzIHdpZHRoXHJcbiAgICAgICAgdGhpcy5jdyA9IGNvbmZpZy53aWR0aCAvIGNvbmZpZy5jb2x1bW5zO1xyXG4gICAgICAgIC8vIGNlbGxzIGhlaWdodFxyXG4gICAgICAgIHRoaXMuY2ggPSBjb25maWcuaGVpZ2h0IC8gY29uZmlnLnJvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYnVnID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2hvd051bWJlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvdyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgyLCAweGZmMDAwMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLndpZHRoOyBpbmRleCs9IHRoaXMuY3cpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oaW5kZXgsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhpbmRleCwgdGhpcy5jb25maWcuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbmZpZy5oZWlnaHQ7IGluZGV4Kz0gdGhpcy5jaCkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbygwLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuY29uZmlnLndpZHRoLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dOdW1iZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLnJvd3M7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLmNvbHVtbnM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bVRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDAsIDAsIGNvdW50LnRvU3RyaW5nKCksIHtjb2xvcjogJyNmZjAwMDAnfSApO1xyXG4gICAgICAgICAgICAgICAgbnVtVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUF0SW5kZXgoY291bnQsIG51bVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2UgYW4gb2JqZWN0IGluIHRoZSBtaWRkbGUgb2YgdGhlIGRlZmluZWQgY2VsbFxyXG4gICAgcHVibGljIHBsYWNlQXQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9iajogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gY2FsYyB0aGUgcG9zaXRpb24gYmFzZWQgdXBvbiB0aGUgY2VsbHdpZHRoICYgY2VsaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgeDIgPSAodGhpcy5jdyAqIHgpICsgKHRoaXMuY3cgLyAyKTtcclxuICAgICAgICBjb25zdCB5MiA9ICh0aGlzLmNoICogeSkgKyAodGhpcy5jaCAvIDIpO1xyXG5cclxuICAgICAgICBvYmoueCA9IHgyO1xyXG4gICAgICAgIG9iai55ID0geTI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2VzIHRoZSBvYmplY3QgYXQgdGhlIGdpdmVuIGluZGV4LCBjb3VudGluZyBsZWZ0IHRvIHJpZ2h0IHRvcCB0byBib3R0b21cclxuICAgIHB1YmxpYyBwbGFjZUF0SW5kZXggPSAoaW5kZXg6IG51bWJlciwgb2JqOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuY29uZmlnLmNvbHVtbnMpO1xyXG4gICAgICAgIGNvbnN0IHggPSBpbmRleCAtICh5ICogdGhpcy5jb25maWcuY29sdW1ucyk7XHJcblxyXG4gICAgICAgIHRoaXMucGxhY2VBdCh4LCB5LCBvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGlnbkdyaWQ7IiwiaW1wb3J0IElNZWRpYU1hbmFnZXJDb25maWcgZnJvbSBcIi4uL0lNZWRpYU1hbmFnZXJDb25maWdcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vTW9kZWxDb250cm9sbGVyL01vZGVsXCI7XHJcblxyXG5jbGFzcyBNZWRpYU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzY3JlZW46IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHByaXZhdGUgZW1pdHRlcjogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXI7XHJcbiAgICBwcml2YXRlIG1vZGVsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTWVkaWFNYW5hZ2VyQ29uZmlnLCBtb2RlbDogTW9kZWwpe1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gY29uZmlnLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG1vZGVsLmVtaXR0ZXI7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihDb25zdGFudHMuUExBWV9TT1VORCwgdGhpcy5wbGF5U291bmQpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihDb25zdGFudHMuTVVTSUNfQ0hBTkdFRCwgdGhpcy5tdXNpY0NoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheVNvdW5kID0gKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5tb2RlbC5zb3VuZE9uKXtcclxuICAgICAgICAgICAgY29uc3Qgc291bmQgPSB0aGlzLnNjcmVlbi5zb3VuZC5hZGQoa2V5KTtcclxuICAgICAgICAgICAgc291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11c2ljQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLmJhY2tncm91bmQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vZGVsLm11c2ljT24pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEJhY2tncm91bmRNdXNpYyA9IChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5zY3JlZW4uc291bmQuYWRkKGtleSwge3ZvbHVtZTogMC41LCBsb29wOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5tdXNpY0NoYW5nZWQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVkaWFNYW5hZ2VyOyIsImNsYXNzIEFsaWduIHtcclxuICAgIHN0YXRpYyBzY2FsZVRvR2FtZVcob2JqOiBhbnksIHBjdDogbnVtYmVyLCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWcpe1xyXG4gICAgICAgIG9iai5kaXNwbGF5V2lkdGggPSArZ2FtZUNvbmZpZy53aWR0aCAqIHBjdDtcclxuICAgICAgICBvYmouc2NhbGVZID0gb2JqLnNjYWxlWDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2VudGVyKG9iajogYW55LCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJIKG9iaiwgZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJWKG9iaiwgZ2FtZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNlbnRlckgob2JqOiBhbnksIGdhbWVDb25maWc6IFBoYXNlci5Db3JlLkNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBvYmoueCA9ICtnYW1lQ29uZmlnLndpZHRoIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2VudGVyVihvYmo6IGFueSwgZ2FtZUNvbmZpZzogUGhhc2VyLkNvcmUuQ29uZmlnKVxyXG4gICAge1xyXG4gICAgICAgIG9iai54ID0gK2dhbWVDb25maWcud2lkdGggLyAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGlnbjsiXSwic291cmNlUm9vdCI6IiJ9