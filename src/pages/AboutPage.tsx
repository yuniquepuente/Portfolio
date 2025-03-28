import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Instagram, ExternalLink } from 'lucide-react'
import { FaTiktok } from "react-icons/fa";


const AboutPage = () => {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100')
            entry.target.classList.remove('translate-y-10', 'opacity-0')
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    return () => {
      fadeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2048&auto=format&fit=crop"
            alt="Artist at work"
            className="w-full h-full object-cover filter grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wider mb-4">
            Yunique Puente
          </h1>
          <div className="w-20 h-[2px] bg-[#8B0000] mx-auto"></div>
        </div>
      </section>
      {/* Introduction Section */}
      <div className="w-full flex justify-center py-20">
  <div className="max-w-xl px-6">
    <h1 className="font-serif text-4xl md:text-5xl text-center tracking-wide mb-6">
      About the Artist
    </h1>
    <div className="w-16 h-[2px] bg-gray-600 mx-auto mb-8"></div>

    <p className="font-serif text-lg text-gray-800 leading-loose first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 ">
      How do you do, fellow art admirers?!  I'm Yunique, a junior in college with a deep appreciation for all things creative. A nice fact about me is that I enjoy going to the movies as often as I can, and you can't forget the popcorn! 

     

    </p>
    

    <p className="font-serif text-lg text-gray-800 leading-loose mt-6 indent-8">
      
      This site is here purely for your enjoyment—whether you're just browsing or thinking about commissioning something down the line.
    </p>

    <p className="font-serif text-lg text-gray-800 leading-loose mt-6 indent-8">
      Painting has always been my main focus, and I've explored a variety of mediums over the years—watercolor, acrylic, gouache, and oil. Lately, though, charcoal has truly captured my heart. There's something about it—raw, beautiful, and just the right amount of messy. It's full of soul, with a kind of gracefully unkempt charm that makes each piece feel alive.

    </p>

    <p className="font-serif text-lg leading-loose mt-6 indent-8 italic text-[#8B0000] text-center">
    "Creativity takes courage."
    </p>
    <p className="font-serif text-lg text-[#8B0000] leading-loose mt-6 indent-8 italic text-right">  
    — Henri Matisse
    </p>
  
  </div>
</div>

      {/* Connect Section */}
      <section
        ref={(el) => (fadeRefs.current[3] = el)}
        className="container mx-auto px-4 py-20 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-600"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 tracking-wide text-[#8B0000]">
            Let's Connect
          </h2>
          <p className="font-light text-gray-700 mb-8">
            I'm always interested in discussing art, potential collaborations,
            or simply sharing perspectives on creative expression.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:yuniquenpuente@gmail.com"
              className="group flex items-center text-sm font-light hover:text-[#8B0000] transition-colors duration-300"
            >
              <Mail size={16} className="mr-2" />
              Email
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#8B0000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a
              href="https://www.instagram.com/nickyysgram"
              className="group flex items-center text-sm font-light hover:text-[#8B0000] transition-colors duration-300"
            >
              <Instagram size={16} className="mr-2" />
              Instagram
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#8B0000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutPage
