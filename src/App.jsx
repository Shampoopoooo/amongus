import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import DetailPage from './pages/DetailPage.jsx';

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ padding: '20px', borderRight: '1px solid gray' }}>
        <h2>Crewmates App</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create a Crewmate</Link></li>
          <li><Link to="/gallery">Crewmate Gallery</Link></li>
        </ul>
      </nav>
      <main style={{ padding: '20px', flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/crewmates/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}


