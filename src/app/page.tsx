import Link from "next/link";
import { poiretOne, doto, inter } from "./utils/font";
import { Download, Github, GithubIcon, Linkedin, Twitter } from "lucide-react";
import SkillsRadarChart from "./components/skillsChart";

export default function Home() {
  return (
    <div className="container mx-auto p-4 lg:py-0 xl:p-0">
      <div className="h-full lg:h-svh md:max-h-full w-full flex md:items-center lg:py-4">
        <div className="h-full xl:h-10/12 p-4 sm:px-8 md:px-10 xl:px-16 sm:py-10 w-full bg-white rounded-lg grid grid-cols-12 items-center overflow-hidden">
          <div className="col-span-12 flex flex-wrap gap-4 gap-y-3 sm:gap-0 items-start flex-col sm:flex-row">
            <div
              className={`font-semibold uppercase text-3xl ${doto.className} order-1 sm:order-none`}>
              Yathavan
            </div>
            <div className="flex gap-4 md:gap-10 justify-between sm:justify-end items-center sm:items-start w-full sm:w-auto sm:flex-1">
              <div className="flex items-center justify-between gap-2 sm:gap-4 text-white">
                <Link
                  className="bg-gray-900 p-2 sm:p-2.5 rounded"
                  href="https://stackoverflow.com/users/3702886/yathavan"
                  target="_blank">
                    <svg fill="white" width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"/></svg>
                </Link>

                <Link
                  className="bg-gray-900 p-2 sm:p-2.5 rounded"
                  href="https://play.google.com/store/apps/developer?id=yathavan"
                  target="_blank">
                  <svg fill="white" width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                </Link>
                <Link
                  className="bg-gray-900 p-2 sm:p-2.5 rounded"
                  href="https://www.linkedin.com/in/yathavancom/"
                  target="_blank">
                  <Linkedin size={18} />
                </Link>
                <Link
                  className="bg-gray-900 p-2 sm:p-2.5 rounded"
                  href="https://github.com/yathu"
                  target="_blank">
                  <Github size={18} />
                </Link>
              </div>

              <a
                href="/Yathavan-Mobile-Dev.pdf"
                target="_blank"
                className={`bg-gray-900 text-white flex justify-center items-center text-base font-semibold px-8 py-2 gap-2 rounded-full ${poiretOne.className}`}>
                <Download size={18} /> Resume
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 mt-4 sm:mt-7 flex flex-col justify-center items-start gap-8 md:h-full">
            <div
              className={`font-black text-3xl sm:text-5xl text-left text-gray-900 mb-0 sm:mb-5 ${poiretOne.className}`}>
              I craft mobile apps with great UX and solid perfomace.
            </div>

            <div
              className={`font-medium italic text-sm text-gray-500 leading-[1.5] ${inter.className}`}>
              I’m Yathavan, a Mobile Developer focused on React Native and
              Flutter. With a strong frontend background, I create seamless
              experiences across mobile and web.
            </div>

            <a href="mailto:yathavancom@gmail.com"
              className={`bg-gray-900 text-white flex justify-center items-center text-base font-semibold px-10 py-2 rounded-full w-full sm:w-auto ${poiretOne.className}`}>
              Hire me
            </a>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col md:items-end gap-5 md:h-full pt-12 sm:pt-16 md:pt-0 justify-start max-h-full overflow-hidden">
            <div className="w-full md:h-full lg:max-w-9/12 flex items-center">
              <SkillsRadarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
