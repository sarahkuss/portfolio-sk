import Image from "next/image";
import profilePic from "../public/images/sarahkuss5.png"

export default function Hero() {
  return (
    <section className=" text-gray-600 body-font bg-orange-50 bg-opacity-90 my-3 border-2 border-[#f49d4b] rounded lg:px-30 md:px-20">
      <div className="container flex mx-10 pr-20 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
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
          <div className="flex justify-center ">
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
            {/* <a href="https://www.github.com/sarahkuss" target="_blank" rel="noreferrer">
              <button className="ml-4 inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-[#094615] rounded text-lg">
                Github
              </button>
            </a> */}
          </div>
          <div className="mt-5">
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://github.com/sarahkuss"
                className="ml-3 text-[#094615]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="https://bocacode.com/alumni/software-engineer/sarah-kuss"
                className="ml-3 text-gray-900 inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </a>

              <a
                href="mailto:sarahkussdev@gmail.com"
                className=" text-gray-900 ml-3 inline-flex"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
