import {
  Container,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <header>
        <Heading as="h1">
          <Link to={routes.home()}>Redwood Blog</Link>
        </Heading>
        <nav>
          <List display="flex">
            <ListItem mr={4}>
              <ChakraLink as={Link} to={routes.home()}>
                Home
              </ChakraLink>
            </ListItem>
            <ListItem mr={4}>
              <ChakraLink as={Link} to={routes.dashboard()}>
                Dashboard
              </ChakraLink>
            </ListItem>
          </List>
        </nav>
      </header>
      <Container maxW="container.lg" as="main">
        {children}
      </Container>
    </>
  )
}

export default DashboardLayout
