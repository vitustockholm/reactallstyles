// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
// import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
// import ServicePage from './pages/ServicePage';
// import AboutPage from './pages/AboutPage';
// import TeamMemberPage from './pages/TeamMemberPage';
//Components
// import Header from './components/Header';
// import Footer from './components/Footer';

//adding styles
import './global.css';
////////////////////////////////////////////////////////////////
//BEM
// import Cards from './AddingStylesInCRA/Cards/Cards';

//Css modules
// import Hero from './AddingStylesInCRA/CSSmodules/Hero/Hero';

//Styled -components
// import StyledHero from './AddingStylesInCRA/StyledComponents/StyledHero';
// import CardComponent from './AddingStylesInCRA/Bootstrap/CardComponent';

//importing react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import tas card ernestas
import CardTask from './AddingStylesInCRA/CardTask';
//2 import CardTaskCssModule
import CardTaskCssModule from './AddingStylesInCRA/CSSmodules/CardOnModules/CardTaskCssModule';
//3 styled-component card task
import StyledCardTask from './AddingStylesInCRA/StyledComponents/StyledCardTask';

function App() {
  return (
    <div className='App'>
      {/* <Header /> 
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route path='/about' component={AboutPage} />
          <Route path='/about/:id' component={TeamMemberPage} />

          <Route path='/service' component={ServicePage} />

          <Route path='/contact' component={ContactPage} />
        </Switch>
      </Router>  */}
      {/* <Cards
        sectionTitle='Services'
        cardsArray={[
          {
            title: 'Service1',
            content: 'Serviceonedoing',
            buttonText: 'Learn more',
          },
          {
            title: 'Service2',
            content: 'Serviceonedoing',
            buttonText: 'Learn more',
          },
          {
            title: 'Service3',
            content: 'Serviceonedoing',
            buttonText: 'Learn more',
          },
        ]}  */}

      {/* <Footer /> */}
      {/* <Hero /> */}
      {/* <StyledHero /> */}
      {/* <CardComponent /> */}
      {/* BEMUSENNA ---1-BEM---K O M E N T A S*/}
      <CardTask />
      {/* BEMUSENNA ---2-CSS-MODULES---K O M E N T A S*/}
      <CardTaskCssModule />
      {/* BEMUSENNA ---3-STYLED-COMPONENTS---K O M E N T A S*/}
      <StyledCardTask />
    </div>
  );
}

export default App;
