import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import {Create} from './components/Create'
import Edit from './components/Edit';



function App() {
  return (
    <div className="Container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Edit />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;