export interface Company {
  slug: string
  title: string
  label: 'Active' | 'Stealth' | 'Inactive'
  href?: string
  summary: string
  description: string
  founded?: string
  location?: string
  tags?: string[]
}

export const companies: Company[] = [
  {
    slug: 'firstquadrant',
    title: 'FirstQuadrant',
    label: 'Active',
    href: 'https://firstquadrant.ai',
    summary:
      'All-in-one AI sales platform for scalable and autonomous B2B sales (YC S21).',
    description:
      'FirstQuadrant is building the future of B2B sales with AI. Their all-in-one platform enables companies to scale their sales operations autonomously, using artificial intelligence to handle prospecting, outreach, and engagement. As a Y Combinator S21 company, FirstQuadrant is at the forefront of transforming how businesses approach sales in the modern era.',
    founded: '2021',
    location: 'San Francisco, CA',
    tags: ['AI', 'Sales', 'B2B', 'YC S21'],
  },
  {
    slug: 'langbase',
    title: 'Langbase',
    label: 'Active',
    href: 'https://langbase.com',
    summary:
      'Composable AI developer platform to ship AI features in minutes, not months.',
    description:
      'Langbase is the composable AI developer platform that empowers developers to ship AI features rapidly. By providing a modular and flexible infrastructure, Langbase enables teams to integrate powerful AI capabilities into their applications in minutes rather than months. The platform abstracts away the complexity of AI development, making it accessible to developers of all skill levels.',
    founded: '2023',
    location: 'San Francisco, CA',
    tags: ['AI', 'Developer Tools', 'Platform'],
  },
  {
    slug: 'paleon',
    title: 'Paleon',
    label: 'Active',
    href: 'https://www.paleon.io',
    summary: 'AI-powered automated dispute resolution for social commerce.',
    description:
      'Paleon leverages artificial intelligence to automate dispute resolution in the social commerce ecosystem. As social commerce continues to grow, the need for efficient and fair dispute resolution becomes critical. Paleon provides a seamless solution that helps both buyers and sellers resolve conflicts quickly and equitably.',
    founded: '2023',
    tags: ['AI', 'E-commerce', 'Social Commerce'],
  },
  {
    slug: 'ai-video-platform',
    title: 'AI video platform',
    label: 'Stealth',
    summary:
      'Generative AI platform for dynamic videos using no-code tool and API.',
    description:
      'This stealth-mode startup is building a generative AI platform that revolutionizes video creation. With both a no-code tool for non-technical users and a powerful API for developers, the platform enables the creation of dynamic, personalized videos at scale. The technology promises to transform how businesses approach video content creation.',
    tags: ['AI', 'Video', 'Generative AI', 'No-Code'],
  },
  {
    slug: 'pabio',
    title: 'Pabio',
    label: 'Inactive',
    summary:
      'Rent-to-own furniture with personalized interior design in Europe (2020–2022).',
    description:
      'Pabio was a pioneering rent-to-own furniture company that offered personalized interior design services across Europe. The company combined the flexibility of furniture rental with the option to own, making quality furniture accessible to more people. Pabio also provided personalized interior design consultations to help customers create their ideal living spaces. The company operated from 2020 to 2022.',
    founded: '2020',
    location: 'Europe',
    tags: ['Furniture', 'Interior Design', 'Rent-to-Own'],
  },
  {
    slug: 'oswald-labs',
    title: 'Oswald Labs',
    label: 'Inactive',
    summary:
      'Accessibility technology company for the next billion users (2016–2020).',
    description:
      'Oswald Labs was an accessibility technology company dedicated to building products for the next billion users. The company developed innovative solutions to make the web and digital products accessible to people with disabilities, including dyslexia, visual impairments, and other conditions. Oswald Labs operated from 2016 to 2020 and made significant contributions to web accessibility.',
    founded: '2016',
    location: 'Global',
    tags: ['Accessibility', 'Technology', 'Web'],
  },
  {
    slug: 'ara',
    title: 'Ara',
    label: 'Inactive',
    summary: 'AI assistant for scheduling meetings over email (2019–2020).',
    description:
      'Ara was an AI-powered assistant designed to handle meeting scheduling through email. By understanding natural language and calendar availability, Ara could autonomously coordinate meetings between multiple parties, saving time and reducing the back-and-forth typically involved in scheduling. The company operated from 2019 to 2020.',
    founded: '2019',
    tags: ['AI', 'Productivity', 'Scheduling'],
  },
]

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug)
}

export function getAllCompanySlugs(): string[] {
  return companies.map((company) => company.slug)
}
