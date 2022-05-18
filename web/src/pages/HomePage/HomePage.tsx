import { MetaTags } from '@redwoodjs/web'
import DomainsCell from 'src/components/DomainsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <DomainsCell />
    </>
  )
}

export default HomePage
