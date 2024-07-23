import Link from 'next/link'
import { slug } from 'github-slugger'

import { badgeVariants } from './ui/badge'
interface tagProps {
  tag: string
  current?: boolean
  count?: number
}

export function Tag({ tag, current, count }: tagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? 'default' : 'secondary',
        className: 'no-underline rounded-md',
      })}
      href={`/tags/${slug(tag)}`}
    >
      {tag}
    </Link>
  )
}
