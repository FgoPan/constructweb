import _ from 'lodash'

export const jsonToQueryUrl = (json) => {
    let s = ''
    _.forEach(json, (value, key) => {
        s += typeof value === 'string' ? `${key}=${value}&` : `${key}=${JSON.stringify(value)}&`
    })
    s = s.substring(0, s.length - 1)
    // _s.replace('"', '%22').replace('{', '%7b').replace('}', '%7d')
    const _s = encodeURIComponent(s)
    console.log(_s)
    return _s
}