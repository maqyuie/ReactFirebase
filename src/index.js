import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contacts from './Components/Pages/Contacts';
import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import {Modal,Button} from 'react-bootstrap'
import Model from './Components/Model';
import FullscreenModel from './Components/FullscreenModel';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Contacts/>
   <Model/>
   <FullscreenModel/>
  </React.StrictMode>
);

