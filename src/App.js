import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import AdminModule from './components/AdminModule/AdminModule';
import MemberModule from './components/MemberModule/MemberModule';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/admin-module' element={<AdminModule />} />
        <Route path='/member-module' element={<MemberModule />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
