import { Box, Heading } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type DomainLayoutProps = {
  children: React.ReactNode
}

const DomainsLayout = ({ children }: DomainLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <Box display="flex">
          <Heading pr={4} className="rw-heading rw-heading-primary">
            <Link to={routes.home()} className="rw-link">
              Home
            </Link>
          </Heading>
          <Heading className="rw-heading rw-heading-primary">
            <Link to={routes.domains()} className="rw-link">
              Domains
            </Link>
          </Heading>
        </Box>
        <Link to={routes.newDomain()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Domain
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DomainsLayout
