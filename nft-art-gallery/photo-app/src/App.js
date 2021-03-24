import './App.css';
import HomeGallery from './components/Home';
import Photographers from './components/Photographers';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import SignIn from './components/SignIn';


function App () {
  return (
    <div className="App">
      <NavBar />
      <>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/gallery" component={HomeGallery} />
        <Route exact path="/photographers" component={Photographers} />
      </>
    </div>
  );
}

export default App; 