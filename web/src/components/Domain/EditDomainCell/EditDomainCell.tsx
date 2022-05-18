import type { EditDomainById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import DomainForm from 'src/components/Domain/DomainForm'

export const QUERY = gql`
  query EditDomainById($id: String!) {
    domain: domain(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`
const UPDATE_DOMAIN_MUTATION = gql`
  mutation UpdateDomainMutation($id: String!, $input: UpdateDomainInput!) {
    updateDomain(id: $id, input: $input) {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ domain }: CellSuccessProps<EditDomainById>) => {
  const [updateDomain, { loading, error }] = useMutation(UPDATE_DOMAIN_MUTATION, {
    onCompleted: () => {
      toast.success('Domain updated')
      navigate(routes.domains())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateDomain({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Domain {domain.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DomainForm domain={domain} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
