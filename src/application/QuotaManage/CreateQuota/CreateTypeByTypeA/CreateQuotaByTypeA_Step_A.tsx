import React, { memo } from 'react'
import { Tree } from 'antd';
import { tableList } from '@/config/';
import { useQuotaDataStore } from '@/hooks';

// interface ICreateQuotaProps {
//     saveValues?: (values: any) => void;
// }

// 通过数据库方式创建指标 s1
const CreateQuotaByTypeA = () => {
    const quotaDataStore = useQuotaDataStore()
    const onCheck = (checkedKeys, info) => {
        const list = info.checkedNodes.map(item => {
            return {
                id: item.key,
                name: item.key,
                displayName: item.title,
                dataType: item.type,
                createType: quotaDataStore.createType,
                aggregateFuncType: 'count'
            }
        }).filter(item => item.dataType !== undefined)
        quotaDataStore.saveCreateData({
            data: list
        })
    }

    return <div>
        <h2>根据数据库表创建</h2>
        <Tree
            checkable
            defaultExpandedKeys={['tableA', 'tableB']}
            defaultCheckedKeys={['tableA']}
            onCheck={onCheck}
            treeData={tableList}
        />
    </div>
}

export default memo(CreateQuotaByTypeA)