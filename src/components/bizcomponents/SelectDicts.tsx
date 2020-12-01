import React, { memo, useState, useEffect } from 'react'
import { Select } from 'antd';
import { useDicts } from '@/hooks';

const { Option } = Select;

const SelectDicts = (props) => {
    const { dictName, value: _value, onChange, defaultValue, children, ..._props } = props

    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(_value)
    }, [_value])

    const handleChange = (value, option) => {
        onChange && onChange(value, option)
    }

    if (dictName) {
        const dicts = useDicts(dictName)

        return <Select style={{ width: '100%' }} value={value} defaultValue={defaultValue} onChange={(value, option) => handleChange(value, option)} {..._props}>
            {children}
            {
                dicts.map(item => {
                    return <Option key={item.code} value={item.code} _props={...item}>{item.name}</Option>
                })
            }
        </Select>
    }
    return null
}

export default memo(SelectDicts)