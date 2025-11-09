"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SkillIcon, skillsIcons } from "../utils/skillsIcons";
import { CircleArrowOutUpRight } from "lucide-react";
import { doto, inter } from "../utils/font";

const categories = ["All", "React Native", "Flutter", "Frontend"] as const;
type Category = (typeof categories)[number];

interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  image: string;
  description: string;
  technologies: SkillIcon[];
  link: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "98 Training",
    category: "React Native",
    image: "img/cjs.webp",
    description:
      "98 Training brings you an unrivalled, global-industry standard of training that challenges your potential and turns training into an intrinsic part of your well-being.",
    technologies: [
      skillsIcons.reactNative,
      skillsIcons.typescript,
      skillsIcons.tailwind,
      skillsIcons.redux,
    ],
    link: "https://apps.apple.com/us/app/98-training/id6450190457",
  },
  {
    id: "2",
    title: "Logistics CRM",
    category: "Frontend",
    image: "img/OCI.webp",
    description:
      "Architected a logistics CRM that uses AI to simplify inquiries, rate comparison, shipment tracking, and appointment management in a single intuitive platform.",
    technologies: [
      skillsIcons.react,
      skillsIcons.typescript,
      skillsIcons.tailwind,
      skillsIcons.redux,
    ],
    link: "https://apps.apple.com/us/app/98-training/id6450190457",
  },
  {
    id: "2",
    title: "GEZZIN",
    category: "React Native",
    image: "img/gezzin.webp",
    description:
      "Gezzin is a social platform designed to reconnect and unite families across the globe. Inspired by the meaning of its name—'cousin' in African and 'family' in Dutch—Gezzin helps users build extended family trees, revive lost connections, and promote unity in the digital age.",
    technologies: [
      skillsIcons.reactNative,
      skillsIcons.typescript,
      skillsIcons.tailwind,
      skillsIcons.redux,
    ],
    link: "https://apps.apple.com/us/app/gezzin/id1555230533",
  },
  {
    id: "3",
    title: "CJS",
    category: "Frontend",
    image: "img/cjs.jpg",
    description:
      "CJS is a corporate and fashion jewellery brand crafting elegant pieces since 1922, blending timeless style with modern sophistication.",
    technologies: [
      skillsIcons.html5,
      skillsIcons.css3,
      skillsIcons.javascript,
      skillsIcons.gulp,
      skillsIcons.jekyll,
      skillsIcons.jquery,
    ],
    link: "https://cjs.lk/",
  },
  {
    id: "4",
    title: "Careems",
    category: "Frontend",
    image: "img/Careems.webp",
    description:
      "Careems is a heritage jewellery brand in Sri Lanka, known for fine gemstones and handcrafted pieces since 1890.",
    technologies: [
      skillsIcons.html5,
      skillsIcons.css3,
      skillsIcons.javascript,
      skillsIcons.jquery,
      skillsIcons.gulp,
      skillsIcons.jekyll,
    ],
    link: "https://www.careems.com/",
  },
  {
    id: "5",
    title: "IPOSG",
    category: "React Native",
    image: "img/IPOSG@2x.webp",
    description:
      "one of the only UK based software development companies, becoming the most trusted EPOS applications provider for both the retail and hospitality sectors.",
    technologies: [
      skillsIcons.reactNative,
      skillsIcons.typescript,
      skillsIcons.tailwind,
      skillsIcons.redux,
    ],
    link: "https://iposg.com/en-gb/index.html",
  },
  {
    id: "6",
    title: "Expense Tracker",
    category: "Flutter",
    image: "img/Expense tracker@2x.webp",
    description:
      "Personal Expense Manager App is the perfect tool for taking control of your finances, it allows you to easily track your expenses and learn your spending habits.",
    technologies: [skillsIcons.flutter, skillsIcons.sqlite],
    link: "https://iposg.com/en-gb/index.html",
  },
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Category Navigation */}
      <div className="relative mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-1 sm:gap-2 bg-gray-100 rounded-full p-2 w-fit mx-auto overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 z-10 whitespace-nowrap ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gray-900 rounded-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="wait">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="group cursor-pointer">
              <Link target="_blank" href={item.link} className="block">
                <div className="relative overflow-hidden rounded-2xl bg-[#f2f4f5] aspect-square mb-4 flex items-center justify-center">
                  <img
                    src={`${item.image}`}
                    alt={item.title}
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110  group-hover:rotate-6"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                  {/* Hover overlay with subtle animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <CircleArrowOutUpRight />
                      </div>
                    </div>
                  </div>

                  {/* <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 flex-shrink-0">
                    {item.technologies.map((skills) => (
                        <span key={skills.name} className="bg-white/90 backdrop-blur-sm rounded-full py-2 px-3 text-xs font-medium flex items-center gap-2">
                          {skills.name}
                        </span>
                      ))}
                  </div> */}
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col justify-between max-w-full gap-3 overflow-hidden">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex gap-1 justify-start overflow-x-scroll flex-1">
                      {item.technologies.map((skills) => (
                        <span
                          key={skills.name}
                          className={`bg-black/80 text-white rounded-full py-1.5 px-2 text-xs font-normal flex items-center gap-2 ${inter.className}`}>
                          {skills.name}
                        </span>
                      ))}


                      {/* {item.technologies.map((skills, index) => (
                        <Image
                          key={skills.name + index}
                          src={skills.url}
                          alt={skills.name}
                          width={20}
                          height={20}
                        />
                      ))} */}
                    </div>
                  </div>

                  {/* Fixed height description container */}
                  <div className="h-10 sm:h-12">
                    <p className="text-gray-600 text-sm leading-5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16">
          <p className="text-gray-500 text-lg">
            No items found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
}
