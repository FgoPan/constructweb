// import { ColumnsType as AntdColumnsType } from 'antd/es/table';
import moment from 'moment';
import { ITableColumnCommon } from '@/config/interfaces';
import { useDictByKey } from '@/hooks';

// 指标表格
export const quotaColumns: ITableColumnCommon[] = [
    {
        title: '序号',
        dataIndex: '_index',
        align: 'center',
        width: 100,
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: '名称',
        dataIndex: 'name',
        align: 'center',
        width: 220
    }, {
        title: '显示名称',
        dataIndex: 'displayName',
        align: 'center'
    }, {
        title: '创建方式',
        dataIndex: 'createType',
        align: 'center',
        width: 220,
        render: (text) => {
            return useDictByKey('createTypes', text)
        }
    }, {
        title: '数据类型',
        dataIndex: 'dataType',
        align: 'center',
        width: 150,
    }, {
        title: '聚合函数',
        dataIndex: 'aggregateFuncType',
        align: 'center',
        width: 150,
        render: (text) => {
            return useDictByKey('aggregateFuncTypes', text)
        }
    }, {
        title: '创建时间',
        width: 220,
        dataIndex: 'createTime',
        align: 'center',
        render: (text) => {
            return text ? moment(text).format('YYYY/MM/DD HH:mm:ss') : ''
        }
    }
];

// 指标模型表格
export const modelColumns: ITableColumnCommon[] = [
    {
        title: '序号',
        dataIndex: '_index',
        align: 'center',
        width: 100,
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: '名称',
        dataIndex: 'name',
        align: 'center'
    }, {
        title: '显示名称',
        dataIndex: 'displayName',
        align: 'center'
    }, {
        title: '创建时间',
        width: 220,
        dataIndex: 'createTime',
        align: 'center',
        render: (text) => {
            return text ? moment(text).format('YYYY/MM/DD HH:mm:ss') : ''
        }
    }, {
        title: '操作',
        width: 220,
        dataIndex: 'operation',
        align: 'center',
        render: () => {
            return '删除 编辑'
        }
    }
];

// 指标确认表格
export const quotaConfirmColumns: ITableColumnCommon[] = [
    {
        title: '序号',
        dataIndex: '_index',
        align: 'center',
        width: 100,
        render: (text, record, index) => {
            return index + 1
        }
    },
    {
        title: '名称',
        dataIndex: 'name',
        align: 'center',
        width: 160
    }, {
        title: '显示名称',
        dataIndex: 'displayName',
        align: 'center'
    }, {
        title: '创建方式',
        dataIndex: 'createType',
        align: 'center',
        width: 160
    }, {
        title: '数据类型',
        dataIndex: 'dataType',
        align: 'center',
        width: 150
    }, {
        title: '聚合函数',
        dataIndex: 'aggregateFuncType',
        align: 'center',
        dictName: 'aggregateFuncTypes',
        width: 150
    }
];