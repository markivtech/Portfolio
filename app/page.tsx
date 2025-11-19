'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Linkedin, Phone, ExternalLink, ArrowRight, Code2, Zap, Cloud } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">VS</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition">Skills</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-900 transition">Education</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Vikram S
                </h1>
                <p className="text-xl text-gray-600">
                  BE | Frontend Dev Learner | AI & Cloud Enthusiast
                </p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Based in Thoothukudi, Tamil Nadu. Recently completed my B.E. at Anna University with a passion for frontend development, AI, and cloud technologies. Skilled in Java, Python, and React, currently exploring AWS and Machine Learning.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gray-900 hover:bg-gray-800"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="tel:9443916981" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                  <Phone className="w-5 h-5 text-gray-900" />
                </a>
                <a href="https://www.linkedin.com/in/vikram056" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                  <Linkedin className="w-5 h-5 text-gray-900" />
                </a>
                <a href="mailto:vikramroman056@gmail.com" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                  <Mail className="w-5 h-5 text-gray-900" />
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image
                  src="/images/profile.png"
                  alt="Vikram S"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Summary Card */}
            <Card className="md:col-span-3 p-8 border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                I recently completed my B.E. at Anna University and have a passion for frontend development, AI, and cloud technologies. 
                I am skilled in Java, Python, and React, and am currently exploring AWS and Machine Learning. I am actively building 
                real-world projects and am open to internships or entry-level tech roles.
              </p>
            </Card>

            {/* Key Focus Areas */}
            <Card className="p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-gray-900" />
                <h3 className="text-xl font-semibold text-gray-900">Frontend Dev</h3>
              </div>
              <p className="text-gray-600">Building responsive, interactive web applications with React and modern JavaScript.</p>
            </Card>

            <Card className="p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-6 h-6 text-gray-900" />
                <h3 className="text-xl font-semibold text-gray-900">Cloud & AI</h3>
              </div>
              <p className="text-gray-600">Exploring AWS services and machine learning to build intelligent applications.</p>
            </Card>

            <Card className="p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-gray-900" />
                <h3 className="text-xl font-semibold text-gray-900">Problem Solving</h3>
              </div>
              <p className="text-gray-600">Strong foundation in programming and user-centric approach to solving real-world problems.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Top Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Top Skills</h3>
              <div className="space-y-4">
                {[
                  'Java',
                  'JavaScript',
                  'C#',
                  'Frontend Development',
                  'Web Development',
                  'Python',
                  'React',
                  'AWS & Cloud Technologies'
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  'Frontend Development',
                  'Mastercard - Cybersecurity Job Simulation',
                  'Web Development Fundamentals'
                ].map((cert) => (
                  <Card key={cert} className="p-4 border border-gray-200 hover:border-gray-300 transition">
                    <p className="text-gray-900 font-medium">{cert}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'JavaScript', 'Java', 'C#', 'Python', 'HTML/CSS', 'AWS', 'Git', 'REST APIs', 'Machine Learning'].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
          
          <div className="space-y-6">
            {/* Bachelor's Degree */}
            <Card className="p-8 border border-gray-200 hover:border-gray-300 transition">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Bachelor of Engineering</h3>
                  <p className="text-lg text-gray-600">Dr. G.U. Pope College of Engineering</p>
                </div>
                <Badge>Completed</Badge>
              </div>
              <p className="text-gray-600 mt-2">Electronics and Communication Engineering (ECE)</p>
              <p className="text-sm text-gray-500 mt-2">November 2021 - May 2025</p>
            </Card>

            {/* High School */}
            <Card className="p-8 border border-gray-200 hover:border-gray-300 transition">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">High School Diploma</h3>
                <p className="text-lg text-gray-600">Geetha School</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">June 2019 - March 2021</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="mailto:vikramroman056@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/vikram056" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="tel:9443916981" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
              <Phone className="w-5 h-5" />
              Call Me
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            <div>
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <p className="text-white font-semibold">vikramroman056@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Phone</p>
              <p className="text-white font-semibold">+91 9443916981</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Location</p>
              <p className="text-white font-semibold">Thoothukudi, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Vikram S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
