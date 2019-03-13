import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { PersistGate } from 'redux-persist/integration/react';
import { I18n } from 'aws-amplify';

import App from './components/App';
import configureStore from './store/ConfigureStore';
import './styles/index.global.css';
import registerServiceWorker from './registerServiceWorker';
import { DEFAULT_LANGUAGE } from './config';
import dict from './Dict';

const { store, persistor } = configureStore();

// Fallback to english if cannot detect the language
const language = (navigator.language || navigator.userLanguage || DEFAULT_LANGUAGE).slice(0, 2);
// Fallback to english if dict does not have the user's language
I18n.setLanguage(dict[language] ? language : DEFAULT_LANGUAGE);
I18n.putVocabularies(dict);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component />
        </PersistGate>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};
render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));

// Registering a service worker in the production enviroment.
registerServiceWorker();
