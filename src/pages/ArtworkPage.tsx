import React, { useEffect, useState, Fragment, memo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import selfPortrait from "./images/selfPortrait.png";
import temple from "./images/temple.png";
import scaryGuy from "./images/scaryGuy.png";
import deer from "./images/deer.png";
import soldier from "./images/soldier.png";
import skull from "./images/skull.png";

const ArtworkPage = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const [loading, setLoading] = useState(true);
  // This would normally fetch from an API
  const artworks = [
    {
      id: 1,
      title: "I Cease to Be",
      year: "2024",
      image: selfPortrait,
      dimensions: "8 × 12 in",
      description: "This self-portrait was created using natural outdoor lighting to capture a balanced interplay of light and shadow, highlighting both negative and positive spaces.",
      medium: "Gouache Paint",
    },
    {
      id: 2,
      title: "Kukulcan: Whispers of the Past",
      year: "2022",
      image: temple,
      dimensions: "10 × 8 in",
      description: "This painting captures a stunning landscape view of El Castillo, also known as the Temple of Kukulcan. Located in Chichén Itzá, this historic site holds deep agricultural and cultural significance, reflecting the rich history of the ancient Maya civilization.",
      medium: "Acrylic",
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
      id: 4,
      title: "Blood and Honor",
      year: "2022",
      image: soldier,
      dimensions: "8 × 10 in",
      description: "This is a portrait of a Mayan/Mesoamerican Indian Warrior. Dedicated to my father.",
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
    {
      id: 6,
      title: "A Still Life Study",
      year: "2023",
      image: skull,
      dimensions: "22 × 16 in",
      description: "This piece features a carefully arranged composition of plastic bones, created as part of a still life project.",
      medium: "Charcoal",
    },
];


  const artwork = artworks.find((a) => a.id === Number(id));
  const currentIndex = artworks.findIndex((a) => a.id === Number(id));
  const prevArtwork = currentIndex > 0 ? artworks[currentIndex - 1] : null;
  const nextArtwork =
    currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;
  useEffect(() => {
    if (artwork) {
      setTimeout(() => setLoading(false), 500);
    }
  }, [artwork]);
  if (!artwork) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p>Artwork not found</p>
        <Link to="/gallery" className="text-[#8B0000] mt-4 inline-block">
          Return to gallery
        </Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Artwork Display */}
        <div
          className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
        >
          <div className="mb-8 shadow-sm">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-auto"
            />
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-2xl md:text-3xl mb-1 relative inline-block">
              {artwork.title}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#8B0000]"></span>
            </h1>
            <p className="text-gray-500 font-light mb-6">
              {artwork.year} • {artwork.dimensions}
            </p>
            <p className="font-light italic text-gray-700 mb-12 font-thin">
              Medium: {artwork.medium}
            </p>
            <p className="font-light italic text-gray-700 mb-12">
              {artwork.description}
            </p>
            {/* Navigation Between Artworks */}
            <div className="flex justify-between items-center border-t border-gray-200 pt-8">
              <div>
                {prevArtwork && (
                  <Link
                    to={`/artwork/${prevArtwork.id}`}
                    className="group flex items-center text-sm font-light hover:text-[#8B0000] transition-colors duration-300"
                  >
                    <ArrowLeftIcon
                      size={16}
                      className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Previous
                  </Link>
                )}
              </div>
              <Link
                to="/gallery"
                className="text-sm font-light hover:text-[#8B0000] transition-colors duration-300"
              >
                Back to Gallery
              </Link>
              <div>
                {nextArtwork && (
                  <Link
                    to={`/artwork/${nextArtwork.id}`}
                    className="group flex items-center text-sm font-light hover:text-[#8B0000] transition-colors duration-300"
                  >
                    Next
                    <ArrowRightIcon
                      size={16}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtworkPage;
