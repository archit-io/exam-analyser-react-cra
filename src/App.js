import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarC from './components/navBarC';
import Hero from './components/hero';
import BlockDomain from './components/blockDomain';
import BlockPlan from './components/blockPlan';
import BlockFeatures from './components/blockFeatures';
import BlockShowcase from './components/blockShowcase';

import DashB from './components/charts/dashB';
import TableChart from './components/charts/tableChart';
import Barchart from './components/charts/barChart';
import PlayGroundChart1 from './components/charts/chartComponent';

/*Below are imports for Keyword Analyser*/
import KAnalyserMain from './components/keyword-analyser/kAnalyserMain';
import KAnalyserDropdownBlock from './components/keyword-analyser/kAnalyserDropdownBlock';

/*Below are imports for navbar*/
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/Services';
import Tools from './components/pages/ToolsSelection';
import ContactUs from './components/pages/ContactUs';
import Faq from './components/pages/SignUp';
import SignUp from './components/pages/Marketing';

// import Consulting from './components/pages/Consulting';
import NavBarMain from './components/navBarMain';

import DropDownC from './components/dropDownC';

/*Below are imports for forms*/
//import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import LoginFormAwesome from './components/loginFormAwesome';
import HomePage from './components/homePage';

import { AuthProvider } from "./contexts/AuthContext";
import RegisteredSuccessfully from './components/registeredSuccessfully';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />        
        {/* <Route path='/about-us' component={AboutUs} /> */}
        <Route path='/tools' component={Tools} />
        {/* <Route path='/faq' component={Faq} /> */}
        <Route path='/sign-up' component={RegisterForm} />
        <Route path='/registered-successfully' component={RegisteredSuccessfully} />
        <Route path='/login' component={LoginForm} />
        {/* <Route path='/consulting' component={Consulting} /> */}
        <Route path='/keyword-analyser' component={KAnalyserMain} />
      </Switch>
      {/* <NavBarC />
      <Hero />
      <BlockDomain />
      <BlockPlan />
      <BlockFeatures />
      <BlockShowcase />
      <DashB /> */}
      </AuthProvider>
    </Router>
    
      /* <NavBarC />
      <Hero />
      <BlockDomain />
      <BlockPlan />
      <BlockFeatures />
      <BlockShowcase />
      <DashB />
      <KAnalyserMain /> 
      <RegisterForm />*/
      //<KAnalyserDropdownBlock />
      //<TableChart />
    // <React.Fragment> 
        
    //     <NavBarMain />
      
    // </React.Fragment>
      
    
  );
}

export default App;
