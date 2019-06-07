"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var observer_1 = require("../utils/observer");
/**
 * Adds ability to scroll to a child component with an ID corresponding to a URL hash ID
 */
var HashLinkObserver = function (_a) {
    var hash = _a.location.hash, _b = _a.dependencies, dependencies = _b === void 0 ? [] : _b;
    /**
     * If there is a hash ID in the URL scroll to the corresponding element if it exists, otherwise:
     *  - create a new observer to check for the element when the DOM changes (loads)
     *  - set a timeout that will disconnect the observer
     */
    React.useEffect(function () {
        var OBSERVER_TIMEOUT_MS = 5000;
        var loadingObserver;
        var observerTimeout;
        if (!hash || dependencies.some(function (dep) { return dep; })) {
            return;
        }
        var elementId = hash.slice(1);
        var element = document.getElementById(elementId);
        if (element) {
            // TODO: `smooth` prop?
            element.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        // If there is a hash ID but no element, re-check after each DOM mutation
        loadingObserver = new MutationObserver(function (_, observer) {
            var missingElement = document.getElementById(elementId);
            if (missingElement) {
                missingElement.scrollIntoView({ behavior: 'smooth' });
                observer_1.resetLoadingObserver(observer, observerTimeout);
            }
        });
        loadingObserver.observe(document, { childList: true, subtree: true });
        // Disconnect the observer after `OBSERVER_TIMEOUT_MS`
        observerTimeout = window.setTimeout(function () { return observer_1.disconnectMutationObserver(loadingObserver); }, OBSERVER_TIMEOUT_MS);
        return function () {
            observer_1.resetLoadingObserver(loadingObserver, observerTimeout);
        };
    }, [hash].concat(dependencies));
    return null;
};
exports.default = react_router_dom_1.withRouter(HashLinkObserver);
