import QuotaManage from '../application/QuotaManage'
import QuotaModel from '../application/QuotaModel'
import DataVisual from '../application/DataVisual'

const menuList = [
    {
        id: 'quota-manage',
        path: '/quota-manage',
        name: '指标管理',
        component: QuotaManage,
    }, {
        id: 'quota-model',
        path: '/quota-model',
        name: '指标建模',
        component: QuotaModel,
    }, {
        id: 'data-visual',
        path: '/data-visual',
        name: '数据可视化',
        component: DataVisual,
    }
]

const tableList = [
    {
        key: 'tableA',
        title: 'tableA',
        children: [
            {
                key: 'lock_id',
                type: 'string',
                title: '锁ID'
            }, {
                key: 'lock_idA',
                type: 'string',
                title: '锁ID'
            }, {
                key: 'lock_idB',
                type: 'string',
                title: '锁ID'
            }, {
                key: 'lock_idC',
                type: 'string',
                title: '锁ID'
            }, {
                key: 'lock_idD',
                type: 'string',
                title: '锁ID'
            }, {
                key: 'lock_idE',
                type: 'string',
                title: '锁ID'
            }
        ]
    }, {
        key: 'tableB',
        title: 'tableB',
        children: [
            {
                key: 'xxx',
                type: 'string',
                title: '门诊收入'
            }, {
                key: 'xxx_A',
                type: 'string',
                title: '门诊收入'
            }, {
                key: 'xxx_B',
                type: 'string',
                title: '门诊收入'
            }, {
                key: 'xxx_C',
                type: 'string',
                title: '门诊收入'
            }, {
                key: 'xxx_D',
                type: 'string',
                title: '门诊收入'
            }, {
                key: 'xxx_E',
                type: 'string',
                title: '门诊收入'
            }
        ]
    }
]

export {
    menuList,
    tableList
}