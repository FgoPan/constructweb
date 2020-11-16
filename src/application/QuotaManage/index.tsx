import React, { memo, useState, useEffect, useRef } from 'react'
import { Modal } from 'antd';
import { Action } from '@/config/interfaces';
import { quotaColumns } from '@/config/tableColumns';
import { Table } from '@/components/purecomponents';
import CreateQuota from './CreateQuota';
import CreateQuotaFooter from './CreateQuotaFooter';

const QuotaManage = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [visible, setVisible] = useState<boolean>(false)
    const [currentStep, setCurrentStep] = useState<number>(1)
    const steps = useRef(3)

    useEffect(() => {
        // request api for data
        setData([{
            id: 'ffdabjchueeea',
            name: 'Jack',
            displayName: 'JackMa',
            createType: '01',
            dataType: 'int',
            aggregateFuncType: 'count'
        }])
        setLoading(false)
    }, [])

    const handleCreate = (id: string) => {
        console.log(id)
        setVisible(true)
    }

    const tableProps: any = {
        columns: quotaColumns,
        dataSource: data,
        bordered: true,
        size: 'small',
        rowKey: 'id',
        loading,
    }

    const actionData: Action[] = [
        {
            id: 'create',
            name: '创建指标',
            icon: 'PlusOutlined',
            buttonType: 'primary',
            hideIcon: false,
            hideButton: false,
            click: (id) => handleCreate(id)
        }
    ]

    const handleClick = (actions) => {
        if (actions === 'prev') {
            setCurrentStep(currentStep - 1)
            return
        }
        if (actions === 'next') {
            setCurrentStep(currentStep + 1)
            return
        }
        if (actions === 'ok') {
            console.log('create...')
            return
        }
    }

    const modalProps = {
        title: '创建指标',
        visible,
        destroyOnClose: true,
        footer: <CreateQuotaFooter currentStep={currentStep} steps={steps.current} handleClick={handleClick}/>,
        keyboard: false,
        maskClosable: false,
        width: '50%'
    }

    return <div>
        <Table actions={actionData} tableProps={tableProps}/>
        <Modal {...modalProps}>
            <CreateQuota currentStep={currentStep}/>
        </Modal>
    </div>
}

export default memo(QuotaManage)