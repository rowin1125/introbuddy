import EditDomainCell from 'src/components/Domain/EditDomainCell'

type DomainPageProps = {
  id: string
}

const EditDomainPage = ({ id }: DomainPageProps) => {
  return <EditDomainCell id={id} />
}

export default EditDomainPage
