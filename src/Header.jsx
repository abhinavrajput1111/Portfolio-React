import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
      <div id="header-wrapper" className="header-wrapper mb-8">
        <div className="box w-5/6 mx-auto ">
          <ul className=" bg-blue-950 text-white flex gap-5 justify-between py-1 px-10 rounded-bl-xl rounded-br-xl">
            <li className="px-5 py-1 hover:bg-cyan-500 rounded-lg cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5 py-1 hover:bg-cyan-500 rounded-lg cursor-pointer">
              <Link to="/Certificates">Certificates</Link>
            </li>
            <li className="px-5 py-1 hover:bg-cyan-500 rounded-lg cursor-pointer">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="px-5 py-1 hover:bg-cyan-500 rounded-lg cursor-pointer">
              <Link to="/Services">Services</Link>
            </li>
            <li className="px-5 py-1 hover:bg-cyan-500 rounded-lg cursor-pointer">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
