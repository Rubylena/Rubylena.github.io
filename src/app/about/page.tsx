import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/graceRuby.jpg'

function SocialLink({
  className,
  href,

  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Grace Effiong. I build interactive and user-friendly applications.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-28">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Grace Effiong. I build interactive and user-friendly
            applications.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I specialize in crafting top-tier web applications. I’m always up
              for a challenge, whether it’s redesigning websites or pioneering
              new platforms.
            </p>
            <p>
              My journey began with a microbiology degree, but fascinating
              detours led me to a fulfilling three-year career in public health.
              Eventually, I smoothly transitioned into a skilled software
              engineer with four years of practical expertise.
            </p>
            <p>
              I hold a degree in Software Engineering from ALX, complemented by
              a Masters in Public Health from the University of Calabar. My
              continuous learning journey includes certifications in React,
              CompTIA Security+, and participation in the React learning program
              by Andela (Meta and PluralSight).
            </p>
            <p>
              Outside of my professional endeavors, I find joy in giving back.
              As a Mentor, I provide valuable career advice, drawing from my
              experiences in navigating the job market and achieving a healthy
              work-life balance. Additionally, as a Co-founder of the Calabar
              Tech Community, I’m deeply involved in guiding aspiring tech
              enthusiasts, facilitating workshops, webinars, and hangouts to
              foster a supportive tech community.
            </p>
            <p>
              Curious about the solutions I’ve built? Explore my projects page.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/Grace_ffiong" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://github.com/Rubylena"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/grace-effiong/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:graceffiong@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              graceffiong@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
