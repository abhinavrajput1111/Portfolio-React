import "./App.css";

import LanguageIcon from "@mui/icons-material/Language";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import CodeIcon from "@mui/icons-material/Code";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

function About() {
  return (
    <>
      <div
        id="about-wrapper"
        className="w-[80%] h-auto bg-[rgba(239,251,255,0.5)] border-blue-950 p-5 mr-10 rounded-2xl "
      >
        <div id="about-box w-full h-full">
          <div className="box">
            {/*Heading and other div*/}
            <div>
              <h1 className="text-3xl font-semibold text-blue-800">About Us</h1>
              <div className="w-[20%] rounded-lg skill_percentage px-10 py-1 mt-3"></div>
            </div>

            <div
              id="intro-para"
              className="intro-para px-10 my-5 mx-5 bg-[rgba(32,100,122,0.9)] text-gray-100 py-2 rounded-xl"
            >
              <p className="">
                As an enthusiastic MERN stack developer, I bring a solid grasp
                of MongoDB, Express.js, React, and Node.js, complemented by a
                strong foundation in JavaScript. Recently graduated with a
                degree in Computer Science, I have built and deployed several
                full-stack applications, showcasing my ability to create
                responsive and dynamic web solutions. My passion for coding
                drives me to continuously learn and adapt to new technologies.
                Eager to join a forward-thinking team, I am committed to
                leveraging my skills to develop innovative and efficient
                software solutions.
              </p>
            </div>

            <h3 className="text-center text-2xl my-5 font-semibold text-gray-600">
              Primary Focus
            </h3>

            <div id="primary_focus" className="primary_focus my-5 flex gap-7">
              <div id="left" className="left w-[47%] flex flex-col gap-5">
                <div className="flex gap-7 items-center justify-between bg-[rgba(32,100,122,0.9)] p-3 rounded-xl text-gray-100">
                  <div>
                    <LanguageIcon style={{ fontSize: "2rem" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 my-1">
                      Web Design & Development
                    </h3>
                    <p>
                      Creating attractive, easy-to-use websites that work well
                      for businesses and individuals online.
                    </p>
                  </div>
                </div>

                {/*second div of left*/}

                <div className="flex gap-7 items-center justify-between bg-[rgba(32,100,122,0.9)] p-3 rounded-xl text-gray-100">
                  <div>
                    <MobileScreenShareIcon style={{ fontSize: "2rem" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 my-1">
                      Mobile Apps & Games
                    </h3>
                    <p>
                      Creating and developing engaging mobile apps and games for
                      iOS and Android devices.
                    </p>
                  </div>
                </div>
              </div>

              <div id="right" className="right w-[47%] ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-7 items-center justify-between bg-[rgba(32,100,122,0.9)] p-3 rounded-xl text-gray-100">
                    <div>
                      <CodeIcon style={{ fontSize: "2rem" }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100 my-1">
                        Full-Stack Solutions
                      </h3>
                      <p>
                        Creating and developing engaging mobile apps and games
                        for iOS and Android devices.
                      </p>
                    </div>
                  </div>

                  {/*second div in right*/}

                  <div className="flex gap-7 items-center justify-between bg-[rgba(32,100,122,0.9)] p-3 rounded-xl text-gray-100">
                    <div>
                      <AutoGraphIcon style={{ fontSize: "2rem" }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100 my-1">
                        Marketing & SEO
                      </h3>
                      <p>
                        Using SEO and marketing strategies to boost online
                        visibility and promote products or services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*box div ends here*/}

            <h1 className="text-3xl text-center my-3 font-semibold text-gray-500">
              Languages
            </h1>

            <div
              id="about_languages"
              className="about_languages flex justify-between gap-5  w-full h-auto  my-8 bg-[rgba(32,100,122,0.9)] px-10 mr-3 rounded-2xl py-5"
            >
              <div id="language_left" className="language_left w-[48%] ">
                <h3 className="text-2xl font-bold text-center my-3 text-gray-100">
                  Coding Languages
                </h3>

                <div className="px-5">
                  <span className="mx-2 text-white">Javascript</span>
                  <span className="mx-2 text-gray-300">90%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[90%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>

                <div className="px-5">
                  <span className="mx-2 text-white">Typescript</span>
                  <span className="mx-2 text-gray-300">80%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[80%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>

                <div className="px-5">
                  <span className="mx-2 text-white">Tailwind</span>
                  <span className="mx-2 text-gray-300">85%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[85%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>

                <div className="px-5">
                  <span className="mx-2 text-white">CSS</span>
                  <span className="mx-2 text-gray-300">95%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[95%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>

                <div className="px-5">
                  <span className="mx-2 text-white">HTML</span>
                  <span className="mx-2 text-gray-300">90%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[90%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>
              </div>

              {/* languages right div*/}

              <div id="language_right" className="language_right w-[48%] ">
                <h3 className="text-2xl font-bold text-center my-3 text-gray-100">
                  Human Languages
                </h3>

                <div className="px-5">
                  <span className="mx-2 text-white">English</span>
                  <span className="mx-2 text-gray-300">90%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[90%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>

                <div className="px-5">
                  <span className="mx-2 text-white">Hindi</span>
                  <span className="mx-2 text-gray-300">100%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[100%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>

                <div className="px-5">
                  <span className="mx-2 text-white">Sanskrit</span>
                  <span className="mx-2 text-gray-300">50%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[50%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>

                <div className="px-5">
                  <span className="mx-2 text-white">Marathi</span>
                  <span className="mx-2 text-gray-300">60%</span>

                  <div className="w-full bg-blue-950 rounded-xl my-2">
                    <div className="w-[60%] skill_percentage py-1 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
