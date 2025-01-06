
import { motion } from 'framer-motion';
import img from '../assets/img.jpeg'; // Import your profile image

const Introduction = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={img}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg"
          />
        </motion.div>

        
        <motion.div
          className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I'm <span className="text-indigo-600">Sonika Panth</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
          I'm a Software / Frontend Developer from India. Currently a Computer Science student at MNNIT Allahabad. I'm passionate about programming and developement. In my spare time, I like to read books and write.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
