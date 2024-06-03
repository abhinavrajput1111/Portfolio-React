import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import About from "./About";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Services from "./Services";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex gap-6">
        <Sidebar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />{" "}
        </Routes>
      </div>
    </>
  );
}
