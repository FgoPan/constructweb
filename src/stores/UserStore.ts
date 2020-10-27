import { types, destroy } from 'mobx-state-tree';

// interface IUser {  // interface定义接口
//     readonly id: string
//     name: string
//     age: number
//     sex: string
// }

const User = types
    .model({
        id: types.identifierNumber,
        name: types.string,
        age: types.number,
        sex: types.string
    });

const UserStore = types
    .model({
        users: types.optional(types.array(User), [])
    })
    .actions(self => ({
        removeUser(user) {
            destroy(user);
        },
        createUser(user) {
            self.users.push(User.create(user));
        },
        findById(id) {
            return self.users.find(t => t.id === id);
        }
    }));

export default UserStore;
