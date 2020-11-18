// 表格列通用接口
export interface ITableColumnCommon {
    id?: string
    title?: string
    dataIndex?: string
    align?: string
    width?: string|number
    dictName?: string
    dataType?: string
    format?: string
    render?: (text, record, index) => any
}

// 指标
export interface Quota {
    id: string; // id
    name: string; // 名称
    displayName: string; // 显示名称
    createType: string; // 创建方式
    dataType: string; // 数据类型
    aggregateFuncType: string; // 聚合函数类型
    createTime?: Date; // 创建时间
}

// 指标模型
export interface Model {
    id: string; // id
    name: string; // 名称
    displayName: string; // 显示名称
    createTime?: Date; // 创建时间
}

