interface Common {
    _dictName?: 'string'
    _dataType?: 'string'
}

// 指标
export interface Quota extends Common {
    id: string; // id
    name: string; // 名称
    displayName: string; // 显示名称
    createType: string; // 创建方式
    dataType: string; // 数据类型
    aggregateFuncType: string; // 聚合函数类型
    createTime?: Date; // 数据类型
}

// 指标模型
export interface Model extends Common {
    id: string; // id
    name: string; // 名称
    displayName: string; // 显示名称
    createTime?: Date; // 数据类型
}

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
