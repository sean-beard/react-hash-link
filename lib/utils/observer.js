"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectMutationObserver = function (observer) {
    if (observer) {
        observer.disconnect();
    }
};
exports.resetLoadingObserver = function (loadingObserver, observerTimeout) {
    exports.disconnectMutationObserver(loadingObserver);
    window.clearTimeout(observerTimeout);
};
