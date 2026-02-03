export interface Founder {
  name: string
  avatar?: string
  twitter?: string
}

export interface Company {
  slug: string
  title: string
  label: 'Active' | 'Stealth' | 'Inactive' | 'Exited'
  href?: string
  summary: string
  description: string | string[]
  founded?: string
  location?: string
  tags?: string[]
  founders?: Founder[]
}

export const companies: Company[] = [
  {
    slug: 'firstquadrant',
    title: 'FirstQuadrant',
    label: 'Exited',
    href: 'https://firstquadrant.ai',
    summary: 'AI sales platform for B2B teams with human-in-the-loop.',
    description: [
      'FirstQuadrant is an AI sales execution platform that helps founders and revenue teams move faster, stay organized, and close more deals by streamlining behind-the-scenes sales work. The platform encompasses a complete suite of AI tools for pipeline management, relationship management, and top-of-the-funnel growth.',
      'The platform features advanced AI reasoning to keep deals moving—understanding context, thinking ahead, and supporting reps with the right next steps. Key capabilities include AI Conversations, AI Actions, AI Enrichment, and AI Campaigns, enabling teams to convert more deals, nurture inactive relationships, and grow their pipeline.',
      'Backed by Y Combinator (S21) and recognized as #1 Product of the Day on Product Hunt, FirstQuadrant is used by the fastest-growing YC startups. In 2025, the company completed a confidential agreement with a leading AI technology company that recognized long-term strategic value in components of the FirstQuadrant platform and data infrastructure.',
    ],
    founded: '2021',
    location: 'San Francisco, CA',
    tags: ['AI', 'Sales', 'B2B', 'Y Combinator'],
    founders: [
      {
        name: 'Carlo Badini',
        avatar: 'https://unavatar.io/twitter/carlobadini',
        twitter: 'https://twitter.com/carlobadini',
      },
      {
        name: 'Anand Chowdhary',
        avatar: 'https://unavatar.io/twitter/AnandChowdhary',
        twitter: 'https://twitter.com/AnandChowdhary',
      },
    ],
  },
  {
    slug: 'langbase',
    title: 'Langbase',
    label: 'Active',
    href: 'https://langbase.com',
    summary: 'The most powerful serverless platform for building AI agents.',
    description: [
      'Langbase is building the best AI engineering developer experience for developers. The platform has helped over 100,000 developers from more than 5,000 companies build reliable and infinitely scalable AI agents—from prototypes to production without managing a single container.',
      'The serverless platform processes 700+ TB of vector memory and billions of AI agent runs every month. With simple primitives for building, push-to-deploy workflows, and architecture designed for real scale, Langbase lets teams ship AI products faster.',
      'Langbase is backed by incredible investors including Tom Preston-Werner (GitHub co-founder), Luca Maestri (Apple CFO), Amjad Masad (Replit CEO), and leaders from Google, Cloudflare, Snyk, Supabase, and Vercel.',
    ],
    founded: '2023',
    location: 'San Francisco, CA',
    tags: ['AI', 'Developer Tools', 'Platform', 'Serverless'],
    founders: [
      {
        name: 'Ahmad Awais',
        avatar: 'https://unavatar.io/twitter/MrAhmadAwais',
        twitter: 'https://twitter.com/MrAhmadAwais',
      },
    ],
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
    slug: 'pabio',
    title: 'Pabio',
    label: 'Inactive',
    summary:
      'Rent-to-own furniture with personalized interior design in Europe (2020–2022).',
    description:
      'Pabio is a pioneering rent-to-own furniture company that offers personalized interior design services across Europe. The company combines the flexibility of furniture rental with the option to own, making quality furniture accessible to more people. Pabio also provides personalized interior design consultations to help customers create their ideal living spaces.',
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
      'Oswald Labs is an accessibility technology company dedicated to building products for the next billion users. The company develops innovative solutions to make the web and digital products accessible to people with disabilities, including dyslexia, visual impairments, and other conditions. Oswald Labs makes significant contributions to web accessibility.',
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
      'Ara is an AI-powered assistant designed to handle meeting scheduling through email. By understanding natural language and calendar availability, Ara can autonomously coordinate meetings between multiple parties, saving time and reducing the back-and-forth typically involved in scheduling.',
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
