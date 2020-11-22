import React, { memo, useState } from 'react'
import { Layout, Radio, Input, Button, Divider } from 'antd'
import { ClearOutlined } from '@ant-design/icons'
import { Table, Icon } from '@/components/purecomponents';
import { SelectDicts } from '@/components/bizcomponents';
import { useDicts } from '@/hooks';

const { Sider, Content } = Layout;
const placeholderMap = {
    7: '使用,分割填入两个值',
    8: '使用,分割填入多个值'
}

const QuotaAnalysis = () => {
    const [data, setData] = useState<any>([{
        name: undefined,
        operation: undefined,
        value: ''
    }])
    const [dataG, setDataG] = useState<any>([{
        name: undefined,
        operation_a: undefined,
        operation_b: undefined,
        value: ''
    }])
    const dict_quotasBig = useDicts('dict_quotasBig')
    const iconStyle = {
        fontSize: '16px'
    }
    const handleClear = (): void => {
        setData([{
            name: undefined,
            operation: undefined,
            value: ''
        }])
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
    }

    // 指标分析过滤
    const quotaAnalysisColumns = [
        {
            title: '序号',
            dataIndex: '_index',
            align: 'center',
            width: 60,
            render: (text, record, index) => {
                return index + 1
            }
        },
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
            title: '序号',
            dataIndex: '_index',
            align: 'center',
            width: 60,
            render: (text, record, index) => {
                return index + 1
            }
        },
        {
            title: '指标',
            dataIndex: 'name',
            align: 'center',
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <SelectDicts value={text} dictName="dict_quotasGroup" onChange={(value) => handleChange(value, 'name', index, 'G')} />
            }
        }, {
            title: '条件1',
            dataIndex: 'operation_a',
            align: 'center',
            width: 140,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <span>基于<SelectDicts value={text} dictName="dict_quotasGroupBase" onChange={(value) => handleChange(value, 'operation_a', index, 'G')} /></span>
            }
        }, {
            title: '条件2',
            dataIndex: 'operation_b',
            align: 'center',
            width: 140,
            // eslint-disable-next-line react/display-name
            render: (text, record, index) => {
                return <span>按<SelectDicts value={text} dictName="dict_quotasGroupUnit" onChange={(value) => handleChange(value, 'operation_b', index, 'G')} /></span>
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
                        index === data.length - 1 ? <Icon type="PlusCircleTwoTone" style={iconStyle} title="增加" onClick={() => handleAdd('G')} /> : null
                    }
                    <Icon type="MinusCircleTwoTone" style={iconStyle} title="删除" onClick={() => handleDelete(index, 'G')}/>
                </span>
            }
        }
    ];

    const tableProps: any = {
        columns: quotaAnalysisColumns,
        dataSource: data,
        bordered: true,
        size: 'small',
        rowKey: 'name',
        pagination: false,
        showHeader: false
    }
    const tableProps_group: any = {
        columns: quotaAnalysisColumns_group,
        dataSource: dataG,
        bordered: true,
        size: 'small',
        rowKey: 'name',
        pagination: false,
        showHeader: false
    }

    return <Layout className="analysis-container">
        <Sider width="35%" className="analysis-sider">
            <Divider orientation="left">过滤条件</Divider>
            <div className="part_1">
                <Radio.Group defaultValue="device" buttonStyle="solid">
                    {
                        dict_quotasBig.map(item => <Radio.Button key={item.code} value={item.code}>{item.name}</Radio.Button>)
                    }
                </Radio.Group>
                <Button type="primary" icon={<ClearOutlined />} onClick={() => handleClear()}>重置</Button>
            </div>
            <div className="part_2">
                <Table tableProps={tableProps}/>
            </div>
            <Divider orientation="left">分组字段</Divider>
            <div className="part_2">
                <Table tableProps={tableProps_group}/>
            </div>
            <Divider orientation="left">指标字段</Divider>
            <div>
                指标字段
            </div>
        </Sider>
        <Content>
            图表结果
        </Content>
    </Layout>
}

export default memo(QuotaAnalysis)