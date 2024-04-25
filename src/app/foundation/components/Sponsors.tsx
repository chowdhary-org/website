import Image from 'next/image'

import { Container } from '@/app/foundation/components/Container'

const sponsors = [
  {
    name: 'AWS',
    logo: 'https://avatars.githubusercontent.com/u/2232217?s=200&v=4',
  },
  {
    name: 'Meta',
    logo: 'https://avatars.githubusercontent.com/u/69631?s=200&v=4',
  },
  {
    name: 'Oswald Labs',
    logo: 'https://avatars.githubusercontent.com/u/21421587?s=200&v=4',
  },
  {
    name: 'DigitalOcean',
    logo: 'https://avatars.githubusercontent.com/u/4650108?s=200&v=4',
  },
  {
    name: 'IBM',
    logo: 'https://avatars.githubusercontent.com/u/1459110?s=200&v=4',
  },
  {
    name: 'IndiaStack',
    logo: 'https://avatars.githubusercontent.com/u/22743981?s=200&v=4',
  },
  {
    name: 'Digio',
    logo: 'https://pbs.twimg.com/profile_images/749875799168151552/xktcSJKK_400x400.jpg',
  },
  {
    name: 'HackerEarth',
    logo: 'https://avatars.githubusercontent.com/u/3033794?s=200&v=4',
  },
  {
    name: 'Ankur Capital',
    logo: 'https://pbs.twimg.com/profile_images/1575015894962798594/HFRN90k7_400x400.jpg',
  },
  {
    name: 'FirstQuadrant',
    logo: 'https://avatars.githubusercontent.com/u/122780401?s=200&v=4',
  },
  {
    name: 'Melangebox',
    logo: 'https://avatars.githubusercontent.com/u/74049849?s=200&v=4',
  },
  {
    name: '91springboard',
    logo: 'https://pbs.twimg.com/profile_images/1229328470976561153/Uf7G0Jt8_400x400.jpg',
  },
  {
    name: 'Unifiers',
    logo: 'https://pbs.twimg.com/profile_images/1593574765477756929/5w7c1MLw_400x400.jpg',
  },
  {
    name: 'iSPIRT',
    logo: 'https://pbs.twimg.com/profile_images/1608100290678652929/zijKK6e8_400x400.png',
  },
  {
    name: 'Shakti',
    logo: 'https://pbs.twimg.com/profile_images/1393178388530040836/IV-1_MGY_400x400.jpg',
  },
  {
    name: 'Pabio',
    logo: 'https://avatars.githubusercontent.com/u/81462859?s=200&v=4',
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="text-primary-900 mx-auto max-w-2xl text-center font-display text-4xl font-bold tracking-tighter sm:text-5xl">
          Collaborating for impact.
        </h2>
        <p className="text-primary-700 mx-auto mt-4 max-w-2xl text-center text-lg tracking-tighter">
          Our partners in previous events, investments, and open source
          projects.
        </p>
        <div className="text-primary-700 mx-auto mt-20 flex max-w-5xl flex-wrap items-center justify-center gap-8 text-center font-bold">
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
