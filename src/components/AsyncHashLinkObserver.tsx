import Loadable from 'react-loadable';

const AsyncHashLinkObserver = Loadable({
  loader: () => import('./HashLinkObserver'),
  loading: () => null
});

export default AsyncHashLinkObserver;
