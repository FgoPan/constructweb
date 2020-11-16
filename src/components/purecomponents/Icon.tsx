import React, { memo } from 'react'
import * as AllIcons from '@ant-design/icons';

const Icon = ({ type }) => {
    const TIcon = AllIcons[type]
    return TIcon ? <TIcon /> : null
}

export default memo(Icon)