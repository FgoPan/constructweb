import React, { memo, useState, useRef } from 'react'
import { Layout, Input, Button, Divider, Spin } from 'antd'
import moment from 'moment'
import { ClearOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { Table, Icon } from '@/components/purecomponents';
import { SelectDicts } from '@/components/bizcomponents';

const { Sider, Content } = Layout;
const placeholderMap = {
    7: '使用,分割填入两个值',
    8: '使用,分割填入多个值'
}
const interval = 20 // ms

const QuotaAnalysis = () => {
    const [data, setData] = useState<any>([{
        name: '',
        operation: '',
        value: ''
    }])
    const [dataG, setDataG] = useState<any>([{
        name: '',
        operation_a: '',
        operation_b: '',
        value: ''
    }])
    const [dataS, setDataS] = useState<any>([{
        name: '',
        operation: '',
        value: ''
    }])
    const [loading, setLoading] = useState<boolean>(false)
    const timeRef = useRef<HTMLElement>(null)
    const iconStyle = {
        fontSize: '16px'
    }
    const handleClear = (): void => {
        setData([{
            name: undefined,
            operation: undefined,
            value: ''
        }])
        setDataG([{
            name: undefined,
            operation_a: undefined,
            operation_b: undefined,
            value: ''
        }])
        setDataS([{
            name: undefined,
            operation: undefined,
            value: ''
        }])
    }

    const handleSubmit = () => {
        setLoading(true)
        let _t = 0
        const etimer = setInterval(() => {
            if (timeRef.current) {
                _t += interval
                timeRef.current.innerText = (_t).toString()
                console.log(_t)
            }
        }, interval)
        const sTime = moment().valueOf()
        const dtimer = setTimeout(() => {
            const eTime = moment().valueOf()
            if (timeRef.current) {
                const diffTime = eTime - sTime
                timeRef.current.innerText = (diffTime).toString()
                console.log(diffTime)
            }
            setLoading(false)
            clearTimeout(dtimer)
            clearInterval(etimer)
        }, 3154)
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
        if (type === 'G') {
            if (index === 0 && dataG.length === 1) {
                setDataG([{
                    name: undefined,
                    operation: undefined,
                    value: ''
                }])
                return
            }
            const _data = [...dataG]
            _data.splice(index, 1)
            setDataG(_data)
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
        if (type === 'G') {
            const _data = [...dataG]
            _data.push({
                name: undefined,
                operation_a: undefined,
                operation_b: undefined,
                value: ''
            })
            setDataG(_data)
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
        if (type === 'G') {
            const _data = [...dataG]
            _data[index][dataIndex] = value
            setDataG(_data)
        }
        if (type === 'S') {
            const _data = [...dataS]
            _data[index][dataIndex] = value
            setDataS(_data)
        }
    }

    // 指标分析过滤
    const quotaAnalysisColumns = [
        {
            title: '指标',
            dataIndex: 'name',
            align: 'center',
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotas" onChange={(value) => handleChange(value, 'name', index, 'O')} />
            }
        }, {
            title: '条件',
            dataIndex: 'operation',
            align: 'center',
            width: 120,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotaOperations" onChange={(value) => handleChange(value, 'operation', index, 'O')} />
            }
        }, {
            title: '值',
            dataIndex: 'value',
            align: 'center',
            width: 180,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                const placeholder = placeholderMap[record.operation] || ''
                return <Input value={text} onChange={(e) => handleChange(e.target.value, 'value', index, 'O')} placeholder={placeholder}/>
            }
        }, {
            title: '操作',
            dataIndex: 'value',
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

    // 指标分析分组
    const quotaAnalysisColumns_group = [
        {
            title: '指标',
            dataIndex: 'name',
            align: 'center',
            width: 140,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotasGroup" onChange={(value) => handleChange(value, 'name', index, 'G')} />
            }
        }, {
            title: '条件1',
            dataIndex: 'operation_aa',
            align: 'center',
            width: 50,
            // eslint-disable-next-line react/display-name
            render: () => '基于'
        }, {
            title: '条件1',
            dataIndex: 'operation_a',
            align: 'center',
            width: 140,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotasGroupBase" onChange={(value) => handleChange(value, 'operation_a', index, 'G')} />
            }
        }, {
            title: '条件2',
            dataIndex: 'operation_bb',
            align: 'center',
            width: 40,
            // eslint-disable-next-line react/display-name
            render: () => '按'
        }, {
            title: '条件2',
            dataIndex: 'operation_b',
            align: 'center',
            width: 140,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotasGroupUnit" onChange={(value) => handleChange(value, 'operation_b', index, 'G')} />
            }
        }, {
            title: '操作',
            dataIndex: 'value',
            align: 'center',
            width: 60,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {
                        index === dataG.length - 1 ? <Icon type="PlusCircleTwoTone" style={iconStyle} title="增加" onClick={() => handleAdd('G')} /> : null
                    }
                    <Icon type="MinusCircleTwoTone" style={iconStyle} title="删除" onClick={() => handleDelete(index, 'G')}/>
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
            dataIndex: 'value',
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
    const tableProps_group: any = {
        columns: quotaAnalysisColumns_group,
        dataSource: dataG,
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
                    <Table tableProps={tableProps_group}/>
                </div>
                <Divider orientation="left">指标字段</Divider>
                <div className="part_2">
                    <Table tableProps={tableProps_single}/>
                </div>
            </div>
        </Sider>
        <Content>
            <div>本次执行耗时：<span ref={timeRef}>0.00</span> ms</div>
            <Spin tip="疯狂计算中..." size="large" spinning={loading}>
                <div style={{ height: '100%' }}>
                    结果显示
                </div>
            </Spin>
        </Content>
    </Layout>
}

export default memo(QuotaAnalysis)