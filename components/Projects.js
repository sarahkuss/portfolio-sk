export default function Projects() {
  return (
    <section className="text-gray-600 body-font bg-orange-300 bg-opacity-90 mt-10">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-5">
          <div className="lg:w-1/2 w-full mb-0 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Projects
            </h1>
            <div className="h-1 w-20 bg-orange-700 rounded"></div>
          </div>
          {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p> */}
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <a href="https://conservationconnect.net" target="_blank" rel="noreferrer">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/CC.png"
                  alt="content"
                />
              </a>
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Conservation Connect
              </h2>
              <p className="leading-relaxed text-base">
                Full Stack React Web App built using MERN stack and deployed in AWS.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <a href="https://janssenpartners.com" target="_blank" rel="noreferrer">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/jp.png"
                  alt="content"
                />
              </a>
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Janssen Partners
              </h2>
              <p className="leading-relaxed text-base">
                WordPress website built for Janssen Partners using plugins and custom themes.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <a href="https://mpa-coaching-website.web.app/" target="_blank" rel="noreferrer">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/mpa.png"
                  alt="content"
                />
              </a>
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Mary Pat Adams- Coaching
              </h2>
              <p className="leading-relaxed text-base">
                React Website styled using Bootstrap and deployed to GCP.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-center mb-6"
                src="/images/water.jpg"
                alt="content"
              />
              {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Water Tracker
              </h2>
              <p className="leading-relaxed text-base">
                React Native Mobile Application styled using Native Base.
              </p>
            </div>
          </div>
          {/* <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                San Francisco
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                San Francisco
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                San Francisco
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                San Francisco
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
