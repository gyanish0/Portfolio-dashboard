import './App.css';
import HomeLayout from './Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Resume from './Components/Pages/Resume';
import Portfolio from './Components/Pages/Portfolio';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Pages/Blog';
import Page from './Components/Pages/Page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/page' element={<Page />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
