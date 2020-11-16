import React, { memo } from 'react'
import CreateQuotaSelectTypes from './CreateQuotaSelectTypes';

interface ICreateQuotaProps {
    currentStep: number;
}

const CreateQuota = (props: ICreateQuotaProps) => {
    const { currentStep } = props

    const getComp = () => {
        if (currentStep === 1) {
            return <CreateQuotaSelectTypes />
        }
    }

    const Comp = getComp()
    return <div>
        {Comp}
    </div>
}

export default memo(CreateQuota)