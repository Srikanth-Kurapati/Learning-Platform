import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ICS from './Courses/ICS';
import Navbar from './Components/Navbar';
import BasicProgrammingConcepts from './Courses/ICS subject/BasicProgrammingConcepts';
import LearnProgLanguage from './Courses/ICS subject/LearnProgLanguage';
import DSA from './Courses/ICS subject/DSA';
import BuildSimpleProgs from './Courses/ICS subject/BuildSimpleProgs';
import BuildComplexProgs from './Courses/ICS subject/BuildComplexProgs';
import CommunicationSkills from './Courses/Communication-Skills';
import IBMMainframe from './Courses/IBM-Mainframe';


import { createContext, useState } from 'react';

export const Exercise = createContext();

function App() {

 const[percentage,setPercentage] = useState(0)

  return (

    <Exercise.Provider value={[percentage,setPercentage]} >
    <div className="App">
      <Router>

      <Navbar/>
          
          <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/CS' element={<ICS/>}/>

            <Route path='/CS/concepts' element={<BasicProgrammingConcepts/> } />

            <Route path='/CS/ProgLanguage' element={<LearnProgLanguage/> } />

            <Route path='/CS/DSA' element={<DSA/> } />

            <Route path='/CS/BuildSimpleProgs' element={<BuildSimpleProgs/> } />

            <Route path='/CS/BuildComplexProgs' element={<BuildComplexProgs/> } />

            <Route path='/communication-skills' element={<CommunicationSkills/>} />

            <Route path='/mainframes' element ={<IBMMainframe/>} />

          </Routes>
      </Router>

    </div>

    </Exercise.Provider>
  );
}

export default App;
