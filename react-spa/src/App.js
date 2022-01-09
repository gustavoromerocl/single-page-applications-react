import {
  BrowserRouter,
} from 'react-router-dom';

import {
  Provider, useDispatch, useSelector
} from 'react-redux';

import { persistor, store } from './store';


import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyles } from './theme';
import Layout from './components/Layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Layout>
                <AppRoutes />
              </Layout>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
