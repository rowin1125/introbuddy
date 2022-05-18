import type { FindDomainQuery, FindDomainQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import DomainDisplay from '../DomainDisplay/DomainDisplay'

export const QUERY = gql`
  query FindDomainQuery($id: String!) {
    domain: domain(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDomainQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  domain,
}: CellSuccessProps<FindDomainQuery, FindDomainQueryVariables>) => {
  return <DomainDisplay domain={domain} />
}
