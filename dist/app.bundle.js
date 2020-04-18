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
/******/ 	deferredModules.push(["./src/Snake3k/js/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Snake3k/audio/background_main.mp3":
/*!***********************************************!*\
  !*** ./src/Snake3k/audio/background_main.mp3 ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/fd2493e939fcb89f25e91030a0974f3a-background_main.mp3");

/***/ }),

/***/ "./src/Snake3k/audio/background_title.mp3":
/*!************************************************!*\
  !*** ./src/Snake3k/audio/background_title.mp3 ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/c6cc657d726636cd04dbbb517389cca8-background_title.mp3");

/***/ }),

/***/ "./src/Snake3k/audio/coin.wav":
/*!************************************!*\
  !*** ./src/Snake3k/audio/coin.wav ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/29dad25f58ce7160e6ec1e3044ee7b7e-coin.wav");

/***/ }),

/***/ "./src/Snake3k/images/background.jpg":
/*!*******************************************!*\
  !*** ./src/Snake3k/images/background.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/38bb8b38596557e53a658a8dc62b5a62-background.jpg");

/***/ }),

/***/ "./src/Snake3k/js/classes/CameraManager.ts":
/*!*************************************************!*\
  !*** ./src/Snake3k/js/classes/CameraManager.ts ***!
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

/***/ "./src/Snake3k/js/classes/Player.ts":
/*!******************************************!*\
  !*** ./src/Snake3k/js/classes/Player.ts ***!
  \******************************************/
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
var TravelDirection_1 = __webpack_require__(/*! ../enums/TravelDirection */ "./src/Snake3k/js/enums/TravelDirection.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/Snake3k/js/main.ts");
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
        _this.checkPlayerCollision = function (foodTarget, head, portalTarget) {
            var headIndex = _this.currentPlayersHeadPosition;
            _this.checkPlayerCollisionWithFood(headIndex, foodTarget);
            _this.checkPlayerCollisionWithSelfSnake(headIndex, _this.positionWithoutHead);
            _this.checkPlayerCollisionWithPortal(head, portalTarget);
        };
        // Check if the player has collided with food, and eat it if necessary
        _this.checkPlayerCollisionWithFood = function (headIndex, foodTarget) {
            if (foodTarget && headIndex > -1) {
                if (headIndex == foodTarget.gridIndex) {
                    // OM NOM NOM NOM
                    _this.queuePieceAddition();
                    main_1.emitter.emit(Constants_1.default.PLAY_SOUND, "coin");
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
    Player.prototype.checkPlayerCollisionWithPortal = function (head, portalTarget) {
        if (portalTarget.getBounds().contains(head.x, head.y)) {
            console.log("INSIDE");
        }
    };
    return Player;
}(Phaser.GameObjects.Container));
exports.default = Player;


/***/ }),

/***/ "./src/Snake3k/js/enums/TravelDirection.ts":
/*!*************************************************!*\
  !*** ./src/Snake3k/js/enums/TravelDirection.ts ***!
  \*************************************************/
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

/***/ "./src/Snake3k/js/main.ts":
/*!********************************!*\
  !*** ./src/Snake3k/js/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var SceneTitle_1 = __webpack_require__(/*! ./scenes/SceneTitle */ "./src/Snake3k/js/scenes/SceneTitle.ts");
var SceneMain_1 = __webpack_require__(/*! ./scenes/SceneMain */ "./src/Snake3k/js/scenes/SceneMain.ts");
var SceneOver_1 = __webpack_require__(/*! ./scenes/SceneOver */ "./src/Snake3k/js/scenes/SceneOver.ts");
var Model_1 = __webpack_require__(/*! ../../toolbox/js/classes/ModelController/Model */ "./src/toolbox/js/classes/ModelController/Model.ts");
var Controller_1 = __webpack_require__(/*! ../../toolbox/js/classes/ModelController/Controller */ "./src/toolbox/js/classes/ModelController/Controller.ts");
var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
}
var gameConfig_Desktop = {
    title: 'Snake3k',
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
    title: 'Snake3k',
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

/***/ "./src/Snake3k/js/scenes/SceneMain.ts":
/*!********************************************!*\
  !*** ./src/Snake3k/js/scenes/SceneMain.ts ***!
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
var AlignGrid_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/AlignGrid */ "./src/toolbox/js/classes/util/AlignGrid.ts");
var Player_1 = __webpack_require__(/*! ../classes/Player */ "./src/Snake3k/js/classes/Player.ts");
var TravelDirection_1 = __webpack_require__(/*! ../enums/TravelDirection */ "./src/Snake3k/js/enums/TravelDirection.ts");
var ScoreBox_1 = __webpack_require__(/*! ../../../toolbox/js/classes/components/ScoreBox */ "./src/toolbox/js/classes/components/ScoreBox.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/Snake3k/js/main.ts");
var Constants_1 = __webpack_require__(/*! ../../../toolbox/js/Constants */ "./src/toolbox/js/Constants.ts");
var coin_wav_1 = __webpack_require__(/*! ../../audio/coin.wav */ "./src/Snake3k/audio/coin.wav");
var background_jpg_1 = __webpack_require__(/*! ../../images/background.jpg */ "./src/Snake3k/images/background.jpg");
var CameraManager_1 = __webpack_require__(/*! ../classes/CameraManager */ "./src/Snake3k/js/classes/CameraManager.ts");
var MediaManager_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/MediaManager */ "./src/toolbox/js/classes/util/MediaManager.ts");
var background_main_mp3_1 = __webpack_require__(/*! ../../audio/background_main.mp3 */ "./src/Snake3k/audio/background_main.mp3");
var SceneMain = /** @class */ (function (_super) {
    __extends(SceneMain, _super);
    function SceneMain() {
        var _this = _super.call(this, 'SceneMain') || this;
        _this.gridCellHeight = 20;
        _this.gridCellWidth = 20;
        _this.previousTime = 0;
        _this.gameSpeed = 100; // ms between moving the player
        _this.shouldAddFood = false;
        _this.addPortal = function () {
            if (_this.portal) {
                return;
            }
            _this.portal = _this.add.circle(0, 0, 100, 0xff0000, 0.5);
            _this.grid.placeAtIndex(1225, _this.portal);
        };
        _this.growPortal = function () {
            _this.portal.radius = _this.portal.radius * 1.125;
        };
        _this.foodEaten = function (food) {
            _this.removeFoodItem(food);
            _this.shouldAddFood = true;
            _this.growPortal();
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
        this.load.audio('coin', [coin_wav_1.default]);
        this.load.audio('background_main', [background_main_mp3_1.default]);
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
        // CameraManager
        this.cameraManager = new CameraManager_1.default({ scene: this }, this.cameras.main);
        this.cameras.main.startFollow(this.player.head, true);
        this.cameras.main.setLerp(0.1, 0.1);
        this.cameras.main.setViewport((+this.game.config.width - 500) / 2, (+this.game.config.height - 500) / 2, 500, 500);
        // Media Manager
        if (!this.mediaManager) {
            var mediaConfig = {
                scene: this
            };
            this.mediaManager = new MediaManager_1.default(mediaConfig, main_1.model);
            this.mediaManager.setBackgroundMusic('background_main');
        }
        this.previousTime = this.game.getTime();
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.keyboardInput_H = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        this.shouldAddFood = true;
        main_1.emitter.off(Constants_1.default.FOOD_EATEN).on(Constants_1.default.FOOD_EATEN, this.foodEaten);
        this.addPortal();
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
            this.player.checkPlayerCollision(this.food, this.player.head, this.portal);
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

/***/ "./src/Snake3k/js/scenes/SceneOver.ts":
/*!********************************************!*\
  !*** ./src/Snake3k/js/scenes/SceneOver.ts ***!
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
var title_png_1 = __webpack_require__(/*! ../../../toolbox/images/title.png */ "./src/toolbox/images/title.png");
var AlignGrid_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/AlignGrid */ "./src/toolbox/js/classes/util/AlignGrid.ts");
var Align_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/Align */ "./src/toolbox/js/classes/util/Align.ts");
var green_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/green.png */ "./src/toolbox/images/ui/buttons/round/green.png");
var orange_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/orange.png */ "./src/toolbox/images/ui/buttons/round/orange.png");
var FlatButton_1 = __webpack_require__(/*! ../../../toolbox/js/classes/ui/FlatButton */ "./src/toolbox/js/classes/ui/FlatButton.ts");
var Constants_1 = __webpack_require__(/*! ../../../toolbox/js/Constants */ "./src/toolbox/js/Constants.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/Snake3k/js/main.ts");
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
        Align_1.default.scaleToGameW(title, 0.8, this.game.config);
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
    };
    return SceneOver;
}(Phaser.Scene));
exports.default = SceneOver;


/***/ }),

