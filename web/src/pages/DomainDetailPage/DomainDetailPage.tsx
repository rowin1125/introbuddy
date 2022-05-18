import { MetaTags } from '@redwoodjs/web'
import DomainCell from 'src/components/DomainCell'

const DomainDetailPage = ({ id }) => {
  return (
    <>
      <MetaTags title="DomainDetail" description="DomainDetail page" />

      <DomainCell id={id} />
    </>
  )
}

export default DomainDetailPage
