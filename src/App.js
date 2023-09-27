import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from './themes/ThemeContext';
import store from './redux/store';
import RFHeader from './components/Header/RFHeader';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Provider store={store}>
          <Router>
            <RFHeader />
            <Routes>
              <Route exact path="/" element=<LandingPage /> />
              <Route path="/route1" />
              <Route path="/route2" />
              <Route path="/route3" />
            </Routes>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
