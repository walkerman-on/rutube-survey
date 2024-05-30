import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

render(
      <BrowserRouter>
          <App />
      </BrowserRouter>,
  document.getElementById('root'),
);
