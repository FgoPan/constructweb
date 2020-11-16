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

export {
    createTypes,
    aggregateFuncTypes
}
