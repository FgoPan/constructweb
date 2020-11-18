import React, { memo, useState, useEffect } from 'react'
import { Select } from 'antd';
import { useDicts } from '@/hooks';

const { Option } = Select;

const SelectDicts = (props) => {
    const { dictName, value: _value, onChange } = props

    const [value, setValue] = useState(undefined)

    useEffect(() => {
        setValue(_value)
    }, [_value])

    const handleChange = (value) => {
        onChange && onChange(value)
    }

    if (dictName) {
        const dicts = useDicts(dictName)

        return <div>
            <Select style={{ width: '100%' }} value={value} onChange={(value) => handleChange(value)}>
                {
                    dicts.map(item => {
                        return <Option key={item.code} value={item.code}>{item.name}</Option>
                    })
                }
            </Select>
        </div>
    }
    return null
}

export default memo(SelectDicts)