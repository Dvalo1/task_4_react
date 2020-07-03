import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from '../redux/UserReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createdStore = createStore(persistedReducer);
const createdPersistor = persistStore(createdStore);

export const store = createdStore;
export const persistor = createdPersistor;
