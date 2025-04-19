
import { Input } from "../components/input"
import { Textarea } from "../components/textArea"
import { Button } from "../components/button"

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-16 container mx-auto px-4 py-16 md:py-24 bg-[#0a0e14]">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
        CONTACT ME
      </h2>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <Input id="name" placeholder="Your name" type="text" required className="bg-[#151b27] border-gray-700 focus:border-cyan-500 text-white" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <Input id="email" type="email" placeholder="Your email" required className="bg-[#151b27] border-gray-700 focus:border-cyan-500 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
            <Input id="subject" type="text" placeholder="Subject" required className="bg-[#151b27] border-gray-700 focus:border-cyan-500 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
            <Textarea id="message" placeholder="Your message" required rows={6} className="bg-[#151b27] border-gray-700 focus:border-cyan-500 text-white resize-none" />
          </div>
          <Button className="w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 hover:from-cyan-600 hover:to-blue-600 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection