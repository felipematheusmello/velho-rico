import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import HomeComponent from './pages/home/home';
import ReviewComponent from './pages/review/review';
import PretendenteComponente from './pages/pretendente-page/pretendente-page';
import Video from './pages/video/video';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' Component={HomeComponent}> </Route>
          <Route exact path='/review' Component={ReviewComponent}></Route>
          <Route exact path='/pretendente/:id' Component={PretendenteComponente}></Route>
          <Route exact path='/watch-video' Component={Video}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
