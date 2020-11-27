import React, { memo, useState } from 'react'
import { Layout, Input, Button, Divider, Spin, Result, Affix, Drawer } from 'antd'
import moment from 'moment'
import { ClearOutlined, PlayCircleOutlined, ProfileFilled } from '@ant-design/icons'
import { Table, Icon } from '@/components/purecomponents';
import { SelectDicts } from '@/components/bizcomponents';
import AnalysisResult from './AnalysisResult';
// import { jsonToQueryUrl } from '@/utils/util';

const { Sider, Content } = Layout;
const placeholderMap = {
    7: '使用,分割填入两个值',
    8: '使用,分割填入多个值'
}
// const interval = 20 // ms

const QuotaAnalysis = () => {
    const [data, setData] = useState<any>([{
        name: '',
        operation: '',
        value: ''
    }])
    const [dataG, setDataG] = useState<any>([])
    const [dataS, setDataS] = useState<any>([{
        name: '',
        operation: '',
        value: ''
    }])
    const [showDetailInfo, setShowDetailInfo] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [result, setResult] = useState<any>(null)
    const [resultHistory, setRH] = useState<any>([])
    // const timeRef = useRef<HTMLElement>(null)
    const iconStyle = {
        fontSize: '16px'
    }
    const handleClear = (): void => {
        setData([{
            name: undefined,
            operation: undefined,
            value: ''
        }])
        setDataG([])
        setDataS([{
            name: undefined,
            operation: undefined,
            value: ''
        }])
    }

    const handleSubmit = () => {
        setLoading(true)
        const rh = [moment().format('YYYY/MM/DD HH:mm:ss')]
        // let _t = 0
        // const etimer = setInterval(() => {
        //     if (timeRef.current) {
        //         _t += interval
        //         timeRef.current.innerText = (_t).toString()
        //         console.log(_t)
        //     }
        // }, interval)
        // const sTime = moment().valueOf()
        const params = {
            'value_type': 'device',
            'pdate':
            {
                'operator': 3,
                'value': 20201119
            },
            'is_active':
            {
                'operator': 1,
                'value': 0
            },
            'province':
            {
                'operator': 7,
                'value': [1, 2, 3, 4]
            },
            'count_start':
            {
                'operator': 8,
                'value1': 10,
                'value2': 300
            }
        }
        const q = JSON.stringify(params)
        fetch(`/api/${q}`).then(res => {
            console.log(res)
            // const eTime = moment().valueOf()
            // if (timeRef.current) {
            //     const diffTime = eTime - sTime
            //     timeRef.current.innerText = (diffTime).toString()
            //     console.log(diffTime)
            // }
            setLoading(false)
            setResult([])
            rh.push('执行耗时: 2231ms')
            const _rh = [...resultHistory]
            _rh.push(rh)
            setRH(_rh)
            // clearInterval(etimer)
        })
        console.log('build parameter...')
    }

    const handleDelete = (index: number, type) => {
        if (type === 'O') {
            if (index === 0 && data.length === 1) {
                setData([{
                    name: undefined,
                    operation: undefined,
                    value: ''
                }])
                return
            }
            const _data = [...data]
            _data.splice(index, 1)
            setData(_data)
        }
        if (type === 'S') {
            if (index === 0 && dataS.length === 1) {
                setDataS([{
                    name: undefined,
                    operation: undefined,
                    value: ''
                }])
                return
            }
            const _data = [...dataS]
            _data.splice(index, 1)
            setDataS(_data)
        }
    }

    const handleAdd = (type): void => {
        if (type === 'O') {
            const _data = [...data]
            _data.push({
                name: undefined,
                operation: undefined,
                value: ''
            })
            setData(_data)
        }
        if (type === 'S') {
            const _data = [...dataS]
            _data.push({
                name: undefined,
                operation_a: undefined,
                operation_b: undefined,
                value: ''
            })
            setDataS(_data)
        }
    }

    const handleChange = (value, dataIndex, index, type): void => {
        if (type === 'O') {
            const _data = [...data]
            _data[index][dataIndex] = value
            setData(_data)
        }
        if (type === 'S') {
            const _data = [...dataS]
            _data[index][dataIndex] = value
            setDataS(_data)
        }
    }

    const handleDataGChange = (value) => {
        setDataG(value)
    }

    const handleShowDetailInfo = () => {
        setShowDetailInfo(true)
    }

    const onClose = () => {
        setShowDetailInfo(false)
    }
    // 指标分析过滤
    const quotaAnalysisColumns = [
        {
            title: '指标',
            dataIndex: 'name',
            align: 'center',
            width: '30%',
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotas" onChange={(value) => handleChange(value, 'name', index, 'O')} />
            }
        }, {
            title: '条件',
            dataIndex: 'operation',
            align: 'center',
            width: '30%',
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotaOperations" onChange={(value) => handleChange(value, 'operation', index, 'O')} />
            }
        }, {
            title: '值',
            dataIndex: 'value',
            align: 'center',
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                const placeholder = placeholderMap[record.operation] || ''
                return <Input value={text} onChange={(e) => handleChange(e.target.value, 'value', index, 'O')} placeholder={placeholder}/>
            }
        }, {
            title: '操作',
            dataIndex: '_opr',
            align: 'center',
            width: 60,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {
                        index === data.length - 1 ? <Icon type="PlusCircleTwoTone" style={iconStyle} title="增加" onClick={() => handleAdd('O')} /> : null
                    }
                    <Icon type="MinusCircleTwoTone" style={iconStyle} title="删除" onClick={() => handleDelete(index, 'O')}/>
                </span>
            }
        }
    ];

    // 指标分析字段
    const quotaAnalysisColumns_single = [
        {
            title: '指标',
            dataIndex: 'name',
            align: 'center',
            width: '50%',
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotasSingle" onChange={(value) => handleChange(value, 'name', index, 'S')} />
            }
        }, {
            title: '条件',
            dataIndex: 'operation',
            align: 'center',
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_analysisTypes" onChange={(value) => handleChange(value, 'operation', index, 'S')} />
            }
        }, {
            title: '操作',
            dataIndex: '_opr',
            align: 'center',
            width: 60,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {
                        index === dataS.length - 1 ? <Icon type="PlusCircleTwoTone" style={iconStyle} title="增加" onClick={() => handleAdd('S')} /> : null
                    }
                    <Icon type="MinusCircleTwoTone" style={iconStyle} title="删除" onClick={() => handleDelete(index, 'S')}/>
                </span>
            }
        }
    ];

    const tableProps: any = {
        columns: quotaAnalysisColumns,
        dataSource: data,
        bordered: false,
        size: 'small',
        rowKey: 'name',
        pagination: false,
        showHeader: false
    }
    const tableProps_single: any = {
        columns: quotaAnalysisColumns_single,
        dataSource: dataS,
        bordered: false,
        size: 'small',
        rowKey: 'name',
        pagination: false,
        showHeader: false
    }

    return <Layout className="analysis-container">
        <Sider width="35%" className="analysis-sider">
            <div className="part_btns">
                <Button type="primary" icon={<ClearOutlined />} onClick={() => handleClear()}>重置</Button>
                <Button type="primary" icon={<PlayCircleOutlined />} disabled={loading} onClick={() => handleSubmit()}>执行</Button>
            </div>
            <div className="part_opt">
                <Divider orientation="left">过滤条件</Divider>
                <div className="part_2">
                    <Table tableProps={tableProps}/>
                </div>
                <Divider orientation="left">分组字段</Divider>
                <div className="part_2">
                    <SelectDicts mode="multiple" allowClear={true} placeholder="可选择多个分组字段" value={dataG} dictName="dict_quotasGroup" onChange={(value) => handleDataGChange(value)} />
                </div>
                <Divider orientation="left">指标字段</Divider>
                <div className="part_2">
                    <Table tableProps={tableProps_single}/>
                </div>
            </div>
        </Sider>
        <Content>
            <Spin tip="疯狂计算中..." size="large" spinning={loading}>
                <div style={{ height: '100%' }}>
                    {
                        result !== null ? <AnalysisResult /> : <Result title="暂无结果" status="500"/>
                    }
                </div>
            </Spin>
        </Content>
        <Affix offsetTop={0} style={{ position: 'fixed', right: 0 }}>
            <ProfileFilled onClick={() => handleShowDetailInfo()} style={{ fontSize: 30, color: '#2bb4e0' }}/>
        </Affix>
        <Drawer
            title="执行历史"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={showDetailInfo}
        >
            {
                resultHistory.map((item, index) => {
                    return <div key={`r_${index}`} className="hisory-p">
                        {
                            item.map((item, ind) => <p key={`r_${index}_${ind}`}>{item}</p>)
                        }
                        <Divider dashed></Divider>
                    </div>
                })
            }
        </Drawer>
    </Layout>
}

export default memo(QuotaAnalysis)