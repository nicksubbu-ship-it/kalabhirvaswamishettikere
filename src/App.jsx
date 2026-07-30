import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OnlinePoojaBooking from './pages/OnlinePoojaBooking';
import LiveDarshan from './pages/LiveDarshan';
import About from './pages/About';
import Contact from './pages/Contact';

// Placeholders for other pages
const Placeholder = ({ title }) => (
  <div className="section-padding container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h1 className="text-gradient" style={{ fontSize: '3rem' }}>{title}</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pooja-booking" element={<OnlinePoojaBooking />} />
          <Route path="live-darshan" element={<LiveDarshan />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Catch-all for other 23 requested routes */}
          <Route path="*" element={<Placeholder title="Page Under Construction" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
