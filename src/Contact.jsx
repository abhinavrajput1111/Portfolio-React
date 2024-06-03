import React, { useState } from "react";

function Contact() {
  const CopyInput = () => {
    const [inputValue, setInputValue] = useState("Abhinav.r.1111@gmail.com");

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleCopyClick = () => {
      navigator.clipboard
        .writeText(inputValue)
        .then(() => {
          alert("Text copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    };

    return (
      <>
        <div
          id="about-wrapper"
          className="w-[80%] h-auto bg-[rgba(239,251,255,0.5)] border-blue-950 p-5 mr-10 rounded-2xl "
        >
          <div id="about-box" className="w-full h-full">
            <div className="box">
              {/*Heading and other div*/}
              <div>
                <h1 className="text-3xl font-semibold text-blue-800">
                  Contact Me
                </h1>
                <div className="w-[20%] rounded-lg skill_percentage px-10 py-1 mt-3"></div>
              </div>
            </div>
            {/*Email*/}

            <div
              id="email"
              className="email flex flex-col items-center gap-2 justify-center bg-[rgba(32,100,122,0.8)] p-5 mx-8 rounded-2xl my-6 video_call"
            >
              <h3 className="text-center text-2xl font-semibold text-white">
                Email:
              </h3>

              <div className="w-[70%] flex justify-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="px-5 py-1 w-[50%] rounded-tl-2xl"
                />

                <button
                  className="px-2 py-1 w-[20%] rounded-br-2xl bg-cyan-500 text-white cursor-pointer hover:bg-blue-950 hover:text-white"
                  onClick={handleCopyClick}
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Video call */}

            <div
              id="video_call"
              className="video_call flex flex-col items-center gap-2 justify-center bg-[rgba(32,100,122,0.8)] p-5 mx-8 rounded-2xl my-6"
            >
              <h3 className="text-center text-2xl font-semibold text-white">
                Schedule Video Call With Me:
              </h3>

              <div className="w-[70%] flex justify-center">
                <i
                  className="fa-solid fa-calendar-days text-cyan-400 video_call"
                  style={{ fontSize: "5rem" }}
                ></i>
              </div>
            </div>

            {/* social icons*/}

            <div
              id="Social_media"
              className="Social_media flex flex-col items-center gap-2 justify-center bg-[rgba(32,100,122,0.8)] p-5 mx-8 rounded-2xl my-6 video_call"
            >
              <h3 className="text-center text-2xl font-semibold text-white">
                Social Medias:
              </h3>

              <div className="w-[70%] flex justify-center gap-8 text-cyan-400 my-3 ">
                <a href="https://github.com/">
                  {" "}
                  <i className="fa-brands fa-github text-5xl hover:text-blue-900"></i>
                </a>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-f text-5xl hover:text-blue-900"></i>
                </a>
                <a href="https://x.com/">
                  <i className="fa-brands fa-square-twitter text-5xl hover:text-blue-900"></i>{" "}
                </a>
                <a href="https://www.linkedin.com/home?originalSubdomain=in">
                  <i className="fa-brands fa-linkedin text-5xl hover:text-blue-900"></i>
                </a>
              </div>
            </div>

            {/* Box end here */}
          </div>
        </div>
      </>
    );
  };

  return <CopyInput />;
}

export default Contact;
