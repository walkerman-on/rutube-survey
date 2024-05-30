import { routeConfig } from './providers/router/routeConfig/appRouteConfig';
import { AppRouter } from 'app/providers/router';
import './styles/index.scss';
import { Header } from 'widgets/header';
import classNames from 'classnames';

const App = () => {
  return (
    <div className={classNames('app container dark')}>
      <Header/>
      <>
        {AppRouter(routeConfig)}
      </>
    </div>
  );
};

export default App;
