import '../styles/App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <Quiz></Quiz>
  },
  {
    path : '/result',
    element : <Result></Result>
  }

]);


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
