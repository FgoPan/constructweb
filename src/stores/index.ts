import { createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import DictsStore from './DictsStore'
import QuotaDataStore from './QuotaDataStoreA'
import * as dicts from '@/config/dicts'

const RootStore = types.model({
    dictsStore: DictsStore,
    quotaDataStore: QuotaDataStore
});

const initialState = RootStore.create({
    dictsStore: {
        ...dicts
    },
    quotaDataStore: {
        createType: '01',
        data: {},
        list: {}
    }
});

export const rootStore = initialState;

export type RootInstance = Instance<typeof RootStore>;
export const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;