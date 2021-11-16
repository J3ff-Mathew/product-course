import logo from './logo.svg';
import './App.css';
import Products from './component/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navi from './component/Navi';
import Courses from './component/Courses';
import Forms from './component/Forms';
import Enquiries from './component/Enquiries';

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path='/' exact element={<Products />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/form' element={<Forms />} />
        <Route path='/enquiry' element={<Enquiries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
