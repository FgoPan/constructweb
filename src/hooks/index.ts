import React from 'react'
import { RootStoreContext } from '../stores'

export const useStore = (name?: string) => {
    const store = React.useContext(RootStoreContext);
    const _store = store[name];
    if (_store && name) {
        return _store
    } else {
        // console.warn(`the store named ${name} is not found. please check the store context.`)
    }
    return store
}

export const useUserStore = () => useStore('userStore');
