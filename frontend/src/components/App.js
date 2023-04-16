import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist, CheckPassExist } from '../helper/helper';




//routes
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>,
    element : <CheckPassExist><Quiz /></CheckPassExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>,
    element : <CheckPassExist><Result /></CheckPassExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;