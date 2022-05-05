import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/home';
import Facilities from './pages/facilities';
import Contact from './pages/contact';
import Rooms from './pages/rooms';
import Room from './pages/room';


function App() {
  return (
    // we need to wrap our routing with BrowserRouter
    <BrowserRouter>
      <Routes>
        {/* First of all we are wrapping all our pages with our layout this way */}
        <Route path="/" element={<Layout/>}>
          {/* Home page will appear as index for path "/" */}
          {/* the index property is important determining what to serve */}
          {/* in path with sharing the same name */}
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="facilities" element={<Facilities/>} />
          <Route path="rooms">
            {/* The detailed looks and reservation will be handled in the  */}
            {/* page called room and the url for this page will be created */}
            {/* dynamically for each room, for example, room with the id of 1 */}
            {/* will be found in the url rooms/1 */}
            <Route path=":id" element={<Room/>} />
            {/* and lastly rendering rooms as index for /rooms */}
            <Route index element={<Rooms/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
