import React, { memo } from 'react'
import { Table as AntTable } from 'antd';
// import { Quota } from '@/config/interfaces';
import { Actions } from '@/components/purecomponents';

// action click
export interface ActionClick {
    (id: string): void;
}

// action
export interface Action {
    id: string; // id
    name: string; // 名称
    icon?: string; // 图标
    buttonType?: string; // 按钮样式
    hideIcon?: boolean; // 图标隐藏
    hideButton?: boolean; // 按钮隐藏
    click?: ActionClick; // 点击事件
}

interface ITableProps {
    actions?: Action[],
    tableProps: any
}

const Table = (props: ITableProps) => {
    const { actions = [], tableProps } = props
    const defaultTableProps = {
        bordered: true,
        size: 'small'
    }
    const tps = { ...defaultTableProps, ...tableProps }
    return <div className="app-table">
        <Actions data={actions} />
        <AntTable {...tps} />
    </div>
}

export default memo(Table)