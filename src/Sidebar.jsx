import HourglassBottomSharpIcon from "@mui/icons-material/HourglassBottomSharp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Person4Icon from "@mui/icons-material/Person4";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export default function Sidebar() {
  return (
    <>
      <div id="sidebar-wrapper" className="sidebar-wrapper w-[22%] mx-5 ">
        <div id="container-wrapper" className="container-wrapper">
          <div
            id="box"
            className="box flex flex-col gap-5  skill_percentage rounded-2xl items-center"
          >
            <div className="mt-3">
              <img src="profile.jpeg" className="w-32 h-32 rounded-lg m-3" />
            </div>

            <h2 className="text-xl font-semibold text-blue-950 hover:text-white">
              {" "}
              Abhinav Rajput{" "}
            </h2>
            <div className="px-5 py-1 rounded-2xl bg-blue-950 text-white font-semibold hover:bg-cyan-400">
              Full Stack Developer
            </div>

            <hr className="border border-t-white w-[70%] " />

            {/* This is the code for sidebar age wagera section */}

            {/* This is the code AGE */}

            <div className="flex justify-evenly gap-5 items-center py-1 px-2  rounded-md my-5 w-5/6">
              <div className="sidebar_left w-[20%] bg-gray-200 rounded-lg">
                <HourglassBottomSharpIcon
                  style={{ fontSize: "2rem" }}
                  className="font-bold text-blue-950 "
                />
              </div>

              <div className="sidebar_right w-[65%]">
                <span className="text-gray-200 text-sm">Age</span>
                <p>24 Years Old</p>
              </div>
            </div>

            {/* This is the code LOCATION */}
            <div className="flex items-center justify-evenly gap-5 py-1 px-2  rounded-md w-5/6">
              <div class="sidebar_left w-[20%] bg-slate-200 rounded-lg">
                <LocationOnIcon
                  style={{ fontSize: "2rem" }}
                  className="font-bold text-blue-950 "
                />
              </div>

              <div className="sidebar_right w-[65%]">
                <span className="text-gray-200 text-sm">Location</span>
                <p>Bulandshahr,India</p>
              </div>
            </div>

            {/* This is the code LOCATION */}

            <div className="flex items-center justify-evenly gap-5 py-1 px-2  rounded-md w-5/6">
              <div class="sidebar_left w-[20%] h-9 bg-slate-200 rounded-lg">
                <Person4Icon
                  style={{ fontSize: "2rem" }}
                  className="font-bold text-blue-950  "
                />
              </div>

              <div className="sidebar_right w-[65%]">
                <span className="text-gray-200 text-sm">Personality Type</span>
                <p>INTJ-T</p>
              </div>
            </div>
            {/*social media*/}
            <div className="flex gap-5 mt-2 mb-5">
              <GitHubIcon
                style={{ fontSize: "2rem" }}
                className="font-bold text-blue-950 hover:text-gray-300"
              />
              <LinkedInIcon
                style={{ fontSize: "2rem" }}
                className="font-bold text-blue-950 hover:text-gray-300"
              />
              <InstagramIcon
                style={{ fontSize: "2rem" }}
                className="font-bold text-blue-950 hover:text-gray-300"
              />
              <XIcon
                style={{ fontSize: "2rem" }}
                className="font-bold text-blue-950 hover:text-gray-300"
              />
            </div>

            {/* Box class end here*/}
          </div>
        </div>
      </div>
    </>
  );
}
