import Link from "next/link";
import { poiretOne, doto, inter } from "./utils/font";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import SkillsRadarChart from "./components/skillsChart";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="h-svh w-full flex items-center">
        <div className="h-10/12 w-full bg-white rounded-lg grid grid-cols-12 items-center relative p-16 pr-10 overflow-hidden">
          <div
            className={`absolute left-10 top-10 font-black uppercase text-2xl ${doto.className}`}>
            Yathavan
          </div>

          <div className="col-span-5 flex flex-col justify-center items-start gap-8 h-full">
            <div
              className={`font-black text-5xl text-gray-900 mb-5 ${poiretOne.className}`}>
              I craft mobile apps with great UX and solid perfomace.
            </div>

            <div
              className={`font-medium italic text-sm text-gray-600 ${inter.className}`}>
              I’m Yathavan, a Mobile Developer focused on React Native and
              Flutter. With a strong frontend background, I create seamless
              experiences across mobile and web.
            </div>

            <button
              className={`bg-gray-900 text-white flex justify-center items-center text-base font-semibold px-10 py-2 rounded-full ${poiretOne.className}`}>
              Hire me
            </button>
          </div>

          <div className="col-span-6 col-start-7 flex flex-col gap-5 h-full justify-start max-h-full overflow-hidden">
            <div className="flex gap-10 justify-end items-start">
              <div className="flex items-center justify-between gap-4 text-white">
                <Link className="bg-black p-2 rounded" href="#" target="_blank">
                  <Github size={18} />
                </Link>
                {/* xx create other social media links */}
                <Link className="bg-black p-2 rounded" href="#" target="_blank">
                  <Linkedin size={18} />
                </Link>
                <Link className="bg-black p-2 rounded" href="#" target="_blank">
                  <Twitter size={18} />
                </Link>
                <Link className="bg-black p-2 rounded" href="#" target="_blank">
                  <Linkedin size={18} />
                </Link>
              </div>

              <a
                href="#"
                className={`bg-gray-900 h-full text-white flex justify-center items-center text-base font-semibold px-12 py-2 gap-2 rounded-full ${poiretOne.className}`}>
                <Download /> Resume
              </a>
            </div>

            <div className="flex flex-col flex-1 mt-5">
              {/* <div
                className={`${doto.className} font-light text-2xl uppercase text-center`}>
                Skills
              </div> */}
              <div className="w-full h-full max-w-9/12 mx-auto flex items-start">
                <SkillsRadarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
