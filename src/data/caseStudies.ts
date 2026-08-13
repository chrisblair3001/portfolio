import caseOnboarding from '../assets/case-onboarding.svg'
import caseSupport from '../assets/case-support.svg'
import caseSecurity from '../assets/case-security.svg'

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  image: string
  bgColor: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'reinventing-enterprise-onboarding',
    title: 'Reinventing Enterprise Onboarding',
    summary:
      'Reduced time-to-value by 40% through a guided, modular onboarding framework for a SaaS platform.',
    image: caseOnboarding,
    bgColor: '#eef2fc',
  },
  {
    slug: 'streamlining-customer-support',
    title: 'Streamlining Customer Support',
    summary:
      'Enhanced customer satisfaction by 30% with an AI-driven support system that resolves queries in real time.',
    image: caseSupport,
    bgColor: '#ecf9f1',
  },
  {
    slug: 'optimizing-data-security',
    title: 'Optimizing Data Security',
    summary:
      'Achieved 50% reduction in data breaches by deploying multi-layered security protocols across all platforms.',
    image: caseSecurity,
    bgColor: '#fdf1e7',
  },
]
