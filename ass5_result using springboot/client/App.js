import logo from './logo.svg';
import './App.css';
import FrontPage from './componenets/FrontPage';
import AddStudents from './componenets/AddStudents';
import ShowCertificate from './componenets/ShowStudent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/AddStudents" element={<AddStudents/>}/>
      <Route path="/showCertificate" element={<ShowCertificate/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

