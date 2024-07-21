import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteConfig } from '@/config/site'

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-12" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.jpg" alt={siteConfig.author} />
            <AvatarFallback>ZY</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Web Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          I am an enthusiastic IT master&apos;s student at UTS, specializing in
          the MERN stack. Driven by a thirst for new challenges and a commitment
          to lifelong learning, I excel in harnessing my passion for technology
          to deliver exceptional outcomes. My positive outlook and dedication to
          excellence fuel my desire to contribute meaningfully and achieve
          remarkable success in the tech world.
        </p>
      </div>
    </div>
  )
}
