import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard1 from '../pages/dashboard/Dashboard1';
import Dashboard2 from '../pages/dashboard/Dashboard2';
import Dashboard3 from '../pages/dashboard/Dashboard3';
import GeneralForm from '../pages/forms/general';
import AdvanceElementsForm from '../pages/forms/advance';
import ValidationForm from '../pages/forms/validation';
import EditorsForm from '../pages/forms/editors';
import GeneralUiElement from '../pages/ui-elements/general';
import UiIcons from '../pages/ui-elements/icons';
import UiButtons from '../pages/ui-elements/buttons';
import UiSliders from '../pages/ui-elements/sliders';
import UiModalAlerts from '../pages/ui-elements/modals-alerts';
import UiNavbarTabs from '../pages/ui-elements/navbar-tabs';
import UiTimeline from '../pages/ui-elements/timeline';
import UiRibbons from '../pages/ui-elements/ribbons';
import SimpleTables from '../pages/tables/simple-tables';
import DataTables from '../pages/tables/data-tables';

const AppContent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/dashboard/v1' element={<Dashboard1 />} />
        <Route path='/dashboard/v2' element={<Dashboard2 />} />
        <Route path='/dashboard/v3' element={<Dashboard3 />} />
        <Route path='/form/general' element={<GeneralForm />} />
        <Route path='/form/advance' element={<AdvanceElementsForm />} />
        <Route path='/form/validation' element={<ValidationForm />} />
        <Route path='/form/editors' element={<EditorsForm />} />
        <Route path='/ui/general' element={<GeneralUiElement />} />
        <Route path='/ui/buttons' element={<UiButtons />} />
        <Route path='/ui/icons' element={<UiIcons />} />
        <Route path='/ui/sliders' element={<UiSliders />} />
        <Route path='/ui/modals' element={<UiModalAlerts />} />
        <Route path='/ui/navbar' element={<UiNavbarTabs />} />
        <Route path='/ui/timeline' element={<UiTimeline />} />
        <Route path='/ui/ribbons' element={<UiRibbons />} />
        <Route path='/tables/simple-tables' element={<SimpleTables />} />
        <Route path='/tables/data-tables' element={<DataTables />} />
      </Routes>
    </Suspense>
  );
};

export default AppContent;
