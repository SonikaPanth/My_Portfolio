import './index.css'
import './App.css'
import Introduction from './Components/Introduction'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Qualification from './Components/Qualifications'
import Projects from './Components/Projects'
import Chatbot from './Components/Chatbot'

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Skills />
      <Qualification />
      <Projects />
      <Resume />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
