import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Counter from './Pages/Counter';
import DigitalClock from './Pages/DigitalClock';
import StopWatch from './Pages/StopWatch';
import ToDoList from './Pages/ToDoList';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/todo-list" element={<ToDoList />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
