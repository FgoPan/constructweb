import React, { memo } from 'react'
import { Button } from 'antd';
import { Icon } from '@/components/purecomponents';

const Actions = ({ data }) => {

    return <div>
        {
            data.map(item => {
                const icon = <Icon type={item.icon} />
                return <Button key={item.id} type={item.buttonType || 'default'} icon={icon} onClick={() => item.click && item.click(item.id)}>{item.name}</Button>
            })
        }
    </div>
}

export default memo(Actions)