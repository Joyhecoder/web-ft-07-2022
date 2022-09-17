import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Forms from './component/Forms';
import About from './component/About';
import BaseLayout from './component/layout/BaseLayout';
import FormsClass from './component/FormsClass';
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'

//localhost:3000/about/joy
//aboutID = joy
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Router>
      <BaseLayout>
        <Switch>
          <Route path="/" element={<App />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:aboutID" element={<About />} />
          <Route path="/class" element={<FormsClass />} />
        </Switch>
      </BaseLayout>
   </Router>
  
);

