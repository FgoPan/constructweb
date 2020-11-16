import React, { memo } from 'react'
import { Table as AntTable } from 'antd';
import { Quota } from '@/config/interfaces';
import { Actions } from '@/components/purecomponents';

const Table = ({ actions, tableProps }) => {
    return <div className="app-table">
        <div className="app-actions">
            <Actions data={actions} />
        </div>
        <AntTable<Quota> { ...tableProps }/>
    </div>
}

export default memo(Table)