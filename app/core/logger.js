"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var level_1 = require("./level");
var Options = (function () {
    function Options() {
    }
    return Options;
}());
exports.Options = Options;
// Temporal until https://github.com/angular/angular/issues/7344 gets fixed.
var DEFAULT_OPTIONS = {
    level: level_1.Level.WARN,
    global: true,
    globalAs: "logger",
    store: false,
    storeAs: "angular2.logger.level"
};
var Logger = (function () {
    function Logger(options) {
        var _this = this;
        this.Level = level_1.Level;
        this._loadLevel = function () { return JSON.parse(localStorage.getItem(_this._storeAs)); };
        this.global = function () { return window[_this._globalAs] = _this; };
        this.isErrorEnabled = function () { return _this.level >= level_1.Level.ERROR; };
        this.isWarnEnabled = function () { return _this.level >= level_1.Level.WARN; };
        this.isInfoEnabled = function () { return _this.level >= level_1.Level.INFO; };
        this.isDebugEnabled = function () { return _this.level >= level_1.Level.DEBUG; };
        this.isLogEnabled = function () { return _this.level >= level_1.Level.LOG; };
        // Move this to the constructor definition when optional parameters are working with @Injectable: https://github.com/angular/angular/issues/7344
        var _a = Object.assign({}, DEFAULT_OPTIONS, options), level = _a.level, global = _a.global, globalAs = _a.globalAs, store = _a.store, storeAs = _a.storeAs;
        this._level = level;
        this._globalAs = globalAs;
        this._storeAs = storeAs;
        global && this.global();
        if (store || this._loadLevel())
            this.store();
    }
    Logger.prototype._storeLevel = function (level) { localStorage[this._storeAs] = level; };
    Logger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.isErrorEnabled() && console.error.apply(console, arguments);
    };
    Logger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.isWarnEnabled() && console.warn.apply(console, arguments);
    };
    Logger.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.isInfoEnabled() && console.info.apply(console, arguments);
    };
    Logger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.isDebugEnabled() && console.debug.apply(console, arguments);
    };
    Logger.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.isLogEnabled() && console.log.apply(console, arguments);
    };
    Logger.prototype.group = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (console && console.group) && console.group.apply(console, arguments);
    };
    Logger.prototype.groupEnd = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (console && console.groupEnd) && console.groupEnd.apply(console, arguments);
    };
    Logger.prototype.store = function () {
        this._store = true;
        var storedLevel = this._loadLevel();
        if (storedLevel) {
            this._level = storedLevel;
        }
        else {
            this._storeLevel(this.level);
        }
        return this;
    };
    Logger.prototype.unstore = function () {
        this._store = false;
        localStorage.removeItem(this._storeAs);
        return this;
    };
    Object.defineProperty(Logger.prototype, "level", {
        get: function () { return this._level; },
        set: function (level) {
            this._store && this._storeLevel(level);
            this._level = level;
        },
        enumerable: true,
        configurable: true
    });
    return Logger;
}());
Logger = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [Options])
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map