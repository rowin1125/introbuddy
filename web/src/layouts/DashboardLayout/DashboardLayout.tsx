import {
  Button,
  Container,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
} from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes, navigate } from '@redwoodjs/router'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { client, currentUser } = useAuth()
  console.log('currentUser', currentUser)

  const signIn = async () => {
    await client.auth.signIn({
      provider: 'google',
    })
  }
  const signOut = async () => {
    await client.auth.signOut()
    navigate('/signup')
  }
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
            <ListItem mr={4}>
              <Button onClick={currentUser ? signOut : signIn}>
                {currentUser ? 'Logout' : 'Login'}
              </Button>
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
