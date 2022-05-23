import { db } from 'api/src/lib/db'

export default async () => {
  try {
    const record = await db.domain.createMany({
      data: [
        {
          name: 'Domain 1',
          description:
            'Domain 1 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          createdAt: new Date(),
          userId: '1',
        },
        {
          name: 'Domain 2',
          description:
            'Domain 2 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          createdAt: new Date(),
          userId: '2',
        },
        {
          name: 'Domain 3',
          description:
            'Domain 3 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          createdAt: new Date(),
          userId: '1',
        },
      ],
    })
    console.log(record)
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
