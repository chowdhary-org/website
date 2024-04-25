import Image from 'next/image'

import { Container } from '@/app/common/Container'

const sponsors = [
  {
    name: 'AWS',
    logo: 'https://avatars.githubusercontent.com/u/2232217?s=200&v=4',
  },
  {
    name: 'GitHub',
    logo: 'https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png',
  },
  {
    name: 'Meta',
    logo: 'https://pbs.twimg.com/profile_images/1453818753880190978/HqrrEcrI_400x400.png',
  },
  {
    name: 'DigitalOcean',
    logo: 'https://pbs.twimg.com/profile_images/1755167733543534592/xEeaRe3u_400x400.jpg',
  },
  {
    name: 'IBM',
    logo: 'https://pbs.twimg.com/profile_images/1677090954350583811/Xy93qVY4_400x400.jpg',
  },
  {
    name: 'IndiaStack',
    logo: 'https://avatars.githubusercontent.com/u/22743981?s=200&v=4',
  },
  {
    name: 'F6S',
    logo: 'https://pbs.twimg.com/profile_images/1613595555506028554/NtANypQl_400x400.jpg',
  },
]

export function Collaborators() {
  return (
    <section id="collaborators" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-bold tracking-tighter text-primary-600 sm:text-5xl">
          Collaborating for impact.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg tracking-tighter text-primary-900">
          Our partners in previous events, investments, and open source
          projects, and the companies we have collaborated with.
        </p>
        <div className="mx-auto mt-20 flex max-w-5xl flex-wrap items-center justify-center gap-8 text-center font-bold text-primary-900">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="space-y-4 text-sm">
              <Image
                src={sponsor.logo}
                alt=""
                width={100}
                height={100}
                className="h-24 w-24 rounded-2xl border shadow"
              />
              <div className="truncate">{sponsor.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
