// import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Footer />
      <Sidebar />
    </div>
  );
};

export default App;
