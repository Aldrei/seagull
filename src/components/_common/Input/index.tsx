import React from 'react'

import { Container, Input, Label } from './styles'
import { IInputCommon } from './types'

export const InputCommon: React.FC<IInputCommon> = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  defaultValue,
  className,
  disabled,
  ...props
}: IInputCommon): React.ReactElement => {
  return (
    <Container {...props} className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </Container>
  )
}
