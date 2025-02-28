import Header from '../components/header';
import Footer from '../components/footer';
import AppContent from '../components/AppContent';
import Sidebar from '../components/sidebar';

const DefaultLayout = () => {
  return (
    <div className='wrapper'>
      <Header />
      <AppContent />
      <Footer />
      <Sidebar />
    </div>
  );
};

export default DefaultLayout;
