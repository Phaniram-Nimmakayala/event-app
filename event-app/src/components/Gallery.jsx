import React from "react";
import { FiSearch } from "react-icons/fi";

/* Import 8 Images */
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.webp";
import img4 from "../assets/gallery4.avif";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";
import img7 from "../assets/gallery7.jpg";
import img8 from "../assets/gallery8.jpg";

const images = [
  img1, img2, img3, img4,
  img5, img6, img7, img8
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-100 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[#fd6716] font-semibold tracking-widest">
          GALLERY
        </p>

        <h2 className="text-5xl font-bold text-gray-800">
          PHOTOS OF OUR EVENTS
        </h2>
      </div>

      {/* Gallery Grid */}
      <div
        className="
        max-w-7xl mx-auto px-6
        grid grid-cols-2
        md:grid-cols-4
        gap-5
      "
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl group"
          >
            {/* Image */}
            <img
              src={img}
              alt="gallery"
              className="
              w-full h-64 object-cover
              transition duration-700 ease-in-out
              group-hover:scale-110
              "
            />

            {/* Hover Overlay */}
            <div
              className="
              absolute inset-0
              bg-black/50
              opacity-0
              group-hover:opacity-100
              flex items-center justify-center
              transition duration-500
              "
            >
              {/* Magnifier */}
              <div
                className="
                bg-white p-4 rounded-full
                scale-75
                group-hover:scale-100
                transition duration-500
                shadow-lg
                "
              >
                <FiSearch
                  size={24}
                  className="text-[#fd6716]"
                />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Gallery;