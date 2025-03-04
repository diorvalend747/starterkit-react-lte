import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './modules/main/Main';
import { useWindowSize } from './/hooks/useWindowSize';
import { calculateWindowSize } from './/utils/helpers';
import { setWindowSize } from './/store/reducers/ui';
import ReactGA from 'react-ga4';

import Dashboard from './pages/Dashboard';
import Blank from './pages/Blank';
import SubMenu from './pages/SubMenu';
import Profile from './pages/profile/Profile';

// UI Elements
import UiElementGeneral from './pages/ui-elements/general';
import Buttons from './pages/ui-elements/buttons';
import Icons from './pages/ui-elements/icons';
import ModalsAlerts from './pages/ui-elements/modals-alerts';
import NavbarTabs from './pages/ui-elements/navbar-tabs';
import Timeline from './pages/ui-elements/timeline';
import Ribbons from './pages/ui-elements/ribbons';

// Forms
import GeneralForm from './pages/forms/general';
import AdvancedForm from './pages/forms/advance';
import Validation from './pages/forms/validation';

// Tables
import SimpleTable from './pages/tables/simple-tables';

// import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';
// import { setCurrentUser } from './store/reducers/auth';

import { useAppDispatch, useAppSelector } from './store/store';
// import { Loading } from './components/Loading';

const { VITE_NODE_ENV } = import.meta.env;

const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useAppSelector((state) => state.ui.screenSize);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize]);

  useEffect(() => {
    if (location && location.pathname && VITE_NODE_ENV === 'production') {
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname,
      });
    }
  }, [location]);

  // if (isAppLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/sub-menu-2' element={<Blank />} />
          <Route path='/sub-menu-1' element={<SubMenu />} />
          <Route path='/blank' element={<Blank />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/ui-elements/general' element={<UiElementGeneral />} />
          <Route path='/ui-elements/buttons' element={<Buttons />} />
          <Route path='/ui-elements/icons' element={<Icons />} />
          <Route path='/ui-elements/modal-alerts' element={<ModalsAlerts />} />
          <Route path='/ui-elements/navbar-tabs' element={<NavbarTabs />} />
          <Route path='/ui-elements/timeline' element={<Timeline />} />
          <Route path='/ui-elements/ribbons' element={<Ribbons />} />
          <Route path='/forms/general-elements' element={<GeneralForm />} />
          <Route path='/forms/advanced-elements' element={<AdvancedForm />} />
          <Route path='/forms/validation' element={<Validation />} />
          <Route path='/tables/simple-table' element={<SimpleTable />} />
          <Route path='/' element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer
        autoClose={3000}
        draggable={false}
        position='top-right'
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </>
  );
};

export default App;
