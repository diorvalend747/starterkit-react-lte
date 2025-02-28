import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/DefaultLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
