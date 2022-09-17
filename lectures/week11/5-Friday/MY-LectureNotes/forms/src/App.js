import './App.css';
import Forms from './component/Forms'
// import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'
import FormsClass from './component/FormsClass';


function App() {

  useEffect(() => {
      
    document.title = "Home Page"

}, [])

  return (
    <>
      {/* <Forms /> */}
      Home page

      {/* <ul>
        <li>
          <Link to="/">Home Page</Link>
          <Link to="/about">About</Link>
          <Link to="/forms">Forms</Link>
        </li>
      </ul> */}
    </>
  );
}

export default App;
