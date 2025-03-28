import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

import scaryGuy from "./images/scaryGuy.png";
import deer from "./images/deer.png";
import skull from "./images/skull.png";
import coverArt from "./images/artist.png";

const HomePage = () => {
  const featuredWorks = [
    {
      id: 6,
      title: "A Still Life Study",
      year: "2023",
      image: skull,
      dimensions: "22 × 16 in",
      description: "This piece features a carefully arranged composition of plastic bones, created as part of a still life project.",
      medium: "Charcoal",
    },
    {
      id: 3,
      title: "A Sacrifice",
      year: "2022",
      image: scaryGuy,
      dimensions: "24 × 18 in",
      description: "This artwork holds the most meaning and impact of anything I’ve created so far. Inspired by the history of Kukulcan and the ancient Maya, it reflects the significance of “Maya Blue,” a pigment made from clay and dye. Before sacrifices to Chaak, the rain deity, victims were covered in this pigment, a ritual believed to bring rain during droughts. This painting captures that moment—a helpless victim, covered in vibrant blue and blood, offered in hopes of sustaining the Mayan people. A fun backstory: I created this piece during my senior year of high school, and it was displayed in the hallway alongside other mixed media projects. Unfortunately, it was stolen and never recovered. All I have left are the memories of its creation and this photo.",
      medium: "Acrylic",
    },
    {
      id: 5,
      title: "Tranquil Haven",
      year: "2024",
      image: deer,
      dimensions: "24 × 36 in",
      description: "This painting is a commission for my grandmother, who loves deer. It depicts a buck and a doe peacefully enjoying the view and the water provided by nature. They are surrounded by a vibrant landscape filled with colorful flowers and lush greenery.",
      medium: "Acrylic Paint",
    },
];

  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("translate-y-10", "opacity-0");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      fadeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={coverArt}
            alt="Artist Cover"
            className="w-full h-full object-cover filter grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wider mb-4">
            Yunique Puente
          </h1>
          <div className="w-20 h-[2px] bg-[#8B0000] mx-auto mb-6"></div>
          <p className="font-light text-white/90 max-w-lg mx-auto text-sm md:text-base tracking-wide">
          A curated collection of personal expression. Each piece reflects quiet moments, subtle emotion, and the beauty found in imperfection.
          </p>
          <Link
            to="/gallery"
            className="inline-block mt-8 px-8 py-3 border border-white/70 text-white hover:bg-white/10 transition-colors duration-300 text-sm tracking-wider"
          >
            Explore Gallery
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => (fadeRefs.current[0] = el)}
        className="container mx-auto px-4 py-20 md:py-28 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 tracking-wide text-[#8B0000]">
            The Art of Stillness
          </h2>
          <p className="font-light text-gray-700 mb-6 leading-relaxed">
          Amid all the noise and motion, there's meaning in what’s left unsaid. My work captures the tension between presence and absence — the raw, unfiltered edges of a fleeting moment.

          </p>
          <p className="font-light text-gray-700 leading-relaxed">
          These pieces don’t ask for your attention — they challenge you to sit with them. To confront stillness. To find honesty in simplicity, and clarity in quiet.
          </p>
        </div>
      </section>

      {/* Featured Works */}
      <section
        ref={(el) => (fadeRefs.current[1] = el)}
        className="container mx-auto px-4 py-16 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
      >
        <h2 className="font-serif text-2xl md:text-3xl mb-12 tracking-wide text-center text-[#8B0000]">
          Featured Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <Link key={work.id} to={`/artwork/${work.id}`} className="group block">
              <div className="overflow-hidden mb-4 border-2 border-[#8B0000]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg mb-1 group-hover:text-[#8B0000] transition-colors duration-300">
                {work.title}
              </h3>
              <p className="text-sm font-light text-gray-500">{work.year}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center group text-sm font-light hover:text-[#8B0000] transition-colors duration-300"
          >
            View All Works
            <ArrowRightIcon
              size={16}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

     
        {/* Quote Section */}
        <section
        ref={(el) => {
            fadeRefs.current[2] = el as HTMLDivElement; // Explicitly cast `el` to `HTMLDivElement`
        }}
        className="container mx-auto px-4 py-20 md:py-28 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-600"
        >
        <div className="max-w-2xl mx-auto text-center">
            <blockquote className="font-serif text-xl md:text-2xl italic text-[#8B0000]">
            "There's a crack in everything; that's how the light gets in." 
            </blockquote>
            <p className="mt-4 text-sm font-light text-gray-500">— Leonard Cohen</p>
        </div>
        </section>



    </div>
  );
};

export default HomePage;
