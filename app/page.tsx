import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn, sortPosts } from '@/lib/utils'
import { posts } from '#site/content'
import Link from 'next/link'
import PostItem from '@/components/post-item'

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-balance">
            Hello, I&apos;,m Jerry
          </h1>
          <p className="max-w-[47rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Welcome to my blog, Building with Next.js 14 & Velite in Markdown
            Style
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
          <Link
            href="/blog"
            className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
          >
            View My Blog
          </Link>
          <Link
            href={siteConfig.links.portfolio}
            target="_blank"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'w-full sm:w-fit'
            )}
          >
            My Portfolio
          </Link>
        </div>
      </section>
      {/* lastest post section */}
      <section className="container max-w-4xl py-3 lg:py-7 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
