"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_loadable_1 = __importDefault(require("react-loadable"));
var AsyncHashLinkObserver = react_loadable_1.default({
    loader: function () { return Promise.resolve().then(function () { return __importStar(require('./HashLinkObserver')); }); },
    loading: function () { return null; }
});
exports.default = AsyncHashLinkObserver;
