import { types } from 'mobx-state-tree';
import { values } from 'mobx'
import { useRequest } from 'ahooks';
import { QuotaApi } from '@/utils/apiUtils';

const QuotaProps = types
    .model({
        id: types.optional(types.string, ''),
        name: types.string,
        displayName: types.string,
        dataType: types.string,
        createType: types.string,
        aggregateFuncType: types.string,
        createTime: types.optional(types.Date, new Date())
    })

const QuotaDataStore = types
    .model({
        createType: types.optional(types.string, ''),
        data: types.optional(types.map(QuotaProps), {}),
        list: types.optional(types.map(QuotaProps), {})
    })
    .views(self => ({
        get createData() {
            return values(self.data)
        },
        get listData() {
            return values(self.list)
        }
    }))
    .actions(self => ({
        saveCreateData(data) {
            if (data.hasOwnProperty('createType')) {
                self.createType = data.createType
            }
            if (data.hasOwnProperty('data')) {
                data.data.forEach(item => {
                    self.data.set(item.id, item)
                })
            }
        },
        updateCreateData(value, item, record) {
            self.data.set(record.id, { ...record, [item.dataIndex]: value })
        },
        create() {
            useRequest(QuotaApi.createQuota);
        },
        get() {
            // const { data } = useRequest(QuotaApi.getQuotaList);
            const mockData = [{
                id: 'ffdabjchueeeaffd',
                name: 'Jackfd',
                displayName: 'JackMfda',
                createType: '01',
                dataType: 'int',
                aggregateFuncType: 'count'
            }, {
                id: 'ffdabjchueeea',
                name: 'Jack',
                displayName: 'JackMa',
                createType: '01',
                dataType: 'int',
                aggregateFuncType: 'count'
            }]
            mockData.forEach(item => {
                self.list.set(item.id, item)
            })
        }
    }));

export default QuotaDataStore;
