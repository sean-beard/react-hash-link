import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
/**
 * @prop dependencies - list of boolean values that will prevent a rerender if any are `true`
 */
export interface HashLinkObserverProps {
    dependencies?: boolean[];
}
declare type Props = HashLinkObserverProps & RouteComponentProps;
declare const _default: React.ComponentClass<Pick<Props, "dependencies">, any>;
export default _default;
