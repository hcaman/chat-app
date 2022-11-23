import storage from 'redux-persist/lib/storage';
import { WebStorage } from 'redux-persist/lib/types';

interface PersistConfigType {
  key: string;
  version: number;
  storage: WebStorage;
}

const persistConfig: PersistConfigType = {
  key: 'root',
  version: 1,
  storage,
};

export default persistConfig;
