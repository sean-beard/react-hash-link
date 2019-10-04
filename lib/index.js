"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HashLinkObserver_1 = __importDefault(require("./components/HashLinkObserver"));
var AsyncHashLinkObserver_1 = require("./components/AsyncHashLinkObserver");
exports.AsyncHashLinkObserver = AsyncHashLinkObserver_1.default;
exports.default = HashLinkObserver_1.default;
