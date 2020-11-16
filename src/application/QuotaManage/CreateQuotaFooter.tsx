import React, { memo } from 'react'
import { Button } from 'antd';

interface ICreateQuotaFooterProps {
    currentStep: number;
    steps: number;
    handleClick: (id: string) => void;
}

const CreateQuotaFooter = (props: ICreateQuotaFooterProps) => {
    const { currentStep, steps, handleClick } = props

    const prevBtnVisible = currentStep === 1 ? true : false
    const nextBtnVisible = currentStep === steps ? true : false
    return <div>
        <Button type="primary" onClick={() => handleClick('prev')} disabled={prevBtnVisible}>上一步</Button>
        <Button type="primary" onClick={() => handleClick('next')} disabled={nextBtnVisible}>下一步</Button>
        <Button type="primary" onClick={() => handleClick('ok')} disabled={!nextBtnVisible}>创建</Button>
    </div>
}

export default memo(CreateQuotaFooter)