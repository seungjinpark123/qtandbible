import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Daily, Edit } from './pages'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/daily" element={<Daily />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
