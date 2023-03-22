import '../styles/App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  return (
    <Routes>
          <Route path="/" element = {<div>home</div>}/>
          <Route path="/quiz" element= {<div>quiz</div>} />
      </Routes>
  );
}

export default App;
