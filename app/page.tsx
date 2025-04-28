import Image from "next/image"
import Link from "next/link"
import { Home, Linkedin, Download, ExternalLink, Github, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToolIcon } from "@/components/tool-icon"
import { CompanyLogo } from "@/components/company-logo"
import Matthew from "@/public/matthew.jpg"

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto bg-white pb-10 px-4 sm:px-6">
      {/* Navigation Bar */}
      <div className="flex justify-center py-4 border rounded-lg my-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full ml-2 text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-700"
          >
            <Download className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </Button>
          <Button variant="default" size="sm" className="rounded-full ml-2 bg-black text-white hover:bg-gray-800">
            <span className="hidden sm:inline">Send a link</span>
            <span className="sm:hidden">Link</span>
          </Button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="mt-8 sm:mt-10">
        <div className="flex flex-col items-center">
          <Image
            src={Matthew}
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 text-center">Hey, I'm Matthew Wanjiku.</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">A UI/UX designer and web developer.</h2>

          <div className="flex items-center mt-2 text-gray-600">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-sm sm:text-base">Nairobi, Kenya</span>
          </div>

          <p className="text-center text-gray-600 mt-2 max-w-lg text-sm sm:text-base">
            Crafting seamless experiences and bold visuals. Creative thinker by day, and aspiring innovator by night.
          </p>

          <div className="flex flex-col sm:flex-row mt-4 space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto items-center">
            <Button variant="default" className="rounded-md bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
              Book a Call
            </Button>
            <div className="flex items-center px-3 py-2 bg-emerald-100 text-emerald-800 rounded-md w-full sm:w-auto justify-center sm:justify-start">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                <div className="absolute top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Work Experience</h2>

        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="text-sm sm:text-base text-gray-600">October 2024 - February 2025</div>
            <div className="flex items-center mt-1 sm:mt-0">
              <span className="text-sm sm:text-base">Lead Designer at </span>
              <CompanyLogo name="SokoBeauty" className="ml-1" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="text-sm sm:text-base text-gray-600">May 2024 - September 2024</div>
            <div className="flex items-center mt-1 sm:mt-0">
              <span className="text-sm sm:text-base">Product Designer at </span>
              <CompanyLogo name="MamaPesa" className="ml-1" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="text-sm sm:text-base text-gray-600">January 2024 - April 2024</div>
            <div className="flex items-center mt-1 sm:mt-0">
              <span className="text-sm sm:text-base">UI/UX Designer at </span>
              <CompanyLogo name="ShopOkoa" className="ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Projects I've worked on</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Cheveying Alumni Kenya", type: "Website" },
            { title: "Cheveying Alumni Kenya", type: "App" },
            { title: "Cheveying Alumni Kenya", type: "Website" },
            { title: "Cheveying Alumni Kenya", type: "App" },
          ].map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group relative"
            >
              <div className="bg-gray-200 h-40 relative overflow-hidden">
                {/* Preview overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">Preview Website</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm sm:text-base">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="mt-2 flex items-center flex-wrap">
                  <Link
                    href="#"
                    className="inline-flex items-center text-xs sm:text-sm text-gray-700 hover:text-emerald-600"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Visit Website
                  </Link>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link href="#" className="text-xs sm:text-sm underline text-emerald-600 hover:text-emerald-700">
            View more projects
          </Link>
        </div>
      </div>

      {/* Services */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Services I Offer | Technologies & Tools</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
            <div className="bg-emerald-50 h-24 w-24 mb-3 rounded-md flex items-center justify-center">
              {/* Web Development illustration placeholder */}
              <svg
                viewBox="0 0 24 24"
                className="w-12 h-12 text-emerald-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-medium text-sm sm:text-base">Web Development</h3>
            <div className="flex mt-2 space-x-1">
              {/* Tool icons */}
              <ToolIcon name="JavaScript" />
              <ToolIcon name="TypeScript" />
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
            <div className="bg-emerald-50 h-24 w-24 mb-3 rounded-md flex items-center justify-center">
              {/* UI/UX Design illustration placeholder */}
              <svg
                viewBox="0 0 24 24"
                className="w-12 h-12 text-emerald-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-medium text-sm sm:text-base">UI/UX Design</h3>
            <div className="flex mt-2 space-x-1">
              {/* Tool icons */}
              <ToolIcon name="Figma" />
              <ToolIcon name="Adobe Illustrator" />
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
            <div className="bg-emerald-50 h-24 w-24 mb-3 rounded-md flex items-center justify-center">
              {/* Graphic Design illustration placeholder */}
              <svg
                viewBox="0 0 24 24"
                className="w-12 h-12 text-emerald-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-medium text-sm sm:text-base">Graphic Design</h3>
            <div className="flex mt-2 space-x-1">
              {/* Tool icons */}
              <ToolIcon name="Photoshop" />
              <ToolIcon name="Adobe Illustrator" />
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
            <div className="bg-emerald-50 h-24 w-24 mb-3 rounded-md flex items-center justify-center">
              {/* Branding illustration placeholder */}
              <svg
                viewBox="0 0 24 24"
                className="w-12 h-12 text-emerald-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="font-medium text-sm sm:text-base">Branding</h3>
            <div className="flex mt-2 space-x-1">
              {/* Tool icons */}
              <ToolIcon name="Adobe Illustrator" />
              <ToolIcon name="InDesign" />
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">About Me</h2>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Hello! I'm Matthew, a passionate and creative multidisciplinary designer and developer with a keen eye for
          detail and a love for crafting beautiful and functional designs.
        </p>

        <div className="flex justify-center my-6">
          <Image src="/placeholder.svg?height=120&width=240" alt="Working illustration" width={240} height={120} />
        </div>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          I am a UI/UX designer passionate about crafting intuitive and engaging digital experiences. My approach is
          rooted in user-centered design, creating seamless interfaces that blend aesthetics with functionality.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Beyond UI/UX, I am also a web designer and developer, building modern, responsive websites with a focus on
          performance, usability, and cutting-edge design principles. I bridge creativity with technology to bring ideas
          to life on the web.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          I'm also a visual storyteller, shaping visual identities through branding, illustrations, and creative
          storytelling. My design approach is rooted in strategy, ensuring every project delivers impact and value.
          Explore my work to see how I transform concepts into powerful digital experiences.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Let's get in touch!</h2>

        <div className="flex justify-center my-6">
          <Image src="/placeholder.svg?height=120&width=240" alt="Contact illustration" width={240} height={120} />
        </div>

        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="e.g. John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-200 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-200 text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-200 text-sm"
            ></textarea>
          </div>

          <Button className="w-full bg-[#101720] hover:bg-[#1c2736] text-white py-3">Send message</Button>
        </form>

        <div className="mt-8 text-center text-xs sm:text-sm text-gray-500">
          <p>Copyright © 2025, Matthew Wanjiku.</p>
          <p>All rights reserved.</p>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Instagram className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-4 text-center">
          <Link
            href="#"
            className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center"
          >
            View source code on <Github className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
