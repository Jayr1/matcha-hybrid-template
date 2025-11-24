import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { MusicPage } from './pages/MusicPage';
import { BlogPage } from './pages/BlogPage';
import { Navigation } from './components/Navigation';


function App() {

  return (
    <BrowserRouter>
      <Navigation />  {/* Navigation sits above Routes, so it appears on every page. */}
      <div style={{ paddingTop: '80px' }}> {/* paddingTop: "80px" around the main content to avoid having the pages hidden behind the nav bar. */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter >

  )
}

export default App
