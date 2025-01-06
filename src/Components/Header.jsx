

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#introduction" className="hover:text-blue-600">Home</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#resume" className="hover:text-blue-600">Resume</a></li>
            <li><a href="#Qualifications" className="hover:text-blue-600">Qualifications</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
