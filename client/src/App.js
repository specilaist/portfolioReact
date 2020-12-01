import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './component/navbar';
// import MainPage from './component/mainPage';
import Projects from './component/projects';
import AboutMe from './component/aboutMe';
import ContactMe from './component/contactMe';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      {/* <Route exact path="/" component={MainPage} /> */}
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/aboutMe" component={AboutMe} />
      <Route exact path="/contactMe" component={ContactMe} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
    </Router>
    
  );
}

export default App;
