import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import DomainForm from 'src/components/Domain/DomainForm'

const CREATE_DOMAIN_MUTATION = gql`
  mutation CreateDomainMutation($input: CreateDomainInput!) {
    createDomain(input: $input) {
      id
    }
  }
`

const NewDomain = () => {
  const [createDomain, { loading, error }] = useMutation(CREATE_DOMAIN_MUTATION, {
    onCompleted: () => {
      toast.success('Domain created')
      navigate(routes.domains())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createDomain({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Domain</h2>
      </header>
      <div className="rw-segment-main">
        <DomainForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDomain
