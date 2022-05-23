export const schema = gql`
  type Domain {
    id: String!
    name: String!
    userId: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    domains: [Domain!]! @skipAuth
    domain(id: String!): Domain @skipAuth
  }

  input CreateDomainInput {
    name: String!
    description: String!
  }

  input UpdateDomainInput {
    name: String
    description: String
  }

  type Mutation {
    createDomain(input: CreateDomainInput!): Domain! @requireAuth
    updateDomain(id: String!, input: UpdateDomainInput!): Domain! @requireAuth
    deleteDomain(id: String!): Domain! @requireAuth
  }
`
