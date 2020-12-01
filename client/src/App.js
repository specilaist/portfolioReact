import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import MainPage from './component/mainPage';
import Projects from './component/projects';
import AboutMe from './component/aboutMe';
import ContactMe from './component/contactMe';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/aboutMe" component={AboutMe} />
      <Route exact path="/contactMe" component={ContactMe} />
    </Router>
    
  );
}

export default App;
