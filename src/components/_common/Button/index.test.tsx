import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ButtonCommon } from './index'

describe('Common components', () => {
  it('Render ButtonCommon', () => {
    const el = render(<ButtonCommon text="test" />)
    expect(el.baseElement).toMatchSnapshot()
  })
})
