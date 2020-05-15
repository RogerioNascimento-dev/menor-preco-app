import React from 'react';

import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux';

import { StatusBar } from 'react-native';
import  './src/config/ReactotronConfig'

import {store, persistor } from './src/store';


import colors from './src/commons/colors';
import AppRoutes from './src/AppRoutes';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={colors.light.principal} />        
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

