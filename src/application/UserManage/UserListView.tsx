import React from 'react';
import { useUserStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import moment from 'moment';

const UserListView = () => {
    const userStore = useUserStore();
    const { users, createUser, removeUser } = userStore
    const handleAddUser = () => {
        const timeTag = moment().valueOf()
        const user = {
            id: timeTag,
            name: `jack_${timeTag}`,
            age: 20,
            sex: '男'
        }
        createUser(user)
    }
    return <div>
        <button onClick={() => handleAddUser()}>增加一个</button>
        <ul>
            {
                users.map(item =>
                    <div key={item.id}>
                        <li>
                            name: {item.name},
                            age: {item.age},
                            sex: {item.sex}
                        </li>
                        <button onClick={() => removeUser(item)}>删除</button>
                    </div>
                )
            }
        </ul>
    </div>
}

export default observer(UserListView)