import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAk from '@/images/logos/ak.svg'
import logoTrust from '@/images/logos/favicon.ico'
import logoIntercity from '@/images/logos/intercity.ico'
import logoShop from '@/images/logos/shopEasy.png'
import logoT40 from '@/images/logos/t40.ico'
import logoLoad from '@/images/logos/load-logo.svg'
import logoMovie from '@/images/logos/movie-logo.png'
import logoFootprint from '@/images/logos/footprint.png'

const projects = [
  {
    name: 'Akopesam',
    description:
      'Innovative and reliable financial application for public servants and private organizations.',
    link: { href: 'https://akopesamcredit.com/', label: 'akopesam.com' },
    logo: logoAk,
    language: 'TypeScript',
    library: 'React',
  },
  {
    name: 'TrustBanc MFB',
    description:
      'Website containing information about TrustBanc MicroFinance services.',
    link: { href: 'https://trustbancmfb.com/', label: 'trustbancmfb.com' },
    logo: logoTrust,
    language: 'TypeScript',
    library: 'React',
  },
  {
    name: 'IntercityNG',
    description:
      'Search and Compare Interstate Bus Tickets and Send Parcels In Nigeria.',

    link: {
      href: 'https://intercity.ng/',
      label: 'intercity.ng',
    },
    logo: logoIntercity,
    language: 'TypeScript',
    library: 'NextJs',
  },
  {
    name: 'TrustBanc Capital',
    description:
      'Secure booking platform for people traveling or sending parcels across cities in Nigeria.',
    link: {
      href: 'https://trustbanccapital.com/',
      label: 'trustbanccapital.com',
    },
    logo: logoTrust,
    language: 'TypeScript',
    library: 'React',
  },
  {
    name: 'FootPrint Mentorship',
    description:
      'Platform designed to enhance interview skills, job readiness, confidence, and network.',
    link: {
      href: 'https://footprinthq.com/',
      label: 'footprinthq.com',
    },
    logo: logoFootprint,
    language: 'TypeScript',
    library: 'React',
  },
  {
    name: 'TrustBanc Asset',
    description:
      'TrustBanc portfolio management website.',
    link: {
      href: 'https://trustbancasset.com/',
      label: 'trustbancasset.com',
    },
    logo: logoTrust,
    language: 'TypeScript',
    library: 'React',
  },
  {
    name: 'T40',
    description: 'T40 Technologies official website.',

    link: {
      href: 'https://www.myt40.com/',
      label: 'myt40.com',
    },
    logo: logoT40,
    language: 'TypeScript',
    library: 'NextJs',
  },
  {
    name: 'TrustBanc WeFinance',
    description: 'Loan application website for WeFinance, a subsidiary of TrustBanc.',

    link: {
      href: 'https://wefinanceng.com/',
      label: 'wefinanceng.com',
    },
    logo: logoTrust,
    language: 'TypeScript',
    library: 'React',
  },
  {
    name: 'Intercity Operator Portal',
    description:
      'Portal for intercity operators to manage all bookings and parcels.',
    link: {
      href: 'https://operator.intercity.ng',
      label: 'operator.intercity.ng',
    },
    logo: logoIntercity,
    language: 'TypeScript',
    library: 'React',
  },
  {
    name: 'Shop Easy',
    description:
      'An E-commerce App that directs users to multiple stores where they can find a particular product.',

    link: {
      href: 'https://shop-easyy.netlify.app/',
      label: 'shop-easy',
    },
    logo: logoShop,
    language: 'JavaScript',
    library: 'React',
  },
  {
    name: 'Load Connect',
    description:
      'Load connect provides load delivery solutions with affordable web and mobile app platforms.',

    link: {
      href: 'https://loading-conect.netlify.app/',
      label: 'loading-connect',
    },
    logo: logoLoad,
    language: 'JavaScript',
    library: 'React',
  },
  {
    name: 'Movie App',
    description:
      'Simple movie application implemented with vanilla JS with minimally HTML.',

    link: {
      href: 'https://potent-movie-app.netlify.app/',
      label: 'movie app',
    },
    logo: logoMovie,
    language: 'JavaScript',
    library: 'React',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <span>Framework/Library: {project.library}</span>
            </p>
            <p className="relative z-10 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <span>Language: {project.language}</span>
            </p>
            <Card.Cta>
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </Card.Cta>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
