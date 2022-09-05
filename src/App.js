import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTask from './components/AddTask';
import ViewALLTask from './components/ViewAllTask';
import Taskbar from './Taskbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Taskbar />
        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/allTask" element={<ViewALLTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
