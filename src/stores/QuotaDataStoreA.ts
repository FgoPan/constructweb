import { types } from 'mobx-state-tree';

const QuotaProps = types
    .model({
        name: types.string,
        displayName: types.string,
        dataType: types.string,
        aggregateFuncType: types.string,
        createTime: types.Date
    })

const QuotaDataStore = types
    .model({
        createType: types.optional(types.string, ''),
        data: types.optional(types.array(QuotaProps), []),
    })
    .actions(self => ({
        update(data) {
            if (data.hasOwnProperty('createType')) {
                self.createType = data.createType
            }
            if (data.hasOwnProperty('data')) {
                self.data.push(QuotaProps.create(data.data))
            }
        }
    }));

export default QuotaDataStore;
