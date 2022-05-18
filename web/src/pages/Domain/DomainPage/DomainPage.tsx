import DomainCell from 'src/components/Domain/DomainCell'

type DomainPageProps = {
  id: string
}

const DomainPage = ({ id }: DomainPageProps) => {
  return <DomainCell id={id} />
}

export default DomainPage
