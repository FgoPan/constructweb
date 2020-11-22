import React, { memo } from 'react'
import * as AllIcons from '@ant-design/icons';

interface IIconProps {
    type: string,
    title?: string,
    style?: any,
    onClick?: () => void,
}

const Icon = (props: IIconProps) => {
    const { type, title, style, onClick } = props
    const TIcon = AllIcons[type]
    return TIcon ? <TIcon title={title} onClick={onClick} style={style}/> : null
}

export default memo(Icon)