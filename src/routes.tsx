import Initial from './pages/Initial';
import Login from './pages/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Initial />} />
          <Route path='/login' element={<Login />} />
          <Route path='/criar-conta' element={<CreateAccount />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Router>
    </main>
  );
}