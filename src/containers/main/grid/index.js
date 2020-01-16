import loadable from 'loadable-components';

import Loader from '../../../components/loader';

export default loadable(() => import('./list'), {
  LoadingComponent: Loader,
});
