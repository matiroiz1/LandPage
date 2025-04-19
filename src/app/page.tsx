
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SkillLogo from '../components/SkillLogo';
import ProjectCard from 'catalogo/components/ProjectCard';
import ContactSection from '../components/ContactSection';
import StudyCard from '../components/StudyCard';


export default function Home() {

  const studies = [
    {
      title: 'Information Systems Engineering',
      description: `2022 - Present (Currently in 4th year)\nUTN - Facultad Regional Mendoza.`,
    },
    {
      title: 'Junior Full Stack Programmer',
      description: `2021 - 2021\nEgg Educación`,
    },
    {
      title: 'Mechanical Technician',
      description: `2015 - 2020\nEscuela Técnico Industrial Emilio Civit`,
    },
  ]

  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website with product catalog and cart functionality.",
      href: "/",
      imageSrc: "/proximamente.png?height=300&width=500",
      tech: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description: "A clean and modern portfolio website showcasing my projects and skills.",
      href: "/",
      imageSrc: "/proximamente.png?height=300&width=500",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Dashboard UI",
      description: "An interactive dashboard with data visualization and user management.",
      href: "/",
      imageSrc: "/proximamente.png?height=300&width=500",
      tech: ["React", "TypeScript", "Tailwind CSS"],
    },
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-13 md:py-24 flex flex-col md:flex-row items-center mt-18">
        <div className="md:w-1/2 space-y-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            SYSTEM ENGINEERING
            <br />
            STUDENT
          </h1>
          <p className="text-lg md:text-xl">
            <b>Matías Roiz</b>, Advanced Systems Engineering Student, passionate about technology and software development.
            I am committed to my professional growth and gaining hands-on experience in the IT industry.
          </p>
          <div>
            <a
              href="/cv/RoizMatiasCV.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-[length:200%_100%] hover:bg-[length:100%_100%] transition-all duration-500 text-white font-medium"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-100 z-1">
            <Image
              src="/inicio.png"
              alt="Matías Roiz"
              width={300}
              height={500}
              className="rounded-lg relative z-0  hidden md:block"
            />
          </div>
        </div>
        {/* Imagen para mobile */}
        <div className="flex justify-center md:hidden">
          <Image
            src="/inicio-mobile.png"
            alt="Imagen Móvil Matías Roiz"
            width={128}
            height={128}
            className="w-50 h-50 rounded-full"
          />
        </div>
      </section>

      {/* Studies Section */}
      <section id="studies" className="scroll-mt-16 container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          MY STUDIES
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <StudyCard key={index} {...study} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-16 container mx-auto px-4 py-16 md:py-24 bg-[#0a0e14]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          SKILLS
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            <SkillLogo src="/java.svg" alt="JAVA" />
            <SkillLogo src="/spring.png" alt="SPRING" />
            <SkillLogo src="/typescript.svg" alt="TYPESCRIPT" />
            <SkillLogo src="/javascript.svg" alt="JAVASCRIPT" />
            <SkillLogo src="/react.svg" alt="REACT" />
            <SkillLogo src="/html-5.svg" alt="HTML" />
            <SkillLogo src="/css.svg" alt="CSS" />
            <SkillLogo src="/tailwind-css.svg" alt="Tailwind CSS" />
            <SkillLogo src="/mysql.svg" alt="MYSQL" />
            <SkillLogo src="/postgresql.svg" alt="POSTGRESQL" />
            <SkillLogo src="/git.svg" alt="GIT" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="scroll-mt-16 container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          PORTFOLIO
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      < footer className="bg-[#080b11] py-8" >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Matías Roiz. All rights reserved.
          </p>
        </div>
      </footer >
    </main >
  )
}
