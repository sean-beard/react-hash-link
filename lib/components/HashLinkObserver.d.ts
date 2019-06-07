import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
/**
 * @prop dependencies - list of boolean values that will prevent a rerender if any are `true`
 * @prop smoothScroll - whether or not there is a smooth transition animation on supported browsers
 */
export interface HashLinkObserverProps {
    dependencies?: boolean[];
    smoothScroll?: boolean;
}
declare type Props = HashLinkObserverProps & RouteComponentProps;
declare const _default: React.ComponentClass<Pick<Props, "dependencies" | "smoothScroll">, any>;
export default _default;
