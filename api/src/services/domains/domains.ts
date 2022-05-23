import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const domains: QueryResolvers['domains'] = () => {
  return db.domain.findMany({
    where: {
      userId: context.currentUser?.sub,
    },
  })
}

export const domain: QueryResolvers['domain'] = ({ id }) => {
  return db.domain.findFirst({
    where: {
      id,
    },
  })
}

export const createDomain: MutationResolvers['createDomain'] = ({ input }) => {
  return db.domain.create({
    data: {
      ...input,
      userId: context.currentUser.sub,
    },
  })
}

export const updateDomain: MutationResolvers['updateDomain'] = ({
  id,
  input,
}) => {
  return db.domain.update({
    data: input,
    where: { id },
  })
}

export const deleteDomain: MutationResolvers['deleteDomain'] = ({ id }) => {
  return db.domain.delete({
    where: { id },
  })
}
