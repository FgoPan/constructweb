import React, { memo } from 'react'
import CreateQuotaSelectTypes from './CreateQuotaSelectTypes';
import CreateQuotaByTypeA_Step_A from './CreateTypeByTypeA/CreateQuotaByTypeA_Step_A';
import CreateQuotaByTypeA_Step_B from './CreateTypeByTypeA/CreateQuotaByTypeA_Step_B';

interface ICreateQuotaProps {
    currentStep: number;
}

const CreateQuota = (props: ICreateQuotaProps) => {
    const { currentStep } = props

    const getComp = () => {
        if (currentStep === 1) {
            return <CreateQuotaSelectTypes />
        }
        if (currentStep === 2) {
            return <CreateQuotaByTypeA_Step_A />
        }
        if (currentStep === 3) {
            return <CreateQuotaByTypeA_Step_B />
        }
    }

    const Comp = getComp()
    return <div className="create-quota-modal">
        {Comp}
    </div>
}

export default memo(CreateQuota)