

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Video from './Components/Video';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="row">
        <div className="col-md-8">
          <Video/>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default App;
