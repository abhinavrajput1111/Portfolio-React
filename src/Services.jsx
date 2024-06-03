function Services() {
  return (
    <>
      <div
        id="about-wrapper"
        className="w-[80%] h-auto bg-[rgba(239,251,255,0.5)] border-blue-950 p-5 mr-10 rounded-2xl "
      >
        <div>
          <h3 className="text-center text-4xl text-blue-900 my-3">Services</h3>
        </div>

        <div className="bg-[rgba(32,100,122,0.8)] p-5 mx-8 rounded-2xl my-6 video_call text-xl text-white">
          <ul className="px-3">
            <li className="my-2 list-disc">
              Highly Optimised Web App Development
            </li>
            <li className="my-2 list-disc">App Development</li>
            <li className="my-2 list-disc">UI / UX</li>
            <li className="my-2 list-disc">Seo Optimisation</li>
            <li className="my-2 list-disc">Code Debugging / Bug Fixing</li>
            <li className="my-2 list-disc">Complete Website Design</li>
            <li className="my-2 list-disc">
              Additional Features integration on a Old website
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="text-lg bg-cyan-500 text-white px-3 py-2 rounded-xl text-center hover:bg-blue-900 ">
            Connect with Me
          </button>
        </div>
      </div>
    </>
  );
}
export default Services;
