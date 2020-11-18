import React, { memo, useState } from 'react'
import { Radio } from 'antd';
import { useDicts, useQuotaDataStore } from '@/hooks';

const CreateQuotaSelectTypes = () => {
    const createTypes = useDicts('createTypes')
    const quotaDataStore = useQuotaDataStore()
    const [createType, setCreateType] = useState<string>('01')

    console.log(quotaDataStore)
    const onChange = (e) => {
        setCreateType(e.target.value)
        quotaDataStore.saveCreateData({
            createType: e.target.value
        })
    }

    return <div>
        <h2>选择创建指标的方式</h2>
        <Radio.Group onChange={(e) => onChange(e)} value={createType}>
            {
                createTypes.map(item => <Radio key={item.code} value={item.code}>{item.name}</Radio>)
            }
        </Radio.Group>
    </div>
}

export default memo(CreateQuotaSelectTypes)