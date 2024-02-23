import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Message sent',
  description: 'Thanks for contacting me.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for reaching out."
      intro="I've received your message and will get back to you as soon as possible."
    />
  )
}
