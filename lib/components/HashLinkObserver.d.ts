import * as React from 'react';
/**
 * @prop isPageLoading - whether or not the page is loading
 * @prop smoothScroll - whether or not there is a smooth transition animation on supported browsers
 */
export interface HashLinkObserverProps {
    isPageLoading?: boolean;
    smoothScroll?: boolean;
}
declare type Props = HashLinkObserverProps;
/**
 * Adds ability to scroll to a child component with an ID corresponding to a URL hash ID
 */
declare const HashLinkObserver: React.FC<Props>;
export default HashLinkObserver;
