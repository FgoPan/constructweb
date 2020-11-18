import React, { memo, useState, useEffect, useRef } from 'react'
import { Modal } from 'antd';
import { quotaColumns } from '@/config/tableColumns';
import { useQuotaDataStore } from '@/hooks';
import { Table } from '@/components/purecomponents';
import CreateQuota from './CreateQuota/';
import CreateQuotaFooter from './CreateQuotaFooter';

const QuotaManage = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [visible, setVisible] = useState<boolean>(false)
    const [currentStep, setCurrentStep] = useState<number>(1)
    const steps = useRef(3)
    const quotaDataStore = useQuotaDataStore()

    useEffect(() => {
        // request api for data
        quotaDataStore.get()
        setLoading(false)
    }, [])

    const handleCreate = (id: string) => {
        console.log(id)
        setVisible(true)
    }

    const tableProps: any = {
        columns: quotaColumns,
        dataSource: quotaDataStore.listData,
        bordered: true,
        size: 'small',
        rowKey: 'id',
        loading,
    }

    const actionData = [
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
            quotaDataStore.create()
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