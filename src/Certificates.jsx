function Certificates() {
  return (
    <>
      <div
        id="certificates_wrapper"
        className="certificates_wrapper w-[80%] h-auto bg-[rgba(239,251,255,0.5)] border-blue-950 p-5 mr-10 rounded-2xl"
      >
        <div
          id="certificates_box"
          className="certificates_box bg-[rgba(32,100,122,0.8)] p-5 mx-8 rounded-2xl"
        >
          {/*heading*/}

          <div>
            <h1 className="text-3xl font-semibold text-white tracking-wider">
              My Certificates
            </h1>
            <div className="w-[25%] rounded-lg skill_percentage px-10 py-1 mt-3"></div>
          </div>

          <div className="my-3 mt-5 text-xl tracking-wide">
            <h2 className="text-white font-semibold">Technical Competence</h2>

            <ul className="px-8 text-gray-300">
              <li className="list-disc my-2">Node</li>
              <li className="list-disc my-2">React</li>
              <li className="list-disc my-2">Javascript</li>
              <li className="list-disc my-2">Typescript</li>
              <li className="list-disc my-2">Tailwind</li>
              <li className="list-disc my-2">HTML</li>
              <li className="list-disc my-2">CSS</li>
              <li className="list-disc my-2">MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 bg-[rgba(32,100,122,0.8)] p-5 mx-8 rounded-2xl">
          <div className="my-3 mt-5 text-xl tracking-wide">
            <h2 className="text-white font-semibold">Professional Skills</h2>

            <ul className="px-8 text-gray-300">
              <li className="list-disc my-2">Efficient Email Management</li>
              <li className="list-disc my-2">Time And Self Management</li>
              <li className="list-disc my-2">Excel 2013 Intermediate</li>
              <li className="list-disc my-2">Word 2013 Intermediate</li>
              <li className="list-disc my-2">Intercultural Competence</li>
              <li className="list-disc my-2">
                Communication And Complaint Management
              </li>
              <li className="list-disc my-2">
                English Language Professional Level
              </li>
            </ul>
          </div>
        </div>

        {/* Professional skills */}

        {/*heading*/}
      </div>
    </>
  );
}

export default Certificates;
