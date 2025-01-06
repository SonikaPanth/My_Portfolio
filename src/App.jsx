import './index.css'

import './App.css'
import Introduction from './Components/Introduction'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Chatbot from './Components/Chatbot'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Qualification from './Components/Qualifications'
// import bg from './assets/bg.jpg'; //

function App() {
  

  return (
    
    <div
      // className="min-h-screen bg-cover bg-center"
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <Header/>
    <Introduction />
    <Skills />
   <Qualification/>
    <Resume />
    <Contact />
    <Chatbot />
  </div>
  )
}

export default App
