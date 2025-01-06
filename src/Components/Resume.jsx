

const Resume = () => {
  return (
    <section id="resume" className=" py-12 text-center">
      <h2 className="text-3xl font-bold mb-3">My Resume</h2>
      {/* <p className="mt-4">.</p> */}
      <a
        href="/SonikaResume.pdf" // Path relative to the public folder
        download="SonikaResume"
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
