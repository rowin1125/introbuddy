import {
  domains,
  domain,
  createDomain,
  updateDomain,
  deleteDomain,
} from './domains'
import type { StandardScenario } from './domains.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('domains', () => {
  scenario('returns all domains', async (scenario: StandardScenario) => {
    const result = await domains()

    expect(result.length).toEqual(Object.keys(scenario.domain).length)
  })

  scenario('returns a single domain', async (scenario: StandardScenario) => {
    const result = await domain({ id: scenario.domain.one.id })

    expect(result).toEqual(scenario.domain.one)
  })

  scenario('creates a domain', async () => {
    const result = await createDomain({
      input: { name: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a domain', async (scenario: StandardScenario) => {
    const original = await domain({ id: scenario.domain.one.id })
    const result = await updateDomain({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a domain', async (scenario: StandardScenario) => {
    const original = await deleteDomain({ id: scenario.domain.one.id })
    const result = await domain({ id: original.id })

    expect(result).toEqual(null)
  })
})
