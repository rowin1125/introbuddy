import { render } from '@redwoodjs/testing/web'

import DomainDisplay from './DomainDisplay'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DomainDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DomainDisplay />)
    }).not.toThrow()
  })
})
