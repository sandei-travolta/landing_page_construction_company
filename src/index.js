import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MenuProvider from './context/MenuContext'
import SectionProvider from './context/SectionContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuProvider>
        <SectionProvider>
          <App />
        </SectionProvider>
    </MenuProvider>
  </React.StrictMode>
);


