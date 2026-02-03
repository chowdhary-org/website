import companiesData from './companies.json'

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
  stealth?: boolean
  stealthCategory?: string
}

export const companies: Company[] = companiesData as Company[]

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug)
}

export function getAllCompanySlugs(): string[] {
  return companies
    .filter((company) => !company.stealth)
    .map((company) => company.slug)
}
