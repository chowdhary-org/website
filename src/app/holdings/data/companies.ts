export interface Founder {
  name: string
  avatar?: string
  linkedin?: string
}

export interface Company {
  slug: string
  title: string
  label: 'Active' | 'Stealth' | 'Inactive' | 'Exited'
  href?: string
  logo?: string
  summary: string
  description: string | string[]
  founded?: string
  ended?: string
  location?: string
  tags?: string[]
  founders?: Founder[]
}

export const companies: Company[] = [
  {
    slug: 'airweave',
    title: 'Airweave',
    label: 'Active',
    href: 'https://airweave.ai',
    logo: '/holdings/avatars/airweave.jpg',
    summary: 'Open-source context retrieval layer for smarter AI agents',
    description: [
      'Airweave is an open-source AI infrastructure company that provides a context retrieval layer for AI agents. The platform enables AI agents and RAG pipelines to retrieve relevant context from multiple apps and databases in a single request, connecting to productivity tools like Google Drive, Slack, Notion, GitHub, and databases like Postgres to transform their contents into searchable, agent-ready knowledge bases.',
      'Rather than requiring separate integrations for each data source, Airweave continuously syncs information from connected sources and exposes them through a unified search interface. Common use cases include internal knowledge assistants, customer support agents, and multi-source context retrieval across company knowledge bases, cloud drives, and SaaS tools.',
      'Backed by Y Combinator (X25), Airweave raised $6 million in seed funding led by FCVC with participation from LUX Capital, Orange Collective, Pioneer Fund, and notable investors including Shay Banon (Founder of Elastic). The platform offers both an open-source version on GitHub and a hosted platform with SDKs for Python and JavaScript.',
    ],
    founded: '2025',
    location: 'San Francisco, CA',
    tags: ['AI', 'Developer Tools', 'Open Source', 'Y Combinator X25'],
    founders: [
      {
        name: 'Lennert Jansen',
        avatar: '/holdings/avatars/lennert-jansen.jpg',
        linkedin: 'https://www.linkedin.com/in/lennertjansen/',
      },
      {
        name: 'Rauf Akdemir',
        avatar: '/holdings/avatars/rauf-akdemir.jpg',
        linkedin: 'https://www.linkedin.com/in/orhan-rauf-akdemir/',
      },
    ],
  },
  {
    slug: 'firstquadrant',
    title: 'FirstQuadrant',
    label: 'Exited',
    href: 'https://firstquadrant.ai',
    logo: '/holdings/avatars/firstquadrant.jpg',
    summary: 'AI sales platform for B2B teams with human-in-the-loop.',
    description: [
      'FirstQuadrant is an AI sales execution platform that helps founders and revenue teams move faster, stay organized, and close more deals by streamlining behind-the-scenes sales work. The platform encompasses a complete suite of AI tools organized around three pillars: Grow for top-of-funnel expansion through personalized email campaigns, Convert for pipeline management and deal optimization, and Nurture for relationship management and reactivation of inactive prospects.',
      'The platform features advanced AI reasoning to keep deals moving—understanding context, thinking ahead, and supporting reps with the right next steps. Key capabilities include AI Conversations, AI Actions, AI Enrichment, and AI Campaigns, enabling teams to convert more deals, nurture inactive relationships, and grow their pipeline. In June 2024, FirstQuadrant acquired Flike, another AI-powered sales tool, to expand its capabilities.',
      'Backed by Y Combinator (S21) and recognized as #1 Product of the Day on Product Hunt, FirstQuadrant was used by the fastest-growing YC startups. In 2025, the company completed a confidential agreement with a leading AI technology company that recognized long-term strategic value in components of the FirstQuadrant platform and data infrastructure.',
    ],
    founded: '2021',
    ended: '2025',
    location: 'San Francisco, CA',
    tags: ['AI', 'Sales', 'B2B', 'Y Combinator S21'],
    founders: [
      {
        name: 'Carlo Badini',
        avatar: '/holdings/avatars/carlo-badini.jpg',
        linkedin: 'https://www.linkedin.com/in/carlobadini/',
      },
      {
        name: 'Anand Chowdhary',
        avatar: '/holdings/avatars/anand-chowdhary.jpg',
        linkedin: 'https://www.linkedin.com/in/anandchowdhary/',
      },
    ],
  },
  {
    slug: 'langbase',
    title: 'Langbase',
    label: 'Active',
    href: 'https://langbase.com',
    logo: '/holdings/avatars/langbase.jpg',
    summary: 'The most powerful serverless platform for building AI agents.',
    description: [
      'Langbase is building the best AI engineering developer experience for developers. The platform has helped over 100,000 developers from more than 5,000 companies build reliable and infinitely scalable composable AI agents—from prototypes to production without managing a single container.',
      'The serverless platform processes 700+ TB of vector memory and billions of AI agent runs every month. Langbase provides powerful AI primitives including Pipe Agents for building serverless AI agents with tools and memory, AI Memory for automatic RAG with long-term memory, Workflows for multi-step durable agents, and Threads for managing conversation history. With push-to-deploy workflows and architecture designed for real scale, Langbase lets teams ship AI products faster. The platform also launched Command.new, enabling developers to turn prompts into production-ready agents.',
      'Langbase is backed by incredible investors including Tom Preston-Werner (GitHub co-founder), Luca Maestri (Apple CFO), Amjad Masad (Replit CEO), and leaders from Google, Cloudflare, Snyk, Supabase, and Vercel.',
    ],
    founded: '2023',
    location: 'San Francisco, CA',
    tags: ['AI', 'Developer Tools', 'Platform', 'Serverless'],
    founders: [
      {
        name: 'Ahmad Awais',
        avatar: '/holdings/avatars/ahmad-awais.jpg',
        linkedin: 'https://www.linkedin.com/in/MrAhmadAwais/',
      },
    ],
  },
  {
    slug: 'paleon',
    title: 'Paleon',
    label: 'Active',
    href: 'https://www.paleon.io',
    logo: '/holdings/avatars/paleon.jpg',
    summary: 'Know which TikTok Shop creators will sell before you pay them',
    description: [
      'Paleon analyzes over 7,000 TikTok Shop videos to identify the exact formats, scripts, and hooks that drive sales. The platform helps brands brief creators with data, pay flat fees with confidence, and scale from 10 to 200+ engaged creators in 6 months. With one-click OAuth integration and automatic data syncing, brands can connect their TikTok Shop and start gaining insights immediately.',
      'The AI-powered platform automatically transcribes videos, analyzes tones, extracts comments, and identifies winning patterns to create a unique brand map. This transforms creator partnerships from expensive gambles into predictable revenue engines, allowing brands to identify which creators are likely to perform before paying them.',
      'By providing data-driven insights, Paleon breaks the traditional creator churn cycle where unpredictable performance makes brands hesitant to pay upfront fees. Brands can confidently pay per-post incentives, creators stay engaged and post consistently earning both posting incentives and TikTok Shop commissions, and top performers become mentors who recruit and train new creators—creating a self-perpetuating growth engine.',
    ],
    founded: '2023',
    tags: ['AI', 'E-commerce', 'TikTok Shop', 'Creator Economy'],
    founders: [
      {
        name: 'Jelmer Hilhorst',
        avatar: '/holdings/avatars/jelmer-hilhorst.jpg',
        linkedin: 'https://www.linkedin.com/in/jelmerhilhorst/',
      },
      {
        name: 'Sam van Roosmalen',
        avatar: '/holdings/avatars/sam-van-roosmalen.jpg',
        linkedin: 'https://www.linkedin.com/in/sam-van-roosmalen-59bb1a241/',
      },
      {
        name: 'Thijmen Kammeijer',
        avatar: '/holdings/avatars/thijmen-kammeijer.jpg',
        linkedin: 'https://www.linkedin.com/in/thijmenkammeijer/',
      },
    ],
  },
  {
    slug: 'pabio',
    title: 'Pabio',
    label: 'Inactive',
    logo: '/holdings/avatars/pabio.jpg',
    summary:
      'Rent-to-own furniture with personalized interior design in Europe.',
    description: [
      'Pabio is a rent-to-own furniture startup that combines personalized interior design with flexible furniture subscriptions, with a mission to democratize beautiful living. Customers upload their apartment floor plan and photos, and professional interior designers create personalized proposals with photorealistic 3D renders showing how their fully furnished apartment will look. With no upfront costs, customers could rent furniture valued at approximately $20,000 with delivery and installation within 3 weeks.',
      'Furniture is delivered, assembled, and fully insured for a monthly subscription fee—typically under €200 for a one-bedroom apartment. Monthly payments go toward ownership, allowing customers to buy individual pieces or continue renting indefinitely. The sustainable model retrieves furniture when customers move out, refurbishes it, and places it in new apartments at discounted prices.',
      'Backed by Y Combinator (S21) and investors including Swiss Startup Group, Serpentine Ventures, Session.VC, Tomahawk.VC, and Pioneer Fund, Pabio raised $2.2 million in seed funding. As one of the first companies founded in Switzerland to receive Y Combinator investment, Pabio started in Switzerland and expanded to Berlin, Germany in December 2021.',
    ],
    founded: '2020',
    ended: '2022',
    location: 'Zurich, Switzerland',
    tags: ['Furniture', 'Interior Design', 'Rent-to-Own', 'Y Combinator S21'],
    founders: [
      {
        name: 'Carlo Badini',
        avatar: '/holdings/avatars/carlo-badini.jpg',
        linkedin: 'https://www.linkedin.com/in/carlobadini/',
      },
      {
        name: 'Anand Chowdhary',
        avatar: '/holdings/avatars/anand-chowdhary.jpg',
        linkedin: 'https://www.linkedin.com/in/anandchowdhary/',
      },
    ],
  },
  {
    slug: 'oswald-labs',
    title: 'Oswald Labs',
    label: 'Inactive',
    logo: '/holdings/avatars/oswald-labs.jpg',
    summary: 'Accessibility technology for the next billion users',
    description: [
      'Oswald Labs is an award-winning accessibility technology company that builds products for people with disabilities, with a mission to build technology for the next billion users by promoting accessibility and equality. The company started after winning the Code4Impact award at AngelHack Delhi 2016 for building the first web reading tool for people with dyslexia. The flagship product Agastya adds disability-friendly features to websites with a single line of JavaScript, including dyslexia-friendly modes, text-to-speech, translation to 100+ languages, high contrast options, and live chat.',
      "Other products include Shravan, the world's first end-to-end accessible smartphone platform with a patent-pending speech and vibration interface for visually impaired users, seniors, and unlettered populations; Valmiki, a browser extension that adjusts color contrast, typography, and design preferences; and Augmenta11y, an AR app for children with dyslexia that reduces reading time by over 20%.",
      'Founded on August 15, 2016, Oswald Labs has headquarters in New Delhi, India and operations in the Netherlands. All products are free for end users, with Agastya free for websites under 10,000 monthly pageviews. The company contributes 10% of profits to the Oswald Labs Research Fund and runs a free, remote accelerator program for early-stage startups building for underserved populations.',
    ],
    founded: '2016',
    ended: '2020',
    location: 'New Delhi, India',
    tags: ['Accessibility', 'Technology', 'Web'],
    founders: [
      {
        name: 'Anand Chowdhary',
        avatar: '/holdings/avatars/anand-chowdhary.jpg',
        linkedin: 'https://www.linkedin.com/in/anandchowdhary/',
      },
      {
        name: 'Nishant Gadihoke',
        avatar: '/holdings/avatars/nishant-gadihoke.jpg',
        linkedin: 'https://www.linkedin.com/in/nishantgadihoke/',
      },
      {
        name: 'Mahendra Singh Raghuwanshi',
        avatar: '/holdings/avatars/mahendra-singh-raghuwanshi.png',
        linkedin:
          'https://www.linkedin.com/in/mahendra-singh-raghuwanshi-88297a7b/',
      },
    ],
  },
  {
    slug: 'ara',
    title: 'Ara',
    label: 'Inactive',
    logo: '/holdings/avatars/ara.png',
    summary: 'AI assistant that handles meeting scheduling over email',
    description: [
      'Ara is an AI-powered assistant designed to handle meeting scheduling through email. By understanding natural language and calendar availability, Ara can autonomously coordinate meetings between multiple parties, saving time and reducing the back-and-forth typically involved in scheduling.',
      "Ara was built in collaboration with Speakup, a Dutch cloud telephony and VoIP provider founded in 2003 by Florian Overkamp. The project combines Speakup's expertise in communication infrastructure with AI-powered natural language processing to create a seamless scheduling experience. It was developed under O15Y, a venture studio founded in 2019 that builds and incubates technology companies centered around communication.",
      'The assistant integrates with email and calendar systems to understand availability, propose meeting times, and confirm appointments—all through natural conversation. Built on the Staart framework, a Node.js backend starter for SaaS applications written in TypeScript, Ara handles the tedious coordination work so teams can focus on what matters.',
    ],
    founded: '2019',
    ended: '2020',
    location: 'Netherlands',
    tags: ['AI', 'Productivity', 'Scheduling', 'Telecommunications'],
    founders: [
      {
        name: 'Florian Overkamp',
        avatar: '/holdings/avatars/florian-overkamp.jpg',
        linkedin: 'https://www.linkedin.com/in/florianoverkamp/',
      },
      {
        name: 'Anand Chowdhary',
        avatar: '/holdings/avatars/anand-chowdhary.jpg',
        linkedin: 'https://www.linkedin.com/in/anandchowdhary/',
      },
    ],
  },
]

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug)
}

export function getAllCompanySlugs(): string[] {
  return companies.map((company) => company.slug)
}
