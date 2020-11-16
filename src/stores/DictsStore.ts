import { types } from 'mobx-state-tree';

// interface IUser {  // interface定义接口
//     readonly id: string
//     name: string
//     age: number
//     sex: string
// }

const Dict = types
    .model({
        code: types.string,
        name: types.string,
        rank: types.number
    });

const DictList = types.array(Dict)

const DictsStore = types.optional(types.map(DictList), {})

export default DictsStore;
