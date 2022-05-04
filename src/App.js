import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Details from './components/Details';
import Articles from './components/Articles';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Heading />
      <Details />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
