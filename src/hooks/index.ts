import React from 'react'
import _ from 'lodash'
import { RootStoreContext } from '../stores'

export const useStore = (name?: string) => {
    const store = React.useContext(RootStoreContext);
    const _store = name && store ? store[name] : null;
    if (_store && name) {
        return _store
    } else {
        // console.warn(`the store named ${name} is not found. please check the store context.`)
    }
    return store
}

export const useUserStore = () => useStore('userStore');
export const useQuotaDataStore = () => useStore('quotaDataStore');

export const useDicts = (name?: string|Array<string>, code?: undefined) => {
    const dicts = useStore('dictsStore')
    if (name) {
        if (typeof name === 'string') {
            const values = dicts.get(name) || []
            if (code) {
                const item =  _.find(values, value => value.code === code)
                return _.get(item, 'name')
            }
            return values
        }
        if (Array.isArray(name)) {
            const r = {}
            _.forEach(dicts, (value, key) => {
                if (_.includes(name, key)) {
                    r[key] = value
                }
            })
            return r
        }
    }
    return dicts
};
