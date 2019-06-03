import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {disconnectMutationObserver, resetLoadingObserver} from '../utils/observer';

type Props = RouteComponentProps;

/**
 * Adds ability to scroll to a child component with an ID corresponding to a URL hash ID
 */
const HashLinkObserver: React.FC<Props> = ({location: {hash}}) => {
  /**
   * If there is a hash ID in the URL scroll to the corresponding element if it exists, otherwise:
   *  - create a new observer to check for the element when the DOM changes (loads)
   *  - set a timeout that will disconnect the observer
   */
  React.useEffect(
    () => {
      const OBSERVER_TIMEOUT_MS = 5000;
      let loadingObserver: MutationObserver;
      let observerTimeout: number;

      // TODO: allPass deps?
      if (!hash) {
        return;
      }

      const elementId = hash.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        // TODO: `smooth` prop?
        element.scrollIntoView({behavior: 'smooth'});
        return;
      }

      // If there is a hash ID but no element, re-check after each DOM mutation
      loadingObserver = new MutationObserver((_: MutationRecord[], observer: MutationObserver) => {
        const missingElement = document.getElementById(elementId);
        if (missingElement) {
          missingElement.scrollIntoView({behavior: 'smooth'});
          resetLoadingObserver(observer, observerTimeout);
        }
      });
      loadingObserver.observe(document, {childList: true, subtree: true});

      // Disconnect the observer after `OBSERVER_TIMEOUT_MS`
      observerTimeout = window.setTimeout(
        () => disconnectMutationObserver(loadingObserver),
        OBSERVER_TIMEOUT_MS
      );

      return () => {
        resetLoadingObserver(loadingObserver, observerTimeout);
      };
    },
    // TODO: deps
    [hash]
  );

  return null;
};

export default withRouter(HashLinkObserver);
