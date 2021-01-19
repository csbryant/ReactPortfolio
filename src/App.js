import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbars from "./components/Navbar";
import Footer from "./components/Footer";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
        <Route exact path="https://csbryant.github.io/ReactPortfolio/" component={Bio} />
        <Route exact path="https://csbryant.github.io/ReactPortfolio" component={Bio} />
        <Route exact path="https://csbryant.github.io/contact" component={Contact} />
        <Route exact path="https://csbryant.github.io/portfolio" component={Portfolio} />
        <Route exact path="https://csbryant.github.io/" component={Bio} />
        <Route exact path="https://csbryant.github.io/bio" component={Bio} />
        <Route exact path="/ReactPortfolio" component={Bio} />
        <Route exact path="/" component={Bio} />
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
