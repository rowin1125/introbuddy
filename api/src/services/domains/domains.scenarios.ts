import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DomainCreateArgs>({
  domain: {
    one: { data: { name: 'String', description: 'String' } },
    two: { data: { name: 'String', description: 'String' } },
  },
})

export type StandardScenario = typeof standard
