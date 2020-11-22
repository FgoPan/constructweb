/**
*字典数据
*/

// 创建方式
const createTypes = [
    {
        code: '01',
        name: '根据数据库表创建',
        rank: 1
    }, {
        code: '02',
        name: '根据语句创建',
        rank: 2
    }, {
        code: '03',
        name: '根据指标创建',
        rank: 3
    }, {
        code: '99',
        name: '其他方式创建',
        rank: 4
    }
]

// 聚合函数方式
const aggregateFuncTypes = [
    {
        code: 'count',
        name: '计数',
        rank: 1
    }, {
        code: 'sum',
        name: '求和',
        rank: 2
    }
]

// 指标操作
const dict_quotaOperations = [
    {
        code: '1',
        name: '等于',
        rank: 1
    }, {
        code: '2',
        name: '不等于',
        rank: 2
    }, {
        code: '3',
        name: '大于',
        rank: 3
    }, {
        code: '4',
        name: '小于',
        rank: 4
    }, {
        code: '5',
        name: '大于等于',
        rank: 5
    }, {
        code: '6',
        name: '小于等于',
        rank: 6
    }, {
        code: '7',
        name: '包含',
        rank: 7
    }, {
        code: '8',
        name: '介于之间',
        rank: 8
    },
]

// 指标
const dict_quotas = [
    {
        code: 'node_count',
        name: '节点数',
        rank: 4
    }, {
        code: 'duration',
        name: '在线时长',
        rank: 5
    }, {
        code: 'count_crash',
        name: '崩溃次数',
        rank: 6
    }, {
        code: 'count_start',
        name: '启动次数',
        rank: 7
    }, {
        code: 'pv',
        name: '访问量',
        rank: 8
    }, {
        code: 'out',
        name: '跳出次数',
        rank: 8
    }
]

// 指标大项
const dict_quotasBig = [
    {
        code: 'device',
        name: '活跃设备数',
        rank: 1
    }, {
        code: 'lock',
        name: '活跃锁数',
        rank: 2
    }, {
        code: 'gid',
        name: '活跃用户数',
        rank: 3
    }
]

// 指标分组
const dict_quotasGroup = [
    {
        code: 'pdate',
        name: '日期分区',
        rank: 1
    }, {
        code: 'pid',
        name: '产品号',
        rank: 2
    }, {
        code: 'spid',
        name: '小产品号',
        rank: 3
    }, {
        code: 'fnname',
        name: '功能名称',
        rank: 4
    }, {
        code: 'fncode',
        name: '功能编码',
        rank: 5
    }, {
        code: 'country',
        name: '国家',
        rank: 6
    }, {
        code: 'province',
        name: '城市',
        rank: 7
    }, {
        code: 'city',
        name: '省份',
        rank: 8
    }, {
        code: 'customer_type',
        name: '客户类型',
        rank: 9
    }, {
        code: 'is_install',
        name: '是否装机',
        rank: 10
    }, {
        code: 'is_active',
        name: '是否激活',
        rank: 11
    }, {
        code: 'is_condition',
        name: '是否达标',
        rank: 12
    }, {
        code: 'lock_type',
        name: '锁类型',
        rank: 13
    }, {
        code: 'os_version',
        name: '系统版本',
        rank: 14
    }, {
        code: 'user_identify',
        name: '用户身份',
        rank: 15
    }, {
        code: 'level',
        name: '用户等级',
        rank: 16
    }
]

// 指标分组基准
const dict_quotasGroupBase = [
    {
        code: 'purchaseTime',
        name: '购买时间',
        rank: 1
    }
]

// 指标分组基准
const dict_quotasGroupUnit = [
    {
        code: 'year',
        name: '年',
        rank: 1
    }, {
        code: 'month',
        name: '月',
        rank: 2
    }, {
        code: 'day',
        name: '天',
        rank: 3
    }, {
        code: 'hour',
        name: '小时',
        rank: 4
    }, {
        code: 'minute',
        name: '分钟',
        rank: 5
    }, {
        code: 'second',
        name: '秒',
        rank: 6
    }
]

export {
    createTypes,
    aggregateFuncTypes,
    dict_quotaOperations,
    dict_quotas,
    dict_quotasBig,
    dict_quotasGroup,
    dict_quotasGroupBase,
    dict_quotasGroupUnit
}
