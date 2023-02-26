"use strict";
exports.__esModule = true;
exports.logger = void 0;
var colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        crimson: "\x1b[48m"
    }
};
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.log = function (message) {
        console.log(colours.fg.gray + "[LOG]: " + message);
    };
    Logger.warn = function (message) {
        console.warn(colours.fg.yellow + "[WARNING]: " + message);
    };
    Logger.error = function (message) {
        console.error(colours.fg.red + "[ERROR]: " + message);
    };
    Logger.logObj = function (message, obj) {
        console.log(colours.fg.gray + "[LOG]: " + message + " " + obj);
    };
    Logger.warnObj = function (message, obj) {
        console.warn(colours.fg.yellow + "[WARNING]: " + message + " " + obj);
    };
    Logger.errorObj = function (message, obj) {
        console.error(colours.fg.red + "[ERROR]: " + message + " " + obj);
    };
    return Logger;
}());
exports["default"] = Logger;
Logger.log("Hello World");
Logger.warn("This is a warning");
Logger.error("This is an error");
var logger = function (message) {
    console.log(message);
};
exports.logger = logger;
