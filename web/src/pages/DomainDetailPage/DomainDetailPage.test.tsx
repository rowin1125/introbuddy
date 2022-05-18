import { render } from '@redwoodjs/testing/web'

import DomainDetailPage from './DomainDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DomainDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DomainDetailPage />)
    }).not.toThrow()
  })
})
