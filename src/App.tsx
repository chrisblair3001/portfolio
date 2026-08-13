import { Route, Routes } from 'react-router-dom'
import Bio from './pages/Bio'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Resume from './pages/Resume'
import Thoughts from './pages/Thoughts'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/thoughts" element={<Thoughts />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
