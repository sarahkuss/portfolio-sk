import Image from "next/image";
import profilePic from "../public/images/sarahkuss5.png"

export default function Hero() {
  return (
    <section className="container text-gray-600 body-font bg-orange-50 bg-opacity-90 my-3 border-2 border-[#f49d4b] rounded">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt=""
            src={profilePic}
            priority
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Sarah Kuss
          </h1>
          <h2 className="title-font text-3xl mb-4 font-medium">Software Engineer</h2>
          <p className="mb-8 leading-relaxed">
            
          </p>
          <div className="flex justify-center">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-[#094615] rounded text-lg">
                Resume
              </button>
            </a>
            <a href="https://www.linkedin.com/in/sarah-kuss/" rel="noreferrer" target="_blank">
              <button className="ml-4 inline-flex text-gray-700 bg-amber-50 border-0 py-2 px-6 focus:outline-none hover:bg-[#f49d4b] rounded text-lg">
                LinkedIn
              </button>
            </a>
            <a href="https://www.github.com/sarahkuss" target="_blank" rel="noreferrer">
              <button className="ml-4 inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-[#094615] rounded text-lg">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
