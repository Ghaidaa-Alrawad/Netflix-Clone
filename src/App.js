import "./App.css";
import Home from "./components/home/Home";
import NavB from "./components/navB/NavB";

import './components/home/Home.css'
import './components/movie/Movie.css'
import './components/navB/NavB.css'
import './components/movieList/MovieList.css'
import './components/modalMovie/ModalMovie.css'

function App() {
  return (
    <div className="App">
      <NavB/>
      <Home />
    </div>
  );
}

export default App;