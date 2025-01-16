import './index.css'

import './App.css'
import Introduction from './Components/Introduction'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
// import Chatbot from './Components/Chatbot'
import Header from './Components/Header'


import Qualification from './Components/Qualifications'
import Projects from './Components/Projects'
// import bg from './assets/bg.jpg'; //

function App() {
  

  return (
    
    <div
    >
      <Header/>
    <Introduction />
    <Skills />
   <Qualification/>
   <Projects/>
    <Resume />
    <Contact />
    
  </div>
  )
}

export default App
