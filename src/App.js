import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Create from './screens/Create'
import Event from './screens/Event'

function App() {
  return (
    <div className="bg-[##DDDDDD]">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>

    </div>
  );
}

export default App;
