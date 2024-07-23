// ./components/tag.tsx

import Link from 'next/link'
import { slug } from 'github-slugger'
import { badgeVariants } from './ui/badge'

const glassColors = [
  'bg-red-500 bg-opacity-30 backdrop-blur-md',
  'bg-blue-500 bg-opacity-30 backdrop-blur-md',
  'bg-green-500 bg-opacity-30 backdrop-blur-md',
  'bg-yellow-500 bg-opacity-30 backdrop-blur-md',
  'bg-purple-500 bg-opacity-30 backdrop-blur-md',
  'bg-pink-500 bg-opacity-30 backdrop-blur-md',
  'bg-teal-500 bg-opacity-30 backdrop-blur-md',
  'bg-orange-500 bg-opacity-30 backdrop-blur-md',
]

function hashString(str: any) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0
  }
  return hash
}

function getColorForTag(tag: any) {
  const index = Math.abs(hashString(tag)) % glassColors.length
  return glassColors[index]
}

interface TagProps {
  tag: string
  current?: boolean
  count?: number
}

export function Tag({ tag, current, count }: TagProps) {
  const colorClass = getColorForTag(tag)

  return (
    <Link
      className={`${badgeVariants({
        variant: current ? 'default' : 'secondary',
        className: 'no-underline rounded-md',
      })} ${colorClass}`}
      href={`/tags/${slug(tag)}`}
    >
      {tag}
    </Link>
  )
}
