import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

import store from './store';

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById('root');

render(rootComponent, rootElement);
