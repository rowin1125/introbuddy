import type { FindDomains } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Domains from 'src/components/Domain/Domains'

export const QUERY = gql`
  query FindDomains {
    domains {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No domains yet. '}
      <Link to={routes.newDomain()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ domains }: CellSuccessProps<FindDomains>) => {
  return <Domains domains={domains} />
}
