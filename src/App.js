


import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from './Components/Comments';
import NavBar from './Components/NavBar';
import Suggestion from './Components/Suggestion';
import Video from './Components/Video';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="row">
        <div className="col-md-8">
          <Video/>
          <Comments/>
        </div>
        <div className="col-md-4"></div>
        <Suggestion/>
      </div>
    </div>
  );
}

export default App;
