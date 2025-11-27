import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import MusicPage from './pages/MusicPage';
import { BlogPage } from './pages/BlogPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Contact } from './pages/Contact';


function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[var(--gradient-sky)]">
        <Navigation />
        <main className="flex-1 pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter >

  )
}

export default App
