import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import ProgrammeDetail from './pages/ProgrammeDetail'
import Admissions from './pages/Admissions'
import Management from './pages/Management'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="academics/programmes/:slug" element={<ProgrammeDetail />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="management" element={<Management />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<NewsArticle />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
