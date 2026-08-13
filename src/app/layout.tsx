import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import '@/styles/prism.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Grace Effiong',
    default:
      'Grace Effiong - Software engineer building products from frontend to infrastructure',
  },
  description:
    'I’m Grace, a software engineer based in Nigeria with a frontend foundation, working across backend, cloud and DevOps. I’m also the co-founder of Calabar Tech Community (CTC), where we create opportunities for people in tech.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
