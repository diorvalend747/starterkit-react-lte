import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  StyledBigUserImage,
  StyledSmallUserImage,
} from '../../../../styles/common';
import {
  UserBody,
  UserFooter,
  UserHeader,
  UserMenuDropdown,
} from '../../../../styles/dropdown-menus';
// import { firebaseAuth } from '../../../../firebase';
// import {} from '../../../../index';
import { useAppSelector } from '../../../../store/store';
import { DateTime } from 'luxon';

const UserDropdown = () => {
  const navigate = useNavigate();
  const [t] = useTranslation();
  // const currentUser = useAppSelector((state) => state.ui.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const logOut = async (event: any) => {
  //   await firebaseAuth.signOut();
  //   event.preventDefault();
  //   setDropdownOpen(false);
  // };

  const navigateToProfile = (event: any) => {
    event.preventDefault();
    setDropdownOpen(false);
    navigate('/profile');
  };

  return (
    <UserMenuDropdown isOpen={dropdownOpen} hideArrow>
      <StyledSmallUserImage
        slot='head'
        src='src/assets/img/user2-160x160.jpg'
        fallbackSrc='/img/default-profile.png'
        alt='User'
        width={25}
        height={25}
        rounded
      />
      <div slot='body'>
        <UserHeader className='bg-primary'>
          <StyledBigUserImage
            src='src/assets/img/user2-160x160.jpg'
            fallbackSrc='/img/default-profile.png'
            alt='User'
            width={90}
            height={90}
            rounded
          />
          <p>John Doe</p>
        </UserHeader>
        <UserBody>
          <div className='row'>
            <div className='col-4 text-center'>
              <Link to='/'>{t('header.user.followers')}</Link>
            </div>
            <div className='col-4 text-center'>
              <Link to='/'>{t('header.user.sales')}</Link>
            </div>
            <div className='col-4 text-center'>
              <Link to='/'>{t('header.user.friends')}</Link>
            </div>
          </div>
        </UserBody>
        <UserFooter>
          <button
            type='button'
            className='btn btn-default btn-flat'
            onClick={navigateToProfile}
          >
            {t('header.user.profile')}
          </button>
          <button
            type='button'
            className='btn btn-default btn-flat float-right'
            onClick={() => {}}
          >
            {t('login.button.signOut')}
          </button>
        </UserFooter>
      </div>
    </UserMenuDropdown>
  );
};

export default UserDropdown;
