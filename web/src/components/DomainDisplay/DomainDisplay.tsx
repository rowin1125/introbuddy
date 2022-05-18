import { Box, Heading, Text } from '@chakra-ui/react'
import { Domain } from 'types/graphql'

type DomainLayoutProps = {
  domain: Domain
}

const DomainDisplay = ({ domain }: DomainLayoutProps) => (
  <Box boxShadow="2xl" p="8" maxW="50vw">
    <Heading as="h3" mb={4}>
      {domain.name}
    </Heading>
    <Text>{domain.description}</Text>
    <Text>Created at: {domain.createdAt}</Text>
  </Box>
)

export default DomainDisplay
