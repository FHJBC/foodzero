import { useState } from 'react'
import './formInput.css'

interface IProps {
    id: number,
    label: string,
    name: string,
    errorMessage: string,
    value: string,
    onChange: any
}

const FormInput = (props: IProps) => {
    const { id, label, value, errorMessage, onChange, ...inputProps } = props

    const [focused, setFocused] = useState(false)

    const handleFocus = (e: any) => {
        setFocused(true)
    }

  return (
    <div className="formInput">
        <label>{label}</label>
        <input 
            {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocus} 
            onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
            focused={focused.toString()} 
            value={value}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput