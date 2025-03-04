import { Link } from 'react-router-dom';
import { MenuItem } from '../../../components';
import { Image } from '@profabric/react-components';
import styled from 'styled-components';
import { SidebarSearch } from '../../../components/sidebar-search/SidebarSearch';
import i18n from '../../../utils/i18n';
import { useAppSelector } from '../../../store/store';

export interface IMenuItem {
  name: string;
  icon?: string;
  path?: string;
  children?: Array<IMenuItem>;
}

export const MENU: IMenuItem[] = [
  {
    name: i18n.t('menusidebar.label.dashboard'),
    icon: 'fas fa-tachometer-alt nav-icon',
    path: '/',
  },
  {
    name: 'UI Elements',
    icon: 'fas fa-tree nav-icon',
    children: [
      {
        name: 'General',
        icon: 'far fa-circle nav-icon',
        path: '/ui-elements/general',
      },
      {
        name: 'Icons',
        icon: 'far fa-circle nav-icon',
        path: '/ui-elements/icons',
      },
      {
        name: 'Buttons',
        icon: 'far fa-circle nav-icon',
        path: '/ui-elements/buttons',
      },
      {
        name: 'Modal & Alerts',
        icon: 'far fa-circle nav-icon',
        path: '/ui-elements/modal-alerts',
      },
      {
        name: 'Navbar & Tabs',
        icon: 'far fa-circle nav-icon',
        path: '/ui-elements/navbar-tabs',
      },
      {
        name: 'Timeline',
        icon: 'far fa-circle nav-icon',
        path: '/ui-elements/timeline',
      },
      {
        name: 'Ribbons',
        icon: 'far fa-circle nav-icon',
        path: '/ui-elements/ribbons',
      },
    ],
  },
  {
    name: 'Forms',
    icon: 'fas fa-edit nav-icon',
    children: [
      {
        name: 'General Elements',
        icon: 'far fa-circle nav-icon',
        path: '/forms/general-elements',
      },
      {
        name: 'Advanced Eleemts',
        icon: 'far fa-circle nav-icon',
        path: '/forms/advanced-elements',
      },
      {
        name: 'Editors',
        icon: 'far fa-circle nav-icon',
        path: '/forms/editors',
      },
      {
        name: 'Validation',
        icon: 'far fa-circle nav-icon',
        path: '/forms/validation',
      },
    ],
  },
  {
    name: 'Tables',
    icon: 'fas fa-table nav-icon',
    children: [
      {
        name: 'Simple Table',
        icon: 'far fa-circle nav-icon',
        path: '/tables/simple-table',
      },
    ],
  },
  {
    name: i18n.t('menusidebar.label.blank'),
    icon: 'fas fa-wrench nav-icon',
    path: '/blank',
  },
];

const StyledBrandImage = styled(Image)`
  float: left;
  line-height: 0.8;
  margin: -1px 8px 0 6px;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

const StyledUserImage = styled(Image)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const MenuSidebar = () => {
  const currentUser = useAppSelector((state) => state.ui.user);
  const sidebarSkin = useAppSelector((state) => state.ui.sidebarSkin);
  const menuItemFlat = useAppSelector((state) => state.ui.menuItemFlat);
  const menuChildIndent = useAppSelector((state) => state.ui.menuChildIndent);

  return (
    <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
      <Link to='/' className='brand-link'>
        <StyledBrandImage
          src='src/assets/img/AdminLTELogo.png'
          alt='AdminLTE Logo'
          width={33}
          height={33}
          rounded
        />
        <span className='brand-text font-weight-light'>AdminLTE 3</span>
      </Link>
      <div className='sidebar'>
        <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
          <div className='image'>
            <StyledUserImage
              src='src/assets/img/user2-160x160.jpg'
              fallbackSrc='/img/default-profile.png'
              alt='User'
              width={34}
              height={34}
              rounded
            />
          </div>
          <div className='info'>
            <Link to={'/profile'} className='d-block'>
              John Doe
            </Link>
          </div>
        </div>

        <div className='form-inline'>
          <SidebarSearch />
        </div>

        <nav className='mt-2' style={{ overflowY: 'hidden' }}>
          <ul
            className={`nav nav-pills nav-sidebar flex-column${
              menuItemFlat ? ' nav-flat' : ''
            }${menuChildIndent ? ' nav-child-indent' : ''}`}
            role='menu'
          >
            {MENU.map((menuItem: IMenuItem) => (
              <MenuItem
                key={menuItem.name + menuItem.path}
                menuItem={menuItem}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default MenuSidebar;
