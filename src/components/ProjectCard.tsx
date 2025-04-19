import { Badge } from "./Badge"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  href: string
  tech: string[]
  imageSrc?: string
}

const ProjectCard = ({ title, description, href, tech, imageSrc }: ProjectCardProps) => {
  return (
    <Link href={href} target="_blank" className="group">
      <div className="bg-[#151b27] rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-cyan-500/50">
        {imageSrc && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={500}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((techItem, index) => (
              <Badge
                key={index}
                className="bg-pink-500/10 border border-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-500"
              >
                {techItem}
              </Badge>
            ))}
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
