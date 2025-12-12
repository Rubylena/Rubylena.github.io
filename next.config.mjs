import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

// Note: rehype-prism cannot be used with Turbopack in Next.js 16
// due to serialization requirements. If MDX files with code blocks are needed,
// consider using rehype-pretty-code or wait for Turbopack support.
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
