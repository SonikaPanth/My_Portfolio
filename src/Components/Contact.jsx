const Contact = () => {
  return (
    <section id="contact" className="py-12 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <div className="flex justify-center space-x-6 mt-6">
        <a 
          href="https://www.linkedin.com/in/sonika-panth78/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/SonikaPanth" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 hover:underline"
        >
          GitHub
        </a>
        <a 
          href="mailto:sonikapanth782000@gmail.com" 
          className="text-red-600 hover:underline"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
