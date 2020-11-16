import React, { memo } from 'react'
import { Tree } from 'antd';
import { tableList } from '@/config/';

interface ICreateQuotaProps {
    saveValues: (values: any) => void;
}

// 通过数据库方式创建指标
const CreateQuotaByTypeA = (props: ICreateQuotaProps) => {
    const { saveValues } = props

    const onCheck = (checkedKeys, info) => {
        console.log(info)
        saveValues({
            checkedKeys: checkedKeys
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