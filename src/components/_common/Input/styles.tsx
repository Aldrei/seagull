import { styled } from 'styled-components'

export const Container = styled('div')`
  &.error {
    input {
      border: 1px solid red;
    }
  }
`

export const Input = styled('input')`
  width: 100%;
  min-height: 38px;
  color: #000;
  background: none;
  padding: ${props => props.theme.spaces.md};
  border: 1px solid hsl(0, 0%, 80%);

  &::placeholder {
    color: gray;
  }
`

export const Label = styled('label')``
