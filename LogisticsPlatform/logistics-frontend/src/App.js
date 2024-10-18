// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './components/Booking';
import Tracking from './components/Tracking';
import Driver from './components/Driver';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Booking />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/driver" element={<Driver />} />
            </Routes>
        </Router>
    );
}

export default App;
