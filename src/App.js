//import logo from './logo.svg';
import './App.css';

/* import { Grommet, Grid, Heading } from 'grommet';
import { Box,  Text, Nav,  Button, Tip} from 'grommet';
import { grommet } from 'grommet/themes'; */
import Intro from './Intro' 
import AboutMe from './AboutMe'
import Project from './Projects'
import Experience from './Experience'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <Contact />
      <Experience />
      
     
    </div>
  );
}

export default App;
