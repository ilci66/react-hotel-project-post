import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/home';
import Facilities from './pages/facilities';
import Contact from './pages/contact';
import Rooms from './pages/rooms';
import Room from './pages/room';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="facilities" element={<Facilities/>} />
          <Route path="rooms">
            <Route path=":name" element={<Room/>} />
            <Route index element={<Rooms/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
