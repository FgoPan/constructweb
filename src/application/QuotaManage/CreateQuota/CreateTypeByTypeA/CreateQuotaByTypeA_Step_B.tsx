import React, { useEffect } from 'react'
import { quotaConfirmColumns } from '@/config/tableColumns';
import { useQuotaDataStore, useDictByKey } from '@/hooks';
import { SelectDicts } from '@/components/bizcomponents';
import { Table } from '@/components/purecomponents';

// interface ICreateQuotaProps {
//     saveValues?: (values: any) => void;
// }

// 通过数据库方式创建指标 s2
const CreateQuotaByTypeA_Step_B = () => {
    const quotaDataStore = useQuotaDataStore()

    const handleChange = (value, item) => {
        quotaDataStore.updateCreateData(value, item)
    }
    const columns = quotaConfirmColumns.map(item => {
        if (item.dictName) {
            // eslint-disable-next-line react/display-name
            item.render = (text) => <SelectDicts dictName={item.dictName} value={text} onChange={(value) => handleChange(value, item)}/>
        }
        if (item.dataIndex === 'createType') {
            item.render = (text) => useDictByKey('createTypes', text)
        }
        return item
    })
    const tableProps: any = {
        columns,
        dataSource: quotaDataStore.createData,
        pagination: false,
        scroll: { y: 415 },
        rowKey: 'name'
    }

    useEffect(() => {
        console.log(123)
    }, [quotaDataStore.createData])
    return <div>
        <h2>根据数据库表创建</h2>
        <Table tableProps={tableProps}/>
    </div>
}

export default CreateQuotaByTypeA_Step_B