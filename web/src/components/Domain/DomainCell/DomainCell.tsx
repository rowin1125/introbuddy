import type { FindDomainById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Domain from 'src/components/Domain/Domain'

export const QUERY = gql`
  query FindDomainById($id: String!) {
    domain: domain(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Domain not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ domain }: CellSuccessProps<FindDomainById>) => {
  return <Domain domain={domain} />
}
