import { createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';
import UserStore from './UserStore'
import { Counter } from './Counter'

const RootStore = types.model({
    userStore: UserStore,
    counter: Counter
});

const initialState = RootStore.create({
    userStore: {
        users: []
    },
    counter: {
        count: 0
    }
});

export const rootStore = initialState;

export type RootInstance = Instance<typeof RootStore>;
export const RootStoreContext = createContext < null | RootInstance > (null);

export const Provider = RootStoreContext.Provider;