/***/ "./src/Snake3k/js/scenes/SceneTitle.ts":
/*!*********************************************!*\
  !*** ./src/Snake3k/js/scenes/SceneTitle.ts ***!
  \*********************************************/
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
var Align_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/Align */ "./src/toolbox/js/classes/util/Align.ts");
var AlignGrid_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/AlignGrid */ "./src/toolbox/js/classes/util/AlignGrid.ts");
var orange_png_1 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/orange.png */ "./src/toolbox/images/ui/buttons/round/orange.png");
var green_png_2 = __webpack_require__(/*! ../../../toolbox/images/ui/buttons/round/green.png */ "./src/toolbox/images/ui/buttons/round/green.png");
var FlatButton_1 = __webpack_require__(/*! ../../../toolbox/js/classes/ui/FlatButton */ "./src/toolbox/js/classes/ui/FlatButton.ts");
var Constants_1 = __webpack_require__(/*! ../../../toolbox/js/Constants */ "./src/toolbox/js/Constants.ts");
var main_1 = __webpack_require__(/*! ../main */ "./src/Snake3k/js/main.ts");
var MediaManager_1 = __webpack_require__(/*! ../../../toolbox/js/classes/util/MediaManager */ "./src/toolbox/js/classes/util/MediaManager.ts");
var background_title_mp3_1 = __webpack_require__(/*! ../../audio/background_title.mp3 */ "./src/Snake3k/audio/background_title.mp3");
var SoundButtons_1 = __webpack_require__(/*! ../../../toolbox/js/classes/ui/SoundButtons */ "./src/toolbox/js/classes/ui/SoundButtons.ts");
var SceneTitle = /** @class */ (function (_super) {
    __extends(SceneTitle, _super);
    function SceneTitle() {
        var _this = _super.call(this, { key: 'SceneTitle' }) || this;
        _this.startGame = function (params) {
            console.log(params);
            _this.scene.start('SceneMain');
            _this.mediaManager.stop();
        };
        return _this;
    }
    SceneTitle.prototype.preload = function () {
        this.load.image('title', title_png_1.default);
        this.load.image("buttonGreenRound", green_png_2.default);
        this.load.image("buttonOrangeRound", orange_png_1.default);
        this.load.audio('background_title', [background_title_mp3_1.default]);
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
        Align_1.default.scaleToGameW(title, 0.8, this.game.config);
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
        this.mediaManager.setBackgroundMusic('background_title');
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
var Align_1 = __webpack_require__(/*! ../util/Align */ "./src/toolbox/js/classes/util/Align.ts");
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
        Align_1.default.scaleToGameW(_this.back, 0.1, config.gameConfig);
        Align_1.default.scaleToGameW(_this.onIcon, 0.05, config.gameConfig);
        Align_1.default.scaleToGameW(_this.offIcon, 0.05, config.gameConfig);
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

/***/ "./src/toolbox/js/classes/util/Align.ts":
/*!**********************************************!*\
  !*** ./src/toolbox/js/classes/util/Align.ts ***!
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
            if (_this.background_title) {
                if (_this.model.musicOn) {
                    _this.background_title.play();
                }
                else {
                    _this.background_title.stop();
                }
            }
        };
        this.setBackgroundMusic = function (key) {
            console.log(_this.background_title);
            _this.background_title = _this.screen.sound.add(key, { volume: 0.5, loop: true });
            _this.musicChanged();
        };
        this.stop = function () {
            _this.background_title.stop();
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NuYWtlM2svYXVkaW8vYmFja2dyb3VuZF9tYWluLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvU25ha2Uzay9hdWRpby9iYWNrZ3JvdW5kX3RpdGxlLm1wMyIsIndlYnBhY2s6Ly8vLi9zcmMvU25ha2Uzay9hdWRpby9jb2luLndhdiIsIndlYnBhY2s6Ly8vLi9zcmMvU25ha2Uzay9pbWFnZXMvYmFja2dyb3VuZC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL1NuYWtlM2svanMvY2xhc3Nlcy9DYW1lcmFNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9TbmFrZTNrL2pzL2NsYXNzZXMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TbmFrZTNrL2pzL2VudW1zL1RyYXZlbERpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU25ha2Uzay9qcy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9TbmFrZTNrL2pzL3NjZW5lcy9TY2VuZU1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NuYWtlM2svanMvc2NlbmVzL1NjZW5lT3Zlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU25ha2Uzay9qcy9zY2VuZXMvU2NlbmVUaXRsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9pbWFnZXMvdGl0bGUucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2ltYWdlcy91aS9idXR0b25zL3JvdW5kL2dyZWVuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9pbWFnZXMvdWkvYnV0dG9ucy9yb3VuZC9vcmFuZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2ltYWdlcy91aS9pY29ucy9tdXNpY19vZmYucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2ltYWdlcy91aS9pY29ucy9tdXNpY19vbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvaW1hZ2VzL3VpL2ljb25zL3NmeF9vZmYucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2ltYWdlcy91aS9pY29ucy9zZnhfb24ucG5nIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2ltYWdlcy91aS90b2dnbGVzL2dyZWVuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvanMvY2xhc3Nlcy9Nb2RlbENvbnRyb2xsZXIvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL01vZGVsQ29udHJvbGxlci9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL2NvbXBvbmVudHMvU2NvcmVCb3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xib3gvanMvY2xhc3Nlcy91aS9GbGF0QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL2NsYXNzZXMvdWkvU291bmRCdXR0b25zLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL2NsYXNzZXMvdWkvVG9nZ2xlQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9BbGlnbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJveC9qcy9jbGFzc2VzL3V0aWwvQWxpZ25HcmlkLnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9NZWRpYU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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RCxlQUFLLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxlQUFLLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUxRCxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFMUIsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2QsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzdCO1FBRUQsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QyxJQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUM7WUFDUixLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUM7WUFDVCxLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFFRCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFOUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUNs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QyxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBNEJMLG1CQUFDO0FBQUQsQ0FBQztBQUVELGtCQUFlLFlBQVksQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL1NuYWtlM2svanMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZmQyNDkzZTkzOWZjYjg5ZjI1ZTkxMDMwYTA5NzRmM2EtYmFja2dyb3VuZF9tYWluLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYzZjYzY1N2Q3MjY2MzZjZDA0ZGJiYjUxNzM4OWNjYTgtYmFja2dyb3VuZF90aXRsZS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzI5ZGFkMjVmNThjZTcxNjBlNmVjMWUzMDQ0ZWU3YjdlLWNvaW4ud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8zOGJiOGIzODU5NjU1N2U1M2E2NThhOGRjNjJiNWE2Mi1iYWNrZ3JvdW5kLmpwZ1wiOyIsImltcG9ydCBDYW1lcmFIaW50IGZyb20gXCIuL0NhbWVyYUhpbnRcIjtcclxuXHJcbmludGVyZmFjZSBJU2NvcmVib3hDb25maWcge1xyXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZVxyXG59XHJcblxyXG5jbGFzcyBDYW1lcmFNYW5hZ2VyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgY2FtZXJhSGludHM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElTY29yZWJveENvbmZpZywgY2FtZXJhOiBQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkNhbWVyYSl7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnLnNjZW5lKVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gY29uZmlnLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cclxuICAgICAgICAvLyBBZGQgY2FtZXJhIGhpbnRzIGJlZm9yZSB3ZSBzdGFydCBtb3ZpbmcgdGhlIGNhbWVyYSBhcm91bmQgd2l0aCAnZm9sbG93J1xyXG4gICAgICAgIHRoaXMuY2FtZXJhSGludHMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCgpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2FtZXJhSGludHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENhbWVyYUhpbnRzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBoaW50cyA9IFtcclxuICAgICAgICB7IC8vIFRSIENvcm5lciBIb3Jpem9udGFsXHJcbiAgICAgICAgICAgIHg6IDQwMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICBhbHBoYTogMC41LFxyXG4gICAgICAgICAgICBzdGFydERlZzogLTYwLFxyXG4gICAgICAgICAgICBlbmREZWc6IC0zMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyAvLyBUUiBDb3JuZXIgVmVydGljYWxcclxuICAgICAgICAgICAgeDogNDk1LFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiAtNjAsXHJcbiAgICAgICAgICAgIGVuZERlZzogLTMwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIFJpZ2h0XHJcbiAgICAgICAgICAgIHg6IDQ5NSxcclxuICAgICAgICAgICAgeTogMTUwLFxyXG4gICAgICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiAtMzAsXHJcbiAgICAgICAgICAgIGVuZERlZzogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgLy8gQlIgQ29ybmVyIEhvcml6b250YWxcclxuICAgICAgICAgICAgeDogNDAwLFxyXG4gICAgICAgICAgICB5OiA0OTUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNSxcclxuICAgICAgICAgICAgYWxwaGE6IDAuNSxcclxuICAgICAgICAgICAgc3RhcnREZWc6IDMwLFxyXG4gICAgICAgICAgICBlbmREZWc6IDYwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIEJSIENvcm5lciBWZXJ0aWNhbFxyXG4gICAgICAgICAgICB4OiA0OTUsXHJcbiAgICAgICAgICAgIHk6IDQwMCxcclxuICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICBhbHBoYTogMC41LFxyXG4gICAgICAgICAgICBzdGFydERlZzogMzAsXHJcbiAgICAgICAgICAgIGVuZERlZzogNjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgLy8gQm90dG9tXHJcbiAgICAgICAgICAgIHg6IDE1MCxcclxuICAgICAgICAgICAgeTogNDk1LFxyXG4gICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiA2MCxcclxuICAgICAgICAgICAgZW5kRGVnOiAxMjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgLy8gQkwgQ29ybmVyIEhvcml6b250YWxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogNDk1LFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLjUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGVnOiAxMjAsXHJcbiAgICAgICAgICAgIGVuZERlZzogMTUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIEJMIENvcm5lciBWZXJ0aWNhbFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiA0MDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgYWxwaGE6IDAuNSxcclxuICAgICAgICAgICAgc3RhcnREZWc6IDEyMCxcclxuICAgICAgICAgICAgZW5kRGVnOiAxNTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgLy8gTGVmdFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAxNTAsXHJcbiAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICAgICAgYWxwaGE6IDAuNSxcclxuICAgICAgICAgICAgc3RhcnREZWc6IDE1MCwgLy8gVE9ETzotIFxyXG4gICAgICAgICAgICBlbmREZWc6IC0xNTAsIC8vIFRPRE86LSBcclxuICAgICAgICAgICAgYm91bmRzOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFRMIENvcm5lciBIb3Jpem9udGFsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNSxcclxuICAgICAgICAgICAgYWxwaGE6IDAuNSxcclxuICAgICAgICAgICAgc3RhcnREZWc6IC0xNTAsXHJcbiAgICAgICAgICAgIGVuZERlZzogLTEyMFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAvLyBUTCBDb3JuZXIgVmVydGljYWxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICBhbHBoYTogMC41LFxyXG4gICAgICAgICAgICBzdGFydERlZzogLTE1MCxcclxuICAgICAgICAgICAgZW5kRGVnOiAtMTIwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIFRvcFxyXG4gICAgICAgICAgICB4OiAxNTAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNSxcclxuICAgICAgICAgICAgYWxwaGE6IDAuNSxcclxuICAgICAgICAgICAgc3RhcnREZWc6IC0xMjAsXHJcbiAgICAgICAgICAgIGVuZERlZzogLTYwXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIGhpbnRzLmZvckVhY2goaGludCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpbnRSZWN0ID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKGhpbnQueCwgaGludC55LCBoaW50LndpZHRoLCBoaW50LmhlaWdodCwgMHgzNmZmMTQsIDAuNzUpLnNldFNjcm9sbEZhY3RvcigwKS5zZXRPcmlnaW4oMCwgMCkgYXMgQ2FtZXJhSGludDtcclxuICAgICAgICAgICAgaGludFJlY3QuU3RhcnREZWcgPSBoaW50LnN0YXJ0RGVnO1xyXG4gICAgICAgICAgICBoaW50UmVjdC5FbmREZWcgPSBoaW50LmVuZERlZztcclxuICAgICAgICAgICAgaGludFJlY3QuZ29Ub0JvdW5kcyA9IGhpbnQuYm91bmRzO1xyXG4gICAgICAgICAgICBoaW50UmVjdC5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFIaW50cy5hZGQoaGludFJlY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86LSBNYWtlIGdlbmVyaWNcclxuICAgIHByaXZhdGUgb2JqZWN0SW5DYW1lcmFWaWV3cG9ydCA9IChvYmo6IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLmNhbWVyYS5taWRQb2ludC54IC0gMjUwO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW1lcmEubWlkUG9pbnQueCArIDI1MDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy5jYW1lcmEubWlkUG9pbnQueSAtIDI1MDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhbWVyYS5taWRQb2ludC55ICsgMjUwO1xyXG5cclxuICAgICAgICBjb25zdCBib3VuZHMgPSBuZXcgUGhhc2VyLkdlb20uUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHJldHVybiBib3VuZHMuY29udGFpbnMob2JqLngsIG9iai55KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dDYW1lcmFIaW50cyA9IChzaG93OiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFIaW50cy5jaGlsZHJlbi5pdGVyYXRlKChwYXJ0OiBDYW1lcmFIaW50KSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnQuZmlsbENvbG9yID0gMHgzNmZmMTQ7IC8vIEdyZWVuXHJcbiAgICAgICAgICAgIHBhcnQuc2V0VmlzaWJsZShzaG93KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZ2hsaWdodENhbWVyYUhpbnQgPSAoYW5nbGU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhSGludHMuY2hpbGRyZW4uaXRlcmF0ZSgoY2hpbGQ6IENhbWVyYUhpbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKChhbmdsZSA+IGNoaWxkLlN0YXJ0RGVnICYmIGFuZ2xlIDwgY2hpbGQuRW5kRGVnKSB8fCAoY2hpbGQuZ29Ub0JvdW5kcyAmJiAoYW5nbGUgPCBjaGlsZC5FbmREZWcgfHwgYW5nbGUgPiBjaGlsZC5TdGFydERlZykpKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFuZ2xlVG9UYXJnZXQgPSAoaGVhZDogUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlLCB0YXJnZXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5nbGVSYWRpYW4gPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKGhlYWQueCwgaGVhZC55LCB0YXJnZXQueCwgdGFyZ2V0LnkpO1xyXG4gICAgICAgIGxldCBhbmdsZURlZyA9IGFuZ2xlUmFkaWFuICogMTgwIC8gTWF0aC5QSVxyXG5cclxuICAgICAgICByZXR1cm4gYW5nbGVEZWc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUhpbnRzID0gKHBsYXllckhlYWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSwgdGFyZ2V0OiBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGUpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMub2JqZWN0SW5DYW1lcmFWaWV3cG9ydCh0YXJnZXQpKXsgIFxyXG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodENhbWVyYUhpbnQodGhpcy5nZXRBbmdsZVRvVGFyZ2V0KHBsYXllckhlYWQsIHRhcmdldCkpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2FtZXJhSGludHMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtZXJhTWFuYWdlcjsiLCJpbXBvcnQgUGxheWVyUGFydCBmcm9tIFwiLi9QbGF5ZXJQYXJ0XCI7XHJcbmltcG9ydCBBbGlnbkdyaWQgZnJvbSBcIi4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL0FsaWduR3JpZFwiO1xyXG5pbXBvcnQgVHJhdmVsRGlyZWN0aW9uIGZyb20gXCIuLi9lbnVtcy9UcmF2ZWxEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2FtZSwgZW1pdHRlciB9IGZyb20gXCIuLi9tYWluXCI7XHJcbmltcG9ydCBJR3JpZENvbmZpZyBmcm9tIFwiLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL0lHcmlkQ29uZmlnXCI7XHJcbmltcG9ydCBGb29kIGZyb20gXCIuL0Zvb2RcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vLi4vdG9vbGJveC9qcy9Db25zdGFudHNcIjtcclxuXHJcbmNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG4gICAgcHJpdmF0ZSBwYXJ0czogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwOyAvLyBUaGUgZ3JpZCBpZCBvZiBlYWNoIHBhcnRcclxuICAgIHByaXZhdGUgZ3JpZDogQWxpZ25HcmlkO1xyXG4gICAgcHJpdmF0ZSBncmlkQ29uZmlnOiBJR3JpZENvbmZpZztcclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZzogUGhhc2VyLkNvcmUuQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBhZGRUYWlsUGllY2U6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9pc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBnZXQgaXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlYWQoKTogUGxheWVyUGFydCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydHMuZ2V0Rmlyc3RBbGl2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UGxheWVyc0hlYWRQb3NpdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQuZ3JpZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmdWxsUG9zaXRpb24oKTogbnVtYmVyW10ge1xyXG4gICAgICAgIC8vIFJldHVybiBhbiBhcnJheSB3aXRoIHRoZSBjdXJyZW50IGluZGV4IG9mIGFsbCBwYXJ0c1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcnRzLmNoaWxkcmVuLmdldEFycmF5KCkubWFwKCAocGFydDogUGxheWVyUGFydCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydC5ncmlkSW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uV2l0aG91dEhlYWQoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGNvbnN0IGZ1bGxQb3NpdGlvbiA9IHRoaXMuZnVsbFBvc2l0aW9uO1xyXG4gICAgICAgIGZ1bGxQb3NpdGlvbi5zaGlmdCgpXHJcbiAgICAgICAgcmV0dXJuIGZ1bGxQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGFydEluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCBzY2VuZTogUGhhc2VyLlNjZW5lLCBncmlkOiBBbGlnbkdyaWQsIGdyaWRDb25maWc6IElHcmlkQ29uZmlnLCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWcpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLnBhcnRzID0gdGhpcy5zY2VuZS5hZGQuZ3JvdXAoKTtcclxuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xyXG4gICAgICAgIHRoaXMuZ3JpZENvbmZpZyA9IGdyaWRDb25maWc7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29uZmlnID0gZ2FtZUNvbmZpZztcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdEhlYWQgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgMjAsIDIwLCAweGZmZmZmZikgYXMgUGxheWVyUGFydDtcclxuICAgICAgICAvLyBBbGlnbi5zY2FsZVRvR2FtZVcocmVjdEhlYWQsIDAuMDQsIGdhbWVDb25maWcpXHJcbiAgICAgICAgZ3JpZC5wbGFjZUF0SW5kZXgoc3RhcnRJbmRleCwgcmVjdEhlYWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlY3RIZWFkLmdyaWRJbmRleCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgcmVjdEhlYWQuZGlyZWN0aW9uT2ZUcmF2ZWwgPSBUcmF2ZWxEaXJlY3Rpb24uUklHSFQ7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hZGQocmVjdEhlYWQpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0VGFpbCA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCAyMCwgMjAsIDB4ZmZmZmZmKSBhcyBQbGF5ZXJQYXJ0O1xyXG4gICAgICAgICAgICAvLyBBbGlnbi5zY2FsZVRvR2FtZVcocmVjdFRhaWwsIDAuMDQsIGdhbWVDb25maWcpXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uVGFpbCA9IHN0YXJ0SW5kZXggLSBpbmRleDtcclxuICAgICAgICAgICAgcmVjdFRhaWwuZ3JpZEluZGV4ID0gcG9zaXRpb25UYWlsO1xyXG4gICAgICAgICAgICB0aGlzLmdyaWQucGxhY2VBdEluZGV4KHN0YXJ0SW5kZXggLSBpbmRleCwgcmVjdFRhaWwpOyAgLy8gSGVhZCBpcyBvbiAgdGhlIHJpZ2h0LCB0YWlsIGxlZnQgc28gLSB0aGUgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuYWRkKHJlY3RUYWlsKTsgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkUGVuZGluZ1RhaWxQaWVjZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5hZGRUYWlsUGllY2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZFRhaWxQaWVjZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZCA9IHRoaXMucGFydHMuZ2V0Q2hpbGRyZW4oKVt0aGlzLnBhcnRzLmdldExlbmd0aCgpIC0gMV0gYXMgUGxheWVyUGFydDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjdFRhaWwgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgMjAsIDIwLCAweGZmZmZmZikgYXMgUGxheWVyUGFydDtcclxuICAgICAgICAvLyBBbGlnbi5zY2FsZVRvR2FtZVcocmVjdFRhaWwsIDAuMDQsIHRoaXMuZ2FtZUNvbmZpZylcclxuICAgICAgICByZWN0VGFpbC5ncmlkSW5kZXggPSBsYXN0Q2hpbGQuZ3JpZEluZGV4OyAvLyB0aGUgcG9zaXRpb24gb2Ygd2hhdCB3ZSBhcmUgZ29pbmcgdG8gZm9sbG93XHJcbiAgICAgICAgcmVjdFRhaWwuZGlyZWN0aW9uT2ZUcmF2ZWwgPSBsYXN0Q2hpbGQuZGlyZWN0aW9uT2ZUcmF2ZWw7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc3RhcnRpbmcgcG9zaXRpb24gYnkgZ29pbmcgaW50IGVoIG9wcG9zaXRlIGRpcmVjdGlvbiBvZiBjdXJyZW50IHRyYXZlbFxyXG4gICAgICAgIHJlY3RUYWlsLmRpcmVjdGlvbk9mVHJhdmVsID0gdGhpcy5nZXRPcHBvc2luZ0RpcmVjdGlvbihsYXN0Q2hpbGQuZGlyZWN0aW9uT2ZUcmF2ZWwpXHJcbiAgICAgICAgcmVjdFRhaWwuZ3JpZEluZGV4ID0gdGhpcy5nZXROZXh0R3JpZFBvc2l0aW9uKHJlY3RUYWlsKTtcclxuICAgICAgICByZWN0VGFpbC5kaXJlY3Rpb25PZlRyYXZlbCA9IHRoaXMuZ2V0T3Bwb3NpbmdEaXJlY3Rpb24ocmVjdFRhaWwuZGlyZWN0aW9uT2ZUcmF2ZWwpOy8vIEJlc3VyZSB0byByZXNldCB0cmF2ZWwgZGlyZWN0aW9uXHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgocmVjdFRhaWwuZ3JpZEluZGV4LCByZWN0VGFpbCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hZGQocmVjdFRhaWwpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldE9wcG9zaW5nRGlyZWN0aW9uID0gKGRpcmVjdGlvbjogVHJhdmVsRGlyZWN0aW9uKTogVHJhdmVsRGlyZWN0aW9uID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFRyYXZlbERpcmVjdGlvbi5VUDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmF2ZWxEaXJlY3Rpb24uRE9XTjtcclxuICAgICAgICAgICAgY2FzZSBUcmF2ZWxEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmF2ZWxEaXJlY3Rpb24uVVA7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhdmVsRGlyZWN0aW9uLkxFRlQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHJhdmVsRGlyZWN0aW9uLlJJR0hUO1xyXG4gICAgICAgICAgICBjYXNlIFRyYXZlbERpcmVjdGlvbi5SSUdIVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUcmF2ZWxEaXJlY3Rpb24uTEVGVDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXVlUGllY2VBZGRpdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFkZFRhaWxQaWVjZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYXZlbERpcmVjdGlvbiA9IChkaXJlY3Rpb246IFRyYXZlbERpcmVjdGlvbikgID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5wYXJ0cy5nZXRGaXJzdEFsaXZlKCk7IFxyXG5cclxuICAgICAgICAvLyBDaGVjayB3ZSBjYW50IHR1cm4gYmFjayBvbiBvdXJzZWx2ZXNcclxuICAgICAgICBpZih0aGlzLmdldE9wcG9zaW5nRGlyZWN0aW9uKGhlYWQuZGlyZWN0aW9uT2ZUcmF2ZWwpICE9PSBkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBoZWFkLm5leHRUcmF2ZWxEaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlUGxheWVyID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIEFsd2F5cyBzdGFydCB3aXRoIHRoZSBoZWFkXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUGFydDogUGxheWVyUGFydCA9IHRoaXMucGFydHMuZ2V0Rmlyc3RBbGl2ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnRzLmNoaWxkcmVuLml0ZXJhdGUoKGNoaWxkOiBQbGF5ZXJQYXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFNob3VsZCB3ZSBiZSBjaGFuZ2luZyBkaXJlY3Rpb24/XHJcbiAgICAgICAgICAgIGNoaWxkLmRpcmVjdGlvbk9mVHJhdmVsID0gY2hpbGQubmV4dFRyYXZlbERpcmVjdGlvbiB8fCBjaGlsZC5kaXJlY3Rpb25PZlRyYXZlbCB8fCBwcmV2aW91c1BhcnQuZGlyZWN0aW9uT2ZUcmF2ZWw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zaXRpb24gPSB0aGlzLmdldE5leHRHcmlkUG9zaXRpb24oY2hpbGQpXHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgobmV4dFBvc2l0aW9uLCBjaGlsZCk7XHJcbiAgICAgICAgICAgIGNoaWxkLmdyaWRJbmRleCA9IG5leHRQb3NpdGlvbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlZSBpZiB0aGUgcGFydCBpbiBmcm9udCBvZiB1cyBpcyBnb2luZyBhIGRpZmZlcmVudCB3YXksIGFuZCBmb2xsb3cgdGhlbVxyXG4gICAgICAgICAgICBjaGlsZC5uZXh0VHJhdmVsRGlyZWN0aW9uID0gcHJldmlvdXNQYXJ0LmRpcmVjdGlvbk9mVHJhdmVsO1xyXG5cclxuICAgICAgICAgICAgLy8gU28gYW55IG90aGVyIHBhcnRzIGNhbiBmb2xsb3cgdXNcclxuICAgICAgICAgICAgcHJldmlvdXNQYXJ0ID0gY2hpbGQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFmdGVyIHdlIGhhdmUgbW92ZWQsIGFkZCB0YWlsIHBpZWNlc1xyXG4gICAgICAgIHRoaXMuYWRkUGVuZGluZ1RhaWxQaWVjZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMga2lsbCA9IChjYWxsYmFjazogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5faXNEZWFkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnBhcnRzLmdldENoaWxkcmVuKCksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICB5OiBnYW1lLmNvbmZpZy5oZWlnaHQsXHJcbiAgICAgICAgICAgIGFuZ2xlOiAtMjcwLFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgY29tcGxldGVEZWxheTogMTAwMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZXh0R3JpZFBvc2l0aW9uID0gKHBhcnQ6IFBsYXllclBhcnQpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLmdyaWRDb25maWcucm93cztcclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5ncmlkQ29uZmlnLmNvbHVtbnM7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocGFydC5kaXJlY3Rpb25PZlRyYXZlbCl7XHJcbiAgICAgICAgICAgIGNhc2UgVHJhdmVsRGlyZWN0aW9uLlJJR0hUOntcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0UG9zaXRpb24gPSAgcGFydC5ncmlkSW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IobmV4dFBvc2l0aW9uIC8gY29sdW1ucykgPiBNYXRoLmZsb29yKHBhcnQuZ3JpZEluZGV4IC8gY29sdW1ucykpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQb3NpdGlvbiAtPSBjb2x1bW5zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRyYXZlbERpcmVjdGlvbi5ET1dOOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gIHBhcnQuZ3JpZEluZGV4ICsgcm93cztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihuZXh0UG9zaXRpb24gLyByb3dzKSA+PSByb3dzKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UG9zaXRpb24gLT0gcm93cyAqIGNvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVHJhdmVsRGlyZWN0aW9uLlVQOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0gIHBhcnQuZ3JpZEluZGV4IC0gcm93cztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihuZXh0UG9zaXRpb24gLyByb3dzKSA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQb3NpdGlvbiArPSByb3dzICogY29sdW1ucztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0UG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUcmF2ZWxEaXJlY3Rpb24uTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRQb3NpdGlvbiA9ICBwYXJ0LmdyaWRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihuZXh0UG9zaXRpb24gLyBjb2x1bW5zKSA8IE1hdGguZmxvb3IocGFydC5ncmlkSW5kZXggLyBjb2x1bW5zKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBvc2l0aW9uICs9IGNvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja1BsYXllckNvbGxpc2lvbiA9IChmb29kVGFyZ2V0OiBGb29kLCBoZWFkOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlLCBwb3J0YWxUYXJnZXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5BcmMpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkSW5kZXggPSB0aGlzLmN1cnJlbnRQbGF5ZXJzSGVhZFBvc2l0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrUGxheWVyQ29sbGlzaW9uV2l0aEZvb2QoaGVhZEluZGV4LCBmb29kVGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNoZWNrUGxheWVyQ29sbGlzaW9uV2l0aFNlbGZTbmFrZShoZWFkSW5kZXgsIHRoaXMucG9zaXRpb25XaXRob3V0SGVhZCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1BsYXllckNvbGxpc2lvbldpdGhQb3J0YWwoaGVhZCwgcG9ydGFsVGFyZ2V0KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tQbGF5ZXJDb2xsaXNpb25XaXRoUG9ydGFsKGhlYWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUsIHBvcnRhbFRhcmdldDogUGhhc2VyLkdhbWVPYmplY3RzLkFyYyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBvcnRhbFRhcmdldC5nZXRCb3VuZHMoKS5jb250YWlucyhoZWFkLngsIGhlYWQueSkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOU0lERVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBsYXllciBoYXMgY29sbGlkZWQgd2l0aCBmb29kLCBhbmQgZWF0IGl0IGlmIG5lY2Vzc2FyeVxyXG4gICAgcHJpdmF0ZSBjaGVja1BsYXllckNvbGxpc2lvbldpdGhGb29kID0gKGhlYWRJbmRleDogbnVtYmVyLCBmb29kVGFyZ2V0OiBGb29kKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvb2RUYXJnZXQgJiYgaGVhZEluZGV4ID4gLTEpe1xyXG4gICAgICAgICAgICBpZiAoaGVhZEluZGV4ID09IGZvb2RUYXJnZXQuZ3JpZEluZGV4KXtcclxuICAgICAgICAgICAgICAgIC8vIE9NIE5PTSBOT00gTk9NXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlUGllY2VBZGRpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoQ29uc3RhbnRzLlBMQVlfU09VTkQsIFwiY29pblwiKTtcclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChDb25zdGFudHMuRk9PRF9FQVRFTiwgZm9vZFRhcmdldClcclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChDb25zdGFudHMuVVBfUE9JTlRTLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUGxheWVyQ29sbGlzaW9uV2l0aFNlbGZTbmFrZSA9IChoZWFkSW5kZXg6IG51bWJlciwgc25ha2U6IG51bWJlcltdKSAgPT4ge1xyXG4gICAgICAgIGlmKHNuYWtlLmluZGV4T2YoaGVhZEluZGV4KSA+IC0xKXtcclxuICAgICAgICAgICAgLy8gdWggb2ghIFdlIGRlYWQuXHJcbiAgICAgICAgICAgIC8vIEZpcmUgYW4gZXZlbnQgb3Igc3VtaW5cclxuICAgICAgICAgICAgLy8gdGhpcy5zY2VuZS5jYW1lcmEuc2hha2UoMjUwKTtcclxuICAgICAgICAgICAgdGhpcy5raWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEhhdmUgZmluaXNoZWQgYW5pbWF0aW5nIHRoZSBwbGF5ZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc2NlbmUuc3RhcnQoXCJTY2VuZU92ZXJcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImVudW0gVHJhdmVsRGlyZWN0aW9uIHtcclxuICAgIFJJR0hUID0gMSxcclxuICAgIERPV04gPSAyLFxyXG4gICAgTEVGVCA9IDMsXHJcbiAgICBVUCA9IDQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYXZlbERpcmVjdGlvbjsiLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IFNjZW5lVGl0bGUgZnJvbSAnLi9zY2VuZXMvU2NlbmVUaXRsZSc7XHJcbmltcG9ydCBTY2VuZU1haW4gZnJvbSAnLi9zY2VuZXMvU2NlbmVNYWluJztcclxuaW1wb3J0IFNjZW5lT3ZlciBmcm9tICcuL3NjZW5lcy9TY2VuZU92ZXInO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL01vZGVsQ29udHJvbGxlci9Nb2RlbCc7XHJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy9Nb2RlbENvbnRyb2xsZXIvQ29udHJvbGxlcic7XHJcblxyXG5sZXQgaXNNb2JpbGUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoYE1vYmlsZWApO1xyXG5pZiAoaXNNb2JpbGUgPT0gLTEpe1xyXG4gICAgaXNNb2JpbGUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoYFRhYmxldGApO1xyXG59XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnX0Rlc2t0b3A6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogJ1NuYWtlM2snLFxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiAxMDAwLFxyXG4gICAgICAgIGhlaWdodDogMTAwMCxcclxuICAgIH0sXHJcbiAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgcGFyZW50OiAnZGl2LXBoYXNlci1nYW1lJyxcclxuICAgIHNjZW5lOiBbU2NlbmVUaXRsZSwgU2NlbmVNYWluLCBTY2VuZU92ZXJdXHJcbn07XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnX01vYmlsZTogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnU25ha2UzaycsXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgfSxcclxuICAgIHBhcmVudDogJ2Rpdi1waGFzZXItZ2FtZScsXHJcbiAgICBzY2VuZTogW1NjZW5lVGl0bGUsIFNjZW5lTWFpbiwgU2NlbmVPdmVyXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW1pdHRlciA9IG5ldyBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcigpO1xyXG5leHBvcnQgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoaXNNb2JpbGUgPiAtMSwgZW1pdHRlcik7XHJcbmV4cG9ydCBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIobW9kZWwpO1xyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShpc01vYmlsZSA+IC0xID8gZ2FtZUNvbmZpZ19Nb2JpbGUgOiBnYW1lQ29uZmlnX0Rlc2t0b3ApOyIsImltcG9ydCBJR3JpZENvbmZpZyBmcm9tIFwiLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL0lHcmlkQ29uZmlnXCI7XHJcbmltcG9ydCBBbGlnbkdyaWQgZnJvbSBcIi4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL0FsaWduR3JpZFwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9jbGFzc2VzL1BsYXllclwiO1xyXG5pbXBvcnQgVHJhdmVsRGlyZWN0aW9uIGZyb20gXCIuLi9lbnVtcy9UcmF2ZWxEaXJlY3Rpb25cIjtcclxuaW1wb3J0IEZvb2QgZnJvbSBcIi4uL2NsYXNzZXMvRm9vZFwiO1xyXG5pbXBvcnQgU2NvcmVCb3ggZnJvbSBcIi4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy9jb21wb25lbnRzL1Njb3JlQm94XCI7XHJcbmltcG9ydCB7IG1vZGVsLCBlbWl0dGVyIH0gZnJvbSBcIi4uL21haW5cIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vLi4vdG9vbGJveC9qcy9Db25zdGFudHNcIjtcclxuXHJcbmltcG9ydCBjb2luU291bmQgZnJvbSAnLi4vLi4vYXVkaW8vY29pbi53YXYnO1xyXG5cclxuaW1wb3J0IGJhY2tncm91bmRJbWcgZnJvbSAnLi4vLi4vaW1hZ2VzL2JhY2tncm91bmQuanBnJztcclxuaW1wb3J0IENhbWVyYU1hbmFnZXIgZnJvbSBcIi4uL2NsYXNzZXMvQ2FtZXJhTWFuYWdlclwiO1xyXG5pbXBvcnQgTWVkaWFNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9NZWRpYU1hbmFnZXJcIjtcclxuaW1wb3J0IElNZWRpYU1hbmFnZXJDb25maWcgZnJvbSBcIi4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy9JTWVkaWFNYW5hZ2VyQ29uZmlnXCI7XHJcblxyXG5pbXBvcnQgYmFja2dyb3VuZE1haW5Tb3VuZG1wMyBmcm9tICcuLi8uLi9hdWRpby9iYWNrZ3JvdW5kX21haW4ubXAzJztcclxuXHJcbmNsYXNzIFNjZW5lTWFpbiBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBncmlkQ2VsbEhlaWdodDogbnVtYmVyID0gMjA7XHJcbiAgICBwcml2YXRlIGdyaWRDZWxsV2lkdGg6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIHByaXZhdGUgbWVkaWFNYW5hZ2VyOiBNZWRpYU1hbmFnZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBncmlkOiBBbGlnbkdyaWQ7XHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xyXG4gICAgcHJpdmF0ZSBrZXlib2FyZElucHV0X0g6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwcml2YXRlIHNjb3JlQm94OiBTY29yZUJveDtcclxuICAgIHByaXZhdGUgY2FtZXJhTWFuYWdlcjogQ2FtZXJhTWFuYWdlcjtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVTcGVlZDogbnVtYmVyID0gMTAwOyAvLyBtcyBiZXR3ZWVuIG1vdmluZyB0aGUgcGxheWVyXHJcblxyXG4gICAgcHJpdmF0ZSBncmlkQ29uZmlnOiBJR3JpZENvbmZpZztcclxuICAgIHByaXZhdGUgc2hvdWxkQWRkRm9vZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgcG9ydGFsOiBQaGFzZXIuR2FtZU9iamVjdHMuQXJjXHJcblxyXG4gICAgcHJpdmF0ZSBmb29kOiBGb29kO1xyXG5cclxuICAgIHByaXZhdGUgYmFjazogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoJ1NjZW5lTWFpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKXtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCBiYWNrZ3JvdW5kSW1nKTtcclxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2NvaW4nLCBbY29pblNvdW5kXSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdiYWNrZ3JvdW5kX21haW4nLCBbYmFja2dyb3VuZE1haW5Tb3VuZG1wM10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuYmFjayA9IHRoaXMuYWRkLmltYWdlKDAsIDAsICdiYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5iYWNrLnNldE9yaWdpbigwLCAwKTtcclxuICAgICAgICBtb2RlbC5zY29yZSA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSArdGhpcy5nYW1lLmNvbmZpZy53aWR0aCAvIHRoaXMuZ3JpZENlbGxXaWR0aDtcclxuICAgICAgICBjb25zdCByb3dzID0gK3RoaXMuZ2FtZS5jb25maWcuaGVpZ2h0IC8gdGhpcy5ncmlkQ2VsbEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gR3JpZFxyXG4gICAgICAgIHRoaXMuZ3JpZENvbmZpZyA9IHtcclxuICAgICAgICAgICAgcm93czogcm93cyxcclxuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBBbGlnbkdyaWQodGhpcy5ncmlkQ29uZmlnLCB0aGlzLmdhbWUuY29uZmlnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTY29yZSBCb3hcclxuICAgICAgICB0aGlzLnNjb3JlQm94ID0gbmV3IFNjb3JlQm94KHtzY2VuZTogdGhpcywgeDogNDY1LCB5OiAyNSwgb3JpZ2luWDogMSwgb3JpZ2luWTogMX0sIG1vZGVsKTsgLy8gMSB6b29tXHJcblxyXG4gICAgICAgIC8vIFBsYXllclxyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcig5MCwgNSwgdGhpcywgdGhpcy5ncmlkLCB0aGlzLmdyaWRDb25maWcsIHRoaXMuZ2FtZS5jb25maWcpO1xyXG5cclxuICAgICAgICAvLyBDYW1lcmFzXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Qm91bmRzKDAsIDAsICt0aGlzLmdhbWUuY29uZmlnLndpZHRoLCArdGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENhbWVyYU1hbmFnZXJcclxuICAgICAgICB0aGlzLmNhbWVyYU1hbmFnZXIgPSBuZXcgQ2FtZXJhTWFuYWdlcih7c2NlbmU6IHRoaXN9LCB0aGlzLmNhbWVyYXMubWFpbik7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnN0YXJ0Rm9sbG93KHRoaXMucGxheWVyLmhlYWQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldExlcnAoMC4xLCAwLjEpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Vmlld3BvcnQoKCt0aGlzLmdhbWUuY29uZmlnLndpZHRoIC0gNTAwKSAvIDIsICgrdGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQgLSA1MDApIC8gMiwgNTAwLCA1MDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1lZGlhIE1hbmFnZXJcclxuICAgICAgICBpZiAoIXRoaXMubWVkaWFNYW5hZ2VyKXtcclxuICAgICAgICBjb25zdCBtZWRpYUNvbmZpZzogSU1lZGlhTWFuYWdlckNvbmZpZyA9IHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWVkaWFNYW5hZ2VyID0gbmV3IE1lZGlhTWFuYWdlcihtZWRpYUNvbmZpZywgbW9kZWwpO1xyXG4gICAgICAgIHRoaXMubWVkaWFNYW5hZ2VyLnNldEJhY2tncm91bmRNdXNpYygnYmFja2dyb3VuZF9tYWluJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByZXZpb3VzVGltZSA9IHRoaXMuZ2FtZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdXJzb3JLZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZElucHV0X0ggPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuSCk7XHJcbiAgICAgICAgdGhpcy5zaG91bGRBZGRGb29kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZW1pdHRlci5vZmYoQ29uc3RhbnRzLkZPT0RfRUFURU4pLm9uKENvbnN0YW50cy5GT09EX0VBVEVOLCB0aGlzLmZvb2RFYXRlbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkUG9ydGFsKCk7XHJcbiAgICAgICAgLy8gdGhpcy5ncmlkLmRlYnVnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRQb3J0YWwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9ydGFsKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvcnRhbCA9IHRoaXMuYWRkLmNpcmNsZSgwLCAwLCAxMDAsIDB4ZmYwMDAwLCAwLjUpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgoMTIyNSwgdGhpcy5wb3J0YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ3Jvd1BvcnRhbCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5wb3J0YWwucmFkaXVzID0gdGhpcy5wb3J0YWwucmFkaXVzICogMS4xMjU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb29kRWF0ZW4gPSAoZm9vZDogRm9vZCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRm9vZEl0ZW0oZm9vZCk7XHJcbiAgICAgICAgdGhpcy5zaG91bGRBZGRGb29kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm93UG9ydGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5pc0RlYWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPbmx5IG1vdmUgaWYgd2UgaGF2ZSBoaXQgdGhlIGVwb2NoIFxyXG4gICAgICAgIGlmKE1hdGguZmxvb3IodGltZSkgLSB0aGlzLmdhbWVTcGVlZCA+IHRoaXMucHJldmlvdXNUaW1lKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZSA9IE1hdGguZmxvb3IodGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVQbGF5ZXIoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNoZWNrUGxheWVyQ29sbGlzaW9uKHRoaXMuZm9vZCwgdGhpcy5wbGF5ZXIuaGVhZCwgdGhpcy5wb3J0YWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRQZW5kaW5nRm9vZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYU1hbmFnZXIudXBkYXRlSGludHModGhpcy5wbGF5ZXIuaGVhZCwgdGhpcy5mb29kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVzZXIgY2FuIHRlbGwgaXQgdG8gY2hhbmdlIGRpcmVjdGlvbiB3aGVuZXZlciB0aGV5IHdhbnRcclxuICAgICAgICBpZih0aGlzLmN1cnNvcktleXMudXAuaXNEb3duKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0VHJhdmVsRGlyZWN0aW9uKFRyYXZlbERpcmVjdGlvbi5VUCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY3Vyc29yS2V5cy5kb3duLmlzRG93bil7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFRyYXZlbERpcmVjdGlvbihUcmF2ZWxEaXJlY3Rpb24uRE9XTik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY3Vyc29yS2V5cy5sZWZ0LmlzRG93bil7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFRyYXZlbERpcmVjdGlvbihUcmF2ZWxEaXJlY3Rpb24uTEVGVCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY3Vyc29yS2V5cy5yaWdodC5pc0Rvd24pe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRUcmF2ZWxEaXJlY3Rpb24oVHJhdmVsRGlyZWN0aW9uLlJJR0hUKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRPRE86LSBBY3RpdmF0ZSB0aGUgcG93ZXJ1cFxyXG4gICAgICAgIC8vIGlmICh0aGlzLmtleWJvYXJkSW5wdXRfSC5pc0Rvd24pe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNob3dDYW1lcmFIaW50cyh0cnVlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIERFQlVHOi0gQWRkIHRhaWwgcGllY2VcclxuICAgICAgICBpZih0aGlzLmN1cnNvcktleXMuc3BhY2UuaXNEb3duKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucXVldWVQaWVjZUFkZGl0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBERUJVRzotIEFkZCBmb29kIHBpZWNlXHJcbiAgICAgICAgaWYodGhpcy5jdXJzb3JLZXlzLnNoaWZ0LmlzRG93bil7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkQWRkRm9vZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8gQ2FuIGJlIG1hZGUgZ2VuZXJpY1xyXG4gICAgcHJpdmF0ZSByZW1vdmVGb29kSXRlbSA9IChmb29kIDpGb29kKSA9PiB7XHJcbiAgICAgICAgZm9vZC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21JbmRleCA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGxldCBwbGFjZW1lbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5ncmlkQ29uZmlnLnJvd3MgKiB0aGlzLmdyaWRDb25maWcuY29sdW1ucykpO1xyXG5cclxuICAgICAgICBjb25zdCBvY2N1cGllZFNwYWNlID0gdGhpcy5wbGF5ZXIuZnVsbFBvc2l0aW9uO1xyXG5cclxuICAgICAgICAvLyBLZWVwIGdvaW5nIHVudGlsIHdlIGZpbmQgYW4gYXZhaWxhYmxlIGluZGV4XHJcbiAgICAgICAgLy8gVE9ETzotIFdoYXQgaWYgdGhlcmUgYXJlIE5PIGF2YWlsYWJsZSBzcXVhcmVzPyBUaGVyZSB3aWxsIGJlIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzIHRvIGNvbnNjaW91c2x5IGxvb2sgaW5zdGVhZFxyXG4gICAgICAgIC8vIG9mIHJlY3Vyc2l2ZWx5IGRyaWxsaW5nIHVudGlsIHdlIGhpdCBzb21ldGhpbmcuIFRPRE86LSBcclxuICAgICAgICBpZiAob2NjdXBpZWRTcGFjZS5pbmRleE9mKHBsYWNlbWVudCkgPiAtMSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUluZGV4KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGxhY2VtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkUGVuZGluZ0Zvb2QgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZEFkZEZvb2Qpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvdWxkQWRkRm9vZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGZvb2QgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwgMCwgMTAsIDEwLCAweGZmZmZmZikgYXMgRm9vZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmdldFJhbmRvbUluZGV4KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWxpZ24uc2NhbGVUb0dhbWVXKGZvb2QsIDAuMDIsIHRoaXMuZ2FtZS5jb25maWcpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgocGxhY2VtZW50LCBmb29kKTtcclxuICAgICAgICBmb29kLmdyaWRJbmRleCA9IHBsYWNlbWVudDtcclxuICAgICAgICB0aGlzLmZvb2QgPSBmb29kO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjZW5lTWFpbjsiLCJpbXBvcnQgdGl0bGVJbWcgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdGl0bGUucG5nJztcclxuaW1wb3J0IEFsaWduR3JpZCBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9BbGlnbkdyaWQnO1xyXG5pbXBvcnQgQWxpZ24gZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3V0aWwvQWxpZ24nO1xyXG5cclxuaW1wb3J0IGJ1dHRvbkdyZWVuUm91bmRJbWcgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdWkvYnV0dG9ucy9yb3VuZC9ncmVlbi5wbmcnO1xyXG5pbXBvcnQgYnV0dG9uT3JhbmdlUm91bmRJbWcgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdWkvYnV0dG9ucy9yb3VuZC9vcmFuZ2UucG5nJztcclxuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3VpL0ZsYXRCdXR0b24nO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvanMvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgZW1pdHRlciwgbW9kZWwgfSBmcm9tICcuLi9tYWluJztcclxuXHJcbmNsYXNzIFNjZW5lT3ZlciBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIGdyaWQ6IEFsaWduR3JpZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCdTY2VuZU92ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndGl0bGUnLCB0aXRsZUltZyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGBidXR0b25HcmVlblJvdW5kYCwgYnV0dG9uR3JlZW5Sb3VuZEltZyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGBidXR0b25PcmFuZ2VSb3VuZGAsIGJ1dHRvbk9yYW5nZVJvdW5kSW1nKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEFsaWduR3JpZCh7cm93czogMTEsIGNvbHVtbnM6IDExLCBzY2VuZTogdGhpc30sIHRoaXMuZ2FtZS5jb25maWcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5hZGQuaW1hZ2UoMCwgMCwgJ3RpdGxlJyk7XHJcbiAgICAgICAgQWxpZ24uc2NhbGVUb0dhbWVXKHRpdGxlLCAwLjgsIHRoaXMuZ2FtZS5jb25maWcpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgoMzgsIHRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuU3RhcnQgPSBuZXcgRmxhdEJ1dHRvbih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICBrZXk6IFwiYnV0dG9uR3JlZW5Sb3VuZFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlBsYXkgQWdhaW4uXCIsXHJcbiAgICAgICAgICAgIHg6IDI0MCxcclxuICAgICAgICAgICAgeTogMTAwLFxyXG4gICAgICAgICAgICBldmVudDogQ29uc3RhbnRzLlJFU1RBUlRfR0FNRSxcclxuICAgICAgICAgICAgcGFyYW1zOiAncmVzdGFydF9nYW1lJ1xyXG4gICAgICAgIH0sIG1vZGVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkLnBsYWNlQXRJbmRleCg5MywgYnRuU3RhcnQpO1xyXG5cclxuICAgICAgICBlbWl0dGVyLm9mZihDb25zdGFudHMuUkVTVEFSVF9HQU1FKS5vbihDb25zdGFudHMuUkVTVEFSVF9HQU1FLCB0aGlzLnJlc3RhcnRHYW1lKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3RhcnRHYW1lID0gKHBhcmFtczogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdTY2VuZU1haW4nKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjZW5lT3ZlcjsiLCJpbXBvcnQgdGl0bGVJbWcgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdGl0bGUucG5nJztcclxuXHJcbmltcG9ydCBncmVlblRvZ2dsZUJhY2sgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdWkvdG9nZ2xlcy9ncmVlbi5wbmcnO1xyXG5pbXBvcnQgc2Z4T2ZmSWNvbiBmcm9tICcuLi8uLi8uLi90b29sYm94L2ltYWdlcy91aS9pY29ucy9zZnhfb2ZmLnBuZyc7XHJcbmltcG9ydCBzZnhPbkljb24gZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9pbWFnZXMvdWkvaWNvbnMvc2Z4X29uLnBuZyc7XHJcbmltcG9ydCBtdXNpY09uSWNvbiBmcm9tICcuLi8uLi8uLi90b29sYm94L2ltYWdlcy91aS9pY29ucy9tdXNpY19vbi5wbmcnO1xyXG5pbXBvcnQgbXVzaWNPZmZJY29uIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3VpL2ljb25zL211c2ljX29mZi5wbmcnO1xyXG5cclxuaW1wb3J0IEFsaWduIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy91dGlsL0FsaWduJztcclxuaW1wb3J0IEFsaWduR3JpZCBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9BbGlnbkdyaWQnO1xyXG5cclxuaW1wb3J0IGJ1dHRvbk9yYW5nZVJvdW5kSW1nIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3VpL2J1dHRvbnMvcm91bmQvb3JhbmdlLnBuZyc7XHJcbmltcG9ydCBidXR0b25HcmVlblJvdW5kSW1nIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvaW1hZ2VzL3VpL2J1dHRvbnMvcm91bmQvZ3JlZW4ucG5nJztcclxuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3VpL0ZsYXRCdXR0b24nOyBcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGVtaXR0ZXIsIG1vZGVsIH0gZnJvbSAnLi4vbWFpbic7XHJcbmltcG9ydCBJTWVkaWFNYW5hZ2VyQ29uZmlnIGZyb20gJy4uLy4uLy4uL3Rvb2xib3gvanMvY2xhc3Nlcy9JTWVkaWFNYW5hZ2VyQ29uZmlnJztcclxuaW1wb3J0IE1lZGlhTWFuYWdlciBmcm9tICcuLi8uLi8uLi90b29sYm94L2pzL2NsYXNzZXMvdXRpbC9NZWRpYU1hbmFnZXInO1xyXG5cclxuaW1wb3J0IGJhY2tncm91bmRTb3VuZG1wMyBmcm9tICcuLi8uLi9hdWRpby9iYWNrZ3JvdW5kX3RpdGxlLm1wMyc7XHJcbmltcG9ydCBTb3VuZEJ1dHRvbnMgZnJvbSAnLi4vLi4vLi4vdG9vbGJveC9qcy9jbGFzc2VzL3VpL1NvdW5kQnV0dG9ucyc7XHJcblxyXG5jbGFzcyBTY2VuZVRpdGxlIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgZ3JpZDogQWxpZ25HcmlkO1xyXG4gICAgcHJpdmF0ZSBtZWRpYU1hbmFnZXI6IE1lZGlhTWFuYWdlcjtcclxuICAgIHByaXZhdGUgc291bmRCdXR0b25zOiBTb3VuZEJ1dHRvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OiAnU2NlbmVUaXRsZSd9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndGl0bGUnLCB0aXRsZUltZyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGBidXR0b25HcmVlblJvdW5kYCwgYnV0dG9uR3JlZW5Sb3VuZEltZyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGBidXR0b25PcmFuZ2VSb3VuZGAsIGJ1dHRvbk9yYW5nZVJvdW5kSW1nKTtcclxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2JhY2tncm91bmRfdGl0bGUnLCBbYmFja2dyb3VuZFNvdW5kbXAzXSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZShcInRvZ2dsZUJhY2tcIiwgZ3JlZW5Ub2dnbGVCYWNrKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJzZnhPZmZcIiwgc2Z4T2ZmSWNvbik7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwic2Z4T25cIiwgc2Z4T25JY29uKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJtdXNpY09uXCIsIG11c2ljT25JY29uKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoXCJtdXNpY09mZlwiLCBtdXNpY09mZkljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2NlbmVUaXRsZSBjcmVhdGUnKTtcclxuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgQWxpZ25HcmlkKHtyb3dzOiAxMSwgY29sdW1uczogMTEsIHNjZW5lOiB0aGlzfSwgdGhpcy5nYW1lLmNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5zb3VuZEJ1dHRvbnMgPSBuZXcgU291bmRCdXR0b25zKHtzY2VuZTogdGhpcywgZ2FtZUNvbmZpZzogdGhpcy5nYW1lLmNvbmZpZ30sIG1vZGVsKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuYWRkLmltYWdlKDAsIDAsICd0aXRsZScpO1xyXG4gICAgICAgIEFsaWduLnNjYWxlVG9HYW1lVyh0aXRsZSwgMC44LCB0aGlzLmdhbWUuY29uZmlnKTtcclxuICAgICAgICB0aGlzLmdyaWQucGxhY2VBdEluZGV4KDM4LCB0aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blN0YXJ0ID0gbmV3IEZsYXRCdXR0b24oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAga2V5OiBcImJ1dHRvbkdyZWVuUm91bmRcIixcclxuICAgICAgICAgICAgdGV4dDogXCJTdGFydCFcIixcclxuICAgICAgICAgICAgeDogMjQwLFxyXG4gICAgICAgICAgICB5OiAxMDAsXHJcbiAgICAgICAgICAgIGV2ZW50OiBDb25zdGFudHMuU1RBUlRfR0FNRSxcclxuICAgICAgICAgICAgcGFyYW1zOiAnc3RhcnRfZ2FtZSdcclxuICAgICAgICB9LCBtb2RlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZC5wbGFjZUF0SW5kZXgoOTMsIGJ0blN0YXJ0KTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVkaWFDb25maWc6IElNZWRpYU1hbmFnZXJDb25maWcgPSB7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1lZGlhTWFuYWdlciA9IG5ldyBNZWRpYU1hbmFnZXIobWVkaWFDb25maWcsIG1vZGVsKTtcclxuICAgICAgICB0aGlzLm1lZGlhTWFuYWdlci5zZXRCYWNrZ3JvdW5kTXVzaWMoJ2JhY2tncm91bmRfdGl0bGUnKTtcclxuXHJcbiAgICAgICAgZW1pdHRlci5vZmYoQ29uc3RhbnRzLlNUQVJUX0dBTUUpLm9uKENvbnN0YW50cy5TVEFSVF9HQU1FLCB0aGlzLnN0YXJ0R2FtZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydEdhbWUgPSAocGFyYW1zOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ1NjZW5lTWFpbicpXHJcbiAgICAgICAgdGhpcy5tZWRpYU1hbmFnZXIuc3RvcCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2VuZVRpdGxlOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNjg4ZTllOWI1YWM1Y2Y0ZDgwODY3NzVlN2Y0MzMzNjQtdGl0bGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mZmY2NWQ1NGY4ZDA1ZmEwMmJiOGI2N2EwZmFiY2I0Yi1ncmVlbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Y3OGY0NWYxNTM0NjBiYTE4NmE4MDllYWI4N2M1N2I0LW9yYW5nZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ZiYzE3NjEzMDkzZDUxMGFjYzE1ZjZjNTMzNWU2NzVmLW11c2ljX29mZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzM2MWU1MTA5MDlkZjAzNDNkNGZjN2M1MjIyZTU1ZGVhLW11c2ljX29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvM2ZlOGRmZjc1NTU4ODg3YzkzY2UzZTQxZDVkZTQwYzctc2Z4X29mZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzUwZmE4NjI3ZjI2ZjlhMjhjOGI2OGIwMzVjMjg3YjU0LXNmeF9vbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ExNTk4OTFmMjczN2U4ZDViN2NlYmZkOTUyYjNhNzc0LWdyZWVuLnBuZ1wiOyIsImNsYXNzIENvbnN0YW50c3tcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0VUX1NDT1JFID0gXCJTRVRfU0NPUkVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0NPUkVfVVBEQVRFRCA9IFwiU0NPUkVfVVBEQVRFRFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVUF9QT0lOVFMgPSBcIlVQX1BPSU5UU1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGT09EX0VBVEVOID0gXCJGT09EX0VBVEVOXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCVVRUT05fUFJFU1NFRCA9IFwiQlVUVE9OX1BSRVNTRURcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RBUlRfR0FNRSA9IFwiU1RBUlRfR0FNRVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBSRVNUQVJUX0dBTUUgPSBcIlJFU1RBUlRfR0FNRVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQTEFZX1NPVU5EID0gXCJQTEFZX1NPVU5EXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1VU0lDX0NIQU5HRUQgPSBcIk1VU0lDX0NIQU5HRURcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVE9HR0xFX01VU0lDID0gXCJUT0dHTEVfTVVTSUNcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVE9HR0xFX1NGWCA9IFwiVE9HR0xFX1NGWFwiO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdGFudHM7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9Nb2RlbFwiO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlcntcclxuICAgIHByaXZhdGUgbW9kZWw6IE1vZGVsO1xyXG4gICAgcHJpdmF0ZSBlbWl0dGVyOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbDogTW9kZWwpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gbW9kZWwuZW1pdHRlcjtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIub24oQ29uc3RhbnRzLlNFVF9TQ09SRSwgdGhpcy5zZXRTY29yZSk7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLm9uKENvbnN0YW50cy5VUF9QT0lOVFMsIHRoaXMudXBQb2ludHMpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihDb25zdGFudHMuVE9HR0xFX01VU0lDLCB0aGlzLnRvZ2dsZU11c2ljKTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIub24oQ29uc3RhbnRzLlRPR0dMRV9TRlgsIHRoaXMudG9nZ2xlU2Z4KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY29yZSA9IChzY29yZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zY29yZSA9IHNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwUG9pbnRzID0gKHBvaW50czogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U2NvcmUgPSAgdGhpcy5tb2RlbC5zY29yZSArIHBvaW50cztcclxuICAgICAgICB0aGlzLm1vZGVsLnNjb3JlID0gbmV3U2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTXVzaWMgPSAodmFsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5tdXNpY09uID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNmeCA9ICh2YWw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICB0aGlzLm1vZGVsLnNvdW5kT24gPSB2YWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vQ29uc3RhbnRzXCI7XHJcblxyXG5jbGFzcyBNb2RlbCB7XHJcbiAgICBwcml2YXRlIF9lbWl0dGVyOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBwcml2YXRlIF9zY29yZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaXNNb2JpbGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9zb3VuZE9uOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfbXVzaWNPbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2dhbWVPdmVyOiBib29sZWFuO1xyXG5cclxuICAgIGdldCBlbWl0dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBnYW1lT3Zlcih2YWw6IGJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX2dhbWVPdmVyID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnYW1lT3ZlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU92ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG11c2ljT24odmFsOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLl9tdXNpY09uID0gdmFsO1xyXG4gICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChDb25zdGFudHMuTVVTSUNfQ0hBTkdFRCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG11c2ljT24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbXVzaWNPbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc291bmRPbih2YWw6IGJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX3NvdW5kT24gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvdW5kT24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kT247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNjb3JlKHZhbDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9zY29yZSA9IHZhbDtcclxuICAgICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoQ29uc3RhbnRzLlNDT1JFX1VQREFURUQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY29yZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNNb2JpbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTW9iaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlzTW9iaWxlOiBib29sZWFuLCBlbWl0dGVyOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcikge1xyXG4gICAgICAgIHRoaXMuX2VtaXR0ZXIgPSBlbWl0dGVyO1xyXG5cclxuICAgICAgICB0aGlzLl9zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5faXNNb2JpbGUgPSBpc01vYmlsZTtcclxuICAgICAgICB0aGlzLl9zb3VuZE9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tdXNpY09uID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7IiwiaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vTW9kZWxDb250cm9sbGVyL01vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY29yZWJveENvbmZpZyB7XHJcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxyXG4gICAgeD8gOm51bWJlcixcclxuICAgIHk/OiBudW1iZXIsXHJcbiAgICBvcmlnaW5YPzogbnVtYmVyLFxyXG4gICAgb3JpZ2luWT86IG51bWJlclxyXG59O1xyXG5cclxuY2xhc3MgU2NvcmVCb3ggZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICAgIHByaXZhdGUgdGV4dDE6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgcHJpdmF0ZSBtb2RlbDogTW9kZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJU2NvcmVib3hDb25maWcsIG1vZGVsOiBNb2RlbCkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZy5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50ZXh0MSA9IHRoaXMuc2NlbmUuYWRkLnRleHQoY29uZmlnLnggfHwgMCAsIGNvbmZpZy55IHx8IDAsIFwiU0NPUkU6MFwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRleHQxLnNldE9yaWdpbihjb25maWcub3JpZ2luWCB8fCAwLjUsIGNvbmZpZy5vcmlnaW5ZIHx8IDAuNSk7XHJcbiAgICAgICAgdGhpcy50ZXh0MS5zZXRTY3JvbGxGYWN0b3IoMCkuc2V0Rm9udFNpemUoMTIpO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkKHRoaXMudGV4dDEpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgbW9kZWwuZW1pdHRlci5vZmYoQ29uc3RhbnRzLlNDT1JFX1VQREFURUQpLm9uKENvbnN0YW50cy5TQ09SRV9VUERBVEVELCB0aGlzLnNjb3JlVXBkYXRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZVVwZGF0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy50ZXh0MSAmJiAhdGhpcy5tb2RlbC5nYW1lT3Zlcil7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dDEuc2V0VGV4dChgU0NPUkU6JHt0aGlzLm1vZGVsLnNjb3JlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NvcmVCb3g7IiwiaW1wb3J0IElGbGF0QnV0dG9uQ29uZmlnIGZyb20gXCIuLi9JRmxhdEJ1dHRvbkNvbmZpZ1wiO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsQ29udHJvbGxlci9Nb2RlbFwiO1xyXG5cclxuY2xhc3MgRmxhdEJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG4gICAgcHJpdmF0ZSBjb25maWc6IElGbGF0QnV0dG9uQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBiYWNrOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIHRleHQxOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIHByaXZhdGUgZW1pdHRlcjogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJRmxhdEJ1dHRvbkNvbmZpZywgbW9kZWw6IE1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gbW9kZWwuZW1pdHRlcjtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuc2NlbmUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBzY2VuZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWNvbmZpZy5rZXkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBrZXlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5iYWNrID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMCwgMCwgY29uZmlnLmtleSk7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5iYWNrKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy50ZXh0KXtcclxuICAgICAgICAgICAgaWYoY29uZmlnLnRleHRDb25maWcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MSA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMCwgMCwgY29uZmlnLnRleHQsIGNvbmZpZy50ZXh0Q29uZmlnKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MSA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMCwgMCwgY29uZmlnLnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGV4dDEuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy50ZXh0MSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjb25maWcueCl7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IGNvbmZpZy54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLnkpe1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBjb25maWcueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmJhY2suc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrLm9uKCdwb2ludGVyZG93bicsIHRoaXMucHJlc3NlZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbW9kZWwuaXNNb2JpbGUpe1xyXG4gICAgICAgICAgICB0aGlzLmJhY2sub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5tb3VzZU92ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2sub24oJ3BvaW50ZXJvdXQnLCB0aGlzLm1vdXNlT3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW91c2VPdmVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMueSAtPSA1O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy55ICs9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVzc2VkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnBhcmFtcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMuY29uZmlnLmV2ZW50LCB0aGlzLmNvbmZpZy5wYXJhbXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMuY29uZmlnLmV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsYXRCdXR0b247IiwiaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiLi9Ub2dnbGVCdXR0b25cIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vTW9kZWxDb250cm9sbGVyL01vZGVsXCI7XHJcblxyXG5jbGFzcyBTb3VuZEJ1dHRvbnMgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICAgIHByaXZhdGUgbW9kZWw6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IHtzY2VuZTogUGhhc2VyLlNjZW5lLCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWd9LCBtb2RlbDogTW9kZWwpe1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZy5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XHJcblxyXG4gICAgICAgIGNvbnN0IG11c2ljVG9nZ2xlQnV0dG9uID0gbmV3IFRvZ2dsZUJ1dHRvbih7XHJcbiAgICAgICAgICAgIGdhbWVDb25maWc6IGNvbmZpZy5nYW1lQ29uZmlnLFxyXG4gICAgICAgICAgICBiYWNrS2V5OiAndG9nZ2xlQmFjaycsXHJcbiAgICAgICAgICAgIG9mZkljb246ICdtdXNpY09mZicsXHJcbiAgICAgICAgICAgIG9uSWNvbjogJ211c2ljT24nLFxyXG4gICAgICAgICAgICBzY2VuZTogY29uZmlnLnNjZW5lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgZXZlbnQ6IENvbnN0YW50cy5UT0dHTEVfTVVTSUMsXHJcbiAgICAgICAgICAgIHg6IDI0MCxcclxuICAgICAgICAgICAgeTogNDUwXHJcbiAgICAgICAgfSwgdGhpcy5tb2RlbC5lbWl0dGVyKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2Z4VG9nZ2xlQnV0dG9uID0gbmV3IFRvZ2dsZUJ1dHRvbih7XHJcbiAgICAgICAgICAgIGdhbWVDb25maWc6IGNvbmZpZy5nYW1lQ29uZmlnLFxyXG4gICAgICAgICAgICBiYWNrS2V5OiAndG9nZ2xlQmFjaycsXHJcbiAgICAgICAgICAgIG9mZkljb246ICdzZnhPZmYnLFxyXG4gICAgICAgICAgICBvbkljb246ICdzZnhPbicsXHJcbiAgICAgICAgICAgIHNjZW5lOiBjb25maWcuc2NlbmUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICBldmVudDogQ29uc3RhbnRzLlRPR0dMRV9TRlgsXHJcbiAgICAgICAgICAgIHg6IDI0MCxcclxuICAgICAgICAgICAgeTogNDUwXHJcbiAgICAgICAgfSwgdGhpcy5tb2RlbC5lbWl0dGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQobXVzaWNUb2dnbGVCdXR0b24pO1xyXG4gICAgICAgIHRoaXMuYWRkKHNmeFRvZ2dsZUJ1dHRvbik7XHJcblxyXG4gICAgICAgIG11c2ljVG9nZ2xlQnV0dG9uLnkgPSBtdXNpY1RvZ2dsZUJ1dHRvbi5oZWlnaHQgLyAyO1xyXG4gICAgICAgIG11c2ljVG9nZ2xlQnV0dG9uLnggPSBtdXNpY1RvZ2dsZUJ1dHRvbi53aWR0aCAvIDI7XHJcblxyXG4gICAgICAgIHNmeFRvZ2dsZUJ1dHRvbi54ID0gK2NvbmZpZy5nYW1lQ29uZmlnLndpZHRoIC0gKHNmeFRvZ2dsZUJ1dHRvbi53aWR0aCAvIDIpO1xyXG4gICAgICAgIHNmeFRvZ2dsZUJ1dHRvbi55ID0gbXVzaWNUb2dnbGVCdXR0b24ueTtcclxuXHJcbiAgICAgICAgaWYoIW1vZGVsLm11c2ljT24pe1xyXG4gICAgICAgICAgICBtdXNpY1RvZ2dsZUJ1dHRvbi50b2dnbGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIW1vZGVsLnNvdW5kT24pe1xyXG4gICAgICAgICAgICBzZnhUb2dnbGVCdXR0b24udG9nZ2xlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvdW5kQnV0dG9uczsiLCJpbXBvcnQgSVRvZ2dsZUJ1dHRvbkNvbmZpZyBmcm9tIFwiLi4vLi4vSVRvZ2dsZUJ1dHRvbkNvbmZpZ1wiO1xyXG5pbXBvcnQgQWxpZ24gZnJvbSBcIi4uL3V0aWwvQWxpZ25cIjtcclxuXHJcbmNsYXNzIFRvZ2dsZUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG4gICAgcHJpdmF0ZSBjb25maWc6IElUb2dnbGVCdXR0b25Db25maWc7XHJcbiAgICBwcml2YXRlIGJhY2s6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgb25JY29uOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIG9mZkljb246IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgdmFsdWU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGV2ZW50Pzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlbWl0dGVyOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElUb2dnbGVCdXR0b25Db25maWcsIGVtaXR0ZXI6IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLnNjZW5lID0gY29uZmlnLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XHJcblxyXG4gICAgICAgIHRoaXMuYmFjayA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDAsIDAsIGNvbmZpZy5iYWNrS2V5KTtcclxuICAgICAgICB0aGlzLm9uSWNvbiA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDAsIDAsIGNvbmZpZy5vbkljb24pO1xyXG4gICAgICAgIHRoaXMub2ZmSWNvbiA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDAsIDAsIGNvbmZpZy5vZmZJY29uKTtcclxuXHJcbiAgICAgICAgQWxpZ24uc2NhbGVUb0dhbWVXKHRoaXMuYmFjaywgMC4xLCBjb25maWcuZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgQWxpZ24uc2NhbGVUb0dhbWVXKHRoaXMub25JY29uLCAwLjA1LCBjb25maWcuZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgQWxpZ24uc2NhbGVUb0dhbWVXKHRoaXMub2ZmSWNvbiwgMC4wNSwgY29uZmlnLmdhbWVDb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJhY2spO1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMub25JY29uKTtcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLm9mZkljb24pO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gY29uZmlnLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnQgPSBjb25maWcuZXZlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEljb25zKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFjay5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMuYmFjay5vbigncG9pbnRlcmRvd24nLCB0aGlzLnRvZ2dsZSk7XHJcblxyXG4gICAgICAgIGlmKGNvbmZpZy54KXtcclxuICAgICAgICAgICAgdGhpcy54ID0gY29uZmlnLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcueSl7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IGNvbmZpZy55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTaXplKHRoaXMuYmFjay5kaXNwbGF5V2lkdGgsIHRoaXMuYmFjay5kaXNwbGF5SGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldEljb25zKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5ldmVudCwgdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SWNvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkljb24udmlzaWJsZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5vZmZJY29uLnZpc2libGUgPSAhdGhpcy52YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQnV0dG9uOyIsImNsYXNzIEFsaWduIHtcclxuICAgIHN0YXRpYyBzY2FsZVRvR2FtZVcob2JqOiBhbnksIHBjdDogbnVtYmVyLCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWcpe1xyXG4gICAgICAgIG9iai5kaXNwbGF5V2lkdGggPSArZ2FtZUNvbmZpZy53aWR0aCAqIHBjdDtcclxuICAgICAgICBvYmouc2NhbGVZID0gb2JqLnNjYWxlWDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2VudGVyKG9iajogYW55LCBnYW1lQ29uZmlnOiBQaGFzZXIuQ29yZS5Db25maWcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJIKG9iaiwgZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJWKG9iaiwgZ2FtZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNlbnRlckgob2JqOiBhbnksIGdhbWVDb25maWc6IFBoYXNlci5Db3JlLkNvbmZpZylcclxuICAgIHtcclxuICAgICAgICBvYmoueCA9ICtnYW1lQ29uZmlnLndpZHRoIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2VudGVyVihvYmo6IGFueSwgZ2FtZUNvbmZpZzogUGhhc2VyLkNvcmUuQ29uZmlnKVxyXG4gICAge1xyXG4gICAgICAgIG9iai54ID0gK2dhbWVDb25maWcud2lkdGggLyAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGlnbjsiLCJpbXBvcnQgSUdyaWRDb25maWcgZnJvbSBcIi4uL0lHcmlkQ29uZmlnXCI7XHJcblxyXG5jbGFzcyBBbGlnbkdyaWQge1xyXG4gICAgcHJpdmF0ZSBjb25maWc6IElHcmlkQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSBjdzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjaDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUdyaWRDb25maWcsIGdhbWVDb25maWc6IFBoYXNlci5Db3JlLkNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cclxuICAgICAgICBpZighY29uZmlnLnNjZW5lKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHNjZW5lIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFjb25maWcucm93cyl7XHJcbiAgICAgICAgICAgIGNvbmZpZy5yb3dzID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWNvbmZpZy5jb2x1bW5zKXtcclxuICAgICAgICAgICAgY29uZmlnLmNvbHVtbnMgPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighY29uZmlnLmhlaWdodCl7XHJcbiAgICAgICAgICAgIGNvbmZpZy5oZWlnaHQgPSArZ2FtZUNvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFjb25maWcud2lkdGgpe1xyXG4gICAgICAgICAgICBjb25maWcud2lkdGggPSArZ2FtZUNvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBjb25maWcuc2NlbmU7XHJcblxyXG4gICAgICAgIC8vIGNlbGxzIHdpZHRoXHJcbiAgICAgICAgdGhpcy5jdyA9IGNvbmZpZy53aWR0aCAvIGNvbmZpZy5jb2x1bW5zO1xyXG4gICAgICAgIC8vIGNlbGxzIGhlaWdodFxyXG4gICAgICAgIHRoaXMuY2ggPSBjb25maWcuaGVpZ2h0IC8gY29uZmlnLnJvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYnVnID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2hvd051bWJlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvdyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgyLCAweGZmMDAwMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLndpZHRoOyBpbmRleCs9IHRoaXMuY3cpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oaW5kZXgsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhpbmRleCwgdGhpcy5jb25maWcuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbmZpZy5oZWlnaHQ7IGluZGV4Kz0gdGhpcy5jaCkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbygwLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuY29uZmlnLndpZHRoLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dOdW1iZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLnJvd3M7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29uZmlnLmNvbHVtbnM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bVRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDAsIDAsIGNvdW50LnRvU3RyaW5nKCksIHtjb2xvcjogJyNmZjAwMDAnfSApO1xyXG4gICAgICAgICAgICAgICAgbnVtVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUF0SW5kZXgoY291bnQsIG51bVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2UgYW4gb2JqZWN0IGluIHRoZSBtaWRkbGUgb2YgdGhlIGRlZmluZWQgY2VsbFxyXG4gICAgcHVibGljIHBsYWNlQXQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9iajogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gY2FsYyB0aGUgcG9zaXRpb24gYmFzZWQgdXBvbiB0aGUgY2VsbHdpZHRoICYgY2VsaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgeDIgPSAodGhpcy5jdyAqIHgpICsgKHRoaXMuY3cgLyAyKTtcclxuICAgICAgICBjb25zdCB5MiA9ICh0aGlzLmNoICogeSkgKyAodGhpcy5jaCAvIDIpO1xyXG5cclxuICAgICAgICBvYmoueCA9IHgyO1xyXG4gICAgICAgIG9iai55ID0geTI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2VzIHRoZSBvYmplY3QgYXQgdGhlIGdpdmVuIGluZGV4LCBjb3VudGluZyBsZWZ0IHRvIHJpZ2h0IHRvcCB0byBib3R0b21cclxuICAgIHB1YmxpYyBwbGFjZUF0SW5kZXggPSAoaW5kZXg6IG51bWJlciwgb2JqOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuY29uZmlnLmNvbHVtbnMpO1xyXG4gICAgICAgIGNvbnN0IHggPSBpbmRleCAtICh5ICogdGhpcy5jb25maWcuY29sdW1ucyk7XHJcblxyXG4gICAgICAgIHRoaXMucGxhY2VBdCh4LCB5LCBvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGlnbkdyaWQ7IiwiaW1wb3J0IElNZWRpYU1hbmFnZXJDb25maWcgZnJvbSBcIi4uL0lNZWRpYU1hbmFnZXJDb25maWdcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi4vLi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vTW9kZWxDb250cm9sbGVyL01vZGVsXCI7XHJcblxyXG5jbGFzcyBNZWRpYU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzY3JlZW46IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZF90aXRsZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHByaXZhdGUgZW1pdHRlcjogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXI7XHJcbiAgICBwcml2YXRlIG1vZGVsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTWVkaWFNYW5hZ2VyQ29uZmlnLCBtb2RlbDogTW9kZWwpe1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gY29uZmlnLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG1vZGVsLmVtaXR0ZXI7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihDb25zdGFudHMuUExBWV9TT1VORCwgdGhpcy5wbGF5U291bmQpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihDb25zdGFudHMuTVVTSUNfQ0hBTkdFRCwgdGhpcy5tdXNpY0NoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheVNvdW5kID0gKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5tb2RlbC5zb3VuZE9uKXtcclxuICAgICAgICAgICAgY29uc3Qgc291bmQgPSB0aGlzLnNjcmVlbi5zb3VuZC5hZGQoa2V5KTtcclxuICAgICAgICAgICAgc291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11c2ljQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLmJhY2tncm91bmRfdGl0bGUpe1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vZGVsLm11c2ljT24pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kX3RpdGxlLnBsYXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZF90aXRsZS5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEJhY2tncm91bmRNdXNpYyA9IChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZF90aXRsZSk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kX3RpdGxlID0gdGhpcy5zY3JlZW4uc291bmQuYWRkKGtleSwge3ZvbHVtZTogMC41LCBsb29wOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5tdXNpY0NoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRfdGl0bGUuc3RvcCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWRpYU1hbmFnZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==