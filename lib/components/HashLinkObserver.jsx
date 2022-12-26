"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var observer_1 = require("../utils/observer");
/**
 * Adds ability to scroll to a child component with an ID corresponding to a URL hash ID
 */
var HashLinkObserver = function (_a) {
    var isPageLoading = _a.isPageLoading, _b = _a.smoothScroll, smoothScroll = _b === void 0 ? true : _b;
    var scrollIntoViewOptions = smoothScroll
        ? { behavior: 'smooth' }
        : undefined;
    /**
     * If there is a hash ID in the URL scroll to the corresponding element if it exists, otherwise:
     *  - create a new observer to check for the element when the DOM changes (loads)
     *  - set a timeout that will disconnect the observer
     */
    React.useEffect(function () {
        var OBSERVER_TIMEOUT_MS = 5000;
        var hash = window.location.hash;
        var loadingObserver;
        var observerTimeout;
        if (!hash || isPageLoading) {
            return;
        }
        var elementId = hash.slice(1);
        var element = document.getElementById(elementId);
        if (element) {
            element.setAttribute('tabindex', '-1');
            element.scrollIntoView(scrollIntoViewOptions);
            element.focus();
            return;
        }
        // If there is a hash ID but no element, re-check after each DOM mutation
        loadingObserver = new MutationObserver(function (_, observer) {
            var missingElement = document.getElementById(elementId);
            if (missingElement) {
                missingElement.setAttribute('tabindex', '-1');
                missingElement.scrollIntoView(scrollIntoViewOptions);
                missingElement.focus();
                observer_1.resetLoadingObserver(observer, observerTimeout);
            }
        });
        loadingObserver.observe(document, { childList: true, subtree: true });
        // Disconnect the observer after `OBSERVER_TIMEOUT_MS`
        observerTimeout = window.setTimeout(function () { return observer_1.disconnectMutationObserver(loadingObserver); }, OBSERVER_TIMEOUT_MS);
        return function () {
            observer_1.resetLoadingObserver(loadingObserver, observerTimeout);
        };
    }, [window.location.href, isPageLoading]);
    return null;
};
exports.default = HashLinkObserver;
