import React, { memo, useState, useEffect } from 'react'
import { modelColumns } from '@/config/tableColumns';
import { Table } from '@/components/purecomponents';

const QuotaModel = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        // request api for data
        setData([{
            id: 'ffdabjchueeea',
            name: 'Jack',
            displayName: 'JackMa'
        }])
        setLoading(false)
    }, [])

    const handleCreate = (id: string) => {
        console.log(id)
    }

    const tableProps: any = {
        columns: modelColumns,
        dataSource: data,
        bordered: true,
        size: 'small',
        rowKey: 'id',
        loading,
    }

    const actionData = [
        {
            id: 'create',
            name: '创建指标模型',
            icon: 'PlusOutlined',
            buttonType: 'primary',
            hideIcon: false,
            hideButton: false,
            click: (id) => handleCreate(id)
        }
    ]

    return <div>
        <Table actions={actionData} tableProps={tableProps}/>
    </div>
}

export default memo(QuotaModel)