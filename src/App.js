import { BrowserRouter, Route, Routes, useRouteMatch, useParams } from 'react-router-dom';
import Home from './pages/home';
import Facilities from './pages/facilities';
import Contact from './pages/contact';
import Rooms from './pages/rooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="facilities" element={<Facilities/>}></Route>
        <Route path="rooms" element={<Rooms/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
