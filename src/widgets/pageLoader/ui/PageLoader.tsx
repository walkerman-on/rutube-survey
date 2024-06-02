import { Loader } from 'shared/ui/loader';

import cl from './PageLoader.module.scss';

export function PageLoader() {
  return (
    <div className={cl.Loader}>
      <Loader />
    </div>
  );
}
