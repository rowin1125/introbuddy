import { SimpleGrid } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import type { Domain, DomainsQuery } from 'types/graphql'
import DomainDisplay from '../DomainDisplay/DomainDisplay'

export const QUERY = gql`
  query DomainsQuery {
    domains {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ domains }: CellSuccessProps<DomainsQuery>) => {
  return (
    <SimpleGrid columns={2} spacing={8} mt={8}>
      {domains.map((item: Domain) => (
        <Link key={item.id} to={routes.domainDetail({ id: item.id })}>
          <DomainDisplay domain={item} />
        </Link>
      ))}
    </SimpleGrid>
  )
}
