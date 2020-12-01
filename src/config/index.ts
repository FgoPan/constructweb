// import QuotaManage from '../application/QuotaManage'
// import QuotaModel from '../application/QuotaModel'
// import DataVisual from '../application/DataVisual'
import QuotaAnalysis from '../application/QuotaAnalysis'

const menuList = [
    {
        id: 'quota-manage',
        path: '/quota-manage',
        name: '指标管理',
        component: null,
        visible: false
    }, {
        id: 'quota-model',
        path: '/quota-model',
        name: '指标建模',
        component: null,
        visible: false
    }, {
        id: 'data-visual',
        path: '/data-visual',
        name: '数据可视化',
        component: null,
        visible: false
    }, {
        id: 'data-visual',
        path: '/data-analysis',
        name: '数据分析',
        component: QuotaAnalysis,
        visible: true
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

const tempData = [{ 'duration': '72', 'pv': '29', 'pdate': '20201119', 'province': '布城' }, { 'duration': '563', 'pv': '257', 'pdate': '20201119', 'province': '悉尼' }, { 'duration': '1554', 'pv': '757', 'pdate': '20201119', 'province': '麦纳麦' }, { 'duration': '1499', 'pv': '949', 'pdate': '20201119', 'province': '"海南"' }, { 'duration': '1076', 'pv': '595', 'pdate': '20201119', 'province': '加利福尼亚州' }, { 'duration': '1078', 'pv': '364', 'pdate': '20201119', 'province': '马哈拉施特拉邦' }, { 'duration': '391', 'pv': '218', 'pdate': '20201119', 'province': '乌兰巴托' }, { 'duration': '3125790', 'pv': '1548381', 'pdate': '20201119', 'province': '上海' }, { 'duration': '3722081', 'pv': '1845875', 'pdate': '20201119', 'province': '贵州' }, { 'duration': '2462', 'pv': '1032', 'pdate': '20201119', 'province': '"未知"' }, { 'duration': '383', 'pv': '216', 'pdate': '20201119', 'province': '塔拉卡恩' }, { 'duration': '195', 'pv': '122', 'pdate': '20201119', 'province': '太平' }, { 'duration': '808', 'pv': '302', 'pdate': '20201119', 'province': '圣费尔南多' }, { 'duration': '6280', 'pv': '3186', 'pdate': '20201119', 'province': '"福建"' }, { 'duration': '3791150', 'pv': '1873930', 'pdate': '20201119', 'province': '云南' }, { 'duration': '194', 'pv': '106', 'pdate': '20201119', 'province': '岘港' }, { 'duration': '240', 'pv': '88', 'pdate': '20201119', 'province': '金夏沙' }, { 'duration': '5480', 'pv': '3035', 'pdate': '20201119', 'province': '"浙江"' }, { 'duration': '42997', 'pv': '21145', 'pdate': '20201119', 'province': '西藏' }, { 'duration': '125', 'pv': '28', 'pdate': '20201119', 'province': '"莫尔兹比港"' }, { 'duration': '7850227', 'pv': '3893562', 'pdate': '20201119', 'province': '河南' }, { 'duration': '855', 'pv': '475', 'pdate': '20201119', 'province': '砂拉越' }, { 'duration': '816', 'pv': '366', 'pdate': '20201119', 'province': '芙蓉市' }, { 'duration': '1196641', 'pv': '595344', 'pdate': '20201119', 'province': '宁夏' }, { 'duration': '8625', 'pv': '3852', 'pdate': '20201119', 'province': '"贵州"' }, { 'duration': '2339550', 'pv': '1158277', 'pdate': '20201119', 'province': '内蒙古' }, { 'duration': '420', 'pv': '222', 'pdate': '20201119', 'province': '马尼拉' }, { 'duration': '2405', 'pv': '784', 'pdate': '20201119', 'province': '金边' }, { 'duration': '7288', 'pv': '3632', 'pdate': '20201119', 'province': '"安徽"' }, { 'duration': '3411633', 'pv': '1682996', 'pdate': '20201119', 'province': '陕西' }, { 'duration': '498228', 'pv': '245043', 'pdate': '20201119', 'province': '未知' }, { 'duration': '179', 'pv': '27', 'pdate': '20201119', 'province': '中爪哇省' }, { 'duration': '2195774', 'pv': '1079506', 'pdate': '20201119', 'province': '甘肃' }, { 'duration': '1002', 'pv': '496', 'pdate': '20201119', 'province': '"宁夏"' }, { 'duration': '88', 'pv': '78', 'pdate': '20201119', 'province': '南苏门答腊省' }, { 'duration': '4907', 'pv': '2371', 'pdate': '20201119', 'province': '"北京"' }, { 'duration': '94', 'pv': '16', 'pdate': '20201119', 'province': '拉合尔' }, { 'duration': '5644', 'pv': '2486', 'pdate': '20201119', 'province': '"山西"' }, { 'duration': '146', 'pv': '122', 'pdate': '20201119', 'province': '"黑龙江"' }, { 'duration': '64', 'pv': '28', 'pdate': '20201119', 'province': '北方邦' }, { 'duration': '5583', 'pv': '2784', 'pdate': '20201119', 'province': '"广西"' }, { 'duration': '287', 'pv': '145', 'pdate': '20201119', 'province': '北苏拉威西省' }, { 'duration': '4091091', 'pv': '2022831', 'pdate': '20201119', 'province': '辽宁' }, { 'duration': '5507', 'pv': '2713', 'pdate': '20201119', 'province': '"江西"' }, { 'duration': '10966961', 'pv': '5423371', 'pdate': '20201119', 'province': '广东' }, { 'duration': '373', 'pv': '166', 'pdate': '20201119', 'province': '泰米尔纳德邦' }, { 'duration': '187', 'pv': '107', 'pdate': '20201119', 'province': '日惹' }, { 'duration': '597', 'pv': '212', 'pdate': '20201119', 'province': '奈比多' }, { 'duration': '5460', 'pv': '2811', 'pdate': '20201119', 'province': '"湖南"' }, { 'duration': '4130', 'pv': '1760', 'pdate': '20201119', 'province': '西爪哇省' }, { 'duration': '87', 'pv': '30', 'pdate': '20201119', 'province': '"澳门"' }, { 'duration': '1004828', 'pv': '500152', 'pdate': '20201119', 'province': '天津' }, { 'duration': '4238', 'pv': '1963', 'pdate': '20201119', 'province': '"天津"' }, { 'duration': '31394', 'pv': '15817', 'pdate': '20201119', 'province': '柔佛州' }, { 'duration': '21990', 'pv': '10951', 'pdate': '20201119', 'province': '"河南"' }, { 'duration': '1283', 'pv': '647', 'pdate': '20201119', 'province': '"吉林"' }, { 'duration': '1524577', 'pv': '752525', 'pdate': '20201119', 'province': '广西' }, { 'duration': '595', 'pv': '298', 'pdate': '20201119', 'province': '关丹' }, { 'duration': '121', 'pv': '62', 'pdate': '20201119', 'province': '"麦德林"' }, { 'duration': '576315', 'pv': '289020', 'pdate': '20201119', 'province': '青海' }, { 'duration': '2099819', 'pv': '1043828', 'pdate': '20201119', 'province': '湖南' }, { 'duration': '1011', 'pv': '610', 'pdate': '20201119', 'province': '"青海"' }, { 'duration': '57368', 'pv': '28635', 'pdate': '20201119', 'province': '新加坡' }, { 'duration': '1777', 'pv': '948', 'pdate': '20201119', 'province': '怡保' }, { 'duration': '1884', 'pv': '1110', 'pdate': '20201119', 'province': '"上海"' }, { 'duration': '25737', 'pv': '12539', 'pdate': '20201119', 'province': '八打灵再也' }, { 'duration': '14423', 'pv': '7538', 'pdate': '20201119', 'province': '香港' }, { 'duration': '54566', 'pv': '27350', 'pdate': '20201119', 'province': '吉隆坡' }, { 'duration': '262', 'pv': '97', 'pdate': '20201119', 'province': '"西藏"' }, { 'duration': '9', 'pv': '1', 'pdate': '20201119', 'province': '"香港"' }, { 'duration': '907', 'pv': '301', 'pdate': '20201119', 'province': '"甘肃"' }, { 'duration': '122', 'pv': '33', 'pdate': '20201119', 'province': '贝尔格莱德' }, { 'duration': '7630950', 'pv': '3782518', 'pdate': '20201119', 'province': '北京' }, { 'duration': '2650155', 'pv': '1308449', 'pdate': '20201119', 'province': '四川' }, { 'duration': '157', 'pv': '120', 'pdate': '20201119', 'province': '杜尚别' }, { 'duration': '168', 'pv': '156', 'pdate': '20201119', 'province': '吉打' }, { 'duration': '1251', 'pv': '681', 'pdate': '20201119', 'province': '澳门' }, { 'duration': '1445004', 'pv': '716373', 'pdate': '20201119', 'province': '吉林' }, { 'duration': '15114', 'pv': '7394', 'pdate': '20201119', 'province': '"四川"' }, { 'duration': '2702', 'pv': '1363', 'pdate': '20201119', 'province': '巴厘岛' }, { 'duration': '4260367', 'pv': '2109761', 'pdate': '20201119', 'province': '山西' }, { 'duration': '4813573', 'pv': '2382114', 'pdate': '20201119', 'province': '江苏' }, { 'duration': '6949', 'pv': '3761', 'pdate': '20201119', 'province': '莎阿南' }, { 'duration': '867', 'pv': '211', 'pdate': '20201119', 'province': '東加里曼丹省' }, { 'duration': '4098', 'pv': '1740', 'pdate': '20201119', 'province': '胡志明市' }, { 'duration': '41650', 'pv': '20256', 'pdate': '20201119', 'province': '雅加达' }, { 'duration': '21571', 'pv': '10837', 'pdate': '20201119', 'province': '"广东"' }, { 'duration': '106', 'pv': '31', 'pdate': '20201119', 'province': '巴士拉' }]
export {
    menuList,
    tableList,
    tempData
}